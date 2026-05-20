import MotionCard from "./MotionCard";

export default function StatCard() {
  return (
      <MotionCard className="card stat-card" delay={0.15}>
      <span className="card-eyebrow">aperçu</span>
       <div className="stat-row">
        <span className="stat-value">5<sup style={{ fontSize: "0.45em", color: "var(--pink)" }}>+</sup></span>
        <span className="stat-label">projets professionnels réalisés</span>
      </div>
      <div className="stat-row">
        <span className="stat-value">32<sup style={{ fontSize: "0.45em", color: "var(--pink)" }}>+</sup></span>
        <span className="stat-label">projets de développement réalisés</span>
      </div>
      <div className="stat-row">
        <span className="stat-value">400<sup style={{ fontSize: "0.45em", color: "var(--pink)" }}>+</sup></span>
        <span className="stat-label">commits effectués en 2025</span>
      </div>
      <div className="stat-row">
        <span className="stat-value" style={{ color: "var(--ink)" }}>3<span style={{ color: "var(--ink-mute)", fontSize: "0.6em" }}>&nbsp;ans</span></span>
        <span className="stat-label">d'expérience</span>
      </div>
      <div className="stat-row">
        <span className="stat-value" style={{ background: "linear-gradient(95deg, var(--blue), var(--green))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>98<span style={{ fontSize: "0.55em" }}>/100</span></span>
        <span className="stat-label">lighthouse moyen</span>
      </div>
      </MotionCard>
  );
}