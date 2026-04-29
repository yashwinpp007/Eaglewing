import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface WhyCard { title: string; desc: string; icon: React.ReactNode; }
interface FaqItem  { q: string; a: string; }

interface ServiceDetailPageProps {
  breadcrumb: string;
  eyebrow:    string;
  heroTitle:  React.ReactNode;
  heroBody:   string;
  whyCards:   WhyCard[];
  faqItems:   FaqItem[];
  relatedServices: { href: string; title: string; desc: string }[];
}

export default function ServiceDetailPage({
  breadcrumb, eyebrow, heroTitle, heroBody, whyCards, faqItems, relatedServices,
}: ServiceDetailPageProps) {
  return (
    <>
      <div className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/services">Services</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{breadcrumb}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="inner-hero grid-bg">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: -200, right: -150 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />{eyebrow}</div>
              <h1>{heroTitle}</h1>
              <p className="inner-hero-body">{heroBody}</p>
              <div className="inner-hero-ctas">
                <Link href="/get-a-quote" className="btn-gold">GET A QUOTE →</Link>
                <Link href="/process" className="btn-outline">SEE OUR PROCESS</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 3rem' }}>
            <div className="eyebrow"><span className="dot" />WHY EAGLEWING</div>
            <h2 id="why-heading" className="section-heading">WHY CHOOSE EAGLEWING</h2>
          </ScrollReveal>
          <div className="service-why-grid">
            {whyCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1} className="glass-card service-why-card">
                <div className="value-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="section" style={{ background: 'var(--surface)' }} aria-labelledby="faq-heading">
          <div className="container">
            <ScrollReveal style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 0' }}>
              <div className="eyebrow"><span className="dot" />FAQ</div>
              <h2 id="faq-heading" className="section-heading">COMMON QUESTIONS</h2>
            </ScrollReveal>
            <div className="faq-list">
              {faqItems.map((item) => (
                <div key={item.q} className="faq-item">
                  <div className="faq-question">
                    <h4>{item.q}</h4>
                    <span className="faq-icon">+</span>
                  </div>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section" aria-labelledby="related-heading">
          <div className="container">
            <ScrollReveal>
              <h2 id="related-heading" className="section-heading" style={{ marginBottom: '2rem' }}>RELATED SERVICES</h2>
            </ScrollReveal>
            <div className="related-services-scroll">
              {relatedServices.map((s, i) => (
                <ScrollReveal key={s.href} delay={i * 0.1}>
                  <Link href={s.href} className="glass-card service-card" style={{ display: 'flex' }}>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="gold-link">LEARN MORE →</span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-strip section">
        <div className="glow-sphere" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <h2>READY TO GET STARTED?</h2>
            <div className="cta-strip-buttons">
              <Link href="/get-a-quote" className="btn-gold" style={{ padding: '1rem 3rem', boxShadow: '0 0 40px rgba(201,168,76,0.4)' }}>GET A FREE QUOTE →</Link>
              <Link href="/contact" className="cta-audit-link">OR BOOK A SITE AUDIT</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
