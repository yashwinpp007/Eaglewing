import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'EagleWing Command™ — Facility Intelligence Technology',
  description: 'EagleWing Command™ is Australia\'s most advanced facility management platform. Real-time dashboards, QR audit trails, and CleanProof™ reporting.',
};

const features = [
  {
    label: 'PLATFORM',
    title: 'EAGLEWING COMMAND™',
    desc: 'Our proprietary facility intelligence platform gives you real-time visibility into every clean — across every site. Audit scores, QR check-ins, and CleanProof™ reports all in one dashboard.',
    features: ['Live facility dashboard', 'Client portal access', 'Real-time alerts', 'Multi-site management'],
    reverse: false,
  },
  {
    label: 'METHODOLOGY',
    title: 'DYNAMICLEAN™',
    desc: 'Traditional cleaning schedules ignore reality. DynamiClean™ uses occupancy sensor data and usage patterns to dynamically adjust cleaning frequency — so high-traffic areas always get the attention they need.',
    features: ['Occupancy-responsive scheduling', 'IoT sensor integration', 'Usage analytics', 'Waste reduction'],
    reverse: true,
  },
  {
    label: 'VERIFICATION',
    title: 'CLEANPROOF™ REPORTING',
    desc: 'CleanProof™ is our verification layer — the proof that every clean has been completed to specification. Digital sign-off, photographic evidence, and ATP test results delivered to your inbox after every service.',
    features: ['Digital sign-off system', 'ATP swab testing', 'Photographic evidence', 'Compliance documentation'],
    reverse: false,
  },
];

export default function TechnologyPage() {
  return (
    <>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link href="/">Home</Link><span className="breadcrumb-sep">/</span><span>Technology</span></div></div>

      <section className="inner-hero grid-bg">
        <div className="glow-sphere" style={{ width: 700, height: 700, top: -300, right: -200 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />FACILITY INTELLIGENCE</div>
              <h1>CLEANING POWERED<br /><span className="gold" style={{ fontStyle: 'italic' }}>BY DATA.</span></h1>
              <p className="inner-hero-body">EagleWing Command™ is not just a cleaning management system — it&apos;s a facility intelligence platform that proves performance, prevents problems, and continuously improves outcomes.</p>
              <div className="inner-hero-ctas">
                <Link href="/get-a-quote" className="btn-gold">REQUEST A DEMO →</Link>
                <Link href="/process" className="btn-outline">SEE OUR PROCESS</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {features.map((f, i) => (
            <div key={f.title} className={`tech-feature${f.reverse ? ' reverse' : ''}`}>
              <ScrollReveal delay={0.1} className="tech-feature-text">
                <div className="eyebrow"><span className="dot" />{f.label}</div>
                <h2>{f.title}</h2>
                <p>{f.desc}</p>
                <ul>
                  {f.features.map(feat => <li key={feat}>{feat}</li>)}
                </ul>
                <div style={{ marginTop: '2rem' }}>
                  <Link href="/get-a-quote" className="btn-gold">GET A DEMO →</Link>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="glass-card dashboard-card" style={{ animation: i % 2 === 0 ? 'float 6s ease-in-out infinite' : 'float 6s ease-in-out 2s infinite' }}>
                  <div className="dashboard-scan-line" />
                  <div className="dashboard-header">
                    <span className="dashboard-title">{f.title}</span>
                    <span className="dashboard-live"><span className="dot" />LIVE</span>
                  </div>
                  <div className="dashboard-bars" style={{ height: 80 }}>
                    {[40, 65, 90, 55, 75, 85, 50].map((h, j) => <div key={j} className="dashboard-bar" style={{ height: `${h}%` }} />)}
                  </div>
                  <div className="dashboard-metrics">
                    <div className="metric-pill"><span className="metric-value">98%</span><span className="metric-label">Score</span></div>
                    <div className="metric-pill"><span className="metric-value">LIVE</span><span className="metric-label">Status</span></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-strip section">
        <div className="glow-sphere" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2>SEE COMMAND™ IN ACTION</h2>
            <div className="cta-strip-buttons">
              <Link href="/get-a-quote" className="btn-gold" style={{ padding: '1rem 3rem', boxShadow: '0 0 40px rgba(201,168,76,0.4)' }}>REQUEST A DEMO →</Link>
              <Link href="/get-a-quote" className="cta-audit-link">OR GET A FREE QUOTE</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
