"use client";

import { motion } from "framer-motion";
import { Home, PenLine } from "lucide-react";

const questions = [
  { num: "01", q: "What did you like?" },
  { num: "02", q: "What confused you?" },
  { num: "03", q: "What would you improve?" },
];

export function SlideD3_24() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-10 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-14 z-10 items-start">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
            <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
              <Home className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Tonight's Mission</h2>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-8">Homework</h1>
            <div className="bg-orange-500/10 border border-orange-500/40 p-6 rounded-2xl mb-8">
              <p className="text-2xl text-orange-200 font-bold">Show Prototype To <span className="text-white underline decoration-orange-500 decoration-4 underline-offset-4">3 People</span></p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {questions.map((q, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.2 }} className="flex items-center gap-5 bg-[#110900] border border-zinc-800 p-6 rounded-2xl">
                <span className="text-orange-500/40 font-mono text-xl font-bold flex-shrink-0">{q.num}</span>
                <p className="text-2xl font-display font-semibold text-zinc-300">{q.q}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-8 bg-amber-500/10 border border-amber-500/30 p-5 rounded-2xl">
            <p className="text-amber-300 font-medium text-lg">Write their <strong className="text-white">exact words</strong>. Not your interpretation.</p>
          </motion.div>
        </div>

        {/* Feedback notes */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-[#110900] border-2 border-orange-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.08)]">
          <div className="flex items-center gap-3 mb-8">
            <PenLine className="w-6 h-6 text-orange-400" />
            <p className="text-orange-400 font-mono tracking-widest text-sm uppercase font-bold">Feedback Log</p>
          </div>
          {["Person 1", "Person 2", "Person 3"].map((person, pi) => (
            <div key={pi} className="mb-8">
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">{person}</p>
              {["Liked", "Confused by", "Would improve"].map((label, li) => (
                <div key={li} className="mb-3">
                  <p className="text-orange-400/50 font-mono text-xs mb-1">{label}:</p>
                  <div className="w-full h-7 border-b border-orange-900/30" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
