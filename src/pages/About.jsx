import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  BoltIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/solid';

const stats = [
  { label: 'Market Events Analyzed', value: '1,000+' },
  { label: 'Years of Data', value: '25+' },
  { label: 'Market Insights', value: '10,000+' },
  { label: 'Global Markets Covered', value: '50+' }
];

const milestones = [
  { year: '2020', event: 'COVID-19 Market Crash Analysis' },
  { year: '2021', event: 'Meme Stock Trading Analysis' },
  { year: '2022', event: 'Crypto Market Decline Study' },
  { year: '2023', event: 'Banking Crisis Documentation' },
  { year: '2024', event: 'Bitcoin ETF Impact Analysis' },
  { year: '2025', event: 'AI Market Integration Study' }
];

function About() {
  const [hoveredMilestone, setHoveredMilestone] = React.useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto space-y-16"
    >
      <div className="text-center space-y-4">
        <motion.h1 
          className="text-6xl font-bold neon-text"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          About MindCrash
        </motion.h1>
        <p className="text-xl text-[#00ffff]">Monitoring Digital Market Chaos Since 2020</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="neon-border p-6 rounded-lg bg-black/40 text-center hover:bg-black/60 transition-all"
          >
            <div className="text-3xl font-bold text-[#39ff14] mb-2">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-border p-8 rounded-lg bg-black/40"
      >
        <div className="flex items-center space-x-4 mb-6">
          <RocketLaunchIcon className="w-8 h-8 text-[#39ff14]" />
          <h2 className="text-3xl font-bold text-[#39ff14]">Our Mission</h2>
        </div>
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-lg">
            MindCrash is at the forefront of market analysis, specializing in studying historical market events,
            digital asset trends, and technological impacts. Our platform leverages advanced data analytics
            to provide deep insights into market dynamics and historical patterns.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            We aggregate data from major exchanges, market providers, and financial news outlets to deliver
            comprehensive analysis of market trends and significant events, with a particular focus on
            technological disruption and digital transformation in financial markets.
          </p>
        </div>
      </motion.div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="neon-border p-6 rounded-lg bg-black/40 hover:bg-black/60 transition-all"
        >
          <DocumentChartBarIcon className="w-8 h-8 text-[#39ff14] mb-4" />
          <h3 className="text-xl font-bold text-[#39ff14] mb-2">Data-Driven Analysis</h3>
          <p className="text-gray-300">
            Comprehensive market analysis backed by robust data and advanced analytics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="neon-border p-6 rounded-lg bg-black/40 hover:bg-black/60 transition-all"
        >
          <ShieldCheckIcon className="w-8 h-8 text-[#39ff14] mb-4" />
          <h3 className="text-xl font-bold text-[#39ff14] mb-2">Market Integrity</h3>
          <p className="text-gray-300">
            Commitment to transparent and accurate market information
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="neon-border p-6 rounded-lg bg-black/40 hover:bg-black/60 transition-all"
        >
          <BoltIcon className="w-8 h-8 text-[#39ff14] mb-4" />
          <h3 className="text-xl font-bold text-[#39ff14] mb-2">Innovation Focus</h3>
          <p className="text-gray-300">
            Tracking technological disruption in financial markets
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-border p-8 rounded-lg bg-black/40"
      >
        <div className="flex items-center space-x-4 mb-6">
          <ClockIcon className="w-8 h-8 text-[#39ff14]" />
          <h2 className="text-3xl font-bold text-[#39ff14]">Our Timeline</h2>
        </div>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 relative cursor-pointer"
              onMouseEnter={() => setHoveredMilestone(index)}
              onMouseLeave={() => setHoveredMilestone(null)}
              whileHover={{ x: 10 }}
            >
              <div className="text-[#00ffff] font-bold w-16">{milestone.year}</div>
              <div className="flex-grow border-t border-[#00ffff]/20"></div>
              <div className="text-gray-300">{milestone.event}</div>
              <AnimatePresence>
                {hoveredMilestone === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-20 mt-2 p-4 bg-black/90 border border-[#00ffff] rounded-lg text-sm text-gray-300 z-10 w-64"
                  >
                    Detailed analysis and documentation of {milestone.event.toLowerCase()}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-border p-8 rounded-lg bg-black/40"
      >
        <div className="flex items-center space-x-4 mb-6">
          <UserGroupIcon className="w-8 h-8 text-[#39ff14]" />
          <h2 className="text-3xl font-bold text-[#39ff14]">Our Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#00ffff]">Market Analysis</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Technical and Fundamental Analysis</li>
              <li>• Digital Asset Evaluation</li>
              <li>• Market Sentiment Analysis</li>
              <li>• Risk Assessment</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#00ffff]">Technology Focus</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• AI/ML Market Applications</li>
              <li>• Blockchain Technology</li>
              <li>• Digital Transformation</li>
              <li>• Emerging Tech Trends</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-border p-8 rounded-lg bg-black/40 text-center"
      >
        <GlobeAltIcon className="w-8 h-8 text-[#39ff14] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-[#39ff14] mb-4">Connect With Us</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com/mindcrashsol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#39ff14] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://github.com/MindCrashOfficial/Mind-Crash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#39ff14] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"/>
            </svg>
          </a>
          <a
            href="https://mindcrashofficial.gitbook.io/mindcrashofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#39ff14] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;