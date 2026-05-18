export const PROJECTS = [
  {
    id: "p1",
    title: "Boulangerie en ligne",
    desc: "Commande & click-and-collect pour une chaîne de boulangeries — paiement Stripe, panel admin temps-réel.",
    stack: ["Next.js", "Node.js", "Stripe", "Postgres"],
    glyph: "Aa",
    thumb: "t1",
    mono: "/01 — fullstack saas",
    live: "#",
    repo: "#"
  },
  {
    id: "p2",
    title: "Pollen — agence créative",
    desc: "Site vitrine animé pour une agence design parisienne. Studio CMS sur-mesure, animations Framer Motion.",
    stack: ["React", "Sanity", "GSAP", "Vercel"],
    glyph: "Bb",
    thumb: "t2",
    mono: "/02 — vitrine + cms",
    live: "#",
    repo: "#"
  },
  {
    id: "p3",
    title: "Loop — habit tracker",
    desc: "PWA de suivi d'habitudes avec stats hebdo, mode hors-ligne et notifications push. Open source.",
    stack: ["Next.js", "Prisma", "tRPC", "PWA"],
    glyph: "Cc",
    thumb: "t3",
    mono: "/03 — produit perso",
    live: "#",
    repo: "#"
  }
];

export const STACK = {
  front: {
    title: "Frontend",
    num: "01",
    items: [
      { label: "React / Next.js", mark: "Rx", color: "blue" },
      { label: "TypeScript", mark: "Ts", color: "blue" },
      { label: "CSS / Sass / Tailwind", mark: "Cs", color: "pink" },
      { label: "Framer Motion", mark: "Fm", color: "pink" }
    ]
  },
  back: {
    title: "Backend",
    num: "02",
    items: [
      { label: "Node.js / Express", mark: "Nd", color: "green" },
      { label: "PostgreSQL / Prisma", mark: "Pg", color: "green" },
      { label: "REST & GraphQL", mark: "Gq", color: "green" },
      { label: "Stripe / Auth", mark: "St", color: "yellow" }
    ]
  },
  tools: {
    title: "Outils",
    num: "03",
    items: [
      { label: "Git / GitHub Actions", mark: "Gh", color: "yellow" },
      { label: "Figma", mark: "Fg", color: "pink" },
      { label: "Docker", mark: "Dk", color: "blue" },
      { label: "Vercel / Railway", mark: "Vc", color: "green" }
    ]
  }
};

export const FORMATIONS = [
  {
    year: "2024 — 2026",
    icon: "★",
    title: "Bachelor Concepteur Développeur d'Applications",
    detail: "École Hexagone, Paris — alternance. Spécialité applications web & mobile, architecture full stack."
  },
  {
    year: "2022 — 2024",
    icon: "✦",
    title: "BTS Services Informatiques aux Organisations",
    detail: "Option SLAM (solutions logicielles & applications métiers). Mention bien."
  },
  {
    year: "2021",
    icon: "◆",
    title: "Bac Général — spécialités NSI & Maths",
    detail: "Premier contact avec Python, web et la logique algorithmique. Mention très bien."
  }
];
