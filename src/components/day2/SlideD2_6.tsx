"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SlideD2_6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 z-10"
      >
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">
          Assumptions <span className="text-zinc-600">vs</span> Evidence
        </h1>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-6 z-10">
        {/* I Think */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-zinc-900/60 border border-zinc-700 rounded-[2.5rem] p-14 flex flex-col items-center text-center min-h-[380px] justify-center"
        >
          <p className="text-6xl font-display font-black italic text-zinc-500 mb-8">"I Think"</p>
          <p className="text-2xl text-zinc-400 leading-relaxed">I think people want this.</p>
          <p className="text-zinc-600 font-mono text-sm mt-4 uppercase tracking-widest">Opinion</p>
        </motion.div>

        {/* I Know */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-cyan-500/5 border border-cyan-500/40 rounded-[2.5rem] p-14 flex flex-col items-center text-center min-h-[380px] justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/5 pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px]" />
          <p className="text-7xl font-display font-black text-cyan-400 mb-8 relative z-10">"I Know"</p>
          <p className="text-3xl text-white font-bold relative z-10">I know people want this.</p>
          <p className="text-cyan-400 font-mono text-sm mt-4 uppercase tracking-widest relative z-10">Evidence</p>
        </motion.div>
      </div>

      {/* Arrow connector */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#020817] border border-cyan-500/40 rounded-full p-4 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
      >
        <ArrowRight className="w-8 h-8 text-cyan-400" />
      </motion.div>
    </div>
  );
}
