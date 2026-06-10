"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function SlideD7_17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/15 blur-[200px] rounded-full pointer-events-none" />

      {/* Scanner */}
      <motion.div className="absolute left-0 right-0 h-[3px] pointer-events-none" style={{ background: "linear-gradient(to right, transparent, rgba(99,102,241,0.1), rgba(99,102,241,0.5), rgba(99,102,241,0.1), transparent)", boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
        animate={{ y: ["-10vh", "110vh"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, type: "spring" }}>
          <Rocket className="w-20 h-20 text-indigo-400 mx-auto mb-10" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-3xl text-indigo-300 font-medium mb-14">
          "Your startup is <strong className="text-white font-bold">alive.</strong>"
        </motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ delay: 2, type: "spring", stiffness: 100 }}
          className="text-6xl md:text-[90px] font-display font-black leading-tight mb-12" style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa, #c084fc, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          TOMORROW WE TEACH IT TO REMEMBER.
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="text-6xl">🚀</motion.div>
      </motion.div>
    </div>
  );
}
