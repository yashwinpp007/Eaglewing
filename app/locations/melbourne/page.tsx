import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Melbourne — EagleWing',
  description: 'Premium commercial cleaning services across Melbourne CBD, Southbank, Docklands, Richmond, and greater metropolitan Melbourne.',
};

const suburbs = ['Melbourne CBD','Southbank','Docklands','St Kilda Road','Richmond','Cremorne','South Yarra','Toorak','Port Melbourne','Fitzroy','Collingwood','Carlton','North Melbourne','Footscray','Sunshine','Dandenong','Clayton','Moorabbin','Frankston','Geelong'];

export default function MelbournePage() {
  return (
    <>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link href="/">Home</Link><span className="breadcrumb-sep">/</span><Link href="/locations">Locations</Link><span className="breadcrumb-sep">/</span><span>Melbourne</span></div></div>

      <section className="inner-hero grid-bg">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: -200, right: -150 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />MELBOURNE OPERATIONS</div>
              <h1>COMMERCIAL CLEANING<br /><span className="gold" style={{ fontStyle: 'italic' }}>MELBOURNE.</span></h1>
              <p className="inner-hero-body">EagleWing has been Melbourne&apos;s trusted facility management partner since 2004. From Collins Street towers to Cremorne tech campuses — we clean the spaces where Melbourne works.</p>
              <div className="inner-hero-ctas">
                <Link href="/get-a-quote" className="btn-gold">GET A MELBOURNE QUOTE →</Link>
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
              <h2 className="section-heading">WHAT MELBOURNE CLIENTS SAY</h2>
              <div className="glass-card local-testimonial" style={{ marginTop: '2rem' }}>
                <div className="stars">{'★★★★★'.split('').map((s,i) => <span key={i} className="star">{s}</span>)}</div>
                <p className="testimonial-quote">&ldquo;EagleWing has been managing our Collins Street tower for over three years. The Command™ dashboard means we can see every clean has been verified — it&apos;s transformed our facility management approach.&rdquo;</p>
                <span className="testimonial-author">— JAMES K. · PROPERTY MANAGER · COLLINS ST TOWER</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="eyebrow"><span className="dot" />LOCAL FACTS</div>
              <div className="stats-bar" style={{ gridTemplateColumns: '1fr 1fr', margin: '0', padding: '2rem 0' }}>
                {[{ v: '200+', l: 'Melbourne Facilities' }, { v: '2004', l: 'Operating Since' }, { v: '98%', l: 'Client Retention' }, { v: '24hr', l: 'Response Time' }].map(s => (
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
            <h2>READY TO ELEVATE YOUR MELBOURNE FACILITY?</h2>
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
