"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, ArrowDown } from "lucide-react";

const wirePages = ["Landing", "Input", "Result", "Dashboard"];

export function SlideD3_18() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0500] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(249,115,22,0.05),transparent)]" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 z-10">
        <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
          <LayoutTemplate className="w-8 h-8 text-orange-400" />
        </div>
        <h2 className="text-orange-500 font-mono tracking-[0.5em] text-sm uppercase mb-4">Think Before Building</h2>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white">Wireframe</h1>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-12 z-10 items-start">
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 mb-10">
            {[
              { label: "Simple Boxes.", color: "text-zinc-300" },
              { label: "No Design.", color: "text-zinc-400" },
              { label: "No Colors.", color: "text-zinc-500" },
              { label: "No Beauty.", color: "text-zinc-600" },
              { label: "Just Logic.", color: "text-orange-400 text-3xl font-black" },
            ].map((item, i) => (
              <motion.p key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15 }} className={`text-2xl font-display font-bold ${item.color}`}>{item.label}</motion.p>
            ))}
          </motion.div>

          <div className="flex items-center flex-wrap gap-3">
            {wirePages.map((page, i) => (
              <div key={i} className="flex items-center gap-3">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.2 }} className="px-6 py-3 bg-[#110900] border border-zinc-700 rounded-xl text-xl font-display font-semibold text-zinc-300">{page}</motion.div>
                {i < wirePages.length - 1 && <ArrowDown className="w-4 h-4 text-zinc-700 rotate-[-90deg]" />}
              </div>
            ))}
          </div>
        </div>

        {/* Wireframe sketch area */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-[#110900] border-2 border-dashed border-orange-500/30 rounded-3xl p-6 flex flex-col gap-4" style={{ minHeight: "50vh" }}>
          <p className="text-orange-400/60 font-mono text-xs uppercase tracking-widest mb-4">Your Wireframe Sketch</p>
          <div className="flex-1 bg-zinc-900/20 border border-zinc-800 rounded-2xl flex items-center justify-center">
            <p className="text-zinc-700 font-mono text-sm italic text-center">Landing Page<br /><span className="text-xs">Draw boxes. Label them. That's it.</span></p>
          </div>
          <div className="grid grid-cols-2 gap-3 flex-1">
            <div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl flex items-center justify-center"><p className="text-zinc-700 font-mono text-sm italic">Input</p></div>
            <div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl flex items-center justify-center"><p className="text-zinc-700 font-mono text-sm italic">Result</p></div>
          </div>
          <div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl flex-1 flex items-center justify-center">
            <p className="text-zinc-700 font-mono text-sm italic">Dashboard</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
