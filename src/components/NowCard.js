import Icon from "./Icon";
import MotionCard from "./MotionCard";

export default function NowCard() {
  return (
    <MotionCard className="card now-card" delay={0.2}>
      <span className="card-eyebrow">/ en ce moment</span>
      
      {/* 1. L'IMPACT (Projet actuel) */}
<div className="now-line">
        <div className="now-icon"><Icon name="spark" /></div>
        <div className="now-text">
          <span className="now-label">je fais évoluer</span>
          <span className="now-value">La plateforme Bibli'O Jouets<br /><span>Nouvelles features, scalabilité & CI/CD (Next.js 16).</span></span>
        </div>
      </div>

      {/* 2. L'APPRENTISSAGE (Montée en compétence experte) */}
<div className="now-line">
        <div className="now-icon pink"><Icon name="clock" /></div>
        <div className="now-text">
          <span className="now-label">j'élargis ma stack</span>
          <span className="now-value">Du Full JS vers l'Infrastructure<br /><span>OpenClassrooms : Python, Terraform & automatisation.</span></span>
        </div>
      </div>

      {/* 3. L'OBJECTIF (Recherche d'alternance) */}
      <div className="now-line">
        <div className="now-icon green"><Icon name="pin" /></div>
        <div className="now-text">
          <span className="now-label">je cherche</span>
          <span className="now-value">Une alternance DevOps / Expert IT<br /><span>Bac+5 à Montpellier ou Remote (2026).</span></span>
        </div>
      </div>
      
    </MotionCard>
  );
}