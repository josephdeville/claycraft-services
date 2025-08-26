# Overview

This is a comprehensive Clay Works of Art automation and GTM consulting website with advanced lead generation capabilities. The application features custom AI agents, Clay training courses, professional contact forms, newsletter signup, case study downloads, calendar booking integration, and Google Analytics tracking. Built with React, Express.js, and optimized for mobile performance with <3 second loading times.

## Recent Updates (August 2025)
- ✅ Google Analytics implemented (G-GT1JPHEMW9) with event tracking
- ✅ Complete contact form system with backend validation and API routes
- ✅ Newsletter signup with duplicate email prevention
- ✅ Case study download system with PDF delivery simulation
- ✅ Social proof widgets with client stats and testimonials
- ✅ Calendar booking component (Calendly integration ready)
- ✅ Mobile-responsive design optimized for performance
- ✅ SEO meta tags and Open Graph optimization for social sharing
- ✅ Backend API endpoints tested and working correctly

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript running in a Vite development environment
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: React Router v6 with client-side routing for SPA navigation
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Styling**: Tailwind CSS with custom design tokens and dark theme support, HSL color system for consistent theming

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design with `/api` prefix for all endpoints
- **Development Setup**: Hot reloading via Vite in development, production builds use esbuild for server bundling

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon serverless PostgreSQL via `@neondatabase/serverless`
- **Schema Management**: Drizzle migrations system with schema definitions in shared directory
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios

## Authentication and Authorization
- Currently using basic session-based approach with connect-pg-simple for PostgreSQL session storage
- User schema includes username/password fields with unique constraints
- Session management configured for production scalability

## Development and Build Process
- **Monorepo Structure**: Shared code between client and server via `shared/` directory
- **Path Aliases**: TypeScript path mapping for clean imports (`@/`, `@shared/`)
- **Build Process**: Vite for frontend bundling, esbuild for server compilation
- **Development Tools**: Runtime error overlays, Replit integration for cloud development

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React Router, React Hook Form with Zod validation
- **Backend Runtime**: Express.js with TypeScript support via tsx
- **Build Tools**: Vite, esbuild, PostCSS with Tailwind CSS

## UI and Component Libraries
- **Design System**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion integration ready

## Database and Data Management
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Database**: Neon serverless PostgreSQL
- **Validation**: Zod for runtime type validation
- **Session Storage**: connect-pg-simple for PostgreSQL session management

## Development and Deployment
- **Development**: Replit-specific plugins and tooling
- **Package Management**: npm with lockfile v3
- **Environment**: NODE_ENV-based configuration
- **Cloud Integration**: Replit cloud development environment support