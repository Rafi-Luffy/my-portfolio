import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('EfVzb_vj_Gl41lalV');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      // EmailJS configuration
      const serviceID = 'service_4c7oyv1';
      const templateID = 'template_etibhz8';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Rafi',
        reply_to: formData.email,
      };

      const result = await emailjs.send(serviceID, templateID, templateParams);
      console.log('EmailJS Success:', result);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);

    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setErrorMessage(`Failed to send message: ${error?.text || error?.message || 'Unknown error'}`);
      setShowError(true);
      setTimeout(() => setShowError(false), 8000);
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 's.b.m.rafi01@gmail.com',
      href: 'mailto:s.b.m.rafi01@gmail.com'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rafi-s-b-m',
      href: 'https://www.linkedin.com/in/rafi-s-b-m/'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/Rafi-Luffy',
      href: 'https://github.com/Rafi-Luffy'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss new opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm currently available for new opportunities and collaborations. 
                Whether you have a project in mind, want to discuss technology, or just want to connect, 
                I'm always excited to meet like-minded individuals.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                >
                  <div className="text-blue-400 group-hover:text-emerald-400 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 p-6 rounded-2xl border border-blue-500/30"
            >
              <h4 className="text-white font-semibold mb-2">Current Status</h4>
              <p className="text-gray-300">
                🚀 Currently interning at IIT Ropar working on AI-powered educational tools
              </p>
              <p className="text-gray-300 mt-2">
                💡 Open to full-time opportunities in AI/ML Engineering, Cloud Architecture, and Full-Stack Development
              </p>
              <p className="text-gray-300 mt-2">
                🎓 Maintaining 8.92 CGPA while actively building innovative projects
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-slate-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
            </motion.div>

            {/* Success Message - appears below the form */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ y: 30, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 30, opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="mx-auto w-fit bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <CheckCircle size={18} className="text-white" />
                    </motion.div>
                    <div className="text-left">
                      <motion.h3 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg font-bold text-white"
                      >
                        Thank You!
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/90 text-sm"
                      >
                        Message sent successfully. I'll get back to you soon!
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Message - appears below the form */}
            <AnimatePresence>
              {showError && (
                <motion.div
                  initial={{ y: 30, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 30, opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="mx-auto w-fit bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <AlertCircle size={18} className="text-white" />
                    </motion.div>
                    <div className="text-left">
                      <motion.h3 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg font-bold text-white"
                      >
                        Oops!
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/90 text-sm"
                      >
                        {errorMessage}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-slate-700"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-8 py-4 bg-slate-900 rounded-lg leading-none flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  S.B.M. RAFI
                </span>
                <span className="ml-3 text-lg">✨</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 • Where innovation meets execution
            </p>
            <p className="text-gray-500 text-xs italic">
              "Building tomorrow's solutions today"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;