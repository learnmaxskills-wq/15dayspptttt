"use client";

import { motion } from "framer-motion";

export function SlideD5_18() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="z-10 text-center max-w-4xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-4xl text-zinc-500 font-light mb-12">
          "Four days ago... you had an idea."
        </motion.p>
        
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="text-4xl text-emerald-400 font-medium mb-12">
          "Today... you understand how products work."
        </motion.p>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.5, duration: 1 }} className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-12" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }} className="text-5xl text-white font-display font-bold">
          "Five days from now..."
        </motion.p>
      </motion.div>
    </div>
  );
}
