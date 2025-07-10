import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
    },
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Save to storage
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      try {
        const transporter = createTransporter();
        await transporter.sendMail({
          from: process.env.SMTP_USER || process.env.EMAIL_USER,
          to: "abubakarazeem32@gmail.com",
          subject: `Portfolio Contact: ${validatedData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I will get back to you soon.",
        id: contact.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Download CV endpoint
  app.get("/api/download-cv", (req, res) => {
    // Path to CV file in public folder
    const cvPath = path.join(process.cwd(), 'client', 'public', 'Abu_Bakar_CV.pdf');
    
    // Check if file exists
    if (fs.existsSync(cvPath)) {
      res.download(cvPath, 'Abu_Bakar_CV.pdf', (err) => {
        if (err) {
          console.error('CV download error:', err);
          res.status(500).json({ 
            success: false, 
            message: "Error downloading CV" 
          });
        }
      });
    } else {
      res.status(404).json({ 
        success: false, 
        message: "CV file not found" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
