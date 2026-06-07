"use client";

import { motion } from "framer-motion";
import { Swords } from "lucide-react";

export function SlideD4_9() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      {/* Electric sparks */}
      {[...Array(16)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full" style={{ width: `${2 + (i % 3)}px`, height: `${2 + (i % 3)}px`, background: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#06b6d4" : "#f59e0b", left: `${5 + i * 5.5}%`, top: `${20 + (i % 5) * 15}%` }}
          animate={{ y: [0, -50, 0], opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, type: "spring" }} className="z-10 text-center max-w-5xl">
        <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring" }} className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-amber-500/20 border-2 border-purple-500/40 rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-[0_0_80px_rgba(168,85,247,0.4)]">
          <Swords className="w-16 h-16 text-purple-400" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-7xl md:text-[110px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 leading-none mb-10">
          TOOL BATTLE
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-3xl text-zinc-400 font-light mb-8">"We're going to build the <strong className="text-white font-bold">same startup</strong> multiple times."</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="flex items-center justify-center gap-6">
          {["Bolt", "Lovable", "Firebase Studio"].map((tool, i) => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 + i * 0.2, type: "spring" }} className="bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/30 px-8 py-4 rounded-2xl">
              <p className="text-2xl font-display font-bold text-zinc-200">{tool}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
