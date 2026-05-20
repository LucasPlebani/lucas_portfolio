import { FaLightbulb, FaPuzzlePiece, FaFutbol, FaUsers } from "react-icons/fa6";
import "./style/SoftSkills.css";

export default function SoftSkills() {
  return (
    <section className="card soft-skills-card">
      <span className="card-eyebrow">/ au-delà du code</span>
      
      <h3 className="soft-skills-title">
        Soft Skills & <em>ADN</em>
      </h3>

      <div className="soft-skill-item">
        <div className="soft-skill-icon yellow">
          <FaLightbulb />
        </div>
        <div className="soft-skill-text">
          <div className="soft-skill-name">Curiosité</div>
          <div className="soft-skill-desc">Soif d'apprendre, veille active et exploration continue des nouvelles technologies.</div>
        </div>
      </div>

      <div className="soft-skill-item">
        <div className="soft-skill-icon blue">
          <FaPuzzlePiece />
        </div>
        <div className="soft-skill-text">
          <div className="soft-skill-name">Adaptabilité</div>
          <div className="soft-skill-desc">Adaptation rapide aux équipes, aux outils et aux contraintes projet.</div>
        </div>
      </div>

      <div className="soft-skill-item">
        <div className="soft-skill-icon green">
          <FaFutbol />
        </div>
        <div className="soft-skill-text">
          <div className="soft-skill-name">Sport & bénévolat</div>
          <div className="soft-skill-desc">Éducateur de football bénévole : leadership, transmission et esprit collectif.</div>
        </div>
      </div>

      <div className="soft-skill-item">
        <div className="soft-skill-icon pink">
          <FaUsers />
        </div>
        <div className="soft-skill-text">
          <div className="soft-skill-name">Esprit d'équipe</div>
          <div className="soft-skill-desc">Communication, bienveillance et collaboration pour faire avancer chaque projet.</div>
        </div>
      </div>

    </section>
  );
}