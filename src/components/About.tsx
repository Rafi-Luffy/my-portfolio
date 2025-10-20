import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: 'Innovation',
      description: 'I focus on building cutting-edge solutions that solve real problems with clean, scalable architecture.'
    },
    {
      icon: <Users size={24} />,
      title: 'Leadership',
      description: 'I excel at taking ownership, leading teams, and turning complex ideas into actionable solutions.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Learning',
      description: 'I continuously explore new technologies, pushing boundaries and staying ahead of industry trends.'
    },
    {
      icon: <Code size={24} />,
      title: 'Impact',
      description: 'I choose projects that drive meaningful change, solve critical issues, and create lasting value.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Future</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Hey! I'm <span className="text-blue-400 font-medium">Shaik Balaji Mahammad Rafi</span> from Sattenapalli—a town famous for its Limestones. Recently completed my internship at <span className="text-blue-400 font-medium">IIT Ropar</span>, where I built AI-powered systems for real-time poll generation using Whisper and LLMs.
            </p>
            <p>
              I was recently selected as a <span className="text-emerald-400 font-medium">Grand Finalist at Google Agentic AI Hackathon 2025</span>—a Guinness World Record event. I specialize in agentic AI, full-stack development, and blockchain innovations, with hands-on experience building impactful solutions.
            </p>
            <p>
              As <span className="text-emerald-400 font-medium">Class Representative</span>, <span className="text-purple-400 font-medium">ACM Draft Head</span>, and <span className="text-blue-400 font-medium">Foreign Language Club Coordinator</span>, I've led teams while maintaining an <span className="text-yellow-400 font-medium">8.92 CGPA</span>. My fluency in <span className="text-purple-400 font-medium">Japanese language and business culture</span> enables me to work effectively in global teams.
            </p>
            <p>
              I love blending curiosity, code, and <span className="text-emerald-400 font-medium">kaizen</span> to create innovative solutions that make a difference.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 p-8 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  8.92
                </div>
                <p className="text-gray-300 font-medium">Current CGPA</p>
                <p className="text-gray-400 text-sm">Academic Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  9+
                </div>
                <p className="text-gray-300 font-medium">Certifications</p>
                <p className="text-gray-400 text-sm">Including Elite Silver</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  4+
                </div>
                <p className="text-gray-300 font-medium">Leadership Roles</p>
                <p className="text-gray-400 text-sm">Active Positions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;