'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { useRef, useState, useMemo } from 'react';

interface AvatarHumanProps {
  seed: string;
  size?: number;
  primaryColor?: string;
}

export default function AvatarHuman({ 
  seed, 
  size = 100,
  primaryColor = '#00e8d6'
}: AvatarHumanProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
  
  // Generate avatar SVG
  const avatarSvg = useMemo(() => {
    const avatar = createAvatar(avataaars, {
      seed,
      size: size * 2,
      backgroundColor: ['transparent'],
    });
    return avatar.toString();
  }, [seed, size]);
  
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

  return (
    <motion.div
      ref={ref}
      className="avatar-human-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        width: size,
        height: size,
        position: 'relative',
      }}
    >
      {/* Outer glow */}
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.6 : 0.2,
        }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          inset: -8,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${primaryColor}40, transparent 70%)`,
          filter: 'blur(15px)',
          zIndex: 0,
        }}
      />
      
      {/* Animated ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: -3,
          borderRadius: '50%',
          padding: 2,
          background: `conic-gradient(from 0deg, ${primaryColor}, transparent, ${primaryColor})`,
          zIndex: 1,
          opacity: isHovered ? 1 : 0.5,
        }}
      >
        <div style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '50%', 
          background: 'var(--void, #010108)' 
        }} />
      </motion.div>
      
      {/* Main avatar with 3D tilt */}
      <motion.div
        className="avatar-human-main"
        style={{
          width: '100%',
          height: '100%',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          zIndex: 2,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: `0 10px 40px rgba(0,0,0,0.4), inset 0 0 0 2px ${primaryColor}30`,
        }}
        animate={{
          boxShadow: isHovered 
            ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${primaryColor}50, inset 0 0 0 2px ${primaryColor}`
            : `0 10px 40px rgba(0,0,0,0.4), inset 0 0 0 2px ${primaryColor}30`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Avatar SVG */}
        <div 
          dangerouslySetInnerHTML={{ __html: avatarSvg }}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        
        {/* Shine effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
          animate={{
            x: isHovered ? ['0%', '200%'] : '0%',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
      
      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                scale: 0, 
                opacity: 0,
                x: 0,
                y: 0,
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: Math.cos(i * 72 * Math.PI / 180) * 50,
                y: Math.sin(i * 72 * Math.PI / 180) * 50,
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
              style={{
                position: 'absolute',
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: primaryColor,
                top: '50%',
                left: '50%',
                marginLeft: -2,
                marginTop: -2,
                boxShadow: `0 0 10px ${primaryColor}`,
                zIndex: 4,
              }}
            />
          ))}
        </>
      )}
      
      {/* Reflection */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: -size * 0.3,
          left: '50%',
          width: size * 0.7,
          height: size * 0.25,
          marginLeft: -(size * 0.35),
          background: `radial-gradient(ellipse, ${primaryColor}15, transparent 70%)`,
          filter: 'blur(8px)',
          borderRadius: '50%',
          transform: 'scaleY(-1)',
          zIndex: 0,
        }}
        animate={{
          opacity: isHovered ? 0.4 : 0.2,
          scale: isHovered ? 1.1 : 1,
        }}
      />
    </motion.div>
  );
}
