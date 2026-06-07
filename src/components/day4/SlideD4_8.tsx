"use client";

import { motion } from "framer-motion";
import { Blocks, Wrench, Server, Globe } from "lucide-react";

const categories = [
  { icon: Blocks, title: "Prototype Builders", color: "purple", tools: ["Bolt.new", "Lovable", "Firebase Studio", "Rocket.new", "Emergent"], accent: "from-purple-500/10 to-fuchsia-500/10", border: "border-purple-500/30", glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]" },
  { icon: Wrench, title: "Serious Dev Tools", color: "cyan", tools: ["Cursor", "Windsurf", "Claude Code", "Codex"], accent: "from-cyan-500/10 to-blue-500/10", border: "border-cyan-500/30", glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]" },
  { icon: Server, title: "Infrastructure", color: "emerald", tools: ["Supabase", "Firebase"], accent: "from-emerald-500/10 to-green-500/10", border: "border-emerald-500/30", glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]" },
  { icon: Globe, title: "Deployment", color: "amber", tools: ["Vercel"], accent: "from-amber-500/10 to-yellow-500/10", border: "border-amber-500/30", glow: "shadow-[0_0_30px_rgba(245,158,11,0.15)]" },
];
const colorMap: Record<string, string> = { purple: "text-purple-400", cyan: "text-cyan-400", emerald: "text-emerald-400", amber: "text-amber-400" };
const iconBg: Record<string, string> = { purple: "bg-purple-500/15 border-purple-500/30", cyan: "bg-cyan-500/15 border-cyan-500/30", emerald: "bg-emerald-500/15 border-emerald-500/30", amber: "bg-amber-500/15 border-amber-500/30" };

export function SlideD4_8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <h2 className="text-purple-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Real Builders Know Ecosystems</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">The Tool Universe</h1>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-6 z-10">
        {categories.map((cat, ci) => (
          <motion.div key={ci} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: ci * 0.2 }} className={`bg-gradient-to-br ${cat.accent} border ${cat.border} rounded-3xl p-7 ${cat.glow}`}>
            <div className="flex items-center gap-4 mb-5">
              <div className={`w-12 h-12 ${iconBg[cat.color]} border rounded-xl flex items-center justify-center`}>
                <cat.icon className={`w-6 h-6 ${colorMap[cat.color]}`} />
              </div>
              <p className={`text-xl font-display font-bold ${colorMap[cat.color]}`}>{cat.title}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.tools.map((tool, ti) => (
                <motion.div key={ti} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: ci * 0.2 + 0.3 + ti * 0.08 }} className="bg-black/30 border border-zinc-800 px-4 py-2 rounded-xl text-zinc-300 font-medium text-sm">
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="mt-8 z-10 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 px-10 py-5 rounded-2xl">
        <p className="text-2xl text-zinc-300 font-light text-center">"This is the <strong className="text-white font-bold">modern startup stack.</strong>"</p>
      </motion.div>
    </div>
  );
}
