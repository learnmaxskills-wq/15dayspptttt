"use client";

import { motion, type Variants } from "framer-motion";
import { Clock, Hammer } from "lucide-react";

export function Slide6() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <motion.div
        className="w-full max-w-5xl z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.h2 variants={itemVariants} className="text-orange-500 font-mono tracking-widest text-lg uppercase mb-16">
          The Rules
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Rule 1 */}
          <motion.div variants={itemVariants} className="text-left bg-zinc-900 border border-zinc-800 p-10 rounded-3xl">
            <Clock className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-3xl font-bold font-display mb-4">45 Minutes. Every day.</h3>
            <ul className="text-xl text-zinc-400 space-y-3 font-light leading-relaxed">
              <li><strong className="text-white">Block 1:</strong> 1 Concept + Example</li>
              <li><strong className="text-white">Block 2:</strong> Live Building</li>
              <li><strong className="text-white">Block 3:</strong> Share + Feedback</li>
            </ul>
          </motion.div>

          {/* Rule 2 */}
          <motion.div variants={itemVariants} className="text-left bg-red-900/20 border border-red-500/30 p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-3xl" />
            <Hammer className="w-12 h-12 text-red-500 mb-6 relative z-10" />
            <h3 className="text-3xl font-bold font-display mb-4 text-red-500 relative z-10">Non-negotiable.</h3>
            <p className="text-xl text-zinc-300 font-light leading-relaxed relative z-10">
              "When I say build — you open the tool and you do it. Not tomorrow. Not after watching. Right now."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
