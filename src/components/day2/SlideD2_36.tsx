"use client";

import { motion } from "framer-motion";

export function SlideD2_36() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020817] p-12 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-600/5 blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      {/* Animated scan line */}
      <motion.div
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none z-0"
      />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center z-10 max-w-5xl">
        <p className="text-cyan-400 font-mono tracking-[0.6em] text-3xl uppercase mb-14">Tomorrow</p>

        <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-20 leading-tight">
          We Define What Deserves To Be Built.
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-[#040d1e] border border-cyan-900/40 p-14 rounded-[3rem] backdrop-blur-xl inline-block text-left shadow-[0_0_80px_rgba(6,182,212,0.06)]"
        >
          <p className="text-4xl text-zinc-400 font-light leading-relaxed mb-6">Ideas Are Cheap.</p>
          <p className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-black leading-relaxed tracking-wide">
            Evidence Is Power.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
