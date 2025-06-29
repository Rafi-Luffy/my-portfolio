import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'AI/ML Engineer',
    'Full-Stack Developer', 
    'Innovation Architect',
    'Technical Leader'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'S.B.M.Rafi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Show a brief notification
    console.log('Resume download initiated');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative inline-block"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 p-1">
              <img
                src="/rafi_pic.png"
                alt="S.B.M. Rafi"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full flex items-center justify-center"
            >
              ⚡
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              Hey, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                Rafi
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-400 h-8"
            >
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-medium">
                {roles[currentRole]}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A passionate Computer Science student with <span className="text-yellow-400 font-medium">8.92 CGPA</span>, 
              currently interning at <span className="text-blue-400 font-medium">IIT Ropar</span>. 
              I specialize in <span className="text-emerald-400 font-medium">AI/ML</span>, 
              <span className="text-purple-400 font-medium"> full-stack development</span>, and 
              <span className="text-blue-400 font-medium"> technical leadership</span>.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              <div className="bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
                <span className="text-blue-400 font-semibold">IIT Ropar</span> Intern
              </div>
              <div className="bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
                <span className="text-emerald-400 font-semibold">8.92</span> CGPA
              </div>
              <div className="bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
                <span className="text-purple-400 font-semibold">9+</span> Certifications
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Mail size={20} />
              Let's Connect
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="border border-gray-600 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:border-gray-400 transition-all duration-300"
            >
              <Download size={20} />
              Resume
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;