'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import TextScramble from './TextScramble';
import Avatar3D from './Avatar3D';

const judges = [
  { id:'j01', name:'Venkata Krishna Bharadwaj Parasaram', role:'Senior Project Manager', org:'Thermo Fisher Scientific', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/venkata-k-bharadwaj-parasaram/', colors:['#00e8d6', '#0096a0', '#00b8ab', '#38bdf8', '#00e5a0'] },
  { id:'j02', name:'Lokesh Karanam', role:'Staff Software Engineer', org:'RR Donnelley', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/lokesh-karanam/', colors:['#9b6dff', '#6840c0', '#8b5cf6', '#a78bfa', '#c4b5fd'] },
  { id:'j03', name:'Siva Kumar Mudiyanur', role:'Senior BI Engineer', org:'Amazon', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/siva-mudiyanur/', colors:['#00e5a0', '#009e6e', '#10b981', '#34d399', '#6ee7b7'] },
  { id:'j04', name:'Varun Misra', role:'Director Technical Architect', org:'Salesforce', flag:'🌍 International', linkedin:'https://linkedin.com/in/varun-misra-33048915', colors:['#ff5f57', '#c0341a', '#ef4444', '#f87171', '#fca5a5'] },
  { id:'j05', name:'Jyoti Yadav', role:'Sr Data Science Manager', org:'Atlassian', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/jyotiyadav/', colors:['#ffb547', '#c07800', '#f59e0b', '#fbbf24', '#fcd34d'] },
  { id:'j06', name:'Viacheslav Latypov', role:'Senior Project Manager, PMO lead', org:'Hercules Dynamics', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/v-latypov/', colors:['#38bdf8', '#1a6ea0', '#0ea5e9', '#7dd3fc', '#bae6fd'] },
  { id:'j07', name:'Talha Cagatay ISIK', role:'Senior Integration Engineer', org:'Trilitech', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/talhaisik/', colors:['#f472b6', '#b03080', '#ec4899', '#f9a8d4', '#fbcfe8'] },
  { id:'j08', name:'Shishir Tewari', role:'Senior Manager, Data Engineering', org:'Procore Technologies', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/shishir-tewari-36113514/', colors:['#00e8d6', '#9b6dff', '#00e5a0', '#ffb547', '#ff5f57'] },
  { id:'j09', name:'Sneha Malshetti', role:'Senior Security Engineer', org:'Ethos', flag:'🌍 International', linkedin:'https://LinkedIn.com/in/sneha-malshetti', colors:['#ffb547', '#ff5f57', '#f59e0b', '#ef4444', '#fbbf24'] },
  { id:'j10', name:'Dinesh Jagadeesan', role:'Engineering Manager', org:'Meta Platforms', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/dineshjagadeesan/', colors:['#9b6dff', '#38bdf8', '#8b5cf6', '#0ea5e9', '#a78bfa'] },
  { id:'j11', name:'Srikanth Kavuri', role:'Senior SDET Engineer', org:'SCDHHS', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/srikanth-kavuri-0937b9132/', colors:['#00e5a0', '#38bdf8', '#10b981', '#0ea5e9', '#34d399'] },
  { id:'j12', name:'Jeet Nishit Mehta', role:'Software Engineer', org:'Netflix', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/jeetm35/', colors:['#ff5f57', '#f472b6', '#ef4444', '#ec4899', '#f87171'] },
  { id:'j13', name:'Deepanjan Mukherjee', role:'Director of Engineering', org:'athenahealth Inc.', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/deepanjanmukherjee/', colors:['#38bdf8', '#00e5a0', '#0ea5e9', '#10b981', '#7dd3fc'] },
  { id:'j14', name:'Akanksha Jangir', role:'Lead Data Engineer', org:'SymphonyAI', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/akankshajangir', colors:['#ffb547', '#f472b6', '#f59e0b', '#ec4899', '#fbbf24'] },
  { id:'j15', name:'Ashish Ghatge', role:'Robotics Software Engineer', org:'Zupt, LLC', flag:'🌍 International', linkedin:'https://linkedin.com/in/ashish-ghatge', colors:['#00e8d6', '#ffb547', '#00b8ab', '#f59e0b', '#38bdf8'] },
  { id:'j16', name:'Ilia Nagovitsyn', role:'Quantitative Researcher', org:'U.S. Energy Trading Firm', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/ilya-nagovitsyn', colors:['#9b6dff', '#00e8d6', '#8b5cf6', '#00e8d6', '#c4b5fd'] },
  { id:'j17', name:'Santosh Ramrao Patil', role:'Senior Product Manager', org:'Cisco Systems', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/2santoshpatil/', colors:['#ff5f57', '#00e5a0', '#ef4444', '#10b981', '#f87171'] },
  { id:'j18', name:'Pearce Dolan', role:'Head of Product', org:'Deel', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/pearce-dolan-3061aa12a/', colors:['#38bdf8', '#9b6dff', '#0ea5e9', '#8b5cf6', '#7dd3fc'] },
  { id:'j19', name:'Suresh Kumar Thulasi Ram', role:'Senior AI & Cloud Professional', org:'Independent', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/sureshkumarthulasiram-ai', colors:['#f472b6', '#ffb547', '#ec4899', '#f59e0b', '#f9a8d4'] },
  { id:'j20', name:'Atul Khanna', role:'Enterprise Support Manager', org:'AWS', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/atul-khanna-34a2b142/', colors:['#00e8d6', '#ff5f57', '#00b8ab', '#ef4444', '#38bdf8'] },
  { id:'j21', name:'Ramandeep Aulakh', role:'Sr. Director of Product', org:'Visa', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/raman-aulakh/', colors:['#9b6dff', '#ffb547', '#8b5cf6', '#f59e0b', '#a78bfa'] },
  { id:'j22', name:'Shri Lakshmi Rajagopal', role:'Sr. Automation QA Engineer', org:'Tech Industry', flag:'🌍 International', linkedin:'', colors:['#00e5a0', '#f472b6', '#10b981', '#ec4899', '#34d399'] },
  { id:'j23', name:'SriHarsha anand Pushkala', role:'Director, Fraud Analytics', org:'Atlanticus', flag:'🇺🇸 USA', linkedin:'https://LinkedIn.com/sriharshaanandpushkala', colors:['#ffb547', '#00e8d6', '#f59e0b', '#00e8d6', '#fbbf24'] },
  { id:'j24', name:'Juan Pablo Peral Belmont', role:'CEO & Founder', org:'Nerdmask', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/jppbelmont/', colors:['#ff5f57', '#9b6dff', '#ef4444', '#8b5cf6', '#f87171'] },
  { id:'j25', name:'Sameer Kankute', role:'Founding Backend Engineer', org:'Startup', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/sameer-kankute/', colors:['#38bdf8', '#00e8d6', '#0ea5e9', '#00e8d6', '#7dd3fc'] },
  { id:'j26', name:'Hao Jia', role:'Founder & CEO & CTO', org:'SynMind Inc', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/meethaojia/', colors:['#00e5a0', '#ffb547', '#10b981', '#f59e0b', '#34d399'] },
  { id:'j27', name:'Vidit Jain', role:'Data Scientist', org:'Credit One Bank', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/viditjain92', colors:['#9b6dff', '#ff5f57', '#8b5cf6', '#ef4444', '#c4b5fd'] },
  { id:'j28', name:'Sanjoy Sarkar', role:'Senior Vice President', org:'First Citizens Bank', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/iamsanjoysarkar/', colors:['#f472b6', '#38bdf8', '#ec4899', '#0ea5e9', '#f9a8d4'] },
  { id:'j29', name:'Manisha Konda', role:'Senior Analyst', org:'Walgreens', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/manisha-konda-a291321b2', colors:['#00e8d6', '#00e5a0', '#00b8ab', '#10b981', '#38bdf8'] },
];

const companyBadge: Record<string,string> = {
  'Thermo Fisher Scientific': 'Thermo Fisher',
  'RR Donnelley': 'RR Donnelley',
  'Amazon': 'Amazon',
  'Salesforce': 'Salesforce',
  'Atlassian': 'Atlassian',
  'Hercules Dynamics': 'Hercules',
  'Trilitech': 'Trilitech',
  'Procore Technologies': 'Procore',
  'Ethos': 'Ethos',
  'Meta Platforms': 'Meta',
  'SCDHHS': 'SCDHHS',
  'Netflix': 'Netflix',
  'athenahealth Inc.': 'athenahealth',
  'SymphonyAI': 'SymphonyAI',
  'Zupt, LLC': 'Zupt',
  'U.S. Energy Trading Firm': 'Energy Trading',
  'Cisco Systems': 'Cisco',
  'Deel': 'Deel',
  'Independent': 'Judge',
  'AWS': 'AWS',
  'Visa': 'Visa',
  'Tech Industry': 'Engineering',
  'Atlanticus': 'Atlanticus',
  'Nerdmask': 'Nerdmask',
  'Startup': 'Startup',
  'SynMind Inc': 'SynMind',
  'Credit One Bank': 'Credit One',
  'First Citizens Bank': 'First Citizens',
  'Walgreens': 'Walgreens',
};

// LinkedIn Icon Component
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Judges() {
  return (
    <section id="judges">
      <div className="judges-inner">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="sec-eye">// expert panel</div>
          <h2 className="sec-h">
            <TextScramble text="29 Expert Judges" trigger="inView" />
          </h2>
          <p className="sec-body">Senior engineers, directors, VPs, and industry leaders from the world&apos;s top companies delivering real, structured feedback — not just scores.</p>
        </motion.div>

        <motion.div 
          className="j-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.02 },
            },
          }}
        >
          {judges.map((j) => {
            const primaryColor = j.colors[0];
            const secondaryColor = j.colors[1];
            
            return (
              <motion.div
                key={j.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
                  },
                }}
              >
                <TiltCard
                  className={`jc ${j.id}`}
                  tiltAmount={8}
                  glowColor={`${primaryColor}30`}
                  glowIntensity={0.4}
                >
                  {/* Company Badge */}
                  <motion.span 
                    className="j-company"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {companyBadge[j.org] ?? j.org}
                  </motion.span>
                  
                  {/* 3D Avatar */}
                  <motion.div
                    className="j-avatar-wrapper"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Avatar3D 
                      name={j.name}
                      size={80}
                      color1={j.colors[0]}
                      color2={j.colors[1]}
                      color3={j.colors[2]}
                      color4={j.colors[3]}
                      color5={j.colors[4]}
                    />
                    
                    {/* Animated ring around avatar */}
                    <motion.div
                      className="j-av-ring"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                      }}
                      style={{ 
                        border: `2px solid ${primaryColor}`,
                        position: 'absolute',
                        inset: '-6px',
                        borderRadius: '50%',
                        opacity: 0.5,
                      }}
                    />
                  </motion.div>
                  
                  {/* Judge Info */}
                  <motion.div 
                    className="j-name"
                    whileHover={{ color: primaryColor }}
                  >
                    {j.name}
                  </motion.div>
                  <div className="j-role" style={{ color: primaryColor }}>{j.role}</div>
                  <div className="j-org">{j.org}</div>
                  <div className="j-flag">{j.flag}</div>
                  
                  {/* LinkedIn Link */}
                  {j.linkedin && (
                    <motion.a
                      href={j.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="j-linkedin"
                      style={{ 
                        color: primaryColor,
                        borderColor: primaryColor,
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: primaryColor,
                        color: '#000',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LinkedInIcon />
                      <span>Connect</span>
                    </motion.a>
                  )}
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="j-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div>
            <div className="j-cta-title">
              <TextScramble text="Questions? Contact Us" trigger="inView" />
            </div>
            <div className="j-cta-body">
              We&apos;re here to help! Reach out to the hackathon manager for any questions about participation, judging, or sponsorship opportunities.
              <br /><br />
              📩 Contact: <a href="mailto:hackathonofficialx@gmail.com">hackathonofficialx@gmail.com</a>
            </div>
          </div>
          <motion.a 
            href="mailto:hackathonofficialx@gmail.com" 
            className="btn-violet"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(155, 109, 255, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
