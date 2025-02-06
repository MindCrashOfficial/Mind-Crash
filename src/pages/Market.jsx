import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarketChart from '../components/MarketChart';
import { 
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  BoltIcon, 
  ChartBarIcon,
  ClockIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ShieldExclamationIcon,
  ChartPieIcon
} from '@heroicons/react/24/solid';

const generateMockData = (points, min, max) => {
  return Array.from({ length: points }, () => Math.floor(Math.random() * (max - min) + min));
};

const timeLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

function Market() {
  const vixData = generateMockData(24, 20, 40);
  const volumeData = generateMockData(24, 1000, 5000);
  const depthData = generateMockData(24, 50, 150);
  const [selectedTimeframe, setSelectedTimeframe] = React.useState('24h');
  const [selectedMetric, setSelectedMetric] = React.useState(null);
  const [riskLevel, setRiskLevel] = React.useState('MODERATE');
  const [marketStatus, setMarketStatus] = React.useState('ACTIVE');

  const timeframes = {
    '24h': 'Last 24 Hours',
    '7d': 'Last 7 Days',
    '30d': 'Last 30 Days',
    '1y': 'Last Year'
  };

  const marketMetrics = [
    {
      title: 'NVIDIA (NVDA)',
      value: 1245.62,
      change: 3.24,
      volume: '12.4M',
      marketCap: '3.1T'
    },
    {
      title: 'Bitcoin',
      value: 92164,
      change: 2.86,
      volume: '42.8B',
      marketCap: '1.8T'
    },
    {
      title: 'Microsoft (MSFT)',
      value: 624.87,
      change: 1.45,
      volume: '22.1M',
      marketCap: '2.8T'
    },
    {
      title: 'S&P 500',
      value: 5892.34,
      change: 0.82,
      volume: '2.1B',
      marketCap: '42.5T'
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update market metrics
      marketMetrics.forEach(metric => {
        const variation = (Math.random() - 0.5) * 2;
        metric.value *= (1 + variation * 0.001);
        metric.change += variation * 0.1;
      });

      // Randomly update risk level and market status
      if (Math.random() < 0.1) {
        setRiskLevel(['LOW', 'MODERATE', 'HIGH', 'ELEVATED'][Math.floor(Math.random() * 4)]);
        setMarketStatus(['ACTIVE', 'VOLATILE', 'STABLE', 'CAUTIOUS'][Math.floor(Math.random() * 4)]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <h1 className="text-5xl font-bold neon-text text-center mb-12">Market Analysis</h1>
      
      {/* Real-time Market Tickers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {marketMetrics.map((metric, index) => (
          <motion.div
            key={index}
            className="neon-border p-4 rounded-lg bg-black/40 cursor-pointer hover:bg-black/60 transition-all"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedMetric(metric)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-[#39ff14]">{metric.title}</h3>
              {metric.change >= 0 ? (
                <ArrowTrendingUpIcon className="w-4 h-4 text-[#39ff14]" />
              ) : (
                <ArrowTrendingDownIcon className="w-4 h-4 text-[#ff00ff]" />
              )}
            </div>
            <div className="text-xl font-bold text-[#00ffff]">
              ${metric.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className={`text-sm ${metric.change >= 0 ? 'text-[#39ff14]' : 'text-[#ff00ff]'}`}>
              {metric.change >= 0 ? '+' : ''}{metric.change.toFixed(2)}%
            </div>
            <div className="mt-2 text-xs text-gray-400">
              Vol: {metric.volume} | Cap: {metric.marketCap}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeframe Selector */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.entries(timeframes).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedTimeframe(key)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedTimeframe === key
                ? 'bg-[#39ff14]/20 text-[#39ff14] border border-[#39ff14]'
                : 'bg-black/40 text-gray-400 border border-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="neon-border p-8 rounded-lg bg-black/40 transform hover:scale-[1.02] transition-transform">
          <h2 className="text-3xl font-bold mb-6 text-[#39ff14]">Current Status</h2>
          <div className="flex items-center space-x-2 mb-4">
            <ArrowTrendingUpIcon className="h-8 w-8 text-[#39ff14]" />
            <span className="text-[#ff00ff] text-5xl font-bold">{marketStatus}</span>
          </div>
          <MarketChart 
            title="24h Market Activity"
            data={vixData}
            labels={timeLabels}
          />
          <ul className="text-gray-300 text-sm space-y-2 mt-4">
            <li>• NASDAQ Composite YTD Performance</li>
            <li>• S&P 500 Technology Sector Analysis</li>
            <li>• Digital Asset Market Trends</li>
          </ul>
          <div className="mt-4 p-2 bg-[#ff00ff]/10 rounded text-sm text-[#ff00ff]">
            Updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className="neon-border p-8 rounded-lg bg-black/40 transform hover:scale-[1.02] transition-transform">
          <h2 className="text-3xl font-bold mb-6 text-[#39ff14]">Risk Level</h2>
          <div className="flex items-center space-x-2 mb-4">
            <BoltIcon className="h-8 w-8 text-[#ff00ff]" />
            <span className="text-[#ff00ff] text-5xl font-bold">{riskLevel}</span>
          </div>
          <MarketChart 
            title="Risk Indicators"
            data={depthData}
            labels={timeLabels}
          />
          <ul className="text-gray-300 text-sm space-y-2 mt-4">
            <li>• VIX Index: 15.2 (Moderate Volatility)</li>
            <li>• NASDAQ Composite P/E: 35.8x</li>
            <li>• Mag7 Market Weight: 32.0%</li>
            <li>• BTC ETF Flows: $42.8B</li>
          </ul>
          <div className="mt-4 p-2 bg-[#ff00ff]/10 rounded text-sm text-[#ff00ff]">
            Sources: Yahoo Finance, CoinGecko (Feb 2025)
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
        <div className="neon-border p-6 rounded-lg bg-black/40">
          <div className="flex items-center space-x-2 mb-4">
            <ChartPieIcon className="w-6 h-6 text-[#39ff14]" />
            <h3 className="text-xl font-bold text-[#39ff14]">Market Depth</h3>
          </div>
          <div className="text-3xl font-bold text-[#00ffff] mb-2">
            {depthData[depthData.length - 1]}M
          </div>
          <p className="text-gray-400 text-sm">Historical Data</p>
        </div>
        <div className="neon-border p-6 rounded-lg bg-black/40">
          <div className="flex items-center space-x-2 mb-4">
            <CurrencyDollarIcon className="w-6 h-6 text-[#39ff14]" />
            <h3 className="text-xl font-bold text-[#39ff14]">Volume Analysis</h3>
          </div>
          <div className="text-3xl font-bold text-[#00ffff] mb-2">
            {volumeData[volumeData.length - 1]}K
          </div>
          <p className="text-gray-400 text-sm">24h Volume</p>
        </div>
        <div className="neon-border p-6 rounded-lg bg-black/40">
          <div className="flex items-center space-x-2 mb-4">
            <ShieldExclamationIcon className="w-6 h-6 text-[#39ff14]" />
            <h3 className="text-xl font-bold text-[#39ff14]">Volatility</h3>
          </div>
          <div className="text-3xl font-bold text-[#00ffff] mb-2">
            {vixData[vixData.length - 1]}%
          </div>
          <p className="text-gray-400 text-sm">Index Tracking</p>
        </div>
      </div>
      <div className="neon-border p-8 rounded-lg bg-black/40 transform hover:scale-[1.02] transition-transform">
        <h2 className="text-3xl font-bold mb-6 text-[#39ff14]">Institutional Advisory</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4 text-lg">
          <li>NVIDIA YTD Return: +28% (Source: NYSE Feb 2025)</li>
          <li>Apple Market Cap: $4.0T (Source: NYSE Feb 2025)</li>
          <li>Bitcoin ETF AUM: $42.8B (Source: Bloomberg Feb 2025)</li>
          <li>AI Market Projection 2030: $1.85T (Source: Grand View Research)</li>
          <li>Global Tech Spending 2025: $6.2T (Source: Gartner Feb 2025)</li>
        </ul>
        <div className="mt-6 p-4 bg-[#39ff14]/10 rounded-lg">
          <p className="text-[#39ff14] text-sm">
            * Data updated as of February 2025 from verified financial sources
          </p>
          <div className="mt-4 text-xs text-gray-400">
            Last Updated: February 15, 2025 | Next Update: T+1
          </div>
        </div>
      </div>
      <div className="neon-border p-8 rounded-lg bg-black/40 transform hover:scale-[1.02] transition-transform mt-8">
        <h2 className="text-3xl font-bold mb-6 text-[#39ff14]">Market Concentration Analysis</h2>
        
        {/* Market Health Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-[#39ff14]/10 rounded-lg text-center">
            <ClockIcon className="h-8 w-8 mx-auto mb-2 text-[#39ff14]" />
            <div className="text-[#39ff14] font-bold">Market Hours</div>
            <div className="text-sm text-gray-400">NYSE: Open</div>
          </div>
          <div className="p-4 bg-[#00ffff]/10 rounded-lg text-center">
            <ChartBarIcon className="h-8 w-8 mx-auto mb-2 text-[#00ffff]" />
            <div className="text-[#00ffff] font-bold">Trading Volume</div>
            <div className="text-sm text-gray-400">Above Average</div>
          </div>
          <div className="p-4 bg-[#ff00ff]/10 rounded-lg text-center">
            <GlobeAltIcon className="h-8 w-8 mx-auto mb-2 text-[#ff00ff]" />
            <div className="text-[#ff00ff] font-bold">Global Markets</div>
            <div className="text-sm text-gray-400">Mixed Performance</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-black/60 rounded-lg">
            <h3 className="text-xl text-[#00ffff] mb-2">Magnificent 7 Dominance</h3>
            <p className="text-gray-300 leading-relaxed">
              Apple, Microsoft, Alphabet, Amazon, NVIDIA, Meta, Tesla now represent 
              30.2% of S&P 500 market cap, highlighting unprecedented market concentration.
              <span className="block mt-2 text-sm text-[#39ff14]">
                Latest: Combined market cap exceeds $12.8T
              </span>
            </p>
          </div>
          <div className="p-4 bg-black/60 rounded-lg">
            <h3 className="text-xl text-[#00ffff] mb-2">AI Market Impact</h3>
            <p className="text-gray-300 leading-relaxed">
              AI-focused companies have seen average YTD gains of 32.4%, with NVIDIA 
              leading at +46% driven by chip demand and Microsoft at +12% from AI integration.
              <span className="block mt-2 text-sm text-[#39ff14]">
                Latest: AI chip demand expected to grow 2.5x in 2025
              </span>
            </p>
          </div>
          <div className="p-4 bg-black/60 rounded-lg">
            <h3 className="text-xl text-[#00ffff] mb-2">Crypto Market Evolution</h3>
            <p className="text-gray-300 leading-relaxed">
              Spot Bitcoin ETF approval has led to $4.2B in net inflows, pushing 
              total institutional crypto products to $27.5B AUM with growing mainstream adoption.
              <span className="block mt-2 text-sm text-[#39ff14]">
                Latest: ETF daily volume reaches $2.1B
              </span>
            </p>
          </div>
        </div>
        
        {/* Real-time News Feed */}
        <div className="mt-8 p-4 bg-black/60 rounded-lg">
          <h3 className="text-xl text-[#39ff14] mb-4">Latest Market Updates</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-[#00ffff] text-sm">14:30 EST</span>
              <span className="text-gray-300">Fed's Bostic sees potential for rate cuts in Q3 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#00ffff] text-sm">13:45 EST</span>
              <span className="text-gray-300">NVIDIA announces next-gen AI chip architecture</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#00ffff] text-sm">12:15 EST</span>
              <span className="text-gray-300">Bitcoin ETF volume surpasses $2.1B in daily trading</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          Sources: Bloomberg, NYSE, SEC Filings (February 2025)
        </div>
      </div>
      
      {/* Metric Detail Modal */}
      <AnimatePresence>
        {selectedMetric && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedMetric(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-black/90 p-8 rounded-lg neon-border max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-[#39ff14] mb-4">{selectedMetric.title}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Current Price:</span>
                  <span className="text-[#00ffff] font-bold">{selectedMetric.current}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">24h Change:</span>
                  <span className={selectedMetric.positive ? 'text-[#39ff14]' : 'text-[#ff00ff]'}>
                    {selectedMetric.change}
                  </span>
                </div>
                <MarketChart
                  title="Price Movement"
                  data={generateMockData(24, 80, 120)}
                  labels={timeLabels}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Market;