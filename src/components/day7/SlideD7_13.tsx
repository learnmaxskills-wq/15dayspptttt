"use client";

import { motion } from "framer-motion";
import { UserCheck, X, Check } from "lucide-react";

export function SlideD7_13() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 z-10">
        <UserCheck className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
        <h2 className="text-indigo-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Usability Test</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">Testing Your Product</h1>
      </motion.div>

      <div className="w-full max-w-4xl z-10 space-y-8 px-8">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-zinc-900/40 border border-zinc-700 p-8 rounded-3xl">
          <p className="text-2xl text-zinc-300 font-light mb-4">"What if I give this product to my <strong className="text-white">grandmother?</strong>"</p>
          <p className="text-xl text-zinc-500">Would she understand it?</p>
          <div className="flex items-center gap-3 mt-4"><X className="w-5 h-5 text-red-500" /><p className="text-red-400 font-medium">If not: Bad product.</p></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="bg-zinc-900/40 border border-zinc-700 p-8 rounded-3xl">
          <p className="text-2xl text-zinc-300 font-light mb-4">"What if I give it to a <strong className="text-white">14-year-old?</strong>"</p>
          <p className="text-xl text-zinc-500">Would they understand?</p>
          <div className="flex items-center gap-3 mt-4"><X className="w-5 h-5 text-red-500" /><p className="text-red-400 font-medium">If not: Bad product.</p></div>
        </motion.div>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="mt-10 text-xl text-indigo-300 font-medium z-10">Simple.</motion.p>
    </div>
  );
}
