"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const flow = [
  { label: "Student", color: "emerald", direction: "right" },
  { label: "Frontend", color: "cyan", direction: "right" },
  { label: "Backend", color: "blue", direction: "down" },
  { label: "Database", color: "purple", direction: "right" },
  { label: "AI", color: "fuchsia", direction: "up" },
  { label: "Backend", color: "blue", direction: "left" },
  { label: "Frontend", color: "cyan", direction: "left" },
  { label: "Student", color: "emerald", direction: "end" },
];

export function SlideD5_10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <h1 className="text-4xl md:text-6xl font-display font-black text-white">The Journey Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Every AI Product</span></h1>
      </motion.div>

      {/* Diagram Grid */}
      <div className="relative w-full max-w-5xl h-[400px] z-10 flex items-center justify-center">
        {/* Top Row: Student -> Frontend -> Backend */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="absolute top-0 left-[10%] bg-emerald-500/10 border-2 border-emerald-500/40 px-8 py-4 rounded-2xl"><p className="text-2xl font-bold text-emerald-400">Student</p></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute top-[35px] left-[28%]"><ArrowRight className="w-8 h-8 text-emerald-500/50" /></motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }} className="absolute top-0 left-[40%] bg-cyan-500/10 border-2 border-cyan-500/40 px-8 py-4 rounded-2xl"><p className="text-2xl font-bold text-cyan-400">Frontend</p></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute top-[35px] left-[60%]"><ArrowRight className="w-8 h-8 text-cyan-500/50" /></motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.5 }} className="absolute top-0 left-[72%] bg-blue-500/10 border-2 border-blue-500/40 px-8 py-4 rounded-2xl"><p className="text-2xl font-bold text-blue-400">Backend</p></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="absolute top-[90px] left-[80%]"><ArrowDown className="w-8 h-8 text-blue-500/50" /></motion.div>

        {/* Database Branch */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.5 }} className="absolute top-[160px] left-[72%] bg-purple-500/10 border-2 border-purple-500/40 px-8 py-4 rounded-2xl"><p className="text-2xl font-bold text-purple-400">Database</p></motion.div>
        
        {/* Bottom Row: AI -> Backend -> Frontend -> Student */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }} className="absolute top-[210px] left-[80%]"><ArrowDown className="w-8 h-8 text-purple-500/50" /></motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 4.5 }} className="absolute bottom-0 left-[72%] bg-fuchsia-500/10 border-2 border-fuchsia-500/40 px-8 py-4 rounded-2xl"><p className="text-2xl font-bold text-fuchsia-400">AI</p></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }} className="absolute bottom-[35px] left-[60%] rotate-180"><ArrowRight className="w-8 h-8 text-fuchsia-500/50" /></motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 5.5 }} className="absolute bottom-0 left-[40%] bg-blue-500/10 border-2 border-blue-500/40 px-8 py-4 rounded-2xl"><p className="text-2xl font-bold text-blue-400">Backend</p></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6 }} className="absolute bottom-[35px] left-[28%] rotate-180"><ArrowRight className="w-8 h-8 text-blue-500/50" /></motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 6.5 }} className="absolute bottom-0 left-[10%] bg-cyan-500/10 border-2 border-cyan-500/40 px-8 py-4 rounded-2xl"><p className="text-2xl font-bold text-cyan-400">Frontend</p></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 7 }} className="absolute bottom-[90px] left-[15%] rotate-180"><ArrowDown className="w-8 h-8 text-cyan-500/50" /></motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 7.5 }} className="absolute top-[160px] left-[10%] bg-emerald-500/15 border-2 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.3)] px-8 py-4 rounded-2xl"><p className="text-2xl font-bold text-white">Student</p></motion.div>
      </div>
    </div>
  );
}
