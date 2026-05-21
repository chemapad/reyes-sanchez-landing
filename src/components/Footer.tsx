import React from 'react';
import { MapPin, PhoneCall, Calendar } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="bg-navy" style={{ padding: '80px 0 20px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '60px' }}>
          <h2 style={{ fontSize: '42px', fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>
            <span style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--brand-gold)' }}>{t.footer.peace}</span><br /> {t.footer.commitment}
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calendar size={20} />
              {t.footer.bookBtn}
            </button>
            <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'transparent' }}>
              {t.footer.helpBtn}
            </button>
          </div>
        </div>

        <div className="grid-2" style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '50%' }}>
              <MapPin size={32} color="var(--brand-navy)" />
            </div>
            <div>
              <h4 style={{ color: 'var(--brand-gold)', fontSize: '20px', marginBottom: '8px' }}>{t.footer.visit}</h4>
              <p style={{ fontSize: '18px', color: 'white', lineHeight: 1.4 }}>7901 Kingspointe Pkwy,<br/>Orlando, FL 32819<br/>Oficina 28</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '50%' }}>
              <PhoneCall size={32} color="var(--brand-navy)" />
            </div>
            <div>
              <h4 style={{ color: 'var(--brand-gold)', fontSize: '20px', marginBottom: '8px' }}>{t.footer.call}</h4>
              <p style={{ fontSize: '22px', color: 'white', fontWeight: 600, marginBottom: '4px' }}>305-922-8242</p>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          {t.footer.bottomLine}
        </div>
      </div>
    </footer>
  );
}
