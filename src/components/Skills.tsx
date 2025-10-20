import { motion } from 'framer-motion';
import { Code2, Palette, Brain, Cloud, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'HTML/CSS']
    },
    {
      title: 'Frontend & Mobile',
      icon: Palette,
      skills: ['React 19', 'Vite', 'TailwindCSS', 'Flutter', 'Node.js', 'Express.js']
    },
    {
      title: 'AI/ML & LLMs',
      icon: Brain,
      skills: ['Vertex AI', 'Gemini API', 'OpenAI', 'LangChain', 'Whisper', 'Vertex AI Vision', 'Prompt Engineering']
    },
    {
      title: 'Cloud & Backend',
      icon: Cloud,
      skills: ['Google Cloud Platform', 'Firebase', 'GCP Cloud Functions', 'BigQuery', 'Looker Studio', 'Spring Boot']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'Firebase/Firestore', 'MySQL', 'NoSQL']
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: ['Docker', 'CI/CD', 'Git/GitHub', 'Turborepo', 'API Integration', 'System Design']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions from concept to deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-7 h-7 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-blue-500/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-500/30 hover:to-emerald-500/30 hover:border-blue-400/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
            <h3 className="text-xl font-semibold mb-4 text-white">Language & Cultural Expertise</h3>
            <p className="text-gray-300 mb-4">
              Fluent in <span className="text-emerald-400 font-medium">Japanese language</span> and 
              <span className="text-blue-400 font-medium"> business culture</span>, enabling effective collaboration in global environments
            </p>
            <div className="flex flex-wrap gap-3">
              {['Business Japanese', 'Cultural Fluency', 'International Collaboration', 'Cross-cultural Communication'].map((item) => (
                <span key={item} className="bg-slate-700 px-3 py-2 rounded-full text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-xl font-semibold mb-4 text-white">Core Competencies</h3>
            <p className="text-gray-300 mb-4">
              Specialized in building <span className="text-blue-400 font-medium">AI-powered applications</span> with 
              <span className="text-emerald-400 font-medium"> scalable architectures</span> and modern development practices
            </p>
            <div className="flex flex-wrap gap-3">
              {['AI Integration', 'Full-Stack Development', 'Performance Optimization', 'System Design'].map((item) => (
                <span key={item} className="bg-blue-500/20 border border-blue-500/30 text-blue-300 px-3 py-2 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Proficiency Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Ready to Contribute
              </h4>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-4xl mx-auto">
              With <span className="text-blue-400 font-semibold">hands-on experience</span> in modern development stacks, 
              <span className="text-emerald-400 font-semibold"> cutting-edge AI/ML implementations</span>, and 
              <span className="text-purple-400 font-semibold"> proven academic excellence</span> (8.92 CGPA), 
              I bring both technical depth and innovative thinking to every project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="text-blue-400 font-semibold text-sm mb-1">Immediate Impact</div>
                <div className="text-gray-300 text-xs">Practical experience ready from day one</div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                <div className="text-emerald-400 font-semibold text-sm mb-1">Continuous Learning</div>
                <div className="text-gray-300 text-xs">Always exploring new tech and methodologies</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <div className="text-purple-400 font-semibold text-sm mb-1">Global Perspective</div>
                <div className="text-gray-300 text-xs">Bilingual with cross-cultural understanding</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;