"use client";

import { useState } from "react";
import Icon from "./Icon";
import MotionCard from "./MotionCard";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nouvel état pour le chargement

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Votre nom svp";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email invalide";
    if (form.message.trim().length < 8) e.message = "Un peu plus de détails ?";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (event) => {
    event.preventDefault();
    
    if (validate()) {
      setIsLoading(true); // On bloque le bouton
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 5000);
        } else {
          // Gestion basique de l'erreur
          alert("Une erreur est survenue lors de l'envoi. N'hésitez pas à m'écrire directement par mail.");
        }
      } catch (error) {
        console.error("Erreur:", error);
        alert("Impossible de joindre le serveur.");
      } finally {
        setIsLoading(false); // On débloque le bouton
      }
    }
  };

  return (
    <MotionCard className="card contact-card" id="contact" data-screen-label="05 Contact" delay={0.15}>
      <div className="contact-wrap">
        <div className="contact-intro">
          <span className="card-eyebrow">/ contact</span>
          <h2>On <em>discute</em> d'un projet&nbsp;?</h2>
          <p>
            Que ce soit pour une alternance ou juste pour échanger autour du développement, n'hésitez pas à me contacter. Ma boîte mail est ouverte.
          </p>
          <div className="contact-meta">
            <div className="contact-meta-row">
              <Icon name="mail" className="" />
              <a className="mail-contact" href="mailto:lucas.plebani@outlook.fr" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                lucas.plebani@outlook.fr
              </a>
            </div>
            <div className="contact-meta-row">
              <Icon name="pin" className="" />
              <span>Montpellier, France · remote ok</span>
            </div>
            <div className="contact-meta-row">
              <Icon name="clock" className="" />
              <span>Réponse sous 24h en semaine</span>
            </div>
          </div>
          <div className="hero-cta" style={{ marginTop: 22 }}>
            <a className="btn btn-ghost" href="https://github.com/LucasPlebani" target="_blank" rel="noopener noreferrer"><Icon name="github" /> GitHub</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/lucas-plebani/" target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          {sent && (
            <div className="form-success">
              <span className="form-success-icon"><Icon name="check" className="" /></span>
              <span>Message envoyé&nbsp;! Je vous réponds très vite. 🎉</span>
            </div>
          )}
          <div className="field-row">
            <div className={`field ${errors.name ? "error" : ""}`}>
              <label htmlFor="f-name">Nom</label>
              <input id="f-name" type="text" placeholder="Léa Dupont" value={form.name} onChange={(e) => setField("name", e.target.value)} disabled={isLoading} />
              <span className="field-hint">{errors.name}</span>
            </div>
            <div className={`field ${errors.email ? "error" : ""}`}>
              <label htmlFor="f-email">Email</label>
              <input id="f-email" type="email" placeholder="lea@studio.fr" value={form.email} onChange={(e) => setField("email", e.target.value)} disabled={isLoading} />
              <span className="field-hint">{errors.email}</span>
            </div>
          </div>
          <div className={`field ${errors.message ? "error" : ""}`}>
            <label htmlFor="f-msg">Message</label>
            <textarea id="f-msg" rows="5" placeholder="Parlez-moi de votre projet, du timing, du budget approximatif…" value={form.message} onChange={(e) => setField("message", e.target.value)} disabled={isLoading} />
            <span className="field-hint">{errors.message}</span>
          </div>
          <button type="submit" className="btn btn-blue" disabled={isLoading} style={{ opacity: isLoading ? 0.7 : 1 }}>
            {isLoading ? "Envoi en cours..." : "Envoyer le message"} <Icon name="arrow" />
          </button>
        </form>
      </div>
    </MotionCard>
  );
}