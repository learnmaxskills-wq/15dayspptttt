"use client";

import { motion } from "framer-motion";

const brands = [
  { company: "Netflix", value: "Escape", delay: 0.4 },
  { company: "Apple", value: "Identity", delay: 0.6 },
  { company: "Nike", value: "Aspiration", delay: 0.8 },
  { company: "Starbucks", value: "Experience", delay: 1.0 },
  { company: "LearnMax", value: "Possibility", delay: 1.4, highlight: true },
];

export function SlideD2_19() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h1 className="text-6xl md:text-8xl font-display font-black text-white">
          Product <span className="text-pink-500">≠</span> Value
        </h1>
      </motion.div>

      <div className="w-full max-w-4xl space-y-5 z-10">
        {brands.map((brand, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: brand.delay }}
            className={`flex items-center justify-between p-7 rounded-2xl border ${
              brand.highlight
                ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.25)] scale-105"
                : "bg-[#040d1e] border-zinc-800"
            }`}
          >
            <span className={`text-3xl font-display font-bold ${brand.highlight ? "text-cyan-300" : "text-zinc-400"}`}>{brand.company}</span>
            <span className={`text-3xl font-display font-black uppercase tracking-widest ${brand.highlight ? "text-white" : "text-zinc-300"}`}>{brand.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
