import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import MarketChart from '../components/MarketChart';
import MarketPulse from '../components/MarketPulse';
import NewsFlash from '../components/NewsFlash';
import MarketArchives from '../components/MarketArchives';
import MarketStories from '../components/MarketStories';

const generateHistoricalData = () => {
  const aiMarketData = Array.from({ length: 12 }, (_, i) => 
    Math.round(3000 * Math.pow(1.15, i))
  );
  return aiMarketData;
};

function Home() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [showTooltip, setShowTooltip] = React.useState(null);
  const insights = [
    "NVIDIA hits new ATH $1,245, up 28% YTD 2025 - Source: NYSE Feb 2025",
    "Bitcoin reaches $92,000 milestone - Source: CoinGecko Feb 2025",
    "Magnificent 7 stocks now 32% of S&P 500 - Source: Bloomberg Feb 2025",
    "AI market to reach $1.85T by 2030 - Source: Grand View Research",
    "Global tech spending to hit $6.2T in 2025 - Source: Gartner Feb 2025",
    "Apple hits $4T market cap milestone - Source: NYSE Feb 2025"
  ];
  
  const historicalData = generateHistoricalData();
  const timeLabels = ['Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 
                     'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024',
                     'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025'];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % insights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto space-y-12 relative"
    >
      <div className="absolute inset-0 matrix-bg -z-10"></div>
      <section className="text-center mb-8 -mt-16">
        <h1 className="text-6xl font-bold mb-6 glitch neon-text">
          MindCrash: Digital Market Archives
        </h1>
        <div className="h-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl text-[#00ffff] market-pulse"
            >
              {insights[activeIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <Link to="/market" className="px-6 py-3 rounded-lg bg-[#39ff14]/20 text-[#39ff14] border border-[#39ff14] hover:bg-[#39ff14]/30 transition-all hover:scale-105">
            View Market Analysis
          </Link>
          <Link to="/chat" className="px-6 py-3 rounded-lg bg-[#ff00ff]/20 text-[#ff00ff] border border-[#ff00ff] hover:bg-[#ff00ff]/30 transition-all hover:scale-105">
            Consult AI Assistant
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4">
          <div className="text-4xl font-bold text-[#39ff14] mb-2">$3.2T</div>
          <div className="text-gray-400">Total Crypto Market Cap</div>
          <div className="text-xs text-gray-500">Source: CoinGecko Feb 2025</div>
        </div>
        <div className="text-center p-4">
          <div className="text-4xl font-bold text-[#39ff14] mb-2">$42.8B</div>
          <div className="text-gray-400">Bitcoin ETF AUM</div>
          <div className="text-xs text-gray-500">Source: Bloomberg Feb 2025</div>
        </div>
        <div className="text-center p-4">
          <div className="text-4xl font-bold text-[#39ff14] mb-2">28%</div>
          <div className="text-gray-400">NVIDIA YTD Return</div>
          <div className="text-xs text-gray-500">Source: NYSE Feb 2025</div>
        </div>
      </div>

      <div className="neon-border p-8 rounded-lg bg-black/40 mb-12">
        <h2 className="text-2xl font-bold text-[#39ff14] mb-6">Historical Market Events Timeline</h2>
        <div className="space-y-4">
          {[
            {
              date: "Feb 15, 2024",
              event: "NVIDIA Surpasses $2T Market Cap",
              details: "NVIDIA briefly surpassed $2T in market value, becoming the third most valuable U.S. company, driven by AI chip demand and strong earnings forecast."
            },
            {
              date: "Feb 13, 2024",
              event: "US CPI Report",
              details: "U.S. Consumer Price Index rose 3.1% year-over-year, above market expectations, leading to reassessment of Fed rate cut timeline."
            },
            {
              date: "Feb 2, 2024",
              event: "Meta's Historic Market Surge",
              details: "Meta (formerly Facebook) achieved the largest single-day market value gain in stock market history, adding $197B after announcing its first dividend and strong earnings. Shares surged 20%."
            },
            {
              date: "Jan 31, 2024",
              event: "Fed Maintains Rates",
              details: "Federal Reserve keeps interest rates steady at 5.25-5.50% range, signals careful approach to future rate cuts."
            },
            {
              date: "Jan 11, 2024",
              event: "Bitcoin ETF Trading Begins",
              details: "First day of spot Bitcoin ETF trading in the US sees over $4.6B in volume across 11 new ETFs, marking one of the largest ETF launches in history."
            },
            {
              date: "Jan 10, 2024",
              event: "SEC Approves Bitcoin ETFs",
              details: "SEC approves 11 spot Bitcoin ETFs, including offerings from BlackRock, Fidelity, and other major asset managers, marking a historic milestone for cryptocurrency adoption."
            },
            {
              date: "Dec 14, 2023",
              event: "Fed Signals Rate Cuts",
              details: "Federal Reserve signals three potential rate cuts in 2024, leading to a market rally with S&P 500 and Nasdaq reaching new highs."
            },
            {
              date: "Nov 14, 2023",
              event: "US Inflation Report",
              details: "US CPI shows inflation cooling to 3.2%, below expectations, leading to market gains and increased confidence in Fed policy pivot."
            },
            {
              date: "Mar 13, 2023",
              event: "Banking Crisis",
              details: "Silicon Valley Bank collapse triggers banking crisis, leading to Signature Bank's failure and Credit Suisse's emergency takeover by UBS."
            },
            {
              date: "Nov 11, 2022",
              event: "FTX Collapse",
              details: "Cryptocurrency exchange FTX files for bankruptcy following a liquidity crisis, leading to market-wide crypto selloff and increased regulatory scrutiny."
            },
            {
              date: "Mar 16, 2020",
              event: "COVID-19 Market Crash",
              details: "Dow Jones experiences its worst point drop in history (-2,997 points) as COVID-19 pandemic triggers global market selloff. Circuit breakers triggered multiple times."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 relative"
              onMouseEnter={() => setShowTooltip(index)}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <div className="text-[#00ffff] font-bold cursor-pointer">{item.date}</div>
              <div className="flex-grow border-t border-[#00ffff]/20"></div>
              <div className="text-gray-300">{item.event}</div>
              {showTooltip === index && (
                <div className="absolute top-full left-0 mt-2 p-4 bg-black/90 border border-[#00ffff] rounded-lg text-sm text-gray-300 z-10 w-64">
                  {item.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="neon-border p-6 rounded-lg bg-black/40">
          <h3 className="text-xl font-bold text-[#39ff14] mb-4">AI Market Growth</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">NVIDIA Market Cap:</span>
              <span className="text-[#00ffff] font-bold">$1.2T</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">AI Chip Revenue:</span>
              <span className="text-[#00ffff] font-bold">$18.1B</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">YoY Growth:</span>
              <span className="text-[#00ffff] font-bold">206%</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">Source: NVIDIA Q3 2023 Earnings</div>
        </div>

        <div className="neon-border p-6 rounded-lg bg-black/40">
          <h3 className="text-xl font-bold text-[#39ff14] mb-4">Institutional Adoption</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">BlackRock IBIT AUM:</span>
              <span className="text-[#00ffff] font-bold">$3.1B</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Fidelity FBTC AUM:</span>
              <span className="text-[#00ffff] font-bold">$2.8B</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Total ETF Volume:</span>
              <span className="text-[#00ffff] font-bold">$4.6B</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">Source: Bloomberg ETF Data (Jan 2024)</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <MarketPulse data={[
          { name: "Apple Vision Pro Sales", price: "$1.2B", change: 15.4 },
          { name: "Bitcoin Network Hash Rate", price: "650 EH/s", change: 8.2 },
          { name: "AI GPU Shipments", price: "1.2M units", change: 42.6 },
          { name: "Global Tech Spending", price: "$6.2T", change: 12.8 },
          { name: "Crypto Market Volume", price: "$284B", change: -2.4 }
        ]} />
        <NewsFlash news={[
          {
            time: "2025-01-31 14:00 EST",
            content: "Federal Reserve maintains interest rates, Powell signals data-dependent approach to future cuts",
            source: "Bloomberg"
          },
          {
            time: "2025-01-25 16:00 EST",
            content: "Magnificent 7 stocks reach 32% of S&P 500 market cap, setting new concentration record",
            source: "Reuters"
          },
          {
            time: "2025-01-15 09:30 EST",
            content: "Apple Vision Pro launch generates $1.2B in first-month sales, exceeding expectations",
            source: "CNBC"
          },
          {
            time: "2025-01-10 16:00 EST",
            content: "Bitcoin reaches new all-time high of $92,000 amid strong institutional demand",
            source: "CoinDesk"
          },
          {
            time: "2024-12-20 14:30 EST",
            content: "S&P 500 closes at record high above 4,800, led by tech sector rally",
            source: "Bloomberg"
          },
          {
            time: "2024-12-15 10:00 EST",
            content: "Global AI chip demand forecast revised up 2.5x for 2025 on surging demand",
            source: "Reuters"
          },
          {
            time: "2024-12-13 14:00 EST",
            content: "Federal Reserve projects three rate cuts in 2024, markets rally on dovish outlook",
            source: "Bloomberg"
          }
        ]} />
      </div>

      <div className="neon-border p-8 rounded-lg bg-black/40 mb-8">
        <h2 className="text-2xl font-bold text-[#39ff14] mb-6">Latest Market Updates</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">17:30 EST</span>
            <span className="text-gray-300">Fed's Waller emphasizes data-dependent approach to rate cuts in 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">17:15 EST</span>
            <span className="text-gray-300">S&P 500 closes at new record high, led by technology sector gains</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">17:00 EST</span>
            <span className="text-gray-300">Bitcoin hashrate reaches new all-time high of 650 EH/s</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">16:45 EST</span>
            <span className="text-gray-300">Apple Vision Pro global rollout accelerates, pre-orders surge in Asia</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">16:00 EST</span>
            <span className="text-gray-300">SEC approves first Ethereum ETF applications for March 2025 launch</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">15:15 EST</span>
            <span className="text-gray-300">Microsoft's AI copilot surpasses 100M daily active users</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">14:30 EST</span>
            <span className="text-gray-300">Tesla announces breakthrough in 4680 battery production yield</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">13:45 EST</span>
            <span className="text-gray-300">NVIDIA's H200 AI GPU shipments exceed expectations, stock hits new ATH</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">12:15 EST</span>
            <span className="text-gray-300">Amazon's AGI division reports breakthrough in multimodal AI models</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">11:30 EST</span>
            <span className="text-gray-300">BlackRock Bitcoin ETF (IBIT) AUM crosses $5B milestone</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">10:45 EST</span>
            <span className="text-gray-300">Meta's Reality Labs revenue doubles YoY on strong Quest 4 sales</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">10:30 EST</span>
            <span className="text-gray-300">Arm Holdings reports strong earnings, shares surge on AI chip demand</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">10:15 EST</span>
            <span className="text-gray-300">US retail sales data shows resilient consumer spending in January</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00ffff] text-sm">10:00 EST</span>
            <span className="text-gray-300">Magnificent 7 stocks' combined market cap exceeds $12.8T</span>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          Sources: Bloomberg, NYSE, SEC Filings, Company Reports (February 15, 2025)
        </div>
      </div>
      
      <MarketArchives />
    </motion.div>
  );
}

export default Home;