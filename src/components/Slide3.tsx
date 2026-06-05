"use client";

import { motion, type Variants } from "framer-motion";
import { X, Check } from "lucide-react";

export function Slide3() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <motion.div
        className="w-full max-w-5xl z-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.3 } }
        }}
      >
        <motion.h2 variants={itemVariants} className="text-orange-500 font-mono tracking-widest text-sm uppercase mb-4 text-center">
          What this is. And what it isn't.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Not a course */}
          <motion.div variants={itemVariants} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 flex flex-col items-center text-center">
            <div className="bg-red-500/20 p-4 rounded-2xl text-red-500 mb-6">
              <X className="w-12 h-12" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4">Not a course</h3>
            <p className="text-zinc-400 text-xl leading-relaxed">
              No watching videos. <br />
              No certificates. <br />
              No school assignments.
            </p>
          </motion.div>

          {/* Real Startup Cohort */}
          <motion.div variants={itemVariants} className="bg-orange-500/10 border border-orange-500/30 rounded-3xl p-10 flex flex-col items-center text-center">
            <div className="bg-orange-500 p-4 rounded-2xl text-black mb-6">
              <Check className="w-12 h-12" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4 text-orange-500">A real startup cohort</h3>
            <p className="text-zinc-300 text-xl leading-relaxed">
              15 days of building a real product, a real business model, a real marketing strategy, and a real AI-automated company — from scratch.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
