"use client";

import { motion } from "framer-motion";
import { Pill, Skull } from "lucide-react";

export function Slide8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <div className="text-center mb-20 z-10">
        <h2 className="text-orange-500 font-mono tracking-widest text-sm uppercase mb-4">The Framework</h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4">
          Every startup is one of two things.
        </h1>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-12 z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="group relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[50px] rounded-full transition-opacity group-hover:opacity-100 opacity-50" />
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-12 backdrop-blur-xl h-full flex flex-col relative z-10 overflow-hidden">
            <div className="w-20 h-20 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
              <Pill className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-display font-bold mb-4 text-blue-400">A Vitamin</h2>
            <ul className="space-y-4 text-xl text-zinc-400">
              <li>• Nice to have.</li>
              <li>• Improves life slightly.</li>
              <li>• You'd survive without it.</li>
            </ul>
            <div className="mt-auto pt-12">
              <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Result</p>
              <p className="text-2xl font-bold text-zinc-300">Raises money and dies slowly.</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} className="group relative">
          <div className="absolute inset-0 bg-red-600/20 blur-[60px] rounded-full transition-opacity group-hover:opacity-100 opacity-70" />
          <div className="bg-red-950/20 border border-red-500/30 rounded-3xl p-12 backdrop-blur-xl h-full flex flex-col relative z-10 overflow-hidden">
            <div className="w-20 h-20 bg-red-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              <Skull className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-display font-bold mb-4 text-red-500">A Painkiller</h2>
            <ul className="space-y-4 text-xl text-zinc-300">
              <li>• Solves a genuine, deep pain.</li>
              <li>• People pay without negotiating.</li>
              <li>• They come back every day.</li>
            </ul>
            <div className="mt-auto pt-12">
              <p className="text-red-500/70 text-sm font-mono uppercase tracking-widest">Result</p>
              <p className="text-3xl font-black text-white">Scales to billions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
