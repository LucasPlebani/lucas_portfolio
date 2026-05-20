import "./style/FlagshipProject.css";
import Image from "next/image";
import { PROJECTS } from "../data/portfolioData";
import biblioCover from "../assets/biblio.webp";
import MotionCard from "./MotionCard";
export default function FlagshipProject() {
  const p = PROJECTS.find((x) => x.id === "p1");
  if (!p) return null;

  return (
    <MotionCard className="card projects-card" id="flagship" data-screen-label="01 Projet phare" delay={0.05}>
      <div className="projects-head">
        <div>
          <span className="card-eyebrow">/ flagship product</span>
          <h2 className="section-title">{p.title}</h2>
        </div>
      </div>

      <div className="flagship-inner">
        
        <div className="flagship-card-left">
          <div className="flagship-thumb">
            <Image src={biblioCover} alt="biblio cover" width={800} height={720} className="flagship-cover-image" />
          </div>

          <div className="flagship-content">
            <p className="flagship-description">
              Plateforme de location avec une architecture monolithique modulaire (MME) conçue pour évolutivité et isolation des domaines métier. Pipeline CI/CD entièrement automatisé pour tests et déploiement (Jest → Prod) et intégration Stripe Billing pour la facturation.
            </p>
            <div className="flagship-badges">
              {p.stack?.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
            <div className="flagship-actions">
              {p.live && p.live !== "#" && p.live !== "" ? (
                <a className="flagship-cta" href={p.live} target="_blank" rel="noreferrer">Visiter la plateforme</a>
              ) : null}
            </div>
          </div>
        </div>

        <aside className="flagship-card-right">
          <div className="flagship-metric">
            <div className="flagship-metric-value">3 mois</div>
            <div className="flagship-metric-label">Délai MVP</div>
          </div>
          <div className="flagship-metric">
            <div className="flagship-metric-value">SecOps</div>
            <div className="flagship-metric-label">Zod · JWT · Rate Limiting</div>
          </div>
          <div className="flagship-metric">
            <div className="flagship-metric-value">100% Automatisé</div>
            <div className="flagship-metric-label">Pipeline CI/CD (tests → prod)</div>
          </div>
        </aside>
      </div>
    </MotionCard>
  );
}
