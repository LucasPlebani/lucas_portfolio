"use client";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div>© 2026 Gigi — codée avec ☕ et beaucoup de <em style={{ fontFamily: "var(--font-display)" }}>border-radius</em>.</div>
      <div className="footer-links">
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>Projets</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact</a>
        <a href="#">RSS</a>
      </div>
    </footer>
  );
}
