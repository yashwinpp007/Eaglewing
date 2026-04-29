import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact EagleWing Facility Services',
  description: 'Get in touch with EagleWing. Call 0413 391 353 or send a message. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link href="/">Home</Link><span className="breadcrumb-sep">/</span><span>Contact</span></div></div>

      <section className="inner-hero grid-bg">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: -200, right: -150 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />GET IN TOUCH</div>
              <h1>LET&apos;S TALK<br /><span className="gold" style={{ fontStyle: 'italic' }}>FACILITIES.</span></h1>
              <p className="inner-hero-body">Whether you need a quote, have a question, or want to explore working with us — we respond within 24 hours.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h2 className="section-heading" style={{ fontSize: '1.6rem', marginBottom: '2rem' }}>SEND A MESSAGE</h2>
                <form>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" className="form-input" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input type="email" className="form-input" placeholder="you@company.com" required />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input type="tel" className="form-input" placeholder="04XX XXX XXX" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input type="text" className="form-input" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select className="form-select">
                      <option>General Enquiry</option>
                      <option>Request a Quote</option>
                      <option>Careers &amp; Employment</option>
                      <option>Partnership</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea className="form-textarea" placeholder="How can we help you?" required />
                  </div>
                  <button type="submit" className="btn-gold form-submit">SEND MESSAGE →</button>
                </form>
              </div>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <ScrollReveal delay={0.1} className="glass-card contact-info-card">
                <div className="eyebrow"><span className="dot" />CALL US DIRECTLY</div>
                <a href="tel:0413391353" className="contact-phone-big">0413 391 353</a>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>Available Mon–Fri, 7am–6pm AEST.<br />After-hours for existing clients.</p>
                <a href="mailto:info@eaglewingfacilityservices.com.au" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)' }}>
                  info@eaglewingfacilityservices.com.au
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="glass-card" style={{ padding: '2rem' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>OUR OFFICES</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Melbourne HQ</strong><br />
                  Available on request
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Sydney Office</strong><br />
                  Available on request
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="trust-icons">
                  {[{ icon: '⚡', label: '24hr\nResponse' }, { icon: '🔒', label: 'Police Check\nVerified' }, { icon: '📋', label: 'No Lock-in\nContracts' }].map(t => (
                    <div key={t.label} className="trust-icon-item">
                      <div className="icon">{t.icon}</div>
                      <div className="trust-icon-label" style={{ whiteSpace: 'pre-line' }}>{t.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
