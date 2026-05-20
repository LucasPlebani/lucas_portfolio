"use client";
import "@/components/style/Footer.css";
import latte from "../../public/latte.png";
import heart from "../../public/coeur.png";
import MotionCard from "./MotionCard";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionCard as="footer" className="footer" delay={0.35}>
      <div>© 2026 Gigi — codée avec <img src={heart.src} alt="heart" className="heart-img-footer" /> et beaucoup de <img src={latte.src} alt="Latte" className="coffee-img-footer" />.</div>
      <div className="footer-links">
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>Projets</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact</a>
        <a href="#">RSS</a>
      </div>
    </MotionCard>
  );
}
