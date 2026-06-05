"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function SlideD2_35() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
        <div className="w-[800px] h-[800px] bg-green-500 rounded-full blur-[150px]" />
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-32 h-32 bg-green-500/10 border border-green-500/30 rounded-3xl flex items-center justify-center mx-auto mb-14 shadow-[0_0_80px_rgba(34,197,94,0.4)]"
        >
          <ShieldCheck className="w-16 h-16 text-green-400" />
        </motion.div>
        <p className="text-green-500 font-mono tracking-[0.6em] text-3xl uppercase mb-8">Today</p>
        <h1 className="text-7xl md:text-9xl font-display font-black leading-tight">
          You Have{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Evidence</span>
        </h1>
      </motion.div>
    </div>
  );
}
