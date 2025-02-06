import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/solid';

const MarketPulse = ({ data }) => {
  return (
    <div className="neon-border p-4 rounded-lg bg-black/40">
      <h3 className="text-xl font-bold text-[#39ff14] mb-4">Market Pulse</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-[#39ff14]/10"
          >
            <div className="flex items-center space-x-2">
              {item.change >= 0 ? (
                <ArrowTrendingUpIcon className="h-5 w-5 text-[#39ff14]" />
              ) : (
                <ArrowTrendingDownIcon className="h-5 w-5 text-[#ff00ff]" />
              )}
              <span className="text-gray-300">{item.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[#00ffff] font-mono">{item.price}</span>
              <span className={item.change >= 0 ? 'text-[#39ff14]' : 'text-[#ff00ff]'}>
                {item.change >= 0 ? '+' : ''}{item.change}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketPulse