import React from 'react';
import { FileText, Users, ShieldCheck } from 'lucide-react';

const InsuranceClaims = () => {
  const benefits = [
    {
      title: 'Detailed Documentation',
      desc: 'We provide comprehensive moisture logs, high-resolution photo evidence, and itemized estimates using Xactimate—the industry standard for insurance billing.',
      icon: <FileText size={28} strokeWidth={2.5} />
    },
    {
      title: 'Direct Communication',
      desc: "Our project managers coordinate directly with adjusters, handling all technical questions so you don't have to become an expert on restoration overnight.",
      icon: <Users size={28} strokeWidth={2.5} />
    },
    {
      title: 'Maximized Coverage',
      desc: 'By providing professional proof of loss and following strict IICRC standards, we ensure you receive the full scope of benefits your policy provides.',
      icon: <ShieldCheck size={28} strokeWidth={2.5} />
    }
  ];

  return (
    <section className="insurance-section section">
      <div className="container">
        <div className="section-header reveal">
          <span className="sub-title">HASSLE-FREE PROCESS</span>
          <h2>Expert Insurance Claims Navigation</h2>
          <p className="header-desc">
            We work directly with your insurance carrier to ensure your claim is handled<br />
            accurately and your property is restored without unnecessary stress.
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card reveal">
              <div className="icon-wrapper">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="vendor-footer reveal">
          <span>APPROVED VENDOR FOR</span>
          <span className="bullet">•</span>
          <span>STATE FARM</span>
          <span className="bullet">•</span>
          <span>ALLSTATE</span>
          <span className="bullet">•</span>
          <span>LIBERTY MUTUAL</span>
          <span className="bullet">•</span>
          <span>USAA</span>
        </div>
      </div>
    </section>
  );
};

export default InsuranceClaims;
