"use client";

import { motion } from "framer-motion";
import { CheckSquare, Flame } from "lucide-react";

export function SlideD13_20() {
  const deliverables = [
    "A startup",
    "A pitch",
    "A marketing video",
    "A launch story",
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Outro statement */}
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-xl md:text-2xl text-zinc-300 font-light italic text-center max-w-2xl mb-8 leading-relaxed">
          "Tomorrow your startup will be closer to the real world than ever before."
        </motion.p>

        {/* Teacher instruction overlay */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl px-6 py-4 mb-10 max-w-xl text-center">
          <p className="text-sm font-mono text-zinc-500">
            [ Action: Start helping students create their own scripts. This session should feel less like a coding class and more like a founder bootcamp. ]
          </p>
        </motion.div>

        <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6">
          By the end, students shouldn't just have a startup. They should have:
        </motion.h3>

        {/* Deliverables List */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xl mb-12">
          {deliverables.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.2, type: "spring", stiffness: 100 }}
              className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-4 flex items-center gap-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-center text-emerald-400">
                <CheckSquare className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm text-zinc-200">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Final punchline */}
        <div className="flex flex-col items-center">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.8, duration: 0.6 }} className="w-24 h-[1px] bg-zinc-800 mb-6" />
          
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1, duration: 0.8 }}
            className="text-3xl md:text-5xl font-black font-display tracking-tight text-center leading-none"
          >
            Because <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">products get built.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">Stories get shared. 🚀</span>
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
