"use client";

import { motion } from "framer-motion";
import { GitBranch, FolderGit2 } from "lucide-react";

export function SlideD5_14() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-600/15 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-zinc-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 8</h2>
        <h1 className="text-6xl md:text-8xl font-display font-black text-white flex items-center justify-center gap-6">
          <GitBranch className="w-20 h-20" /> GITHUB
        </h1>
      </motion.div>

      <div className="z-10 text-center max-w-4xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-4xl text-emerald-400 font-display font-bold mb-16">
          "Where does code live?"
        </motion.p>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="bg-zinc-900/50 border border-zinc-700 p-8 rounded-3xl text-left">
            <FolderGit2 className="w-10 h-10 text-zinc-400 mb-6" />
            <p className="text-2xl font-bold text-white mb-4">Google Drive for Software</p>
            <p className="text-zinc-400">Code lives in GitHub. It becomes the ultimate source of truth.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 }} className="bg-zinc-900/50 border border-zinc-700 p-8 rounded-3xl text-left">
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-6">Who uses it?</p>
            <div className="flex flex-wrap gap-3">
              {["Google", "Spotify", "Netflix", "Uber", "Airbnb", "Everyone"].map((company, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-800 rounded-lg text-zinc-300 font-medium">{company}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
