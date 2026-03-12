"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface Judge {
  id: string;
  initials: string;
  name: string;
  role: string;
  org: string;
  linkedin: string;
  color: string;
}

const judges: Judge[] = [
  { id: "j01", initials: "VP", name: "Venkata Krishna Bharadwaj Parasaram", role: "Senior Project Manager", org: "Thermo Fisher Scientific", linkedin: "https://www.linkedin.com/in/venkata-k-bharadwaj-parasaram/", color: "#00e8d6" },
  { id: "j02", initials: "LK", name: "Lokesh Karanam", role: "Staff Software Engineer", org: "RR Donnelley", linkedin: "https://www.linkedin.com/in/lokesh-karanam/", color: "#a855f7" },
  { id: "j03", initials: "SM", name: "Siva Kumar Mudiyanur", role: "Senior BI Engineer", org: "Amazon", linkedin: "https://www.linkedin.com/in/siva-mudiyanur/", color: "#4ade80" },
  { id: "j04", initials: "VM", name: "Varun Misra", role: "Director Technical Architect", org: "Salesforce", linkedin: "https://linkedin.com/in/varun-misra-33048915", color: "#f87171" },
  { id: "j05", initials: "JY", name: "Jyoti Yadav", role: "Sr Data Science Manager", org: "Atlassian", linkedin: "https://www.linkedin.com/in/jyotiyadav/", color: "#fbbf24" },
  { id: "j06", initials: "VL", name: "Viacheslav Latypov", role: "Senior Project Manager, PMO lead", org: "Hercules Dynamics", linkedin: "https://www.linkedin.com/in/v-latypov/", color: "#38bdf8" },
  { id: "j07", initials: "TI", name: "Talha Cagatay ISIK", role: "Senior Integration Engineer", org: "Trilitech", linkedin: "https://www.linkedin.com/in/talhaisik/", color: "#f472b6" },
  { id: "j08", initials: "ST", name: "Shishir Tewari", role: "Senior Manager, Data Engineering", org: "Procore Technologies", linkedin: "https://www.linkedin.com/in/shishir-tewari-36113514/", color: "#34d399" },
  { id: "j09", initials: "SM", name: "Sneha Malshetti", role: "Senior Security Engineer", org: "Ethos", linkedin: "https://LinkedIn.com/in/sneha-malshetti", color: "#a78bfa" },
  { id: "j10", initials: "DJ", name: "Dinesh Jagadeesan", role: "Engineering Manager", org: "Meta Platforms", linkedin: "https://www.linkedin.com/in/dineshjagadeesan/", color: "#60a5fa" },
  { id: "j11", initials: "SK", name: "Srikanth Kavuri", role: "Senior Software Development Engineer Test", org: "SCDHHS", linkedin: "https://www.linkedin.com/in/srikanth-kavuri-0937b9132/", color: "#f87171" },
  { id: "j12", initials: "JM", name: "Jeet Nishit Mehta", role: "Software Engineer", org: "Netflix", linkedin: "https://www.linkedin.com/in/jeetm35/", color: "#c084fc" },
  { id: "j13", initials: "DM", name: "Deepanjan Mukherjee", role: "Director of Engineering", org: "athenahealth Inc.", linkedin: "https://www.linkedin.com/in/deepanjanmukherjee/", color: "#38bdf8" },
  { id: "j14", initials: "AJ", name: "Akanksha Jangir", role: "Lead Data Engineer", org: "SymphonyAI", linkedin: "https://www.linkedin.com/in/akankshajangir", color: "#fbbf24" },
  { id: "j15", initials: "AG", name: "Ashish Ghatge", role: "Robotics Software Engineer", org: "Zupt, LLC", linkedin: "https://linkedin.com/in/ashish-ghatge", color: "#4ade80" },
  { id: "j16", initials: "IN", name: "Ilia Nagovitsyn", role: "Quantitative Researcher", org: "", linkedin: "https://www.linkedin.com/in/ilya-nagovitsyn", color: "#f472b6" },
  { id: "j17", initials: "SP", name: "Santosh Ramrao Patil", role: "Senior Product Manager", org: "Cisco Systems", linkedin: "https://www.linkedin.com/in/2santoshpatil/", color: "#60a5fa" },
  { id: "j18", initials: "PD", name: "Pearce Dolan", role: "Head of Product", org: "Deel", linkedin: "https://www.linkedin.com/in/pearce-dolan-3061aa12a/", color: "#c084fc" },
  { id: "j19", initials: "SR", name: "Suresh Kumar Thulasi Ram", role: "Senior AI & Cloud Professional", org: "ADMN Wizard", linkedin: "https://www.linkedin.com/in/sureshkumarthulasiram-ai", color: "#38bdf8" },
  { id: "j20", initials: "AK", name: "Atul Khanna", role: "Enterprise Support Manager", org: "AWS", linkedin: "https://www.linkedin.com/in/atul-khanna-34a2b142/", color: "#f97316" },
  { id: "j21", initials: "RA", name: "Ramandeep Aulakh", role: "Sr. Director of Product", org: "Visa", linkedin: "https://www.linkedin.com/in/raman-aulakh/", color: "#1d4ed8" },
  { id: "j22", initials: "RA", name: "Raman Aulakh", role: "Sr. Director, Product Management", org: "Visa", linkedin: "https://www.linkedin.com/in/raman-aulakh/", color: "#1d4ed8" },
  { id: "j23", initials: "SR", name: "Shri Lakshmi Rajagopal", role: "Sr.Automation QA Engineer", org: "", linkedin: "", color: "#8b5cf6" },
  { id: "j24", initials: "SP", name: "SriHarsha anand Pushkala", role: "Director, Fraud Analytics", org: "Atlanticus", linkedin: "https://LinkedIn.com/sriharshaanandpushkala", color: "#ec4899" },
  { id: "j25", initials: "JB", name: "Juan Pablo Peral Belmont", role: "CEO & Founder", org: "Nerdmask", linkedin: "https://www.linkedin.com/in/jppbelmont/", color: "#fbbf24" },
  { id: "j26", initials: "SK", name: "Sameer Kankute", role: "Founding Backend Engineer", org: "", linkedin: "https://www.linkedin.com/in/sameer-kankute/", color: "#22d3ee" },
  { id: "j27", initials: "HJ", name: "Hao Jia", role: "Founder & CEO & CTO", org: "SynMind Inc", linkedin: "https://www.linkedin.com/in/meethaojia/", color: "#a855f7" },
  { id: "j28", initials: "VJ", name: "Vidit Jain", role: "Data Scientist", org: "Credit One Bank", linkedin: "https://www.linkedin.com/in/viditjain92", color: "#34d399" },
  { id: "j29", initials: "SS", name: "Sanjoy Sarkar", role: "Senior Vice President, Senior Director", org: "First Citizens Bank", linkedin: "https://www.linkedin.com/in/iamsanjoysarkar/", color: "#60a5fa" },
  { id: "j30", initials: "MK", name: "Manisha Konda", role: "Senior Analyst", org: "Walgreens", linkedin: "https://www.linkedin.com/in/manisha-konda-a291321b2", color: "#f472b6" },
];

function JudgeAvatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div className="judge-avatar-wrapper">
      <div 
        className="judge-avatar"
        style={{ 
          background: `linear-gradient(135deg, ${color}40, ${color}20)`,
          borderColor: `${color}60`
        }}
      >
        <span className="judge-initials" style={{ color }}>{initials}</span>
      </div>
    </div>
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
          <p className="section-subtitle">
            30+ industry experts from leading tech companies ready to evaluate your innovations
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
            >
              <JudgeAvatar initials={judge.initials} color={judge.color} />
              
              <h3 className="judge-name">{judge.name}</h3>
              <p className="judge-role">{judge.role}</p>
              <p className="judge-org">{judge.org || "Industry Expert"}</p>
              
              {judge.linkedin && (
                <a
                  href={judge.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="judge-linkedin"
                  style={{ 
                    borderColor: `${judge.color}40`,
                    color: judge.color
                  }}
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
        
        .judge-avatar-wrapper {
          margin-bottom: 1rem;
        }
        
        .judge-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          transition: transform 0.3s ease;
        }
        
        .judge-card:hover .judge-avatar {
          transform: scale(1.05);
        }
        
        .judge-initials {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.05em;
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
          border: 1px solid;
          font-size: 0.75rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .judge-linkedin:hover {
          opacity: 0.8;
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}
