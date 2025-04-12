- Responsive Landing Page with Auth

A fully responsive and SEO-optimized landing page built using
Next.js (frontend) and NestJS (backend) with TypeScript and Tailwind CSS. Includes user authentication and follows best practices for performance and reusability.

- Objective

Build a high-performance landing page with a login system, focusing on:

- Clean component structure
- Reusability
- Responsiveness
- SEO optimization

---

Tech Stack

- Frontend: [Next.js](https://nextjs.org/) (App Router), TypeScript, Tailwind CSS
- Backend: [NestJS](https://nestjs.com/) (REST API)
- Styling: Tailwind CSS
- Auth: JWT-based login
- Deployment: Vercel

---

Live Demo

[View Live on Vercel](https://benlaguroun-test.vercel.app/)

---

Installation

1. Clone the repository

git clone https://github.com/benlaguroun/responsive-landing-page.git
Copy code

- For frontend

npm install

- For backend (inside /server folder)

cd server
npm install 3. Run the development servers
bash
Copy code

Start frontend

npm run dev

In another terminal, start the backend

cd server
npm run start:dev
Component Structure (Frontend)
less
Copy code
app/
├── layout.tsx // App layout with theme providers
├── page.tsx // Landing page
├── login/ // Login form page
├── signup/ // Signup form (optional)
components/
├── Header.tsx // Top navbar
├── Hero.tsx // Main hero section
├── Features.tsx // Reusable feature grid
├── Footer.tsx // Footer section
├── UI/ // Button, Input, Label components
hooks/
└── use-toast.ts // Toast hook for notifications

- Auth (Backend - NestJS)
  RESTful login route: POST /auth/login

Validates user credentials

Returns JWT token

Type-safe using DTOs and interfaces

✅ Features
✅ SEO optimized (title + meta tags)

✅ Fully responsive

✅ Dark mode support

✅ Type-safe (no any)

✅ Dynamic rendering of content (features, etc.)

✅ Optimized images using next/image

- Bonus Optimizations
  Used next/image for performance image loading

Tailwind’s utility classes for lightweight styling

Clean and reusable component structure

- Collaborators
  Invite sent to @ie76

- Deployment
  Frontend is deployed to Vercel
