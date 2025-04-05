# Threads Clone

A full-stack social media application inspired by Threads, built with Next.js 14, MongoDB, and Clerk authentication.

## Overview

This project is a feature-rich social media platform that replicates and enhances the functionality of Threads - the app that gained over 100 million sign-ups in less than 5 days. It leverages the latest web technologies to deliver a seamless user experience with robust features.

## Features

### Authentication

- Complete user authentication system powered by Clerk
- Multiple sign-in options: Email/Password, Google, and GitHub
- Profile management and account settings

### User Experience

- Responsive design optimized for all device sizes
- Onboarding process for new users
- Home feed displaying latest threads from the community

### Content Creation

- Create and publish threads with rich text
- Multi-level comment system for engaging discussions
- Reply to existing threads and comments

### User Interaction

- User search with pagination
- Activity page displaying notifications
- Comprehensive profile pages with user information and settings

### Communities

- Create and join communities
- Community management with role-based permissions
- Community-specific threads and discussions
- Community search with pagination

## Tech Stack

### Frontend

- **Next.js 14**: Utilizing server-side rendering for optimal performance
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For responsive and beautiful layouts
- **Shadcn Components**: Enhanced UI components

### Backend

- **MongoDB**: For handling complex schemas and data relationships
- **Mongoose**: For data modeling and population
- **Next.js API Routes**: For backend functionality

### Authentication & File Management

- **Clerk**: For authentication, user management, and organizations
- **UploadThing**: For handling file uploads (profile images, etc.)

### Development Tools

- **Zod**: For data validation
- **React Hook Form**: For form management
- **Webhooks**: For real-time event listening

## Project Structure

The application uses Next.js 14's app router and route groups for organization:

- **(auth)**: Contains authentication-related routes

  - sign-in
  - sign-up
  - onboarding

- **(root)**: Contains main application routes

  - Home page
  - Profile page
  - Activity page
  - Search page
  - Communities pages

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- npm or yarn
- MongoDB account
- Clerk account
- UploadThing account

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Pranavseelam/NeoThread--Threads-Clone-App-.git
cd NeoThread--Threads-Clone-App-
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
MONGODB_URI=your_mongodb_connection_string
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application can be deployed to Vercel with minimal configuration:

- Push your code to the GitHub repository: [NeoThread--Threads-Clone-App-](https://github.com/Pranavseelam/NeoThread--Threads-Clone-App-)
- Import the project to Vercel
- Configure the environment variables
- Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Clerk](https://clerk.dev/) for simplified authentication
- [MongoDB](https://mongodb.com/) for the flexible database solution

