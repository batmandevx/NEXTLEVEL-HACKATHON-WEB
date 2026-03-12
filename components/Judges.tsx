'use client';

import { motion } from 'framer-motion';
import { Linkedin, Award, Users, Sparkles, Shield, Star } from 'lucide-react';
import judgesData from '@/judges-data.json';
import AvatarHuman from './AvatarHuman';
import TextScramble from './TextScramble';

const REGISTER_URL = 'https://nextlevelhackathon.devpost.com/';

// Color themes for each judge
const judgeColors: Record<string, { ja: string; jb: string }> = {
  j01: { ja: '#00e8d6', jb: '#0096a0' },
  j02: { ja: '#9b6dff', jb: '#6840c0' },
  j03: { ja: '#00e5a0', jb: '#009e6e' },
  j04: { ja: '#ff5f57', jb: '#c0341a' },
  j05: { ja: '#ffb547', jb: '#c07800' },
  j06: { ja: '#38bdf8', jb: '#1a6ea0' },
  j07: { ja: '#f472b6', jb: '#b03080' },
  j08: { ja: '#00e8d6', jb: '#9b6dff' },
  j09: { ja: '#ffb547', jb: '#ff5f57' },
  j10: { ja: '#9b6dff', jb: '#38bdf8' },
  j11: { ja: '#00e5a0', jb: '#38bdf8' },
  j12: { ja: '#ff5f57', jb: '#f472b6' },
  j13: { ja: '#38bdf8', jb: '#00e5a0' },
  j14: { ja: '#ffb547', jb: '#f472b6' },
  j15: { ja: '#00e8d6', jb: '#4ade80' },
  j16: { ja: '#a855f7', jb: '#f472b6' },
  j17: { ja: '#60a5fa', jb: '#3b82f6' },
  j18: { ja: '#c084fc', jb: '#a855f7' },
  j19: { ja: '#38bdf8', jb: '#60a5fa' },
  j20: { ja: '#f97316', jb: '#fb923c' },
  j21: { ja: '#1d4ed8', jb: '#3b82f6' },
  j22: { ja: '#1d4ed8', jb: '#60a5fa' },
  j23: { ja: '#8b5cf6', jb: '#a78bfa' },
  j24: { ja: '#ec4899', jb: '#f472b6' },
  j25: { ja: '#fbbf24', jb: '#f59e0b' },
  j26: { ja: '#22d3ee', jb: '#06b6d4' },
  j27: { ja: '#a855f7', jb: '#c084fc' },
  j28: { ja: '#34d399', jb: '#10b981' },
  j29: { ja: '#60a5fa', jb: '#3b82f6' },
  j30: { ja: '#f472b6', jb: '#ec4899' },
  j31: { ja: '#00e8d6', jb: '#00b8ab' },
};

export default function Judges() {
  return (
    <section id="judges">
      {/* Background Effects */}
      <div className="judges-bg-effects">
        <motion.div 
          className="j-bg-orb orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="j-bg-orb orb-2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="j-bg-orb orb-3"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="judges-inner">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="sec-eye">// evaluation panel</div>
          <h2 className="sec-h">
            <TextScramble text="Meet the Judges" trigger="inView" />
          </h2>
          
          {/* Selection Rate Badge */}
          <motion.div 
            className="selection-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="badge-icon" size={18} />
            <span>11% Selection Rate</span>
          </motion.div>
          
          <p className="sec-body">
            Our judges are selected through a <strong>rigorous vetting process</strong> to ensure the highest quality evaluation. 
            Each expert is hand-picked from leading tech companies based on their industry experience, technical expertise, and track record.
          </p>
          
          {/* Stats Row */}
          <motion.div 
            className="judges-stats-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="j-stat-item">
              <Users size={16} />
              <span>31 Elite Judges</span>
            </div>
            <div className="j-stat-item featured">
              <Shield size={16} />
              <span>Rigorous Vetting</span>
            </div>
            <div className="j-stat-item">
              <Star size={16} />
              <span>Industry Leaders</span>
            </div>
            <div className="j-stat-item">
              <Award size={16} />
              <span>Top 11% Selected</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="j-grid">
          {judgesData.map((judge, index) => {
            const colors = judgeColors[judge.id] || { ja: '#00e8d6', jb: '#0096a0' };
            return (
              <motion.div
                key={judge.id}
                className={`jc ${judge.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                style={{ '--ja': colors.ja, '--jb': colors.jb } as React.CSSProperties}
              >
                {/* Company badge */}
                {judge.org && (
                  <span className="j-company">{judge.org}</span>
                )}
                
                {/* 3D Human Avatar */}
                <div className="j-avatar-wrapper">
                  <AvatarHuman 
                    seed={judge.name}
                    size={72}
                    primaryColor={colors.ja}
                  />
                </div>
                
                {/* Judge info */}
                <h3 className="j-name">{judge.name}</h3>
                <p className="j-role" style={{ color: colors.ja }}>{judge.role}</p>
                {judge.org && <p className="j-org">{judge.org}</p>}
                
                {/* LinkedIn */}
                {judge.linkedin && (
                  <a
                    href={judge.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="j-linkedin"
                    style={{ 
                      borderColor: colors.ja,
                      color: colors.ja,
                    }}
                  >
                    <Linkedin size={12} />
                    <span>Profile</span>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="j-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="j-cta-title">Interested in Judging?</h3>
            <p className="j-cta-body">
              Join our elite panel of experts. Only the top 11% of applicants are selected through our rigorous vetting process.{' '}
              <a href="mailto:hackathonofficialx@gmail.com">Contact us</a> to learn more.
            </p>
          </div>
          <motion.a 
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-violet"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply to Judge →
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .judges-bg-effects {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }
        
        .j-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 232, 214, 0.15), transparent 70%);
          top: 10%;
          left: -10%;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(155, 109, 255, 0.12), transparent 70%);
          top: 30%;
          right: -5%;
        }
        
        .orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 181, 71, 0.1), transparent 70%);
          bottom: 20%;
          left: 30%;
        }
        
        .selection-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, rgba(0, 232, 214, 0.15), rgba(168, 85, 247, 0.15));
          border: 1px solid rgba(0, 232, 214, 0.3);
          border-radius: 50px;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          letter-spacing: 1.5px;
          color: var(--teal);
          margin: 20px 0;
          box-shadow: 0 0 30px rgba(0, 232, 214, 0.1);
        }
        
        .badge-icon {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        .judges-stats-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        
        .j-stat-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          font-size: 12px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1px;
          color: var(--sub);
          transition: all 0.3s ease;
        }
        
        .j-stat-item:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.15);
        }
        
        .j-stat-item.featured {
          background: linear-gradient(135deg, rgba(0, 232, 214, 0.1), rgba(168, 85, 247, 0.1));
          border-color: rgba(0, 232, 214, 0.25);
          color: var(--teal);
        }
        
        @media (max-width: 768px) {
          .judges-stats-row {
            gap: 10px;
          }
          
          .j-stat-item {
            padding: 8px 14px;
            font-size: 11px;
          }
          
          .selection-badge {
            padding: 10px 18px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
