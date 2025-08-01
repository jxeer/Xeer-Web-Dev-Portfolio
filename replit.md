# Overview

This is a full-stack web application built with React (frontend) and Express.js (backend), featuring a modern portfolio website with smooth animations and interactive components. The application uses TypeScript throughout and implements a clean separation between client, server, and shared code. The frontend showcases a personal portfolio with sections for hero, about, projects, contact, and footer, built with modern UI components and animations using Framer Motion.

# User Preferences

Preferred communication style: Simple, everyday language.
Color scheme: Dark grey backgrounds (#1E1E1E to #2A2A2A gradient) with white backgrounds for sections 2&4, using #A259FF for accent colors. Hero section uses single dark gradient background with subtle dot pattern.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth page transitions and interactions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server Structure**: Modular route registration system with centralized error handling
- **Development Setup**: Custom Vite integration for SSR-like development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation (IStorage interface)
- **Request Logging**: Custom middleware for API request/response logging

## Database & ORM
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Shared schema definitions between client and server
- **Validation**: Drizzle-Zod integration for runtime type validation
- **Migrations**: Drizzle Kit for database schema migrations

## Development & Build System
- **Build Tool**: Vite for frontend bundling with React plugin
- **TypeScript**: Strict mode enabled with path mapping for clean imports
- **Code Organization**: Monorepo structure with shared types and schemas
- **Development Server**: Hot module replacement with custom error overlay
- **Production Build**: esbuild for server bundling, Vite for client assets

## Authentication & Session Management
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication
- **Security**: Prepared for secure session handling with database persistence

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-orm**: Modern TypeScript ORM with excellent type safety
- **drizzle-kit**: CLI tool for database migrations and schema management
- **@tanstack/react-query**: Powerful data synchronization for React applications

### UI & Design System
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **framer-motion**: Production-ready motion library for React animations
- **class-variance-authority**: Utility for creating type-safe component variants
- **cmdk**: Command palette component for enhanced user interactions

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error handling in development
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment
- **tsx**: TypeScript execution engine for development server
- **wouter**: Minimalist routing solution for React applications

### Form & Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation library

### Utilities & Helpers
- **date-fns**: Modern JavaScript date utility library
- **clsx & tailwind-merge**: Utility functions for conditional CSS classes
- **nanoid**: URL-safe unique string ID generator