import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer grid-bg" role="contentinfo">
      <div className="footer-watermark" aria-hidden="true">EAGLEWING</div>

      <div className="footer-cta">
        <div className="container">
          <h2 className="footer-cta-heading">READY TO ELEVATE YOUR FACILITY?</h2>
          <div className="footer-cta-buttons">
            <Link href="/get-a-quote" className="btn-gold">GET A QUOTE →</Link>
            <Link href="/get-a-quote" className="cta-audit-link">OR BOOK A FREE SITE AUDIT</Link>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo-wrap">
                <Image src="/images/logo.png" alt="EagleWing Facility Services" className="footer-logo-img" width={180} height={56} />
              </div>
              <p className="footer-tagline">Rising Above Standards</p>
              <p className="footer-abn">ABN: [TO BE CONFIRMED]</p>
            </div>

            <div className="footer-links-col">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services/commercial-office-cleaning">Commercial Office</Link></li>
                <li><Link href="/services/medical-cleaning">Medical &amp; Healthcare</Link></li>
                <li><Link href="/services/school-cleaning">Education &amp; Schools</Link></li>
                <li><Link href="/services/industrial-cleaning">Industrial</Link></li>
                <li><Link href="/services/retail-hospitality-cleaning">Retail &amp; Hospitality</Link></li>
                <li><Link href="/services/strata-cleaning">Strata</Link></li>
              </ul>
              <h4 style={{ marginTop: '1.25rem' }}>Locations</h4>
              <ul>
                <li><Link href="/locations/melbourne">Melbourne</Link></li>
                <li><Link href="/locations/sydney">Sydney</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact</h4>
              <a href="tel:0413391353" className="footer-phone">0413 391 353</a>
              <a href="mailto:info@eaglewingfacilityservices.com.au" className="footer-email">
                info@eaglewingfacilityservices.com.au
              </a>
              <div className="footer-socials">
                <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" className="footer-social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="footer-social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-copyright-bar">
            <span>© 2025 EAGLEWING FACILITY SERVICES PTY LTD. ALL RIGHTS RESERVED.</span>
            <span>MELBOURNE &amp; SYDNEY, AUSTRALIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
