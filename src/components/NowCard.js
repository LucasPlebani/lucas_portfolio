import Icon from "./Icon";

export default function NowCard() {
  return (
    <section className="card now-card">
      <span className="card-eyebrow">/ en ce moment</span>
      <div className="now-line">
        <div className="now-icon"><Icon name="spark" className="" /></div>
        <div className="now-text">
          <span className="now-label">je construis</span>
          <span className="now-value">Une plateforme de mentorat<br /><span>pour étudiants en dev — Next 14 + tRPC.</span></span>
        </div>
      </div>
      <div className="now-line">
        <div className="now-icon pink"><Icon name="clock" className="" /></div>
        <div className="now-text">
          <span className="now-label">j'apprends</span>
          <span className="now-value">Rust & WebAssembly<br /><span>pour des outils CLI rapides côté dev.</span></span>
        </div>
      </div>
      <div className="now-line">
        <div className="now-icon green"><Icon name="pin" className="" /></div>
        <div className="now-text">
          <span className="now-label">je cherche</span>
          <span className="now-value">Une alternance dev fullstack<br /><span>à Paris ou en remote, sept. 2026.</span></span>
        </div>
      </div>
    </section>
  );
}
