// Centralised, data-driven content for the portfolio.
// Sourced from data/cv.json (rxresu.me export) + the blueprint design brief.

export const RESUME_URL =
  "https://drive.google.com/file/d/1NSvXez4oKCKXbGe57t7-1U7USXvMIuQ-/view?usp=sharing";

export const PROFILE = {
  name: "Moez Hamza",
  photo: "/moez-hamza.jpg",
  email: "hamza.moez@gmail.com",
  phone: "+216 24 418 464",
  phoneHref: "tel:+21624418464",
  location: "Tunis, TN",
  github: "https://github.com/Moez-Hamza",
  githubUser: "Moez-Hamza",
  linkedin: "https://www.linkedin.com/in/moez-hamza/",
  linkedinUser: "moez-hamza",
};

export const T = {
  fr: {
    nav: ["À propos", "Compétences", "Projets", "Contact"],
    role: "Full Stack Developer",
    hero_sub:
      "Ancien architecte reconverti dans le développement web — je conçois des solutions techniques élégantes avec le même souci du détail.",
    about_title: "À propos",
    about_p1:
      "Ancien architecte reconverti dans le développement web, je mets au service du code le même souci du détail et la même rigueur que dans la conception architecturale.",
    about_p2:
      "Curieux et passionné par les nouvelles technologies, je recherche un environnement stimulant où continuer à évoluer et avoir un réel impact.",
    exp_title: "Expérience",
    skills_title: "Compétences",
    cert_label: "Certification vérifiée ✓",
    projects_title: "Projets",
    pro_label: "Professionnel",
    school_label: "Études",
    contact_title: "Contact",
    contact_sub:
      "Disponible pour de nouvelles opportunités. N'hésitez pas à me contacter pour discuter d'un projet ou d'une collaboration.",
    loc: "Basé à",
    loc2: "ouvert aux opportunités remote et on-site.",
    send: "Envoyer un message",
    dl: "⬇ Télécharger le CV",
    code: "Code",
    demo: "Démo",
    footer: "Full Stack Developer · Tunis",
    scroll: "SCROLL",
  },
  en: {
    nav: ["About", "Skills", "Projects", "Contact"],
    role: "Full Stack Developer",
    hero_sub:
      "Former architect turned web developer — crafting elegant technical solutions with the same attention to detail.",
    about_title: "About",
    about_p1:
      "As a former architect turned web developer, I bring the same precision and rigor to code that I once applied to architectural design.",
    about_p2:
      "Curious and passionate about new technologies, I seek a stimulating environment where I can keep growing and make a real impact.",
    exp_title: "Experience",
    skills_title: "Skills",
    cert_label: "Verified Certification ✓",
    projects_title: "Projects",
    pro_label: "Professional",
    school_label: "Academic",
    contact_title: "Contact",
    contact_sub:
      "Open to new opportunities. Feel free to reach out to discuss a project or collaboration.",
    loc: "Based in",
    loc2: "open to remote and on-site opportunities.",
    send: "Send a message",
    dl: "⬇ Download Resume",
    code: "Code",
    demo: "Demo",
    footer: "Full Stack Developer · Tunis",
    scroll: "SCROLL",
  },
};

export const SKILLS = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Express", level: 78 },
  { name: "SQL", level: 75 },
  { name: "MongoDB", level: 72 },
  { name: "Docker", level: 68 },
  { name: "Git", level: 88 },
  { name: "CI/CD", level: 65 },
];

export const CERT = {
  label: "Full Stack JavaScript Developer",
  issuer: "RBK Tunisia — Décembre 2022",
  url: "https://verified.sertifier.com/en/verify/34836835816124/",
};

export const EXPERIENCE = [
  {
    company: "Slashup Studio",
    role: { fr: "Développeur Full Stack", en: "Full Stack Developer" },
    period: "03/2024 – 10/2025",
  },
  {
    company: "ST2I – Groupe STUDI",
    role: { fr: "Développeur Full Stack", en: "Full Stack Developer" },
    period: "01/2023 – 03/2024",
  },
  {
    company: "AFH",
    role: { fr: "Architecte Principal", en: "Principal Architect" },
    period: "2017 – 2022",
  },
  {
    company: "H2M Architecture",
    role: { fr: "Architecte Co-Fondateur", en: "Co-Founder Architect" },
    period: "2013 – 2016",
  },
];

export const PRO = [
  {
    name: "IOSIS",
    year: "2025",
    type: { fr: "Web App", en: "Web App" },
    desc: {
      fr: "Plateforme de gestion dynamique — entités et workflows personnalisables, composants réutilisables.",
      en: "Dynamic management platform — customizable entities and workflows, reusable components.",
    },
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    name: "Koors.io",
    year: "2024",
    type: { fr: "LMS", en: "LMS" },
    desc: {
      fr: "Système de gestion de l'apprentissage : cours, suivi performances, outils collaboratifs.",
      en: "Learning management system: courses, performance tracking, collaborative tools.",
    },
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://www.koors.io/",
  },
  {
    name: "Tuneps",
    year: "2023",
    type: { fr: "Plateforme Gov.", en: "Gov. Platform" },
    desc: {
      fr: "Refonte du système de marchés publics tunisien. Fonctionnalités clés + mobile multiplateforme, +20% efficacité.",
      en: "Overhaul of Tunisia's public procurement system. Key features + cross-platform mobile, +20% efficiency.",
    },
    tags: ["Angular", "Ionic", "Express"],
    link: "https://www.tuneps.tn/",
  },
];

export const SCHOOL = [
  {
    name: "Kampy",
    year: "2022",
    type: { fr: "App Mobile · PFE", en: "Mobile App · Thesis" },
    desc: {
      fr: "App connectant les campeurs de Tunisie : posts, événements, shop, météo, chat et carte.",
      en: "App connecting Tunisian campers: posts, events, shop, weather, chat and map.",
    },
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "https://www.youtube.com/watch?v=LpejaeS5xMo",
    code: "https://github.com/Always-number-one/Kampy",
  },
  {
    name: "Kampy Admin",
    year: "2022",
    type: { fr: "Dashboard", en: "Dashboard" },
    desc: {
      fr: "Dashboard d'administration : modération, gestion utilisateurs, supervision des données.",
      en: "Admin dashboard: moderation, user management, data overview.",
    },
    tags: ["React", "Node.js"],
    link: "https://www.youtube.com/watch?v=3o8gcmQpaGo",
    code: "https://github.com/Always-number-one/Kampy-Admin",
  },
  {
    name: "Better Body",
    year: "2022",
    type: { fr: "Web App", en: "Web App" },
    desc: {
      fr: "Plateforme fitness : programme personnalisé selon l'objectif de l'utilisateur.",
      en: "Fitness platform: personalized program based on user goal.",
    },
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://www.youtube.com/watch?v=SLcXRAdgGDA",
    code: "https://github.com/RBK-hachers/Better-Body",
  },
  {
    name: "Piano Symphony",
    year: "2022",
    type: { fr: "Web App", en: "Web App" },
    desc: {
      fr: "Partitions de piano avec suivi de progression, profils et démos vidéo.",
      en: "Piano sheets with progress tracking, user profiles and video demos.",
    },
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://www.youtube.com/watch?v=cVNRnV1_-Ls",
    code: "https://github.com/Piano-Symphony/Symphony",
  },
];
