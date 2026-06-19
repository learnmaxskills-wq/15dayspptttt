"use client";

import { motion } from "framer-motion";

export function SlideD13_3() {
  const words = ["Build.", "Build.", "Build.", "Build."];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-950/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-zinc-500 font-mono tracking-widest text-sm uppercase mb-12">
          The Founder's Trap
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl md:text-4xl font-light text-zinc-400 tracking-wide mb-14">
          "Most founders never learn this."
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16">
          {words.map((word, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.6 + index * 0.4,
                type: "spring",
                stiffness: 120,
              }}
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-600 font-display relative"
            >
              {word}
              {index === 3 && (
                <motion.div className="absolute -inset-x-4 -inset-y-2 border border-rose-500/20 bg-rose-500/5 rounded-lg pointer-events-none"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.4, duration: 0.8 }} className="space-y-6 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-light text-rose-300">
            ...Then wonder why nobody comes.
          </p>

          <div className="h-[1px] w-24 bg-rose-500/30 mx-auto my-6" />

          <p className="text-lg md:text-xl font-mono text-zinc-400 italic font-extralight leading-relaxed">
            "The internet is full of <span className="text-white font-semibold not-italic border-b border-amber-500/40 pb-1">abandoned masterpieces.</span> A surprisingly human outcome."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
