"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap } from "lucide-react";

export function Slide7() {
  const tableData = [
    { school: "Find the right answer", founder: "Find the right question" },
    { school: "Avoid being wrong", founder: "Use being wrong as data" },
    { school: "Wait for instructions", founder: "Move before you're ready" },
    { school: "Impress the teacher", founder: "Solve the customer's pain" },
    { school: "Finish the assignment", founder: "Ship the product" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-orange-500 font-mono tracking-widest text-sm uppercase mb-4">
          7:00 – 13:00 | Startup Lesson 1
        </h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
          The Mindset Shift
        </h1>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-2 gap-8 z-10">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex items-center justify-center gap-3 mb-10 text-zinc-400">
            <GraduationCap className="w-8 h-8" />
            <h3 className="text-3xl font-display font-bold">School Brain</h3>
          </div>
          <div className="space-y-6">
            {tableData.map((row, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }} className="bg-zinc-800/50 rounded-xl p-4 text-center text-lg text-zinc-300 font-medium">
                {row.school}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600/10 to-red-900/10 border border-orange-500/30 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="flex items-center justify-center gap-3 mb-10 text-orange-500">
            <Zap className="w-8 h-8" />
            <h3 className="text-3xl font-display font-bold">Founder Brain</h3>
          </div>
          <div className="space-y-6 relative z-10">
            {tableData.map((row, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }} className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4 text-center text-lg text-white font-bold">
                {row.founder}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
