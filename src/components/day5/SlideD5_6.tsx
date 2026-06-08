"use client";

import { motion } from "framer-motion";
import { Home, Eye, Settings, Database, Lock, Globe, Cpu } from "lucide-react";

const parts = [
  { icon: Eye, title: "Walls & Paint", tech: "Frontend", desc: "What users see", color: "emerald", delay: 1 },
  { icon: Settings, title: "Plumbing", tech: "Backend", desc: "Hidden machinery", color: "cyan", delay: 2 },
  { icon: Database, title: "Storage Room", tech: "Database", desc: "Where things are kept", color: "blue", delay: 3 },
  { icon: Lock, title: "Security System", tech: "Authentication", desc: "Who can enter", color: "purple", delay: 4 },
  { icon: Globe, title: "Land / Plot", tech: "Hosting", desc: "Where it exists", color: "orange", delay: 5 },
  { icon: Cpu, title: "Smart Assistant", tech: "AI", desc: "The intelligence", color: "fuchsia", delay: 6 },
];

export function SlideD5_6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 z-10">
        <Home className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 2</h2>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">The House Analogy</h1>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-3 gap-6 z-10 px-8">
        {parts.map((part, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: part.delay * 0.8 }}
            className={`bg-zinc-900/40 border border-${part.color}-500/20 p-8 rounded-3xl relative overflow-hidden group hover:border-${part.color}-500/50 transition-all`}>
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${part.color}-500/10 blur-[50px] -mr-10 -mt-10`} />
            <part.icon className={`w-10 h-10 text-${part.color}-400 mb-6`} />
            <p className="text-2xl font-display font-bold text-white mb-2">{part.title}</p>
            <p className="text-zinc-400 mb-6 font-light">{part.desc}</p>
            <div className={`inline-block px-4 py-2 bg-${part.color}-500/15 border border-${part.color}-500/30 rounded-xl`}>
              <span className={`text-${part.color}-300 font-mono font-bold text-sm uppercase tracking-wider`}>{part.tech}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
