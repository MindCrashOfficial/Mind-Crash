import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, 2500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.img
              src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1738855782/a467cf9b-d62e-40e1-9d5c-2ee8e684b4a4-modified_ltowmk.png"
              alt="MindCrash Logo"
              className="w-48 h-48 object-contain drop-shadow-[0_0_25px_rgba(57,255,20,0.5)] animate-pulse"
              initial={{ filter: 'brightness(0)' }}
              animate={{ filter: 'brightness(1)' }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: '0 0 40px rgba(57,255,20,0.4), 0 0 80px rgba(255,0,255,0.3), 0 0 120px rgba(0,255,255,0.2)',
              }}
            />
            <motion.div
              className="absolute -inset-4 border border-[#39ff14] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute -inset-8 border border-[#ff00ff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            <motion.div
              className="absolute -inset-12 border border-[#00ffff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.div
              className="absolute -inset-16 border border-[#39ff14] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            />
            <motion.div
              className="absolute -inset-20 border border-[#ff00ff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            />
            <motion.div
              className="absolute -inset-24 border border-[#00ffff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.div
              className="absolute -inset-28 border border-[#39ff14] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
            />
            <motion.div
              className="absolute -inset-32 border border-[#ff00ff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.9 }}
            />
            <motion.div
              className="absolute -inset-36 border border-[#00ffff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.1 }}
            />
            <motion.div
              className="absolute -inset-40 border border-[#39ff14] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.3 }}
            />
            <motion.div
              className="absolute -inset-44 border border-[#ff00ff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
            <motion.div
              className="absolute -inset-48 border border-[#00ffff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
            />
            <motion.div
              className="absolute -inset-52 border border-[#39ff14] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.9 }}
            />
            <motion.div
              className="absolute -inset-56 border border-[#ff00ff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 3.1 }}
            />
            <motion.div
              className="absolute -inset-60 border border-[#00ffff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 3.3 }}
            />
            <motion.div
              className="absolute -inset-64 border border-[#39ff14] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 3.5 }}
            />
            <motion.div
              className="absolute -inset-68 border border-[#ff00ff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 3.7 }}
            />
            <motion.div
              className="absolute -inset-72 border border-[#00ffff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 3.9 }}
            />
            <motion.div
              className="absolute -inset-76 border border-[#39ff14] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 4.1 }}
            />
            <motion.div
              className="absolute -inset-80 border border-[#ff00ff] rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 4.3 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;