import React from 'react';
import { Phone, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top bar with "Atención en español" and quick contact */}
      <div className="bg-navy" style={{ padding: '8px 0', fontSize: '14px' }}>
        <div className="container flex-between">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageCircle size={16} className="text-gold" />
            <span style={{ fontWeight: 600, letterSpacing: '0.5px' }}>{t.header.bilingual}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} className="text-gold" />
              <span style={{ fontWeight: 600 }}>305-922-8242</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container flex-between" style={{ padding: '20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Reyes & Sanchez Services LLC" style={{ height: '90px', objectFit: 'contain' }} />
        </div>
        
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center', fontWeight: 600 }}>
          <button 
            onClick={toggleLanguage}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', color: 'var(--text-dark)', fontWeight: 600, fontSize: '16px' }}
          >
            <Globe size={18} className="text-gold" />
            {language.toUpperCase()}
          </button>
          <a href="#servicios" style={{ color: 'var(--text-dark)' }}>{t.header.services}</a>
          <a href="#contacto" style={{ color: 'var(--text-dark)' }}>{t.header.contact}</a>
          <a href="#contacto" className="btn-primary" style={{ padding: '12px 28px' }}>{t.header.book}</a>
        </nav>
      </div>
    </header>
  );
}
