'use client';

import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', size: 300, x: '10%', y: '20%', color: 'rgba(0, 232, 214, 0.03)', delay: 0 },
  { type: 'circle', size: 200, x: '85%', y: '60%', color: 'rgba(155, 109, 255, 0.03)', delay: 0.5 },
  { type: 'square', size: 150, x: '75%', y: '15%', color: 'rgba(255, 181, 71, 0.03)', delay: 1 },
  { type: 'circle', size: 250, x: '5%', y: '70%', color: 'rgba(255, 95, 87, 0.03)', delay: 1.5 },
  { type: 'square', size: 100, x: '50%', y: '80%', color: 'rgba(0, 229, 160, 0.03)', delay: 2 },
  { type: 'circle', size: 180, x: '90%', y: '30%', color: 'rgba(56, 189, 248, 0.03)', delay: 2.5 },
];

export default function FloatingShapes() {
  return (
    <div className="floating-shapes" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '20%',
            background: `radial-gradient(circle, ${shape.color}, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            scale: [1, 1.1, 1, 0.9, 1],
            rotate: shape.type === 'square' ? [0, 90, 180, 270, 360] : 0,
          }}
          transition={{
            duration: 20,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
