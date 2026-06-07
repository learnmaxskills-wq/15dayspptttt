"use client";

import { motion } from "framer-motion";
import { Orbit } from "lucide-react";

export function SlideD4_17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Orbit animation */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-purple-500/10 rounded-full pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
      </motion.div>
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-cyan-500/10 rounded-full pointer-events-none" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-5xl">
        <Orbit className="w-16 h-16 text-purple-400 mx-auto mb-10" />
        <h2 className="text-purple-400 font-mono tracking-[0.5em] text-lg uppercase mb-10">Emergent & Agentic Building</h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-3xl text-zinc-400 font-light mb-6">AI agents don't just answer questions.</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-3xl text-zinc-300 font-medium mb-6">They <strong className="text-purple-400">plan</strong>, <strong className="text-cyan-400">execute</strong>, and <strong className="text-fuchsia-400">iterate</strong>.</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="text-4xl text-white font-bold mb-16">Software development is changing <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">forever.</em></motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }} className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 px-12 py-6 rounded-2xl inline-block">
          <p className="text-2xl text-purple-200 font-light italic">"Don't go technical. Go <strong className="text-white not-italic font-bold">visionary.</strong>"</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
