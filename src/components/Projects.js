import Icon from "./Icon";

export default function Projects({ projects }) {
  return (
    <section className="card projects-card" id="projects" data-screen-label="02 Projets">
      <div className="projects-head">
        <div>
          <span className="card-eyebrow">/ derniers projets</span>
          <h2 className="section-title">Quelques <em>réalisations</em> récentes.</h2>
          <p className="section-lead">Trois projets full stack que j'ai conçus, codés et déployés. D'autres expérimentations sur GitHub.</p>
        </div>
        <a className="btn btn-ghost" href="#"><Icon name="github" /> Tout voir sur GitHub</a>
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
              <a className="btn btn-ghost" href={p.repo}><Icon name="github" /> GitHub</a>
              <a className="btn btn-ink" href={p.live}>Live <Icon name="external" /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
