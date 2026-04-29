'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'About',          href: '/about' },
  { label: 'What We Do',     href: '/services' },
  { label: 'Where We Clean', href: '/locations' },
  { label: 'Technology',     href: '/technology' },
  { label: 'Process',        href: '/process' },
  { label: 'Blog',           href: '/blog' },
  { label: 'Contact',        href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`site-nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="EagleWing Facility Services home">
            <Image
              src="/images/logo.png"
              alt="EagleWing Facility Services"
              className="nav-logo-img"
              width={160}
              height={52}
              priority
            />
          </Link>

          <div className="nav-pill" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className={pathname === link.href || pathname.startsWith(link.href + '/') ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-right">
            <a href="tel:0413391353" className="nav-phone" aria-label="Call EagleWing">
              <span className="dot" aria-hidden="true" />
              0413 391 353
            </a>
            <Link href="/get-a-quote" className="btn-gold">GET A QUOTE</Link>
          </div>

          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-overlay${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/get-a-quote" className="btn-gold nav-overlay-cta" onClick={() => setMenuOpen(false)}>
          GET A QUOTE →
        </Link>
      </div>
    </>
  );
}
