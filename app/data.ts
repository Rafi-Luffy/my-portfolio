const isProd = process.env.NODE_ENV === 'production';
export const BASE_PATH = isProd ? '/my-portfolio' : '';
export const getAsset = (path: string) => `${BASE_PATH}${path.startsWith('/') ? path : '/' + path}`;

export const RESUME_PATH = getAsset('/Resume_Rafi.S.B.M.pdf');
export const PROFILE_PATH = getAsset('/Profile_Rafi.S.B.M.png');

export interface FeaturedSystem {
  index: string;
  eyebrow: string;
  title: string;
  summary: string;
  status: string;
  stats: { label: string; val: string }[];
  details: [string, string, string];
  tech: string[];
  github?: string;
  visual: 'chimera' | 'family' | 'poll' | 'phoenix';
}

export const featured: FeaturedSystem[] = [
  {
    index: '01',
    eyebrow: 'NASA SPACE APPS 2025 // SPACE BIOLOGY',
    title: 'Project Chimera',
    summary:
      'A 5-agent LangGraph orchestration platform that autonomously synthesizes spaceflight-induced radiation risks, mitochondrial oxidative stress, and cellular senescence across 18+ PubMed genomic datasets.',
    status: 'ACTIVE RUNTIME',
    stats: [
      { label: 'Agent Topology', val: '5 Autonomous Roles' },
      { label: 'Corpus Coverage', val: '18+ PubMed Studies' },
      { label: 'Deterministic Score', val: '99.4% Grounded' }
    ],
    details: [
      'LangGraph deterministic state machines with Socratic verification loops',
      'Dual-vector PubMed indexing over radiation-induced mitochondrial pathways',
      'Automated telemetry brief generation for mission-critical biology teams'
    ],
    tech: ['Python', 'LangGraph', 'FastAPI', 'ChromaDB', 'PubMed API', 'Streamlit'],
    github: 'https://github.com/Rafi-Luffy/Project-Chimera',
    visual: 'chimera'
  },
  {
    index: '02',
    eyebrow: 'PRIVATE MULTIMODAL MEMORY // LOCAL MINDFILES',
    title: 'Know Your Parents',
    summary:
      'A privacy-first GraphRAG desktop engine that ingests oral histories, voice recordings, and family archives into a structured, queryable knowledge graph with strict boundary guardrails.',
    status: 'LOCAL RUNTIME',
    stats: [
      { label: 'Architecture', val: 'Zero-Cloud GraphRAG' },
      { label: 'Privacy Standard', val: '100% On-Device' },
      { label: 'Refusal Latency', val: '< 180ms Guardrail' }
    ],
    details: [
      'Whisper transcription pipeline extracting timestamped episodic quotes',
      'Entity relationship graph mapping kinship, geographic moves, and careers',
      'Strict out-of-bounds safety filters protecting confidential personal data'
    ],
    tech: ['TypeScript', 'Next.js', 'Neo4j / NetworkX', 'Whisper', 'Tailwind', 'Web Audio'],
    github: 'https://github.com/Rafi-Luffy/Know-Your-Parents',
    visual: 'family'
  },
  {
    index: '03',
    eyebrow: 'IIT ROPAR INTERNSHIP // REAL-TIME SPEECH AI',
    title: 'Live Poll Automation Platform',
    summary:
      'A full-stack meeting intelligence pipeline that listens to streaming audio, transcribes speaker dialogues via Whisper, and triggers contextual real-time audience polls with zero manual intervention.',
    status: 'PRODUCTION DEPLOYED',
    stats: [
      { label: 'Pipeline Throughput', val: 'Sub-second Streaming' },
      { label: 'Protocol Stack', val: 'Bidirectional WS' },
      { label: 'Monorepo Stack', val: 'Turborepo + Next.js' }
    ],
    details: [
      'Real-time streaming audio ingestion with automatic voice activity detection',
      'Dual-LLM consensus architecture evaluating question relevancy and engagement',
      'Turborepo monorepo with high-concurrency WebSocket broadcast engine'
    ],
    tech: ['React', 'Node.js', 'FastAPI', 'Whisper AI', 'WebSockets', 'Turborepo', 'MongoDB'],
    github: 'https://github.com/Rafi-Luffy',
    visual: 'poll'
  },
  {
    index: '04',
    eyebrow: 'AUTONOMOUS SOFTWARE RUNTIME // RESILIENCE',
    title: 'Project Phoenix',
    summary:
      'An experimental self-repairing execution engine that intercepts uncaught runtime exceptions, inspects AST stack traces, and synthesizes verified hot-patches without process restarts.',
    status: 'EXPERIMENTAL ENGINE',
    stats: [
      { label: 'Recovery Rate', val: '94.2% Synthesized' },
      { label: 'Patch Verification', val: 'Isolated Sandbox' },
      { label: 'Runtime Impact', val: 'Zero Downtime' }
    ],
    details: [
      'Dynamic AST mutation parsing runtime call sites and dependency errors',
      'Isolated sandbox validation ensuring patch safety before memory hot-swapping',
      'Audit log telemetry tracking historical code mutations and safety bounds'
    ],
    tech: ['TypeScript', 'Node.js AST', 'Babel Parser', 'Docker Sandboxing', 'FastAPI'],
    github: 'https://github.com/Rafi-Luffy/Project-Phoenix',
    visual: 'phoenix'
  }
];

export interface ProjectTool {
  name: string;
  tagline: string;
  highlight: string;
  tech: string[];
  url?: string;
  github?: string;
}

export const additionalProjects: ProjectTool[] = [
  {
    name: 'Edge CDN MP3 Streaming',
    tagline: 'Automated, zero-cost text-to-speech narration pipeline converting long-form articles into streaming audio with instantaneous edge CDN playback.',
    highlight: '0₹ API Expense · Audio Streaming',
    tech: ['Vercel Serverless', 'Edge CDN', 'Web Audio API', 'MP3 Chunking'],
    github: 'https://github.com/sbmrafi-kal/tts-blogs'
  },
  {
    name: 'Shortcut Sensei',
    tagline: 'Gamified interactive platform to master productivity shortcuts with 2,300+ shortcuts, leaderboards, quizzes, and live performance analytics.',
    highlight: '2,300+ Shortcuts · Gamified Engine',
    tech: ['React', 'Firebase', 'HTML/CSS', 'Node.js'],
    url: 'https://shortcut-sensei-1305f.web.app/pages/user/login_page_firebase.html',
    github: 'https://github.com/Rafi-Luffy'
  },
  {
    name: 'PySan',
    tagline: '100% client-side in-browser static analysis visualizer for Python package dependencies, bloat analysis, and security removal recommendations.',
    highlight: '100% In-Browser AST Parser',
    tech: ['React 19', 'TypeScript', 'Vite', 'TailwindCSS'],
    url: 'https://rafi-luffy.github.io/PySan',
    github: 'https://github.com/Rafi-Luffy/PySan'
  },
  {
    name: 'Memo no Sekai (メモの世界)',
    tagline: 'Secure, distraction-free note-taking application engineered with end-to-end AES encryption and offline-first PWA local storage.',
    highlight: 'End-to-End AES Encryption · Offline PWA',
    tech: ['JavaScript', 'AES Encryption', 'PWA', 'Local Storage'],
    github: 'https://github.com/Rafi-Luffy/Memo-no-Sekai'
  }
];

export interface KalArchitectureSection {
  title: string;
  desc: string;
}

export interface KalProjectItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  metrics: string[];
  summary: string;
  architecture: KalArchitectureSection[];
  tech: string[];
  link?: string;
  linkText?: string;
  github?: string;
  isFlagship?: boolean;
  images?: string[];
}

export const kalProjects: KalProjectItem[] = [
  {
    id: 'yoga-app',
    num: '01',
    title: 'Intelligent Yoga & Pranayama Recommendation Platform',
    tagline: 'Real-Time Therapeutic Sequence Synthesis with 100% Medical Safety Guardrails',
    category: 'Clinical AI & Biomechanics Engine',
    badge: 'Flagship Clinical AI • Production Live',
    metrics: [
      '220+ Classical Asanas Mapped',
      '100% Medical Contraindication Guardrails',
      'Dynamic 6-Stage Biomechanical Progression',
      'Live Audio-Visual Breath Pacing Engine'
    ],
    summary:
      'Dynamic therapeutic yoga and breathing sequence generator that evaluates user health conditions, chronic ailments, flexibility levels, and medical contraindications from classical texts to assemble personalized, biomechanically safe routines.',
    architecture: [
      {
        title: 'Database & Knowledge Modeling',
        desc: 'Structured database schema of 220+ classical asanas, pranayamas, and mudras mapped to anatomical focus points (lumbar, thoracic, cervical, pelvic, hamstring), doshic impact (Vata/Pitta/Kapha pacification), and classical contraindications.'
      },
      {
        title: 'Multi-Condition Safety Guardrail Matrix',
        desc: 'Algorithmic exclusion matrix evaluating user health profiles (e.g. hypertension, lumbar disc herniation, glaucoma, pregnancy trimesters, cervical spondylosis) that automatically swaps out high-risk inversions/forward bends for safe restorative alternatives.'
      },
      {
        title: 'Dynamic Routine Sequencing State Machine',
        desc: 'Assembles custom sequences following classical Ayurvedic progression: Sukshma Vyayama (micro-warmups) → Sthiti (standing stability) → Asana (seated/prone/supine) → Pranayama (breath control) → Shavasana (neuromuscular integration) scaled to 10m, 20m, or 45m time budgets.'
      },
      {
        title: 'Real-Time Pranayama Pacing Engine',
        desc: 'Built an interactive visual breathing pacing clock controlling the four stages of Pranayama: Puraka (Inhale) → Antar Kumbhaka (Internal Retention) → Rechaka (Exhale) → Bahya Kumbhaka (External Retention) with millisecond-precise cadence timing.'
      }
    ],
    tech: ['Next.js', 'React', 'Ayurvedic Biomechanics DB', 'Clinical Safety Matrix', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    link: 'https://yoga-app-indol.vercel.app/',
    linkText: 'Launch Live Yoga Platform',
    isFlagship: true
  },
  {
    id: 'ayurveda-api',
    num: '02',
    title: 'Ayurveda AI Assistant & Dual-Index RAG API (ayurveda-api)',
    tagline: 'Dual-Index Hybrid Retrieval (Dense Vector + BM25) with Reciprocal Rank Fusion & SSE Streaming',
    category: 'Enterprise LLMs & Dual-Index Hybrid RAG',
    badge: 'OpenAI-Compatible API • Dense + Sparse BM25',
    metrics: [
      '33 Classical Treatises + 27 Medical Textbooks',
      'Reciprocal Rank Fusion (RRF) Re-Ranking',
      'OpenAI SSE Streaming + Tool Call Traces',
      'Opik Tracing Telemetry (Latency & Cost)'
    ],
    summary:
      'High-precision OpenAI-compatible intelligence API combining 33 classical Ayurvedic treatises and 27 modern clinical medical textbooks with dual-index hybrid search (Dense embeddings + BM25 sparse vectors) ranked via Reciprocal Rank Fusion (RRF).',
    architecture: [
      {
        title: 'FastAPI / OpenAI-Compatible Core (src/app.py)',
        desc: 'Built standard /v1/chat/completions endpoint supporting Server-Sent Events (SSE) streaming, reasoning traces (tool_calls), and inline annotation citations for seamless drop-in OpenAI SDK compatibility.'
      },
      {
        title: 'Dual-Index Hybrid Retrieval Pipeline (src/retrieval.py)',
        desc: 'Parallel semantic dense retrieval (Upstash Vector with OpenRouter embeddings) and sparse lexical retrieval (BM25 keyword search) across 33 classical treatises (Charaka, Sushruta, Ashtanga Hridaya) and 27 modern clinical medicine textbooks.'
      },
      {
        title: 'Reciprocal Rank Fusion (RRF)',
        desc: 'Merges dense semantic and sparse keyword result vectors using mathematical rank scoring (score = 1 / (60 + rank)), dramatically reducing hallucination while capturing exact classical Sanskrit medicinal terms.'
      },
      {
        title: 'Noise-Stripping Pre-Synthesis Engine',
        desc: 'Strips internal chunk IDs, volume numbers, publisher metadata, and OCR artifacts before prompt injection, maximizing the prompt signal-to-noise ratio.'
      },
      {
        title: 'Live Biomedical Web Fallback (SearXNG)',
        desc: 'Dynamically queries PubMed, WHO, NIH, and CDC for contemporary medical trials when queries involve modern drug-herb interactions.'
      },
      {
        title: 'Opik Tracing & Automated Evaluation',
        desc: 'Telemetry instrumentation tracking end-to-end token latency, prompt cost, and hallucination scores per query completion.'
      }
    ],
    tech: ['FastAPI', 'Python 3.11', 'Upstash Vector', 'BM25 Sparse Index', 'Reciprocal Rank Fusion', 'OpenRouter', 'Opik Tracing', 'SearXNG'],
    link: 'https://gpt-two-sooty.vercel.app/',
    linkText: 'Open AI Assistant Playground',
    isFlagship: true
  },
  {
    id: 'shopify-pdp',
    num: '03',
    title: 'Shopify Flagship Product Detail Page (PDP) Architecture',
    tagline: 'High-Conversion Modular Liquid PDP Architecture Generating 53% of Company Revenue in Q3 2026',
    category: 'High-Revenue E-Commerce Architecture',
    badge: '53% Q3 Revenue Impact • Production PDP',
    metrics: [
      '53% of Total Company Revenue in Q3 2026',
      '5 Flagship Product Formulations Deployed',
      '40% Faster Time-to-Interactive (TTI)',
      'Sub-Second Mobile Checkout Conversion Dock'
    ],
    summary:
      'Engineered a modular, conversion-optimized Shopify Product Detail Page (PDP) architecture for Neelibhringadi Keram and 4 other flagship formulations, directly generating 53% of total company revenue in Q3 2026.',
    architecture: [
      {
        title: 'Massive Business Revenue Impact',
        desc: 'Engineered the core product experience for Neelibhringadi Keram and 4 other flagship formulations, directly generating 53% of Kerala Ayurveda\'s total revenue in Q3 2026.'
      },
      {
        title: 'Modular Shopify Liquid Component System',
        desc: 'Replaced heavy monolithic theme templates with a modular component architecture featuring asynchronous clinical evidence tabs, doctor recommendation widgets, and interactive ingredient breakdowns.'
      },
      {
        title: 'Conversion Rate Optimization (CRO) Dock',
        desc: 'Engineered a sticky mobile purchase dock with real-time stock telemetry, bundle up-sells, dynamic currency conversion, and 1-click checkout routing.'
      },
      {
        title: 'Zero-Dependency Core Web Vitals Optimization',
        desc: 'Stripped bulky third-party Shopify apps in favor of native vanilla JavaScript, lazy-loaded responsive WebP media, and edge-cached liquid fragments, slashing TTI by 40%.'
      }
    ],
    tech: ['Shopify Liquid', 'Vanilla JavaScript', 'Conversion Rate Optimization', 'Core Web Vitals', 'Shopify CDN', 'HTML5/CSS3'],
    link: 'https://keralaayurveda.com/products/neelibringadi-keram?utm_source=google&utm_medium=cpc&utm_campaign=Google_Shopping_Focus_All_TROAS_PAN_260526&keyword=&product=shopify_ZZ_9694439866681_51079877984569&gad_source=1&gad_campaignid=23877235341&gbraid=0AAAAA-CLweiNo0g3sm4DpNO_96OniNZoc&gclid=CjwKCAjwwL_UBhAjEiwAEhuT5AuVNz1ZPVhvme59vstXQCFeDUpm-hOZw4jK9dcPBPWAIr3KCzHuOBoCdQEQAvD_BwE',
    linkText: 'View Live Neelibhringadi PDP',
    isFlagship: true
  },
  {
    id: 'dosha-finder',
    num: '04',
    title: 'AI Prakriti / Dosha Diagnostic Finder',
    tagline: 'Algorithmic 86% Questionnaire Compression (300 → 40 Questions) with Real-Time Dosha Vectorization',
    category: 'Diagnostic AI & Psychometric Assessment',
    badge: 'Adaptive Diagnostic Engine • 86% Less Friction',
    metrics: [
      '300 → 40 Questions (86% Friction Reduction)',
      '3-Axis Mathematical Vector Scoring (V-P-K)',
      'Interactive SVG Constitution Radar',
      'Instant Personalized Dinacharya Guidelines'
    ],
    summary:
      'Algorithmic diagnostic engine that streamlined the national standard 300-question Ayurvedic questionnaire down to a 40-question adaptive assessment to accurately diagnose primary and secondary Dosha (Vata/Pitta/Kapha) constitution ratios.',
    architecture: [
      {
        title: 'Algorithmic Questionnaire Compression',
        desc: 'Reduced the traditional 300-question Central Council for Research in Ayurvedic Sciences (CCRAS) questionnaire down to an intelligent 40-question adaptive assessment while preserving diagnostic accuracy.'
      },
      {
        title: 'Tri-Dosha Mathematical Scoring Model',
        desc: 'Normalizes responses across Sharirika (physical anatomy), Agni/Koshtha (metabolism & digestion), and Manasika (psychological temperament) into a 3-axis normalized vector representing primary and secondary Prakriti ratios.'
      },
      {
        title: 'Dynamic SVG Radar Visualization',
        desc: 'Interactive client-side SVG radar chart that visually displays the user\'s Vata-Pitta-Kapha equilibrium in real-time.'
      },
      {
        title: 'Algorithmic Dinacharya Generator',
        desc: 'Instantly generates personalized dietary dos/don\'ts, herbal regimen suggestions, and circadian lifestyle habits based on the computed constitution.'
      }
    ],
    tech: ['Next.js', 'React', 'Psychometric Scoring Algorithms', 'Interactive SVG Radar', 'Tailwind CSS', 'Vercel'],
    link: 'https://dosha-finder-kal.vercel.app/',
    linkText: 'Launch Live Dosha Finder'
  },
  {
    id: 'tts-blogs',
    num: '05',
    title: 'Zero-Cost Serverless Audio/TTS Engine (tts-blogs)',
    tagline: 'Zero-Cost Enterprise Article-to-Audio Narration Pipeline with Edge MP3 Chunk Caching',
    category: 'Edge Serverless & Audio Streaming Pipeline',
    badge: '0₹ Infrastructure Cost • Vercel Edge CDN',
    metrics: [
      '0₹ Cloud API Recurring Expenses',
      'Vercel Global Edge CDN Distribution',
      'Semantic Text Tokenizer & Chunking Pipeline',
      'Custom HTML5 Waveform & Speed Controller'
    ],
    summary:
      'Automated zero-cost text-to-speech audio narration pipeline for enterprise blog posts, converting text articles into voice streams distributed via Vercel\'s global CDN with zero recurring cloud expenses.',
    architecture: [
      {
        title: '0₹ Infrastructure Architecture',
        desc: 'Completely eliminates expensive third-party speech API subscriptions (ElevenLabs, Google Cloud TTS) by engineering a custom headless serverless synthesis pipeline running on free-tier edge compute.'
      },
      {
        title: 'Semantic Sentence Chunking & Streaming',
        desc: 'Tokenizes long-form blog articles by semantic sentence boundaries, synthesizes audio segments asynchronously, and concatenates them into optimized MP3 streams.'
      },
      {
        title: 'Edge CDN Asset Distribution',
        desc: 'Caches synthesized MP3 audio segments directly across Vercel\'s global Edge CDN, delivering instant sub-50ms playback to client browsers worldwide with zero backend load.'
      },
      {
        title: 'Custom Web Audio Client Player',
        desc: 'Features real-time audio waveform visualizer, variable playback rate multipliers (0.75x, 1.0x, 1.25x, 1.5x, 2.0x), timestamp bookmarking, and native mobile media session integration.'
      }
    ],
    tech: ['TypeScript', 'Node.js', 'Vercel Serverless Functions', 'Edge CDN', 'Web Audio API', 'MP3 Chunking Engine'],
    link: 'https://github.com/sbmrafi-kal/tts-blogs',
    github: 'https://github.com/sbmrafi-kal/tts-blogs',
    linkText: 'Inspect GitHub Repository',
    isFlagship: true,
    images: [
      getAsset('/tts-blogs/1.png'),
      getAsset('/tts-blogs/2.png'),
      getAsset('/tts-blogs/3.png'),
      getAsset('/tts-blogs/4.png'),
      getAsset('/tts-blogs/5.png')
    ]
  },
  {
    id: 'neeli-editorial',
    num: '06',
    title: 'Neelibhringadi Keram Luxury Editorial Experience',
    tagline: 'Cinematic Magazine-Grade Digital Editorial Experiment for Neelibhringadi Keram',
    category: 'Luxury Editorial Design & Storytelling',
    badge: 'Bespoke High-Fashion Web Experiment',
    metrics: [
      'Bespoke Haute Horlogerie & Fashion Aesthetic',
      'Parallax Macro Botanical Journey',
      'Interactive Kshirapakavidhi Process Breakdown',
      'Playfully Discarded: "Too Ultra-Premium for E-Commerce"'
    ],
    summary:
      'High-fashion digital editorial experimentation for Neelibhringadi Keram featuring bespoke typography, macro ingredient photography, and cinematic scroll journeys (playfully discarded for production because it looked too ultra-luxury).',
    architecture: [
      {
        title: 'High-Fashion Editorial Art Direction',
        desc: 'Engineered an avant-garde digital magazine layout for Neelibhringadi Keram featuring bespoke serif typography, gold-accented luxury palettes, and silky staggered animations.'
      },
      {
        title: 'Interactive Kshirapakavidhi Preparation Story',
        desc: 'Interactive scroll journey visualizing the authentic Ayurvedic preparation technique: slow-boiling hand-picked herbs in goat milk and virgin coconut oil for days.'
      },
      {
        title: 'Botanical Macro Zoom Experience',
        desc: 'Interactive ingredient inspector breaking down Neeli (Indigofera tinctoria), Bhringaraja (Eclipta alba), Amla (Indian Gooseberry), and Gunja (Abrus precatorius) with high-resolution parallax zoom.'
      },
      {
        title: 'Design Verdict',
        desc: 'Playfully discarded by e-commerce product managers because it felt "way too ultra-luxury and bespoke" compared to conventional e-commerce shopping funnels!'
      }
    ],
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Editorial Grid System', 'Vercel'],
    link: 'https://neeli-editorial.vercel.app/',
    linkText: 'View Live Editorial Experience'
  },
  {
    id: 'blog-revamp',
    num: '07',
    title: 'Kerala Ayurveda Content Hub & Blog Portal Revamp',
    tagline: '1-Month Flagship Initiative: End-to-End PRD, Cross-Team Leadership, and 3-App Content Platform Rollout',
    category: 'Content Platform & Discovery Hub',
    badge: '1-Month Full Platform Revamp • Production',
    metrics: [
      '1-Month PRD to Production Rollout',
      '3 Integrated Sub-Apps (Hub, Reader, Search)',
      'Cross-Functional Medical & Design Leadership',
      'Automated SEO Metadata & Schema Markup'
    ],
    summary:
      '1-month flagship initiative leading the complete product research, PRD authoring, medical & design team syncs, and full frontend development of Kerala Ayurveda\'s content ecosystem: Landing Page, Article Reader, and Search Hub.',
    architecture: [
      {
        title: 'Full Product Cycle Leadership',
        desc: 'Owned the 1-month initiative from initial PRD authoring, competitive research, and medical team alignment to production engineering.'
      },
      {
        title: '3 Interconnected Sub-Applications',
        desc: 'Content Discovery Hub: Dynamic categorization by health goal (Gut Health, Immunity, Skin/Hair, Sleep, Detox) with featured editorial spotlights. Medical Article Reader: Distraction-free reading experience with estimated read time, table of contents scrollspy, doctor reviewer credentials, and contextual herbal formulation recommendations. Instant Algorithmic Search: Real-time client-side search filtering by ailment, ingredient, dosha, and reading duration.'
      },
      {
        title: 'SEO & Structured Data Dominance',
        desc: 'Automated JSON-LD medical schema markup, OpenGraph dynamic preview generators, and semantic HTML5 structuring for top organic ranking.'
      }
    ],
    tech: ['Next.js', 'React', 'PRD Authoring', 'Medical Schema Markup', 'Algorithmic Search', 'Tailwind CSS'],
    link: 'https://keralaayurveda.com/',
    linkText: 'Kerala Ayurveda Content Hub'
  }
];

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge?: string;
  metric?: string;
  summary: string;
  achievements: string[];
  skills?: string[];
}

export interface MentorLearningItem {
  mentorName: string;
  mentorRole: string;
  program: string;
  institution: string;
  period: string;
  hours: string;
  badge: string;
  summary: string;
  coreLearnings: string[];
  keyPhilosophy: string;
  tags: string[];
}

export interface FreelanceWorkStream {
  title: string;
  description: string;
  metrics?: string;
  skills: string[];
  link?: string;
  linkText?: string;
}

export interface FreelanceClientItem {
  clientName: string;
  role: string;
  period: string;
  badge: string;
  summary: string;
  workStreams: FreelanceWorkStream[];
  skills: string[];
}

export type JourneyTrackId = 'experience' | 'freelance' | 'leadership' | 'mentors';

export interface JourneyTrack {
  id: JourneyTrackId;
  label: string;
  tagline: string;
  badge: string;
  count: number;
}

export const journeyTracks: JourneyTrack[] = [
  { id: 'experience', label: 'Work Experience', tagline: 'Engineering Production AI & Systems', badge: '01 // Industry & Research', count: 2 },
  { id: 'freelance', label: 'Freelancing', tagline: 'Full-Stack Platforms & Scaled Data Engineering', badge: '02 // Client Delivery & Big Data', count: 2 },
  { id: 'leadership', label: 'Leadership', tagline: 'Organizing Teams & Driving Innovation', badge: '03 // Leadership & Impact', count: 4 },
  { id: 'mentors', label: 'Learnings from Mentors', tagline: 'Mastery & First-Principles CS Training', badge: '04 // Mentorship & Mastery', count: 1 }
];

export const freelanceExperience: FreelanceClientItem[] = [
  {
    clientName: 'AI & MetaWeb Technologies',
    role: 'Lead Full-Stack Web Architect',
    period: '2024 - Present',
    badge: 'Production Web & AI Systems',
    summary:
      'Engineered and delivered bespoke digital platforms with focus on reactive architectures, modern animation systems, and production reliability.',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'UI/UX Engineering', 'Web Performance'],
    workStreams: [
      {
        title: 'AI and MetaWeb Technologies Production Platform',
        description:
          'Engineered and deployed a responsive, high-performance company portal featuring modern typography, dynamic animations, and interactive AI service showcases.',
        link: 'https://ai-and-metaweb-tech-nine.vercel.app/',
        linkText: 'Live Platform',
        skills: ['Next.js', 'React', 'Tailwind CSS', 'Vercel Deployment']
      },
      {
        title: 'MySENn Digital Web Application',
        description:
          'Architected and built the full-stack web infrastructure for MySENn, focusing on streamlined user workflows, clean responsive interfaces, and optimized load performance.',
        skills: ['Full-Stack Development', 'React', 'Modern UI Architecture', 'Web Performance']
      }
    ]
  },
  {
    clientName: 'EdTech & Enterprise Data Engineering',
    role: 'Lead Data Engineer & Quantitative Analyst',
    period: '2024 - Present',
    badge: '53K+ Scaled Datasets & Analytics',
    summary:
      'Engineered end-to-end data acquisition pipelines, legal compliance scrapers, and demographic workforce analytics for institutional decision support.',
    skills: ['Python', 'Data Engineering', 'Web Scraping', 'Demographic Analytics', 'Pandas', 'Statistical Modeling'],
    workStreams: [
      {
        title: 'Comprehensive Indian Colleges Dataset (53k+ Institutions)',
        description:
          'Constructed an exhaustive national dataset covering 53,000+ colleges across India with rich multidimensional attributes, fee structures, cutoffs, accreditations, and program offerings.',
        metrics: '53,000+ Normalized Entities',
        skills: ['Schema Normalization', 'Python', 'ETL Pipelines', 'Data Cleansing']
      },
      {
        title: 'Executive & Corporate HR Intelligence Pipeline',
        description:
          'Engineered an automated data extraction and enrichment engine to source and verify executive HR contact data (names, personal & corporate emails) using compliant web scrapers, verified AI enrichment APIs, and legally sourced directories.',
        metrics: 'Verified Corporate & Personal Directory',
        skills: ['Compliant Scraping', 'AI Data Enrichment', 'Legal Means ETL', 'Data Verification']
      },
      {
        title: 'Bank Employee Performance & Demographic Analytics (Rural vs Urban)',
        description:
          'Conducted quantitative workforce analytics for a reputable bank, filtering and analyzing employee performance across Rural vs Urban demographics based on age, gender, regional responsibilities, and YoY growth/decline percentage metrics.',
        metrics: 'Demographic & Performance Variance Modeling',
        skills: ['Quantitative Analysis', 'Banking Metrics', 'Demographic Segmentation', 'Performance Variance']
      }
    ]
  }
];

export const workExperience: ExperienceItem[] = [
  {
    title: 'Agentic AI Intern',
    company: 'Kerala Ayurveda Ltd.',
    location: 'Bengaluru, India',
    period: 'Jan 2026 – Present',
    type: 'Internship',
    badge: 'Enterprise AI & Healthcare',
    summary:
      'Engineering agentic RAG workflows, personalized wellness platforms, and automated developer tooling for clinical decision support.',
    achievements: [
      'Architected a full-stack Next.js wellness platform featuring dynamic yoga personalization with safety guardrails tailored to complex health profiles and user experience levels',
      'Spearheaded a hybrid agentic RAG pipeline across 35+ traditional Ayurvedic texts with OCR data extraction, semantic chunking, and clinical tool-calling',
      'Boosted Shopify storefront productivity by integrating AI-driven code generation, optimizing high-conversion PDP and blog modules to accelerate web deployment cycles',
      'Conducted data-backed competitive intelligence and product positioning analyses, mapping digital assets to drive market ranking strategies and enterprise growth'
    ],
    skills: ['Next.js', 'Agentic RAG', 'OCR Chunking', 'Tool Calling', 'Shopify AI', 'Competitive Intel']
  },
  {
    title: 'Summer Intern',
    company: 'DLED - IIT Ropar',
    location: 'Remote',
    period: 'May 2025 – July 2025',
    type: 'Research Internship',
    badge: 'Real-Time Speech AI & LLMs',
    metric: 'Sub-second Streaming',
    summary:
      'Built end-to-end meeting intelligence systems translating live speech streams into real-time interactive audience polls.',
    achievements: [
      'Developed an AI-powered poll generation system that converts live speech into real-time interactive polls with sub-second latency.',
      'Built a full-stack application using the MERN stack, integrated Whisper for transcription, and LangChain for LLM-based poll generation.',
      'Gained hands-on experience with RAG pipelines, Ollama, LangChain agents, and prompt engineering for LLM workflows.',
      'Architected modular microservices within a Turborepo monorepo, paired with an interactive real-time analytics dashboard and MongoDB caching.'
    ],
    skills: ['MERN Stack', 'Whisper AI', 'LangChain Agents', 'RAG Pipelines', 'Ollama', 'WebSockets', 'Turborepo']
  }
];

export const leadershipExperience: ExperienceItem[] = [
  {
    title: 'Class Representative (Academic Leadership)',
    company: 'VVIT CSE Department',
    location: 'Guntur, India',
    period: 'Nov 2023 – Apr 2026',
    type: 'Academic Leadership',
    badge: 'Conferred Dec 31, 2024',
    metric: 'Best CR Award',
    summary:
      'Serving as the primary academic liaison between student engineers and departmental faculty, enhancing the overall learning environment.',
    achievements: [
      'Conferred the Best Class Representative Award, presented formally by the College Principal (December 31, 2024)',
      'Facilitating seamless communication between students and faculty, addressing concerns, and coordinating academic activities to enhance the learning experience.',
      'Coordinating curriculum feedback, academic schedule updates, and student welfare initiatives across engineering batches.',
      'Representing student interests in departmental academic councils and technical review sessions.'
    ],
    skills: ['Academic Coordination', 'Faculty-Student Liaison', 'Student Welfare', 'Crisis Resolution']
  },
  {
    title: 'ACM Officer & Technical Lead (Spardha 2k24)',
    company: 'VVIT ACM Student Chapter',
    location: 'Guntur, India',
    period: 'Apr 2024 – Apr 2025',
    type: 'Technical Leadership',
    badge: 'Spardha 2k24 Lead',
    metric: '6.5K+ Participants • 20 Officers / 150 Volunteers',
    summary:
      'Led technical problem curation, competitive programming challenges, and logistical execution for major university fests.',
    achievements: [
      'Directed technical contest operations for Spardha 2k24 (flagship university fest with 6,500+ participants managed by 20 officers and 150 volunteers).',
      'Authored the toughest competitive programming problem statements and automated evaluation rubrics for Spardha 2k24.',
      'Managed cross-functional student teams, event schedules, and structured event communication flows using Microsoft Suite and Google Workspace tools.',
      'Orchestrated hackathons, code sprints, and technical workshops to foster competitive programming culture on campus.'
    ],
    skills: ['Technical Problem Design', 'Event Operations', 'Volunteer Management', 'Automated Rubrics']
  },
  {
    title: 'IIC Volunteer (Innovation & Outreach)',
    company: "Institution's Innovation Council (IIC - MHRD / VVIT)",
    location: 'Guntur, India',
    period: 'Nov 2023 – Present',
    type: 'Institutional Innovation',
    badge: 'MHRD Innovation Cell',
    metric: 'Campus Ecosystem & Incubation',
    summary:
      'Driving student engagement in innovation, organizing technical initiatives, and bridging academia with startup incubation ecosystems.',
    achievements: [
      'Designed and delivered high-impact hackathons, webinars, and guest lectures, driving student engagement in innovation while managing outreach, coordination, and on-ground execution.',
      'Represented the council on incubation visits to different institutes and universities, interacting with startup founders and exploring real-world projects, bringing those insights back to strengthen the entrepreneurship ecosystem on campus.',
      'Collaborated with student founders and faculty mentors to facilitate prototype development, design-thinking workshops, and startup ideation sprints.'
    ],
    skills: ['Hackathon Organizing', 'Incubation Outreach', 'Startup Ecosystem', 'Guest Lecture Curation']
  },
  {
    title: 'Foreign Language Club Coordinator',
    company: 'University Innovation Fellows / VVIT Foreign Language Club',
    location: 'Guntur, India',
    period: 'Oct 2023 – Present',
    type: 'Cultural Leadership',
    badge: 'UIF & Cultural Exchange',
    metric: 'Multilingual Community',
    summary:
      'Leading cultural exchange, multilingual learning, and inclusive student peer-mentoring programs.',
    achievements: [
      'Organized and led engaging language practice sessions, games, and cultural activities to help students explore Japanese, Korean, French, and other foreign languages.',
      'Mentored new members and coordinated a team of volunteer tutors, fostering an inclusive, collaborative environment for language enthusiasts at VVIT.',
      'Facilitated cross-cultural understanding, linguistic workshops, and international career readiness sessions.'
    ],
    skills: ['Multilingual Education', 'Community Building', 'Peer Mentoring', 'Cultural Exchange']
  }
];

export const mentorLearnings: MentorLearningItem[] = [
  {
    mentorName: 'Prof. C. Pandu Rangan',
    mentorRole: 'Pioneering Theoretical Computer Scientist & Former Head of CSE, IIT Madras',
    program: 'Advanced DSA Master Class & Algorithmic Mentorship',
    institution: 'IIT Madras (Online Master Series)',
    period: 'May 2025 – July 2025',
    hours: '135+ Hours • 45 Consecutive Days',
    badge: 'Mastery Under Legend',
    summary:
      'Intensive 135+ hour masterclass in advanced algorithm design, computational complexity, and mathematical problem-solving under legendary IIT Madras Professor C. Pandu Rangan.',
    coreLearnings: [
      'Completed 45 consecutive days of daily 3-hour rigorous training in graph algorithms, advanced dynamic programming, flow networks, and NP-completeness.',
      'Studied directly under a pioneering Indian computer scientist with decades of theoretical computer science research and world-renowned contributions to algorithms.',
      'Applied advanced algorithmic patterns, space-time invariant analysis, and mathematical proofs to competitive programming and high-throughput system design.',
      'Deepened mastery in network flows, bipartite matching, amortized complexity analysis, string algorithms, and combinatorial optimization.'
    ],
    keyPhilosophy:
      '"Mastery is not about memorizing code solutions - it is about deconstructing complex, intractable problems into provable invariants and first-principles mathematical structures."',
    tags: ['Graph Theory', 'Dynamic Programming', 'Flow Networks', 'Complexity Proofs', 'Theoretical CS', 'Optimization']
  }
];

export const experience: ExperienceItem[] = [
  ...workExperience,
  ...leadershipExperience
];

export interface HackathonItem {
  id: string;
  title: string;
  badge: string;
  period: string;
  location: string;
  role: string;
  highlight: string;
  description: string;
  stats?: { label: string; val: string }[];
  images: string[];
}

export const hackathons: HackathonItem[] = [
  {
    id: 'google-agentic',
    title: 'Google Cloud Agentic AI Hackathon',
    badge: 'Grand Finalist (Top Finalist / 57,000+ Participants)',
    period: 'Nov 2025',
    location: 'Bengaluru, India',
    role: 'Lead Architect & Agent Engineer',
    highlight: 'Guinness World Record Hackathon Event',
    description:
      'Engineered an enterprise agentic workflow orchestrating automated multimodal analysis, real-time code verification, and grounded synthesis, competing among 57,000+ developers globally in a Guinness World Record setting event.',
    stats: [
      { label: 'Participants', val: '57K+' },
      { label: 'Standing', val: 'Grand Finalist' },
      { label: 'Platform', val: 'Google Cloud' }
    ],
    images: [
      getAsset('/Hackathon Pics/Agentic AI Post/1.jpg'),
      getAsset('/Hackathon Pics/Agentic AI Post/2.jpg'),
      getAsset('/Hackathon Pics/Agentic AI Post/3.jpg'),
      getAsset('/Hackathon Pics/Agentic AI Post/4.jpg'),
      getAsset('/Hackathon Pics/Agentic AI Post/5.jpg'),
      getAsset('/Hackathon Pics/Agentic AI Post/6.png'),
      getAsset('/Hackathon Pics/Agentic AI Post/7.jpg'),
      getAsset('/Hackathon Pics/Agentic AI Post/8.jpg')
    ]
  },
  {
    id: 'nasa-space-apps',
    title: 'NASA Space Apps Challenge 2025',
    badge: 'Global Problem Solver & Bioscience Lead',
    period: 'Oct 2025',
    location: 'Global',
    role: 'Lead AI Systems Engineer',
    highlight: 'Deep Space Radiation & Biology AI',
    description:
      'Architected Project Chimera: an autonomous 5-agent LangGraph system parsing deep space radiation impacts on human cellular biology, integrating PubMed studies, Socratic verification loops, and mission-control brief generation.',
    stats: [
      { label: 'Challenge', val: 'NASA Global' },
      { label: 'Architecture', val: '5-Agent Graph' },
      { label: 'Domain', val: 'Space Biology' }
    ],
    images: [
      getAsset('/Hackathon Pics/NASA Space Apps Challenge 2025/1.jpeg'),
      getAsset('/Hackathon Pics/NASA Space Apps Challenge 2025/2.jpeg'),
      getAsset('/Hackathon Pics/NASA Space Apps Challenge 2025/3.jpeg'),
      getAsset('/Hackathon Pics/NASA Space Apps Challenge 2025/4.jpeg'),
      getAsset('/Hackathon Pics/NASA Space Apps Challenge 2025/5.jpeg'),
      getAsset('/Hackathon Pics/NASA Space Apps Challenge 2025/6.jpeg')
    ]
  },
  {
    id: 'anveeshana',
    title: 'Anveeshana National Science & Engineering Fair',
    badge: 'National Project Demonstrator & Lead Presenter',
    period: 'Jan 2025',
    location: 'Hyderabad, India',
    role: 'Lead Project Demonstrator',
    highlight: 'National Science & Engineering Innovation',
    description:
      'Demonstrated high-impact engineering solutions and represented institutional innovations before expert juries at the prestigious Anveeshana National Fair.',
    stats: [
      { label: 'Scope', val: 'National Level' },
      { label: 'Category', val: 'Engineering Fair' },
      { label: 'Role', val: 'Lead Presenter' }
    ],
    images: [
      getAsset('/Hackathon Pics/Anveeshana/0.jpg'),
      getAsset('/Hackathon Pics/Anveeshana/1.jpg'),
      getAsset('/Hackathon Pics/Anveeshana/2.jpg'),
      getAsset('/Hackathon Pics/Anveeshana/4.jpg'),
      getAsset('/Hackathon Pics/Anveeshana/5.jpg')
    ]
  },
  {
    id: 'design-venture',
    title: 'Design Venture Hackathon 2024',
    badge: 'Design Innovation Lead & Product Architect',
    period: 'Aug 2024',
    location: 'Andhra Pradesh, India',
    role: 'Product Designer & UI Engineer',
    highlight: 'Design Thinking & Rapid Prototyping',
    description:
      'Engineered end-to-end interactive prototypes focusing on user accessibility, human-computer interaction, and high-fidelity product workflows.',
    stats: [
      { label: 'Focus', val: 'Design Thinking' },
      { label: 'Execution', val: '36h Sprint' },
      { label: 'Outcome', val: 'Functional Prototype' }
    ],
    images: [
      getAsset('/Hackathon Pics/Design Venture/1.JPG'),
      getAsset('/Hackathon Pics/Design Venture/2.JPG'),
      getAsset('/Hackathon Pics/Design Venture/3.jpg'),
      getAsset('/Hackathon Pics/Design Venture/4.jpg')
    ]
  }
];

export const certifications = [
  {
    name: 'Google Cloud Data Analytics Professional',
    issuer: 'Google',
    year: '2025',
    level: 'Professional',
    link: 'https://www.credly.com/badges/edd1de30-cf84-4b83-b88f-99268fddf9d9'
  },
  {
    name: 'AWS Academy Cloud Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    level: 'Professional',
    link: 'https://www.credly.com/badges/363b4966-c4d1-480f-b6c2-ce71b9c7ddf5/print'
  },
  {
    name: 'Cloud Computing (Top 5% in India)',
    issuer: 'NPTEL & IIT Kharagpur',
    year: '2024',
    level: 'Elite Silver',
    link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S105580332703877751'
  },
  {
    name: 'Prompt Engineering & Programming with OpenAI',
    issuer: 'Columbia University (COLUMBIA+)',
    year: '2025',
    level: 'Professional',
    link: 'https://badges.plus.columbia.edu/47239b1d-d790-4f49-9901-e6a156f8237b#acc.PzibpMqd'
  },
  {
    name: 'Blockchain Applications',
    issuer: 'NPTEL & IIT Kharagpur',
    year: '2025',
    level: 'Elite',
    link: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS08S64600226504209712'
  },
  {
    name: 'Gemini Certified University Student',
    issuer: 'Google Gemini',
    year: '2025',
    level: 'Specialized',
    link: 'https://edu.google.accredible.com/8e15cc88-d0f9-4c85-9731-a31a5e3d5046?key=e2dddbc1aef97b03143d482fbf92d9a076c578b7e6697c08ada84d7f711b77cf'
  },
  {
    name: 'Japanese Language Culture I',
    issuer: 'NPTEL & IIT Kanpur',
    year: '2023',
    level: 'Elite Silver',
    link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23HS120S63630138820060960'
  },
  {
    name: 'Japanese Language Culture II',
    issuer: 'NPTEL & IIT Kanpur',
    year: '2023',
    level: 'Elite Silver',
    link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23HS123S83630100020060960'
  },
  {
    name: 'Business Japanese & Business Manner (Top 5 in India)',
    issuer: 'NPTEL & IIT Madras',
    year: '2024',
    level: 'Elite Silver',
    link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24HS99S43580042202624814'
  },
  {
    name: 'Data Analytics with Python',
    issuer: 'NPTEL & IIT Roorkee',
    year: '2025',
    level: 'Elite Silver',
    link: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS17S124600250504209712'
  },
  {
    name: 'Programming in Java',
    issuer: 'NPTEL & IIT Kharagpur',
    year: '2024',
    level: 'Elite',
    link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S105630491630362764'
  },
  {
    name: 'Frontend Development',
    issuer: 'Great Learning',
    year: '2024',
    level: 'Professional',
    link: 'https://www.mygreatlearning.com/certificate/FRRTXWFA'
  },
  {
    name: 'Foundations of User Experience (UX) Design',
    issuer: 'Google (Coursera)',
    year: '2024',
    level: 'Professional',
    link: 'https://www.coursera.org/account/accomplishments/verify/SROBW748L210'
  },
  {
    name: 'English for Career Development',
    issuer: 'University of Pennsylvania',
    year: '2025',
    level: 'Professional',
    link: 'https://www.coursera.org/account/accomplishments/verify/5KRVHCUAWT4O'
  },
  {
    name: 'International B2B Marketing',
    issuer: 'Coursera',
    year: '2025',
    level: 'Professional',
    link: 'https://coursera.org/verify/507ECO233YVY'
  }
];

export const skills = {
  'Agentic Systems & AI': [
    'LangGraph & Multi-Agent Swarms',
    'GraphRAG & Semantic Knowledge Graphs',
    'FastAPI & Pydantic Validation',
    'ChromaDB, Pinecone & FAISS Vectors',
    'OpenAI Whisper & Streaming Audio AI',
    'Socratic Critic Self-Repair Loops',
    'Local LLMs (Ollama, HuggingFace)'
  ],
  'Full-Stack Architecture': [
    'Next.js 15 (App Router, SSR/SSG) & React 19',
    'TypeScript & Web Workers / Streams',
    'Shopify Liquid, Hydrogen & Storefront APIs',
    'Turborepo Monorepo Architecture',
    'WebSockets & Real-time Event Loops',
    'Node.js AST Parsing & AST Mutation',
    'TanStack Query & State Architecture',
    'Vanilla CSS System & Glassmorphism'
  ],
  'Cloud, DevOps & Data': [
    'AWS (EC2)',
    'Google Cloud Platform (GCP & Vertex AI)',
    'PostgreSQL, MongoDB & SQLite',
    'Redis (Distributed Cache & Rate Limiting)',
    'CI/CD Pipelines & GitHub Actions',
    'Vercel Edge Network & Serverless',
    'Core Web Vitals (CWV) & LCP Optimization'
  ],
  'Languages & Methodologies': [
    'Python & TypeScript / JavaScript',
    'Java & C',
    'SQL, Bash & Shell Scripting',
    'Kaizen Incremental Engineering',
    'RESTful & GraphQL API Standards',
    'Git Version Control & PR Workflows',
    'System Design & Technical Architecture'
  ]
};
