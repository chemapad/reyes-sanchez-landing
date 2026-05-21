import React from 'react';
import { Shield, Clock, Lock, UserCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [
  <Shield size={32} className="text-gold" />,
  <UserCheck size={32} className="text-gold" />,
  <Clock size={32} className="text-gold" />,
  <Lock size={32} className="text-gold" />
];

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section className="section bg-light" style={{ padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {t.trust.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div>{icons[idx]}</div>
              <div>
                <h4 style={{ fontSize: '15px', color: 'var(--brand-navy)', marginBottom: '4px', textTransform: 'uppercase' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: 1.4 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 576px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
