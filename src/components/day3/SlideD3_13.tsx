"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const modules = [
  { num: "01", name: "Assessment", desc: "Input & profiling" },
  { num: "02", name: "AI Analysis", desc: "Smart processing" },
  { num: "03", name: "Recommendations", desc: "Personalized paths" },
  { num: "04", name: "Roadmap", desc: "Step-by-step plan" },
  { num: "05", name: "Action Plan", desc: "Daily tasks" },
];

export function SlideD3_13() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 z-10">
        <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
          <Layers className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Example: CareerGPS</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">Product Modules</h1>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-5 gap-4 z-10 mb-10">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 200 }}
            className="bg-[#110900] border border-orange-500/30 rounded-2xl p-6 flex flex-col items-center text-center group hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300"
          >
            <span className="text-orange-500/40 font-mono text-xs mb-4">{mod.num}</span>
            <h3 className="text-xl font-display font-bold text-orange-300 mb-3">{mod.name}</h3>
            <p className="text-zinc-600 text-sm font-light">{mod.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="bg-amber-500/10 border border-amber-500/30 px-10 py-5 rounded-2xl z-10">
        <p className="text-2xl text-amber-300 font-bold text-center">Founder Lesson: Products Are <span className="text-white">Systems</span>. Not Pages.</p>
      </motion.div>
    </div>
  );
}
