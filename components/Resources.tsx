'use client';

import { motion } from 'framer-motion';
import TextScramble from './TextScramble';

const DEVPOST = 'https://nextgen-product-lab.devpost.com/';

const resourcesData = [
  {
    head: '🛠 Tools & Platforms',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Devpost — Submit Here', href: DEVPOST },
      { label: 'Google Colab', href: 'https://colab.research.google.com' },
      { label: 'Hugging Face', href: 'https://huggingface.co' },
      { label: 'Vercel Templates', href: 'https://vercel.com/templates' },
    ],
  },
  {
    head: '📦 Datasets',
    links: [
      { label: 'Kaggle Datasets', href: 'https://kaggle.com/datasets' },
      { label: 'Google Dataset Search', href: 'https://datasetsearch.research.google.com' },
      { label: 'Hugging Face Datasets', href: 'https://huggingface.co/datasets' },
      { label: 'Data.gov', href: 'https://data.gov' },
    ],
  },
  {
    head: '📚 Docs & Learning',
    links: [
      { label: 'Anthropic API Docs', href: 'https://docs.anthropic.com' },
      { label: 'OpenAI Docs', href: 'https://platform.openai.com/docs' },
      { label: 'LangChain Docs', href: 'https://langchain.readthedocs.io' },
      { label: 'fast.ai Deep Learning', href: 'https://www.fast.ai' },
      { label: 'Google ML Crash Course', href: 'https://developers.google.com/machine-learning/crash-course' },
    ],
  },
  {
    head: '🎁 Sponsor API',
    links: [
      { label: 'Perfect Corp AI APIs', href: 'https://yce.perfectcorp.com/ai-api' },
      { label: '200 Free API Units →', href: 'https://yce.perfectcorp.com/?affiliate=Hackathon2026' },
      { label: 'Quick Start Guide', href: 'https://yce.perfectcorp.com/document/index.html#section/Quick-Start-Guide' },
    ],
    footer: '200 free units ($49.99 value) per participant. Valid through March 2026.',
  },
];

export default function Resources() {
  return (
    <section id="resources">
      <motion.div
        className="center"
        style={{ maxWidth: 1200, margin: '0 auto' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="sec-eye">// tools & resources</div>
        <h2 className="sec-h">
          <TextScramble text="Build Smarter" trigger="inView" />
        </h2>
        <p className="sec-body">Everything you need to design, develop, and deploy your hackathon solution.</p>
      </motion.div>

      <motion.div 
        className="res-grid"
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
        {resourcesData.map((group) => (
          <motion.div
            key={group.head}
            className="res-grp"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 }
              },
            }}
            whileHover={{ 
              backgroundColor: 'var(--lift)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="res-head"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {group.head}
            </motion.div>
            {group.links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="res-link"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ x: 10, color: '#fff' }}
              >
                {link.label}
              </motion.a>
            ))}
            {group.footer && (
              <div style={{ marginTop:10, paddingTop:10, borderTop:'1px solid var(--bdr)', fontSize:11, color:'var(--dim)', lineHeight:1.7 }}>
                {group.footer}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
