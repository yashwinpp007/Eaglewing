'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const slides = [
  {
    line1: 'INTELLIGENT CLEANING.',
    line2: 'MEASURABLE RESULTS.',
    body: 'We use smart systems, real data, and advanced cleaning methods to deliver facilities that perform.',
    cta1: { text: 'GET A QUOTE →', href: '/get-a-quote' },
    cta2: { text: '📅 BOOK A SITE AUDIT', href: '/get-a-quote' },
  },
  {
    line1: 'YOUR FACILITY DESERVES',
    line2: 'BETTER THAN CLEAN.',
    body: 'EagleWing delivers precision-maintained environments that reflect your brand and protect your people.',
    cta1: { text: 'SEE OUR SERVICES →', href: '/services' },
    cta2: { text: 'GET A QUOTE', href: '/get-a-quote' },
  },
  {
    line1: 'PEOPLE YOU CAN',
    line2: 'TRUST. EVERY TIME.',
    body: 'Every team member is background-checked, formally trained, and verified — before they set foot in your facility.',
    cta1: { text: 'MEET OUR PROCESS →', href: '/process' },
    cta2: { text: '📅 BOOK A SITE AUDIT', href: '/get-a-quote' },
  },
  {
    line1: 'MEDICAL-GRADE CLEAN.',
    line2: 'ZERO COMPROMISE.',
    body: 'Infection control protocols meeting the highest hygiene standards — for healthcare, clinics, and allied health.',
    cta1: { text: 'INFECTION CONTROL →', href: '/services/medical-cleaning' },
    cta2: { text: 'GET A QUOTE', href: '/get-a-quote' },
  },
  {
    line1: "SERVING AUSTRALIA'S",
    line2: 'LEADING BUSINESSES.',
    body: 'From corporate towers to medical centres — Melbourne and Sydney facilities trust EagleWing every day.',
    cta1: { text: 'WHERE WE CLEAN →', href: '/locations' },
    cta2: { text: 'GET A QUOTE', href: '/get-a-quote' },
  },
];

const barHeights = [40, 65, 90, 55, 75, 85, 50];

export default function HeroSection() {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [paused, setPaused]       = useState(false);
  const timerRef                  = useRef<ReturnType<typeof setInterval> | null>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLElement>(null);

  const leftX  = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const leftY  = useTransform(mouseY, [-0.5, 0.5], [-7,  7]);
  const dashX  = useTransform(mouseX, [-0.5, 0.5], [16, -16]);
  const dashY  = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  const goTo = useCallback((idx: number, dir: 'next' | 'prev') => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length, 'next'), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, 'prev'), [current, goTo]);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(next, 8000);
  }, [next]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (!paused) startTimer();
    return stopTimer;
  }, [paused, startTimer, stopTimer]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r  = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  // Framer Motion slide variants
  const variants = {
    enter: (dir: string) => ({
      x: dir === 'next' ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: string) => ({
      x: dir === 'next' ? -60 : 60,
      opacity: 0,
    }),
  };

  // Particle data (stable across renders via useMemo-like initializer)
  const particles = useRef(
    Array.from({ length: 48 }, () => ({
      left:     Math.random() * 100,
      top:      Math.random() * 100,
      size:     1.5 + Math.random() * 3,
      duration: 4 + Math.random() * 9,
      delay:    -Math.random() * 10,
      opacity:  0.15 + Math.random() * 0.55,
    }))
  ).current;

  const slide = slides[current];

  return (
    <section
      ref={heroRef}
      className="hero-home grid-bg"
      aria-label="Hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setPaused(true)}
    >
      {/* Glow spheres */}
      <div className="glow-sphere" style={{ width: 700, height: 700, top: -200, left: -200 }} aria-hidden="true" />
      <div className="glow-sphere" style={{ width: 500, height: 500, top: '40%', right: -150, animationDelay: '-3s' }} aria-hidden="true" />
      <div className="glow-sphere" style={{ width: 300, height: 300, bottom: -100, left: '30%', animationDelay: '-5s', opacity: 0.5 }} aria-hidden="true" />

      {/* Orbit rings */}
      <div className="orbit-rings" aria-hidden="true">
        <div className="orbit-ring orbit-ring-1" />
        <div className="orbit-ring orbit-ring-2" />
        <div className="orbit-ring orbit-ring-3" />
      </div>

      {/* Particles */}
      <div className="hero-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left:              `${p.left}%`,
              top:               `${p.top}%`,
              width:             p.size,
              height:            p.size,
              animationDuration: `${p.duration}s`,
              animationDelay:    `${p.delay}s`,
              opacity:           p.opacity,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Left — slide content */}
          <motion.div className="hero-left" style={{ x: leftX, y: leftY }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Eyebrow */}
                <motion.div
                  className="eyebrow hero-eyebrow"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.6 }}
                >
                  <span className="dot" aria-hidden="true" />
                  INTELLIGENT FACILITY MANAGEMENT
                </motion.div>

                {/* Headline */}
                <motion.h1
                  className="hero-headline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="line-1">{slide.line1}</span>
                  <span className="line-2">{slide.line2}</span>
                </motion.h1>

                {/* Body */}
                <motion.p
                  className="hero-body"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.6 }}
                >
                  {slide.body}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  className="hero-ctas"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.6 }}
                >
                  <Link href={slide.cta1.href} className="btn-gold">{slide.cta1.text}</Link>
                  <Link href={slide.cta2.href} className="btn-outline">{slide.cta2.text}</Link>
                </motion.div>

                {/* Stats */}
                <motion.p
                  className="hero-stats mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  20+ YEARS EXPERIENCE &nbsp;·&nbsp; 500+ FACILITIES MANAGED &nbsp;·&nbsp; 98% CLIENT RETENTION
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right — Dashboard */}
          <motion.div className="hero-dashboard" style={{ x: dashX, y: dashY }} aria-hidden="true">
            <div className="glass-card dashboard-card" id="hero-dash-card">
              <div className="dashboard-scan-line" />
              <div className="dashboard-header">
                <span className="dashboard-title">EAGLEWING COMMAND™</span>
                <span className="dashboard-live"><span className="dot" />LIVE</span>
              </div>
              <div className="dashboard-bars">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="dashboard-bar"
                    style={{ height: `${h}%` }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  />
                ))}
              </div>
              <div className="dashboard-metrics">
                <div className="metric-pill">
                  <span className="metric-value">98%</span>
                  <span className="metric-label">Audit Score</span>
                </div>
                <div className="metric-pill">
                  <span className="metric-value">500+</span>
                  <span className="metric-label">Facilities Active</span>
                </div>
              </div>
            </div>
            <div className="dashboard-mini">✓ AI VERIFIED CLEAN</div>
          </motion.div>
        </div>
      </div>

      {/* Arrows */}
      <button
        className="hero-arrow hero-arrow-prev"
        id="hero-prev"
        aria-label="Previous slide"
        onClick={() => { stopTimer(); prev(); setPaused(false); }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true" width={20} height={20}>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="hero-arrow hero-arrow-next"
        id="hero-next"
        aria-label="Next slide"
        onClick={() => { stopTimer(); next(); setPaused(false); }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true" width={20} height={20}>
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="hero-indicators" aria-label="Slide navigation" role="tablist">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            role="tab"
            aria-label={`Slide ${i + 1}`}
            tabIndex={0}
            className={`hero-indicator${i === current ? ' active' : ''}`}
            onClick={() => { stopTimer(); goTo(i, i > current ? 'next' : 'prev'); setPaused(false); }}
            animate={{ height: i === current ? 56 : 40, background: i === current ? '#c9a84c' : 'rgba(235,235,235,0.3)' }}
            transition={{ duration: 0.35 }}
            onKeyDown={(e) => e.key === 'Enter' && (() => { stopTimer(); goTo(i, i > current ? 'next' : 'prev'); setPaused(false); })()}
          />
        ))}
      </div>
    </section>
  );
}
