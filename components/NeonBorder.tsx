'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface NeonBorderProps {
  children: ReactNode;
  className?: string;
  color?: string;
  intensity?: number;
}

export default function NeonBorder({
  children,
  className = '',
  color = 'var(--teal)',
  intensity = 1,
}: NeonBorderProps) {
  return (
    <motion.div
      className={`neon-border ${className}`}
      style={{ '--neon-color': color, '--neon-intensity': intensity } as React.CSSProperties}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="neon-border-glow" />
      <div className="neon-border-content">{children}</div>
    </motion.div>
  );
}
