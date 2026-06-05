"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, ArrowRight, ArrowDownRight } from "lucide-react";

export function Slide14() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <div className="text-center mb-16 z-10">
        <h2 className="text-green-400 font-mono tracking-widest text-sm uppercase mb-4">Step 2: Google Trends</h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4">Market Direction</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Is the problem growing, stalling, or dying?</p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-center group hover:border-green-500/50 transition-colors">
          <ArrowUpRight className="w-16 h-16 text-green-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-display font-bold text-white mb-2">Going Up</h3>
          <p className="text-zinc-400 text-lg">Growing market. Perfect timing to enter.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-center group hover:border-yellow-500/50 transition-colors">
          <ArrowRight className="w-16 h-16 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-display font-bold text-white mb-2">Flat</h3>
          <p className="text-zinc-400 text-lg">Saturated market. Harder to break in.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-center group hover:border-red-500/50 transition-colors">
          <ArrowDownRight className="w-16 h-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-display font-bold text-white mb-2">Going Down</h3>
          <p className="text-zinc-400 text-lg">Dying market. You are too late.</p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-16 bg-green-500/10 border border-green-500/30 px-8 py-6 rounded-2xl max-w-3xl text-center z-10">
        <p className="text-green-400 text-xl font-medium">Also check <strong className="text-white">"Related Queries - Rising"</strong>. Those are problems your customers have that nobody has built for yet.</p>
      </motion.div>
    </div>
  );
}
