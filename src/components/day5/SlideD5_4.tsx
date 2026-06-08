"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function SlideD5_4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-4xl">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="w-24 h-24 bg-red-500/10 border-2 border-red-500/40 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
          <AlertTriangle className="w-12 h-12 text-red-400" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-4xl text-zinc-400 font-light mb-12">
          "Everything we've built so far..."
        </motion.p>

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
          className="text-8xl md:text-[140px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 leading-none mb-10 tracking-tight">
          IS FAKE.
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="space-y-4 text-2xl text-zinc-500 font-medium">
          <p>Nobody can sign up.</p>
          <p>Nobody can save data.</p>
          <p>Nobody can log in.</p>
          <p className="text-zinc-300 font-bold mt-8">It's just a model. A vision.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
