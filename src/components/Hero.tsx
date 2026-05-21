import React from 'react';

import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section style={{ 
      backgroundColor: 'var(--bg-light)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Abstract background shapes */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', backgroundColor: 'var(--brand-navy)', opacity: 0.03, zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'var(--brand-gold)', opacity: 0.05, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
        <p style={{ color: 'var(--brand-gold)', fontWeight: 700, letterSpacing: '3px', marginBottom: '20px', textTransform: 'uppercase', fontSize: '14px' }}>
          {t.hero.slogan}
        </p>
        <h1 style={{ fontSize: '64px', color: 'var(--brand-navy)', marginBottom: '24px', lineHeight: 1.15, fontFamily: 'var(--font-serif)' }}>
          {t.hero.title1} <span className="text-gold" style={{ display: 'block' }}>{t.hero.title2}</span>
        </h1>
        <p style={{ fontSize: '22px', color: 'var(--text-main)', marginBottom: '48px', maxWidth: '650px', margin: '0 auto 48px auto', fontWeight: 400 }}>
          {t.hero.desc}
        </p>
        <a href="#contacto" className="btn-primary" style={{ fontSize: '18px', padding: '18px 48px', boxShadow: '0 8px 24px rgba(198, 159, 89, 0.4)' }}>
          {t.hero.button}
        </a>
      </div>
    </section>
  );
}
