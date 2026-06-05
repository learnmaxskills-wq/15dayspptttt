"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, Brain, MessageSquare } from "lucide-react";

export function Slide12() {
  const tools = [
    { name: "Perplexity AI", mode: "Deep Research Mode", icon: Search, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20", desc: "Searches the live internet, reads actual sources, and gives you cited, real-time research answers like a professional firm." },
    { name: "Google Trends", mode: "Market Sizing", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", desc: "Shows exactly how many people are searching for your problem. Rising trend = growing market. Flat = saturated." },
    { name: "Claude", mode: "Strategic Analysis", icon: Brain, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", desc: "Your strategic thinking partner. Interprets data, identifies gaps, and stress-tests assumptions like a senior investor." },
    { name: "Reddit & Quora", mode: "Customer Mining", icon: MessageSquare, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", desc: "The exact unfiltered words real people use to describe their frustration. This becomes your marketing copy." },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <div className="text-center mb-16 z-10">
        <h2 className="text-orange-500 font-mono tracking-widest text-sm uppercase mb-4">22:00 – 26:00 | Startup Lesson 2</h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">The Research Stack</h1>
        <p className="text-xl text-zinc-400 mt-4">Tools that would cost ₹10 lakh to hire a firm for. Yours for free.</p>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div key={tool.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} className={`group ${tool.bg} border ${tool.border} rounded-3xl p-8 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 relative overflow-hidden`}>
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-2xl bg-black/50 ${tool.color}`}><Icon className="w-8 h-8" /></div>
                <div>
                  <h3 className="text-3xl font-display font-bold mb-1">{tool.name}</h3>
                  <p className={`font-mono text-sm tracking-widest uppercase mb-4 ${tool.color}`}>{tool.mode}</p>
                  <p className="text-zinc-300 text-lg leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
