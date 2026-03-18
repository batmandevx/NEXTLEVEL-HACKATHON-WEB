'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextScramble from './TextScramble';
import MagneticButton from './MagneticButton';
import AnimatedCounter from './AnimatedCounter';
import GradientText from './GradientText';
import { SplineScene } from '@/components/ui/splite';

const REGISTER_URL = 'https://nextgen-product-lab.devpost.com/';
const DEADLINE = new Date('2026-03-23T02:30:00+05:30');

const pad = (n: number) => String(n).padStart(2, '0');

function Countdown() {
  const [vals, setVals] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const tick = () => {
      const diff = DEADLINE.getTime() - Date.now();
      if (diff <= 0) { setVals({ d:'00', h:'00', m:'00', s:'00' }); return; }
      setVals({
        d: pad(Math.floor(diff / 864e5)),
        h: pad(Math.floor(diff % 864e5 / 36e5)),
        m: pad(Math.floor(diff % 36e5 / 6e4)),
        s: pad(Math.floor(diff % 6e4 / 1e3)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const segments = [
    { k:'d', label:'Days' },
    { k:'h', label:'Hours' },
    { k:'m', label:'Mins' },
    { k:'s', label:'Secs' },
  ];

  return (
    <motion.div 
      className="cd-wrap"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <p className="cd-lbl">⏱ Submission Deadline · March 23, 2026 @ 2:30 AM IST</p>
      <div className="cd-row">
        {segments.map(({ k, label }, i) => (
          <div key={k} style={{ display:'flex', alignItems:'center', gap:5 }}>
            {i > 0 && <span className="cd-colon">:</span>}
            <motion.div 
              className="cd-box glass-card"
              whileHover={{ scale: 1.05, borderColor: 'var(--teal)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span 
                className="cd-num"
                key={vals[k as keyof typeof vals]}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {vals[k as keyof typeof vals]}
              </motion.span>
              <div className="cd-sub">{label}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    }),
  };

  return (
    <section id="hero" ref={containerRef}>
      {/* Enhanced Grid Background */}
      <div className="hero-grid cyber-grid" />
      
      {/* Animated Orbs */}
      <motion.div 
        className="hero-orb orb1 holographic"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="hero-orb orb2"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="hero-orb orb3"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div 
        className="hero-content"
        style={{ y, opacity, scale }}
      >
        {/* Chip */}
        <motion.div
          className="hero-chip glass-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.span 
            className="chip-dot pulse-glow"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <TextScramble text="Global Online Hackathon · Open to Everyone · 2026" trigger="mount" duration={1000} />
        </motion.div>

        <h1 className="hero-title">
          <motion.span 
            className="glitch neon-text"
            data-g="NEXT LEVEL"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            NEXT LEVEL
          </motion.span>
          <br />
          <motion.span 
            className="ta gradient-text"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            HACKATHON
          </motion.span>
          <br />
          <motion.span 
            className="tagline-year"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            style={{ color: 'var(--teal)', fontSize: '0.5em', letterSpacing: '12px' }}
          >
            2026
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p 
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Build the next generation of AI, product innovation, and startup-ready solutions. Join <GradientText>500+ global developers</GradientText>, designers, and founders to create impactful technology.
        </motion.p>

        {/* Tags */}
        <motion.div 
          className="hero-tags"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {[
            { text: '🤖 AI / ML', cls: 'tag-t' },
            { text: '☁️ Cloud', cls: 'tag-v' },
            { text: '📊 Data', cls: 'tag-a' },
            { text: '🔗 Web3', cls: 'tag-c' },
            { text: '🔐 Security', cls: 'tag-m' },
          ].map((tag, i) => (
            <motion.span
              key={tag.cls}
              className={`tag ${tag.cls}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -3, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            >
              {tag.text}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="stat-strip glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { n: 7001, prefix: '$', suffix: '', l: 'Prizes', em: '+' },
            { n: 31, prefix: '', suffix: '', l: 'Judges' },
            { n: 5, prefix: '', suffix: '', l: 'Tracks' },
            { n: 500, prefix: '', suffix: '+', l: 'Participants' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.l}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="stat-n">
                <AnimatedCounter 
                  end={stat.n} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                  duration={2}
                />
                <em>{stat.em}</em>
              </span>
              <span className="stat-l">{stat.l}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <MagneticButton strength={0.2}>
            <motion.a 
              href={REGISTER_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-fill btn-glow liquid-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span><TextScramble text="Register Now →" trigger="hover" /></span>
            </motion.a>
          </MagneticButton>
          <MagneticButton strength={0.15}>
            <motion.a 
              href="#about" 
              className="btn-line"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <TextScramble text="Explore Event" trigger="hover" />
            </motion.a>
          </MagneticButton>
        </motion.div>

        <Countdown />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator float-animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="scroll-arrow">↓</span>
        </motion.div>
      </motion.div>

      {/* 3D Robot - Right Side */}
      <motion.div
        className="absolute right-[5%] xl:right-[8%] top-[15%] w-[350px] xl:w-[450px] h-[400px] xl:h-[500px] hidden lg:block z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>
    </section>
  );
}
