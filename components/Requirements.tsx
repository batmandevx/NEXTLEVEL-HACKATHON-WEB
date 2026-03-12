'use client';

import { motion } from 'framer-motion';
import TextScramble from './TextScramble';

const requirementsData = [
  {
    icon: '🏗️',
    title: 'What to Build',
    items: [
      { strong: 'Technical Excellence:', text: 'Well-architected systems, efficient code, and scalable solutions.' },
      { strong: 'Innovation & Creativity:', text: 'Novel approaches, unique features, or new applications of technology.' },
      { strong: 'Real-World Applicability:', text: 'Demonstrated impact or potential for adoption in practical scenarios.' },
      { strong: 'UX & Documentation:', text: 'Clear UI/UX and supporting docs explaining the workflow and architecture.' },
      { strong: '', text: 'Solutions can be web, mobile, cloud platforms, APIs, data pipelines, or full-stack applications.' },
    ],
  },
  {
    icon: '📤',
    title: 'What to Submit',
    items: [
      { strong: 'Project Title & Description:', text: 'Clear summary of problem, solution, and approach (200–300 words).' },
      { strong: 'Solution Demo:', text: 'Screenshots, video walkthrough (2–3 min), or live demo link.' },
      { strong: 'Technical Documentation:', text: 'Architecture diagrams, code explanation, APIs, libraries, and frameworks.' },
      { strong: 'Code Repository:', text: 'GitHub/GitLab with clear instructions to run or test the solution.' },
      { strong: 'Team Details:', text: 'Names, roles, and LinkedIn profiles of all team members.' },
    ],
  },
];

export default function Requirements() {
  return (
    <section id="requirements">
      <motion.div
        className="center"
        style={{ maxWidth: 1100, margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="sec-eye">// what to build</div>
        <h2 className="sec-h">
          <TextScramble text="Requirements" trigger="inView" />
        </h2>
        <p className="sec-body">Production-ready solutions demonstrating technical excellence and genuine real-world applicability.</p>
      </motion.div>

      <motion.div 
        className="req-grid"
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
        {requirementsData.map((req) => (
          <motion.div
            key={req.title}
            className="req-block"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
              },
            }}
            whileHover={{ 
              y: -5,
              backgroundColor: 'var(--lift)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="req-head"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="ico"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {req.icon}
              </motion.span>
              {req.title}
            </motion.div>
            <ul className="req-list">
              {req.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="bl"
                    animate={{ 
                      boxShadow: [
                        '0 0 5px var(--teal)',
                        '0 0 15px var(--teal)',
                        '0 0 5px var(--teal)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {item.strong && <strong style={{ color:'#fff' }}>{item.strong}</strong>}
                  {' '}{item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
