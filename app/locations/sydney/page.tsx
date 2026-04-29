import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Sydney — EagleWing',
  description: 'Premium commercial cleaning services across Sydney CBD, North Sydney, Parramatta, Macquarie Park, and greater metropolitan Sydney.',
};

const suburbs = ['Sydney CBD','North Sydney','Parramatta','Macquarie Park','Pyrmont','Alexandria','Surry Hills','Chatswood','Bondi Junction','Darlinghurst','Woolloomooloo','Chippendale','Ultimo','Redfern','Newtown','St Leonards','Artarmon','Lane Cove','Ryde','Strathfield'];

export default function SydneyPage() {
  return (
    <>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link href="/">Home</Link><span className="breadcrumb-sep">/</span><Link href="/locations">Locations</Link><span className="breadcrumb-sep">/</span><span>Sydney</span></div></div>

      <section className="inner-hero grid-bg">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: -200, right: -150 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />SYDNEY OPERATIONS</div>
              <h1>COMMERCIAL CLEANING<br /><span className="gold" style={{ fontStyle: 'italic' }}>SYDNEY.</span></h1>
              <p className="inner-hero-body">EagleWing has operated in Sydney since 2016, managing facilities across the CBD, North Sydney, and western suburbs for some of Australia&apos;s leading organisations.</p>
              <div className="inner-hero-ctas">
                <Link href="/get-a-quote" className="btn-gold">GET A SYDNEY QUOTE →</Link>
                <a href="tel:0413391353" className="btn-outline">CALL: 0413 391 353</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow"><span className="dot" />COVERAGE AREA</div>
            <h2 className="section-heading">SUBURBS WE SERVICE</h2>
          </ScrollReveal>
          <div className="suburb-grid" style={{ marginTop: '2rem' }}>
            {suburbs.map((s, i) => <ScrollReveal key={s} delay={i * 0.04} className="suburb-tile">{s}</ScrollReveal>)}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="command-grid">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />CLIENT FEEDBACK</div>
              <h2 className="section-heading">WHAT SYDNEY CLIENTS SAY</h2>
              <div className="glass-card local-testimonial" style={{ marginTop: '2rem' }}>
                <div className="stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star">{s}</span>)}</div>
                <p className="testimonial-quote">&ldquo;As a medical practice, our hygiene standards are non-negotiable. EagleWing is the only provider we&apos;ve found that truly understands infection control — and proves it with data every single clean.&rdquo;</p>
                <span className="testimonial-author">— DR. SARAH M. · PRACTICE MANAGER · NORTH SYDNEY MEDICAL CENTRE</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="eyebrow"><span className="dot" />LOCAL FACTS</div>
              <div className="stats-bar" style={{ gridTemplateColumns: '1fr 1fr', margin: '0', padding: '2rem 0' }}>
                {[{ v: '300+', l: 'Sydney Facilities' }, { v: '2016', l: 'Operating Since' }, { v: '98%', l: 'Client Retention' }, { v: '24hr', l: 'Response Time' }].map(s => (
                  <div key={s.l} style={{ textAlign: 'center' }}>
                    <span className="stat-item-value">{s.v}</span>
                    <span className="stat-item-label">{s.l}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="cta-strip section">
        <div className="glow-sphere" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2>READY TO ELEVATE YOUR SYDNEY FACILITY?</h2>
            <div className="cta-strip-buttons">
              <Link href="/get-a-quote" className="btn-gold" style={{ padding: '1rem 3rem', boxShadow: '0 0 40px rgba(201,168,76,0.4)' }}>GET A QUOTE →</Link>
              <Link href="/get-a-quote" className="cta-audit-link">OR BOOK A FREE SITE AUDIT</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
