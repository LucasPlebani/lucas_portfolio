export default function StatCard() {
  return (
    <section className="card stat-card">
      <span className="card-eyebrow">aperçu</span>
      <div className="stat-row">
        <span className="stat-value">12<sup style={{ fontSize: "0.45em", color: "var(--pink)" }}>+</sup></span>
        <span className="stat-label">projets livrés</span>
      </div>
      <div className="stat-row">
        <span className="stat-value" style={{ color: "var(--ink)" }}>2<span style={{ color: "var(--ink-mute)", fontSize: "0.6em" }}>&nbsp;ans</span></span>
        <span className="stat-label">d'expérience</span>
      </div>
      <div className="stat-row">
        <span className="stat-value" style={{ background: "linear-gradient(95deg, var(--blue), var(--green))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>98<span style={{ fontSize: "0.55em" }}>/100</span></span>
        <span className="stat-label">lighthouse moyen</span>
      </div>
    </section>
  );
}
