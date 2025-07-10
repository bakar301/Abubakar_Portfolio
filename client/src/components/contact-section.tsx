import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to contribute to your team as a Python Developer. Let's discuss opportunities!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">abubakarazeem32@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+92 302 4488403</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Lahore, Pakistan</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/abubakarazeem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/abubakarazeem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:abubakarazeem32@gmail.com"
                className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
