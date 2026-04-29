import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Counter from '@/components/ui/Counter';

export const metadata: Metadata = {
  title: 'About EagleWing | Commercial Cleaning Melbourne & Sydney',
  description: '20+ years of facility management expertise. Learn about EagleWing\'s story, values, leadership team, and why 500+ facilities trust us across Melbourne and Sydney.',
};

const milestones = [
  { year: '2004', text: 'Founded in Melbourne CBD with a focus on corporate office cleaning.' },
  { year: '2008', text: 'Expanded into medical and healthcare cleaning. First ISO certification awarded.' },
  { year: '2012', text: 'Launched EagleWing Command™ — the company\'s proprietary facility management platform.' },
  { year: '2016', text: 'Opened Sydney operations. Passed 200 active facility contracts.' },
  { year: '2020', text: 'Deployed full CleanProof™ reporting suite. Achieved 98% client retention through pandemic period.' },
  { year: '2024', text: '500+ active facilities. Launched DynamiClean™ adaptive scheduling methodology.' },
];

const values = [
  {
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Integrity',
    desc: 'We do what we say, prove what we\'ve done, and never take shortcuts. Our CleanProof™ reports hold us accountable — publicly.',
  },
  {
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>,
    title: 'Innovation',
    desc: 'From QR audit trails to AI-verified clean cycles, we invest in technology that makes cleaning smarter, not just harder.',
  },
  {
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Precision',
    desc: 'Facility management is a detail business. We train our teams to an exacting standard and measure every outcome against it.',
  },
  {
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Trust',
    desc: 'Background-checked teams, full insurance coverage, and long-term partnerships built on reliability — not contracts.',
  },
];

const certs = ['ISO 9001 Quality Management', 'ISO 14001 Environmental', 'WHS Certified', 'Police Check Verified', 'Public Liability Insured', 'Workers Comp Insured'];

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">Home</Link><span className="breadcrumb-sep">/</span><span>About</span>
        </div>
      </div>

      {/* Hero */}
      <section className="inner-hero grid-bg" aria-labelledby="about-hero-heading">
        <div className="glow-sphere" style={{ width: 500, height: 500, top: -100, right: -100 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />OUR STORY</div>
              <h1 id="about-hero-heading">
                RISING ABOVE<br /><span className="gold" style={{ fontStyle: 'italic' }}>STANDARDS.</span>
              </h1>
              <p className="inner-hero-body">
                Two decades of precision cleaning, technology-led facility management, and an unwavering commitment to the businesses and people we serve across Melbourne and Sydney.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <ScrollReveal>
            <div className="img-placeholder ratio-16-9" style={{ maxHeight: 520 }}>TEAM PHOTO — EAGLEWING HEADQUARTERS</div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className="about-story-grid">
            <ScrollReveal className="about-story-text">
              <div className="eyebrow"><span className="dot" />WHO WE ARE</div>
              <h2 id="story-heading" className="section-heading">OUR STORY</h2>
              <p>EagleWing Facility Services was founded on a simple belief: that the businesses shaping Australia&apos;s economy deserve better than the minimum-wage, tick-a-box cleaning industry they&apos;d been handed.</p>
              <p>We started in Melbourne with a single corporate client and a commitment to doing things differently — investing in proper training, using quality products, and proving our work with documentation rather than just promises.</p>
              <p>Over the years, that commitment evolved into our technology-first approach. Today, EagleWing Command™ is the industry&apos;s most comprehensive facility intelligence platform, giving our clients real-time visibility into the performance of every clean we deliver.</p>
              <p>We&apos;ve grown to manage 500+ facilities across Melbourne and Sydney, with a team retention rate that industry peers can only aspire to. Because when your people are trained, respected, and genuinely proud of their work — that quality shows in every facility we touch.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="eyebrow"><span className="dot" />MILESTONES</div>
              <div className="milestone-timeline">
                {milestones.map((m) => (
                  <div key={m.year} className="milestone-item">
                    <span className="milestone-year">{m.year}</span>
                    <span className="milestone-dot" />
                    <span className="milestone-text">{m.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'var(--surface-raised)' }}>
        <div className="container">
          <div className="stats-bar">
            {[
              { target: '20+', label: 'Years Experience' },
              { target: '500+', label: 'Facilities Managed' },
              { target: '98+', label: 'Client Retention' },
              { target: '350+', label: 'Team Members' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <span className="stat-item-value"><Counter target={s.target} /></span>
                <span className="stat-item-label">{s.label}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3rem' }}>
            <div className="eyebrow"><span className="dot" />WHAT DRIVES US</div>
            <h2 id="values-heading" className="section-heading">MISSION &amp; VALUES</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>Our mission is to set a new standard for commercial facility management — one where technology, accountability, and genuine care combine to deliver outcomes that matter.</p>
          </ScrollReveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1} className="glass-card value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background: 'var(--surface)' }} aria-labelledby="leadership-heading">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 3rem' }}>
            <div className="eyebrow"><span className="dot" />LEADERSHIP</div>
            <h2 id="leadership-heading" className="section-heading">MEET THE FOUNDER</h2>
          </ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ScrollReveal className="glass-card leader-card leader-card-solo">
              <div className="leader-avatar leader-avatar-lg" aria-label="Brian Sylvester" />
              <div className="leader-name">Brian Sylvester</div>
              <div className="leader-role">CEO &amp; Founder</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.8, maxWidth: 480 }}>
                Brian founded EagleWing with a single conviction: that facility management should be driven by data, accountability, and genuine care — not empty promises. Over 20+ years he has built a business that manages 500+ facilities across Melbourne and Sydney, pioneered the EagleWing Command™ platform, and maintained a 98% client retention rate that speaks for itself.
              </p>
              <div className="leader-divider" />
              <div className="leader-stats">
                <div className="leader-stat-item"><span className="leader-stat-value">20+</span><span className="leader-stat-label">Years Experience</span></div>
                <div className="leader-stat-item"><span className="leader-stat-value">500+</span><span className="leader-stat-label">Facilities Managed</span></div>
                <div className="leader-stat-item"><span className="leader-stat-value">98%</span><span className="leader-stat-label">Client Retention</span></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" aria-labelledby="certs-heading">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="eyebrow"><span className="dot" />COMPLIANCE &amp; QUALITY</div>
            <h2 id="certs-heading" className="section-heading">CERTIFICATIONS &amp; ACCREDITATIONS</h2>
          </ScrollReveal>
          <div className="certs-grid">
            {certs.map((c, i) => (
              <ScrollReveal key={c} delay={i * 0.07} className="cert-badge">{c}</ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip section" aria-labelledby="about-cta-heading">
        <div className="glow-sphere" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <ScrollReveal>
            <h2 id="about-cta-heading">WORK WITH A TEAM YOU CAN TRUST</h2>
            <div className="cta-strip-buttons" style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/get-a-quote" className="btn-gold" style={{ boxShadow: '0 0 40px rgba(201,168,76,0.4)' }}>GET A QUOTE →</Link>
              <Link href="/contact" className="btn-outline">JOIN OUR TEAM</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
