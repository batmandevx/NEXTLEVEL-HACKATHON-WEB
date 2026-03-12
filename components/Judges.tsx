"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useState } from "react";

interface Judge {
  id: string;
  name: string;
  role: string;
  org: string;
  linkedin: string;
  seed: string;
  color: string;
}

const judges: Judge[] = [
  { id: "j01", name: "Venkata Krishna Bharadwaj Parasaram", role: "Senior Project Manager", org: "Thermo Fisher Scientific", linkedin: "https://www.linkedin.com/in/venkata-k-bharadwaj-parasaram/", seed: "VKBP", color: "#00e8d6" },
  { id: "j02", name: "Lokesh Karanam", role: "Staff Software Engineer", org: "RR Donnelley", linkedin: "https://www.linkedin.com/in/lokesh-karanam/", seed: "Lokesh", color: "#a855f7" },
  { id: "j03", name: "Siva Kumar Mudiyanur", role: "Senior BI Engineer", org: "Amazon", linkedin: "https://www.linkedin.com/in/siva-mudiyanur/", seed: "Siva", color: "#4ade80" },
  { id: "j04", name: "Varun Misra", role: "Director Technical Architect", org: "Salesforce", linkedin: "https://linkedin.com/in/varun-misra-33048915", seed: "Varun", color: "#f87171" },
  { id: "j05", name: "Jyoti Yadav", role: "Sr Data Science Manager", org: "Atlassian", linkedin: "https://www.linkedin.com/in/jyotiyadav/", seed: "Jyoti", color: "#fbbf24" },
  { id: "j06", name: "Viacheslav Latypov", role: "Senior Project Manager, PMO lead", org: "Hercules Dynamics", linkedin: "https://www.linkedin.com/in/v-latypov/", seed: "Viacheslav", color: "#38bdf8" },
  { id: "j07", name: "Talha Cagatay ISIK", role: "Senior Integration Engineer", org: "Trilitech", linkedin: "https://www.linkedin.com/in/talhaisik/", seed: "Talha", color: "#f472b6" },
  { id: "j08", name: "Shishir Tewari", role: "Senior Manager, Data Engineering", org: "Procore Technologies", linkedin: "https://www.linkedin.com/in/shishir-tewari-36113514/", seed: "Shishir", color: "#34d399" },
  { id: "j09", name: "Sneha Malshetti", role: "Senior Security Engineer", org: "Ethos", linkedin: "https://LinkedIn.com/in/sneha-malshetti", seed: "Sneha", color: "#a78bfa" },
  { id: "j10", name: "Dinesh Jagadeesan", role: "Engineering Manager", org: "Meta Platforms", linkedin: "https://www.linkedin.com/in/dineshjagadeesan/", seed: "Dinesh", color: "#60a5fa" },
  { id: "j11", name: "Srikanth Kavuri", role: "Senior SDET", org: "SCDHHS", linkedin: "https://www.linkedin.com/in/srikanth-kavuri-0937b9132/", seed: "Srikanth", color: "#f87171" },
  { id: "j12", name: "Jeet Nishit Mehta", role: "Software Engineer", org: "Netflix", linkedin: "https://www.linkedin.com/in/jeetm35/", seed: "Jeet", color: "#c084fc" },
  { id: "j13", name: "Deepanjan Mukherjee", role: "Director of Engineering", org: "athenahealth Inc.", linkedin: "https://www.linkedin.com/in/deepanjanmukherjee/", seed: "Deepanjan", color: "#38bdf8" },
  { id: "j14", name: "Akanksha Jangir", role: "Lead Data Engineer", org: "SymphonyAI", linkedin: "https://www.linkedin.com/in/akankshajangir", seed: "Akanksha", color: "#fbbf24" },
  { id: "j15", name: "Ashish Ghatge", role: "Robotics Software Engineer", org: "Zupt, LLC", linkedin: "https://linkedin.com/in/ashish-ghatge", seed: "Ashish", color: "#4ade80" },
  { id: "j16", name: "Ilia Nagovitsyn", role: "Quantitative Researcher", org: "", linkedin: "https://www.linkedin.com/in/ilya-nagovitsyn", seed: "Ilia", color: "#f472b6" },
  { id: "j17", name: "Santosh Ramrao Patil", role: "Senior Product Manager", org: "Cisco Systems", linkedin: "https://www.linkedin.com/in/2santoshpatil/", seed: "Santosh", color: "#60a5fa" },
  { id: "j18", name: "Pearce Dolan", role: "Head of Product", org: "Deel", linkedin: "https://www.linkedin.com/in/pearce-dolan-3061aa12a/", seed: "Pearce", color: "#c084fc" },
  { id: "j19", name: "Suresh Kumar Thulasi Ram", role: "Senior AI & Cloud Professional", org: "ADMN Wizard", linkedin: "https://www.linkedin.com/in/sureshkumarthulasiram-ai", seed: "Suresh", color: "#38bdf8" },
  { id: "j20", name: "Atul Khanna", role: "Enterprise Support Manager", org: "AWS", linkedin: "https://www.linkedin.com/in/atul-khanna-34a2b142/", seed: "Atul", color: "#f97316" },
  { id: "j21", name: "Ramandeep Aulakh", role: "Sr. Director of Product", org: "Visa", linkedin: "https://www.linkedin.com/in/raman-aulakh/", seed: "Ramandeep", color: "#1d4ed8" },
  { id: "j22", name: "Raman Aulakh", role: "Sr. Director, Product Management", org: "Visa", linkedin: "https://www.linkedin.com/in/raman-aulakh/", seed: "Raman", color: "#1d4ed8" },
  { id: "j23", name: "Shri Lakshmi Rajagopal", role: "Sr.Automation QA Engineer", org: "", linkedin: "", seed: "Shri", color: "#8b5cf6" },
  { id: "j24", name: "SriHarsha anand Pushkala", role: "Director, Fraud Analytics", org: "Atlanticus", linkedin: "https://LinkedIn.com/sriharshaanandpushkala", seed: "SriHarsha", color: "#ec4899" },
  { id: "j25", name: "Juan Pablo Peral Belmont", role: "CEO & Founder", org: "Nerdmask", linkedin: "https://www.linkedin.com/in/jppbelmont/", seed: "Juan", color: "#fbbf24" },
  { id: "j26", name: "Sameer Kankute", role: "Founding Backend Engineer", org: "", linkedin: "https://www.linkedin.com/in/sameer-kankute/", seed: "Sameer", color: "#22d3ee" },
  { id: "j27", name: "Hao Jia", role: "Founder & CEO & CTO", org: "SynMind Inc", linkedin: "https://www.linkedin.com/in/meethaojia/", seed: "Hao", color: "#a855f7" },
  { id: "j28", name: "Vidit Jain", role: "Data Scientist", org: "Credit One Bank", linkedin: "https://www.linkedin.com/in/viditjain92", seed: "Vidit", color: "#34d399" },
  { id: "j29", name: "Sanjoy Sarkar", role: "Senior Vice President, Senior Director", org: "First Citizens Bank", linkedin: "https://www.linkedin.com/in/iamsanjoysarkar/", seed: "Sanjoy", color: "#60a5fa" },
  { id: "j30", name: "Manisha Konda", role: "Senior Analyst", org: "Walgreens", linkedin: "https://www.linkedin.com/in/manisha-konda-a291321b2", seed: "Manisha", color: "#f472b6" },
];

function Avatar3D({ seed, color }: { seed: string; color: string }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * 15);
    setRotateY(x * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Generate avatar URL using DiceBear API - creates human-like avatars
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9&radius=50`;

  return (
    <motion.div
      className="avatar-3d-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 }}
    >
      <div className="avatar-inner" style={{ "--avatar-color": color } as React.CSSProperties}>
        <img 
          src={avatarUrl} 
          alt={`${seed} avatar`}
          className="avatar-img"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

export default function Judges() {
  return (
    <section id="judges" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Meet the Experts</span>
          <h2 className="section-title">
            Our Esteemed <span className="highlight">Judges</span>
          </h2>
          <div className="selection-badge">
            <span className="badge-icon">✦</span>
            <span>11% Selection Rate</span>
          </div>
          <p className="section-subtitle">
            30 elite judges hand-picked from across the US through our rigorous vetting process
          </p>
        </motion.div>

        <div className="judges-grid">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.id}
              className="judge-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              style={{ "--judge-color": judge.color } as React.CSSProperties}
            >
              <Avatar3D seed={judge.seed} color={judge.color} />
              
              <h3 className="judge-name">{judge.name}</h3>
              <p className="judge-role">{judge.role}</p>
              <p className="judge-org">{judge.org || "Industry Expert"}</p>
              
              {judge.linkedin && (
                <a
                  href={judge.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="judge-linkedin"
                >
                  <Linkedin size={14} />
                  <span>Connect</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 5rem 0;
          background: var(--bg-primary);
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.05);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        
        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }
        
        .highlight {
          background: linear-gradient(135deg, #00e8d6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .selection-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(0, 232, 214, 0.15), rgba(168, 85, 247, 0.15));
          border: 1px solid rgba(0, 232, 214, 0.3);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #00e8d6;
          margin-bottom: 0.75rem;
        }
        
        .badge-icon {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .section-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .judges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.25rem;
        }
        
        @media (min-width: 640px) {
          .judges-grid {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          }
        }
        
        .judge-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .judge-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-4px);
        }
        
        .avatar-3d-wrapper {
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
          transform-style: preserve-3d;
        }
        
        .avatar-inner {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 3px rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        
        .judge-card:hover .avatar-inner {
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 0 3px var(--avatar-color);
        }
        
        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .judge-name {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }
        
        .judge-role {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          margin-bottom: 0.125rem;
        }
        
        .judge-org {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          margin-bottom: 0.75rem;
        }
        
        .judge-linkedin {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          border-radius: 8px;
          border: 1px solid var(--judge-color);
          color: var(--judge-color);
          font-size: 0.75rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .judge-linkedin:hover {
          background: var(--judge-color);
          color: #0a0a0a;
        }
      `}</style>
    </section>
  );
}
