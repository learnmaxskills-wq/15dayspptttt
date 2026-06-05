"use client";

import { motion } from "framer-motion";
import { IndianRupee } from "lucide-react";

export function SlideD2_2() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      {/* Spotlight beam from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-full bg-gradient-to-b from-yellow-400/20 via-yellow-400/5 to-transparent pointer-events-none" style={{ clipPath: "polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(6,182,212,0.08),transparent)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-cyan-400 font-mono tracking-[0.5em] text-lg uppercase mb-20"
        >
          A Question
        </motion.h2>

        <div className="space-y-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight text-white"
          >
            If I gave you{" "}
            <span className="text-yellow-400 relative">
              ₹1 Crore
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 origin-left block"
              />
            </span>{" "}
            today...
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-3xl md:text-5xl font-display font-light text-zinc-400 leading-tight"
          >
            And you could only invest it into solving{" "}
            <span className="font-black text-white underline decoration-cyan-500 decoration-4 underline-offset-8">
              ONE
            </span>{" "}
            problem...
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.5, duration: 0.8, type: "spring" }}
            className="text-5xl md:text-7xl font-display font-black text-white leading-tight"
          >
            What problem would you choose?
          </motion.h1>
        </div>

        {/* Money bag icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5 }}
          className="mt-20 flex justify-center"
        >
          <motion.div
            animate={{ y: [-6, 0, -6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-28 h-28 bg-yellow-400/10 border-2 border-yellow-400/30 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(250,204,21,0.2)]"
          >
            <IndianRupee className="w-14 h-14 text-yellow-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
