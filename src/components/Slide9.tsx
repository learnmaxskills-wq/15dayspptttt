"use client";

import { motion } from "framer-motion";
import { Car } from "lucide-react";

export function Slide9() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-orange-500 font-mono tracking-widest text-sm uppercase mb-6">The Real World Example</h2>
          <h1 className="text-6xl font-display font-black leading-tight mb-8">
            Before <br />Ola and Uber.
          </h1>
          <ul className="space-y-6 text-2xl text-zinc-300 font-light">
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-red-500" /> Standing in the heat.
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-red-500" /> Negotiating price.
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-red-500" /> Driver might not show up.
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-red-500" /> Zero accountability.
            </motion.li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-orange-600/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-3xl" />
          <div className="w-24 h-24 bg-black border border-zinc-800 rounded-2xl mx-auto flex items-center justify-center mb-8 relative z-10 text-orange-500">
            <Car className="w-12 h-12" />
          </div>
          <p className="text-2xl text-zinc-300 leading-relaxed relative z-10 italic mb-8">
            "They didn't build something nice to have. They killed a real pain. That's why within 5 years they were worth billions."
          </p>
          <div className="inline-block bg-orange-500 text-black font-bold uppercase tracking-widest px-6 py-2 rounded-full relative z-10">
            A True Painkiller
          </div>
        </div>
      </motion.div>
    </div>
  );
}
