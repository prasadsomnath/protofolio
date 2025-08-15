# React Portfolio

This is a **production-ready React portfolio website** scaffolded with Vite and styled with Tailwind CSS. It includes dark/light theme toggle, Framer Motion animations, accessibility features, and a contact form integrated with EmailJS.

---

## Features

- Responsive, mobile-first design with Tailwind CSS
- Dark/Light mode toggle persisted in `localStorage`
- Smooth animations with Framer Motion
- SEO-friendly HTML with meta tags and Open Graph
- Accessible, semantic HTML & ARIA support
- Project listing with filters and modal details
- Experience timeline with collapsible items
- Skills section with animated progress bars
- Course progress widget demo
- Form validated contact section with EmailJS integration
- Sticky header with hide-on-scroll and accessible mobile hamburger menu
- Footer with links to privacy policy and terms

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn or pnpm

### Installation

npm install

text

### Development

npm run dev

text

Open the local dev server (usually at `http://localhost:5173`).

### Build & Preview Production

npm run build
npm run preview

text

### Linting & Formatting

npm run lint
npm run format

text

---

## Environment Variables (`.env`)

This project uses EmailJS for contact form email sending. Create a `.env` file at project root:

VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_USER_ID=your_user_id_here

text

If not set, the contact form will log messages to the console as fallback.

---

## Customizing Your Portfolio

- Replace `REPLACE_ME` placeholders with your name, social URLs, email, and project info.
- Replace `src/assets/profile.jpg` and `public/assets/profile.jpg` with your photo.
- Replace `public/resume.pdf` with your resume PDF.
- Modify content in `src/components/*.jsx` to update bio, projects, experience, skills, and more.

---

## Deployment

You can deploy the built site with services like **Vercel**, **Netlify**, or **GitHub Pages**.

For Vercel/Netlify:

- Push your repo.
- Connect to your Github branch.
- Set environment variables in deployment settings.
- Run build command: `npm run build`
- Publish directory: `dist`

---

## Sample Run Commands

npm install
npm run dev

text

Visit: `http://localhost:5173`

---

## Testing

A sample unit test exists at `src/utils/calcPercentage.test.js`. Run tests with:

npm run test

or setup Vitest / Jest scripts as preferred
text

---

## TODOs (Personalize)

- Update your **name** everywhere `REPLACE_ME` appears.
- Replace the **profile picture** at `src/assets/profile.jpg`.
- Replace **resume** at `public/resume.pdf`.
- Update project details in `src/components/Projects.jsx`.
- Replace social links and email in `src/components/Contact.jsx`.
- Add EmailJS details in `.env` for contact form integration.
- Update privacy and terms links in `src/components/Footer.jsx`.

---