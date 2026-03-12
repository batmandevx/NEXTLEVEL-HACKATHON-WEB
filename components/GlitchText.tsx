'use client';

import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <motion.div
      className={`glitch-text-wrapper ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="glitch-text" data-text={text}>
        {text}
      </span>
      <span className="glitch-text-clone glitch-text-clone-1" aria-hidden="true">
        {text}
      </span>
      <span className="glitch-text-clone glitch-text-clone-2" aria-hidden="true">
        {text}
      </span>
    </motion.div>
  );
}
