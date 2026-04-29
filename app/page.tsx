import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Melbourne & Sydney | EagleWing Facility Services',
  description:
    'EagleWing Facility Services — premium commercial cleaning and intelligent facility management across Melbourne and Sydney. 20+ years experience. 98% client retention.',
};

const services = [
  {
    href: '/services/commercial-office-cleaning',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: 'Commercial Office',
    desc: 'Professional cleaning for corporate environments, keeping workspaces productive and presentable.',
  },
  {
    href: '/services/medical-cleaning',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Medical & Healthcare',
    desc: 'Infection control protocols and hospital-grade hygiene for clinics, medical centres, and aged care.',
  },
  {
    href: '/services/school-cleaning',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Education & Schools',
    desc: 'Safe, child-friendly cleaning solutions for schools, universities, and childcare facilities.',
  },
  {
    href: '/services/industrial-cleaning',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Industrial & Warehouses',
    desc: 'Heavy-duty cleaning for factories, warehouses, and manufacturing facilities.',
  },
  {
    href: '/services/retail-hospitality-cleaning',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: 'Retail & Hospitality',
    desc: 'Impression-first cleaning for retail stores, restaurants, hotels, and entertainment venues.',
  },
  {
    href: '/services/strata-cleaning',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Strata & Residential',
    desc: 'Common area and strata cleaning for apartment buildings and residential complexes.',
  },
  {
    href: '/services/events-cleaning',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Events & One-off',
    desc: 'Pre and post-event cleaning, end-of-lease cleans, and one-off deep cleaning services.',
  },
  {
    href: '/services/specialised-cleaning',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
      </svg>
    ),
    title: 'Specialised Cleaning',
    desc: 'High-pressure washing, carpet cleaning, window cleaning, and hazardous area solutions.',
  },
];

const commandFeatures = [
  'Smart Sensor Systems',
  'Real-time Dashboards',
  'QR Audit Trail',
  'Client Portal Access',
  'DynamiClean™ Scheduling',
  'CleanProof™ Reports',
];

const testimonials = [
  {
    quote: '"EagleWing transformed the way we manage our building. The Command™ dashboard gives us confidence that every clean is verified — not just promised."',
    author: '— JAMES K. · PROPERTY MANAGER · COLLINS ST TOWER, MELBOURNE',
  },
  {
    quote: '"As a medical practice, our hygiene standards are non-negotiable. EagleWing is the only provider we\'ve found that truly understands infection control."',
    author: '— DR. SARAH M. · PRACTICE MANAGER · NORTH SYDNEY MEDICAL CENTRE',
  },
  {
    quote: '"We\'ve tried four cleaning companies in three years. EagleWing is the first that actually shows up on time, does the job properly, and proves it with reports."',
    author: '— MARK T. · OPERATIONS DIRECTOR · MELBOURNE LOGISTICS HUB',
  },
];

const dashBarHeights = [40, 75, 95, 60, 85, 50, 70, 88];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'EagleWing Facility Services',
            description: 'Premium commercial cleaning and facility management services in Melbourne and Sydney.',
            telephone: '+61413391353',
            areaServed: ['Melbourne', 'Sydney'],
            url: 'https://eaglewingfacilityservices.com.au',
            priceRange: '$$',
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '87' },
          }),
        }}
      />

      <HeroSection />

      {/* ── A SMARTER WAY TO CLEAN ── */}
      <section className="section" aria-labelledby="smarter-heading">
        <div className="container">
          <div className="smarter-grid">
            <ScrollReveal className="smarter-text">
              <div className="eyebrow"><span className="dot" />THE EAGLEWING DIFFERENCE</div>
              <h2 id="smarter-heading" className="section-heading">A SMARTER WAY TO CLEAN</h2>
              <p>EagleWing isn&apos;t just a cleaning company — we&apos;re a technology-led facility management partner. While others push a mop, we deploy data-driven systems that verify, report, and continuously improve every clean.</p>
              <p>Our proprietary EagleWing Command™ platform gives you real-time visibility into your facility&apos;s hygiene performance. Our DynamiClean™ methodology adapts cleaning frequency to actual usage patterns — not arbitrary schedules.</p>
              <Link href="/about" className="gold-link">LEARN ABOUT US →</Link>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="img-placeholder ratio-4-3">IMAGE — TEAM IN ACTION</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="section" style={{ background: 'var(--surface)' }} aria-labelledby="services-heading">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow"><span className="dot" />OUR SERVICES</div>
            <h2 id="services-heading" className="section-heading">WHAT WE DO</h2>
          </ScrollReveal>
          <div className="services-grid" style={{ marginTop: '2.5rem' }}>
            {services.map((s, i) => (
              <ScrollReveal key={s.href} delay={i * 0.07}>
                <Link href={s.href} className="glass-card service-card" style={{ display: 'flex' }}>
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="gold-link">LEARN MORE →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="services-cta">
            <Link href="/services" className="btn-gold">VIEW ALL SERVICES →</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHERE WE CLEAN ── */}
      <section className="section" style={{ background: 'var(--surface-raised)' }} aria-labelledby="locations-heading">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow"><span className="dot" />OUR COVERAGE</div>
            <h2 id="locations-heading" className="section-heading">WHERE WE CLEAN</h2>
          </ScrollReveal>
          <div className="location-grid" style={{ marginTop: '2.5rem' }}>
            <ScrollReveal>
              <Link href="/locations/melbourne" className="glass-card location-card" style={{ display: 'block' }}>
                <h3>Melbourne</h3>
                <div className="location-suburbs">
                  {['CBD','Southbank','Docklands','St Kilda Rd','Richmond','Cremorne'].map(s => (
                    <span key={s} className="suburb-tag">{s}</span>
                  ))}
                </div>
                <span className="btn-gold">EXPLORE →</span>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Link href="/locations/sydney" className="glass-card location-card" style={{ display: 'block' }}>
                <h3>Sydney</h3>
                <div className="location-suburbs">
                  {['CBD','North Sydney','Parramatta','Macquarie Park','Pyrmont','Alexandria'].map(s => (
                    <span key={s} className="suburb-tag">{s}</span>
                  ))}
                </div>
                <span className="btn-gold">EXPLORE →</span>
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <p className="location-stat">500+ FACILITIES MANAGED ACROSS AUSTRALIA</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── INTELLIGENT FRAMEWORK / BENTO ── */}
      <section className="section" aria-labelledby="framework-heading">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow"><span className="dot" />OUR TECHNOLOGY</div>
            <h2 id="framework-heading" className="section-heading">OUR INTELLIGENT CLEANING FRAMEWORK</h2>
          </ScrollReveal>
          <div className="bento-grid" style={{ marginTop: '2.5rem' }}>
            <ScrollReveal className="glass-card bento-item bento-large">
              <Link href="/technology" style={{ display: 'flex', height: '100%' }}>
                <div className="bento-content">
                  <div>
                    <div className="bento-label">Platform</div>
                    <div className="bento-title">EAGLEWING COMMAND™</div>
                    <p className="bento-body" style={{ marginTop: '0.5rem' }}>Real-time facility intelligence. Live audit dashboards, QR check-ins, and client-facing reporting in one platform.</p>
                  </div>
                  <div className="dashboard-bars" style={{ height: 60, marginTop: '1.5rem' }}>
                    {[45, 70, 90, 60, 80].map((h, i) => (
                      <div key={i} className="dashboard-bar" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="glass-card bento-item bento-tall">
              <Link href="/technology" style={{ display: 'flex', height: '100%' }}>
                <div className="bento-content">
                  <div className="bento-label">Methodology</div>
                  <div className="bento-title">DYNAMICLEAN™</div>
                  <p className="bento-body" style={{ marginTop: '0.5rem' }}>Adaptive cleaning frequency based on real occupancy and usage data — not guesswork.</p>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="glass-card bento-item bento-accent noise-overlay">
              <div className="bento-content">
                <div className="bento-label" style={{ color: '#000' }}>Reporting</div>
                <div className="bento-title">CLEANPROOF™ REPORTING</div>
                <p className="bento-body">Every audit. Every result. Verified.</p>
              </div>
            </ScrollReveal>
            {[
              { label: 'People', title: 'TRAINED & VERIFIED TEAMS', body: 'Background-checked, insured, and formally trained before every deployment.', href: '/process' },
              { label: 'Tools',  title: 'ADVANCED EQUIPMENT',       body: 'Industrial-grade machinery and hospital-approved chemical formulations.',     href: '/technology' },
              { label: 'Environment', title: 'SUSTAINABLE PRACTICES', body: 'Eco-certified products, reduced water waste, and responsible disposal protocols.', href: '/about' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={0.2 + i * 0.08} className="glass-card bento-item">
                <Link href={item.href} style={{ display: 'flex', height: '100%' }}>
                  <div className="bento-content">
                    <div className="bento-label">{item.label}</div>
                    <div className="bento-title">{item.title}</div>
                    <p className="bento-body" style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>{item.body}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMAND FEATURE ── */}
      <section className="section" style={{ background: 'var(--surface)' }} aria-labelledby="command-heading">
        <div className="container">
          <div className="command-grid">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />TECHNOLOGY PLATFORM</div>
              <h2 id="command-heading" className="section-heading">EAGLEWING COMMAND™</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                A proprietary facility intelligence platform that puts you in control of your building&apos;s hygiene performance — with data you can actually trust.
              </p>
              <ul className="command-features">
                {commandFeatures.map((f) => (
                  <li key={f} className="command-feature-item">
                    <span className="command-dot" />{f}
                  </li>
                ))}
              </ul>
              <div className="command-ctas">
                <Link href="/get-a-quote" className="btn-gold">REQUEST A DEMO →</Link>
                <Link href="/technology" className="gold-link">SEE HOW IT WORKS →</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-card dashboard-card" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="dashboard-header">
                  <span className="dashboard-title">COMMAND™ DASHBOARD</span>
                  <span className="dashboard-live"><span className="dot" />LIVE</span>
                </div>
                <div className="dashboard-bars" style={{ height: 100 }}>
                  {dashBarHeights.map((h, i) => (
                    <div key={i} className="dashboard-bar" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="dashboard-metrics">
                  <div className="metric-pill"><span className="metric-value">98%</span><span className="metric-label">Audit Score</span></div>
                  <div className="metric-pill"><span className="metric-value">500+</span><span className="metric-label">Active Sites</span></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section hiw-section" aria-labelledby="hiw-heading">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow"><span className="dot" style={{ background: '#000', animationName: 'none' }} />OUR PROCESS</div>
            <h2 id="hiw-heading" className="section-heading">HOW IT WORKS</h2>
          </ScrollReveal>
          <div className="steps-row">
            {[
              { num: '01', name: 'GET A QUOTE',      desc: 'Tell us about your facility and requirements. We\'ll respond within 24 hours.' },
              { num: '02', name: 'SITE AUDIT',       desc: 'Our team conducts a free on-site assessment to understand your exact needs.' },
              { num: '03', name: 'CUSTOM PLAN',      desc: 'We build a tailored service plan with pricing, schedules, and deliverables.' },
              { num: '04', name: 'ONGOING DELIVERY', desc: 'Consistent, verified cleaning with CleanProof™ reports delivered to your inbox.' },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1} className="step-item">
                <div className="step-number">{step.num}</div>
                <div className="step-name">{step.name}</div>
                <p className="step-desc">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="hiw-cta">
            <Link href="/process" className="btn-dark">SEE FULL PROCESS →</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container">
          <ScrollReveal>
            <div className="eyebrow"><span className="dot" />CLIENT FEEDBACK</div>
            <h2 id="testimonials-heading" className="section-heading">WHAT OUR CLIENTS SAY</h2>
          </ScrollReveal>
          <div className="testimonials-grid" style={{ marginTop: '2.5rem' }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="glass-card testimonial-card">
                <div className="stars">{'★★★★★'.split('').map((s, j) => <span key={j} className="star">{s}</span>)}</div>
                <p className="testimonial-quote">{t.quote}</p>
                <span className="testimonial-author">{t.author}</span>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="logo-bar">
            <p className="logo-bar-label">TRUSTED BY LEADING ORGANISATIONS</p>
            <div className="logo-bar-icons">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="logo-icon-placeholder" aria-label="Client logo placeholder" />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="cta-strip section" aria-labelledby="cta-heading">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2 id="cta-heading">READY TO ELEVATE YOUR FACILITY?</h2>
            <div className="cta-strip-buttons">
              <Link href="/get-a-quote" className="btn-gold" style={{ padding: '1rem 3rem', fontSize: '0.82rem', boxShadow: '0 0 40px rgba(201,168,76,0.4)' }}>GET A QUOTE →</Link>
              <Link href="/get-a-quote" className="cta-audit-link">OR BOOK A FREE SITE AUDIT</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
