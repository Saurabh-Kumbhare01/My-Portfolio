# Modern Full-Stack Personal Portfolio - Saurabh Premkumar Kumbhare

A modern, premium, human-crafted personal portfolio web application for **Saurabh Premkumar Kumbhare** (*Web Developer | Python | React.js | AI-Driven Web Solutions*). Built with **React.js (Vite)**, **Tailwind CSS**, **Framer Motion**, **React Icons**, and **EmailJS**.

---

## 🚀 Features & Highlights

- **Dynamic Hero Section**: Typewriter animation cycling through professional roles, quick stats counters (BCA 8.2 CGPA, 4+ Full-stack projects, 15+ Tech stack tools), interactive profile code terminal card, and quick contact CTAs.
- **ATS Resume Preview & Export**: Interactive popup viewer with real-time printable ATS document preview and PDF download trigger.
- **Filterable Technical Skills**: Interactive tabbed category view (Languages, Frontend, Backend & DB, Tools & AI, Soft Skills & Spoken Languages) with animated skill level indicators and tech icons.
- **Project Showcases & Case Studies**: Detailed project cards (*AI Resume Builder*, *Smart Attendance System*, *Interactive Portfolio*) with live demo triggers, GitHub repositories, and Case Study breakdown modals.
- **Interactive Dual Timeline**: Switchable vertical timeline for Education (*MCA @ G H Raisoni College, BCA @ G H Raisoni University Amravati with 8.2 CGPA*) and Practical Experience.
- **Functional Contact Form**: Direct message delivery powered by **EmailJS** with real-time field validation, loading indicators, fallback notifications, and confetti celebration!
- **Interactive Canvas & Utility Components**: Subtle HTML5 canvas particle background, floating scroll-to-top button with circular scroll progress ring, and responsive mobile navigation drawer.
- **Dark / Light Theme Switcher**: Toggleable theme with local state persistence and smooth CSS transitions.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18 (Vite)
- **Styling & Design**: Tailwind CSS, Custom Glassmorphism, CSS Modules
- **Animations**: Framer Motion
- **Icons & UI Extras**: React Icons (`react-icons/si`, `react-icons/fi`), Canvas-Confetti
- **Form Delivery**: EmailJS (`@emailjs/browser`)

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg           # Developer SVG logo
├── src/
│   ├── components/
│   │   ├── About.jsx         # Summary, career goals, personal strengths
│   │   ├── BackgroundCanvas.jsx # Interactive particle canvas background
│   │   ├── Certifications.jsx # Achievements & credentials grid
│   │   ├── Contact.jsx       # EmailJS form + details
│   │   ├── ExperienceEducation.jsx # Interactive timeline switcher
│   │   ├── Footer.jsx        # Footer links & copyright
│   │   ├── Hero.jsx          # Typewriter intro & status cards
│   │   ├── Navbar.jsx        # Sticky glass header & theme toggle
│   │   ├── ProjectModal.jsx  # Detailed Case Study modal popup
│   │   ├── Projects.jsx      # Project cards grid
│   │   ├── ResumeModal.jsx   # ATS Resume preview & PDF export
│   │   ├── ScrollToTop.jsx   # Scroll-to-top floating button
│   │   └── Skills.jsx        # Filterable skills visualizer
│   ├── data/
│   │   └── portfolioData.js  # Resume data model
│   ├── App.jsx               # Preloader, theme state & main layout
│   ├── index.css             # Tailwind directives & glass utilities
│   └── main.jsx              # Application entry point
├── .env.example              # Environment variables template
├── index.html                # SEO Meta tags & Google fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Local Setup & Development

### 1. Clone the repository
```bash
git clone https://github.com/Saurabh-Kumbhare01/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration (EmailJS)
Create a `.env` file in the root directory (based on `.env.example`):
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Run Development Server
```bash
npm run dev
```
Open http://localhost:5174/ in your browser.

---

## 📦 Production Build

To build the production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub (`github.com/Saurabh-Kumbhare01/portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the `portfolio` repository.
4. Set Build Command: `npm run build` and Output Directory: `dist`.
5. Add Environment Variables under Settings (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).
6. Click **Deploy**.

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com/) and click **Add new site > Import from an existing project**.
2. Select GitHub and pick the `portfolio` repository.
3. Set Build Command: `npm run build` and Publish Directory: `dist`.
4. Add Environment Variables in Site Settings > Build & Deploy > Environment.
5. Click **Deploy Site**.

---

## 👤 Author

**Saurabh Premkumar Kumbhare**
- **Email**: kumbharesaurabh279@gmail.com
- **Phone**: +91 8379001488
- **GitHub**: [github.com/Saurabh-Kumbhare01](https://github.com/Saurabh-Kumbhare01)
- **LinkedIn**: [linkedin.com/in/saurabh-kumbhare-771b33346](https://www.linkedin.com/in/saurabh-kumbhare-771b33346?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Location**: Nagpur, Maharashtra, India
