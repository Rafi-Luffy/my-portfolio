'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowUp,
  Download,
  Github,
  Linkedin,
  Menu,
  X,
  Volume2,
  VolumeX,
  ExternalLink,
  Award,
  Sparkles,
  Cpu,
  Trophy,
  Brain,
  Infinity,
  Database,
  Network,
  Briefcase,
  ChevronDown,
  Terminal,
  User
} from 'lucide-react';
import HeroScene from './components/HeroScene';
import Preloader from './components/Preloader';
import FeaturedSystemsStack from './components/FeaturedSystemsStack';
import FeaturedJourneyStack from './components/FeaturedJourneyStack';
import HackathonGallery from './components/HackathonGallery';
import CommandPalette from './components/CommandPalette';
import HolographicCard from './components/HolographicCard';
import CustomCursor from './components/CustomCursor';
import ContactForm from './components/ContactForm';
import { sound } from './components/AudioEngine';
import {
  RESUME_PATH,
  PROFILE_PATH,
  additionalProjects,
  hackathons,
  certifications,
  skills
} from './data';

const Reveal = ({
  children,
  delay = 0,
  y = 35
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

interface NavDropdownItem {
  label: string;
  href: string;
  desc: string;
  icon: React.ReactNode;
  gradient: string;
  iconColor: string;
  badge?: string;
}

interface NavCategory {
  id: string;
  label: string;
  tagline: string;
  items: NavDropdownItem[];
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setAudioActive(sound.isEnabled());

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Bounty Rising... 👀';
      } else {
        document.title = 'Rafi.S.B.M - AI Engineer & Full-Stack Systems Architect';
      }
    };

    document.title = 'Rafi.S.B.M - AI Engineer & Full-Stack Systems Architect';

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleScroll = () => {
      const heroEl = document.getElementById('top') || document.querySelector('.edition-hero');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setShowBackToTop(rect.bottom <= 40);
      } else {
        setShowBackToTop(window.scrollY > 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const toggleAudio = () => {
    const next = sound.toggle();
    setAudioActive(next);
  };

  const navCategories: NavCategory[] = [
    {
      id: 'overview',
      label: 'Overview',
      tagline: 'PROFILE & PHILOSOPHY',
      items: [
        {
          label: 'About Me',
          href: '#about',
          desc: 'Academic profile, leadership trajectory & core values',
          icon: <User size={17} />,
          gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.22), rgba(37, 99, 235, 0.15))',
          iconColor: '#38bdf8'
        },
        {
          label: 'Engineering Philosophy',
          href: '#mission',
          desc: 'First-principles manifesto, Kaizen discipline & digital substrate',
          icon: <Brain size={17} />,
          gradient: 'linear-gradient(135deg, rgba(192, 132, 252, 0.22), rgba(147, 51, 234, 0.15))',
          iconColor: '#c084fc'
        }
      ]
    },
    {
      id: 'systems',
      label: 'Systems & Tools',
      tagline: 'PRODUCTION ARCHITECTURES',
      items: [
        {
          label: 'Featured Systems',
          href: '#systems',
          desc: 'NASA Chimera, GraphRAG, Speech AI & Project Phoenix',
          icon: <Cpu size={17} />,
          gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.22), rgba(16, 185, 129, 0.15))',
          iconColor: '#38bdf8'
        },
        {
          label: 'Interactive Developer Tools',
          href: '#tools',
          desc: 'Shortcut Sensei, PySan AST & Memo no Sekai CLI',
          icon: <Terminal size={17} />,
          gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.22), rgba(249, 115, 22, 0.15))',
          iconColor: '#fbbf24'
        }
      ]
    },
    {
      id: 'journey',
      label: 'Journey & Honors',
      tagline: 'EXPERIENCE & VALIDATION',
      items: [
        {
          label: 'Professional Journey',
          href: '#journey',
          desc: 'Work Experience, Freelancing, Leadership & Mentor Learnings',
          icon: <Briefcase size={17} />,
          gradient: 'linear-gradient(135deg, rgba(129, 140, 248, 0.22), rgba(56, 189, 248, 0.15))',
          iconColor: '#818cf8'
        },
        {
          label: 'Hackathons & Honors',
          href: '#hackathons',
          desc: 'Google Cloud Grand Finalist & NASA Space Apps Global',
          icon: <Trophy size={17} />,
          gradient: 'linear-gradient(135deg, rgba(250, 204, 21, 0.22), rgba(234, 88, 12, 0.15))',
          iconColor: '#facc15'
        }
      ]
    },
    {
      id: 'expertise',
      label: 'Expertise',
      tagline: 'STACK & CERTIFICATION',
      items: [
        {
          label: 'Technical Capabilities',
          href: '#capabilities',
          desc: 'Multi-agent swarms, verifiable graph memory & cloud infrastructure',
          icon: <Network size={17} />,
          gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.22), rgba(168, 85, 247, 0.15))',
          iconColor: '#38bdf8'
        },
        {
          label: 'Verified Certifications',
          href: '#certifications',
          desc: 'Google Cloud, AWS, IITs NPTEL & Columbia University',
          icon: <Award size={17} />,
          gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.22), rgba(5, 150, 105, 0.15))',
          iconColor: '#34d399'
        }
      ]
    }
  ];

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to main content
      </a>

      <Preloader />
      <CustomCursor />
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      <header className="edition-header">
        <a
          href="#top"
          className="edition-logo"
          onClick={() => sound.click()}
          onMouseEnter={() => sound.hover()}
        >
          <span className="logo-box">R</span>
          <span className="logo-text">
            <b>RAFI</b> EDITIONS ’26
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          {navCategories.map((cat) => {
            const isOpen = openDropdown === cat.id;
            return (
              <div
                key={cat.id}
                className={`nav-category-group ${isOpen ? 'open' : ''}`}
                onMouseEnter={() => {
                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                  sound.hover();
                  setOpenDropdown(cat.id);
                }}
                onMouseLeave={() => {
                  dropdownTimeoutRef.current = setTimeout(() => {
                    setOpenDropdown(null);
                  }, 180);
                }}
              >
                <button
                  type="button"
                  className={`nav-category-trigger ${isOpen ? 'active' : ''}`}
                  aria-expanded={isOpen}
                  onClick={() => {
                    sound.click();
                    setOpenDropdown(isOpen ? null : cat.id);
                  }}
                >
                  <span>{cat.label}</span>
                  <ChevronDown size={13} className="nav-chevron" />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="nav-dropdown-menu"
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="nav-dropdown-header">
                        <span className="nav-dropdown-tagline">{cat.tagline}</span>
                        <span className="nav-dropdown-dot" />
                      </div>

                      <div className="nav-dropdown-items-stack">
                        {cat.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="nav-dropdown-item"
                            onClick={() => {
                              sound.click();
                              setOpenDropdown(null);
                            }}
                          >
                            <div
                              className="nav-item-icon-box"
                              style={{
                                background: item.gradient,
                                color: item.iconColor
                              }}
                            >
                              {item.icon}
                            </div>
                            <div className="nav-item-text">
                              <div className="nav-item-title-row">
                                <span className="nav-item-title">{item.label}</span>
                                {item.badge && (
                                  <span className="nav-item-badge">{item.badge}</span>
                                )}
                                <ArrowUpRight size={13} className="nav-item-arrow" />
                              </div>
                              <span className="nav-item-desc">{item.desc}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <a
            href="#contact"
            className="nav-category-trigger"
            onClick={() => sound.click()}
            onMouseEnter={() => sound.hover()}
          >
            <span>Contact</span>
          </a>
        </nav>

        <div className="header-actions">
          <CommandPalette />

          <button
            className="audio-toggle-btn"
            onClick={toggleAudio}
            title={audioActive ? 'Mute audio feedback' : 'Enable haptic audio feedback'}
            aria-label="Toggle audio"
          >
            {audioActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <a
            className="resume-pill-btn"
            href={RESUME_PATH}
            download
            onClick={() => sound.click()}
            onMouseEnter={() => sound.hover()}
          >
            <Download size={14} /> Resume
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => {
              sound.click();
              setMenuOpen(!menuOpen);
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-nav-drawer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <nav className="mobile-nav-categories" aria-label="Mobile Navigation">
                {navCategories.map((cat) => (
                  <div key={cat.id} className="mobile-nav-group">
                    <div className="mobile-nav-group-title">{cat.label}</div>
                    {cat.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="mobile-nav-item"
                        onClick={() => {
                          sound.click();
                          setMenuOpen(false);
                        }}
                      >
                        <div
                          className="mobile-nav-item-icon"
                          style={{
                            background: item.gradient,
                            color: item.iconColor
                          }}
                        >
                          {item.icon}
                        </div>
                        <div className="mobile-nav-item-content">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span className="mobile-nav-item-title">{item.label}</span>
                            {item.badge && (
                              <span className="nav-item-badge">{item.badge}</span>
                            )}
                          </div>
                          <span className="mobile-nav-item-desc">{item.desc}</span>
                        </div>
                        <ArrowUpRight size={15} className="text-muted" />
                      </a>
                    ))}
                  </div>
                ))}
                <div className="mobile-nav-group">
                  <div className="mobile-nav-group-title">DIRECT CONNECT</div>
                  <a
                    href="#contact"
                    className="mobile-nav-item"
                    onClick={() => {
                      sound.click();
                      setMenuOpen(false);
                    }}
                  >
                    <div className="mobile-nav-item-icon">
                      <Sparkles size={16} />
                    </div>
                    <div className="mobile-nav-item-content">
                      <span className="mobile-nav-item-title">Contact & Inquiries</span>
                      <span className="mobile-nav-item-desc">Reach out for engineering roles</span>
                    </div>
                    <ArrowUpRight size={15} className="text-muted" />
                  </a>
                </div>
              </nav>
              <div className="mobile-nav-footer">
                <a
                  href="mailto:s.b.m.rafi01@gmail.com"
                  className="mobile-contact-btn"
                  onClick={() => sound.click()}
                >
                  s.b.m.rafi01@gmail.com
                </a>
                <a
                  href={RESUME_PATH}
                  download
                  className="mobile-resume-btn"
                  onClick={() => sound.click()}
                >
                  <Download size={16} /> Download Resume PDF
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="content">
        <section className="edition-hero" id="top">
          <HeroScene />

          <div className="hero-monumental-stage">
            <motion.h1
              className="hero-monumental-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              Chasing Dreams
              <br />
              Across <span className="hero-gradient-text">Horizons.</span>
            </motion.h1>

            <motion.p
              className="hero-monumental-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4 }}
            >
              <strong>Shaik Balaji Mahammad Rafi</strong> - Engineering production-grade multi-agent
              systems, verifiable GraphRAG memory architectures, and lifelong digital immortality substrates.
            </motion.p>

            <motion.div
              className="hero-action-cluster"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55 }}
            >
              <a
                href="#mission"
                className="hero-primary-btn"
                onClick={() => sound.click()}
                onMouseEnter={() => sound.hover()}
              >
                The Lifelong Mission <Infinity size={15} />
              </a>

              <a
                href="#systems"
                className="hero-secondary-btn"
                onClick={() => sound.click()}
                onMouseEnter={() => sound.hover()}
              >
                Explore Systems <ArrowUpRight size={15} />
              </a>

              <a
                href={RESUME_PATH}
                download
                className="hero-secondary-btn"
                onClick={() => sound.click()}
                onMouseEnter={() => sound.hover()}
              >
                <Download size={15} /> Resume PDF
              </a>
            </motion.div>
          </div>

          <div className="hero-bottom-bar">
            <div className="hero-statement">
              <p>
                <strong>Featured System Architectures</strong> - Autonomous agent orchestration,
                speech intelligence, and verifiable graph memory.
              </p>
            </div>

            <div className="hero-system-index">
              <a
                href="#about"
                onClick={() => sound.click()}
                onMouseEnter={() => sound.hover()}
              >
                <b>00</b> Profile &amp; Background
              </a>
              <a
                href="#mission"
                onClick={() => sound.click()}
                onMouseEnter={() => sound.hover()}
              >
                <b>01</b> Lifelong Mission
              </a>
              <a
                href="#system-01"
                onClick={() => sound.click()}
                onMouseEnter={() => sound.hover()}
              >
                <b>02</b> Project Chimera (Agentic AI)
              </a>
              <a
                href="#system-02"
                onClick={() => sound.click()}
                onMouseEnter={() => sound.hover()}
              >
                <b>03</b> Know Your Parents (GraphRAG)
              </a>
              <a
                href="#system-03"
                onClick={() => sound.click()}
                onMouseEnter={() => sound.hover()}
              >
                <b>04</b> AI Poll Platform (Real-Time)
              </a>
              <a
                href="#hackathons"
                onClick={() => sound.click()}
                onMouseEnter={() => sound.hover()}
              >
                <b>05</b> Global Hackathons
              </a>
            </div>
          </div>
        </section>

        <section className="edition-about-section" id="about">
          <Reveal>
            <div className="section-overline">PROFILE &amp; BACKGROUND</div>
            <h2 className="section-heading">
              Architecting Intelligence.
              <br />
              Driven by Kaizen.
            </h2>

            <div className="about-split-layout">
              <div className="about-profile-card">
                <div className="profile-img-frame">
                  <img
                    src={PROFILE_PATH}
                    alt="Shaik Balaji Mahammad Rafi"
                    className="profile-img"
                  />
                </div>

                <div className="profile-name-block">
                  <h3>Shaik Balaji Mahammad Rafi</h3>
                  <p>AI Engineer &amp; Full-Stack Systems Developer</p>
                </div>
              </div>

              <div className="about-bio-column">
                <div className="about-bio-text">
                  <p>
                    I'm <strong>Shaik Balaji Mahammad Rafi</strong>, an AI Engineer and Full-Stack Developer
                    with an intense focus on building production-grade agentic workflows, high-throughput
                    data pipelines, and reliable autonomous software systems.
                  </p>
                  <p>
                    My work combines rapid prototyping with rigorous engineering standards - from competing as a{' '}
                    <strong className="text-highlight">Grand Finalist at the Google Cloud Agentic AI Day</strong> (57,000+
                    participants) to building speech-to-poll real-time platforms at <strong className="text-highlight">IIT Ropar</strong> and
                    wellness recommendation systems at <strong className="text-highlight">Kerala Ayurveda Ltd.</strong>
                  </p>
                  <p>
                    I also practice the Japanese philosophy of <em>Kaizen</em> (continuous incremental improvement), holding an{' '}
                    <strong>Elite Silver Medal (Top 5 in India)</strong> in Business Japanese from NPTEL &amp; IIT Madras.
                  </p>
                </div>

                <div className="about-metrics-grid">
                  <div className="metric-cell">
                    <b>8.92</b>
                    <span>CGPA · VVIT Computer Science</span>
                  </div>
                  <div className="metric-cell">
                    <b>57K+</b>
                    <span>Competitors · Google Finalist</span>
                  </div>
                  <div className="metric-cell">
                    <b>15+</b>
                    <span>Verified Certifications</span>
                  </div>
                  <div className="metric-cell">
                    <b>Top 5</b>
                    <span>in India · NPTEL Japanese</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="edition-mission-section" id="mission">
          <Reveal>
            <h2 className="mission-main-heading">
              Preserving Human Legacy:
              <br />
              <span className="hero-gradient-text">Digital Immortality.</span>
            </h2>
            <p className="mission-lead-manifesto">
              Engineering the decentralized computational substrate to capture, verify, and animate human consciousness into permanent, interactive Mindfiles.
            </p>

            <div className="mission-pillars-grid">
              <div className="mission-card">
                <div className="mission-card-icon">
                  <Database size={22} className="text-cyan" />
                </div>
                <h3 className="mission-card-title">Pillar 01: Multimodal Mindfiles</h3>
                <p className="mission-card-desc">
                  Zero-loss capture of lifelong memories, oral histories, and belief systems structured into encrypted, queryable personal knowledge graphs.
                </p>
                <div className="mission-card-meta">
                  <span className="meta-tag">GROUNDED IN</span>
                  <span className="meta-val">Know Your Parents GraphRAG</span>
                </div>
              </div>

              <div className="mission-card">
                <div className="mission-card-icon">
                  <Brain size={22} className="text-purple" />
                </div>
                <h3 className="mission-card-title">Pillar 02: Persona Synthesis</h3>
                <p className="mission-card-desc">
                  Multi-agent cognitive loops preserving an individual&apos;s unique Socratic reasoning heuristics, nuance, and conversational presence.
                </p>
                <div className="mission-card-meta">
                  <span className="meta-tag">GROUNDED IN</span>
                  <span className="meta-val">Project Chimera Swarms</span>
                </div>
              </div>

              <div className="mission-card">
                <div className="mission-card-icon">
                  <Infinity size={22} className="text-emerald" />
                </div>
                <h3 className="mission-card-title">Pillar 03: Longevity Substrate</h3>
                <p className="mission-card-desc">
                  Self-healing, immutable storage runtimes engineered to survive decadal infrastructure shifts with zero downtime.
                </p>
                <div className="mission-card-meta">
                  <span className="meta-tag">GROUNDED IN</span>
                  <span className="meta-val">Project Phoenix Self-Repair</span>
                </div>
              </div>
            </div>

            <div className="mission-quote-box">
              <p className="mission-quote-text">
                &ldquo;Death is an engineering problem. When identity is structured into mathematical representations, human existence transitions from biological vulnerability to permanent digital continuity.&rdquo;
              </p>
              <div className="mission-lineage-tags">
                <span className="lineage-label">INTELLECTUAL LINEAGE:</span>
                <span>Martine Rothblatt (Terasem)</span>
                <span>•</span>
                <span>Gordon Bell (MyLifeBits)</span>
                <span>•</span>
                <span>Ray Kurzweil</span>
                <span>•</span>
                <span>Berggruen Institute</span>
              </div>
            </div>
          </Reveal>
        </section>

        <FeaturedSystemsStack />

        <section className="edition-tools-section" id="tools">
          <Reveal>
            <div className="section-overline">FEATURED PROJECTS &amp; OPEN SOURCE</div>
            <h2 className="section-heading">
              Production applications.
              <br />
              Engineered for impact.
            </h2>
            <p className="section-sub">
              Gamified learning engines, in-browser AST static analyzers, encrypted note-taking PWAs, and decentralized tools.
            </p>

            <div className="tools-grid">
              {additionalProjects.map((p) => (
                <HolographicCard key={p.name} className="tool-card">
                  <article className="tool-card-inner">
                    <div className="tool-top-row">
                      <span className="tool-highlight-badge">{p.highlight}</span>
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tool-external-link"
                          aria-label={`Open ${p.name}`}
                          onClick={() => sound.click()}
                          onMouseEnter={() => sound.hover()}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <h3 className="tool-name">{p.name}</h3>
                    <p className="tool-tagline">{p.tagline}</p>
                    <div className="tool-tech-list">
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tool-github-link"
                        onClick={() => sound.click()}
                        onMouseEnter={() => sound.hover()}
                      >
                        <Github size={14} /> Code <ArrowUpRight size={13} />
                      </a>
                    )}
                  </article>
                </HolographicCard>
              ))}
            </div>
          </Reveal>
        </section>

        <FeaturedJourneyStack />

        <section className="edition-hackathons-section" id="hackathons">
          <Reveal>
            <div className="section-overline">WORLD-SCALE VALIDATION</div>
            <h2 className="section-heading">
              Built under pressure.
              <br />
              Recognized on the global stage.
            </h2>
            <p className="section-sub">
              From breaking Guinness World Records with Google Cloud to engineering bio-intelligence for NASA.
            </p>

            <div className="hackathons-container">
              {hackathons.map((h, idx) => (
                <div key={h.id} className={`hackathon-spotlight-card spotlight-${h.id}`}>
                  <article className="hack-spotlight-inner">
                    <div className="hack-top-bar">
                      <div className="hack-award-pill">
                        <Trophy size={14} className="trophy-icon" />
                        <span>{h.badge}</span>
                      </div>
                      <span className="hack-period-tag">{h.period} • {h.location}</span>
                    </div>

                    <div className={`hack-body-layout ${idx % 2 === 1 ? 'hack-body-reversed' : ''}`}>
                      <div className="hack-content-left">
                        <h3 className="hack-spotlight-title">{h.title}</h3>
                        <div className="hack-role-subtitle">
                          <b>{h.role}</b> - <span className="text-cyan">{h.highlight}</span>
                        </div>
                        <p className="hack-spotlight-desc">{h.description}</p>

                        {h.stats && (
                          <div className="hack-stats-row">
                            {h.stats.map((st) => (
                              <div key={st.label} className="hack-stat-pill">
                                <span className="stat-num">{st.val}</span>
                                <span className="stat-txt">{st.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="hack-gallery-right">
                        <HackathonGallery images={h.images} title={h.title} />
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="edition-capabilities-section" id="capabilities">
          <Reveal>
            <div className="section-overline">CAPABILITIES RADAR</div>
            <h2 className="section-heading">
              Comprehensive toolkit for
              <br />
              intelligent architectures.
            </h2>

            <div className="capabilities-columns">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="capability-col">
                  <div className="cap-col-header">
                    <Cpu size={16} />
                    <h3>{category}</h3>
                  </div>
                  <div className="cap-items-list">
                    {items.map((item) => (
                      <div key={item} className="cap-item">
                        <span className="cap-dot" />
                        <span className="cap-name">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="edition-certs-section" id="certifications">
          <Reveal>
            <div className="section-overline">VERIFIED CREDENTIALS</div>
            <h2 className="section-heading">
              Continuous mastery &amp;
              <br />
              accredited standards.
            </h2>
            <p className="section-sub">
              15 verified professional credentials and competitive academic awards across cloud architecture, AI, and languages.
            </p>

            <div className="certs-grid">
              {certifications.map((c) => (
                <HolographicCard key={c.name} className="cert-card-wrap">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card"
                    onClick={() => sound.click()}
                    onMouseEnter={() => sound.hover()}
                  >
                    <div className="cert-top">
                      <span className="cert-issuer">{c.issuer}</span>
                      <span className="cert-year">{c.year}</span>
                    </div>
                    <h3 className="cert-name">{c.name}</h3>
                    <div className="cert-foot">
                      <span
                        className={`cert-level-badge ${
                          c.level.includes('Silver')
                            ? 'level-silver'
                            : c.level.includes('Professional')
                            ? 'level-pro'
                            : 'level-elite'
                        }`}
                      >
                        <Award size={12} /> {c.level}
                      </span>
                      <span className="cert-verify-link">
                        Verify <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </a>
                </HolographicCard>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="edition-contact-section" id="contact">
          <Reveal>
            <div className="section-overline">INITIATE COLLABORATION</div>
            <div className="contact-split-stage">
              <div className="contact-left-col">
                <p className="contact-subhead">Ready to engineer high-impact intelligence?</p>
                <h2 className="contact-main-heading">
                  Let’s build
                  <br />
                  together.
                </h2>

                <a
                  className="contact-email-link"
                  href="mailto:s.b.m.rafi01@gmail.com"
                  onClick={() => sound.click()}
                  onMouseEnter={() => sound.hover()}
                >
                  <span>s.b.m.rafi01@gmail.com</span>
                  <ArrowUpRight className="contact-arrow" />
                </a>

                <div className="contact-links-row">
                  <a
                    href="https://www.linkedin.com/in/rafi-s-b-m/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    onClick={() => sound.click()}
                    onMouseEnter={() => sound.hover()}
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/Rafi-Luffy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    onClick={() => sound.click()}
                    onMouseEnter={() => sound.hover()}
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                    href={RESUME_PATH}
                    download
                    className="social-pill"
                    onClick={() => sound.click()}
                    onMouseEnter={() => sound.hover()}
                  >
                    <Download size={15} /> Resume PDF
                  </a>
                </div>
              </div>

              <div className="contact-right-col">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </section>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 15 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="back-to-top-floating"
              onClick={() => {
                sound.click();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </main>

      <footer className="edition-colophon">
        <div className="colophon-left">
          <span>© 2026 SHAIK BALAJI MAHAMMAD RAFI</span>
          <span>// ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </>
  );
}
