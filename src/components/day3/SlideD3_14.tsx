"use client";

import { motion } from "framer-motion";
import { ArrowDown, Navigation } from "lucide-react";

const journey = ["Landing Page", "Questionnaire", "Processing", "Results", "Action Plan", "Return Visit"];

export function SlideD3_14() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
          <Navigation className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">How The User Moves Through Your Product</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">User Journey</h1>
      </motion.div>

      <div className="w-full max-w-5xl flex items-center justify-center flex-wrap gap-3 z-10 mb-10">
        {journey.map((step, i) => (
          <div key={i} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2, type: "spring" }}
              className={`px-7 py-4 rounded-2xl border-2 font-display font-bold text-xl ${
                i === 0 ? "bg-orange-500/15 border-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]" :
                i === journey.length - 1 ? "bg-green-500/10 border-green-500/50 text-green-400" :
                "bg-[#110900] border-zinc-800 text-zinc-400"
              }`}
            >
              <span className="text-xs font-mono block text-orange-500/50 mb-1 uppercase tracking-widest">{String(i + 1).padStart(2, "0")}</span>
              {step}
            </motion.div>
            {i < journey.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 + 0.1 }}>
                <ArrowDown className="w-5 h-5 text-zinc-700 rotate-[-90deg]" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="bg-[#110900] border border-orange-500/30 px-10 py-6 rounded-2xl z-10 flex items-center gap-8">
        <p className="text-xl text-orange-300 font-medium">💬 Ask students: <strong className="text-white">"What happens first?"</strong> → <strong className="text-white">"What happens second?"</strong></p>
      </motion.div>
    </div>
  );
}
