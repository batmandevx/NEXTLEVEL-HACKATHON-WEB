'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import TextScramble from './TextScramble';

const REGISTER_URL = 'https://nextlevelhackathon.devpost.com/';

const prizes = [
  {
    rank: 'Grand Prize',
    emoji: '🥇',
    place: '1st Place',
    amount: '$3,500',
    desc: 'Best overall: innovation, technical execution, UX, and impact. Includes exclusive swag, global recognition, and internship opportunities.',
    cls: 'p-gold',
    color: '#ffb547',
    delay: 0,
  },
  {
    rank: 'Runner Up',
    emoji: '🥈',
    place: '2nd Place',
    amount: '$1,999',
    desc: 'Outstanding technical complexity and strong real-world impact potential. Includes internship opportunities and career mentorship.',
    cls: 'p-silver',
    color: '#b0b8c8',
    delay: 0.2,
  },
  {
    rank: 'Third Place',
    emoji: '🥉',
    place: '3rd Place',
    amount: '$1,502',
    desc: 'Creative ideas, solid implementation, and excellent communication. Includes internship opportunities and professional networking.',
    cls: 'p-bronze',
    color: '#b87333',
    delay: 0.4,
  },
];

const extras = [
  { ico: '🎓', title: 'Mentorship & Internships', desc: 'Direct access to industry leaders, startup founders, and senior engineers post-event.' },
  { ico: '🤝', title: 'Collaboration Invites', desc: 'Top teams may be invited to collaborate with sponsor organizations on real products.' },
  { ico: '📣', title: 'Community Recognition', desc: 'Post-event showcase, social amplification, and developer spotlights.' },
  { ico: '📜', title: 'Certificates of Excellence', desc: 'Issued to all finalists and track winners with public verification.' },
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
          <p className="sec-body">Cash awards, internships, mentorship, career opportunities, and recognition on a global stage.</p>
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
              style={{ order: i === 0 ? 0 : i === 1 ? 1 : 2 }}
            >
              <TiltCard
                className={`prize ${prize.cls}`}
                tiltAmount={10}
                glowColor={`${prize.color}40`}
                glowIntensity={0.5}
              >
                <motion.div
                  className="prize-glow"
                  style={{ 
                    background: `radial-gradient(circle at 50% 0%, ${prize.color}30, transparent 60%)`,
                  }}
                />
                <div className="p-rank">{prize.rank}</div>
                <motion.span 
                  className="p-emoji"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {prize.emoji}
                </motion.span>
                <div className="p-place">{prize.place}</div>
                <motion.div 
                  className="p-amount"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: prize.delay + 0.3, duration: 0.5, type: 'spring' }}
                  style={{ color: prize.color }}
                >
                  {prize.amount}
                </motion.div>
                <div className="p-desc">{prize.desc}</div>
                
                {/* Animated shine effect */}
                <motion.div
                  className="prize-shine"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              </TiltCard>
            </motion.div>
          ))}
        </div>

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
              className="px"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: 'var(--lift)',
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="px-ico"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
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
          className="api-strip"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div>
            <div className="api-t">🎁 Bonus: 200 Free AI API Units from Perfect Corp</div>
            <div className="api-d">All participants receive 200 free API units (valued at US$49.99) — Text-to-Image, background removal, AR try-on, skincare analysis APIs and more. Valid through March 2026.</div>
          </div>
          <motion.a 
            href="https://yce.perfectcorp.com/?affiliate=Hackathon2026" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-amber"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 181, 71, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Claim Free Units →
          </motion.a>
        </motion.div>

        {/* Sponsors */}
        <motion.div 
          className="sponsors-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="sponsors-label">Proudly Supported By</div>
          <div className="sponsors-logos">
            <motion.span 
              className="sponsor-name"
              whileHover={{ scale: 1.1, color: 'var(--teal)' }}
            >
              NordVPN
            </motion.span>
            <span className="sponsor-divider">·</span>
            <motion.span 
              className="sponsor-name"
              whileHover={{ scale: 1.1, color: 'var(--amber)' }}
            >
              Major League Hacking
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
