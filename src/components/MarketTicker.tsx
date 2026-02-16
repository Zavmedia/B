import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

interface MarketData {
  index: string;
  value: number;
  change: number;
  changePercent: number;
}

export const MarketTicker = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { index: "NIFTY 50", value: 24857.30, change: 234.50, changePercent: 0.95 },
    { index: "SENSEX", value: 82890.94, change: 692.27, changePercent: 0.84 },
    { index: "BANK NIFTY", value: 53234.85, change: -156.30, changePercent: -0.29 },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const [marketNews] = useState([
    "🇮🇳 Nifty 50 maintains momentum as FII activity surges",
    "💰 Gold futures hit fresh highs amid global uncertainty",
    "📊 Banking stocks lead market gains on strong credit growth",
    "💱 Dollar Index stabilizes as Fed signals policy pause",
    "⚡ Indian markets outperform Asian peers on domestic strength",
    "🌏 EUR/USD trades sideways ahead of ECB meeting",
    "💹 Sensex inches closer to 86,000 milestone",
    "🔥 USD/JPY volatility increases on BOJ policy speculation",
    "📈 Silver futures surge on industrial demand outlook",
    "🎯 Bank Nifty shows resilience amid rate cycle expectations",
  ]);

  const fetchMarketData = async () => {
    try {
      console.log('Fetching real-time market data...');

      const { data, error } = await supabase.functions.invoke('fetch-market-data', {
        body: {},
      });

      if (error) {
        console.error('Error fetching market data:', error);
        return;
      }

      if (data?.success && data?.data) {
        console.log('Market data updated successfully');
        setMarketData(data.data);
        setLastUpdate(new Date());
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Failed to fetch market data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchMarketData();

    // Refresh every 60 seconds (Yahoo Finance has rate limits)
    const interval = setInterval(() => {
      fetchMarketData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-slate-950 via-navy-dark to-slate-950 border-y border-secondary/20 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-primary/5 to-secondary/5 animate-pulse" />

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent animate-shimmer" />

      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Live Indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-red-500"
            />
            <span className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
              <Activity size={14} className="animate-pulse" />
              {isLoading ? 'Loading...' : 'Live Market Data'}
            </span>
          </div>
          {lastUpdate && (
            <span className="text-xs text-muted-foreground">
              Updated: {lastUpdate.toLocaleTimeString()}
            </span>
          )}
        </div>

        {/* Market Indices - Auto Scrolling */}
        <div className="relative mb-6 overflow-hidden">
          <div className="flex gap-4 animate-scroll hover:[animation-play-state:paused] cursor-pointer">
            {[...marketData, ...marketData, ...marketData, ...marketData].map((item, index) => (
              <motion.div
                key={`${item.index}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index % marketData.length) * 0.1 }}
                className={`flex-shrink-0 rounded-xl px-6 py-4 min-w-[240px] backdrop-blur-md border-2 transition-all duration-300 ${item.change >= 0
                    ? "bg-green-500/5 border-green-500/20 hover:border-green-500/40 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                    : "bg-red-500/5 border-red-500/20 hover:border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                  }`}
              >
                <div className="text-xs font-bold text-secondary/70 mb-1 uppercase tracking-wider">
                  {item.index}
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-2xl font-black text-white tracking-tight">
                    {item.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <div className={`flex items-center gap-1 text-sm font-bold ${item.change >= 0 ? "text-green-400" : "text-red-400"
                    }`}>
                    {item.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    <span>{Math.abs(item.changePercent).toFixed(2)}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Market News Ticker - Infinite Scroll */}
        <div className="relative overflow-hidden rounded-lg bg-navy-dark/50 backdrop-blur-sm border border-border/20 py-3">
          <div className="flex gap-12 animate-scroll">
            {[...marketNews, ...marketNews, ...marketNews].map((news, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-foreground/90 font-medium whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-cyan animate-pulse" />
                <span>{news}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </div>
  );
};
