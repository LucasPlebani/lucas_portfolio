"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Votre nom svp";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email invalide";
    if (form.message.trim().length < 8) e.message = "Un peu plus de détails ?";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSent(true);
      setTimeout(() => setSent(false), 5000);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="card contact-card" id="contact" data-screen-label="05 Contact">
      <div className="contact-wrap">
        <div className="contact-intro">
          <span className="card-eyebrow">/ contact</span>
          <h2>On <em>discute</em> d'un projet&nbsp;?</h2>
          <p>
            Que ce soit pour une alternance, un freelance, ou juste pour échanger sur un produit que vous construisez —
            ma boîte mail est ouverte.
          </p>
          <div className="contact-meta">
            <div className="contact-meta-row">
              <Icon name="mail" className="" />
              <span>hello@gigi.dev</span>
            </div>
            <div className="contact-meta-row">
              <Icon name="pin" className="" />
              <span>Paris, France · remote ok</span>
            </div>
            <div className="contact-meta-row">
              <Icon name="clock" className="" />
              <span>Réponse sous 24h en semaine</span>
            </div>
          </div>
          <div className="hero-cta" style={{ marginTop: 22 }}>
            <a className="btn btn-ghost" href="#"><Icon name="github" /> GitHub</a>
            <a className="btn btn-ghost" href="#">LinkedIn <Icon name="external" /></a>
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
              <input id="f-name" type="text" placeholder="Léa Dupont" value={form.name} onChange={(e) => setField("name", e.target.value)} />
              <span className="field-hint">{errors.name}</span>
            </div>
            <div className={`field ${errors.email ? "error" : ""}`}>
              <label htmlFor="f-email">Email</label>
              <input id="f-email" type="email" placeholder="lea@studio.fr" value={form.email} onChange={(e) => setField("email", e.target.value)} />
              <span className="field-hint">{errors.email}</span>
            </div>
          </div>
          <div className={`field ${errors.message ? "error" : ""}`}>
            <label htmlFor="f-msg">Message</label>
            <textarea id="f-msg" rows="5" placeholder="Parlez-moi de votre projet, du timing, du budget approximatif…" value={form.message} onChange={(e) => setField("message", e.target.value)} />
            <span className="field-hint">{errors.message}</span>
          </div>
          <button type="submit" className="btn btn-pink">
            Envoyer le message <Icon name="arrow" />
          </button>
        </form>
      </div>
    </section>
  );
}
