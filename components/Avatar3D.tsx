'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Avatar from 'boring-avatars';
import { useRef, useState } from 'react';

interface Avatar3DProps {
  name: string;
  size?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
  variant?: 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus';
}

export default function Avatar3D({ 
  name, 
  size = 90,
  color1 = '#00e8d6',
  color2 = '#9b6dff', 
  color3 = '#ffb547',
  color4 = '#ff5f57',
  color5 = '#00e5a0',
  variant = 'marble'
}: Avatar3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  const colors = [color1, color2, color3, color4, color5];
  
  return (
    <motion.div
      ref={ref}
      className="avatar-3d-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="avatar-glow-ring"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          inset: -10,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${color1}30, transparent 70%)`,
          filter: 'blur(20px)',
          zIndex: 0,
        }}
      />
      
      {/* Rotating border ring */}
      <motion.div
        className="avatar-border-ring"
        animate={{
          rotate: 360,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
          scale: { duration: 0.3 },
        }}
        style={{
          position: 'absolute',
          inset: -4,
          borderRadius: '50%',
          padding: 3,
          background: `conic-gradient(from 0deg, ${color1}, ${color2}, ${color3}, ${color4}, ${color5}, ${color1})`,
          zIndex: 1,
        }}
      >
        <div style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '50%', 
          background: 'var(--surface, #070718)' 
        }} />
      </motion.div>
      
      {/* Main avatar container with 3D tilt */}
      <motion.div
        className="avatar-3d-main"
        style={{
          width: size,
          height: size,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Avatar inner */}
        <motion.div
          className="avatar-inner"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: `0 10px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)`,
          }}
          animate={{
            boxShadow: isHovered 
              ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${color1}40, inset 0 0 0 1px rgba(255,255,255,0.2)`
              : `0 10px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)`,
          }}
        >
          <Avatar
            size={size}
            name={name}
            variant={variant}
            colors={colors}
          />
        </motion.div>
        
        {/* Shine effect */}
        <motion.div
          className="avatar-shine"
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            borderRadius: '50%',
            zIndex: 3,
            pointerEvents: 'none',
          }}
          animate={{
            left: isHovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />
        
        {/* Floating particles around avatar */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="avatar-particle"
                initial={{ 
                  scale: 0, 
                  opacity: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: Math.cos(i * 60 * Math.PI / 180) * 60,
                  y: Math.sin(i * 60 * Math.PI / 180) * 60,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                style={{
                  position: 'absolute',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: colors[i % colors.length],
                  top: '50%',
                  left: '50%',
                  marginLeft: -3,
                  marginTop: -3,
                  boxShadow: `0 0 10px ${colors[i % colors.length]}`,
                  zIndex: 4,
                }}
              />
            ))}
          </>
        )}
      </motion.div>
      
      {/* Reflection */}
      <motion.div
        className="avatar-reflection"
        style={{
          position: 'absolute',
          bottom: -size * 0.4,
          left: '50%',
          width: size * 0.8,
          height: size * 0.3,
          marginLeft: -(size * 0.4),
          background: `radial-gradient(ellipse, ${color1}20, transparent 70%)`,
          filter: 'blur(10px)',
          borderRadius: '50%',
          transform: 'scaleY(-1)',
          opacity: 0.3,
          zIndex: 0,
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0.3,
          scale: isHovered ? 1.1 : 1,
        }}
      />
    </motion.div>
  );
}
