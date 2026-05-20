export default function StackCard({ stack }) {
  return (
    <section className="card stack-card" id="stack" data-screen-label="03 Stack">
      <span className="card-eyebrow">/ stack technique</span>
      <h2 className="section-title">Ma boîte à <em>outils</em>.</h2>
      <div className="stack-grid">
        {Object.values(stack).map((col) => (
          <div key={col.title} className="stack-col">
            <div className="stack-col-head">
              <span>{col.title}</span>
              <span className="stack-col-num">{col.num}</span>
            </div>
            <ul className="stack-list">
              {col.items.map((it) => (
                <li key={it.label} className="stack-item">
                  <span className={`tech-icon ${it.color}`}>{it.icon}</span>
                  <span>{it.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
