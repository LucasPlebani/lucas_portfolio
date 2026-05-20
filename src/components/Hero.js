"use client";

import Image from "next/image";
import Icon from "./Icon";
import smileAvatar from "../../public/memoji_hello.webp";
import latte from "../../public/latte.png";
import MotionCard from "./MotionCard";

export default function Hero({ onContact }) {
  return (
      <MotionCard className="card hero" data-screen-label="01 Hero" delay={0}>
      <div className="hero-content">
        
        <span className="hero-hello"><span className="wave">👋</span> Salut, moi c'est</span>
        <h1 className="hero-title">
          Lucas.<br />
          <em>Développeur</em> Full Stack
          <br /><span style={{ fontSize: "0.5em", fontWeight: 500, color: "var(--ink-soft)", letterSpacing: "-0.01em" }}>React · Next.js · Node.js</span>
        </h1>
        <p className="hero-sub">
          Je conçois des produits web rapides, soignés et faciles à utiliser — du croquis Figma jusqu'au déploiement.
          Basée à Montpellier, ouverte aux projets et aux alternances.
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
          <a className="btn btn-ghost" href="/CV_Lucas_Plebani.pdf" target="_blank" rel="noopener noreferrer"><Icon name="download" /> CV (pdf)</a>
                      <a className="btn btn-ghost" href="https://www.linkedin.com/in/lucas-plebani/">LinkedIn <Icon name="external" /></a>
          
        </div>
        <div className="hero-stack">
          <span className="chip blue"><span className="chip-dot" />React</span>
          <span className="chip blue"><span className="chip-dot" />Next.js</span>
          <span className="chip green"><span className="chip-dot" />Node.js</span>
          <span className="chip green"><span className="chip-dot" />PostgreSQL</span>
          <span className="chip pink"><span className="chip-dot" />Figma</span>
          <span className="chip yellow"><span className="chip-dot" />JavaScript</span>
          <span className="chip pink"><span className="chip-dot" />CSS</span>
          <span className="chip blue"><span className="chip-dot" />Python</span>
        </div>
      </div>
      <div className="hero-avatar" aria-label="Avatar de Lucas">
        <div className="avatar-face">
          <Image 
            src={smileAvatar} 
            alt="Avatar de Lucas souriant et faisant un signe de la main" 
            className="avatar-img" 
            sizes="(max-width: 640px) 176px, (max-width: 1024px) 280px, 368px"
            priority 
          />
        </div>
          <span className="avatar-sticker s1"><Image src={latte} alt="Latte" className="coffee-img" width={24} height={24} /> café</span>
          <span className="avatar-sticker s2">+3 ans XP</span>
          <span className="avatar-sticker s3">Montpellier, FR</span>
          <span className="avatar-mono">lucas.webp</span>
        </div>
      </MotionCard>
  );
}
