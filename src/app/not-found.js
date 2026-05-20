'use client';

import Link from 'next/link';
import '@/components/style/error.css';

export default function NotFound() {
  return (
    <div className="error-container">
      <div className="error-blob-field" aria-hidden="true">
        <div className="error-blob error-blob-1" />
        <div className="error-blob error-blob-2" />
        <div className="error-blob error-blob-3" />
      </div>

      <div className="error-content">
        <div className="error-card">
          <div className="error-illustration">
            <span className="error-code">404</span>
            <span className="error-emoji">🧭</span>
          </div>

          <div className="error-text">
            <h1 className="error-title">Page perdue</h1>
            <p className="error-description">
              Hmm, on dirait qu'on a pris un mauvais virage. 
              Cette page n'existe pas — ou elle a décidé de partir en vacances sans prévenir!
            </p>
          </div>

          <div className="error-actions">
            <Link href="/" className="error-btn error-btn-primary">
              Retour à l'accueil
            </Link>
            <a href="/#projects" className="error-btn error-btn-secondary">
              Voir mes projets
            </a>
          </div>

          <div className="error-footer">
            <p className="error-hint">
              <em>Psst!</em> Si vous pensez que c'est une erreur, 
              <a href="/#contact"> contactez-moi</a> pour me le signaler.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
