"use client";

import { motion } from "framer-motion";
import { UserX, RefreshCw } from "lucide-react";

export function SlideD8_2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#000a12] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6,182,212,0.5) 40px)", backgroundSize: "40px 40px" }} />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Problem with Version 1</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">THE AMNESIA PROBLEM</h1>
      </motion.div>

      <div className="z-10 w-full max-w-5xl grid grid-cols-2 gap-12 px-8">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-zinc-900/40 border border-zinc-700/50 p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" />
          <UserX className="w-12 h-12 text-red-400 mb-6" />
          <p className="text-3xl font-display font-bold text-white mb-4">You build the UI.</p>
          <p className="text-3xl font-display font-bold text-white mb-8">The user signs up.</p>
          <p className="text-xl text-zinc-400">Everything looks perfect. The buttons click. The pages transition.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="bg-gradient-to-b from-red-500/10 to-transparent border border-red-500/30 p-10 rounded-3xl relative overflow-hidden">
          <RefreshCw className="w-12 h-12 text-red-400 mb-6" />
          <p className="text-3xl font-display font-bold text-red-300 mb-4">Then they refresh the page.</p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="mt-8 space-y-4">
            <p className="text-xl text-red-200/80 line-through">Account</p>
            <p className="text-xl text-red-200/80 line-through">History</p>
            <p className="text-xl text-red-200/80 line-through">Progress</p>
            <p className="text-4xl text-red-400 font-black mt-6">GONE.</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }} className="mt-14 text-2xl text-cyan-300 font-light z-10">
        "A frontend without a backend has <strong className="text-white font-bold">severe amnesia.</strong>"
      </motion.p>
    </div>
  );
}
