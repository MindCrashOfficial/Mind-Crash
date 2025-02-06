import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BoltIcon } from '@heroicons/react/24/solid';

const NewsFlash = ({ news }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [news.length]);

  return (
    <div className="neon-border p-4 rounded-lg bg-black/40">
      <div className="flex items-center space-x-2 mb-4">
        <BoltIcon className="h-6 w-6 text-[#ff00ff]" />
        <h3 className="text-xl font-bold text-[#39ff14]">Breaking Market News</h3>
      </div>
      <div className="h-24 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0"
          >
            <div className="text-[#00ffff] font-bold mb-2">{news[currentIndex].time}</div>
            <p className="text-gray-300">{news[currentIndex].content}</p>
            <div className="text-xs text-gray-500 mt-2">Source: {news[currentIndex].source}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewsFlash