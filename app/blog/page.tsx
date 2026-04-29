import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Facility Management Blog — EagleWing',
  description: 'Expert insights on commercial cleaning, infection control, facility management, and building hygiene from the EagleWing team.',
};

const posts = [
  {
    href: '/blog/how-to-choose-a-commercial-cleaning-company',
    title: 'How to Choose a Commercial Cleaning Company: The Complete Guide',
    excerpt: 'With hundreds of commercial cleaners competing for your business, how do you separate the genuine professionals from the undercutters? We break down exactly what to look for.',
    category: 'Buying Guide',
    date: 'Jan 2025',
    featured: true,
  },
  { href: '#', title: '7 Signs Your Office Cleaning Company Is Failing You', excerpt: 'These red flags reveal when your current provider is underdelivering — and what to do about it.', category: 'Office Cleaning', date: 'Coming Soon', featured: false },
  { href: '#', title: 'Infection Control in Medical Practices: What Your Cleaner Should Know', excerpt: 'Most cleaning companies claim they do medical cleaning. Here\'s what the real standard actually looks like.', category: 'Medical Cleaning', date: 'Coming Soon', featured: false },
  { href: '#', title: 'Why Smart Buildings Are Changing Facility Management Forever', excerpt: 'IoT sensors, occupancy data, and AI-driven scheduling are transforming what\'s possible in facility hygiene.', category: 'Technology', date: 'Coming Soon', featured: false },
  { href: '#', title: 'The Real Cost of Cheap Commercial Cleaning (And How to Avoid It)', excerpt: 'Why the lowest quote almost always ends up costing more — and how to evaluate total value instead.', category: 'Buying Guide', date: 'Coming Soon', featured: false },
  { href: '#', title: 'Strata Cleaning: What Body Corporates Need to Know', excerpt: 'A practical guide to managing cleaning contracts for apartment buildings and mixed-use complexes.', category: 'Strata', date: 'Coming Soon', featured: false },
];

export default function BlogPage() {
  return (
    <>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link href="/">Home</Link><span className="breadcrumb-sep">/</span><span>Blog</span></div></div>

      <section className="inner-hero grid-bg">
        <div className="glow-sphere" style={{ width: 600, height: 600, top: -200, right: -150 }} aria-hidden="true" />
        <div className="container">
          <div className="inner-hero-content">
            <ScrollReveal>
              <div className="eyebrow"><span className="dot" />INSIGHTS &amp; RESOURCES</div>
              <h1>THE EAGLEWING<br /><span className="gold" style={{ fontStyle: 'italic' }}>BLOG.</span></h1>
              <p className="inner-hero-body">Expert insights on commercial cleaning, infection control, facility management, and the technology reshaping how Australia&apos;s best facilities operate.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="blog-filter-bar">
              {['All', 'Office Cleaning', 'Medical Cleaning', 'Technology', 'Buying Guide', 'Strata'].map(cat => (
                <button key={cat} className={`filter-btn${cat === 'All' ? ' active' : ''}`}>{cat}</button>
              ))}
            </div>
          </ScrollReveal>

          <div className="blog-grid">
            {posts.map((post, i) => (
              <ScrollReveal key={post.href + post.title} delay={i * 0.07} className={`blog-card${post.featured ? ' featured' : ''}${post.date === 'Coming Soon' ? ' coming-soon' : ''}`}>
                <div className="blog-card-img">
                  <div className="img-placeholder" style={{ aspectRatio: post.featured ? '16/9' : '3/2' }}>
                    {post.featured ? 'FEATURED POST IMAGE' : 'POST IMAGE'}
                  </div>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-category-tag">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  {post.date !== 'Coming Soon' && (
                    <Link href={post.href} className="gold-link">READ MORE →</Link>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
