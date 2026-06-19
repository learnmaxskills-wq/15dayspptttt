"use client";

import { motion } from "framer-motion";
import { Smartphone, Footprints, BatteryCharging } from "lucide-react";

export function SlideD13_7() {
  const brands = [
    {
      name: "Apple",
      icon: Smartphone,
      product: "Phones",
      outcome: "Status",
      color: "from-zinc-400 to-zinc-600",
      accent: "border-zinc-800",
      glow: "bg-zinc-500/5",
    },
    {
      name: "Nike",
      icon: Footprints,
      product: "Shoes",
      outcome: "Identity",
      color: "from-rose-400 to-rose-600",
      accent: "border-rose-950/40",
      glow: "bg-rose-500/5",
    },
    {
      name: "Tesla",
      icon: BatteryCharging,
      product: "Electric Cars",
      outcome: "The Future",
      color: "from-amber-400 to-amber-600",
      accent: "border-amber-950/40",
      glow: "bg-amber-500/5",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Lights */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-rose-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500 font-mono tracking-widest text-xs uppercase mb-8">
          The Psychology of Value
        </motion.span>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          {brands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.3, type: "spring", stiffness: 100 }}
                className={`bg-zinc-950/60 border ${brand.accent} rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden text-center group`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${brand.glow} blur-[40px] group-hover:opacity-100 transition-all`} />
                <div className="flex items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-display mb-1">{brand.name}</h4>
                <p className="text-zinc-500 text-xs font-mono mb-4">doesn't sell {brand.product}</p>
                <div className="h-[1px] w-12 bg-zinc-800 mb-4" />
                <span className={`text-xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r ${brand.color}`}>
                  They sell {brand.outcome}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Core Takeaway */}
        <div className="flex flex-col items-center">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="w-24 h-[1px] bg-zinc-800 mb-6" />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">Then:</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }} className="text-3xl md:text-5xl font-black font-display tracking-tight text-center">
            People don't buy products.<br />
            They buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">outcomes.</span>
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
