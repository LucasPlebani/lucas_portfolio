"use client";

import Icon from "./Icon";
import smileAvatar from "../../public/memoji_hello.webp";
import latte from "../../public/latte.png";
export default function Hero({ onContact }) {
  return (
    <section className="card hero" data-screen-label="01 Hero">
      <div className="hero-content">
        <span className="hero-hello"><span className="wave">👋</span> Salut, moi c'est</span>
        <h1 className="hero-title">
          Lucas.<br />
          <em>Développeur</em> Full Stack
          <br /><span style={{ fontSize: "0.5em", fontWeight: 500, color: "var(--ink-soft)", letterSpacing: "-0.01em" }}>React · Next.js · Node.js</span>
        </h1>
        <p className="hero-sub">
          Je conçois des produits web rapides, soignés et faciles à utiliser — du croquis Figma jusqu'au déploiement.
          Basée à Paris, ouverte aux projets freelance et aux alternances.
        </p>
        <div className="hero-cta">
          <button className="btn btn-pink" onClick={onContact}>
            Contactez-moi <Icon name="arrow" />
          </button>
          <a className="btn btn-ghost" href="#projects" onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}>
            Voir les projets
          </a>
          <a className="btn btn-ghost" href="#"><Icon name="download" /> CV (pdf)</a>
        </div>
        <div className="hero-stack">
          <span className="chip blue"><span className="chip-dot" />React</span>
          <span className="chip blue"><span className="chip-dot" />Next.js</span>
          <span className="chip green"><span className="chip-dot" />Node</span>
          <span className="chip green"><span className="chip-dot" />Postgres</span>
          <span className="chip pink"><span className="chip-dot" />Figma</span>
          <span className="chip yellow"><span className="chip-dot" />TypeScript</span>
        </div>
      </div>
      <div className="hero-avatar" aria-label="Avatar de Gigi">
        <div className="avatar-face">
          <img src={smileAvatar.src} alt="Avatar de Gigi" className="avatar-img" />
        </div>
          <span className="avatar-sticker s1"><img src={latte.src} alt="Latte" className="coffee-img" /> café</span>
          <span className="avatar-sticker s2">+2 ans XP</span>
          <span className="avatar-sticker s3">Montpellier, FR</span>
          <span className="avatar-mono">avatar.png</span>
        </div>
    </section>
  );
}
