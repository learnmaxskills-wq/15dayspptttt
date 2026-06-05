"use client";

import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

export function Slide18() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-zinc-900/80 border border-zinc-800 rounded-[2.5rem] p-16 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none" />
        
        <div className="bg-orange-500 text-black font-bold font-mono px-4 py-1.5 inline-block rounded-full text-sm uppercase tracking-widest mb-10">
          Tonight's Mission
        </div>

        <h3 className="text-4xl font-display font-bold mb-12 flex items-center gap-4">
          <User className="text-orange-500 w-10 h-10" />
          Talk to 3 real people. Don't pitch.
        </h3>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex gap-6 items-start group">
            <div className="mt-1 bg-zinc-800 text-orange-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:bg-orange-500 group-hover:text-black transition-colors">1</div>
            <p className="text-2xl text-zinc-300">Tell me about the last time you faced this problem. What happened?</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex gap-6 items-start group">
            <div className="mt-1 bg-zinc-800 text-orange-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:bg-orange-500 group-hover:text-black transition-colors">2</div>
            <p className="text-2xl text-zinc-300">What have you tried to fix it? What frustrated you about those solutions?</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex gap-6 items-start group">
            <div className="mt-1 bg-zinc-800 text-orange-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 group-hover:bg-orange-500 group-hover:text-black transition-colors">3</div>
            <p className="text-2xl text-zinc-300">If a perfect solution existed tomorrow, what would you pay for it monthly?</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-16 pt-8 border-t border-zinc-800 flex items-center justify-between">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-lg">Write their exact words.</p>
          <ArrowRight className="text-orange-500 w-8 h-8 animate-pulse" />
        </motion.div>
      </motion.div>
    </div>
  );
}
