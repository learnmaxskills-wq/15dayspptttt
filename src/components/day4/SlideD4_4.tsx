"use client";

import { motion } from "framer-motion";
import { PackageX, Hammer } from "lucide-react";

const tools = ["ChatGPT", "Claude", "Cursor", "Bolt", "Lovable", "50 more tools..."];

export function SlideD4_4() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050510] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-16 z-10 items-center">
        {/* Tool Collector */}
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
          <div className="bg-red-950/20 border-2 border-red-900/40 rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-red-500/15 border border-red-500/30 rounded-2xl flex items-center justify-center"><PackageX className="w-7 h-7 text-red-500" /></div>
              <div>
                <p className="text-red-400 font-mono text-xs uppercase tracking-widest">Danger Zone</p>
                <p className="text-3xl font-display font-black text-red-400">Tool Collector</p>
              </div>
            </div>
            <div className="space-y-3">
              {tools.map((tool, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }} className="flex items-center gap-3 text-zinc-500">
                  <span className="text-red-500/40">→</span>
                  <span className="text-lg">Learn {tool}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-8 bg-red-500/10 border border-red-500/30 px-6 py-4 rounded-xl text-center">
              <p className="text-2xl font-display font-black text-red-400">Build Nothing.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Builder */}
        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
          <div className="bg-purple-500/5 border-2 border-purple-500/40 rounded-3xl p-10 shadow-[0_0_60px_rgba(168,85,247,0.15)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-purple-500/15 border border-purple-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)]"><Hammer className="w-7 h-7 text-purple-400" /></div>
              <div>
                <p className="text-purple-400 font-mono text-xs uppercase tracking-widest">The Goal</p>
                <p className="text-3xl font-display font-black text-purple-400">Builder</p>
              </div>
            </div>
            <div className="space-y-5 mb-8">
              {["Identify a real problem", "Understand the customer", "Design the solution", "Use the RIGHT tool", "Ship the product"].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.15 }} className="flex items-center gap-4">
                  <span className="text-purple-400 font-mono text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xl text-zinc-200 font-medium">{step}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="bg-purple-500/15 border border-purple-500/40 px-6 py-4 rounded-xl text-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <p className="text-2xl font-display font-black text-white">Build Everything. 🚀</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
