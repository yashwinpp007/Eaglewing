import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Get a Quote — Commercial Cleaning',
  description: 'Request a free quote for commercial cleaning and facility management services. EagleWing responds within 24 hours.',
};

export default function GetAQuotePage() {
  return (
    <>
      <div className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">Home</Link><span className="breadcrumb-sep">/</span><span>Get a Quote</span>
        </div>
      </div>

      <section className="inner-hero grid-bg" aria-labelledby="quote-hero-heading">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: -200, right: -200 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />FREE QUOTE</div>
              <h1 id="quote-hero-heading">LET&apos;S TALK<br /><span className="gold" style={{ fontStyle: 'italic' }}>ABOUT YOUR FACILITY.</span></h1>
              <p className="inner-hero-body">Tell us about your space and requirements. We&apos;ll respond within 24 hours with a tailored proposal — no obligation.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h2 className="section-heading" style={{ fontSize: '1.6rem', marginBottom: '2rem' }}>REQUEST A QUOTE</h2>
                <form>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" className="form-input" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Business Name *</label>
                    <input type="text" className="form-input" placeholder="Company name" required />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input type="email" className="form-input" placeholder="you@company.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone *</label>
                      <input type="tel" className="form-input" placeholder="04XX XXX XXX" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Type *</label>
                    <select className="form-select">
                      <option value="">Select a service</option>
                      <option>Commercial Office Cleaning</option>
                      <option>Medical &amp; Healthcare</option>
                      <option>Education &amp; Schools</option>
                      <option>Industrial &amp; Warehouses</option>
                      <option>Retail &amp; Hospitality</option>
                      <option>Strata &amp; Residential</option>
                      <option>Events &amp; One-off</option>
                      <option>Specialised Cleaning</option>
                    </select>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Facility Size (m²)</label>
                      <input type="text" className="form-input" placeholder="e.g. 500m²" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Location *</label>
                      <select className="form-select">
                        <option value="">Select city</option>
                        <option>Melbourne</option>
                        <option>Sydney</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Frequency</label>
                    <select className="form-select">
                      <option value="">Select frequency</option>
                      <option>Daily</option>
                      <option>3x per week</option>
                      <option>Weekly</option>
                      <option>Fortnightly</option>
                      <option>Once-off</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Additional Details</label>
                    <textarea className="form-textarea" placeholder="Tell us anything else about your facility or requirements..." />
                  </div>
                  <button type="submit" className="btn-gold form-submit">SUBMIT REQUEST →</button>
                </form>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={0.2} className="glass-card contact-info-card" style={{ marginBottom: '1.5rem' }}>
                <div className="eyebrow"><span className="dot" />SPEAK DIRECTLY</div>
                <a href="tel:0413391353" className="contact-phone-big">0413 391 353</a>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Available Mon–Fri 7am–6pm. After-hours emergencies welcome.</p>
                <a href="mailto:info@eaglewingfacilityservices.com.au" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)' }}>
                  info@eaglewingfacilityservices.com.au
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="trust-icons">
                  {[
                    { icon: '🔒', label: 'Police Check\nVerified' },
                    { icon: '📋', label: '24hr Quote\nTurnaround' },
                    { icon: '✅', label: 'No Lock-in\nContracts' },
                  ].map((t) => (
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
