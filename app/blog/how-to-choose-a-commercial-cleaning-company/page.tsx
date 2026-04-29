import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'How to Choose a Commercial Cleaning Company: The Complete Guide',
  description: 'A comprehensive guide to selecting the right commercial cleaning company for your facility. What to look for, what to avoid, and how to evaluate quotes.',
};

const faqs = [
  { q: 'How much should commercial cleaning cost?', a: 'Commercial cleaning costs vary significantly based on facility size, type, frequency, and scope. A small office might cost $150–$400 per clean. A large corporate campus or medical facility can be $1,000+ per visit. Be wary of quotes that seem too low — they usually reflect corners being cut on staff training, equipment quality, or chemical standards.' },
  { q: 'What is CleanProof™ reporting?', a: 'CleanProof™ is EagleWing\'s proprietary verification system. After every clean, your team receives a digital report confirming what was cleaned, who completed it, the time it was done, and any issues flagged for attention. It\'s real accountability, not just trust.' },
  { q: 'How often should an office be cleaned?', a: 'Most corporate offices benefit from daily or 3x/week cleaning. The right frequency depends on your occupancy levels, the nature of the work, and any hygiene requirements. EagleWing\'s DynamiClean™ system uses real usage data to optimise schedules automatically.' },
  { q: 'What\'s the difference between regular cleaning and deep cleaning?', a: 'Regular cleaning maintains day-to-day hygiene — vacuuming, wiping surfaces, bathroom servicing. Deep cleaning addresses accumulated grime, interior glass, behind furniture, appliances, and high-touch surfaces. Most facilities benefit from periodic deep cleans every 3–6 months in addition to regular maintenance cleans.' },
  { q: 'Do cleaning companies need to be insured?', a: 'Yes — and it\'s essential to verify this. Any reputable commercial cleaning company should carry public liability insurance (minimum $10M), workers compensation insurance, and should be able to provide current certificates of currency on request.' },
];

export default function BlogArticlePage() {
  return (
    <>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link href="/">Home</Link><span className="breadcrumb-sep">/</span><Link href="/blog">Blog</Link><span className="breadcrumb-sep">/</span><span>How to Choose a Cleaning Company</span></div></div>

      <section style={{ padding: '6rem 0 0', background: 'var(--base)' }}>
        <div className="container">
          <div className="article-layout">
            {/* Main content */}
            <article className="article-body">
              <ScrollReveal>
                <div className="article-meta">
                  <span className="blog-category-tag">Buying Guide</span>
                  <span>January 2025</span>
                  <span>·</span>
                  <span>8 min read</span>
                </div>
                <h1>How to Choose a Commercial Cleaning Company: The Complete Guide</h1>
                <p className="author-line">By Brian Sylvester, CEO — EagleWing Facility Services</p>
              </ScrollReveal>

              <ScrollReveal>
                <p>With hundreds of commercial cleaning companies competing for your business — many of them undercutters with no real systems, no training, and no accountability — choosing the right provider is harder than it should be. This guide cuts through the noise.</p>

                <div className="glass-card" style={{ padding: '1.5rem 2rem', marginBottom: '2rem', borderLeft: '3px solid var(--gold)' }}>
                  <p style={{ marginBottom: 0, fontStyle: 'italic' }}><strong style={{ color: 'var(--gold)' }}>The short version:</strong> The cheapest quote is almost never the best value. Look for verified processes, documented accountability, real insurance, and a provider who will stand behind their work with data — not just promises.</p>
                </div>

                <h2>1. Verify They Actually Have Systems</h2>
                <p>The biggest differentiator between a professional commercial cleaning company and a one-person operation is whether they have documented systems. Real systems mean written specifications, quality checklists, staff training programs, and digital reporting.</p>
                <p>Ask every provider you evaluate: <em>&ldquo;How do you verify the clean has been completed to specification?&rdquo;</em> If the answer is anything other than a documented digital process, that&apos;s a red flag.</p>
                <ul>
                  <li>Ask for a sample cleaning specification or scope of works document</li>
                  <li>Ask to see their audit trail or reporting system</li>
                  <li>Ask how issues are logged and resolved</li>
                  <li>Ask what happens if the clean doesn&apos;t meet standard</li>
                </ul>

                <h2>2. Check Insurance and Compliance — Actually Check It</h2>
                <p>Any legitimate commercial cleaning company carries public liability insurance (minimum $10M), workers compensation insurance, and relevant compliance certifications. Don&apos;t just ask if they have it — ask for a current certificate of currency.</p>
                <p>Uninsured operators create enormous risk for your organisation. If a team member is injured on your site and the company has no workers comp, you may be liable. If equipment is damaged and there&apos;s no public liability cover, you&apos;re exposed.</p>

                <h2>3. Ask About Staff Vetting and Training</h2>
                <p>Who is actually entering your building? This is the question too many facility managers forget to ask. Professional commercial cleaners should be able to tell you exactly how they vet their staff, what training they undergo, and what verification you can access.</p>
                <p>Minimum standards to look for:</p>
                <ul>
                  <li>Police background checks for all staff</li>
                  <li>Working With Children Checks for school and childcare sites</li>
                  <li>Formal induction training</li>
                  <li>Site-specific inductions for your facility</li>
                  <li>Ongoing performance assessment</li>
                </ul>

                <h2>4. Understand What Technology They Use</h2>
                <p>The cleaning industry has changed dramatically. The best providers now use technology to schedule, verify, report, and continuously improve their service delivery.</p>
                <p>Look for providers who offer digital audit trails, client-accessible reporting portals, and real-time communication channels. A provider who still relies on paper checklists and phone calls is operating a decade behind the standard.</p>

                <h2>5. Evaluate the Quote Properly</h2>
                <p>Commercial cleaning quotes are notoriously difficult to compare. A low quote might use fewer hours, fewer staff, cheaper chemicals, or simply intend to cut corners once they&apos;ve won the contract. A detailed quote should include:</p>
                <ul>
                  <li>Scope of works — exactly what areas and tasks are included</li>
                  <li>Frequency and schedule</li>
                  <li>Chemical specifications</li>
                  <li>Staffing levels and estimated hours</li>
                  <li>Equipment to be deployed</li>
                  <li>Reporting and communication commitments</li>
                  <li>KPIs and service guarantees</li>
                </ul>

                <div className="article-faq">
                  <h2>Frequently Asked Questions</h2>
                  <div className="faq-list">
                    {faqs.map(item => (
                      <div key={item.q} className="faq-item">
                        <div className="faq-question"><h4>{item.q}</h4><span className="faq-icon">+</span></div>
                        <div className="faq-answer"><div className="faq-answer-inner">{item.a}</div></div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="article-related">
                <h2>Related Articles</h2>
                <div className="article-related-grid">
                  {[
                    { title: '7 Signs Your Office Cleaning Company Is Failing You', href: '#' },
                    { title: 'Infection Control in Medical Practices', href: '#' },
                    { title: 'The Real Cost of Cheap Commercial Cleaning', href: '#' },
                  ].map(a => (
                    <div key={a.title} className="glass-card" style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>{a.title}</h3>
                      <Link href={a.href} className="gold-link">READ →</Link>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar">
              <ScrollReveal delay={0.2} className="glass-card sidebar-card">
                <div className="sidebar-author-avatar" aria-hidden="true" />
                <div className="sidebar-author-name">Brian Sylvester</div>
                <div className="sidebar-author-role">CEO &amp; Founder</div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.7 }}>20+ years in commercial facility management. Founder of EagleWing and architect of the Command™ platform.</p>
              </ScrollReveal>

              <ScrollReveal delay={0.3} className="glass-card sidebar-card sidebar-cta-card">
                <h4>Ready to Switch?</h4>
                <p>Get a free quote and site audit from EagleWing — no obligation, 24-hour response.</p>
                <Link href="/get-a-quote" className="btn-gold">GET A FREE QUOTE →</Link>
              </ScrollReveal>

              <ScrollReveal delay={0.4} className="glass-card sidebar-card">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Related Posts</div>
                <div className="sidebar-related-list">
                  {[
                    'Infection Control in Medical Practices',
                    '7 Signs Your Cleaner Is Failing You',
                    'Why Smart Buildings Are Changing Facility Management',
                  ].map(t => (
                    <div key={t} className="sidebar-related-item">
                      <a href="#">{t}</a>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
