import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const generateVariation = (baseValue, maxVariationPercent = 0.1) => {
  const variation = (Math.random() * 2 - 1) * (baseValue * maxVariationPercent);
  return baseValue + variation;
};

const formatPrice = (price) => {
  return price >= 1000 
    ? `$${Math.round(price).toLocaleString()}`
    : `$${price.toFixed(2)}`;
};

const formatChange = (change) => {
  const formattedChange = Math.abs(change).toFixed(2);
  const arrow = change >= 0 ? "▲" : "▼";
  const color = change >= 0 ? "#39ff14" : "#ff00ff";
  return { text: `${arrow} ${formattedChange}%`, color };
};

const MarketTicker = () => {
  const [tickerData, setTickerData] = useState('');
  const [baseData] = useState([
    { symbol: "NVDA", basePrice: 1245.62, baseChange: 3.24, volatility: 0.15 },
    { symbol: "BTC", basePrice: 92164, baseChange: 2.86, volatility: 0.2 },
    { symbol: "AAPL", basePrice: 198.45, baseChange: 0.82, volatility: 0.08 },
    { symbol: "MSFT", basePrice: 624.87, baseChange: 1.45, volatility: 0.1 },
    { symbol: "META", basePrice: 485.12, baseChange: 1.92, volatility: 0.12 },
    { symbol: "SPX", basePrice: 5892.34, baseChange: 0.82, volatility: 0.05 },
    { symbol: "COMP", basePrice: 18456.24, baseChange: 1.12, volatility: 0.07 },
    { symbol: "ETH", basePrice: 3892.45, baseChange: 2.14, volatility: 0.18 }
  ]);

  useEffect(() => {
    const updateTicker = () => {
      const updatedData = baseData.map(item => {
        const price = generateVariation(item.basePrice, item.volatility);
        const change = generateVariation(item.baseChange, item.volatility * 2);
        const formattedPrice = formatPrice(price);
        const { text: changeText, color } = formatChange(change);
        
        return `<span style="color: ${color}">${item.symbol} ${formattedPrice} ${changeText}</span>`;
      });

      // Add static market data
      updatedData.push(
        `<span style="color: #00ffff">Total Crypto Cap $${(3.2 + Math.random() * 0.1 - 0.05).toFixed(2)}T</span>`,
        `<span style="color: #00ffff">BTC ETF AUM $${(42.8 + Math.random() * 0.4 - 0.2).toFixed(1)}B</span>`,
        `<span style="color: #00ffff">AI Market Cap $${(1.85 + Math.random() * 0.05 - 0.025).toFixed(2)}T</span>`,
        `<span style="color: ${Math.random() > 0.5 ? "#39ff14" : "#ff00ff"}">VIX ${(13.8 + Math.random() * 0.4 - 0.2).toFixed(1)} ${Math.random() > 0.5 ? "▲" : "▼"} ${(2.1 + Math.random() * 0.2 - 0.1).toFixed(1)}%</span>`
      );

      setTickerData(updatedData.join(" • "));
    };

    // Initial update
    updateTicker();

    // Update every 2 seconds
    const interval = setInterval(updateTicker, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-8 bg-black/50 backdrop-blur-sm overflow-hidden flex items-center">
      <div className="relative">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="whitespace-nowrap inline-block"
        >
          <span className="font-mono text-sm" dangerouslySetInnerHTML={{ __html: tickerData + " " + tickerData }} />
        </motion.div>
      </div>
    </div>
  );
};

export default MarketTicker;