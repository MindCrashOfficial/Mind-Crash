import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import { marketArchivesPart1 } from '../data/marketArchivesPart1';
import { marketArchivesPart2 } from '../data/marketArchivesPart2';
import { marketArchivesPart3 } from '../data/marketArchivesPart3';
import { marketArchivesPart4 } from '../data/marketArchivesPart4';
import { marketArchivesPart5 } from '../data/marketArchivesPart5';
import { marketArchivesPart6 } from '../data/marketArchivesPart6';
import { marketArchivesPart7 } from '../data/marketArchivesPart7';
import { marketArchivesPart8 } from '../data/marketArchivesPart8';
import { marketArchivesPart9 } from '../data/marketArchivesPart9';
import { marketArchivesPart10 } from '../data/marketArchivesPart10';
import { marketArchivesPart11 } from '../data/marketArchivesPart11';
import { marketArchivesPart12 } from '../data/marketArchivesPart12';

const STORIES_PER_PAGE = 10;
const allStories = [
  ...marketArchivesPart1,
  ...marketArchivesPart2,
  ...marketArchivesPart3,
  ...marketArchivesPart4,
  ...marketArchivesPart5,
  ...marketArchivesPart6,
  ...marketArchivesPart7,
  ...marketArchivesPart8,
  ...marketArchivesPart9,
  ...marketArchivesPart10,
  ...marketArchivesPart11,
  ...marketArchivesPart12
];

const MarketArchives = () => {
  const [visibleStories, setVisibleStories] = useState(STORIES_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      const nextBatch = visibleStories + STORIES_PER_PAGE;
      setVisibleStories(nextBatch);
      setHasMore(nextBatch < allStories.length);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#39ff14] mb-4">Market Archives</h2>
        <p className="text-gray-400">Exploring the lighter side of market history - Over 100 stories and counting!</p>
      </div>

      <AnimatePresence>
        {allStories.slice(0, visibleStories).map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="neon-border p-8 rounded-lg bg-black/40"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#39ff14]">{category.category}</h2>
            <div className="space-y-6">
              {category.stories.map((story, storyIndex) => (
                <motion.div
                  key={storyIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: storyIndex * 0.1 }}
                  className="p-4 bg-black/60 rounded-lg hover:bg-black/80 transition-colors"
                >
                  <h3 className="text-xl text-[#00ffff] mb-2">{story.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {story.content}
                    <span className="block mt-2 text-sm text-[#39ff14]">
                      Source: {story.source}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {hasMore && (
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="group relative px-8 py-4 bg-black/40 rounded-lg border border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14]/10 transition-all flex items-center space-x-2 mx-auto"
          >
            {isLoading ? (
              <ArrowPathIcon className="w-5 h-5 animate-spin" />
            ) : (
              <ArrowDownCircleIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            )}
            <span>{isLoading ? 'Loading Archives...' : `Load More (${allStories.length - visibleStories} remaining)`}</span>
          </button>
        </motion.div>
      )}
      
      {!hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 py-8"
        >
          You've reached the end of our archives... for now!
        </motion.div>
      )}
    </div>
  );
};

export default MarketArchives;