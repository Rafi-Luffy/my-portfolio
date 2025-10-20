import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Shortcut Sensei',
      description: 'A unique platform to help people master productivity shortcuts through gamified learning, combining smart design, quizzes, and community interaction.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Firebase', 'HTML/CSS', 'Node.js'],
      features: [
        'Interactive quiz system with 2,300+ shortcuts',
        'Community leaderboards and achievements',
        'Personalized learning paths',
        'Real-time performance analytics'
      ],
      links: {
        live: 'https://shortcut-sensei-1305f.web.app/pages/user/login_page_firebase.html',
        github: 'https://github.com/Rafi-Luffy'
      }
    },
    {
      title: 'AI Poll Generation System',
      description: 'Real-time poll generation from meeting transcripts using Whisper AI and LLMs. Built with modular monorepo architecture and comprehensive analytics dashboard.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['MERN Stack', 'Whisper AI', 'LangChain', 'Turborepo', 'WebSockets', 'MongoDB'],
      features: [
        'Real-time transcript processing with Whisper AI',
        'Intelligent poll generation using LangChain and LLMs',
        'Modular monorepo architecture with Turborepo',
        'Analytics dashboard with dynamic visualizations'
      ],
      links: {
        github: 'https://github.com/Rafi-Luffy'
      }
    },
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
      title: 'Memo no Sekai (メモの世界)',
      description: 'Secure note-taking web application with AES encryption, designed for privacy and seamless user experience.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['JavaScript', 'AES Encryption', 'PWA', 'Local Storage'],
      features: [
        'End-to-end AES encryption for security',
        'Offline-first PWA architecture',
        'Minimalist, distraction-free interface',
        'Fast and lightweight performance'
      ],
      links: {
        github: 'https://github.com/Rafi-Luffy/Memo-no-Sekai'
      }
    },
    {
      title: 'DilSeDaan Blockchain Charity',
      description: 'Blockchain-based charity platform enabling transparent donations and impact tracking. Built with smart contracts for trustless charitable giving.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Blockchain', 'Smart Contracts', 'Solidity', 'Web3.js', 'React'],
      features: [
        'Transparent blockchain-based donation tracking',
        'Smart contract implementation for trustless transactions',
        'Real-time impact visualization and reporting',
        'Decentralized charity ecosystem'
      ],
      links: {
        github: 'https://github.com/Rafi-Luffy'
      }
    },
    {
      title: 'Project Chimera - Agentic AI for NASA Space Apps',
      description: 'Multi-agent AI system built for NASA Space Apps using Vertex AI Agent Builder and Gemini API. Features intelligent agent orchestration with Agent2Agent Protocol for space exploration assistance.',
      image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Vertex AI', 'Gemini API', 'Agent2Agent Protocol', 'Google Cloud', 'Multi-Agent Systems'],
      features: [
        'Multi-agent orchestration for space mission planning',
        'Agent2Agent Protocol implementation',
        'Real-time space data analysis and insights',
        'Intelligent workflow automation for NASA applications'
      ],
      links: {
        github: 'https://github.com/Rafi-Luffy'
      }
    },
    {
      title: 'Mana Arogyam - Healthcare Innovation',
      description: 'Healthcare bridge application connecting patients with resources. Impactful solution addressing critical healthcare accessibility challenges.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'Healthcare APIs', 'Database Integration'],
      features: [
        'Healthcare resource accessibility platform',
        'Patient-provider connection system',
        'Real-time healthcare data integration',
        'Impactful open-source contribution'
      ],
      links: {
        github: 'https://github.com/Rafi-Luffy'
      }
    }
  ];

  const [selectedProject, setSelectedProject] = useState(0);
  const [orderedProjects, setOrderedProjects] = useState<number[]>([]);

  // Initialize ordered projects on mount
  useEffect(() => {
    if (orderedProjects.length === 0) {
      setOrderedProjects(projects.map((_, index) => index));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
    
    // Reorder projects: move clicked project to top
    const newOrder = [index];
    for (let i = 0; i < projects.length; i++) {
      if (i !== index) {
        newOrder.push(i);
      }
    }
    setOrderedProjects(newOrder);
    
    // Scroll to top of projects section
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const headerOffset = 100;
        const elementPosition = projectsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const displayProjects = orderedProjects.length > 0 
    ? orderedProjects.map(index => projects[index])
    : projects;

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Project Selector */}
          <div className="space-y-4">
            {displayProjects.map((project, displayIndex) => {
              const originalIndex = orderedProjects[displayIndex];
              return (
              <motion.div
                key={`${project.title}-${displayIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: displayIndex * 0.05 }}
                onClick={() => handleProjectClick(originalIndex)}
                className={`project-card p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedProject === originalIndex
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
                
                {/* Show details inline on mobile/when selected */}
                {selectedProject === originalIndex && (
                  <div className="lg:hidden mt-6 pt-6 border-t border-slate-600">
                    <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-white">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="text-emerald-400 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
              );
            })}
          </div>

          {/* Project Details - Desktop Only, Sticky */}
          <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
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
      </div>
    </section>
  );
};

export default Projects;