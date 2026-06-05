"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export function SlideD2_25() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <ShieldAlert className="w-[700px] h-[700px] text-amber-400" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(245,158,11,0.06),transparent)]" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-center z-10 max-w-5xl">
        <p className="text-amber-400 font-mono tracking-[0.5em] text-lg uppercase mb-16">Founder Rule</p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-display font-black text-zinc-400 leading-[1.2] mb-12"
        >
          Great Founders Don't{" "}
          <span className="text-white line-through decoration-amber-500 decoration-8">Avoid</span>{" "}
          Criticism
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-7xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 leading-[1.1]"
        >
          They Seek It.
        </motion.h2>
      </motion.div>
    </div>
  );
}
