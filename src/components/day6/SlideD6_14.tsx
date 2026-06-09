"use client";

import { motion } from "framer-motion";
import { Orbit } from "lucide-react";

export function SlideD6_14() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Orbit animation */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-purple-500/10 rounded-full pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-4xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-28 h-28 bg-purple-500/15 border-2 border-purple-500/40 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_60px_rgba(168,85,247,0.3)]">
          <Orbit className="w-14 h-14 text-purple-400" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.8 }}
          className="text-7xl md:text-[100px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 leading-none mb-10">ANTIGRAVITY</motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="text-2xl text-zinc-400 font-light mb-6">"Cursor is one vision of the future."</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="text-2xl text-purple-300 font-bold mb-14">"Antigravity is another."</motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }} className="bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/30 p-10 rounded-3xl max-w-2xl mx-auto">
          <p className="text-2xl text-zinc-300 font-light mb-4">"We are entering a world where builders don't just write code."</p>
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-display font-black">"They direct intelligence."</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
