"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket } from "lucide-react";

const reasons = ["Visualize", "Prototype", "Test", "Learn Fast"];
const upcoming = ["Cursor", "Antigravity", "AI IDEs", "Supabase", "Vercel", "Deployment", "Real Features"];

export function SlideD3_20() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-14 z-10 items-start">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <div className="w-20 h-20 bg-orange-500/20 border border-orange-500/30 rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(249,115,22,0.3)]">
            <Rocket className="w-10 h-10 text-orange-400" />
          </div>
          <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Your Tool Today</h2>
          <h1 className="text-5xl md:text-6xl font-display font-black text-white leading-tight mb-10">Why We Are Using Bolt Today</h1>

          <div className="space-y-4 mb-10">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.15 }} className="flex items-center gap-4 bg-orange-500/10 border border-orange-500/30 p-5 rounded-2xl">
                <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <span className="text-xl text-white font-semibold">{r}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="bg-zinc-900 border border-zinc-700 p-5 rounded-2xl">
            <p className="text-zinc-400 text-lg">But Real Startup Building Starts Later.</p>
          </motion.div>
        </motion.div>

        {/* Upcoming tools */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-[#110900] border border-orange-900/40 rounded-3xl p-8">
          <p className="text-orange-500/60 font-mono text-xs uppercase tracking-widest mb-8">Upcoming Arsenal</p>
          <div className="space-y-3">
            {upcoming.map((tool, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.1 }} className="flex items-center gap-4 bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-orange-500/40 flex-shrink-0" />
                <span className="text-xl text-zinc-400 font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-8 bg-orange-500/10 border border-orange-500/30 p-5 rounded-2xl text-center">
            <p className="text-orange-300 font-bold text-lg">🔥 This is what's coming. Stay excited.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
