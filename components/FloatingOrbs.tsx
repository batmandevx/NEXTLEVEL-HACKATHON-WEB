'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Orb {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color: string;
  blur: number;
}

const orbs: Orb[] = [
  { id: 1, size: 600, x: 20, y: 30, duration: 20, delay: 0, color: 'rgba(0, 232, 214, 0.15)', blur: 100 },
  { id: 2, size: 400, x: 70, y: 60, duration: 25, delay: 2, color: 'rgba(155, 109, 255, 0.12)', blur: 80 },
  { id: 3, size: 500, x: 40, y: 80, duration: 22, delay: 4, color: 'rgba(255, 181, 71, 0.1)', blur: 90 },
  { id: 4, size: 350, x: 80, y: 20, duration: 18, delay: 1, color: 'rgba(0, 229, 160, 0.08)', blur: 70 },
  { id: 5, size: 450, x: 10, y: 70, duration: 28, delay: 3, color: 'rgba(255, 95, 87, 0.08)', blur: 85 },
];

export default function FloatingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const orbs = containerRef.current.querySelectorAll('.floating-orb');
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 10;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        (orb as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="floating-orbs-container">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="floating-orb"
          initial={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
            scale: [0.8, 1.1, 0.9, 1.05, 0.8],
            opacity: 1,
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}
    </div>
  );
}
