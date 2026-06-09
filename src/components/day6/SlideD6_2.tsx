"use client";

import { motion } from "framer-motion";
import { Skull } from "lucide-react";

export function SlideD6_2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-4xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-24 h-24 bg-red-500/10 border-2 border-red-500/40 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
          <Skull className="w-12 h-12 text-red-400" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-3xl text-zinc-500 font-light mb-6">"Every single startup we've built so far..."</motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8, type: "spring", stiffness: 120 }}
          className="text-7xl md:text-[110px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 leading-none mb-12">
          WOULD FAIL.
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="space-y-4">
          <p className="text-2xl text-zinc-500 font-light">"I'm not saying your ideas are bad."</p>
          <p className="text-2xl text-zinc-500 font-light">"I'm not saying your products are bad."</p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5 }} className="text-3xl text-white font-bold mt-8">"I'm saying something much more important."</motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
