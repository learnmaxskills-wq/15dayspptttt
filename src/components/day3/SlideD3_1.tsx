"use client";

import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";

export function SlideD3_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      {/* Fire glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-red-600/10 blur-[80px] rounded-full pointer-events-none" />
      {/* Particle sparks */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-400 rounded-full"
          style={{ left: `${10 + i * 7}%`, bottom: `${10 + (i % 4) * 8}%` }}
          animate={{ y: [-20, -120], opacity: [1, 0] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-20 h-20 bg-orange-500/20 border border-orange-500/40 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(249,115,22,0.4)]">
          <Flame className="w-10 h-10 text-orange-400" />
        </motion.div>

        <motion.p initial={{ opacity: 0, letterSpacing: "2px" }} animate={{ opacity: 1, letterSpacing: "12px" }} transition={{ duration: 1.5, delay: 0.3 }} className="text-orange-500 uppercase font-mono font-bold mb-6 text-sm">
          LearnMax · Day 3
        </motion.p>

        <h1 className="font-black text-white leading-none tracking-tighter mb-6">
          <motion.span initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="block text-5xl md:text-7xl text-zinc-400 font-light">THE PRODUCT</motion.span>
          <motion.span initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="block text-7xl md:text-[90px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-red-500">ARCHITECT</motion.span>
        </h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="text-2xl text-zinc-400 font-light mb-12">From Opportunity To Product</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="space-y-3 mb-12">
          {["Yesterday we discovered opportunities.", "Today we design products.", "Tomorrow we become serious builders."].map((line, i) => (
            <p key={i} className={`text-xl ${i === 1 ? "text-orange-400 font-bold text-2xl" : "text-zinc-500"}`}>{line}</p>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} className="bg-orange-500/10 border border-orange-500/30 px-10 py-5 rounded-full inline-block">
          <p className="text-xl text-orange-300 font-light italic">"Founders don't build features. Founders build <strong className="text-white font-bold not-italic">solutions.</strong>"</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
