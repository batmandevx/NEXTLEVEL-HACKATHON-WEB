'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import TextScramble from './TextScramble';

const judges = [
  { id:'j01', initials:'VK', name:'Venkata Krishna Bharadwaj Parasaram', role:'Senior Project Manager', org:'Thermo Fisher Scientific', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/' },
  { id:'j02', initials:'LK', name:'Lokesh Karanam', role:'Staff Software Engineer', org:'RR Donnelley', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j03', initials:'SM', name:'Siva Kumar Mudiyanur', role:'Senior BI Engineer', org:'Amazon', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j04', initials:'VM', name:'Varun Misra', role:'Director, Technical Architect', org:'Salesforce', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j05', initials:'JY', name:'Jyoti Yadav', role:'Sr. Data Science Manager', org:'Atlassian', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j06', initials:'VL', name:'Viacheslav Latypov', role:'Sr. Project Manager, PMO Lead', org:'Hercules Dynamics', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j07', initials:'TC', name:'Talha Cagatay ISIK', role:'Senior Integration Engineer', org:'Trilitech', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j08', initials:'ST', name:'Shishir Tewari', role:'Senior Manager, Data Engineering', org:'Procore Technologies', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j09', initials:'SN', name:'Sneha Malshetti', role:'Senior Security Engineer', org:'Ethos', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j10', initials:'DJ', name:'Dinesh Jagadeesan', role:'Engineering Manager', org:'Meta Platforms', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j11', initials:'SK', name:'Srikanth Kavuri', role:'Senior SDET Engineer', org:'SCDHHS', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/' },
  { id:'j12', initials:'JM', name:'Jeet Nishit Mehta', role:'Software Engineer', org:'Netflix', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j13', initials:'DM', name:'Deepanjan Mukherjee', role:'Director of Engineering', org:'athenahealth Inc.', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/' },
  { id:'j14', initials:'AJ', name:'Akanksha Jangir', role:'Lead Data Engineer', org:'SymphonyAI', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j15', initials:'AG', name:'Ashish Ghatge', role:'Robotics Software Engineer', org:'Zupt, LLC', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j16', initials:'IN', name:'Ilia Nagovitsyn', role:'Quantitative Researcher', org:'U.S. Energy Trading Firm', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/' },
  { id:'j17', initials:'SP', name:'Santosh Ramrao Patil', role:'Senior Product Manager', org:'Cisco Systems', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j18', initials:'PD', name:'Pearce Dolan', role:'Head of Product', org:'Deel', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j19', initials:'SR', name:'Suresh Kumar Thulasi Ram', role:'Senior AI & Cloud Professional', org:'Independent', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j20', initials:'AK', name:'Atul Khanna', role:'Enterprise Support Manager', org:'AWS', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j21', initials:'RA', name:'Ramandeep Aulakh', role:'Sr. Director of Product', org:'Visa', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/' },
  { id:'j22', initials:'SL', name:'Shri Lakshmi Rajagopal', role:'Sr. Automation QA Engineer', org:'Tech Industry', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j23', initials:'SH', name:'SriHarsha anand Pushkala', role:'Director, Fraud Analytics', org:'Atlanticus', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/' },
  { id:'j24', initials:'JP', name:'Juan Pablo Peral Belmont', role:'CEO & Founder', org:'Nerdmask', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j25', initials:'SK', name:'Sameer Kankute', role:'Founding Backend Engineer', org:'Startup', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j26', initials:'HJ', name:'Hao Jia', role:'Founder & CEO & CTO', org:'SynMind Inc', flag:'🌍 International', linkedin:'https://www.linkedin.com/in/' },
  { id:'j27', initials:'VJ', name:'Vidit Jain', role:'Data Scientist', org:'Credit One Bank', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/' },
  { id:'j28', initials:'SS', name:'Sanjoy Sarkar', role:'Senior Vice President', org:'First Citizens Bank', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/' },
  { id:'j29', initials:'MK', name:'Manisha Konda', role:'Senior Analyst', org:'Walgreens', flag:'🇺🇸 USA', linkedin:'https://www.linkedin.com/in/' },
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

const judgeColors: Record<string, {ja: string, jb: string}> = {
  j01: {ja:'#00e8d6', jb:'#0096a0'}, j02: {ja:'#9b6dff', jb:'#6840c0'}, j03: {ja:'#00e5a0', jb:'#009e6e'},
  j04: {ja:'#ff5f57', jb:'#c0341a'}, j05: {ja:'#ffb547', jb:'#c07800'}, j06: {ja:'#38bdf8', jb:'#1a6ea0'},
  j07: {ja:'#f472b6', jb:'#b03080'}, j08: {ja:'#00e8d6', jb:'#9b6dff'}, j09: {ja:'#ffb547', jb:'#ff5f57'},
  j10: {ja:'#9b6dff', jb:'#38bdf8'}, j11: {ja:'#00e5a0', jb:'#38bdf8'}, j12: {ja:'#ff5f57', jb:'#f472b6'},
  j13: {ja:'#38bdf8', jb:'#00e5a0'}, j14: {ja:'#ffb547', jb:'#f472b6'}, j15: {ja:'#00e8d6', jb:'#ffb547'},
  j16: {ja:'#9b6dff', jb:'#00e8d6'}, j17: {ja:'#ff5f57', jb:'#00e5a0'}, j18: {ja:'#38bdf8', jb:'#9b6dff'},
  j19: {ja:'#f472b6', jb:'#ffb547'}, j20: {ja:'#00e5a0', jb:'#ff5f57'}, j21: {ja:'#00e8d6', jb:'#38bdf8'},
  j22: {ja:'#9b6dff', jb:'#f472b6'}, j23: {ja:'#ffb547', jb:'#00e8d6'}, j24: {ja:'#ff5f57', jb:'#9b6dff'},
  j25: {ja:'#38bdf8', jb:'#00e8d6'}, j26: {ja:'#00e5a0', jb:'#ffb547'}, j27: {ja:'#9b6dff', jb:'#ff5f57'},
  j28: {ja:'#f472b6', jb:'#38bdf8'}, j29: {ja:'#00e8d6', jb:'#00e5a0'},
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
          style={{ marginBottom: '60px' }}
        >
          <motion.div 
            className="sec-eye"
            whileHover={{ scale: 1.05, textShadow: '0 0 8px var(--teal)' }}
            style={{ cursor: 'pointer' }}
          >
            // expert panel
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring', bounce: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,181,71,0.3)' }}
            style={{ 
              display: 'inline-block', 
              padding: '6px 16px', 
              borderRadius: '30px', 
              background: 'rgba(255,181,71,0.1)', 
              border: '1px solid rgba(255,181,71,0.3)',
              color: 'var(--amber)',
              fontFamily: '"DM Mono", monospace',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              boxShadow: '0 0 20px rgba(255,181,71,0.15)',
              cursor: 'default'
            }}
          >
            🔥 Top 11% Selection Rate Globally
          </motion.div>

          <h2 className="sec-h">
            <TextScramble text="Global Expert Judges" trigger="inView" />
          </h2>
          <p className="sec-body" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            We have carefully selected our judges globally through a thorough and rigorous selection process, resulting in an exclusive <strong>11% selection rate</strong>. 
            <br/><br/>
            These senior engineers, directors, VPs, and founders from the world&apos;s top tech companies are here to deliver real, structured, and actionable feedback — not just scores.
          </p>
        </motion.div>

        <motion.div 
          className="j-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.04 },
            },
          }}
        >
          {judges.map((j) => {
            const colors = judgeColors[j.id];
            return (
              <motion.div
                key={j.id}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.85, rotateX: -10 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotateX: 0,
                    transition: { duration: 0.6, type: 'spring', bounce: 0.4 }
                  },
                }}
              >
                <TiltCard
                  className={`jc ${j.id}`}
                  tiltAmount={15}
                  glowColor={`${colors.ja}50`}
                  glowIntensity={0.6}
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
                  
                  {/* Avatar with Animated Ring */}
                  <motion.div 
                    className={`j-av ${j.id}`}
                    style={{
                      background: `linear-gradient(135deg, ${colors.ja}, ${colors.jb})`,
                      boxShadow: `0 0 30px ${colors.ja}40`,
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      boxShadow: `0 0 50px ${colors.ja}60`,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {j.initials}
                    
                    {/* Animated ring */}
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
                      style={{ border: `2px solid ${colors.ja}` }}
                    />
                  </motion.div>
                  
                  {/* Judge Info */}
                  <motion.div 
                    className="j-name"
                    whileHover={{ color: colors.ja }}
                  >
                    {j.name}
                  </motion.div>
                  <div className="j-role" style={{ color: colors.ja }}>{j.role}</div>
                  <div className="j-org">{j.org}</div>
                  <div className="j-flag">{j.flag}</div>
                  
                  {/* LinkedIn Link */}
                  <motion.a
                    href={j.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="j-linkedin"
                    style={{ 
                      color: colors.ja,
                      borderColor: colors.ja,
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: colors.ja,
                      color: '#000',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LinkedInIcon />
                    <span>Connect</span>
                  </motion.a>
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
