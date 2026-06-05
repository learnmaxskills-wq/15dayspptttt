"use client";

import { motion } from "framer-motion";

export function Slide5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-16 max-w-4xl text-center relative overflow-hidden group"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 blur-[100px] rounded-full" />
        
        <h2 className="text-orange-500 font-mono tracking-widest text-lg uppercase mb-8 relative z-10">
          The Stakes
        </h2>
        
        <p className="text-3xl text-zinc-300 font-light leading-relaxed mb-12 relative z-10">
          "The top builders go to inter-school. And the national finalists walk into a room and pitch their startup to real angel investors."
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10"
        >
          <p className="text-zinc-500 uppercase tracking-widest font-mono text-sm mb-4">For funding of up to</p>
          <div className="inline-flex items-baseline gap-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 font-display font-black text-8xl md:text-9xl tracking-tighter">
            ₹50L
          </div>
          <p className="text-2xl mt-8 font-medium">Real investors. Real money. Real idea.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
