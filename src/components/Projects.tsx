import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'PySan - Python Environment Visualizer',
      description: 'A crystal-clear view of your Python environment right in your browser. Built with React 19, TypeScript, and modern web tools for 100% client-side analysis.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React 19', 'TypeScript', 'Vite', 'TailwindCSS'],
      features: [
        'Visualize installed packages instantly',
        'Smart bloat analysis for optimization',
        'Removal recommendations with live code blocks',
        '100% client-side - your data never leaves your machine'
      ],
      links: {
        live: 'https://rafi-luffy.github.io/PySan',
        github: 'https://github.com/Rafi-Luffy/PySan'
      }
    },
    {
      title: 'AI Poll Generation System (IIT Ropar)',
      description: 'Real-time poll generation from meeting transcripts using Whisper AI and LLMs. Built with modular monorepo architecture and comprehensive analytics dashboard.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['MERN Stack', 'Whisper AI', 'LLMs', 'Turborepo', 'Cron Jobs'],
      features: [
        'Real-time transcript processing with Whisper AI',
        'Intelligent poll generation using custom LLMs',
        'Modular monorepo architecture with Turborepo',
        'Analytics dashboard for performance insights'
      ],
      links: {
        github: 'https://github.com/Rafi-Luffy'
      }
    },
    {
      title: 'Shortcut Sensei',
      description: 'A unique platform to help people master productivity shortcuts through gamified learning, combining smart design, quizzes, and community interaction.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Firebase', 'Node.js', 'TailwindCSS'],
      features: [
        'Interactive quiz system with 28+ applications',
        'Community leaderboards and achievements',
        'Personalized learning paths',
        'Real-time performance analytics'
      ],
      links: {
        github: 'https://github.com/Rafi-Luffy'
      }
    },
    {
      title: 'Memo no Sekai (メモの世界)',
      description: 'Secure note-taking web application with AES encryption and Google Drive sync, designed for privacy and seamless user experience.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['JavaScript', 'AES Encryption', 'Google Drive API', 'PWA'],
      features: [
        'End-to-end AES encryption for security',
        'Google Drive synchronization',
        'Offline-first PWA architecture',
        'Minimalist, distraction-free interface'
      ],
      links: {
        github: 'https://github.com/Rafi-Luffy/Memo-no-Sekai'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building solutions that combine purpose, innovation, and real-world impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Selector */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border-2 border-blue-500/50'
                    : 'bg-slate-800/80 border border-slate-700 hover:border-slate-600'
                }`}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description.slice(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {projects[selectedProject].title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {projects[selectedProject].description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                <ul className="space-y-2">
                  {projects[selectedProject].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-emerald-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-white">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {projects[selectedProject].links.live && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[selectedProject].links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-emerald-500 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                )}
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={projects[selectedProject].links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:border-gray-400 transition-all duration-300"
                >
                  <Github size={18} />
                  View Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;