import Icon from "./Icon";

export default function NowCard() {
  return (
    <section className="card now-card">
      <span className="card-eyebrow">/ en ce moment</span>
      <div className="now-line">
        <div className="now-icon"><Icon name="spark" /></div>
        <div className="now-text">
          <span className="now-label">je consolide</span>
          <span className="now-value">L'architecture de Bibli'O Jouets<br /><span>Scalabilité & CI/CD sous Next.js 16.</span></span>
        </div>
      </div>
      <div className="now-line">
        <div className="now-icon pink"><Icon name="clock" /></div>
        <div className="now-text">
          <span className="now-label">j'explore</span>
          <span className="now-value">Kubernetes & Terraform<br /><span>pour l'infrastructure as code (IaC).</span></span>
        </div>
      </div>
      <div className="now-line">
        <div className="now-icon green"><Icon name="pin" /></div>
        <div className="now-text">
          <span className="now-label">je cherche</span>
          <span className="now-value">Une alternance DevOps / Expert Systèmes<br /><span>Bac+5 à Montpellier ou Remote (2026).</span></span>
        </div>
      </div>
    </section>
  );
}