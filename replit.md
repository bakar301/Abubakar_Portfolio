# Abu Bakar Portfolio - Full Stack Application

## Overview

This is a full-stack portfolio application built for Abu Bakar, a Python developer and AI enthusiast. The application showcases his professional experience, skills, projects, and education in a modern, responsive web interface. It features a React frontend with TypeScript, an Express.js backend, and uses PostgreSQL with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

Portfolio Design Preferences:
- Focus on Python development expertise (no computer vision/ML developer mentions)
- Remove services section (portfolio is for job applications, not services)
- Keep professional hero section with personal photo
- Remove "Demo" mentions in projects (use "View Code" and "Live Project")
- Remove computer-related stock images in favor of professional photos
- Target job applications for Python developer positions
- Remove contact form (no "Send Message" functionality needed)
- Use personal photos from local folders instead of stock images
- Organize project screenshots in dedicated folders

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS for styling with shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom dark/light mode implementation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API architecture
- **Development**: Hot reloading with Vite middleware integration

### Data Layer
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for database schema management
- **Development Storage**: In-memory storage for development/testing

## Key Components

### Database Schema
The application uses two main tables:
- **Users**: Basic user management with username/password authentication
- **Contacts**: Contact form submissions with name, email, subject, message, and timestamp

### API Endpoints
- `POST /api/contact`: Handles contact form submissions, stores data and sends email notifications

### UI Components
- **Navigation**: Fixed navigation with smooth scrolling and theme toggle
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Personal background and development journey
- **Skills Section**: Technical skills with animated progress bars
- **Projects Section**: Featured projects with images and technology tags
- **Experience Section**: Timeline-based experience display
- **Education Section**: Academic background and qualifications
- **Contact Section**: Contact form with validation and email integration
- **Footer**: Social links and contact information

### Email Integration
- **Service**: Nodemailer for email delivery
- **SMTP Configuration**: Gmail SMTP support with environment variables
- **Notifications**: Automated email notifications for contact form submissions

## Data Flow

1. **Frontend Request**: User interactions trigger API calls through TanStack Query
2. **API Processing**: Express.js routes handle requests and validate data using Zod schemas
3. **Database Operations**: Drizzle ORM performs type-safe database operations
4. **Email Notifications**: Nodemailer sends email notifications for contact submissions
5. **Response Handling**: Frontend receives responses and updates UI state
6. **Error Handling**: Centralized error handling with user-friendly toast notifications

## External Dependencies

### Frontend Dependencies
- **UI Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS transitions and transforms for smooth interactions
- **Form Handling**: React Hook Form with Zod validation

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL for production
- **Email Service**: Nodemailer with Gmail SMTP
- **Validation**: Zod for runtime type checking and validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESLint**: Code linting and formatting
- **Vite**: Fast development server and build tool
- **Replit Integration**: Development environment optimization

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: ESBuild compiles TypeScript server code to `dist/index.js`
3. **Static Assets**: Frontend assets are served from the built directory

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built assets
- **Database**: PostgreSQL connection via environment variables
- **Email**: SMTP configuration via environment variables

### Production Deployment
- **Server**: Node.js production server
- **Database**: Neon PostgreSQL serverless database
- **Static Files**: Served directly from Express in production
- **Environment Variables**: Secure configuration for database and email credentials

### Development Workflow
- **Hot Reloading**: Vite HMR for instant frontend updates
- **API Development**: Express server with automatic restarts
- **Database Migrations**: Drizzle Kit for schema management
- **Type Safety**: Shared types between frontend and backend via `shared/` directory

The application is designed to be easily deployable on platforms like Replit, Vercel, or traditional hosting services, with environment-based configuration switching between development and production modes.