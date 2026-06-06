"use client";

import { motion } from "framer-motion";
import { PenLine } from "lucide-react";

const examples = [
  { brand: "Netflix", wrong: "Entertainment", right: "Escape" },
  { brand: "Uber", wrong: "Transportation", right: "Convenience" },
  { brand: "Apple", wrong: "Phones", right: "Identity" },
  { brand: "CareerGPS", wrong: "Career Guidance", right: "Career Confidence", highlight: true },
];

export function SlideD3_5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-14 z-10 items-start">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
            <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">The Real Truth</h2>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-6">People Don't Buy Products</h1>
            <h2 className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">People Buy Outcomes</h2>
          </motion.div>

          <div className="space-y-4">
            {examples.map((ex, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15 }} className={`flex items-center justify-between p-5 rounded-2xl border ${ex.highlight ? "bg-orange-500/10 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.2)]" : "bg-zinc-900/40 border-zinc-800"}`}>
                <span className={`text-xl font-bold ${ex.highlight ? "text-orange-300" : "text-zinc-400"}`}>{ex.brand}</span>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600 line-through text-lg">{ex.wrong}</span>
                  <span className="text-zinc-500 text-sm">→</span>
                  <span className={`text-xl font-black ${ex.highlight ? "text-white" : "text-zinc-200"}`}>{ex.right}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-6 bg-orange-500/10 border border-orange-500/30 p-5 rounded-2xl">
            <p className="text-lg text-orange-300 font-medium italic">"We are not building products today. We are designing <strong className="text-white not-italic">outcomes.</strong>"</p>
          </motion.div>
        </div>

        {/* Notes Box */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-[#110900] border-2 border-orange-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <PenLine className="w-6 h-6 text-orange-400" />
            <p className="text-orange-400 font-mono tracking-widest text-sm uppercase font-bold">Your Notes</p>
          </div>
          <p className="text-zinc-300 text-2xl font-bold mb-3">My Product Creates:</p>
          <p className="text-zinc-500 text-sm mb-8">(What outcome do your customers actually buy?)</p>
          <div className="space-y-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-10 border-b border-orange-900/40" />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
