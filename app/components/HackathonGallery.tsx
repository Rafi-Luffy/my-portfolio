'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, Camera } from 'lucide-react';
import { sound } from './AudioEngine';

interface HackathonGalleryProps {
  images: string[];
  title: string;
}

export default function HackathonGallery({ images, title }: HackathonGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || isHovered || isLightboxOpen) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images, isHovered, isLightboxOpen]);

  if (!images || images.length === 0) return null;

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.click();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sound.click();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (idx: number) => {
    sound.click();
    setActiveIndex(idx);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div
        className="hackathon-gallery-widget"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="gallery-viewport" onClick={() => openLightbox(activeIndex)}>
          <div className="gallery-overlay-badge">
            <Camera size={11} />
            <span>
              {activeIndex + 1} / {images.length}
            </span>
          </div>

          <button
            className="gallery-expand-btn"
            onClick={(e) => {
              e.stopPropagation();
              openLightbox(activeIndex);
            }}
            title="Expand Fullscreen Photo"
            aria-label="Expand Fullscreen Photo"
          >
            <Maximize2 size={13} />
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt={`${title} highlight ${activeIndex + 1}`}
              className="gallery-active-image"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <div className="gallery-nav-buttons">
              <button
                className="gallery-nav-btn prev"
                onClick={prevImage}
                aria-label="Previous photo"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="gallery-nav-btn next"
                onClick={nextImage}
                aria-label="Next photo"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="gallery-thumbs-row">
            {images.map((img, idx) => (
              <button
                key={img}
                className={`gallery-thumb-btn ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  sound.hover();
                  setActiveIndex(idx);
                }}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
            <motion.div
              className="lightbox-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="lightbox-top-bar">
                <div className="lightbox-title-box">
                  <h4>{title}</h4>
                  <span>
                    Photo {activeIndex + 1} of {images.length}
                  </span>
                </div>
                <button
                  className="lightbox-close-btn"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close lightbox"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="lightbox-image-stage">
                <img
                  src={images[activeIndex]}
                  alt={`${title} fullscreen photo ${activeIndex + 1}`}
                  className="lightbox-main-img"
                />

                {images.length > 1 && (
                  <>
                    <button className="lightbox-arrow left" onClick={prevImage} aria-label="Previous">
                      <ChevronLeft size={24} />
                    </button>
                    <button className="lightbox-arrow right" onClick={nextImage} aria-label="Next">
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
