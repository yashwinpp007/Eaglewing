import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Cleaning Process — How EagleWing Works',
  description: 'From quote to ongoing delivery — learn how EagleWing\'s proven 4-step process delivers consistent, verified cleaning results every time.',
};

const steps = [
  {
    num: '01',
    title: 'GET A QUOTE',
    desc: 'Tell us about your facility — size, type, location, and frequency requirements. We respond within 24 hours with a detailed proposal, not a vague estimate.',
    bullets: ['Same-day response guarantee', 'No obligation', 'Tailored to your needs', 'Fixed pricing — no hidden fees'],
    reverse: false,
  },
  {
    num: '02',
    title: 'FREE SITE AUDIT',
    desc: 'Our senior team conducts a comprehensive on-site assessment. We map every area, identify risk zones, and design a cleaning plan that addresses your specific facility\'s needs.',
    bullets: ['Free of charge', 'Conducted by senior staff', 'Risk assessment included', 'Custom frequency modelling'],
    reverse: true,
  },
  {
    num: '03',
    title: 'CUSTOM SERVICE PLAN',
    desc: 'We build a written service specification with detailed scope, pricing, scheduling, and KPIs. You know exactly what you\'re getting — before we ever start.',
    bullets: ['Written specification', 'Transparent pricing', 'KPI framework', 'SLA documentation'],
    reverse: false,
  },
  {
    num: '04',
    title: 'ONGOING DELIVERY',
    desc: 'Your dedicated EagleWing team delivers consistent, verified cleaning — backed by our CleanProof™ reporting system and DynamiClean™ adaptive scheduling.',
    bullets: ['CleanProof™ reports after every clean', 'DynamiClean™ adaptive scheduling', 'Dedicated account manager', '24/7 emergency response'],
    reverse: true,
  },
];

const vettingSteps = [
  { title: 'Police Check', desc: 'All staff undergo a full police background check before employment.' },
  { title: 'Reference Verification', desc: 'At least two verified employment references are required.' },
  { title: 'Formal Induction', desc: 'Every new team member completes a 2-day formal induction program.' },
  { title: 'Site-Specific Training', desc: 'Additional training for healthcare, school, and industrial environments.' },
  { title: 'Ongoing Assessment', desc: 'Regular performance reviews and quality audits throughout employment.' },
  { title: 'Compliance Records', desc: 'Full insurance, workers comp, and certification records maintained centrally.' },
];

export default function ProcessPage() {
  return (
    <>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link href="/">Home</Link><span className="breadcrumb-sep">/</span><span>Process</span></div></div>

      <section className="inner-hero grid-bg">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: -200, right: -150 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />HOW WE WORK</div>
              <h1>A PROCESS BUILT<br /><span className="gold" style={{ fontStyle: 'italic' }}>FOR RESULTS.</span></h1>
              <p className="inner-hero-body">Four simple steps from first contact to ongoing verified delivery — with CleanProof™ documentation at every stage.</p>
              <div className="inner-hero-ctas">
                <Link href="/get-a-quote" className="btn-gold">START THE PROCESS →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {steps.map((step, i) => (
            <div key={step.num} className={`process-step${step.reverse ? ' reverse' : ''}`}>
              <div className="process-step-num-bg" aria-hidden="true">{step.num}</div>
              <ScrollReveal className="process-step-content">
                <div className="eyebrow"><span className="dot" />STEP {step.num}</div>
                <h2>{step.title}</h2>
                <p>{step.desc}</p>
                <ul>
                  {step.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="glass-card" style={{ padding: '2rem', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="step-number" style={{ width: 80, height: 80, fontSize: '1.5rem' }}>{step.num}</div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }} aria-labelledby="vetting-heading">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 3rem' }}>
            <div className="eyebrow"><span className="dot" />TEAM VETTING</div>
            <h2 id="vetting-heading" className="section-heading">HOW WE HIRE</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>Every EagleWing team member goes through a rigorous vetting process before they set foot in your facility.</p>
          </ScrollReveal>
          <div className="team-vetting-grid">
            {vettingSteps.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08} className="glass-card vetting-card">
                <div className="value-icon"><span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--gold)' }}>0{i + 1}</span></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip section">
        <div className="glow-sphere" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2>READY TO START THE PROCESS?</h2>
            <div className="cta-strip-buttons">
              <Link href="/get-a-quote" className="btn-gold" style={{ padding: '1rem 3rem', boxShadow: '0 0 40px rgba(201,168,76,0.4)' }}>GET A FREE QUOTE →</Link>
              <Link href="/get-a-quote" className="cta-audit-link">OR BOOK A SITE AUDIT</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
