'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import TextScramble from './TextScramble';
import SpotlightCard from './SpotlightCard';
import GradientText from './GradientText';
import AnimatedCounter from './AnimatedCounter';

const REGISTER_URL = 'https://nextlevelhackathon.devpost.com/';

const prizes = [
  {
    rank: '🥇 Grand Prize',
    place: '1st Place',
    amount: 3500,
    prefix: '$',
    desc: 'Best overall: innovation, technical execution, UX, and impact. Includes exclusive swag, global recognition, and internship opportunities.',
    cls: 'p-gold',
    color: '#ffb547',
    delay: 0,
    featured: true,
  },
  {
    rank: '🥈 Runner Up',
    place: '2nd Place',
    amount: 1999,
    prefix: '$',
    desc: 'Outstanding technical complexity and strong real-world impact potential. Includes internship opportunities and career mentorship.',
    cls: 'p-silver',
    color: '#b0b8c8',
    delay: 0.2,
    featured: false,
  },
  {
    rank: '🥉 Third Place',
    place: '3rd Place',
    amount: 1502,
    prefix: '$',
    desc: 'Creative ideas, solid implementation, and excellent communication. Includes internship opportunities and professional networking.',
    cls: 'p-bronze',
    color: '#b87333',
    delay: 0.4,
    featured: false,
  },
];

const extras = [
  { ico: '🎓', title: 'Internships', desc: 'Direct access to industry leaders and senior engineers post-event.', color: '#00e8d6' },
  { ico: '🤝', title: 'Collaborations', desc: 'Top teams may collaborate with sponsor organizations on real products.', color: '#9b6dff' },
  { ico: '📣', title: 'Recognition', desc: 'Post-event showcase, social amplification, and developer spotlights.', color: '#ffb547' },
  { ico: '📜', title: 'Certificates', desc: 'Issued to all finalists and track winners with public verification.', color: '#00e5a0' },
];

const tracks = [
  { name: 'AI Innovation', prize: '$1,000', color: '#00e8d6' },
  { name: 'Web3 & Blockchain', prize: '$1,000', color: '#9b6dff' },
  { name: 'Cloud & DevOps', prize: '$1,000', color: '#ffb547' },
  { name: 'Cybersecurity', prize: '$1,000', color: '#ff5f57' },
  { name: 'Social Impact', prize: '$1,000', color: '#00e5a0' },
];

export default function Prizes() {
  return (
    <section id="prizes">
      <div className="prizes-wrap">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="sec-eye">// rewards</div>
          <h2 className="sec-h">
            <TextScramble text="$7,001 in Prizes" trigger="inView" />
          </h2>
          <p className="sec-body">
            <GradientText>Cash awards</GradientText>, internships, mentorship, career opportunities, and recognition on a global stage.
          </p>
        </motion.div>

        {/* Main Prizes */}
        <div className="prizes-podium">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: prize.delay, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              style={{ order: i === 0 ? 1 : i === 1 ? 0 : 2, transform: prize.featured ? 'scale(1.05)' : 'scale(1)' }}
            >
              <SpotlightCard
                className={`prize ${prize.cls}`}
                spotlightColor={`${prize.color}20`}
                borderColor={`${prize.color}50`}
              >
                <motion.div
                  className="prize-glow"
                  style={{ 
                    background: `radial-gradient(circle at 50% 0%, ${prize.color}30, transparent 60%)`,
                  }}
                />
                <div className="p-rank">{prize.rank}</div>
                <motion.div 
                  className="p-amount"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: prize.delay + 0.3, duration: 0.5, type: 'spring' }}
                  style={{ color: prize.color, textShadow: `0 0 30px ${prize.color}40` }}
                >
                  <AnimatedCounter end={prize.amount} prefix={prize.prefix} duration={2} />
                </motion.div>
                <div className="p-place">{prize.place}</div>
                <div className="p-desc">{prize.desc}</div>
                
                {/* Animated shine effect */}
                <motion.div
                  className="prize-shine shimmer"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Track Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ marginTop: '40px' }}
        >
          <h3 style={{ textAlign: 'center', color: 'var(--text)', marginBottom: '20px', fontSize: '1.5rem' }}>
            <GradientText>Track Prizes</GradientText>
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1px',
            background: 'var(--bdr)',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            {tracks.map((track, i) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: 'var(--lift)' }}
                style={{
                  background: 'var(--surface)',
                  padding: '24px',
                  textAlign: 'center',
                  borderTop: `2px solid ${track.color}`,
                }}
              >
                <div style={{ fontSize: '12px', color: 'var(--dim)', marginBottom: '8px', fontFamily: "'DM Mono', monospace" }}>
                  Track Winner
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {track.name}
                </div>
                <div style={{ fontSize: '24px', color: track.color, fontFamily: "'Bebas Neue', sans-serif", textShadow: `0 0 20px ${track.color}40` }}>
                  {track.prize}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extras */}
        <motion.div 
          className="prizes-extras"
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
          {extras.map((extra, i) => (
            <motion.div
              key={extra.title}
              className="px glass-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${extra.color}20`,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="px-ico"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
                style={{ color: extra.color }}
              >
                {extra.ico}
              </motion.div>
              <div className="px-t">{extra.title}</div>
              <div className="px-d">{extra.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* API Strip */}
        <motion.div 
          className="api-strip glass-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01, boxShadow: '0 0 40px rgba(255,181,71,0.2)' }}
        >
          <div>
            <div className="api-t">🎁 Bonus: 200 Free AI API Units</div>
            <div className="api-d">All participants receive 200 free API units (valued at US$49.99) — Text-to-Image, background removal, AR try-on, skincare analysis APIs and more.</div>
          </div>
          <motion.a 
            href="https://yce.perfectcorp.com/?affiliate=Hackathon2026" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-amber btn-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Claim Free Units →
          </motion.a>
        </motion.div>

        {/* Sponsors */}
        <motion.div 
          className="sponsors-strip glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="sponsors-label">Proudly Supported By</div>
          <div className="sponsors-logos">
            <motion.span 
              className="sponsor-name"
              whileHover={{ scale: 1.1, color: 'var(--teal)', textShadow: '0 0 20px var(--teal)' }}
            >
              NordVPN
            </motion.span>
            <span className="sponsor-divider">·</span>
            <motion.span 
              className="sponsor-name"
              whileHover={{ scale: 1.1, color: 'var(--amber)', textShadow: '0 0 20px var(--amber)' }}
            >
              Major League Hacking
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
