export default function Formations({ formations }) {
  return (
    <section className="card formations-card" id="formations" data-screen-label="04 Parcours">
      <span className="card-eyebrow">/ parcours</span>
      <h2 className="section-title">Mes <em>formations</em>.</h2>
      <div className="timeline">
        {formations.map((f, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot">{f.icon}</div>
            <div className="timeline-content">
              <h4>{f.title}</h4>
              <p>{f.detail}</p>
            </div>
            <span className="timeline-year">{f.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
