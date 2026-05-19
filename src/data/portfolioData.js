export const PROJECTS = [
  {
    id: "p1",
    title: "Bibli'O Jouets — SaaS Puériculture",
    desc: "Plateforme de location avec architecture monolithique modulaire. Paiement Stripe Billing, APIs Route Handlers et pipeline CI/CD complet.",
    stack: ["Next.js 16", "React 19", "PostgreSQL", "Docker", "Stripe"],
    glyph: "Bj",
    thumb: "t1",
    mono: "/01 — startup saas",
    live: "https://bibliojouets.fr", 
    repo: "#"
  },
  {
    id: "p2",
    title: "Repro Languedoc — Portail GED",
    desc: "Site vitrine et portail GED from scratch avec dashboard Strapi CMS. Dématérialisation des workflows de signature électronique.",
    stack: ["React", "Node.js", "Strapi", "Tailwind CSS"],
    glyph: "Rl",
    thumb: "t2",
    mono: "/02 — web app & cms",
    live: "https://www.ged-zeendoc-rls.fr/", 
  },
    {
    id: "p3",
    title: "Repro Languedoc — Site web",
    desc: "Maintenance et évolution du site vitrine de l'entreprise, intégrant des fonctionnalités de gestion de contenu et d'optimisation SEO.",
    stack: ["WordPress", "PHP", "JavaScript", "SEO"],
    glyph: "Ls",
    thumb: "t3",
    mono: "/03 — site vitrine",
    live: "https://www.reprolanguedoc.fr/",
   
  },
      {
    id: "p4",
    title: "forme-hotel — Site web",
    desc: "Maintenance et évolution du site de l'hôtel, intégrant des fonctionnalités de gestion de contenu et d'optimisation SEO pour améliorer la visibilité en ligne.",
    stack: ["WordPress", "PHP", "JavaScript", "SEO"],
    glyph: "Fh",
    thumb: "t4",
    mono: "/04 — site vitrine",
    live: "https://forme-hotel.fr/",
    repo: "#"
  },
  {
    id: "p5",
    title: "Losud — Outil de Gestion",
    desc: "Développement d'un logiciel interne de gestion de stock, incluant le pilotage de périphériques matériels via interface port série.",
    stack: ["JavaScript", "Node.js", "Hardware API"],
    glyph: "Ls",
    thumb: "t5",
    mono: "/05 — outil interne",
  },
];

export const STACK = {
  front: {
    title: "Frontend",
    num: "01",
    items: [
      { label: "Next.js 16 ", mark: "Rx", color: "blue" },
      { label: "React", mark: "Rx", color: "blue" },
      { label: "JavaScript", mark: "js", color: "yellow" },
      { label: "TypeScript", mark: "Ts", color: "blue" },
      { label: "Vite", mark: "Vi", color: "blue" },
      { label: "Tailwind CSS", mark: "Tw", color: "blue" },
      { label: "HTML5 / CSS3", mark: "Ht", color: "pink" }
    ]
  },
  back: {
    title: "Backend & BDD",
    num: "02",
    items: [
      { label: "Node.js", mark: "Nd", color: "green" },
      { label: " Prisma ORM", mark: "Pr", color: "green" },
      { label: "Python / FastAPI", mark: "Py", color: "yellow" },
      { label: "PostgreSQL", mark: "Pb", color: "blue" },
      { label: "MongoDB", mark: "Mb", color: "blue" },
      { label: "API REST", mark: "Api", color: "pink" }
    ]
  },
  devops: {
    title: "DevSecOps & Tests",
    num: "03",
    items: [
      { label: "Docker / Nginx / OVH", mark: "Dk", color: "blue" },
      { label: "CI/CD / GitHub Actions", mark: "Gh", color: "yellow" },
      { label: "Tests Unitaires / Jest", mark: "Jt", color: "green" },
      { label: "Architecture MME", mark: "Ar", color: "pink" },
      { label: "Microservices", mark: "Ms", color: "pink" }

    ]
  },
  security: {
    title: "Sécurité & Normes",
    num: "04",
    items: [
      { label: "NextAuth / JWT", mark: "Na", color: "blue" },
      { label: "Validation stricte (Zod)", mark: "Zd", color: "blue" },
      { label: "Cybersécurité", mark: "Cs", color: "yellow" },
      { label: "Conformité RGPD", mark: "Rg", color: "green" }
    ]
  },
  tools: {
    title: "IA, Design & Orga",
    num: "05",
    items: [
      { label: "LLMs / Prompting", mark: "Ia", color: "pink" },
      { label: "Figma (UI/UX)", mark: "Fg", color: "pink" },
      { label: "Scrum / Jira / Trello", mark: "Ag", color: "blue" },
      { label: "Obsidian (Second Cerveau)", mark: "Ob", color: "green" }
    ]
  }
};

export const DEV_PROJECTS = [

  {
    id: "d1",
    title: "Mario Cart — Plateforme E-commerce Multi-commerces",
    desc: "Conception et développement d'une plateforme e-commerce distribuée basée sur une architecture microservices. Gestion indépendante des services métiers : produits, commandes, utilisateurs — chaque service déployé de façon autonome via Docker. Interface frontend multi-framework : React (back-office) + Angular (front-office). ",
    stack: ["React", "Angular", "Node.js","Python", "Docker", "Mongo DB", "Microservices"],
    glyph: "Mi",
    thumb: "t7",
    mono: "/07 — dev tool",
    live: "https://example.com/data-sync",
    repo: "https://github.com/username/data-sync"
  },
  {
    id: "d2",
    title: "Infra Backend — App MVC",
    desc: "Application Node.js/Express MVC entièrement conteneurisée. Orchestration docker-compose, script d'init MySQL et configuration de l'environnement.",
    stack: ["Docker", "Node.js", "MySQL", "DevOps"],
    glyph: "Dk",
    thumb: "t3",
    mono: "/08 — conteneurisation",
    live: "#",
    repo: "https://github.com/LucasPlebani/exo_devops"
  }, 
   {
    id: "d3",
    title: "Ataraxia — POC Cybersécurité & IA ",
    desc: "Développement d'un outil de détection intelligente d'intrusions par analyse de fichiers PCAP. Pipeline IA : scripts Python pour extraction, traitement et classification des menaces via Machine Learning. Dashboard interactif React avec visualisation en temps réel des attaques détectées.",
    stack: ["React", "Python", "Machine Learning", "Analyse réseau (PCAP)"],
    glyph: "Dp",
    thumb: "t6",
    mono: "/06 — projet dev",
    live: "https://example.com/dev-project",
    repo: "https://github.com/LucasPlebani/Ataraxia"
  },
  {
    id: "d4",
    title: "Testeur de Résilience",
    desc: "Outil de stress-testing applicatif. Implémentation de patterns avancés (circuit breaker, retry logic) pour évaluer la récupération des systèmes sous charge.",
    stack: ["JavaScript", "React", "Stress-Testing"],
    glyph: "Tr",
    thumb: "t2",
    mono: "/08 — qa & performance",
    live: "#",
    repo: "https://github.com/LucasPlebani/testeur-de-r-silience-d-API-" 
  },
  {
    id: "d5",
    title: "Moteur de Recommandation",
    desc: "Analyse prédictive de recommandations produits. Utilisation de TypeScript, Prisma et PostgreSQL, avec un environnement entièrement conteneurisé.",
    stack: ["TypeScript", "PostgreSQL", "Prisma", "Docker"],
    glyph: "Db",
    thumb: "t1", 
    mono: "/06 — data & architecture",
    live: "#",
    repo: "https://github.com/LucasPlebani/SQLPostgree"
  },
  {
    id: "d6",
    title: "Grimoire — API Sécurisée",
    desc: "Backend complet pour une bibliothèque en ligne. Gestion de base de données NoSQL, authentification sécurisée (JWT) et système de notation dynamique.",
    stack: ["Node.js", "MongoDB", "Auth / API"],
    glyph: "Mg",
    thumb: "t1",
    mono: "/09 — architecture backend",
    live: "#",
    repo: "https://github.com/LucasPlebani/Mon-Vieux-Grimoire" 
  },
  {
    id: "d7",
    title: "AllGames — Marketplace",
    desc: "Marketplace de jeux vidéo développée avec Symfony. Architecture MVC stricte, ORM Doctrine, dashboard EasyAdmin et système de favoris/avis.",
    stack: ["PHP", "Symfony", "Twig", "MySQL"],
    glyph: "Ag",
    thumb: "t2",
    mono: "/08 — architecture mvc",
    live: "#",
    repo: "https://github.com/LucasPlebani/allgames_symfony"
  },
];


export const FORMATIONS = [
  {
    year: "2026 — 2028",
    icon: "★",
    title: "Bac+5 Expert Informatique — Option DevOps",
    detail: "Diginamic Montpellier — En recherche d'alternance. Architecture distribuée (Microservices), pipelines CI/CD (GitHub Actions), conteneurisation (Docker), cybersécurité et éco-conception (Green IT)."
  },
  {
    year: "2024 — 2025",
    icon: "✦",
    title: "Bac+3 Coordinateur Projet Informatique & Développeur",
    detail: "Keyce Informatique Montpellier. Gestion de projet et management Agile (Scrum), architecture microservices et développement full stack (React, Node.js, Java)."
  },
  {
    year: "2024",
    icon: "◆",
    title: "Junior Cybersecurity Analyst",
    detail: "Cisco Networking Academy. Sécurité des réseaux et des terminaux (Network Defense, Endpoint Security) et gestion des cybermenaces."
  },
  {
    year: "2023",
    icon: "●",
    title: "Titre Pro Développeur Web Full Stack (Bac+2)",
    detail: "OpenClassrooms. Fondations solides en intégration et développement d'applications web modernes : HTML5/CSS3, JavaScript, React et Node.js."
  }
];

