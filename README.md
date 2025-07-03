# Konnections IMAG Website

A modern, responsive website for Konnections IMAG - a strategic communications and public relations agency. Built with Next.js 15, TypeScript, and Tailwind CSS with smooth scrolling powered by Lenis.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach with excellent UX
- 🚀 Smooth scrolling throughout the site using Lenis
- 📧 Contact forms with email integration
- 👔 Admin panel for managing appointments and case studies
- 🔒 Secure authentication and data handling
- ⚡ Optimized for performance and SEO

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Smooth Scrolling**: Lenis
- **Database**: MongoDB with Mongoose
- **Email**: Nodemailer
- **Icons**: React Icons + Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- Email service (Gmail with App Password recommended)

### Environment Setup

1. Copy the environment example file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and configure your environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `MAIL_USER` & `MAIL_PASS`: Email service credentials
   - `BASE_URL`: Your domain (http://localhost:3000 for development)
   - `ADMIN_PASSWORD`: Secure admin panel password
   - Case study links for different sectors

### Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Deployment

1. **Build the application:**
```bash
npm run build
```

2. **Start production server:**
```bash
npm start
```

3. **Environment Variables:**
   - Ensure all production environment variables are set
   - Use strong passwords and secure database connections
   - Configure proper email service credentials

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/
│   ├── components/     # React components
│   ├── api/           # API routes
│   ├── services/      # Service pages
│   └── ...           # Other pages
├── components/        # Shared components (Lenis integration)
├── hooks/            # Custom React hooks
├── lib/              # Utilities and configurations
└── models/           # Database models
```

## Key Components

- **SmoothScrollProvider**: Lenis integration for smooth scrolling
- **Navbar**: Responsive navigation with smooth scroll links
- **Hero**: Interactive radar visualization with animations
- **Services**: Animated service offerings
- **ContactUs**: Contact form with email integration
- **Admin Panel**: Secure admin interface for managing content

## Production Optimizations

- ✅ Security headers configured
- ✅ Image optimization with WebP/AVIF support
- ✅ Gzip compression enabled
- ✅ CSS optimization
- ✅ Bundle size optimization
- ✅ No development logs in production
- ✅ Proper error boundaries
- ✅ Performance monitoring hooks

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Admin Access

The admin panel is available at `/admin` and allows you to:
- View and manage appointment requests
- Handle case study access requests
- View system statistics

Make sure to set a secure `ADMIN_PASSWORD` in your `.env.local` file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
