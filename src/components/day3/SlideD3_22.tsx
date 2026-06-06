"use client";

import { motion } from "framer-motion";
import { Hammer, Mic } from "lucide-react";

export function SlideD3_22() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.08),transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-600/20 blur-[120px] pointer-events-none" />

      {/* Sparks */}
      {[...Array(8)].map((_, i) => (
        <motion.div key={i} className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full" style={{ left: `${15 + i * 10}%`, bottom: "15%" }}
          animate={{ y: [-30, -150], opacity: [1, 0], scale: [1, 0.5] }} transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }} />
      ))}

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-4xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-28 h-28 bg-orange-500/20 border border-orange-500/40 rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-[0_0_80px_rgba(249,115,22,0.5)]">
          <Hammer className="w-14 h-14 text-orange-400" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-7xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-red-500 leading-none mb-10">
          BUILD TIME
        </motion.h1>

        <div className="space-y-6 mb-14">
          {[
            { text: "Students Build.", style: "text-3xl text-zinc-300" },
            { text: "You Build CareerGPS.", style: "text-3xl text-white font-bold" },
          ].map((line, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.3 }} className={`font-display ${line.style}`}>{line.text}</motion.p>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="bg-orange-500/10 border border-orange-500/30 p-8 rounded-3xl flex items-start gap-5 text-left">
          <Mic className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
          <div>
            <p className="text-orange-300 font-mono text-xs uppercase tracking-widest mb-3">Teaching Note</p>
            <p className="text-xl text-zinc-300 leading-relaxed">Talk through every decision. Think out loud. <strong className="text-white">This is where the real teaching happens.</strong></p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
