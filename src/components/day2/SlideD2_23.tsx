"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function SlideD2_23() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      {/* Boardroom spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-full bg-gradient-to-b from-amber-400/15 via-amber-400/5 to-transparent pointer-events-none" style={{ clipPath: "polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(245,158,11,0.08),transparent)]" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-32 h-32 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_80px_rgba(245,158,11,0.3)]"
        >
          <Users className="w-16 h-16 text-amber-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-7xl md:text-9xl font-display font-black text-white mb-4"
        >
          CLAUDE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-amber-400 font-mono tracking-[0.5em] text-xl uppercase mb-20"
        >
          The Investor's Room
        </motion.h2>

        <div className="grid grid-cols-3 gap-6">
          {["Boardroom Pressure", "Brutal Honesty", "No Mercy"].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.2 }}
              className="bg-amber-500/5 border border-amber-500/20 p-6 rounded-2xl"
            >
              <p className="text-amber-300 font-bold text-xl text-center">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
