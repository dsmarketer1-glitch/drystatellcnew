import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import TrustBar from '../components/TrustBar';

const LAST_UPDATED = 'November 17, 2026';

const sections = [
  {
    title: 'Introduction',
    body: [
      'DryState LLC ("DryState," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us for restoration services.',
      'By using our website or submitting information through our forms, you agree to the practices described in this policy.',
    ],
  },
  {
    title: 'Information We Collect',
    body: [
      'We collect information you provide directly to us, such as when you fill out a contact or inspection request form, call us, or email us. This may include:',
    ],
    list: [
      'Your name',
      'Phone number',
      'Email address',
      'Property address or service location',
      'Details about your restoration needs or the message you send us',
    ],
    after: [
      'We may also automatically collect limited technical information when you visit our website, such as your browser type, device type, and general location, through cookies and similar technologies.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: ['We use the information we collect to:'],
    list: [
      'Respond to your inquiries and schedule inspections or services',
      'Provide, manage, and improve our restoration services',
      'Communicate with you about your project, including updates and follow-ups',
      'Process insurance documentation when you request our help',
      'Improve our website and understand how visitors use it',
    ],
  },
  {
    title: 'How We Share Your Information',
    body: [
      'We do not sell your personal information. We may share your information only in the following limited circumstances:',
    ],
    list: [
      'With trusted service providers and trained installation or restoration teams who help us deliver our services',
      'With your insurance carrier or adjuster when you ask us to assist with a claim',
      'When required by law, legal process, or to protect our rights, safety, or property',
    ],
  },
  {
    title: 'Cookies & Tracking Technologies',
    body: [
      'Our website may use cookies and similar technologies to help the site function properly, remember your preferences, and understand site traffic. You can control or disable cookies through your browser settings, though some features of the site may not work as intended if you do.',
    ],
  },
  {
    title: 'Data Security',
    body: [
      'We take reasonable measures to protect the information you share with us against loss, misuse, and unauthorized access. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Your Choices & Rights',
    body: [
      'You may contact us at any time to request access to, correction of, or deletion of the personal information you have provided. You may also opt out of non-essential communications by letting us know. To make a request, use the contact details below.',
    ],
  },
  {
    title: 'Third-Party Links',
    body: [
      'Our website may contain links to third-party websites, such as review platforms or social media. We are not responsible for the privacy practices of those sites and encourage you to review their policies.',
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      'Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this page periodically.',
    ],
  },
];

const Privacy = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-[72px] lg:pt-[80px] font-['Inter'] bg-[#f8f9fa]">
      {/* Hero */}
      <section className="bg-[#00123d] py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center reveal">
          <span className="inline-block py-1 px-3 bg-[#b6171e] text-white font-bold text-[10px] md:text-[12px] uppercase tracking-[0.1em] mb-6">
            YOUR PRIVACY MATTERS
          </span>
          <h1 className="text-[32px] md:text-[48px] font-['Work_Sans'] font-black text-white mb-4 leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-[14px] md:text-[15px] text-[#b3c5ff] font-medium">
            Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Content */}
      <section className="py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7 md:p-12 reveal">
            {sections.map((section, i) => (
              <div key={i} className={i > 0 ? 'mt-10 pt-10 border-t border-slate-100' : ''}>
                <h2 className="text-[20px] md:text-[26px] font-['Work_Sans'] font-bold text-[#00123d] mb-4">
                  {section.title}
                </h2>
                {section.body.map((para, j) => (
                  <p key={j} className="text-[15px] md:text-[16px] text-[#44464f] leading-[1.8] mb-4">
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3 mb-4">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-[15px] md:text-[16px] text-[#44464f] leading-[1.7]">
                        <span className="w-1.5 h-1.5 bg-[#b6171e] rounded-full shrink-0 mt-[0.6em]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.after &&
                  section.after.map((para, m) => (
                    <p key={m} className="text-[15px] md:text-[16px] text-[#44464f] leading-[1.8] mb-4">
                      {para}
                    </p>
                  ))}
              </div>
            ))}

            {/* Contact block */}
            <div className="mt-10 pt-10 border-t border-slate-100">
              <h2 className="text-[20px] md:text-[26px] font-['Work_Sans'] font-bold text-[#00123d] mb-4">
                Contact Us
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#44464f] leading-[1.8] mb-6">
                If you have any questions about this Privacy Policy or how we handle your information, please reach out:
              </p>
              <div className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-6 space-y-2">
                <p className="text-[16px] font-bold text-[#00123d]">DryState LLC</p>
                <p className="text-[15px] text-[#44464f]">Richland Hills, TX &middot; Serving the Dallas–Fort Worth Area</p>
                <p className="text-[15px] text-[#44464f]">
                  Phone:{' '}
                  <a href="tel:2147851130" className="font-bold text-[#00123d] hover:text-[#b6171e] transition-colors no-underline">
                    214-785-1130
                  </a>
                </p>
                <p className="text-[15px] text-[#44464f]">
                  Email:{' '}
                  <a href="mailto:office@drystatellc.com" className="font-bold text-[#00123d] hover:text-[#b6171e] transition-colors no-underline">
                    office@drystatellc.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
