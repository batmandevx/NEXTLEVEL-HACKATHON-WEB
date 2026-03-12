'use client';

import { motion } from 'framer-motion';

export default function AuroraBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: '150%',
          height: '150%',
          top: '-25%',
          left: '-25%',
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 232, 214, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(155, 109, 255, 0.1), transparent),
            radial-gradient(ellipse 50% 30% at 20% 80%, rgba(255, 181, 71, 0.08), transparent)
          `,
          filter: 'blur(60px)',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(1, 1, 8, 0.8))
          `,
        }}
      />
    </div>
  );
}
