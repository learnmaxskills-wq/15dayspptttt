"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function SlideD2_10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(139,92,246,0.08),transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-28 h-28 bg-violet-500/10 border border-violet-500/30 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(139,92,246,0.3)]"
        >
          <Search className="w-14 h-14 text-violet-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-7xl md:text-9xl font-display font-black text-white leading-none mb-4"
        >
          PERPLEXITY
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-violet-400 font-mono tracking-[0.5em] text-xl uppercase mb-20"
        >
          Your Research Department
        </motion.h2>

        <div className="space-y-8 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-3xl text-zinc-400 font-light leading-relaxed"
          >
            What would normally take <strong className="text-white">weeks of research...</strong>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-4xl text-violet-300 font-bold"
          >
            Can now be done in minutes.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="bg-violet-500/10 border border-violet-500/30 px-12 py-6 rounded-full inline-flex items-center gap-6 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
        >
          <span className="text-violet-400 font-mono uppercase tracking-widest text-sm">Our Goal</span>
          <span className="w-1 h-1 rounded-full bg-violet-500" />
          <span className="text-2xl font-display font-bold text-white">Find Evidence, Not Opinions</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
