"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";

export function SlideD8_5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#000a12] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-4xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-28 h-28 bg-emerald-500/15 border-2 border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(16,185,129,0.3)]">
          <Database className="w-14 h-14 text-emerald-400" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-emerald-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Meet The Engine</motion.h2>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="text-7xl md:text-[100px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 leading-none mb-12">SUPABASE</motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="text-3xl text-zinc-300 font-light mb-12 leading-relaxed">
          "Building a backend from scratch used to take <strong className="text-red-400">months.</strong><br/>
          Today, we set it up in <strong className="text-emerald-400">minutes.</strong>"
        </motion.p>

        <div className="flex justify-center gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }} className="bg-emerald-500/10 border border-emerald-500/30 px-8 py-4 rounded-2xl">
            <p className="text-xl text-emerald-100">1. Authentication</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4 }} className="bg-emerald-500/10 border border-emerald-500/30 px-8 py-4 rounded-2xl">
            <p className="text-xl text-emerald-100">2. Database</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5 }} className="bg-emerald-500/10 border border-emerald-500/30 px-8 py-4 rounded-2xl">
            <p className="text-xl text-emerald-100">3. Storage</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
