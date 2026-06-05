"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, MessageSquare, Brain, Lightbulb } from "lucide-react";

const team = [
  { name: "Perplexity", role: "Research Department", icon: Search, color: "text-violet-400", glow: "rgba(139,92,246,0.3)", border: "border-violet-500/30", bg: "bg-violet-500/5" },
  { name: "Google Trends", role: "Market Pulse", icon: TrendingUp, color: "text-green-400", glow: "rgba(34,197,94,0.3)", border: "border-green-500/30", bg: "bg-green-500/5" },
  { name: "Reddit", role: "Customer Voice", icon: MessageSquare, color: "text-orange-400", glow: "rgba(249,115,22,0.3)", border: "border-orange-500/30", bg: "bg-orange-500/5" },
  { name: "Claude", role: "Investor", icon: Brain, color: "text-amber-400", glow: "rgba(245,158,11,0.3)", border: "border-amber-500/30", bg: "bg-amber-500/5" },
  { name: "ChatGPT", role: "Strategy Team", icon: Lightbulb, color: "text-cyan-400", glow: "rgba(6,182,212,0.3)", border: "border-cyan-500/30", bg: "bg-cyan-500/5" },
];

export function SlideD2_7() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.08),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Your Arsenal</h2>
        <h1 className="text-5xl md:text-6xl font-display font-black text-white">Meet Your AI Startup Team</h1>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 z-10 w-full max-w-7xl">
        {team.map((member, i) => {
          const Icon = member.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 200 }}
              className={`w-[280px] ${member.bg} border ${member.border} rounded-[2rem] p-8 flex flex-col items-center text-center relative overflow-hidden group cursor-default`}
              style={{ boxShadow: `0 0 40px ${member.glow}20` }}
              whileHover={{ scale: 1.04, boxShadow: `0 0 60px ${member.glow}` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10 bg-black/40`}
                style={{ boxShadow: `0 0 30px ${member.glow}` }}
              >
                <Icon className={`w-10 h-10 ${member.color}`} />
              </div>
              <h3 className={`text-3xl font-display font-bold mb-2 relative z-10 ${member.color}`}>{member.name}</h3>
              <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest relative z-10">{member.role}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
