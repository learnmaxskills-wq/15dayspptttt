"use client";

import { motion } from "framer-motion";

const lines = [
  "The ability to identify problems.",
  "The ability to understand people.",
  "The ability to design solutions.",
  "The ability to build.",
];

export function SlideD4_20() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 text-center max-w-5xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-2xl text-zinc-500 font-light mb-4">"The tools you saw today will change."</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-2xl text-zinc-600 font-light mb-4">"Some will disappear. Some will become irrelevant."</motion.p>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-10" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="text-4xl text-white font-display font-bold mb-14">"But one thing won't change."</motion.p>

        <div className="space-y-5">
          {lines.map((line, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.8 + i * 0.4 }}
              className={`text-3xl font-display font-bold ${i === lines.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-4xl" : "text-zinc-300"}`}>
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
