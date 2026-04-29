import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Melbourne & Sydney',
  description: 'Full-spectrum commercial cleaning services: offices, medical, schools, industrial, retail, strata, events and specialised cleaning across Melbourne and Sydney.',
};

const services = [
  {
    href: '/services/commercial-office-cleaning',
    title: 'Commercial Office Cleaning',
    description: 'Professional cleaning for corporate environments, keeping workspaces productive and presentable.',
    features: ['Daily & periodic cleaning', 'End-of-day office resets', 'Kitchen & bathroom hygiene', 'Window & glass cleaning'],
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
  },
  {
    href: '/services/medical-cleaning',
    title: 'Medical & Healthcare Cleaning',
    description: 'Infection control protocols and hospital-grade hygiene for clinics, medical centres, and aged care.',
    features: ['TGA-approved disinfectants', 'Infection control protocols', 'Clinical waste handling', 'Surgical suite cleaning'],
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  },
  {
    href: '/services/school-cleaning',
    title: 'Education & School Cleaning',
    description: 'Safe, child-friendly cleaning solutions for schools, universities, and childcare facilities.',
    features: ['Child-safe chemical use', 'Classroom deep cleans', 'Sports hall maintenance', 'After-hours scheduling'],
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    href: '/services/industrial-cleaning',
    title: 'Industrial & Warehouse Cleaning',
    description: 'Heavy-duty cleaning for factories, warehouses, and manufacturing facilities.',
    features: ['High-pressure wash', 'Factory floor cleaning', 'Hazardous area protocols', 'Equipment degreasing'],
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    href: '/services/retail-hospitality-cleaning',
    title: 'Retail & Hospitality Cleaning',
    description: 'Impression-first cleaning for retail stores, restaurants, hotels, and entertainment venues.',
    features: ['Front-of-house presentation', 'Kitchen deep cleans', 'Hotel room servicing', 'Trading hours flexibility'],
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  },
  {
    href: '/services/strata-cleaning',
    title: 'Strata & Residential Cleaning',
    description: 'Common area and strata cleaning for apartment buildings and residential complexes.',
    features: ['Lobby & foyer cleaning', 'Car park cleaning', 'Pool area maintenance', 'Waste room servicing'],
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    href: '/services/events-cleaning',
    title: 'Events & One-off Cleaning',
    description: 'Pre and post-event cleaning, end-of-lease cleans, and one-off deep cleaning services.',
    features: ['Pre-event setup clean', 'Post-event strip-down', 'End-of-lease cleans', 'Emergency response'],
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    href: '/services/specialised-cleaning',
    title: 'Specialised Cleaning',
    description: 'High-pressure washing, carpet cleaning, window cleaning, and hazardous area solutions.',
    features: ['Carpet & upholstery', 'High-rise window cleaning', 'Graffiti removal', 'Biohazard decontamination'],
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>,
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">Home</Link><span className="breadcrumb-sep">/</span><span>Services</span>
        </div>
      </div>

      <section className="inner-hero grid-bg" aria-labelledby="services-hero-heading">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: -200, right: -150 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />FULL-SPECTRUM CLEANING</div>
              <h1 id="services-hero-heading">WHAT WE<br /><span className="gold" style={{ fontStyle: 'italic' }}>DO BEST.</span></h1>
              <p className="inner-hero-body">Eight specialist cleaning disciplines, all backed by EagleWing Command™ technology and our industry-leading CleanProof™ verification system.</p>
              <div className="inner-hero-ctas">
                <Link href="/get-a-quote" className="btn-gold">GET A QUOTE →</Link>
                <Link href="/technology" className="btn-outline">OUR TECHNOLOGY</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-hub-grid">
            {services.map((s, i) => (
              <ScrollReveal key={s.href} delay={i * 0.07}>
                <Link href={s.href} className="glass-card service-hub-card" style={{ display: 'flex' }}>
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p className="description">{s.description}</p>
                  <ul className="service-hub-features">
                    {s.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <span className="gold-link">LEARN MORE →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip section">
        <div className="glow-sphere" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2>NOT SURE WHICH SERVICE YOU NEED?</h2>
            <div className="cta-strip-buttons">
              <Link href="/get-a-quote" className="btn-gold" style={{ padding: '1rem 3rem', boxShadow: '0 0 40px rgba(201,168,76,0.4)' }}>GET A FREE SITE AUDIT →</Link>
              <Link href="/contact" className="cta-audit-link">OR CALL US: 0413 391 353</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
