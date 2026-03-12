'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import TextScramble from './TextScramble';

const panelStats = [
  { n: '$7', u: 'K+', l: 'Cash Prizes' },
  { n: '30', u: '', l: 'Expert Judges' },
  { n: '5', u: '', l: 'Tracks' },
  { n: '65', u: '+', l: 'Participants' },
  { n: '200', u: '+', l: 'Free API Units' },
  { n: '∞', u: '', l: 'Possibilities' },
];

export default function About() {
  return (
    <section id="about">
      <div className="about-grid" style={{ alignItems: 'flex-start' }}>
        <motion.div 
          className="about-copy"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="sec-eye">// about the event</div>
          <h2 className="sec-h">
            <TextScramble text="Next Level Hackathon 2026" trigger="inView" />
          </h2>
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            Next Level Hackathon 2026 is a global virtual hackathon designed for developers, engineers, designers, and product innovators who want to build technology that goes beyond simple prototypes.
          </motion.p>
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.6 }}>
            This event brings together a global community of builders to design and develop impactful solutions using modern technologies such as Artificial Intelligence, Machine Learning, Cloud Infrastructure, Web Technologies, Cybersecurity, and emerging developer tools.
          </motion.p>
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
            Participants will collaborate in teams to build working products that solve real-world problems. Throughout the hackathon, hackers will have the opportunity to learn from experienced industry professionals, receive mentorship, and present their solutions to a panel of judges from leading technology companies.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35, duration: 0.6 }}>
            Unlike many traditional hackathons that focus only on quick demos, Next Level Hackathon emphasizes practical innovation and scalable system design. Teams are encouraged to build solutions with strong technical architecture, thoughtful product design, and real-world applicability.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} style={{ marginTop: '1.5rem', color: 'var(--teal)' }}>
            <strong>During the event, participants will be able to:</strong>
          </motion.p>

          <motion.ul initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45, duration: 0.6 }} style={{ paddingLeft: '1.5rem', color: 'var(--sub)', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
            <li>Build innovative projects using modern technology stacks</li>
            <li>Collaborate with talented developers and creators from around the world</li>
            <li>Receive mentorship and technical guidance from experienced professionals</li>
            <li>Present projects to an international judging panel</li>
            <li>Gain valuable experience building real portfolio projects</li>
          </motion.ul>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}>
            The hackathon welcomes developers, designers, product managers, startup founders, students, and technology enthusiasts who are passionate about building impactful technology. Whether you are developing an AI-powered application, a scalable cloud platform, a fintech solution, a Web3 product, or a social impact innovation, Next Level Hackathon 2026 provides the platform to experiment, collaborate, and transform ideas into real products.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.55, duration: 0.6 }}>
            If you are passionate about innovation, problem-solving, and building meaningful technology, Next Level Hackathon 2026 is your opportunity to create something extraordinary with a global community of builders.
          </motion.p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="panel-container"
          style={{ position: 'sticky', top: '120px' }}
        >
          <TiltCard
            className="about-panel"
            tiltAmount={5}
            glowColor="rgba(0, 232, 214, 0.2)"
            glowIntensity={0.3}
          >
            <div className="panel-header">
              <span className="panel-title">
                <TextScramble text="event dashboard" trigger="inView" />
              </span>
              <div className="panel-dot">
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="pd1" />
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="pd2" />
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="pd3" />
              </div>
            </div>
            <div className="panel-grid">
              {panelStats.map((stat, i) => (
                <motion.div
                  key={stat.l}
                  className="pg-cell"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  whileHover={{ backgroundColor: 'var(--lift)', scale: 1.02 }}
                >
                  <motion.span className="pgn" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }}>
                    {stat.n}<span className="u">{stat.u}</span>
                  </motion.span>
                  <div className="pgl">{stat.l}</div>
                </motion.div>
              ))}
            </div>
            <div className="panel-footer">
              <span className="pf-url">nextlevelhackathon.devpost.com</span>
              <motion.span className="pf-live" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                Registration Open
              </motion.span>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Requirements Section */}
      <div className="req-container" style={{ maxWidth: 1200, margin: '80px auto 0', padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="sec-eye" style={{ textAlign: 'center', marginBottom: '10px' }}>// Submission Requirements</div>
          <h3 style={{ color: 'var(--text)', fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>To be eligible for judging, all teams must complete their project submission through Devpost and include the following components:</h3>

          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: '40px' }}>
            
            <TiltCard tiltAmount={5} glowColor="rgba(255,181,71,0.15)" className="req-card">
              <h4 style={{ color: 'var(--amber)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '2rem' }}>📝</span> Project Description</h4>
              <p style={{ color: 'var(--sub)', marginBottom: '1rem' }}>Provide a clear overview of your project, including:</p>
              <ul style={{ color: 'var(--sub)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>The problem your project aims to solve</li>
                <li>Your proposed solution and its key features</li>
                <li>The technologies, frameworks, or tools used in development</li>
                <li>The potential impact or real-world application of your solution</li>
              </ul>
            </TiltCard>

            <TiltCard tiltAmount={5} glowColor="rgba(0,229,160,0.15)" className="req-card">
              <h4 style={{ color: 'var(--mint)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '2rem' }}>🎥</span> Demo Video (Required)</h4>
              <p style={{ color: 'var(--sub)', marginBottom: '1rem' }}>Submit a 2–3 minute demonstration video that showcases your project in action. The video should include:</p>
              <ul style={{ color: 'var(--sub)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>A brief explanation of the problem</li>
                <li>Key features and functionality of the product</li>
                <li>A live demonstration of the working prototype</li>
              </ul>
              <p style={{ color: 'var(--sub)', marginTop: '1rem', fontStyle: 'italic' }}>The demo video helps judges understand your project quickly and effectively.</p>
            </TiltCard>

            <TiltCard tiltAmount={5} glowColor="rgba(56,189,248,0.15)" className="req-card">
              <h4 style={{ color: 'var(--sky)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '2rem' }}>⚙️</span> Working Prototype</h4>
              <p style={{ color: 'var(--sub)' }}>
                Teams must submit a functional prototype, application, or technical implementation of their solution. Projects should demonstrate meaningful progress and working functionality rather than only concept ideas.
              </p>
            </TiltCard>

            <TiltCard tiltAmount={5} glowColor="rgba(155,109,255,0.15)" className="req-card">
              <h4 style={{ color: 'var(--violet)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '2rem' }}>💻</span> Code Repository</h4>
              <p style={{ color: 'var(--sub)', marginBottom: '1rem' }}>Provide a link to your GitHub repository or equivalent code hosting platform containing the project source code. The repository should include:</p>
              <ul style={{ color: 'var(--sub)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Well-organized project files</li>
                <li>Clear README documentation</li>
                <li>Instructions for running or testing the project</li>
              </ul>
            </TiltCard>

            <TiltCard tiltAmount={5} glowColor="rgba(255,95,87,0.15)" className="req-card">
              <h4 style={{ color: 'var(--coral)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '2rem' }}>📊</span> Presentation (Optional)</h4>
              <p style={{ color: 'var(--sub)', marginBottom: '1rem' }}>Teams are encouraged to include supporting materials such as:</p>
              <ul style={{ color: 'var(--sub)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Architecture diagrams</li>
                <li>Product design explanations</li>
                <li>Technical documentation</li>
                <li>Slide presentations</li>
              </ul>
              <p style={{ color: 'var(--sub)', marginTop: '1rem', fontStyle: 'italic' }}>These help judges better understand design decisions and scalability.</p>
            </TiltCard>

            <div style={{ gridColumn: '1 / -1' }}>
              <TiltCard tiltAmount={5} glowColor="rgba(0,232,214,0.15)" className="req-card">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
                  <div style={{ flex: '1 1 300px' }}>
                    <h4 style={{ color: 'var(--teal)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '2rem' }}>👥</span> Team Registration</h4>
                    <p style={{ color: 'var(--sub)' }}>All team members must be properly listed on the Devpost project submission page. Only registered team members will be recognized as official participants.</p>
                  </div>
                  <div style={{ flex: '1 1 300px' }}>
                    <h4 style={{ color: 'var(--teal)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '2rem' }}>📋</span> Additional Guidelines</h4>
                    <ul style={{ color: 'var(--sub)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <li>Projects must be built during the hackathon period.</li>
                      <li>Teams may use open source libraries, APIs, and publicly available tools.</li>
                      <li>Submissions must comply with all hackathon rules and Devpost guidelines.</li>
                    </ul>
                    <p style={{ color: 'var(--coral)', marginTop: '10px', fontWeight: 'bold' }}>Incomplete submissions or projects that do not include the required components may not be eligible for judging.</p>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
