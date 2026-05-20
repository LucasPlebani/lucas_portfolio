"use client";

import MotionCard from "./MotionCard";

export default function Nav({ active, onNav }) {
  const links = [
    { id: "projects", label: "Projets" },
    { id: "stack", label: "Stack" },
    { id: "formations", label: "Parcours" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <MotionCard as="nav" className="topnav" delay={0}>
      <div className="brand">
        <span className="brand-mark" />
        <span>Lucas<span style={{ color: "var(--ink-mute)" }}>.dev</span></span>
      </div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onNav(l.id);
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="status">
        <span className="status-dot" />
        Dispo en alternance
      </span>
    </MotionCard>
  );
}
