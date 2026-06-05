"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const haves = ["Problem", "Customer", "Market Research", "Trend Analysis", "Customer Insights", "Investor Feedback", "Opportunity Analysis", "Startup Direction"];

export function SlideD2_33() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-[#040d1e] border border-green-900/30 rounded-[3rem] p-16 shadow-[0_0_80px_rgba(34,197,94,0.05)] z-10 relative overflow-hidden"
      >
        <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-14 text-center">What You Have Now</h1>

        <div className="grid grid-cols-2 gap-x-16 gap-y-5">
          {haves.map((have, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-5 bg-black/30 p-5 rounded-2xl border border-zinc-800"
            >
              <CheckCircle2 className="w-7 h-7 text-green-500 flex-shrink-0" />
              <span className="text-2xl text-zinc-300 font-medium">{have}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
