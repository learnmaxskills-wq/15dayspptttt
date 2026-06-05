"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export function SlideD2_34() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-center z-10">
        <div className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center justify-center mx-auto mb-14">
          <Lightbulb className="w-12 h-12 text-zinc-600" />
        </div>
        <p className="text-zinc-600 font-mono tracking-[0.6em] text-3xl uppercase mb-8">Yesterday</p>
        <h1 className="text-7xl md:text-9xl font-display font-black text-zinc-400 leading-tight">You Had An Idea</h1>
      </motion.div>
    </div>
  );
}
