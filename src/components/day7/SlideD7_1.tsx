"use client";

import { motion } from "framer-motion";

export function SlideD7_1() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#03050f] text-white relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 30% 60%, rgba(139,92,246,0.06) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 30% at 75% 35%, rgba(59,130,246,0.05) 0%, transparent 50%)" }} />

      {/* Hex grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(99,102,241,0.4) 50px)", backgroundSize: "50px 50px" }} />

      {/* Animated vertical lines */}
      {[15, 35, 55, 75, 90].map((left, i) => (
        <motion.div key={`vl-${i}`} className="absolute top-0 bottom-0 w-[1px] pointer-events-none" style={{ left: `${left}%`, background: `linear-gradient(to bottom, transparent 0%, rgba(99,102,241,${0.05 + i * 0.02}) 40%, transparent 100%)` }}
          animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7 }} />
      ))}

      {/* Floating holographic orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div key={`orb-${i}`} className="absolute rounded-full pointer-events-none" style={{
          width: `${8 + i * 4}px`, height: `${8 + i * 4}px`,
          background: i % 2 === 0 ? "radial-gradient(circle, rgba(99,102,241,0.8), transparent)" : "radial-gradient(circle, rgba(139,92,246,0.6), transparent)",
          left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%`,
          filter: "blur(1px)",
        }}
          animate={{ y: [0, -40, 0], x: [0, i % 2 === 0 ? 20 : -20, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Horizontal scanner */}
      <motion.div className="absolute left-0 right-0 h-[3px] pointer-events-none" style={{ background: "linear-gradient(to right, transparent 5%, rgba(99,102,241,0.05) 15%, rgba(99,102,241,0.4) 50%, rgba(99,102,241,0.05) 85%, transparent 95%)", boxShadow: "0 0 30px rgba(99,102,241,0.4), 0 0 60px rgba(99,102,241,0.2)" }}
        animate={{ y: ["-5vh", "105vh"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />

      {/* Content */}
      <div className="z-10 text-center max-w-6xl px-8">
        {/* Top decoration */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="flex items-center justify-center gap-8 mb-14">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.5 }} className="h-[1px] w-40 origin-right" style={{ background: "linear-gradient(to left, rgba(99,102,241,0.7), transparent)" }} />
          <div className="flex items-center gap-3">
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <motion.span initial={{ letterSpacing: "4px", opacity: 0 }} animate={{ letterSpacing: "14px", opacity: 1 }} transition={{ duration: 2, delay: 0.8 }} className="text-indigo-400/90 uppercase font-mono font-bold text-xs tracking-[14px]">LearnMax · Day 07</motion.span>
            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
          </div>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 0.5 }} className="h-[1px] w-40 origin-left" style={{ background: "linear-gradient(to right, rgba(99,102,241,0.7), transparent)" }} />
        </motion.div>

        {/* Title — Stacked dramatic with glow */}
        <div className="relative mb-4">
          {/* Ghost text behind for glow */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ delay: 1.5, duration: 2 }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={{ filter: "blur(40px)" }}>
            <span className="text-[130px] font-display font-black text-indigo-500 leading-none">FIRST BUILD</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50, filter: "blur(15px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: 1 }}
            className="text-[36px] md:text-[48px] font-display font-extralight text-indigo-300/70 tracking-[0.2em] uppercase leading-none mb-4">
            The
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 80, filter: "blur(30px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 1.4 }}
            className="text-[75px] md:text-[140px] font-display font-black leading-none tracking-tighter relative">
            <span style={{ background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 20%, #c084fc 40%, #818cf8 60%, #6366f1 80%, #a78bfa 100%)", backgroundSize: "200% 200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FIRST BUILD</span>
          </motion.h1>
        </div>

        {/* Decorative divider */}
        <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 2.5 }} className="flex items-center justify-center gap-4 my-10">
          <div className="h-[1px] w-24" style={{ background: "linear-gradient(to right, transparent, rgba(99,102,241,0.5))" }} />
          <div className="w-3 h-3 rotate-45 border border-indigo-500/50" />
          <div className="h-[1px] w-48" style={{ background: "linear-gradient(to right, rgba(99,102,241,0.5), rgba(139,92,246,0.5), rgba(99,102,241,0.5))" }} />
          <div className="w-3 h-3 rotate-45 border border-indigo-500/50" />
          <div className="h-[1px] w-24" style={{ background: "linear-gradient(to left, transparent, rgba(99,102,241,0.5))" }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }} className="text-2xl md:text-3xl text-zinc-400 font-extralight tracking-wider mb-16">Bringing Your Startup To Life</motion.p>

        {/* Quote card */}
        <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 3.5 }} className="relative inline-block group">
          <div className="absolute -inset-[1px] rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.6), rgba(139,92,246,0.4), rgba(59,130,246,0.3), rgba(99,102,241,0.6))" }} />
          <div className="relative bg-[#060820]/95 backdrop-blur-xl px-14 py-7 rounded-2xl">
            <p className="text-xl text-indigo-200/80 font-light">"Today your startup takes its <strong className="text-white font-bold">first breath.</strong>"</p>
          </div>
        </motion.div>
      </div>

      {/* Corner frames */}
      <svg className="absolute top-6 left-6 w-20 h-20 pointer-events-none" viewBox="0 0 80 80"><path d="M0 30 L0 4 Q0 0 4 0 L30 0" fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" /></svg>
      <svg className="absolute top-6 right-6 w-20 h-20 pointer-events-none" viewBox="0 0 80 80"><path d="M50 0 L76 0 Q80 0 80 4 L80 30" fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" /></svg>
      <svg className="absolute bottom-6 left-6 w-20 h-20 pointer-events-none" viewBox="0 0 80 80"><path d="M0 50 L0 76 Q0 80 4 80 L30 80" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" /></svg>
      <svg className="absolute bottom-6 right-6 w-20 h-20 pointer-events-none" viewBox="0 0 80 80"><path d="M50 80 L76 80 Q80 80 80 76 L80 50" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" /></svg>
    </div>
  );
}
