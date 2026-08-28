'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  CheckCircle2
} from 'lucide-react';
import SystemPlayground from './SystemPlayground';
import { featured, FeaturedSystem } from '../data';
import { sound } from './AudioEngine';

interface SystemCardProps {
  system: FeaturedSystem;
  index: number;
  total: number;
  style: any;
}

function SystemStackCard({ system, index, total, style }: SystemCardProps) {
  return (
    <motion.div
      className={`launch-system-card launch-card-${system.visual}`}
      style={style}
    >
      <div className="launch-card-grid">
        <div className="launch-card-left">
          <div className="launch-card-top-meta">
            <span className="launch-card-big-num">{system.index}</span>
            <div className="launch-card-tag-wrapper">
              <span className="launch-card-eyebrow">{system.eyebrow}</span>
              <span className="launch-card-status-badge">
                <span className="status-pulse-dot" />
                {system.status}
              </span>
            </div>
          </div>

          <h3 className="launch-card-title">{system.title}</h3>
          <p className="launch-card-summary">{system.summary}</p>

          <div className="launch-card-metrics-table">
            {system.stats.map((st, i) => (
              <div key={i} className="launch-metric-cell">
                <span className="launch-metric-val">{st.val}</span>
                <span className="launch-metric-lbl">{st.label}</span>
              </div>
            ))}
          </div>

          <div className="launch-card-specs-list">
            {system.details.map((detail, idx) => (
              <div key={idx} className="launch-spec-row">
                <CheckCircle2 size={15} className="launch-spec-check" />
                <span className="launch-spec-text">{detail}</span>
              </div>
            ))}
          </div>

          <div className="launch-card-footer">
            <div className="launch-card-actions">
              {system.github && (
                <a
                  href={system.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="launch-card-btn launch-primary-btn"
                  onClick={() => sound.click()}
                  onMouseEnter={() => sound.hover()}
                >
                  <Github size={15} />
                  <span>Inspect Source Code</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>

            <div className="launch-card-tech-pills">
              {system.tech.map((t) => (
                <span key={t} className="launch-tech-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="launch-card-right">
          <div className="launch-playground-frame">
            <div className="launch-playground-header">
              <div className="launch-frame-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="launch-frame-title">{system.title}</span>
            </div>
            <div className="launch-playground-body">
              <SystemPlayground visual={system.visual} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedSystemsStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      if (v < 0.25) setActiveStep(0);
      else if (v < 0.55) setActiveStep(1);
      else if (v < 0.85) setActiveStep(2);
      else setActiveStep(3);
    });
  }, [scrollYProgress]);

  const card0X = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.45, 0.65, 0.75, 0.95, 1.0],
    ['0px', '0px', '-22px', '-22px', '-44px', '-44px', '-66px', '-66px']
  );

  const card1X = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.45, 0.65, 0.75, 0.95, 1.0],
    ['100vw', '100vw', '0px', '0px', '-22px', '-22px', '-44px', '-44px']
  );

  const card2X = useTransform(
    scrollYProgress,
    [0, 0.45, 0.65, 0.75, 0.95, 1.0],
    ['100vw', '100vw', '0px', '0px', '-22px', '-22px']
  );

  const card3X = useTransform(
    scrollYProgress,
    [0, 0.75, 0.95, 1.0],
    ['100vw', '100vw', '0px', '0px']
  );

  const cardStyles = [
    { x: card0X, zIndex: 10 },
    { x: card1X, zIndex: 20 },
    { x: card2X, zIndex: 30 },
    { x: card3X, zIndex: 40 }
  ];

  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    sound.click();
    const containerTop = containerRef.current.offsetTop;
    const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetFractions = [0.05, 0.38, 0.68, 0.96];
    const targetScroll = containerTop + scrollHeight * targetFractions[index];
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section className="launch-systems-stack-section" ref={containerRef} id="systems">
      <div className="launch-systems-sticky-stage">
        <div className="launch-systems-header">
          <div className="launch-header-text">
            <h2 className="launch-header-title">
              Production Architectures &amp; Agentic Runtimes
            </h2>
          </div>

          <div className="launch-systems-nav-pills">
            {featured.map((sys, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={sys.index}
                  className={`launch-nav-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => scrollToStep(idx)}
                  onMouseEnter={() => sound.hover()}
                >
                  <span className="pill-num">{sys.index}</span>
                  <span className="pill-name">{sys.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="launch-cards-deck-container">
          {featured.map((sys, idx) => (
            <SystemStackCard
              key={sys.index}
              system={sys}
              index={idx}
              total={featured.length}
              style={cardStyles[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
