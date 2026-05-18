"use client";
import "@/components/style/Footer.css";
import latte from "../../public/latte.png";
import heart from "../../public/coeur.png";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div>© 2026 Gigi — codée avec <img src={heart.src} alt="heart" className="heart-img-footer" /> et beaucoup de <img src={latte.src} alt="Latte" className="coffee-img-footer" />.</div>
      <div className="footer-links">
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>Projets</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact</a>
        <a href="#">RSS</a>
      </div>
    </footer>
  );
}
