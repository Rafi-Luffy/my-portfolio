import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'NPTEL (IIT Ropar)',
      location: 'Remote',
      period: '2025 – Present',
      type: 'Internship',
      description: 'Developing AI-powered educational tools with focus on real-time poll generation from meeting transcripts using advanced ML models.',
      achievements: [
        'Developed core AI engine components to generate real-time polls from meeting transcripts using Whisper and LLMs',
        'Set up a modular monorepo with Turborepo and built cron-based transcript fetchers and poll generation pipelines',
        'Designed a feature-rich host dashboard for analytics, student performance, and meeting insights',
        'Optimized cloud infrastructure through auto-scaling and efficient resource provisioning'
      ]
    },
    {
      title: 'Class Representative',
      company: 'VVIT CSE Department',
      location: 'Guntur',
      period: 'Nov 2023 – Present',
      type: 'Academic Leadership',
      description: 'Serving as the primary liaison between students and faculty, ensuring effective communication and academic coordination.',
      achievements: [
        'Coordinating academic updates and student-faculty liaison tasks',
        'Managing events, feedback, and issue resolution for students',
        'Facilitating smooth communication between administration and students',
        'Leading academic initiatives and representing student interests in departmental meetings'
      ]
    },
    {
      title: 'Draft Head',
      company: 'ACM Student Chapter, VVIT',
      location: 'Guntur',
      period: 'Mar 2024 – Present',
      type: 'Technical Leadership',
      description: 'Leading content strategy, event management, and documentation for the ACM chapter, orchestrating major coding competitions and technical events.',
      achievements: [
        'Coordinated Spardha2K24 - a grand success with 6000+ participants, creating coding challenges',
        'Developed coding challenges for Aavega Technical Fest and authored technical reports/newsletters',
        'Managed team coordination, logistics, and structured event flow with technical teams',
        'Expert in documentation and Microsoft Office Suite with strong time management skills'
      ]
    },
    {
      title: 'Coordinator',
      company: 'Foreign Language Club, VVIT',
      location: 'Guntur',
      period: 'Nov 2023 – Present',
      type: 'Cultural Leadership',
      description: 'Organizing events promoting Japanese language and cultural exchange, fostering an inclusive student environment.',
      achievements: [
        'Organized cultural exchange events promoting Japanese language learning',
        'Managed logistics and communication for club activities',
        'Built inclusive environment for international cultural appreciation',
        'Facilitated cross-cultural understanding and language skill development'
      ]
    }
  ];

  const certifications = [
    // 1st row
    { 
      name: 'Google Cloud Data Analytics', 
      issuer: 'Google', 
      year: '2025', 
      level: 'Professional',
      link: 'https://www.credly.com/badges/edd1de30-cf84-4b83-b88f-99268fddf9d9'
    },
    { 
      name: 'AWS Academy Cloud Architect', 
      issuer: 'AWS', 
      year: '2024', 
      level: 'Professional',
      link: 'https://www.credly.com/badges/363b4966-c4d1-480f-b6c2-ce71b9c7ddf5/print'
    },
    { 
      name: 'Cloud Computing', 
      issuer: 'NPTEL', 
      year: '2024', 
      level: 'Elite Silver (Top 5%)',
      link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S105580332703877751'
    },
    
    // 2nd row
    { 
      name: 'Blockchain Applications', 
      issuer: 'NPTEL', 
      year: '2025', 
      level: 'Elite',
      link: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS08S64600226504209712'
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
      issuer: 'Coursera', 
      year: '2024', 
      level: 'Professional',
      link: 'https://www.coursera.org/account/accomplishments/verify/SROBW748L210'
    },
    
    // 3rd row
    { 
      name: 'Programming in Java', 
      issuer: 'NPTEL', 
      year: '2024', 
      level: 'Elite',
      link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S105630491630362764'
    },
    { 
      name: 'Data Analytics with Python', 
      issuer: 'NPTEL', 
      year: '2025', 
      level: 'Elite Silver',
      link: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS17S124600250504209712'
    },
    { 
      name: 'English for Career Development', 
      issuer: 'University of Pennsylvania (Coursera)', 
      year: '2025', 
      level: 'Professional',
      link: 'https://www.coursera.org/account/accomplishments/verify/5KRVHCUAWT4O'
    },
    
    // Last row - Japanese Language Courses
    { 
      name: 'Japanese Language Culture I', 
      issuer: 'NPTEL', 
      year: '2023', 
      level: 'Elite Silver',
      link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23HS120S63630138820060960'
    },
    { 
      name: 'Japanese Language Culture II', 
      issuer: 'NPTEL', 
      year: '2023', 
      level: 'Elite Silver',
      link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23HS123S83630100020060960'
    },
    { 
      name: 'Business Japanese & Business Manner', 
      issuer: 'NPTEL', 
      year: '2024', 
      level: 'Elite Silver',
      link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24HS99S43580042202624814'
    }
  ];

  const academicHighlight = {
    cgpa: '8.92',
    program: 'Computer Science & Engineering',
    university: 'Vasireddy Venkatadri Institute of Technology'
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building expertise through hands-on experience, leadership, and continuous learning
          </p>
        </motion.div>

        {/* Academic Achievement Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 p-8 rounded-2xl border border-blue-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  {academicHighlight.cgpa}
                </p>
                <p className="text-gray-300 text-sm">Current CGPA</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{academicHighlight.program}</p>
                <p className="text-gray-300 text-sm">Major</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">VVIT</p>
                <p className="text-gray-300 text-sm">Institution</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-slate-900"></div>
                
                <div className="ml-20 bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 w-full hover:border-slate-600 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <span className="inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm mb-4">
                    {exp.type}
                  </span>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-emerald-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            <Award className="inline-block mr-2 mb-1" size={28} />
            Professional <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Component = cert.link ? motion.a : motion.div;
              const extraProps = cert.link ? {
                href: cert.link,
                target: "_blank",
                rel: "noopener noreferrer"
              } : {};

              return (
                <Component
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: cert.link ? 1.02 : 1 }}
                  className={`bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 ${
                    cert.link ? 'cursor-pointer hover:shadow-lg hover:shadow-blue-500/25' : ''
                  }`}
                  {...extraProps}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold leading-tight flex-1">{cert.name}</h4>
                    {cert.link && (
                      <div className="ml-2 text-blue-400 opacity-70">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-sm">{cert.year}</p>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      cert.level === 'Elite Silver (Top 5%)' 
                        ? 'bg-gradient-to-r from-amber-400/30 to-orange-400/30 text-amber-200 border border-amber-400/50 shadow-lg shadow-amber-400/25'
                        : cert.level === 'Elite Silver' 
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        : cert.level === 'Elite'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                </Component>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
            <h3 className="text-xl font-semibold mb-4 text-white">Ready for New Challenges</h3>
            <p className="text-gray-300 mb-4">
              With a strong foundation in AI/ML, full-stack development, and proven leadership experience, 
              I'm actively seeking opportunities to contribute to innovative projects and drive technological advancement.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI/ML Engineering', 'Full-Stack Development', 'Cloud Architecture', 'Technical Leadership'].map((item) => (
                <span key={item} className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;