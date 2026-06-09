"use client";

import { motion } from "framer-motion";
import { Car } from "lucide-react";

export function SlideD6_5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/8 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <Car className="w-16 h-16 text-red-400 mx-auto mb-6" />
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">THE FERRARI STORY</h1>
      </motion.div>

      <div className="z-10 w-full max-w-4xl space-y-6">
        {[
          { q: "If I use AI to generate a Ferrari design...", a: "Do I own a Ferrari?", answer: "No." },
          { q: "If I use AI to generate a hospital blueprint...", a: "Did I build a hospital?", answer: "No." },
          { q: "If I use AI to generate a startup interface...", a: "Did I build a startup?", answer: "Not yet." },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 1 }}
            className="flex items-center gap-8 bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
            <div className="flex-1">
              <p className="text-xl text-zinc-400 font-light mb-2">{item.q}</p>
              <p className="text-xl text-zinc-300 font-medium">{item.a}</p>
            </div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 + i * 1, type: "spring" }}
              className={`px-6 py-3 rounded-xl font-display font-black text-2xl ${i === 2 ? "bg-amber-500/15 border-2 border-amber-500 text-amber-400" : "bg-red-500/10 border border-red-500/40 text-red-400"}`}>
              {item.answer}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="mt-14 text-3xl text-amber-300 font-display font-bold z-10">
        "Today we start crossing that gap."
      </motion.p>
    </div>
  );
}
