# Abu Bakar Portfolio - Setup Guide

## Project Structure

Create these folders and files on your PC:

```
abu-bakar-portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/               (shadcn/ui components)
│   │   │   ├── about-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── education-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   └── theme-provider.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── drizzle.config.ts
├── components.json
└── README.md
```

## Setup Instructions

### 1. Install Node.js
- Download and install Node.js from https://nodejs.org/
- Choose the LTS version (recommended)

### 2. Create Project Folder
```bash
mkdir abu-bakar-portfolio
cd abu-bakar-portfolio
```

### 3. Initialize Project
```bash
npm init -y
```

### 4. Install Dependencies
```bash
# Core dependencies
npm install express typescript tsx vite @vitejs/plugin-react
npm install react react-dom wouter
npm install @tanstack/react-query
npm install tailwindcss postcss autoprefixer
npm install @tailwindcss/typography @tailwindcss/vite
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react
npm install react-hook-form @hookform/resolvers
npm install zod zod-validation-error
npm install drizzle-orm drizzle-kit drizzle-zod
npm install @neondatabase/serverless
npm install nodemailer
npm install framer-motion
npm install next-themes

# Development dependencies
npm install -D @types/node @types/react @types/react-dom
npm install -D @types/express @types/nodemailer
npm install -D esbuild

# Radix UI components (for shadcn/ui)
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog
npm install @radix-ui/react-avatar @radix-ui/react-checkbox
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-label @radix-ui/react-popover
npm install @radix-ui/react-progress @radix-ui/react-scroll-area
npm install @radix-ui/react-select @radix-ui/react-separator
npm install @radix-ui/react-slot @radix-ui/react-switch
npm install @radix-ui/react-tabs @radix-ui/react-toast
npm install @radix-ui/react-tooltip
```

### 5. GitHub Setup

1. **Create GitHub Repository:**
   - Go to GitHub.com
   - Click "New repository"
   - Name it "abu-bakar-portfolio"
   - Make it public
   - Don't initialize with README (you'll add your own)

2. **Initialize Git in your project:**
```bash
git init
git add .
git commit -m "Initial commit: Abu Bakar Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abu-bakar-portfolio.git
git push -u origin main
```

### 6. Environment Variables

Create a `.env` file in your project root:
```env
# Database (for production)
DATABASE_URL=your_database_url_here

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### 7. Run the Project

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Important Files to Copy

The most important files you need to copy from this Replit project are:

1. **All component files** in `client/src/components/`
2. **Main application files** (`App.tsx`, `main.tsx`, `index.css`)
3. **Configuration files** (`package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.ts`)
4. **Server files** (`server/index.ts`, `server/routes.ts`, `server/storage.ts`)
5. **Shared schema** (`shared/schema.ts`)

## Deploy Options

After setting up locally, you can deploy to:
- **Vercel** (recommended for React apps)
- **Netlify** 
- **Railway** (for full-stack apps)
- **Render**

Would you like me to help you with any specific part of this setup?