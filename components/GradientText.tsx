'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animate?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#00e8d6', '#9b6dff', '#ffb547', '#ff5f57', '#00e5a0'],
  animate = true,
}: GradientTextProps) {
  const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;

  return (
    <motion.span
      className={`gradient-text-animated ${className}`}
      style={{
        background: gradient,
        backgroundSize: animate ? '200% 200%' : '100% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        display: 'inline-block',
      }}
      animate={animate ? {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      } : {}}
      transition={animate ? {
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      } : {}}
    >
      {children}
    </motion.span>
  );
}
