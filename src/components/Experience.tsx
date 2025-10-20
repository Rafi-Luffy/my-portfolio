import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'DLED - IIT Ropar',
      location: 'Remote',
      period: 'May 2025 – July 2025',
      type: 'Internship',
      description: 'Developed AI-powered educational tools with focus on real-time poll generation from meeting transcripts using advanced ML models.',
      achievements: [
        'Built a full-stack AI system that converts speech into polls using Whisper, LangChain, WebSockets, and dual LLMs',
        'Architected scalable, modular microservices within a Turborepo monorepo; developed a real-time analytics dashboard with dynamic visualizations and secured NoSQL database integrations using MongoDB',
        'Optimized cloud infrastructure through auto-scaling and efficient resource provisioning',
        'Implemented cron-based transcript fetchers and poll generation pipelines'
      ]
    },
    {
      title: 'ACM Officer',
      company: 'VVIT ACM Student Chapter',
      location: 'Guntur',
      period: 'Apr 2024 – Apr 2025',
      type: 'Technical Leadership',
      description: 'Leading content strategy, event management, and documentation for the ACM chapter, orchestrating major coding competitions and technical events.',
      achievements: [
        'Led technical event management for flagship fest Spardha (6,500+ participants) with effective team coordination',
        'Coordinated Spardha2K24 - creating coding challenges and managing event logistics',
        'Managed documentation and communications using Microsoft Suite and Google Workspace tools',
        'Expert in technical report writing and structured event flow management'
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
        'Recognized with the Best Class Representative Award, formally presented by the Principal on Dec 31, 2024',
        'Coordinating academic updates and student-faculty liaison tasks',
        'Managing events, feedback, and issue resolution for students',
        'Leading academic initiatives and representing student interests in departmental meetings'
      ]
    },
    {
      title: '45-Day DSA Master Class',
      company: 'Prof. Pandurangeon (IIT Madras)',
      location: 'Online',
      period: 'May 2025 – July 2025',
      type: 'Advanced Training',
      description: 'Intensive daily 3-hour training sessions with Professor Pandurangeon, a living legend in Indian computer science and renowned expert from IIT Madras, focusing on advanced Data Structures and Algorithms.',
      achievements: [
        'Completed rigorous 135+ hours of advanced DSA training over 45 consecutive days',
        'Learned from a pioneering Indian computer scientist with decades of research excellence',
        'Gained deep expertise in complex algorithms, optimization techniques, and problem-solving patterns',
        'Applied learnings to competitive programming and real-world algorithmic challenges'
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
      name: 'Gemini Certified University Student', 
      issuer: 'Google Gemini', 
      year: '2025', 
      level: 'Professional',
      link: 'https://edu.google.accredible.com/8e15cc88-d0f9-4c85-9731-a31a5e3d5046?key=e2dddbc1aef97b03143d482fbf92d9a076c578b7e6697c08ada84d7f711b77cf'
    },
    
    // 2nd row
    { 
      name: 'Cloud Computing', 
      issuer: 'NPTEL', 
      year: '2024', 
      level: 'Elite Silver (Top 5%)',
      link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S105580332703877751'
    },
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
    
    // 3rd row
    { 
      name: 'Prompt Engineering & Programming with OpenAI', 
      issuer: 'Columbia University (COLUMBIA+)', 
      year: '2025', 
      level: 'Professional',
      link: 'https://badges.plus.columbia.edu/47239b1d-d790-4f49-9901-e6a156f8237b#acc.PzibpMqd'
    },
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
    
    // 4th row
    { 
      name: 'English for Career Development', 
      issuer: 'University of Pennsylvania (Coursera)', 
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
    },
    { 
      name: 'Foundations of User Experience (UX) Design', 
      issuer: 'Coursera', 
      year: '2024', 
      level: 'Professional',
      link: 'https://www.coursera.org/account/accomplishments/verify/SROBW748L210'
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
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <Award className="inline-block mr-2 mb-1" size={28} />
            Major <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Achievements</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-8 rounded-2xl border-2 border-amber-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏆</div>
                <div>
                  <h4 className="text-xl font-bold text-amber-300 mb-2">Google Agentic AI Hackathon Finalist</h4>
                  <p className="text-gray-300 mb-2">Advanced to the Grand Finale, selected from 57,000+ developers at the <strong>Google Cloud Agentic AI Day 2025</strong>—a Guinness World Record event by Google Cloud, Google Developers, and HackerSkill.</p>
                  <p className="text-blue-400 text-sm">2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border-2 border-green-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎖️</div>
                <div>
                  <h4 className="text-xl font-bold text-green-300 mb-2">Best Class Representative Award</h4>
                  <p className="text-gray-300 mb-2">Recognized for exemplary leadership and dedicated service to the student community, formally presented by the Principal on Dec 31, 2024.</p>
                  <p className="text-blue-400 text-sm">December 2024</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌟</div>
                <div>
                  <h4 className="text-xl font-bold text-blue-300 mb-2">Cross-Campus Leadership</h4>
                  <p className="text-gray-300 mb-2">Led multiple student organizations including Foreign Language Club (encouraging cultural exploration), ACM Chapter, and Class Representative duties.</p>
                  <p className="text-blue-400 text-sm">2023 - Present</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">🗾</div>
                <div>
                  <h4 className="text-xl font-bold text-purple-300 mb-2">Top 5 in Business Japanese NPTEL</h4>
                  <p className="text-gray-300 mb-2">Achieved top 5 ranking in Business Japanese course with only 23 certified participants, demonstrating exceptional language proficiency and cultural understanding.</p>
                  <p className="text-blue-400 text-sm">2024 • Elite Silver Medal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hackathons & Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-16">
            <Award className="inline-block mr-2 mb-1" size={32} />
            Hackathons & <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Competitions</span>
          </h3>
          
          <div className="space-y-12">
            {/* NASA Space Apps Challenge 2025 - MOST RECENT */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl border-2 border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side - Left */}
                <div className="h-[400px] md:h-[500px]">
                  <ImageCarousel
                    images={[
                      '/my-portfolio/Hackathon%20Pics/NASA%20Space%20Apps%20Challenge%202025/1.jpeg',
                      '/my-portfolio/Hackathon%20Pics/NASA%20Space%20Apps%20Challenge%202025/2.jpeg',
                      '/my-portfolio/Hackathon%20Pics/NASA%20Space%20Apps%20Challenge%202025/3.jpeg',
                      '/my-portfolio/Hackathon%20Pics/NASA%20Space%20Apps%20Challenge%202025/4.jpeg',
                      '/my-portfolio/Hackathon%20Pics/NASA%20Space%20Apps%20Challenge%202025/5.jpeg',
                      '/my-portfolio/Hackathon%20Pics/NASA%20Space%20Apps%20Challenge%202025/6.jpeg'
                    ]}
                    alt="NASA Space Apps Challenge"
                    borderColor="border-blue-500/50"
                  />
                </div>
                
                {/* Content Side - Right */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl md:text-3xl font-bold text-white">NASA Space Apps Challenge 2025</h4>
                  </div>
                  <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30 inline-block mb-4 w-fit font-semibold">
                    📅 October 2025
                  </span>
                  <p className="text-blue-400 font-medium mb-4 text-lg">📍 VIT - AP</p>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Developed <strong className="text-blue-400">"Project Chimera,"</strong> an advanced reasoning engine that leverages agentic AI and multi-persona Socratic debate to solve complex space science problems. This 48-hour event featured collaborative team work, context-aware analysis, and strict output validation. Judges praised our creative approach as highly innovative, noting that its use of agentic AI for real-world challenge solving stood out for technical rigor and originality.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Google Cloud Agentic AI Day 2025 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl border-2 border-amber-500/50 hover:border-amber-400/70 transition-all duration-300 overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content Side - Left */}
                <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <div className="mb-4">
                    <h4 className="text-2xl md:text-3xl font-bold text-amber-300 mb-2">Google Cloud Agentic AI Day 2025</h4>
                    <p className="text-amber-400 text-lg font-bold">🏆 Grand Finalist</p>
                  </div>
                  <span className="bg-amber-500/30 text-amber-200 px-4 py-2 rounded-full text-sm border border-amber-500/50 inline-block mb-4 w-fit font-bold">
                    📅 July 2025
                  </span>
                  <p className="text-amber-300/90 font-medium mb-4 text-base">🌍 Google Cloud • Guinness World Record Event</p>
                  <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                    <strong className="text-amber-300">Grand Finalist</strong> selected from <strong className="text-amber-400">57,000+ developers</strong> at the Guinness World Record breaking event by Google Cloud, Google Developers, and HackerSkill. Showcased advanced agentic AI solutions demonstrating cutting-edge implementation of multi-agent systems, autonomous reasoning, and production-ready AI architecture. Recognized for technical excellence and innovative approach to real-world AI challenges.
                  </p>
                </div>

                {/* Image Side - Right */}
                <div className="h-[400px] md:h-[500px] order-1 md:order-2">
                  <ImageCarousel
                    images={[
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/1.jpg',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/2.jpg',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/3.jpg',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/4.jpg',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/5.jpg',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/6.png',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/7.jpg',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/8.jpg',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/9.jpg',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/10.jpeg',
                      '/my-portfolio/Hackathon%20Pics/Agentic%20AI%20Post/11.jpg'
                    ]}
                    alt="Google Cloud Agentic AI Hackathon"
                    borderColor="border-amber-500/50"
                  />
                </div>
              </div>
            </motion.div>

            {/* Design Venture */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl border-2 border-slate-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side - Left */}
                <div className="h-[400px] md:h-[500px]">
                  <ImageCarousel
                    images={[
                      '/my-portfolio/Hackathon%20Pics/Design%20Venture/1.JPG',
                      '/my-portfolio/Hackathon%20Pics/Design%20Venture/2.JPG',
                      '/my-portfolio/Hackathon%20Pics/Design%20Venture/3.jpg',
                      '/my-portfolio/Hackathon%20Pics/Design%20Venture/4.jpg'
                    ]}
                    alt="Design Venture Competition"
                    borderColor="border-purple-500/50"
                  />
                </div>
                
                {/* Content Side - Right */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Design Venture</h4>
                  <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30 inline-block mb-4 w-fit font-semibold">
                    📅 March 2025
                  </span>
                  <p className="text-purple-400 font-medium mb-4 text-lg">📍 VVIT</p>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Built a collaborative project management platform for college teams, streamlining tasks, timelines, and workflows. Enabled real-time progress tracking, role assignment, and smart prioritization for projects. Promoted productivity and transparency in campus innovation challenges.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Anveeshana 2025 (Chittoor) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content Side - Left */}
                <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Anveeshana 2025 (Chittoor)</h4>
                  <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm border border-emerald-500/30 inline-block mb-4 w-fit font-semibold">
                    📅 January 2025
                  </span>
                  <p className="text-emerald-400 font-medium mb-4 text-base">📍 Agastya International Foundation, Kuppam</p>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    Our water management project used ML to recommend where to build dams and boost existing capacities. It enabled efficient allocation based on predictive data models. Presented at Anveeshana 2025, Chittoor—an event proudly sponsored by Samsung. Demonstrated its importance to future gen-students.
                  </p>
                </div>

                {/* Image Side - Right */}
                <div className="h-[400px] md:h-[500px] order-1 md:order-2">
                  <ImageCarousel
                    images={[
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/0.jpg',
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/1.jpg',
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/2.jpg',
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/4.jpg',
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/5.jpg',
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/6.jpg',
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/7.jpg',
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/9.jpg',
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/IMG_20250123_133647.jpg',
                      '/my-portfolio/Hackathon%20Pics/Anveeshana/IMG_20250124_121331_1.jpg'
                    ]}
                    alt="Anveeshana Water Management"
                    borderColor="border-emerald-500/50"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

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