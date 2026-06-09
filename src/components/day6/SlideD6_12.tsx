"use client";

import { motion } from "framer-motion";
import { Fuel } from "lucide-react";

export function SlideD6_12() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-4xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-28 h-28 bg-green-500/15 border-2 border-green-500/40 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(34,197,94,0.3)]">
          <Fuel className="w-14 h-14 text-green-400" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.8 }}
          className="text-8xl md:text-[100px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 leading-none mb-8">NODE.JS</motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="bg-zinc-900/50 border border-zinc-700 p-6 rounded-2xl max-w-2xl mx-auto mb-8">
          <p className="text-zinc-600 font-mono text-sm line-through">"Node.js is a cross-platform JavaScript runtime built on Chrome's V8 engine."</p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-zinc-500 font-mono text-sm mt-4">"Did that help anyone?"</motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }} className="mb-10">
          <p className="text-2xl text-zinc-400 font-light mb-4">"What powers a car?"</p>
          <p className="text-4xl text-white font-display font-bold mb-4">Engine.</p>
          <p className="text-2xl text-zinc-400 font-light mb-4">"What powers modern web applications?"</p>
          <p className="text-4xl text-green-400 font-display font-bold">Node.js.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 4.5 }} className="bg-green-500/10 border-2 border-green-500/40 px-12 py-6 rounded-3xl inline-block shadow-[0_0_40px_rgba(34,197,94,0.2)]">
          <p className="text-3xl font-display font-black text-green-300 tracking-widest">THE ENGINE</p>
          <p className="text-zinc-500 mt-2">No engine. No movement.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
