import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState('');
  const fullText = 'Initializing Portfolio...';
  const [showKonnichiwa, setShowKonnichiwa] = useState(true);

  useEffect(() => {
    // Show Konnichiwa for 1.5 seconds then switch to loading text
    const konichhiwaTimer = setTimeout(() => {
      setShowKonnichiwa(false);
      
      // Start typing animation after Konnichiwa disappears
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setLoadingText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 80);

      return () => clearInterval(interval);
    }, 1500);

    return () => clearTimeout(konichhiwaTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center z-50"
    >
      <div className="text-center relative">
        {/* Animated circles in background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -z-10"
        >
          <div className="w-32 h-32 border-4 border-blue-500/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-48 h-48 border-4 border-emerald-500/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Main spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-slate-700 border-t-blue-500 border-r-emerald-500 rounded-full mx-auto mb-8 shadow-lg shadow-blue-500/50"
        />
        
        {showKonnichiwa ? (
          // Japanese Konnichiwa with wave animation
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              こんにちは
            </span>
          </motion.h1>
        ) : (
          // Name appears after Konnichiwa
          <>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Rafi.S.B.M
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 font-mono text-lg"
            >
              {loadingText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.p>
          </>
        )}

        {/* Floating particles */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-10 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute -bottom-10 right-1/4 w-2 h-2 bg-emerald-400 rounded-full blur-sm"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;