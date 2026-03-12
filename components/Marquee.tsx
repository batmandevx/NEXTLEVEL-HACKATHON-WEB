'use client';

import { motion } from 'framer-motion';

const items = [
  { icon: '🤖', text: 'AI / ML', sub: 'Track Open' },
  { icon: '💰', text: 'Prize Pool', sub: '$7,001' },
  { icon: '📅', text: 'Deadline', sub: 'Mar 23, 2026' },
  { icon: '☁️', text: 'Cloud', sub: 'Track Open' },
  { icon: '👥', text: 'Judges', sub: '29 Experts' },
  { icon: '🔗', text: 'Web3', sub: 'Track Open' },
  { icon: '🏆', text: 'Winners', sub: 'Mar 30, 2026' },
  { icon: '🔐', text: 'Cybersecurity', sub: 'Track Open' },
  { icon: '🌍', text: 'Open to', sub: 'Everyone' },
  { icon: '🎁', text: 'Perfect Corp', sub: '200 Free API Units' },
];

export default function Marquee() {
  const all = [...items, ...items, ...items, ...items];

  return (
    <motion.div 
      className="mqstrip"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="mqinner" id="mq">
        {all.map((item, i) => (
          <motion.div 
            key={i} 
            className="mqi"
            whileHover={{ 
              scale: 1.1,
              color: 'var(--teal)',
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.span 
              className="mh"
              animate={{ 
                textShadow: [
                  '0 0 5px var(--teal)',
                  '0 0 15px var(--teal)',
                  '0 0 5px var(--teal)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            >
              {item.icon}
            </motion.span>
            {item.text}
            <span className="mqdiv">·</span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            >
              {item.sub}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
