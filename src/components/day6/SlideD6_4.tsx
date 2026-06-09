"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function SlideD6_4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="z-10 text-center max-w-5xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl text-zinc-500 font-light mb-6">"They type one prompt. AI generates a website."</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-2xl text-zinc-500 font-light mb-6">"Then they post on LinkedIn:"</motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }} className="bg-zinc-900/60 border border-zinc-700 px-12 py-6 rounded-2xl inline-block mb-12">
          <p className="text-3xl text-zinc-300 font-medium italic">"Built a startup in 10 minutes."</p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="text-4xl text-red-400 font-display font-bold mb-20">"Did they?"</motion.p>

        {/* GENERATING → ENGINEERING */}
        <div className="flex flex-col items-center gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }} className="bg-zinc-900/60 border-2 border-zinc-700 px-16 py-8 rounded-3xl">
            <p className="text-4xl font-display font-black text-zinc-500 line-through decoration-red-500/50 decoration-4">GENERATING</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}><ArrowDown className="w-8 h-8 text-amber-500/50" /></motion.div>
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 4.5, type: "spring" }} className="bg-gradient-to-br from-amber-500/15 to-transparent border-2 border-amber-500 px-16 py-8 rounded-3xl shadow-[0_0_40px_rgba(245,158,11,0.3)]">
            <p className="text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">ENGINEERING</p>
          </motion.div>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5 }} className="mt-12 text-2xl text-amber-300 font-medium">
          "This is the difference between <strong className="text-white">hobbyists</strong> and <strong className="text-white">founders.</strong>"
        </motion.p>
      </motion.div>
    </div>
  );
}
