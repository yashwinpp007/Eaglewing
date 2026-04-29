'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  target: string; // e.g. "98%" or "500+"
}

export default function Counter({ target }: CounterProps) {
  const suffix  = target.replace(/[0-9]/g, '');
  const num     = parseInt(target, 10);
  const [value, setValue] = useState(0);
  const ref     = useRef<HTMLSpanElement>(null);
  const inView  = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start    = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * num));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, num]);

  return (
    <span ref={ref} className="counter">
      {value}{suffix}
    </span>
  );
}
