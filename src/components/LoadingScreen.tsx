import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState('');
  const fullText = 'Initializing Portfolio...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setLoadingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-slate-700 border-t-blue-500 rounded-full mx-auto mb-8"
        />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            S.B.M. Rafi
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 font-mono"
        >
          {loadingText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;