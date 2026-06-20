"use client";

import { motion } from "framer-motion";
import { Dumbbell, ShieldCheck, HelpCircle } from "lucide-react";

export function SlideD14_7() {
  const gymOutcomes = ["Confidence", "Attraction", "Health", "Identity"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Outcome Principle: Part I
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl mb-8">
          {/* Gym Membership */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 relative flex flex-col group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-[#00f0ff]" />
                <h4 className="text-zinc-300 font-bold">Gym Membership</h4>
              </div>
              <HelpCircle className="w-4 h-4 text-zinc-500" />
            </div>
            
            <p className="text-sm font-mono text-zinc-500 mb-6">[ Ask: "Nobody buys a gym membership. What do they buy?" ]</p>
            
            <div className="flex flex-col gap-2">
              {gymOutcomes.map((outcome, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.2 }}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-left font-mono text-sm text-[#00f0ff] font-semibold"
                >
                  → They buy {outcome}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pharmacy */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 relative flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#ccff00]" />
                  <h4 className="text-zinc-300 font-bold">Pharmacy</h4>
                </div>
              </div>
              
              <p className="text-sm font-mono text-[#ccff00] mb-6">"Nobody buys a pharmacy."</p>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 }}
              className="p-6 bg-zinc-900 border border-zinc-850 rounded-xl text-center"
            >
              <span className="text-zinc-500 font-mono text-xs block mb-1">Outcome:</span>
              <span className="text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00]">
                They buy health.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
