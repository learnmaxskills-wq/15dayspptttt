"use client";

import { motion } from "framer-motion";
import { Users, XCircle, HeartHandshake } from "lucide-react";

export function SlideD13_6() {
  const responses = ["Ads", "Selling", "Promotion"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background radial spotlight */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Act badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-8 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-amber-400">
          <Users className="w-4 h-4" />
          <span>ACT 2: WHAT MARKETING REALLY IS</span>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-400">15 MIN</span>
        </motion.div>

        {/* The prompt question */}
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-bold font-display tracking-tight text-center mb-10">
          Ask: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">"What is marketing?"</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl mb-12">
          {responses.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.3 }}
              className="flex-1 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group"
            >
              <span className="text-lg font-semibold text-zinc-300 font-display mb-4">{item}</span>
              <motion.div className="flex items-center justify-center text-rose-500/70"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.6 + index * 0.2 }}
              >
                <XCircle className="w-6 h-6 mr-1" />
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400">Incorrect</span>
              </motion.div>
              {/* Strike out bar */}
              <motion.div className="absolute left-4 right-4 h-[2px] bg-rose-500/80 top-[40%]"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5 + index * 0.2, duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Realization block */}
        <div className="flex flex-col items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.3 }} className="bg-red-500/10 border border-red-500/30 px-6 py-2 rounded-lg mb-6">
            <span className="text-red-400 font-mono text-sm uppercase font-bold tracking-widest">Then say: "Wrong."</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8, duration: 0.8 }} className="relative bg-zinc-950/80 border border-zinc-800/80 p-8 rounded-3xl text-center max-w-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 to-transparent pointer-events-none" />
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-3">Marketing is simply:</p>
            <h3 className="text-4xl md:text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-amber-300 tracking-tight mb-4">
              Communicating value.
            </h3>
            <p className="text-zinc-400 text-lg font-light">That's it.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
