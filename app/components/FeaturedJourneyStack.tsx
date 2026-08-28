'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Briefcase,
  Globe,
  Users,
  GraduationCap,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import {
  journeyTracks,
  workExperience,
  freelanceExperience,
  leadershipExperience,
  mentorLearnings,
  JourneyTrackId,
  FreelanceWorkStream
} from '../data';
import { sound } from './AudioEngine';
import KalWorksModal from './KalWorksModal';

interface ScrollableWorkstreamsProps {
  workStreams: FreelanceWorkStream[];
  scrollYProgress: any;
  isEvenRole: boolean;
}

function ScrollableWorkstreams({
  workStreams,
  scrollYProgress,
  isEvenRole
}: ScrollableWorkstreamsProps) {
  const internalY = useTransform(
    scrollYProgress,
    isEvenRole
      ? [0.5, 0.65, 0.88, 1.0]
      : [0.0, 0.15, 0.38, 0.5],
    ['0px', '0px', workStreams.length > 2 ? '-165px' : '0px', workStreams.length > 2 ? '-165px' : '0px']
  );

  return (
    <div className="launch-workstreams-viewport">
      <motion.div
        className="launch-workstreams-inner-track"
        style={{ y: workStreams.length > 2 ? internalY : '0px' }}
      >
        {workStreams.map((ws) => (
          <div key={ws.title} className="launch-workstream-item">
            <div className="launch-workstream-header">
              <h4 className="launch-workstream-title">{ws.title}</h4>
              {ws.metrics && (
                <span className="launch-stream-badge">{ws.metrics}</span>
              )}
            </div>
            <p className="launch-workstream-desc">{ws.description}</p>
            {ws.link && (
              <a
                href={ws.link}
                target="_blank"
                rel="noopener noreferrer"
                className="launch-client-btn"
                onClick={() => sound.click()}
              >
                {ws.linkText || 'Live Platform'} <ArrowUpRight size={13} />
              </a>
            )}
            {ws.skills && (
              <div className="launch-stream-tags">
                {ws.skills.map((tag) => (
                  <span key={tag} className="launch-stream-pill">{tag}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function renderRoleHeading(title: string, index: number) {
  const match = title.match(/^(.*?)\s*(\(.*?\))$/);
  if (match) {
    return (
      <h3 className="launch-role-title">
        <span className="launch-index-prefix">{index + 1}.</span> {match[1]}
        <span className="launch-role-bracket-sub">{match[2]}</span>
      </h3>
    );
  }
  return (
    <h3 className="launch-role-title">
      <span className="launch-index-prefix">{index + 1}.</span> {title}
    </h3>
  );
}

export default function FeaturedJourneyStack() {
  const [activeTrack, setActiveTrack] = useState<JourneyTrackId>('experience');
  const [showWorksModal, setShowWorksModal] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const getActiveList = () => {
    switch (activeTrack) {
      case 'experience':
        return { list: workExperience, type: 'experience' as const };
      case 'freelance':
        return { list: freelanceExperience, type: 'freelance' as const };
      case 'leadership':
        return { list: leadershipExperience, type: 'leadership' as const };
      case 'mentors':
        return { list: mentorLearnings, type: 'mentors' as const };
    }
  };

  const { list: activeList, type: listType } = getActiveList();
  const itemCount = activeList.length;

  const activeIndexRaw = useTransform(scrollYProgress, (v) => {
    if (itemCount <= 1) return 0;
    const idx = Math.min(Math.floor(v * itemCount), itemCount - 1);
    return Math.max(0, idx);
  });

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    return activeIndexRaw.on('change', (latest) => {
      if (latest !== currentIdx) {
        setCurrentIdx(latest);
      }
    });
  }, [activeIndexRaw, currentIdx]);

  const containerHeight = `${Math.max(itemCount * 150, 260)}vh`;

  return (
    <section
      className="launch-journey-stack-section"
      ref={containerRef}
      id="journey"
      style={{ height: containerHeight }}
    >
      <div className="launch-journey-sticky-stage">
        <div className="journey-header-block">
          <h2 className="journey-main-title">Leading with ownership.</h2>
          <p className="journey-lead-subtitle">
            A multi-track trajectory spanning production AI engineering, scaled data freelancing,
            campus-wide leadership, and theoretical mastery under pioneer computer scientists.
          </p>

          <div className="journey-tracks-nav-bar">
            {journeyTracks.map((track) => {
              const isSelected = activeTrack === track.id;
              const IconComponent =
                track.id === 'experience'
                  ? Briefcase
                  : track.id === 'freelance'
                  ? Globe
                  : track.id === 'leadership'
                  ? Users
                  : GraduationCap;

              return (
                <button
                  key={track.id}
                  className={`journey-track-pill-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => {
                    sound.click();
                    setActiveTrack(track.id);
                    setCurrentIdx(0);
                  }}
                  onMouseEnter={() => sound.hover()}
                >
                  <IconComponent size={14} />
                  <span className="track-label">{track.label}</span>
                  <span className="track-count">{track.count}</span>
                </button>
              );
            })}
          </div>

          {(() => {
            const currentTrack = journeyTracks.find((t) => t.id === activeTrack);
            return (
              <div className="journey-track-info-strip">
                <span className="track-focus-text">
                  TRACK FOCUS // <b>{currentTrack?.tagline}</b>
                </span>
                <span className="track-active-counter">
                  ROLE {currentIdx + 1} OF {itemCount}
                </span>
              </div>
            );
          })()}
        </div>

        <div className="launch-journey-viewport-stage">
          <AnimatePresence mode="wait">
            {listType === 'experience' && (
              <motion.div
                key={`work-${currentIdx}`}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 24 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`launch-lemonade-row ${currentIdx % 2 === 1 ? 'launch-row-even' : 'launch-row-odd'}`}
              >
                {(() => {
                  const exp = workExperience[currentIdx];
                  if (!exp) return null;
                  return (
                    <>
                      <div className="launch-meta-col">
                        <div className="launch-track-tag">
                          {exp.badge || `EXPERIENCE // 0${currentIdx + 1}`}
                        </div>
                        {renderRoleHeading(exp.title, currentIdx)}
                        <div className="launch-company-meta">
                          <b>{exp.company}</b>
                          <span className="launch-meta-sep">•</span>
                          <span>{exp.location}</span>
                        </div>
                        <div className="launch-period-pill">{exp.period}</div>
                        {exp.metric && (
                          <div className="launch-highlight-metric">{exp.metric}</div>
                        )}
                        {exp.skills && (
                          <div className="launch-skills-cluster">
                            {exp.skills.map((s) => (
                              <span key={s} className="launch-skill-chip">{s}</span>
                            ))}
                          </div>
                        )}

                        {exp.company.includes('Kerala Ayurveda') && (
                          <div className="launch-works-btn-wrapper">
                            <button
                              type="button"
                              className="launch-works-trigger-btn"
                              onClick={() => {
                                sound.click();
                                setShowWorksModal(true);
                              }}
                              onMouseEnter={() => sound.hover()}
                            >
                              <Sparkles size={14} className="text-cyan animate-pulse" />
                              <span>Works (7 Flagships &amp; Production Systems)</span>
                              <ArrowUpRight size={14} />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="launch-details-card">
                        <p className="launch-card-summary">{exp.summary}</p>
                        <ul className="launch-bullet-list">
                          {exp.achievements.map((ach) => (
                            <li key={ach}>
                              <span className="launch-bullet-dash">-</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}

            {listType === 'freelance' && (
              <motion.div
                key={`freelance-${currentIdx}`}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 24 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`launch-lemonade-row ${currentIdx % 2 === 1 ? 'launch-row-even' : 'launch-row-odd'}`}
              >
                {(() => {
                  const client = freelanceExperience[currentIdx];
                  if (!client) return null;
                  return (
                    <>
                      <div className="launch-meta-col">
                        <div className="launch-track-tag">{client.badge}</div>
                        <h3 className="launch-role-title">
                          <span className="launch-index-prefix">{currentIdx + 1}.</span> {client.clientName}
                        </h3>
                        <div className="launch-company-meta">
                          <b>{client.role}</b>
                        </div>
                        <div className="launch-period-pill">{client.period}</div>
                        {client.skills && (
                          <div className="launch-skills-cluster">
                            {client.skills.map((s) => (
                              <span key={s} className="launch-skill-chip">{s}</span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="launch-details-card">
                        <p className="launch-card-summary">{client.summary}</p>
                        <ScrollableWorkstreams
                          workStreams={client.workStreams}
                          scrollYProgress={scrollYProgress}
                          isEvenRole={currentIdx % 2 === 1}
                        />
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}

            {listType === 'leadership' && (
              <motion.div
                key={`leadership-${currentIdx}`}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 24 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`launch-lemonade-row ${currentIdx % 2 === 1 ? 'launch-row-even' : 'launch-row-odd'}`}
              >
                {(() => {
                  const exp = leadershipExperience[currentIdx];
                  if (!exp) return null;
                  return (
                    <>
                      <div className="launch-meta-col">
                        <div className="launch-track-tag">
                          {exp.badge || `LEADERSHIP // 0${currentIdx + 1}`}
                        </div>
                        {renderRoleHeading(exp.title, currentIdx)}
                        <div className="launch-company-meta">
                          <b>{exp.company}</b>
                          <span className="launch-meta-sep">•</span>
                          <span>{exp.location}</span>
                        </div>
                        <div className="launch-period-pill">{exp.period}</div>
                        {exp.metric && (
                          <div className="launch-highlight-metric">{exp.metric}</div>
                        )}
                        {exp.skills && (
                          <div className="launch-skills-cluster">
                            {exp.skills.map((s) => (
                              <span key={s} className="launch-skill-chip">{s}</span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="launch-details-card">
                        <p className="launch-card-summary">{exp.summary}</p>
                        <ul className="launch-bullet-list">
                          {exp.achievements.map((ach) => (
                            <li key={ach}>
                              <span className="launch-bullet-dash">-</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}

            {listType === 'mentors' && (
              <motion.div
                key={`mentors-${currentIdx}`}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 24 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(10px)', y: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`launch-lemonade-row ${currentIdx % 2 === 1 ? 'launch-row-even' : 'launch-row-odd'}`}
              >
                {(() => {
                  const m = mentorLearnings[currentIdx];
                  if (!m) return null;
                  return (
                    <>
                      <div className="launch-meta-col">
                        <div className="launch-track-tag">{m.badge || 'ACADEMIC & RESEARCH TRAINING'}</div>
                        <h3 className="launch-role-title">
                          <span className="launch-index-prefix">{currentIdx + 1}.</span> {m.mentorName}
                        </h3>
                        <div className="launch-company-meta">
                          <b>{m.mentorRole}</b>
                          <span className="launch-meta-sep">•</span>
                          <span>{m.institution}</span>
                        </div>
                        <div className="launch-period-pill">{m.period}</div>
                        {m.hours && (
                          <div className="launch-highlight-metric">{m.hours}</div>
                        )}
                        {m.tags && (
                          <div className="launch-skills-cluster">
                            {m.tags.map((tag) => (
                              <span key={tag} className="launch-skill-chip">{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="launch-details-card">
                        <p className="launch-card-summary">{m.summary}</p>
                        <ul className="launch-bullet-list">
                          {m.coreLearnings.map((t) => (
                            <li key={t}>
                              <span className="launch-bullet-dash">-</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <KalWorksModal
        isOpen={showWorksModal}
        onClose={() => setShowWorksModal(false)}
      />
    </section>
  );
}
