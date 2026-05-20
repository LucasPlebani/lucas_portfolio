import Icon from "./Icon";
import MotionCard from "./MotionCard";

export default function Projects({ projects }) {
  return (
    <MotionCard className="card projects-card" id="projects" data-screen-label="02 Projets" delay={0.05}>
      <div className="projects-head">
        <div>
          <span className="card-eyebrow">/ derniers projets en production</span>
          <h2 className="section-title">Quelques <em>réalisations</em> en production.</h2>
        </div>
      </div>
      
      <div className="projects-grid">
        {projects.filter((p) => p.id !== "p1").map((p) => (
          <article key={p.id} className="project">
            <div className={`project-thumb ${p.img ? "project-thumb-image" : p.thumb}`}>
              {p.img ? (
                <img
                  src={p.img.src ? p.img.src : p.img}
                  alt={`${p.title} cover`}
                  className="project-thumb-img"
                />
              ) : null}
              <span className="thumb-glyph">{p.glyph}</span>
              <span className="thumb-mono">{p.mono}</span>
            </div>
            <div className="project-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map((s) => <span key={s} className="chip" style={{ padding: "4px 9px", fontSize: 11 }}>{s}</span>)}
              </div>
            </div>
            <div className="project-actions">
              {p.repo && p.repo !== "#" ? (
                <a className="btn btn-ghost" href={p.repo}><Icon name="github" /> GitHub</a>
              ) : null}
              {p.live && p.live !== "#" ? (
                <a className="btn btn-ink" href={p.live}>Live <Icon name="external" /></a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </MotionCard>
  );
}
