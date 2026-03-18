'use client';

import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import TextScramble from './TextScramble';

const REGISTER_URL = 'https://nextgen-product-lab.devpost.com/';

const metaItems = [
  { v: 'hackathonofficialx@gmail.com', k: 'Support' },
  { v: 'Online · Global', k: 'Location' },
  { v: 'Teams of up to 5', k: 'Format' },
  { v: 'Open to Everyone', k: 'Who Can Join' },
];

export default function CTA() {
  return (
    <section id="cta">
      {/* Animated Background Orbs */}
      <motion.div 
        className="cta-orb1"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="cta-orb2"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Additional decorative elements */}
      <motion.div
        className="cta-deco-ring"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          border: '1px solid rgba(0, 232, 214, 0.1)',
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="cta-deco-ring"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          border: '1px solid rgba(155, 109, 255, 0.08)',
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div 
        className="cta-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="sec-eye" 
          style={{ justifyContent:'center', marginBottom:22 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <TextScramble text="// your moment is now" trigger="inView" />
        </motion.div>
        
        <motion.div 
          className="cta-h"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="l1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <TextScramble text="BUILD." trigger="inView" />
          </motion.div>
          <motion.div 
            className="l2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <TextScramble text="SHIP." trigger="inView" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <TextScramble text="ITERATE." trigger="inView" />
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="cta-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          The best builders don&apos;t wait for permission. Join developers, designers, founders, and professionals worldwide and prove what you&apos;re capable of — one commit at a time.
        </motion.p>
        
        <motion.div 
          className="btns"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <MagneticButton strength={0.2}>
            <motion.a 
              href={REGISTER_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-fill"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 60px rgba(0, 232, 214, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <TextScramble text="Register on Devpost →" trigger="hover" />
            </motion.a>
          </MagneticButton>
          <MagneticButton strength={0.15}>
            <motion.a 
              href="mailto:hackathonofficialx@gmail.com" 
              className="btn-line"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TextScramble text="Contact Organizers" trigger="hover" />
            </motion.a>
          </MagneticButton>
        </motion.div>
        
        <motion.div 
          className="cta-meta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {metaItems.map((item) => (
            <motion.div
              key={item.k}
              className="cm"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(0, 232, 214, 0.05)',
              }}
            >
              <span className="v">{item.v}</span>
              <span className="k">{item.k}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
