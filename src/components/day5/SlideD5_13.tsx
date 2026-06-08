"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function SlideD5_13() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-fuchsia-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h2 className="text-fuchsia-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 7</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">THE AI LAYER</h1>
      </motion.div>

      <div className="z-10 flex flex-col items-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-3xl text-zinc-400 font-light mb-16">
          "This is where the magic happens."
        </motion.p>

        <div className="flex flex-col gap-4 mb-16 items-center">
          {[
            "Student submits information",
            "Backend receives information",
            "Backend sends information to AI",
            "AI thinks",
            "AI responds",
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.5 }}
                className={`px-8 py-4 rounded-2xl border-2 ${i === 3 || i === 4 ? "bg-fuchsia-500/15 border-fuchsia-500/50 text-fuchsia-300 shadow-[0_0_30px_rgba(217,70,239,0.2)]" : "bg-zinc-900/50 border-zinc-700 text-zinc-300"} text-2xl font-bold`}>
                {step}
              </motion.div>
              {i < 4 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 + i * 0.5 }} className="my-2"><ArrowRight className="w-6 h-6 text-zinc-600 rotate-90" /></motion.div>}
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 4 }} className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/30 px-12 py-8 rounded-3xl text-center">
          <Sparkles className="w-10 h-10 text-fuchsia-400 mx-auto mb-4" />
          <p className="text-3xl text-white font-display font-bold mb-2">"AI products are not magic."</p>
          <p className="text-2xl text-fuchsia-300 font-light">"They are products connected to intelligence."</p>
        </motion.div>
      </div>
    </div>
  );
}
