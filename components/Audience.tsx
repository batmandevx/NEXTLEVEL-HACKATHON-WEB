'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import TextScramble from './TextScramble';

const REGISTER_URL = 'https://nextdev-hackathon.devpost.com/';

const audienceData = [
  {
    ico: '🧑‍💻',
    title: 'Participants',
    role: 'Builders & Innovators',
    copy: 'From indie hackers to senior engineers, startup founders to students — if you love building things that work at scale, this is your arena. Open to ALL skill levels and backgrounds worldwide.',
    perks: [
      '$7,001 in cash prizes',
      'Internship opportunities with top companies',
      'Mentorship from industry leaders post-event',
      'Collaboration invites from sponsor organizations',
      'Certificates of Excellence for all finalists',
      'Global developer recognition & spotlight',
      '200 free AI API units from Perfect Corp',
    ],
    btn: 'Register Now →',
    link: REGISTER_URL,
    cls: 'ac-p',
    color: 'var(--teal)',
  },
  {
    ico: '⚖️',
    title: 'Judges',
    role: 'Domain Experts',
    copy: 'Share your expertise and shape the next generation of builders. We seek domain experts across AI/ML, cloud, security, blockchain, and data engineering from around the world.',
    perks: [
      'Evaluate cutting-edge production-ready projects',
      'Deliver structured, impactful feedback',
      'Global recognition as a hackathon judge',
      'Network with top engineers & founders worldwide',
      'Feature in our post-event showcase',
      'Invitation letters available for international guests',
    ],
    btn: 'Apply to Judge →',
    link: 'mailto:hackathonofficialx@gmail.com',
    cls: 'ac-j',
    color: 'var(--violet)',
  },
  {
    ico: '🤝',
    title: 'Sponsors',
    role: 'Partners & Supporters',
    copy: 'Partner with a global hackathon that attracts some of the most talented engineers in the world. Gain direct access to a highly engaged developer audience ready to build with your tools.',
    perks: [
      'Brand visibility to a global developer audience',
      'Direct access to top engineering talent',
      'Custom API / SDK integration tracks',
      'Co-branded prizes and developer spotlights',
      'Speaking & mentorship opportunities',
      'Recruitment pipeline for exceptional builders',
    ],
    btn: 'Become a Sponsor →',
    link: 'mailto:hackathonofficialx@gmail.com',
    cls: 'ac-s',
    color: 'var(--amber)',
  },
];

export default function Audience() {
  return (
    <section id="audience">
      <motion.div
        className="center"
        style={{ maxWidth: 1200, margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="sec-eye">// who&apos;s invited</div>
        <h2 className="sec-h">
          <TextScramble text="Your Role Awaits" trigger="inView" />
        </h2>
        <p className="sec-body">
          Whether you&apos;re here to build, evaluate, or empower — there&apos;s a place for you at Next Level Hackathon 2026. 
          <br /><br />
          <strong style={{ color: 'var(--teal)' }}>Open to Everyone:</strong> Professionals, students, founders, developers, designers — all countries welcome!
        </p>
      </motion.div>

      <motion.div 
        className="aud-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {audienceData.map((audience) => (
          <motion.div
            key={audience.title}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
              },
            }}
          >
            <TiltCard
              className={`aud-card ${audience.cls}`}
              tiltAmount={8}
              glowColor={`${audience.color}30`}
              glowIntensity={0.4}
            >
              <motion.div 
                className="aud-ico"
                style={{ borderColor: audience.color }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  boxShadow: `0 0 30px ${audience.color}40`,
                }}
                transition={{ duration: 0.5 }}
              >
                {audience.ico}
              </motion.div>
              
              <div className="aud-title">{audience.title}</div>
              <div className="aud-role" style={{ color: audience.color }}>{audience.role}</div>
              <div className="aud-copy">{audience.copy}</div>
              
              <ul className="aud-perks">
                {audience.perks.map((perk, i) => (
                  <motion.li
                    key={perk}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 5, color: '#fff' }}
                    style={{ '--ac': audience.color } as React.CSSProperties}
                  >
                    {perk}
                  </motion.li>
                ))}
              </ul>
              
              <motion.a 
                href={audience.link}
                target={audience.link.startsWith('http') ? '_blank' : undefined}
                rel={audience.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="aud-btn"
                style={{ 
                  borderColor: audience.color,
                  color: audience.color,
                }}
                whileHover={{ 
                  backgroundColor: audience.color,
                  color: 'var(--void)',
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <TextScramble text={audience.btn} trigger="hover" />
              </motion.a>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
