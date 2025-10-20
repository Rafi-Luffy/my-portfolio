import { motion } from 'framer-motion';
import { Rocket, Target, Lightbulb, Globe, Zap } from 'lucide-react';

const WhatsNext = () => {
  const goals = [
    {
      icon: <Rocket size={32} />,
      title: '2026 Roles',
      description: 'Actively seeking SWE/AI/ML engineering positions and internships for 2026, bringing hands-on experience in agentic AI, cloud infrastructure, and full-stack development.'
    },
    {
      icon: <Target size={32} />,
      title: 'Agentic AI & System Design',
      description: 'Deep diving into agentic AI systems, multi-agent orchestration, and scalable cloud architecture to build the next generation of intelligent applications.'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Cloud Infrastructure',
      description: 'Expanding expertise in Google Cloud Platform, system design patterns, and building resilient, high-performance distributed systems.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Vision',
      description: 'Leveraging cross-cultural skills and Japanese business fluency to contribute to international teams and global innovation initiatives.'
    }
  ];

  return (
    <section id="whats-next" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What's <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Next</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Looking ahead to 2026 and beyond—building the future, one innovation at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                {goal.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {goal.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Project Phoenix - Upcoming Research Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 p-8 rounded-2xl border border-orange-500/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-orange-400" size={36} />
            <h3 className="text-3xl font-bold text-white">Project Phoenix</h3>
            <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/40">
              Research in Progress
            </span>
          </div>
          
          <p className="text-xl font-semibold text-orange-300 mb-4">
            A Framework for Agentic AI Self-Correction
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Problem Statement</h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                Current Agentic AI systems suffer from <span className="text-orange-400 font-medium">paradigmatic brittleness</span> with static agent logic, 
                making them vulnerable to catastrophic failures in novel scenarios. The core challenge is transitioning these systems 
                from static, brittle tools into <span className="text-emerald-400 font-medium">dynamic, anti-fragile agents</span> capable of autonomous self-healing and adaptation.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Innovation</h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                Phoenix introduces a <span className="text-blue-400 font-medium">closed-loop self-correction framework</span> where an Observer module detects failures, 
                a Critic & Programmer core generates corrective patches using LLMs, validation occurs in a secure Gauntlet, 
                and Integration performs runtime "hot-swapping" of flawed code—fostering <span className="text-purple-400 font-medium">emergent resilience</span>.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Research Objectives</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <p className="text-gray-300 text-sm">Build baseline agent & failure environment for rigorous evaluation</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <p className="text-gray-300 text-sm">Engineer Observer, Programmer, Sandbox, and Integration modules</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <p className="text-gray-300 text-sm">Construct secure Validation Gauntlet using containerization</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <p className="text-gray-300 text-sm">Validate efficacy through repair rate, time-to-fix, regression metrics</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <p className="text-gray-300 text-sm">Introduce meta-learning knowledge base for accelerated repairs</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <p className="text-gray-300 text-sm">Publish research paper and production-ready prototype</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-4">Technical Foundation</h4>
            <div className="space-y-3 mb-4">
              <div>
                <p className="text-blue-400 font-medium text-sm mb-1">Base Research Papers</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">
                    Self-Refine (NeurIPS 2023)
                  </span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30">
                    Tree of Thoughts (ICML 2023)
                  </span>
                </div>
              </div>
              <div>
                <p className="text-purple-400 font-medium text-sm mb-1">Core Technologies</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">LangChain</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">Multi-Agent Systems</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">Reinforcement Learning</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">Meta-Learning</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">Docker Containerization</span>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">Runtime Metaprogramming</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm italic">
              Building on Self-Refine and Tree of Thoughts frameworks, Phoenix extends these concepts into a 
              production-grade platform with persistent memory, advanced error recovery, and autonomous multi-agent coordination—
              achieving 100% autonomy without human feedback loops.
            </p>
          </div>
        </motion.div>

        {/* Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 p-8 rounded-2xl border border-blue-500/30 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Beyond the Code</h3>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            In my free time, I enjoy playing badminton, reading comics, and watching anime. 
            To further improve my Japanese, I often immerse myself in Japanese voices and media—blending 
            my love for tech with cultural exploration. I believe in bringing personal flavor, humility, 
            and high performance to everything I do, embracing the philosophy of <span className="text-emerald-400 font-medium italic">kaizen</span> (continuous improvement) 
            in both my professional and personal journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsNext;
