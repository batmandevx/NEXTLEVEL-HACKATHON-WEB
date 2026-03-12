'use client';

import { motion } from 'framer-motion';
import Avatar from 'boring-avatars';

interface Avatar3DProps {
  name: string;
  size?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
}

export default function Avatar3D({ 
  name, 
  size = 72,
  color1 = '#00e8d6',
  color2 = '#9b6dff', 
  color3 = '#ffb547',
  color4 = '#ff5f57',
  color5 = '#00e5a0'
}: Avatar3DProps) {
  const colors = [color1, color2, color3, color4, color5];
  
  return (
    <motion.div
      className="avatar-3d-wrapper"
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        rotateX: -10,
      }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        className="avatar-3d-inner"
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: `0 0 30px ${color1}40, 0 10px 40px rgba(0,0,0,0.3)`,
          border: `3px solid ${color1}`,
        }}
        whileHover={{
          boxShadow: `0 0 50px ${color1}60, 0 15px 50px rgba(0,0,0,0.4)`,
        }}
      >
        <Avatar
          size={size}
          name={name}
          variant="marble"
          colors={colors}
        />
      </motion.div>
      
      {/* 3D shine effect */}
      <motion.div
        className="avatar-shine"
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          borderRadius: '50%',
        }}
        animate={{
          left: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 4,
        }}
      />
    </motion.div>
  );
}
