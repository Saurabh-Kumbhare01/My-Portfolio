export const personalDetails = {
  name: "Saurabh Premkumar Kumbhare",
  firstName: "Saurabh",
  lastName: "Kumbhare",
  title: "Web Developer | Python | React.js | AI-Driven Web Solutions",
  roles: [
    "Web Developer",
    "Python & FastAPI Architect",
    "React.js Frontend Engineer",
    "AI Web Solutions Specialist",
    "UI/UX Enthusiast"
  ],
  location: "Nagpur, Maharashtra, India",
  email: "kumbharesaurabh279@gmail.com",
  phone: "+91 8379001488",
  phoneRaw: "+918379001488",
  github: "https://github.com/Saurabh-Kumbhare01",
  githubUsername: "Saurabh-Kumbhare01",
  linkedin: "https://www.linkedin.com/in/saurabh-kumbhare-771b33346?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  linkedinUsername: "saurabh-kumbhare-771b33346",
  availability: "Open to Full-Time & High-Impact Developer Roles (2026 Ready)",
  bioShort: "Aspiring Web Developer skilled in Python, JavaScript, and React.js, dedicated to crafting responsive web apps, REST APIs, and AI-integrated products that solve real-world problems.",
  bioLong: "Aspiring Web Developer skilled in Python, JavaScript, and React.js, with hands-on experience building responsive web applications, REST APIs, and AI-integrated tools that solve real-world problems. Possesses a strong foundation in Data Structures and Algorithms, Object-Oriented Programming, modern UI/UX, version control with Git/GitHub, and AI-assisted development workflows aligned with 2026 tech industry hiring standards.",
  careerObjective: "To leverage expertise in full-stack architecture, modern JavaScript frameworks, Python backends, and Generative AI APIs to build scalable, high-performance web platforms that deliver exceptional user experiences.",
  strengths: [
    "Clean & Modular Architecture (MVC / Component-based)",
    "AI Integration & LLM API Workflows (OpenAI, Generative AI)",
    "Modern Responsive UI/UX Design & Micro-animations",
    "Agile Development & Iterative Performance Optimization",
    "Strong Problem-Solving & DSA Foundation"
  ],
  stats: [
    { label: "BCA CGPA", value: "8.2 / 10", description: "Consistent Academic Distinction" },
    { label: "Full-Stack Projects", value: "4+", description: "Production-ready Web Applications" },
    { label: "Tech Stack Tools", value: "15+", description: "Modern Languages, Frameworks & AI Tools" },
    { label: "Git Contributions", value: "Active", description: "End-to-End Product Repositories" }
  ]
};

export const resumeSkills = [
  { category: "Languages", skills: "JavaScript, Python, SQL" },
  { category: "Frontend", skills: "HTML5, CSS3, React.js, Tailwind CSS" },
  { category: "Backend & API", skills: "FastAPI, REST APIs, JWT Authentication" },
  { category: "Database", skills: "PostgreSQL, MySQL, SQLite" },
  { category: "Tools & Concepts", skills: "Git, GitHub, VS Code" },
  { category: "AI", skills: "OpenAI API, GenAI/LLMs, AI Agents, NLP Basics" }
];

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend_api", label: "Backend & API" },
    { id: "database", label: "Database" },
    { id: "tools_concepts", label: "Tools & Concepts" },
    { id: "ai", label: "AI" }
  ],
  items: [
    // Languages: JavaScript, Python, SQL
    { name: "JavaScript", category: "languages", icon: "SiJavascript", color: "#F7DF1E", tag: "Languages" },
    { name: "Python", category: "languages", icon: "SiPython", color: "#3776AB", tag: "Languages" },
    { name: "SQL", category: "languages", icon: "SiPostgresql", color: "#4169E1", tag: "Languages" },

    // Frontend: HTML5, CSS3, React.js, Tailwind CSS
    { name: "HTML5", category: "frontend", icon: "SiHtml5", color: "#E34F26", tag: "Frontend" },
    { name: "CSS3", category: "frontend", icon: "FiCode", color: "#1572B6", tag: "Frontend" },
    { name: "React.js", category: "frontend", icon: "SiReact", color: "#61DAFB", tag: "Frontend" },
    { name: "Tailwind CSS", category: "frontend", icon: "SiTailwindcss", color: "#06B6D4", tag: "Frontend" },

    // Backend & API: FastAPI, REST APIs, JWT Authentication
    { name: "FastAPI", category: "backend_api", icon: "SiFastapi", color: "#009688", tag: "Backend & API" },
    { name: "REST APIs", category: "backend_api", icon: "FiGlobe", color: "#6366F1", tag: "Backend & API" },
    { name: "JWT Authentication", category: "backend_api", icon: "FiCheckCircle", color: "#EC4899", tag: "Backend & API" },

    // Database: PostgreSQL, MySQL, SQLite
    { name: "PostgreSQL", category: "database", icon: "SiPostgresql", color: "#4169E1", tag: "Database" },
    { name: "MySQL", category: "database", icon: "SiMysql", color: "#4479A1", tag: "Database" },
    { name: "SQLite", category: "database", icon: "SiSqlite", color: "#003B57", tag: "Database" },

    // Tools & Concepts: Git, GitHub, VS Code
    { name: "Git", category: "tools_concepts", icon: "SiGit", color: "#F05032", tag: "Tools & Concepts" },
    { name: "GitHub", category: "tools_concepts", icon: "SiGithub", color: "#6E7681", tag: "Tools & Concepts" },
    { name: "VS Code", category: "tools_concepts", icon: "FiCode", color: "#007ACC", tag: "Tools & Concepts" },

    // AI: OpenAI API, GenAI/LLMs, AI Agents, NLP Basics
    { name: "OpenAI API", category: "ai", icon: "FiCpu", color: "#10A37F", tag: "AI" },
    { name: "GenAI/LLMs", category: "ai", icon: "FiCpu", color: "#8B5CF6", tag: "AI" },
    { name: "AI Agents", category: "ai", icon: "FiCpu", color: "#06B6D4", tag: "AI" },
    { name: "NLP Basics", category: "ai", icon: "FiCpu", color: "#F59E0B", tag: "AI" }
  ]
};

export const projectsData = [
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    tagline: "ATS-Optimized Resume Generator with OpenAI API & PDF Export",
    category: "Full-Stack AI Application",
    featured: true,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
    techStack: ["React.js", "FastAPI", "PostgreSQL", "OpenAI API", "Tailwind CSS", "JWT Auth"],
    description: "An end-to-end AI-powered platform that enables job seekers to generate professional, ATS-friendly resumes with live side-by-side preview, AI wording suggestions, and instant PDF download.",
    highlights: [
      "Generated ATS-optimized resume templates with real-time responsive UI live preview.",
      "Built secure REST APIs and JWT authentication endpoints using FastAPI and PostgreSQL.",
      "Integrated OpenAI API to rewrite summary bullets, fix grammar, and optimize keywords for specific target job roles."
    ],
    caseStudy: {
      overview: "Job applicants frequently face rejection due to formatting errors or lack of targeted ATS keywords. The AI Resume Builder automates content refinement while giving users real-time control over layout and style.",
      architecture: [
        "Frontend: React.js + Tailwind CSS with modular component form steps & PDF renderer.",
        "Backend: FastAPI microservices exposing asynchronous REST endpoints.",
        "Database: PostgreSQL for persistent user profiles, saved resumes, and auth tokens.",
        "AI Engine: OpenAI GPT-3.5 API prompts formatted specifically for resume scoring."
      ],
      features: [
        "Live Side-by-Side ATS Resume Preview",
        "1-Click PDF Export with Clean Styling",
        "JWT-based User Authentication & Session Persistence",
        "AI Bullet Point Improver & Keyword Density Checker",
        "Modular Multi-step Form Wizard"
      ],
      challenges: [
        "Challenge: Ensuring PDF export styling matches browser live preview across screen sizes.",
        "Solution: Implemented dedicated print-optimized CSS and HTML-to-Canvas fallback export mechanisms."
      ]
    },
    github: "https://github.com/Saurabh-Kumbhare01",
    liveDemo: "https://github.com/Saurabh-Kumbhare01",
    badge: "AI Powered"
  },
  {
    id: "smart-attendance-system",
    title: "Smart Attendance System",
    tagline: "Live Face Recognition Attendance Platform with Real-Time Analytics",
    category: "Computer Vision & Dashboard",
    featured: true,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Python", "OpenCV", "Streamlit", "XML Export", "Object-Oriented Programming"],
    description: "A real-time biometric attendance application utilizing computer vision for webcam face detection, student profile registration, automated model training, and XML log generation.",
    highlights: [
      "Developed live face-recognition engine with automatic webcam frame capture and user registration.",
      "Built a sleek Streamlit dashboard with dark mode styling, camera status panels, and real-time attendance metric cards.",
      "Optimized facial recognition pipeline for low-latency, accurate detection on standard hardware without requiring heavy GPUs."
    ],
    caseStudy: {
      overview: "Traditional manual attendance marking is time-consuming and prone to proxy entries. This computer vision application automates identity verification in seconds with transparent record logging.",
      architecture: [
        "Vision Processing: Python + OpenCV Haar-Cascades & LBPH Face Recognizer algorithms.",
        "Dashboard UI: Streamlit framework with custom CSS dark theme and reactive state management.",
        "Data Persistence: XML structured logger and SQLite database backend for attendance history."
      ],
      features: [
        "Real-Time Webcam Face Detection & Recognition",
        "Interactive User Registration & Dataset Encoder",
        "Streamlit Dashboard with Dark Theme & Animated Panels",
        "Automated XML & CSV Attendance Log Generation",
        "Instant Attendance Percentage & Metric Visualizations"
      ],
      challenges: [
        "Challenge: Latency spikes when processing high-resolution webcam video streams.",
        "Solution: Applied frame downscaling and ROI (Region of Interest) bounding box filtering, reducing processing lag by over 60%."
      ]
    },
    github: "https://github.com/Saurabh-Kumbhare01",
    liveDemo: "https://github.com/Saurabh-Kumbhare01",
    badge: "Computer Vision"
  },
  {
    id: "portfolio-website",
    title: "Interactive Full-Stack Portfolio",
    tagline: "Modern Modernist UI/UX Portfolio built with React, Vite & Framer Motion",
    category: "Frontend & UI/UX",
    featured: true,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS", "Vite"],
    description: "Custom-crafted portfolio site featuring sleek glassmorphism, dynamic typewriter titles, theme toggling, interactive skill visualizers, and zero-page-reload contact delivery.",
    highlights: [
      "Crafted custom design system using Tailwind CSS with dark slate aesthetic and glowing cyan accents.",
      "Implemented smooth spring physics animations with Framer Motion.",
      "Integrated EmailJS contact pipeline with client validation, toast feedback, and fallback preview state."
    ],
    caseStudy: {
      overview: "Designed to set a higher benchmark for developer portfolios by avoiding boilerplate templates and prioritizing speed, aesthetics, and accessibility.",
      architecture: [
        "Build Tool: Vite for ultra-fast HMR and bundle optimization.",
        "Styling: Tailwind CSS custom tokens + dark mode class toggles.",
        "Animation: Framer Motion motion primitives & viewport triggers."
      ],
      features: [
        "Dynamic Typing Hero Headline",
        "Interactive Filterable Tech Stack Cards",
        "Project Case Study Modal Viewers",
        "Dark / Light Theme State Persistence",
        "Responsive Mobile Drawer Navigation"
      ],
      challenges: [
        "Challenge: Ensuring smooth 60fps animations across low-power mobile browsers.",
        "Solution: Leveraged GPU-accelerated CSS transforms and lightweight Framer Motion viewport triggers."
      ]
    },
    github: "https://github.com/Saurabh-Kumbhare01",
    liveDemo: "https://github.com/Saurabh-Kumbhare01",
    badge: "Featured UI"
  }
];

export const educationData = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "G H Raisoni College, Skill Tech University",
    location: "Nagpur, Maharashtra",
    duration: "2025 – 2027",
    status: "In Progress",
    scoreLabel: "Current CGPA",
    score: "7.37 / 10",
    highlights: [
      "Advanced studies in Cloud Architecture, AI Integration, and Enterprise Web Software.",
      "Specializing in AI-Driven Web Applications and Scalable Full-Stack Engineering.",
      "Engaging in modern 2026 tech stack research, REST API security, and software methodologies."
    ],
    type: "Master's Degree"
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "G H Raisoni University",
    location: "Amravati, Maharashtra",
    duration: "2022 – 2025",
    status: "Completed with Distinction",
    scoreLabel: "Final CGPA",
    score: "8.2 / 10",
    highlights: [
      "Graduated with a strong academic CGPA of 8.2 / 10 across the entire 3-year undergraduate program.",
      "Core coursework: Data Structures & Algorithms, Object-Oriented Programming in Python, Web Development, Database Management Systems (PostgreSQL, MySQL, SQL), Software Engineering.",
      "Developed multiple full-stack and computer vision projects as part of academic curriculum and published code on GitHub."
    ],
    type: "Bachelor's Degree"
  }
];

export const certificationsAndAchievements = [
  {
    title: "Python & Web Development Training",
    issuer: "Skill Tech & Hands-On Engineering",
    date: "2024 - 2025",
    category: "Certification",
    description: "Hands-on intensive training covering Python programming, web development, REST API design, and modern AI-assisted development tools.",
    badge: "Verified Training"
  },
  {
    title: "End-to-End Product Delivery on GitHub",
    issuer: "Open Source & GitHub Repositories",
    date: "2024 - Present",
    category: "Achievement",
    description: "Built and published multiple production-grade web and computer vision repositories demonstrating complete software lifecycle mastery.",
    badge: "Open Source"
  },
  {
    title: "Consistent Academic Excellence (8.2 BCA CGPA)",
    issuer: "G H Raisoni University, Amravati",
    date: "2022 - 2025",
    category: "Academic Achievement",
    description: "Maintained a strong 8.2 / 10 CGPA throughout the Bachelor of Computer Applications undergraduate program.",
    badge: "Distinction"
  },
  {
    title: "2026-Ready Generative AI Tooling Mastery",
    issuer: "Self-Directed & Modern Industry Workflows",
    date: "Active",
    category: "Technical Mastery",
    description: "Proficient in leveraging ChatGPT, GitHub Copilot, and AI web builder tools to accelerate coding, unit testing, and architectural design.",
    badge: "AI Workflow"
  }
];

export const experienceHighlights = [
  {
    title: "Web Developer & AI Solutions",
    organization: "Independent Projects & Open Source",
    period: "2024 - Present",
    location: "Nagpur, India",
    type: "Practical Work & Development",
    points: [
      "Architected and deployed responsive web applications combining React.js UI frontends with FastAPI Python backends.",
      "Integrated Generative AI APIs (OpenAI) to enhance resume content formatting, keyword extraction, and user UX.",
      "Designed computer vision tools using OpenCV and Streamlit for live facial recognition and automated data logging.",
      "Adopted AI-assisted development workflows (GitHub Copilot, LLM prompt engineering) aligned with 2026 hiring standards."
    ]
  }
];

export const contactInfo = {
  address: "Nagpur, Maharashtra, India",
  email: "kumbharesaurabh279@gmail.com",
  phone: "+91 8379001488",
  linkedin: "https://www.linkedin.com/in/saurabh-kumbhare-771b33346?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/Saurabh-Kumbhare01",
  workingHours: "Mon - Sat: 9:00 AM - 8:00 PM IST"
};
