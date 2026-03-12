'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

const variants = {
  primary: {
    background: '#00e8d6',
    color: '#010108',
    glow: 'rgba(0, 232, 214, 0.5)',
  },
  secondary: {
    background: 'transparent',
    color: '#dde4f2',
    glow: 'rgba(255, 255, 255, 0.2)',
  },
  accent: {
    background: '#ffb547',
    color: '#010108',
    glow: 'rgba(255, 181, 71, 0.5)',
  },
};

const sizes = {
  sm: { padding: '8px 20px', fontSize: '10px' },
  md: { padding: '13px 34px', fontSize: '11px' },
  lg: { padding: '18px 48px', fontSize: '12px' },
};

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: GlowButtonProps) {
  const v = variants[variant];
  const s = sizes[size];

  const ButtonContent = (
    <motion.span
      className={`glow-button ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: s.padding,
        fontFamily: "'DM Mono', monospace",
        fontSize: s.fontSize,
        fontWeight: 500,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        background: v.background,
        color: v.color,
        border: variant === 'secondary' ? '1px solid rgba(255,255,255,0.2)' : 'none',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2px',
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 40px ${v.glow}, 0 0 80px ${v.glow}`,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)',
          transform: 'translateX(-100%)',
        }}
        whileHover={{ transform: 'translateX(0)' }}
        transition={{ duration: 0.4 }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={{ textDecoration: 'none', display: 'inline-block' }}
      >
        {ButtonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      style={{ background: 'none', border: 'none', padding: 0 }}
    >
      {ButtonContent}
    </motion.button>
  );
}
