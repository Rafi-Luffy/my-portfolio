'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Command,
  FileText,
  ExternalLink,
  Volume2,
  Cpu,
  Layers,
  Award,
  Terminal,
  X
} from 'lucide-react';
import { sound } from './AudioEngine';
import { RESUME_PATH } from '../data';

interface CommandItem {
  id: string;
  category: 'Systems' | 'Experience' | 'Hackathons' | 'Actions' | 'Tools';
  title: string;
  subtitle: string;
  action: () => void;
  icon: React.ReactNode;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items: CommandItem[] = [
    {
      id: 'chimera',
      category: 'Systems',
      title: 'Project Chimera',
      subtitle: 'NASA Space Apps 2025 · 5-Agent Bioscience Reasoning',
      action: () => {
        window.location.hash = '#system-01';
        setIsOpen(false);
      },
      icon: <Cpu size={16} />
    },
    {
      id: 'family',
      category: 'Systems',
      title: 'Know Your Parents',
      subtitle: 'Local-First Multimodal GraphRAG Memory Archive',
      action: () => {
        window.location.hash = '#system-02';
        setIsOpen(false);
      },
      icon: <Layers size={16} />
    },
    {
      id: 'poll',
      category: 'Systems',
      title: 'AI Poll Automation Platform',
      subtitle: 'IIT Ropar Internship · Real-Time Streaming Whisper AI',
      action: () => {
        window.location.hash = '#system-03';
        setIsOpen(false);
      },
      icon: <Terminal size={16} />
    },
    {
      id: 'phoenix',
      category: 'Systems',
      title: 'Project Phoenix',
      subtitle: 'Autonomous Self-Healing Software Recovery Runtime',
      action: () => {
        window.location.hash = '#system-04';
        setIsOpen(false);
      },
      icon: <Cpu size={16} />
    },
    {
      id: 'google-hack',
      category: 'Hackathons',
      title: 'Google Cloud Agentic AI Grand Finalist',
      subtitle: 'Guinness World Record Event · Top Finalist / 57k+ Devs',
      action: () => {
        window.location.hash = '#hackathons';
        setIsOpen(false);
      },
      icon: <Award size={16} />
    },
    {
      id: 'pysan',
      category: 'Tools',
      title: 'PySan (Client-Side AST Visualizer)',
      subtitle: '100% In-Browser Python Package & Bloat Analysis',
      action: () => {
        window.open('https://rafi-luffy.github.io/PySan', '_blank');
        setIsOpen(false);
      },
      icon: <ExternalLink size={16} />
    },
    {
      id: 'resume',
      category: 'Actions',
      title: 'Download Resume PDF',
      subtitle: 'S.B.M. Rafi - AI Engineer & Full-Stack Systems 2026',
      action: () => {
        const link = document.createElement('a');
        link.href = RESUME_PATH;
        link.download = 'S_B_M_Rafi_Resume_2026.pdf';
        link.click();
        setIsOpen(false);
      },
      icon: <FileText size={16} />
    },
    {
      id: 'email',
      category: 'Actions',
      title: 'Copy Email to Clipboard',
      subtitle: 's.b.m.rafi01@gmail.com',
      action: () => {
        navigator.clipboard.writeText('s.b.m.rafi01@gmail.com');
        sound.playBeep(880, 0.08, 'sine', 0.05);
        setIsOpen(false);
      },
      icon: <Command size={16} />
    },
    {
      id: 'audio-toggle',
      category: 'Actions',
      title: 'Toggle Haptic Sound Engine',
      subtitle: 'Web Audio API micro-sound feedback',
      action: () => {
        sound.toggle();
        setIsOpen(false);
      },
      icon: <Volume2 size={16} />
    }
  ];

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.click();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleSelect = (item: CommandItem) => {
    sound.click();
    item.action();
  };

  return (
    <>
      <button
        className="cmd-k-trigger-btn"
        onClick={() => {
          sound.click();
          setIsOpen(true);
        }}
        title="Open Command Palette (Cmd + K)"
        aria-label="Open Command Palette"
      >
        <Search size={13} />
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="cmd-k-overlay" onClick={() => setIsOpen(false)}>
            <motion.div
              className="cmd-k-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="cmd-k-search-bar">
                <Search size={18} className="cmd-search-icon" />
                <input
                  type="text"
                  placeholder="Type a command, system name, or skill..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  autoFocus
                />
                <button className="cmd-close-btn" onClick={() => setIsOpen(false)}>
                  <X size={16} />
                </button>
              </div>

              <div className="cmd-k-results-list">
                {filtered.length === 0 ? (
                  <div className="cmd-no-results">No matching systems or actions found.</div>
                ) : (
                  filtered.map((item, idx) => (
                    <div
                      key={item.id}
                      className={`cmd-k-result-item ${idx === selectedIndex ? 'selected' : ''}`}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => {
                        sound.hover();
                        setSelectedIndex(idx);
                      }}
                    >
                      <div className="cmd-item-icon">{item.icon}</div>
                      <div className="cmd-item-text">
                        <div className="cmd-item-title">{item.title}</div>
                        <div className="cmd-item-sub">{item.subtitle}</div>
                      </div>
                      <span className="cmd-item-category">{item.category}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="cmd-k-footer">
                <span>Navigate: ↑ ↓</span>
                <span>Select: Enter</span>
                <span>Close: Esc</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
