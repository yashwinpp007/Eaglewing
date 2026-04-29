import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Locations — Melbourne & Sydney',
  description: 'EagleWing provides commercial cleaning services across Melbourne CBD, Southbank, North Sydney, Parramatta, and many more suburbs.',
};

export default function LocationsPage() {
  return (
    <>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link href="/">Home</Link><span className="breadcrumb-sep">/</span><span>Where We Clean</span></div></div>

      <section className="inner-hero grid-bg">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: -200, right: -150 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />OUR COVERAGE</div>
              <h1>WHERE WE<br /><span className="gold" style={{ fontStyle: 'italic' }}>CLEAN.</span></h1>
              <p className="inner-hero-body">EagleWing operates across Melbourne and Sydney, managing 500+ facilities in the suburbs and districts that drive Australia&apos;s economy.</p>
              <div className="inner-hero-ctas">
                <Link href="/get-a-quote" className="btn-gold">GET A QUOTE →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-grid">
            <ScrollReveal>
              <Link href="/locations/melbourne" className="glass-card location-card" style={{ display: 'block' }}>
                <h3>Melbourne</h3>
                <div className="location-suburbs">
                  {['CBD','Southbank','Docklands','St Kilda Rd','Richmond','Cremorne','South Yarra','Toorak','Port Melbourne','Fitzroy'].map(s => <span key={s} className="suburb-tag">{s}</span>)}
                </div>
                <span className="btn-gold">EXPLORE MELBOURNE →</span>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/locations/sydney" className="glass-card location-card" style={{ display: 'block' }}>
                <h3>Sydney</h3>
                <div className="location-suburbs">
                  {['CBD','North Sydney','Parramatta','Macquarie Park','Pyrmont','Alexandria','Surry Hills','Chatswood','Bondi Junction','Darlinghurst'].map(s => <span key={s} className="suburb-tag">{s}</span>)}
                </div>
                <span className="btn-gold">EXPLORE SYDNEY →</span>
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal><p className="location-stat">500+ FACILITIES MANAGED ACROSS AUSTRALIA</p></ScrollReveal>
        </div>
      </section>

      <section className="cta-strip section">
        <div className="glow-sphere" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2>NOT IN OUR LISTED AREAS?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>CONTACT US — WE MAY STILL BE ABLE TO HELP.</p>
            <div className="cta-strip-buttons">
              <Link href="/get-a-quote" className="btn-gold" style={{ padding: '1rem 3rem', boxShadow: '0 0 40px rgba(201,168,76,0.4)' }}>GET IN TOUCH →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
