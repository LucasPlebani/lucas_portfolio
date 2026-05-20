import Icon from "./Icon";
import MotionCard from "./MotionCard";

export default function DevProjects({ projects }) {
  return (
    <MotionCard className="card projects-card" id="dev-projects" data-screen-label="03 Projets dev" delay={0.1}>
      <div className="projects-head">
        <div>
          <span className="card-eyebrow">/ projets de développement</span>
          <h2 className="section-title">Prototypes et projets <em>en développement</em>.</h2>
        </div>
        <a className="btn btn-ghost" href="https://github.com/LucasPlebani"><Icon name="github" /> Tout voir sur GitHub</a>

      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project">
            <div className={`project-thumb ${p.thumb}`}>
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
