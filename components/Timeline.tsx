'use client';

import { motion } from 'framer-motion';
import TextScramble from './TextScramble';

const milestones = [
  { date: '06 March 2026', event: 'Registration Opens', note: 'Sign up individually or assemble a team of up to 5', align: 'left', state: 'done' },
  { date: '07 March 2026', event: 'Hacking Begins', note: 'Build mode activated — let\'s ship something real', align: 'right', state: 'done' },
  { date: '23 March 2026', event: 'Submission Deadline', note: 'Demo + docs + GitHub + team info required by 2:30 AM IST', align: 'left', state: 'now' },
  { date: '23 – 28 March 2026', event: 'Judging Period', note: 'Expert panel reviews and scores all submissions', align: 'right', state: '' },
  { date: '30 March 2026', event: 'Winners Announced 🎉', note: 'Global announcement, prizes, and celebrations', align: 'left', state: '' },
];

export default function Timeline() {
  return (
    <section id="timeline">
      <motion.div
        className="center"
        style={{ maxWidth: 1100, margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="sec-eye">// schedule</div>
        <h2 className="sec-h">
          <TextScramble text="Key Milestones" trigger="inView" />
        </h2>
        <p className="sec-body">Mark your calendar — every deadline is a commitment to ship.</p>
      </motion.div>

      <motion.div 
        className="tl-outer" 
        style={{ marginTop: 60 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {/* Animated spine */}
        <motion.div 
          className="tl-spine"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformOrigin: 'top' }}
        />

        {milestones.map((m, i) => (
          <motion.div 
            key={i} 
            className="tl-row"
            variants={{
              hidden: { 
                opacity: 0, 
                x: m.align === 'left' ? -30 : 30,
              },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
              },
            }}
          >
            {m.align === 'left' ? (
              <>
                <motion.div 
                  className="tl-card"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: m.state === 'now' ? 'var(--amber)' : 'var(--teal)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="tl-date"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {m.date}
                  </motion.div>
                  <div className="tl-ev">{m.event}</div>
                  <div className="tl-note">{m.note}</div>
                  
                  {/* Status indicator */}
                  {m.state === 'done' && (
                    <motion.span
                      className="tl-status done"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring' }}
                    >
                      ✓ Completed
                    </motion.span>
                  )}
                  {m.state === 'now' && (
                    <motion.span
                      className="tl-status now"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring' }}
                    >
                      ● In Progress
                    </motion.span>
                  )}
                </motion.div>
                <div className="tl-node">
                  <motion.div 
                    className={`tln${m.state ? ` ${m.state}` : ''}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <div className="tl-empty" />
              </>
            ) : (
              <>
                <div className="tl-empty" />
                <div className="tl-node">
                  <motion.div 
                    className={`tln${m.state ? ` ${m.state}` : ''}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.2 }}
                  />
                </div>
                <motion.div 
                  className="tl-card"
                  style={{ textAlign: 'right' }}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: m.state === 'now' ? 'var(--amber)' : 'var(--teal)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="tl-date"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {m.date}
                  </motion.div>
                  <div className="tl-ev">{m.event}</div>
                  <div className="tl-note">{m.note}</div>
                  
                  {m.state === 'done' && (
                    <motion.span
                      className="tl-status done"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring' }}
                    >
                      ✓ Completed
                    </motion.span>
                  )}
                  {m.state === 'now' && (
                    <motion.span
                      className="tl-status now"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring' }}
                    >
                      ● In Progress
                    </motion.span>
                  )}
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
