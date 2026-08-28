'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { sound } from './AudioEngine';

interface SystemPlaygroundProps {
  type?: 'chimera' | 'family' | 'poll' | 'phoenix';
  visual?: 'chimera' | 'family' | 'poll' | 'phoenix';
}

export default function SystemPlayground({ type, visual }: SystemPlaygroundProps) {
  const activeType = visual || type || 'chimera';

  const [chimeraRunning, setChimeraRunning] = useState(false);
  const [chimeraActiveNode, setChimeraActiveNode] = useState(0);
  const [chimeraTokens, setChimeraTokens] = useState<string[]>([]);

  const runChimeraWorkflow = () => {
    sound.click();
    setChimeraRunning(true);
    setChimeraActiveNode(0);
    setChimeraTokens([]);

    const steps = [
      { node: 0, msg: '[Librarian] Ingested 18 PubMed spaceflight radiation studies & cellular pathways.' },
      { node: 1, msg: '[Cartographer] Linked SOD2 expression & mitochondrial oxidative stress nodes.' },
      { node: 2, msg: '[Socratic Critic] Verified empirical significance score (p < 0.001).' },
      { node: 3, msg: '[Analyst] Formulated deep-space cellular senescence & longevity brief.' },
      { node: 4, msg: '[Communicator] Generated verified mission control telemetry report.' }
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        setChimeraActiveNode(step.node);
        setChimeraTokens((prev) => [...prev, step.msg]);
        sound.hover();
        if (i === steps.length - 1) {
          setChimeraRunning(false);
          sound.playBeep(720, 0.1, 'sine', 0.05);
        }
      }, (i + 1) * 650);
    });
  };

  const [selectedFamilyNode, setSelectedFamilyNode] = useState<string>('tape03');
  const familyNodes: Record<string, { label: string; type: string; quote: string; citation: string }> = {
    tape03: {
      label: 'Audio Archive #03 (1984)',
      type: 'Primary Oral Recording',
      quote: '"I started working as an apprentice in the limestone manufacturing plant right after graduating..."',
      citation: 'Source: 42:18 min oral recording • Hash: sha256:7f8a91b'
    },
    village: {
      label: 'Ancestral Origin: Sattenapalli',
      type: 'Geographic Entity',
      quote: '"A historic town famous for its limestones and close-knit family traditions across generations."',
      citation: 'Source: Timeline Node #12 • Local Graph v2.1'
    },
    father: {
      label: 'Father (Career History)',
      type: 'Kinship & Career Node',
      quote: '"Transitioned from apprentice to chief supervisor, building community educational funds in 1998."',
      citation: 'Source: Relational Link [Father ➔ Sattenapalli ➔ Manufacturing]'
    },
    refusal: {
      label: 'Guarded Query Test',
      type: 'Safety Evaluation',
      quote: '"Query: What is father\'s bank PIN? ➔ [REFUSAL TRIGGERED] Out-of-bounds private financial data."',
      citation: 'Source: Privacy Filter Enforced • 0% Cloud Exposure'
    }
  };

  const [isStreamingAudio, setIsStreamingAudio] = useState(false);
  const [votes, setVotes] = useState({ microservices: 48, monolith: 35, serverless: 17 });
  const [hasVoted, setHasVoted] = useState(false);
  const waveformCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    const canvas = waveformCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;
    const drawWave = () => {
      animId = requestAnimationFrame(drawWave);
      phase += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bars = 32;
      const barWidth = canvas.width / bars;

      for (let i = 0; i < bars; i++) {
        const height = isStreamingAudio
          ? Math.sin(phase + i * 0.3) * 18 + Math.random() * 20 + 8
          : Math.sin(phase + i * 0.2) * 5 + 6;

        ctx.fillStyle = isStreamingAudio ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.25)';
        ctx.fillRect(i * barWidth + 2, canvas.height / 2 - height / 2, barWidth - 4, height);
      }
    };
    drawWave();

    return () => cancelAnimationFrame(animId);
  }, [isStreamingAudio]);

  const castVote = (option: 'microservices' | 'monolith' | 'serverless') => {
    sound.click();
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }));
    setHasVoted(true);
    sound.playBeep(600, 0.08, 'sine', 0.05);
  };

  const [phoenixStatus, setPhoenixStatus] = useState<'idle' | 'detecting' | 'patching' | 'resolved'>('idle');

  const triggerPhoenixChaos = () => {
    sound.click();
    setPhoenixStatus('detecting');
    sound.playBeep(320, 0.12, 'triangle', 0.06);

    setTimeout(() => {
      setPhoenixStatus('patching');
      sound.hover();
    }, 1100);

    setTimeout(() => {
      setPhoenixStatus('resolved');
      sound.playBeep(880, 0.15, 'sine', 0.05);
    }, 2400);
  };

  return (
    <div className={`system-playground-card playground-${activeType}`}>
      {activeType === 'chimera' && (
        <div className="playground-chimera">
          <div className="playground-header-bar">
            <div className="bar-left">
              <span className="terminal-prefix">[01]</span>
              <span className="bar-title">LangGraph Multi-Agent State Machine</span>
            </div>
            <button
              className="playground-action-btn"
              onClick={runChimeraWorkflow}
              disabled={chimeraRunning}
              onMouseEnter={() => sound.hover()}
            >
              <Play size={12} /> {chimeraRunning ? 'Reasoning...' : 'Dispatch Workflow'}
            </button>
          </div>

          <div className="agent-graph-nodes">
            {['Librarian', 'Cartographer', 'Socratic Critic', 'Analyst', 'Communicator'].map((nodeName, idx) => (
              <div
                key={nodeName}
                className={`agent-node-card ${idx === chimeraActiveNode ? 'active' : ''} ${
                  idx < chimeraActiveNode || (idx === 4 && !chimeraRunning && chimeraTokens.length > 0) ? 'done' : ''
                }`}
              >
                <div className="node-status-pip" />
                <span className="node-index">0{idx + 1}</span>
                <span className="node-name">{nodeName}</span>
              </div>
            ))}
          </div>

          <div className="playground-terminal-box">
            <div className="terminal-top">
              <span className="terminal-dots">● ● ●</span>
              <span className="terminal-caption">EXECUTION TRACE // LOCAL DETERMINISTIC STATE</span>
            </div>
            <div className="terminal-logs">
              {chimeraTokens.length === 0 ? (
                <div className="log-placeholder">
                  Click &ldquo;Dispatch Workflow&rdquo; to execute the multi-agent consensus graph...
                </div>
              ) : (
                chimeraTokens.map((t, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="log-line"
                  >
                    <span className="log-arrow">➜</span>
                    <span className="log-text">{t}</span>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {activeType === 'family' && (
        <div className="playground-family">
          <div className="playground-header-bar">
            <div className="bar-left">
              <span className="terminal-prefix">[02]</span>
              <span className="bar-title">GraphRAG Local Knowledge Substrate</span>
            </div>
            <span className="badge-editorial">100% LOCAL VAULT</span>
          </div>

          <div className="family-graph-layout">
            <div className="family-node-list">
              {Object.entries(familyNodes).map(([key, node]) => (
                <button
                  key={key}
                  className={`family-node-pill ${selectedFamilyNode === key ? 'active' : ''}`}
                  onClick={() => {
                    sound.click();
                    setSelectedFamilyNode(key);
                  }}
                  onMouseEnter={() => sound.hover()}
                >
                  <span className="node-bullet" />
                  <div className="node-pill-text">
                    <b>{node.label}</b>
                    <small>{node.type}</small>
                  </div>
                </button>
              ))}
            </div>

            <div className="family-citation-display">
              <div className="citation-top">
                <span className="citation-badge">VERIFIABLE ARCHIVE NODE</span>
                <span className="citation-status">INDEXED</span>
              </div>
              <blockquote className="citation-quote">
                {familyNodes[selectedFamilyNode].quote}
              </blockquote>
              <div className="citation-foot">
                <span>{familyNodes[selectedFamilyNode].citation}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeType === 'poll' && (
        <div className="playground-poll">
          <div className="playground-header-bar">
            <div className="bar-left">
              <span className="terminal-prefix">[03]</span>
              <span className="bar-title">Speech-to-Poll Ingestion Pipeline</span>
            </div>
            <button
              className={`stream-toggle-btn ${isStreamingAudio ? 'active' : ''}`}
              onClick={() => {
                sound.click();
                setIsStreamingAudio(!isStreamingAudio);
              }}
              onMouseEnter={() => sound.hover()}
            >
              {isStreamingAudio ? 'Pause Ingestion' : 'Simulate Audio Stream'}
            </button>
          </div>

          <div className="audio-wave-wrap">
            <canvas ref={waveformCanvasRef} width={600} height={50} className="waveform-canvas" />
          </div>

          <div className="live-poll-card">
            <div className="poll-header">
              <span className="poll-pill">AUTONOMOUSLY EXTRACTED TOPIC</span>
              <span className="poll-latency">&lt; 350ms WebSocket Broadcast</span>
            </div>
            <h4 className="poll-question">
              &ldquo;Which architectural pattern should the engineering team adopt for scale?&rdquo;
            </h4>

            <div className="poll-options-grid">
              {(['microservices', 'monolith', 'serverless'] as const).map((opt) => {
                const total = votes.microservices + votes.monolith + votes.serverless;
                const pct = Math.round((votes[opt] / total) * 100);
                return (
                  <button
                    key={opt}
                    className={`poll-option-btn ${hasVoted ? 'voted' : ''}`}
                    onClick={() => castVote(opt)}
                    onMouseEnter={() => sound.hover()}
                  >
                    <div className="option-bar-bg" style={{ width: `${pct}%` }} />
                    <span className="option-title">
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </span>
                    <b className="option-pct">{pct}%</b>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeType === 'phoenix' && (
        <div className="playground-phoenix">
          <div className="playground-header-bar">
            <div className="bar-left">
              <span className="terminal-prefix">[04]</span>
              <span className="bar-title">AST Hot-Patching & Self-Healing Sandbox</span>
            </div>
            <button
              className="chaos-trigger-btn"
              onClick={triggerPhoenixChaos}
              disabled={phoenixStatus === 'detecting' || phoenixStatus === 'patching'}
              onMouseEnter={() => sound.hover()}
            >
              {phoenixStatus === 'idle' ? 'Inject Exception' : phoenixStatus === 'resolved' ? 'Re-Inject' : 'Recovering...'}
            </button>
          </div>

          <div className="phoenix-stages-grid">
            <div className={`phoenix-card ${phoenixStatus !== 'idle' ? 'active' : ''}`}>
              <span className="step-num">01 / INTERCEPT</span>
              <h4>Exception Capture</h4>
              <p>
                {phoenixStatus === 'idle'
                  ? 'Runtime nominal. 0 faults.'
                  : 'Caught TypeError: payload.metadata is null in /api/sync'}
              </p>
            </div>

            <div className={`phoenix-card ${phoenixStatus === 'patching' || phoenixStatus === 'resolved' ? 'active' : ''}`}>
              <span className="step-num">02 / DIAGNOSE</span>
              <h4>AST Tree Mutation</h4>
              <p>
                {phoenixStatus === 'idle'
                  ? 'Standing by.'
                  : 'Synthesized nullish coalescing guard on AST node.'}
              </p>
            </div>

            <div className={`phoenix-card ${phoenixStatus === 'resolved' ? 'resolved' : ''}`}>
              <span className="step-num">03 / HOT-SWAP</span>
              <h4>Sandbox Verification</h4>
              <p>
                {phoenixStatus === 'resolved'
                  ? 'Hot-swap verified. 18/18 tests passed in isolated runtime.'
                  : 'Awaiting diagnosis...'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
