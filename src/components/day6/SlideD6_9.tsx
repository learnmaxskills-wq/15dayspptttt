"use client";

import { motion } from "framer-motion";
import { Wrench, Settings, Building } from "lucide-react";

export function SlideD6_9() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#080604] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="z-10 text-center max-w-4xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl text-zinc-500 font-light mb-6">"Now that we know what to build."</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-3xl text-zinc-500 font-light mb-6">"Now that we know who we are building for."</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="text-3xl text-zinc-400 font-medium mb-14">"We need a workshop."</motion.p>

        <div className="grid grid-cols-3 gap-8">
          {[
            { icon: Wrench, text: "Builders need tools.", color: "amber" },
            { icon: Settings, text: "Founders need systems.", color: "orange" },
            { icon: Building, text: "Startups need infrastructure.", color: "red" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 + i * 0.3 }}
              className={`bg-${item.color}-500/5 border border-${item.color}-500/30 p-8 rounded-3xl`}>
              <item.icon className={`w-12 h-12 text-${item.color}-400 mx-auto mb-4`} />
              <p className="text-xl text-zinc-200 font-bold">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
