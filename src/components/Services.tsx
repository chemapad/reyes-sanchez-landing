import React from 'react';
import { Calculator, Globe, PenTool, Briefcase, Users, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [
  <Calculator size={32} className="text-gold" />,
  <Globe size={32} className="text-gold" />,
  <PenTool size={32} className="text-gold" />,
  <Briefcase size={32} className="text-gold" />,
  <Users size={32} className="text-gold" />,
  <ShieldCheck size={32} className="text-gold" />
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="section bg-navy">
      <div className="container">
        <h2 style={{ fontSize: '40px', textAlign: 'center', marginBottom: '60px', fontFamily: 'var(--font-serif)' }}>{t.servicesTitle}</h2>
        <div className="grid-3">
          {t.services.map((service, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              padding: '40px 30px', 
              borderRadius: '8px', 
              color: 'var(--text-main)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '20px' }}>
                <div style={{ backgroundColor: 'var(--brand-navy)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  {icons[index]}
                </div>
                <h3 style={{ color: 'var(--brand-navy)', fontSize: '18px', lineHeight: 1.2 }}>{service.title}</h3>
              </div>
              <ul style={{ listStyle: 'none' }}>
                {service.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px' }}>
                    <div style={{ color: 'var(--brand-gold)', marginTop: '4px' }}>✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
