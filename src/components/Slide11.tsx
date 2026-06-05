"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export function Slide11() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-[3rem] p-16 relative overflow-hidden z-10"
      >
        <h2 className="text-orange-500 font-mono tracking-widest text-lg uppercase mb-4">Minute 7: The Filter</h2>
        <h1 className="text-6xl font-display font-black leading-tight mb-12">
          Stop writing. <br />
          Apply the <span className="text-red-500">Painkiller Test.</span>
        </h1>

        <div className="space-y-6 text-2xl text-zinc-300">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex gap-6">
            <span className="text-zinc-600 font-mono">01</span>
            <p>Would someone lose sleep over this?</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex gap-6">
            <span className="text-zinc-600 font-mono">02</span>
            <p>Would they pay real money to make it stop today?</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="flex gap-6 items-center">
            <span className="text-orange-500 font-mono text-4xl">03</span>
            <p className="text-white font-bold text-4xl ml-2">Pick one. Commit.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="mt-12 bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex items-start gap-4"
        >
          <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
          <p className="text-red-200 text-lg">
            Commitment is a founder superpower. Most people fail not because their idea was bad but because they kept switching. You are not switching.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
