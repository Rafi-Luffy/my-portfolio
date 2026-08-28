'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { kalProjects } from '../data';
import { sound } from './AudioEngine';

interface KalWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KalWorksModal({ isOpen, onClose }: KalWorksModalProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('yoga-app');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: kalProjects.length },
    { id: 'clinical', label: 'Clinical AI & Biomechanics', count: 2 },
    { id: 'rag', label: 'Enterprise LLM & RAG', count: 1 },
    { id: 'ecommerce', label: 'Shopify & E-Commerce', count: 2 },
    { id: 'edge', label: 'Edge & Content Systems', count: 2 }
  ];

  const getFilteredProjects = (cat: string) => {
    return kalProjects.filter((p) => {
      if (cat === 'all') return true;
      if (cat === 'clinical') return p.id === 'yoga-app' || p.id === 'dosha-finder';
      if (cat === 'rag') return p.id === 'ayurveda-api';
      if (cat === 'ecommerce') return p.id === 'shopify-pdp' || p.id === 'neeli-editorial';
      if (cat === 'edge') return p.id === 'tts-blogs' || p.id === 'blog-revamp';
      return true;
    });
  };

  const filteredProjects = getFilteredProjects(activeCategory);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const matching = getFilteredProjects(catId);
    if (matching.length > 0) {
      setSelectedProjectId(matching[0].id);
    }
  };

  const activeProject =
    kalProjects.find((p) => p.id === selectedProjectId) || filteredProjects[0] || kalProjects[0];

  const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (currentIndex < filteredProjects.length - 1) {
          setSelectedProjectId(filteredProjects[currentIndex + 1].id);
          sound.click();
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setSelectedProjectId(filteredProjects[currentIndex - 1].id);
          sound.click();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, filteredProjects, selectedImage, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="kal-modal-overlay" onClick={onClose}>
          <motion.div
            className="kal-human-dialog"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="kal-human-header">
              <div className="kal-header-title-block">
                <span className="kal-header-kicker">Production Work &amp; Engineering Case Studies</span>
                <h2 className="kal-header-heading">Kerala Ayurveda Ltd.</h2>
              </div>

              <div className="kal-human-tabs">
                {categories.map((c) => {
                  const isActive = activeCategory === c.id;
                  return (
                    <button
                      key={c.id}
                      className={`kal-human-tab ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        sound.click();
                        handleCategoryChange(c.id);
                      }}
                      onMouseEnter={() => sound.hover()}
                    >
                      <span>{c.label}</span>
                      <span className="kal-human-tab-num">{c.count}</span>
                    </button>
                  );
                })}
              </div>

              <button
                className="kal-human-close"
                onClick={() => {
                  sound.click();
                  onClose();
                }}
                aria-label="Close Case Studies Dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div className="kal-human-body">
              <aside className="kal-human-sidebar">
                <div className="kal-sidebar-title">
                  Projects ({filteredProjects.length})
                </div>
                <nav className="kal-sidebar-list">
                  {filteredProjects.map((p) => {
                    const isSelected = p.id === activeProject.id;
                    return (
                      <button
                        key={p.id}
                        className={`kal-sidebar-item ${isSelected ? 'active' : ''}`}
                        onClick={() => {
                          sound.click();
                          setSelectedProjectId(p.id);
                        }}
                        onMouseEnter={() => sound.hover()}
                      >
                        <div className="kal-sidebar-item-header">
                          <span className="kal-sidebar-num">{p.num}</span>
                          <span className="kal-sidebar-cat">{p.category}</span>
                        </div>
                        <div className="kal-sidebar-item-title">{p.title}</div>
                        <ChevronRight size={14} className="kal-sidebar-arrow" />
                      </button>
                    );
                  })}
                </nav>
              </aside>

              <main className="kal-human-canvas">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="kal-article"
                  >
                    <header className="kal-article-header">
                      <div className="kal-article-meta">
                        <span className="kal-meta-index">Project {activeProject.num}</span>
                        <span className="kal-meta-dot">•</span>
                        <span className="kal-meta-category">{activeProject.category}</span>
                      </div>

                      <h3 className="kal-article-title">{activeProject.title}</h3>
                      <p className="kal-article-tagline">{activeProject.tagline}</p>

                      <div className="kal-article-actions">
                        {activeProject.link && (
                          <a
                            href={activeProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="kal-btn-primary"
                            onClick={() => sound.click()}
                          >
                            <span>{activeProject.linkText || 'Open Live Project'}</span>
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                        {activeProject.github && (
                          <a
                            href={activeProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="kal-btn-secondary"
                            onClick={() => sound.click()}
                          >
                            <Github size={14} />
                            <span>View Source</span>
                          </a>
                        )}
                      </div>
                    </header>

                    <div className="kal-metrics-row">
                      {activeProject.metrics.map((m, idx) => (
                        <div key={idx} className="kal-metric-pill">
                          <span className="kal-metric-pill-dot" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    <section className="kal-article-section">
                      <h4 className="kal-section-heading">Overview &amp; Context</h4>
                      <p className="kal-section-copy">{activeProject.summary}</p>
                    </section>

                    <section className="kal-article-section">
                      <h4 className="kal-section-heading">Technical Architecture &amp; Implementation</h4>
                      <div className="kal-arch-stack">
                        {activeProject.architecture.map((arch, i) => (
                          <div key={i} className="kal-arch-item">
                            <div className="kal-arch-item-header">
                              <span className="kal-arch-index">0{i + 1}</span>
                              <span className="kal-arch-title">{arch.title}</span>
                            </div>
                            <p className="kal-arch-desc">{arch.desc}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {activeProject.images && activeProject.images.length > 0 && (
                      <section className="kal-article-section">
                        <h4 className="kal-section-heading">Architecture &amp; Payload Artifacts</h4>
                        <div className="kal-images-grid">
                          {activeProject.images.map((img, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className="kal-image-card"
                              onClick={() => {
                                sound.click();
                                setSelectedImage(img);
                              }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={img}
                                alt={`System Architecture Payload ${idx + 1}`}
                                className="kal-image-asset"
                              />
                              <span className="kal-image-tag">Artifact 0{idx + 1}</span>
                            </button>
                          ))}
                        </div>
                      </section>
                    )}

                    <section className="kal-article-section">
                      <h4 className="kal-section-heading">Technologies &amp; Libraries</h4>
                      <div className="kal-tech-row">
                        {activeProject.tech.map((t) => (
                          <span key={t} className="kal-tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </section>

                    <footer className="kal-article-footer">
                      <button
                        className="kal-nav-btn"
                        disabled={currentIndex === 0}
                        onClick={() => {
                          if (currentIndex > 0) {
                            sound.click();
                            setSelectedProjectId(filteredProjects[currentIndex - 1].id);
                          }
                        }}
                      >
                        <ChevronLeft size={15} />
                        <span>Previous</span>
                      </button>

                      <span className="kal-nav-counter">
                        {currentIndex + 1} of {filteredProjects.length}
                      </span>

                      <button
                        className="kal-nav-btn"
                        disabled={currentIndex === filteredProjects.length - 1}
                        onClick={() => {
                          if (currentIndex < filteredProjects.length - 1) {
                            sound.click();
                            setSelectedProjectId(filteredProjects[currentIndex + 1].id);
                          }
                        }}
                      >
                        <span>Next</span>
                        <ChevronRight size={15} />
                      </button>
                    </footer>
                  </motion.article>
                </AnimatePresence>
              </main>
            </div>
          </motion.div>

          {selectedImage && (
            <div
              className="kal-lightbox-backdrop"
              onClick={() => setSelectedImage(null)}
            >
              <div className="kal-lightbox-dialog" onClick={(e) => e.stopPropagation()}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImage}
                  alt="Architecture Diagram Full View"
                  className="kal-lightbox-img"
                />
                <button
                  className="kal-lightbox-close"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
