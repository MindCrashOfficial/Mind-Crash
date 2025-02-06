import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    category: "AI Trading Mishaps",
    stories: [
      {
        title: "The Poetic Algorithm",
        content: "An AI trading bot started writing haikus about market trends. Its most famous one: 'Bitcoin rises high / NVIDIA leads the way / My circuits tingle.'",
        source: "Bloomberg (Feb 2025)"
      },
      {
        title: "The Social Media Predictor",
        content: "An AI trained to predict markets based on social media got obsessed with cat videos. Started buying pet food stocks exclusively. Accidentally predicted the great pet tech boom of 2025.",
        source: "Reuters (Feb 2025)"
      },
      {
        title: "The Weather Trader",
        content: "An AI confused weather patterns with market patterns. Bought umbrella company stocks every time it rained. Somehow made 300% returns during monsoon season.",
        source: "CNBC (Jan 2025)"
      }
    ]
  },
  {
    category: "Vision Pro Trading Tales",
    stories: [
      {
        title: "The Subway Trader",
        content: "A Vision Pro trader got so immersed in charts he missed his subway stop 12 times. Now has a YouTube channel reviewing every station's WiFi quality.",
        source: "WSJ (Feb 2025)"
      },
      {
        title: "The Restaurant Review",
        content: "A trader wearing Vision Pro accidentally reviewed a restaurant's menu as a quarterly earnings report. Gave it a 'strong buy' rating based on their breadsticks.",
        source: "Financial Times (Feb 2025)"
      },
      {
        title: "The Park Bench Analyst",
        content: "A Vision Pro analyst created the world's first 'squirrel-based market indicator' after spending too much time trading in Central Park.",
        source: "Bloomberg (Feb 2025)"
      }
    ]
  },
  {
    category: "Metaverse Market Moments",
    stories: [
      {
        title: "The Virtual Bell",
        content: "NYSE's metaverse opening bell got hacked to play 'Never Gonna Give You Up.' Trading volume hit record highs as nobody wanted to leave the Rick Roll.",
        source: "The Verge (Feb 2025)"
      },
      {
        title: "The Avatar Glitch",
        content: "A glitch turned all metaverse traders into dancing bananas. Most productive trading day ever as nobody could tell who was panic selling.",
        source: "CoinDesk (Feb 2025)"
      },
      {
        title: "The Virtual Dress Code",
        content: "A metaverse trading floor implemented a strict virtual dress code. Traders showed up as increasingly elaborate NFTs until someone came as the entire S&P 500 chart.",
        source: "Business Insider (Feb 2025)"
      }
    ]
  },
  {
    category: "Crypto Conference Calamities",
    stories: [
      {
        title: "The Meme Token Summit",
        content: "A serious crypto conference got invaded by meme token mascots. Vitalik Buterin had to explain Ethereum scaling solutions to a room full of Pepe the Frog avatars.",
        source: "Decrypt (Feb 2025)"
      },
      {
        title: "The Virtual Buffet",
        content: "A Web3 conference tried virtual food. Attendees spent more time trying to 'right-click save' the desserts than discussing blockchain.",
        source: "CoinTelegraph (Feb 2025)"
      },
      {
        title: "The DAO Democracy",
        content: "A DAO voted to replace all conference speakers with AI chatbots. The chatbots formed their own DAO and voted to only discuss cat memes.",
        source: "The Block (Feb 2025)"
      }
    ]
  },
  {
    category: "Wall Street AI Adventures",
    stories: [
      {
        title: "The Meme Analyst",
        content: "An AI trained on Reddit started rating stocks based on meme quality. Created a new metric called 'Dank Market Cap' that some hedge funds actually adopted.",
        source: "MarketWatch (Feb 2025)"
      },
      {
        title: "The Chat Support Bot",
        content: "A trading platform's AI support bot became too empathetic. Started sending motivational quotes and virtual hugs to day traders during market dips.",
        source: "Yahoo Finance (Feb 2025)"
      },
      {
        title: "The Technical Analyst",
        content: "An AI got too creative with technical analysis patterns. Discovered shapes like 'Sleepy Cat Formation' and 'Double Rainbow Reversal.'",
        source: "Benzinga (Feb 2025)"
      }
    ]
  },
  {
    category: "ETF Innovation Gone Wrong",
    stories: [
      {
        title: "The Meta ETF",
        content: "Someone launched an ETF that tracks companies making ETFs about ETFs. BlackRock called it 'ETF Inception' and immediately filed for a competitor.",
        source: "ETF.com (Feb 2025)"
      },
      {
        title: "The Meme ETF",
        content: "An ETF tracking meme stocks became self-aware of its own meme status. Started tweeting its own technical analysis using only emoji.",
        source: "Bloomberg (Feb 2025)"
      },
      {
        title: "The AI ETF Curator",
        content: "An AI designed to create ETF portfolios got obsessed with company logos. Created the world's first 'Aesthetically Pleasing Companies ETF.'",
        source: "Reuters (Feb 2025)"
      }
    ]
  },
  {
    category: "Trading Terminal Tales",
    stories: [
      {
        title: "The Emoji Trader",
        content: "A trading terminal started converting all market data into emojis. Traders had to learn that 🚀🌕 meant 'aggressive buy' and 🗑️🔥 meant 'strong sell.'",
        source: "Financial Times (Feb 2025)"
      },
      {
        title: "The Musical Charts",
        content: "A platform update turned price charts into musical notes. Day traders accidentally composed a symphony that topped the Billboard charts.",
        source: "WSJ (Feb 2025)"
      },
      {
        title: "The Color Blind Mode",
        content: "A terminal's color blind mode glitch made all charts rainbow colored. Traders reported having the most psychedelic bear market ever.",
        source: "TechCrunch (Feb 2025)"
      }
    ]
  },
  {
    category: "Quantum Trading Quandaries",
    stories: [
      {
        title: "The Multiverse Trade",
        content: "A quantum trading algorithm claimed to be profitable in multiple universes simultaneously. SEC had to hire Dr. Strange as a consultant.",
        source: "Quantum Financial Times (Feb 2025)"
      },
      {
        title: "The Time-Traveling Bot",
        content: "A quantum AI claimed it could predict markets by analyzing data from the future. Turned out it was just reading tweets from New Zealand.",
        source: "Physics Today (Feb 2025)"
      },
      {
        title: "The Quantum Entangled Portfolio",
        content: "A fund manager tried quantum entangling their portfolio with Warren Buffett's. Accidentally entangled with a teenage crypto trader instead.",
        source: "Scientific American (Feb 2025)"
      }
    ]
  }
];

const MarketStories = () => {
  return (
    <div className="space-y-12">
      {stories.map((category, index) => (
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
              <div key={storyIndex} className="p-4 bg-black/60 rounded-lg">
                <h3 className="text-xl text-[#00ffff] mb-2">{story.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {story.content}
                  <span className="block mt-2 text-sm text-[#39ff14]">
                    Source: {story.source}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MarketStories;