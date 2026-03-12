'use client';

import { motion } from 'framer-motion';

const DEVPOST = 'https://nextlevelhackathon.devpost.com/';

const footerLinks = {
  Event: [
    { label: 'About', href: '#about' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Schedule', href: '#timeline' },
    { label: 'Devpost Page', href: DEVPOST, external: true },
  ],
  Participate: [
    { label: 'Register', href: DEVPOST, external: true },
    { label: 'Apply to Judge', href: 'mailto:hackathonofficialx@gmail.com' },
    { label: 'Become a Sponsor', href: 'mailto:hackathonofficialx@gmail.com' },
    { label: 'Meet the Judges', href: '#judges' },
    { label: 'Resources', href: '#resources' },
  ],
  Contact: [
    { label: 'hackathonofficialx@gmail.com', href: 'mailto:hackathonofficialx@gmail.com' },
    { label: 'Requirements', href: '#requirements' },
    { label: 'Judging Criteria', href: '#criteria' },
    { label: 'Sponsor API', href: 'https://yce.perfectcorp.com/?affiliate=Hackathon2026', external: true },
  ],
};

export default function Footer() {
  return (
    <footer>
      <motion.div 
        className="ft-top"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="ft-brand"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.a 
            href={DEVPOST} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flogo"
            whileHover={{ scale: 1.02 }}
          >
            <span className="lt">Next</span><span className="la">Level</span>Hackathon
          </motion.a>
          <div className="ftag">Next Level Hackathon 2026 — Build the next generation of AI, product innovation, and startup-ready solutions.</div>
        </motion.div>

        <motion.div 
          className="ft-cols"
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
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div 
              key={title}
              className="ft-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="ft-col-h">{title}</div>
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 5, color: '#fff' }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="ft-bot"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="ft-copy">© 2026 Next Level Hackathon · All rights reserved · Open to Everyone Worldwide</div>
        <motion.a 
          href={DEVPOST} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ft-dp"
          whileHover={{ 
            color: 'var(--teal)',
            x: 5,
          }}
        >
          nextlevelhackathon.devpost.com →
        </motion.a>
      </motion.div>

      {/* Decorative gradient line */}
      <motion.div
        className="ft-gradient-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--teal), var(--violet), var(--amber), transparent)',
          transformOrigin: 'center',
        }}
      />
    </footer>
  );
}
