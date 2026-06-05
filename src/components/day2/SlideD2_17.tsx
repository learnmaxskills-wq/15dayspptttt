"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export function SlideD2_17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      {/* Giant brain watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <Brain className="w-[700px] h-[700px] text-pink-500" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(236,72,153,0.06),transparent)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-6xl"
      >
        <p className="text-pink-500 font-mono tracking-[0.5em] text-lg uppercase mb-16">Customer Psychology</p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-6xl md:text-8xl font-display font-black leading-[1.2] text-zinc-400 mb-8"
        >
          People Don't Buy{" "}
          <span className="relative">
            <span className="text-white line-through decoration-pink-500 decoration-8">Products</span>
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-7xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 leading-[1.2]"
        >
          They Buy Outcomes.
        </motion.h2>
      </motion.div>
    </div>
  );
}
