"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function SlideD6_17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/15 blur-[200px] rounded-full pointer-events-none" />

      {/* Scan line */}
      <motion.div className="absolute left-0 right-0 h-[2px] bg-amber-500/40 pointer-events-none shadow-[0_0_20px_rgba(245,158,11,0.8)]"
        animate={{ y: ["-10vh", "110vh"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="z-10 text-center max-w-5xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-3xl text-zinc-500 font-light mb-8">
          "Six days ago... this startup existed only in your head."
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="text-3xl text-amber-400 font-medium mb-12">
          "Tomorrow... it starts becoming <strong className="text-white font-bold">real.</strong>"
        </motion.p>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.5, duration: 1 }} className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-14" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }}>
          <Rocket className="w-20 h-20 text-amber-400 mx-auto mb-8" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 4, type: "spring", stiffness: 120 }}
          className="text-6xl md:text-[90px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 leading-tight mb-12">
          LET'S BUILD.
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }} className="text-6xl">🚀</motion.div>
      </motion.div>
    </div>
  );
}
