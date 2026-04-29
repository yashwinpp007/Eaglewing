/* ============================================================
   EAGLEWING FACILITY SERVICES — MAIN JAVASCRIPT
   main.js — All interactive behaviour
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Nav Toggle ─────────────────────────────────── */
  const hamburger = document.querySelector('.nav-hamburger');
  const overlay   = document.querySelector('.nav-overlay');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      overlay.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    overlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Sticky Header Shrink ──────────────────────────────── */
  const siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    const onScroll = () => {
      siteNav.classList.toggle('scrolled', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Active Nav Link ───────────────────────────────────── */
  (function setActiveNav() {
    const path = window.location.pathname;
    const filename = path.split('/').filter(Boolean).pop() || 'index.html';
    document.querySelectorAll('.nav-pill a, .nav-overlay a').forEach(a => {
      const href = a.getAttribute('href') || '';
      const hFile = href.split('/').filter(Boolean).pop() || 'index.html';
      if (hFile === filename) a.classList.add('active');
    });
  })();

  /* ── Hero Slide Cycle ──────────────────────────────────── */
  const slides = [
    {
      line1: 'INTELLIGENT CLEANING.',
      line2: 'MEASURABLE RESULTS.',
      body: 'We use smart systems, real data, and advanced cleaning methods to deliver facilities that perform.',
      cta1: { text: 'GET A QUOTE →', href: null },
      cta2: { text: '📅 BOOK A SITE AUDIT', href: null }
    },
    {
      line1: 'YOUR FACILITY DESERVES',
      line2: 'BETTER THAN CLEAN.',
      body: 'EagleWing delivers precision-maintained environments that reflect your brand and protect your people.',
      cta1: { text: 'SEE OUR SERVICES →', href: 'services/index.html' },
      cta2: { text: 'GET A QUOTE', href: 'get-a-quote.html' }
    },
    {
      line1: 'PEOPLE YOU CAN',
      line2: 'TRUST. EVERY TIME.',
      body: 'Every team member is background-checked, formally trained, and verified — before they set foot in your facility.',
      cta1: { text: 'MEET OUR PROCESS →', href: 'process.html' },
      cta2: { text: '📅 BOOK A SITE AUDIT', href: null }
    },
    {
      line1: 'MEDICAL-GRADE CLEAN.',
      line2: 'ZERO COMPROMISE.',
      body: 'Infection control protocols meeting the highest hygiene standards — for healthcare, clinics, and allied health.',
      cta1: { text: 'INFECTION CONTROL →', href: 'services/medical-cleaning.html' },
      cta2: { text: 'GET A QUOTE', href: 'get-a-quote.html' }
    },
    {
      line1: "SERVING AUSTRALIA'S",
      line2: 'LEADING BUSINESSES.',
      body: 'From corporate towers to medical centres — Melbourne and Sydney facilities trust EagleWing every day.',
      cta1: { text: 'WHERE WE CLEAN →', href: 'locations/index.html' },
      cta2: { text: 'GET A QUOTE', href: 'get-a-quote.html' }
    }
  ];

  const line1El    = document.querySelector('.hero-headline .line-1');
  const line2El    = document.querySelector('.hero-headline .line-2');
  const bodyEl     = document.querySelector('.hero-body');
  const cta1El     = document.querySelector('.hero-cta-1');
  const cta2El     = document.querySelector('.hero-cta-2');
  const indicators = document.querySelectorAll('.hero-indicator');
  const heroLeft   = document.querySelector('.hero-left');
  const prevBtn    = document.getElementById('hero-prev');
  const nextBtn    = document.getElementById('hero-next');

  if (line1El && line2El && bodyEl) {
    let current   = 0;
    let timer     = null;
    let animating = false;

    function applyContent(idx) {
      const s = slides[idx];
      line1El.textContent = s.line1;
      line2El.textContent = s.line2;
      bodyEl.textContent  = s.body;
      if (cta1El) {
        cta1El.textContent = s.cta1.text;
        cta1El.setAttribute('href', s.cta1.href || 'get-a-quote.html');
      }
      if (cta2El) {
        cta2El.textContent = s.cta2.text;
        cta2El.setAttribute('href', s.cta2.href || 'get-a-quote.html');
      }
      indicators.forEach((bar, i) => bar.classList.toggle('active', i === idx));
    }

    function goToSlide(idx, direction) {
      if (animating) return;
      animating = true;
      const exitClass  = direction === 'next' ? 'slide-exit-left'   : 'slide-exit-right';
      const enterClass = direction === 'next' ? 'slide-enter-right'  : 'slide-enter-left';

      if (heroLeft) {
        heroLeft.classList.add(exitClass);
        setTimeout(() => {
          heroLeft.classList.remove(exitClass);
          current = idx;
          applyContent(current);
          heroLeft.classList.add(enterClass);
          heroLeft.addEventListener('animationend', function cleanup() {
            heroLeft.classList.remove(enterClass);
            heroLeft.removeEventListener('animationend', cleanup);
            animating = false;
          });
        }, 280);
      } else {
        current = idx;
        applyContent(current);
        animating = false;
      }
    }

    function next() { goToSlide((current + 1) % slides.length, 'next'); }
    function prev() { goToSlide((current - 1 + slides.length) % slides.length, 'prev'); }

    function startTimer() { timer = setInterval(next, 5000); }
    function stopTimer()  { clearInterval(timer); }

    if (prevBtn) prevBtn.addEventListener('click', () => { stopTimer(); prev(); startTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopTimer(); next(); startTimer(); });

    indicators.forEach((bar, i) => {
      bar.addEventListener('click', () => {
        if (i === current) return;
        stopTimer();
        goToSlide(i, i > current ? 'next' : 'prev');
        startTimer();
      });
    });

    const heroSection = document.querySelector('.hero-home');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', stopTimer);
      heroSection.addEventListener('mouseleave', startTimer);
    }

    applyContent(0);
    startTimer();
  }

  /* ── Scroll Reveal (IntersectionObserver) ──────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  /* Stagger delay for grid children */
  document.querySelectorAll('.services-grid, .testimonials-grid, .bento-grid, .values-grid, .services-hub-grid, .blog-grid').forEach(grid => {
    const children = grid.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  /* ── FAQ Accordion ─────────────────────────────────────── */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Blog Category Filter ──────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const blogCards  = document.querySelectorAll('.blog-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      blogCards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── Hero Particles ────────────────────────────────────── */
  (function spawnParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    const count = 48;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = 'hero-particle';
      const size = 1.5 + Math.random() * 3;
      p.style.cssText = [
        'left:'              + (Math.random() * 100) + '%',
        'top:'               + (Math.random() * 100) + '%',
        'width:'             + size + 'px',
        'height:'            + size + 'px',
        'animation-duration:'  + (4 + Math.random() * 9) + 's',
        'animation-delay:'     + (-Math.random() * 10) + 's',
        'opacity:'             + (0.15 + Math.random() * 0.55)
      ].join(';');
      container.appendChild(p);
    }
  })();

  /* ── Hero Mouse Parallax ────────────────────────────────── */
  (function heroParallax() {
    const hero   = document.querySelector('.hero-home');
    if (!hero) return;
    const left   = hero.querySelector('.hero-left');
    const dash   = hero.querySelector('.hero-dashboard');
    const rings  = hero.querySelectorAll('.orbit-ring');
    const spheres = hero.querySelectorAll('.glow-sphere');
    let raf = null;
    let tx = 0, ty = 0;

    hero.addEventListener('mousemove', (e) => {
      const r  = hero.getBoundingClientRect();
      const cx = (e.clientX - r.left)  / r.width  - 0.5;
      const cy = (e.clientY - r.top)   / r.height - 0.5;
      tx = cx; ty = cy;
      if (!raf) raf = requestAnimationFrame(applyParallax);
    });

    hero.addEventListener('mouseleave', () => {
      tx = 0; ty = 0;
      if (!raf) raf = requestAnimationFrame(applyParallax);
    });

    function applyParallax() {
      raf = null;
      if (left)  left.style.transform  = `translate(${tx * 10}px, ${ty * 7}px)`;
      if (dash)  dash.style.transform  = `translate(${tx * -16}px, ${ty * -10}px)`;
      rings.forEach((ring, i) => {
        const f = (i + 1) * (i % 2 === 0 ? 22 : -14);
        ring.style.transform = `rotate(${ring.style.getPropertyValue('--base-rot') || '0deg'}) translate(${tx * f * 0.4}px, ${ty * f * 0.3}px)`;
      });
      spheres.forEach((s, i) => {
        const f = i % 2 === 0 ? 28 : -18;
        s.style.transform = `translate(${tx * f}px, ${ty * f * 0.7}px)`;
      });
    }
  })();

  /* ── Dashboard Bars Animate In ──────────────────────────── */
  (function animateDashBars() {
    const card = document.getElementById('hero-dash-card');
    if (!card) return;
    const bars = card.querySelectorAll('.dashboard-bar');
    bars.forEach((bar, i) => {
      bar.style.transformOrigin = 'bottom';
      bar.style.animation = `dashBarLoad 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.6 + i * 0.1}s both`;
    });
  })();

  /* ── Counter Animation ─────────────────────────────────── */
  function animateCounter(el) {
    const target = el.dataset.target;
    const suffix = target.replace(/[0-9]/g, '');
    const num    = parseInt(target, 10);
    const duration = 1600;
    const start  = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * num) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

})();
