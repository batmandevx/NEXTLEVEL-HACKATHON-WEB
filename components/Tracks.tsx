'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import TextScramble from './TextScramble';

const tracks = [
  { n:'01', ico:'🤖', name:'AI / ML', desc:'Intelligent systems, LLM applications, computer vision, autonomous agents, or breakthrough ML architectures.', badge:'Machine Learning', cls:'t1', color: '#00e8d6' },
  { n:'02', ico:'☁️', name:'Cloud Infrastructure', desc:'Scalable, resilient cloud-native systems, DevOps pipelines, or cutting-edge edge computing solutions.', badge:'Cloud Native', cls:'t2', color: '#9b6dff' },
  { n:'03', ico:'📊', name:'Scalable Data Systems', desc:'High-throughput data platforms, real-time analytics engines, or next-gen data pipelines.', badge:'Data Engineering', cls:'t3', color: '#ffb547' },
  { n:'04', ico:'🔗', name:'Web3 & Blockchain', desc:'Decentralized protocols, smart contract platforms, DeFi applications, or on-chain governance.', badge:'Decentralized', cls:'t4', color: '#ff5f57' },
  { n:'05', ico:'🔐', name:'Cybersecurity', desc:'Tools, frameworks, or systems that detect, prevent, or respond to modern security threats at scale.', badge:'Security', cls:'t5', color: '#00e5a0' },
];

export default function Tracks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };

  return (
    <section id="tracks">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="center"
        style={{ maxWidth: 1200, margin: '0 auto' }}
      >
        <div className="sec-eye">// competition tracks</div>
        <h2 className="sec-h">
          <TextScramble text="Choose Your Domain" trigger="inView" />
        </h2>
        <p className="sec-body">Each track has a defined problem space evaluated by domain experts. Pick what matches your vision.</p>
      </motion.div>

      <motion.div 
        className="tracks-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {tracks.map((t) => (
          <motion.div key={t.n} variants={itemVariants}>
            <TiltCard
              className={`track ${t.cls}`}
              tiltAmount={12}
              glowColor={`${t.color}40`}
              glowIntensity={0.6}
            >
              <div className="track-inner">
                <span className="tr-no">{t.n}</span>
                <motion.span 
                  className="tr-ico"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {t.ico}
                </motion.span>
                <div className="tr-name">
                  <TextScramble text={t.name} trigger="hover" />
                </div>
                <div className="tr-desc">{t.desc}</div>
                <motion.span 
                  className="tr-badge"
                  whileHover={{ scale: 1.05 }}
                  style={{ 
                    borderColor: t.color,
                    color: t.color,
                    boxShadow: `0 0 20px ${t.color}20`,
                  }}
                >
                  {t.badge}
                </motion.span>
                
                {/* Animated gradient border */}
                <motion.div
                  className="track-gradient-border"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
                />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
