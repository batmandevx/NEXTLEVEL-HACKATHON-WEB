'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextScramble from './TextScramble';

const REGISTER_URL = 'https://nextlevelhackathon.devpost.com/';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    ['#about','About'],
    ['#tracks','Tracks'],
    ['#audience','Join'],
    ['#prizes','Prizes'],
    ['#timeline','Schedule'],
    ['#judges','Judges'],
    ['#resources','Resources'],
  ];

  return (
    <>
      <motion.div 
        id="bar" 
        style={{ width: `${progress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
      
      <motion.nav 
        id="nav" 
        className={scrolled ? 'scrolled' : ''}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <motion.a 
          href="#" 
          className="logo"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span 
            className="lt"
            animate={{ 
              textShadow: [
                '0 0 20px var(--teal)',
                '0 0 30px var(--teal)',
                '0 0 20px var(--teal)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Next
          </motion.span>
          <motion.span 
            className="la"
            animate={{ 
              textShadow: [
                '0 0 20px var(--amber)',
                '0 0 30px var(--amber)',
                '0 0 20px var(--amber)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            Level
          </motion.span>
          <span style={{ fontSize: '0.7em', opacity: 0.8 }}>Hackathon</span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="nav-mid">
          {navLinks.map(([href, label]) => (
            <motion.li 
              key={href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navLinks.indexOf([href, label]) }}
            >
              <a href={href}>
                <TextScramble text={label} trigger="hover" />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          <motion.a 
            href="mailto:hackathonofficialx@gmail.com" 
            className="nav-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
          <motion.a 
            href={REGISTER_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-fill"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TextScramble text="Register →" trigger="hover" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <span className={mobileMenuOpen ? 'open' : ''} />
          <span className={mobileMenuOpen ? 'open' : ''} />
          <span className={mobileMenuOpen ? 'open' : ''} />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(([href, label], i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-register"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Register Now →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
