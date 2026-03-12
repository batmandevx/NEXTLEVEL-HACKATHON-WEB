'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TextScramble from './TextScramble';

const criteria = [
  { pct:'25%', name:'Innovation & Creativity', desc:'How original and creative is the idea? Judges evaluate whether the project introduces a unique concept, solves a problem in a new way, or applies technology innovatively.', cls:'c1', w:'25%', color: '#00e8d6' },
  { pct:'25%', name:'Technical Implementation', desc:'Quality of code, technical complexity, integration of APIs or technologies, and overall engineering execution. Is the implementation robust and scalable?', cls:'c2', w:'25%', color: '#ffb547' },
  { pct:'20%', name:'Impact & Usefulness', desc:'Does the solution solve a real problem and add genuine value? How intuitive and user-friendly is the product? Evaluated on usability and accessibility.', cls:'c3', w:'20%', color: '#9b6dff' },
  { pct:'15%', name:'Presentation & Demo', desc:'Judges review the clarity of the submission, demo video, explanation of the problem, and how well the team presents their solution.', cls:'c4', w:'15%', color: '#ff5f57' },
  { pct:'15%', name:'User Experience', desc:'Is the product intuitive, visually polished, and does it effectively address user needs with a seamless interface and thoughtful design?', cls:'c5', w:'15%', color: '#00e5a0' },
];

const checklist = [
  'Working demo video (2-3 minutes)',
  'Public GitHub repo with clean, commented code',
  'README: problem, solution, tech stack, setup',
  'Architecture & design decisions doc',
  'Slide deck / one-pager with impact summary',
  'Team info + LinkedIn profiles of all members',
];

export default function Criteria() {
  useEffect(() => {
    const cards = document.querySelectorAll('.crit');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => (e.target as HTMLElement).classList.add('anim'), 180);
        }
      });
    }, { threshold: 0.3 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="criteria">
      <motion.div
        className="center"
        style={{ maxWidth: 1100, margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="sec-eye">// evaluation rubric</div>
        <h2 className="sec-h">
          <TextScramble text="Judging Criteria" trigger="inView" />
        </h2>
        <p className="sec-body">Every submission reviewed by domain experts across five weighted dimensions with structured, actionable feedback.</p>
      </motion.div>

      <motion.div 
        className="crit-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {criteria.map((c) => (
          <motion.div
            key={c.name}
            className={`crit ${c.cls}`}
            style={{ '--w': c.w } as React.CSSProperties}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
              },
            }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="crit-pct"
              style={{ color: c.color, textShadow: `0 0 30px ${c.color}40` }}
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              {c.pct}
            </motion.div>
            <div className="crit-name">{c.name}</div>
            <div className="crit-desc">{c.desc}</div>
            <motion.div 
              className="crit-bar"
              style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }}
            />
          </motion.div>
        ))}

        <motion.div 
          className="crit crit-check"
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
            },
          }}
          whileHover={{ y: -5 }}
        >
          <div className="cc-title">
            <TextScramble text="Submission Checklist" trigger="inView" />
          </div>
          {checklist.map((item, i) => (
            <motion.div 
              key={item} 
              className="cc-item"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: 5, color: '#fff' }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
