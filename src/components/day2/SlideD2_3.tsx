"use client";

import { motion } from "framer-motion";
import { Lightbulb, Flame, Car, Home, ShoppingBag, Tv } from "lucide-react";

export function SlideD2_3() {
  const examples = [
    { name: "Uber", pain: "Transportation Pain", icon: Car },
    { name: "Airbnb", pain: "Accommodation Pain", icon: Home },
    { name: "Amazon", pain: "Buying Pain", icon: ShoppingBag },
    { name: "Netflix", pain: "Entertainment Pain", icon: Tv },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.08),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 z-10"
      >
        <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Core Difference</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black leading-tight text-white">The Difference</h1>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-8 z-10 mb-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-zinc-900/60 border border-zinc-700/50 rounded-3xl p-12 flex flex-col items-center text-center backdrop-blur-sm"
        >
          <div className="w-20 h-20 rounded-2xl bg-zinc-800 flex items-center justify-center mb-8">
            <Lightbulb className="w-10 h-10 text-zinc-500" />
          </div>
          <h3 className="text-3xl font-display text-zinc-400 font-bold mb-2">Most People</h3>
          <p className="text-5xl font-black text-zinc-300">Look For <br />Ideas</p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-cyan-500/5 border border-cyan-500/30 rounded-3xl p-12 flex flex-col items-center text-center backdrop-blur-sm relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(6,182,212,0.3)] relative z-10">
            <Flame className="w-10 h-10 text-cyan-400" />
          </div>
          <h3 className="text-3xl font-display text-cyan-400 font-bold mb-2 relative z-10">Founders</h3>
          <p className="text-5xl font-black text-white relative z-10">Look For <br />Pain</p>
        </motion.div>
      </div>

      {/* Bottom examples */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-full max-w-5xl grid grid-cols-4 gap-4 z-10"
      >
        {examples.map((ex, i) => {
          const Icon = ex.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="bg-[#0a1628] border border-cyan-900/40 rounded-2xl p-5 text-center"
            >
              <Icon className="w-7 h-7 text-cyan-500 mx-auto mb-3" />
              <p className="text-lg font-bold text-white mb-1">{ex.name}</p>
              <p className="text-xs font-mono text-cyan-400/70 uppercase tracking-widest">{ex.pain}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
