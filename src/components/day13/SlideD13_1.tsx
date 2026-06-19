"use client";

import { motion } from "framer-motion";

export function SlideD13_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden">
      {/* Cinematic Spotlight and Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(244,63,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rose-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-1/4 w-[600px] h-[450px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Light Lines */}
      <motion.div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent pointer-events-none" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="absolute bottom-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent pointer-events-none" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={i} className="absolute w-1 h-1 bg-amber-400 rounded-full"
          style={{ left: `${15 + i * 14}%`, bottom: "10%" }}
          animate={{ y: [0, -600], opacity: [0, 0.8, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.8 }}
        />
      ))}

      {/* Content */}
      <div className="z-10 text-center max-w-5xl px-8 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex items-center gap-4 mb-8">
          <span className="h-[1px] w-12 bg-rose-500/50" />
          <span className="text-rose-400 uppercase font-mono font-bold tracking-[0.25em] text-sm">Founder Bootcamp · Day 13</span>
          <span className="h-[1px] w-12 bg-rose-500/50" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.3 }} className="text-[32px] md:text-[48px] font-light text-zinc-400 tracking-tight leading-none mb-1">
          HOW TO GET
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 50, filter: "blur(15px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 0.6 }} className="text-[72px] md:text-[110px] font-black tracking-tighter leading-none mb-8" style={{ background: "linear-gradient(135deg, #f43f5e 0%, #d946ef 45%, #fbbf24 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          USERS
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 1.2 }} className="w-80 h-[2px] mb-8" style={{ background: "linear-gradient(to right, transparent, #f43f5e, #fbbf24, transparent)" }} />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide max-w-2xl mb-12">
          "Attention is the <strong className="text-white font-semibold">currency of the internet</strong>."
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }} className="px-8 py-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl">
          <p className="text-sm font-mono text-zinc-400">
            Products get built. <span className="text-rose-400 font-semibold">Stories get shared. 🚀</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
