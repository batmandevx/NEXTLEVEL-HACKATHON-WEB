'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Award, Briefcase, Clock, Sparkles, ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import judgesData from '@/judges-data.json';
import AvatarHuman from './AvatarHuman';

// Color themes for each judge
const judgeColors: Record<string, { primary: string; secondary: string; accent: string }> = {
  j01: { primary: '#00e8d6', secondary: '#0096a0', accent: '#5ff3e7' },
  j02: { primary: '#9b6dff', secondary: '#6840c0', accent: '#c5a3ff' },
  j03: { primary: '#00e5a0', secondary: '#009e6e', accent: '#5fffc5' },
  j04: { primary: '#ff5f57', secondary: '#c0341a', accent: '#ff9a93' },
  j05: { primary: '#ffb547', secondary: '#c07800', accent: '#ffd78a' },
  j06: { primary: '#38bdf8', secondary: '#1a6ea0', accent: '#7dd3fc' },
  j07: { primary: '#f472b6', secondary: '#b03080', accent: '#fbcfe8' },
  j08: { primary: '#00e8d6', secondary: '#9b6dff', accent: '#a5f3fc' },
  j09: { primary: '#ffb547', secondary: '#ff5f57', accent: '#fed7aa' },
  j10: { primary: '#9b6dff', secondary: '#38bdf8', accent: '#ddd6fe' },
  j11: { primary: '#00e5a0', secondary: '#38bdf8', accent: '#6ee7b7' },
  j12: { primary: '#ff5f57', secondary: '#f472b6', accent: '#fca5a5' },
  j13: { primary: '#38bdf8', secondary: '#00e5a0', accent: '#67e8f9' },
  j14: { primary: '#ffb547', secondary: '#f472b6', accent: '#fde047' },
  j15: { primary: '#00e8d6', secondary: '#4ade80', accent: '#86efac' },
  j16: { primary: '#a855f7', secondary: '#f472b6', accent: '#e879f9' },
  j17: { primary: '#60a5fa', secondary: '#3b82f6', accent: '#93c5fd' },
  j18: { primary: '#c084fc', secondary: '#a855f7', accent: '#d8b4fe' },
  j19: { primary: '#38bdf8', secondary: '#60a5fa', accent: '#7dd3fc' },
  j20: { primary: '#f97316', secondary: '#fb923c', accent: '#fdba74' },
  j21: { primary: '#1d4ed8', secondary: '#3b82f6', accent: '#60a5fa' },
  j22: { primary: '#1d4ed8', secondary: '#60a5fa', accent: '#93c5fd' },
  j23: { primary: '#8b5cf6', secondary: '#a78bfa', accent: '#c4b5fd' },
  j24: { primary: '#ec4899', secondary: '#f472b6', accent: '#fbcfe8' },
  j25: { primary: '#fbbf24', secondary: '#f59e0b', accent: '#fcd34d' },
  j26: { primary: '#22d3ee', secondary: '#06b6d4', accent: '#67e8f9' },
  j27: { primary: '#a855f7', secondary: '#c084fc', accent: '#d8b4fe' },
  j28: { primary: '#34d399', secondary: '#10b981', accent: '#6ee7b7' },
  j29: { primary: '#60a5fa', secondary: '#3b82f6', accent: '#93c5fd' },
  j30: { primary: '#f472b6', secondary: '#ec4899', accent: '#fbcfe8' },
  j31: { primary: '#00e8d6', secondary: '#00b8ab', accent: '#5ff3e7' },
  j32: { primary: '#f59e0b', secondary: '#d97706', accent: '#fbbf24' },
  j33: { primary: '#3b82f6', secondary: '#1d4ed8', accent: '#60a5fa' },
  j34: { primary: '#10b981', secondary: '#059669', accent: '#34d399' },
  j35: { primary: '#8b5cf6', secondary: '#7c3aed', accent: '#a78bfa' },
  j36: { primary: '#ef4444', secondary: '#dc2626', accent: '#fca5a5' },
  j37: { primary: '#06b6d4', secondary: '#0891b2', accent: '#22d3ee' },
  j38: { primary: '#84cc16', secondary: '#65a30d', accent: '#a3e635' },
  j39: { primary: '#f97316', secondary: '#ea580c', accent: '#fdba74' },
  j40: { primary: '#6366f1', secondary: '#4f46e5', accent: '#818cf8' },
  j41: { primary: '#14b8a6', secondary: '#0d9488', accent: '#2dd4bf' },
};

const AUTO_FLIP_INTERVAL = 6000; // 6 seconds per judge

export default function JudgesFlipCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const currentJudge = judgesData[currentIndex];
  const colors = judgeColors[currentJudge.id] || { primary: '#00e8d6', secondary: '#0096a0', accent: '#5ff3e7' };

  const nextJudge = useCallback(() => {
    setDirection(1);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % judgesData.length);
    }, 300);
  }, []);

  const prevJudge = useCallback(() => {
    setDirection(-1);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + judgesData.length) % judgesData.length);
    }, 300);
  }, []);

  const goToJudge = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(index);
    }, 300);
  };

  // Auto-flip timer
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextJudge();
    }, AUTO_FLIP_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, nextJudge]);

  // Card flip timer (flip to back after 2.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    
    const flipTimeout = setTimeout(() => {
      setIsFlipped(true);
    }, 2500);

    return () => clearTimeout(flipTimeout);
  }, [currentIndex, isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: 0,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <section className="jfc-section">
      <div className="jfc-container">
        {/* Header */}
        <motion.div 
          className="jfc-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="jfc-eyebrow">
            <Sparkles size={14} />
            <span>Spotlight Series</span>
          </div>
          <h2 className="jfc-title">
            Meet Our <span className="gradient-text">Elite Judges</span>
          </h2>
          <p className="jfc-subtitle">
            41 industry-leading experts from top tech companies, constantly rotating to showcase their expertise
          </p>
        </motion.div>

        {/* Card Container */}
        <div 
          className="jfc-card-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button className="jfc-nav-arrow prev" onClick={prevJudge} aria-label="Previous judge">
            <ChevronLeft size={24} />
          </button>
          <button className="jfc-nav-arrow next" onClick={nextJudge} aria-label="Next judge">
            <ChevronRight size={24} />
          </button>

          {/* Progress Ring */}
          <div className="jfc-progress-ring">
            <svg viewBox="0 0 100 100">
              <circle
                className="progress-bg"
                cx="50"
                cy="50"
                r="46"
              />
              <motion.circle
                className="progress-fill"
                cx="50"
                cy="50"
                r="46"
                stroke={colors.primary}
                strokeDasharray="289"
                initial={{ strokeDashoffset: 289 }}
                animate={{ strokeDashoffset: isPaused ? 289 : 0 }}
                transition={{ 
                  duration: AUTO_FLIP_INTERVAL / 1000, 
                  ease: "linear",
                  repeat: isPaused ? 0 : Infinity,
                }}
              />
            </svg>
            <span className="jfc-counter">
              {currentIndex + 1}<small>/{judgesData.length}</small>
            </span>
          </div>

          {/* The Flipping Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentJudge.id}
              className="jfc-card-container"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="jfc-card"
                animate={{ 
                  rotateY: isFlipped ? 180 : 0,
                }}
                transition={{ 
                  duration: 0.6, 
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* FRONT OF CARD */}
                <div className="jfc-card-face front" style={{ '--primary': colors.primary, '--secondary': colors.secondary } as React.CSSProperties}>
                  <div className="jfc-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${colors.primary}40, transparent 60%)` }} />
                  
                  <div className="jfc-avatar-section">
                    <div className="jfc-avatar-ring" style={{ borderColor: colors.primary }}>
                      <AvatarHuman seed={currentJudge.name} size={100} primaryColor={colors.primary} />
                    </div>
                    <div className="jfc-avatar-pulse" style={{ background: colors.primary }} />
                  </div>

                  <div className="jfc-info">
                    <h3 className="jfc-name">{currentJudge.name}</h3>
                    <p className="jfc-role" style={{ color: colors.primary }}>{currentJudge.role}</p>
                    {currentJudge.org && (
                      <span className="jfc-org">
                        <Briefcase size={12} />
                        {currentJudge.org}
                      </span>
                    )}
                  </div>

                  {currentJudge.yearsExp && (
                    <div className="jfc-badge" style={{ background: `${colors.primary}20`, color: colors.primary }}>
                      <Clock size={12} />
                      {currentJudge.yearsExp} Experience
                    </div>
                  )}

                  <div className="jfc-hint">
                    <span>Hover or wait to flip</span>
                  </div>
                </div>

                {/* BACK OF CARD */}
                <div 
                  className="jfc-card-face back" 
                  style={{ 
                    transform: 'rotateY(180deg)',
                    '--primary': colors.primary, 
                    '--secondary': colors.secondary 
                  } as React.CSSProperties}
                >
                  <div className="jfc-glow-back" style={{ background: `radial-gradient(circle at 50% 100%, ${colors.secondary}30, transparent 60%)` }} />
                  
                  <div className="jfc-back-header">
                    <Quote size={20} style={{ color: colors.primary }} />
                    <span className="jfc-back-label">About</span>
                  </div>

                  <div className="jfc-bio">
                    {currentJudge.bio ? (
                      <p>{currentJudge.bio}</p>
                    ) : (
                      <p className="jfc-bio-placeholder">Experienced professional with expertise in {currentJudge.expertise || 'technology and innovation'}.</p>
                    )}
                  </div>

                  {currentJudge.experience && (
                    <div className="jfc-experience">
                      <div className="jfc-exp-header">
                        <Award size={14} style={{ color: colors.accent }} />
                        <span>Experience</span>
                      </div>
                      <p>{currentJudge.experience}</p>
                    </div>
                  )}

                  {currentJudge.expertise && (
                    <div className="jfc-expertise">
                      {currentJudge.expertise.split(',').slice(0, 3).map((exp, i) => (
                        <span 
                          key={i} 
                          className="jfc-exp-tag"
                          style={{ 
                            background: `${colors.primary}15`, 
                            color: colors.primary,
                            borderColor: `${colors.primary}30`
                          }}
                        >
                          {exp.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  {currentJudge.linkedin && (
                    <a 
                      href={currentJudge.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jfc-linkedin"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                        borderColor: `${colors.primary}40`,
                        color: colors.primary
                      }}
                    >
                      <Linkedin size={14} />
                      <span>View LinkedIn Profile</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="jfc-dots">
          {judgesData.map((_, index) => (
            <button
              key={index}
              className={`jfc-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToJudge(index)}
              style={{
                background: index === currentIndex ? colors.primary : undefined,
                boxShadow: index === currentIndex ? `0 0 10px ${colors.primary}60` : undefined
              }}
              aria-label={`Go to judge ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="jfc-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="jfc-stat">
            <span className="jfc-stat-value">41</span>
            <span className="jfc-stat-label">Expert Judges</span>
          </div>
          <div className="jfc-stat-divider" />
          <div className="jfc-stat">
            <span className="jfc-stat-value">11%</span>
            <span className="jfc-stat-label">Selection Rate</span>
          </div>
          <div className="jfc-stat-divider" />
          <div className="jfc-stat">
            <span className="jfc-stat-value">500+</span>
            <span className="jfc-stat-label">Years Combined XP</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .jfc-section {
          padding: 100px 20px;
          background: linear-gradient(180deg, rgba(10, 10, 15, 0.8) 0%, rgba(15, 15, 25, 1) 100%);
          position: relative;
          overflow: hidden;
        }

        .jfc-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(0, 232, 214, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 80% 50%, rgba(155, 109, 255, 0.03) 0%, transparent 40%);
          pointer-events: none;
        }

        .jfc-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .jfc-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .jfc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 232, 214, 0.1);
          border: 1px solid rgba(0, 232, 214, 0.2);
          border-radius: 50px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 20px;
        }

        .jfc-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 16px;
          color: #fff;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00e8d6, #9b6dff, #ffb547);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .jfc-subtitle {
          color: var(--sub);
          font-size: 1rem;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .jfc-card-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 500px;
          perspective: 1000px;
        }

        .jfc-card-container {
          width: 100%;
          max-width: 420px;
        }

        .jfc-card {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          transform-style: preserve-3d;
        }

        .jfc-card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(20, 20, 30, 0.95), rgba(10, 10, 15, 0.98));
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
        }

        .jfc-glow, .jfc-glow-back {
          position: absolute;
          inset: 0;
          opacity: 0.6;
          pointer-events: none;
        }

        .jfc-avatar-section {
          position: relative;
          margin-bottom: 24px;
        }

        .jfc-avatar-ring {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 2px solid;
          padding: 8px;
          position: relative;
          z-index: 1;
        }

        .jfc-avatar-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(15px);
          animation: avatarPulse 2s ease-in-out infinite;
        }

        @keyframes avatarPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }

        .jfc-info {
          text-align: center;
          margin-bottom: 20px;
        }

        .jfc-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .jfc-role {
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .jfc-org {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--sub);
          background: rgba(255, 255, 255, 0.05);
          padding: 6px 12px;
          border-radius: 20px;
        }

        .jfc-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          margin-top: auto;
          margin-bottom: 16px;
        }

        .jfc-hint {
          font-size: 0.75rem;
          color: var(--sub);
          opacity: 0.6;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1px;
        }

        /* BACK OF CARD */
        .jfc-back-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          width: 100%;
        }

        .jfc-back-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--sub);
        }

        .jfc-bio {
          flex: 1;
          overflow-y: auto;
          margin-bottom: 16px;
          padding-right: 8px;
        }

        .jfc-bio::-webkit-scrollbar {
          width: 4px;
        }

        .jfc-bio::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .jfc-bio p {
          font-size: 0.9rem;
          line-height: 1.7;
          color: #e0e0e0;
        }

        .jfc-bio-placeholder {
          font-style: italic;
          color: var(--sub);
        }

        .jfc-experience {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 16px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .jfc-exp-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 8px;
        }

        .jfc-experience p {
          font-size: 0.8rem;
          line-height: 1.5;
          color: var(--sub);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .jfc-expertise {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
          justify-content: center;
        }

        .jfc-exp-tag {
          font-size: 0.7rem;
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid;
          font-weight: 500;
          white-space: nowrap;
        }

        .jfc-linkedin {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 12px;
          border: 1px solid;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .jfc-linkedin:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px currentColor;
        }

        /* NAVIGATION */
        .jfc-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .jfc-nav-arrow:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-50%) scale(1.1);
        }

        .jfc-nav-arrow.prev { left: 0; }
        .jfc-nav-arrow.next { right: 0; }

        @media (max-width: 600px) {
          .jfc-nav-arrow {
            width: 40px;
            height: 40px;
          }
          .jfc-nav-arrow.prev { left: -10px; }
          .jfc-nav-arrow.next { right: -10px; }
        }

        /* PROGRESS RING */
        .jfc-progress-ring {
          position: absolute;
          top: -30px;
          right: 20px;
          width: 70px;
          height: 70px;
          z-index: 20;
        }

        .jfc-progress-ring svg {
          transform: rotate(-90deg);
          width: 100%;
          height: 100%;
        }

        .progress-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 4;
        }

        .progress-fill {
          fill: none;
          stroke-width: 4;
          stroke-linecap: round;
        }

        .jfc-counter {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
        }

        .jfc-counter small {
          font-size: 10px;
          color: var(--sub);
          margin-left: 2px;
        }

        /* DOTS */
        .jfc-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 30px;
          flex-wrap: wrap;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .jfc-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .jfc-dot:hover {
          background: rgba(255, 255, 255, 0.4);
          transform: scale(1.2);
        }

        .jfc-dot.active {
          transform: scale(1.3);
        }

        /* STATS */
        .jfc-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          margin-top: 50px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          flex-wrap: wrap;
        }

        .jfc-stat {
          text-align: center;
        }

        .jfc-stat-value {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, #00e8d6, #9b6dff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .jfc-stat-label {
          font-size: 0.75rem;
          color: var(--sub);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .jfc-stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 500px) {
          .jfc-stats {
            gap: 20px;
          }
          .jfc-stat-divider {
            display: none;
          }
          .jfc-card-face {
            padding: 24px;
          }
        }

        /* Paused indicator */
        .jfc-card-wrapper[data-paused="true"] .jfc-progress-ring {
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
}
