"use client";

import { motion } from "framer-motion";

export function SlideD2_29() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      {/* Dramatic top spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none" style={{ clipPath: "polygon(38% 0%, 62% 0%, 80% 100%, 20% 100%)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_80%,rgba(56,189,248,0.1),transparent)]" />

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 text-center max-w-5xl mt-20">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-zinc-400 font-mono tracking-[0.5em] text-xl uppercase mb-12">The Opportunity Question</motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-4xl md:text-6xl font-display font-light text-zinc-300 leading-tight mb-16">
          If This Opportunity Is Real...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8, type: "spring" }}
          className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500"
        >
          Where Is The Money?
        </motion.h1>
      </motion.div>
    </div>
  );
}
