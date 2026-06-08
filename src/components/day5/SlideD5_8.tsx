"use client";

import { motion } from "framer-motion";

const layers = [
  { name: "Frontend", color: "emerald", items: ["Landing Page", "Questionnaire", "Dashboard", "Reports", "Roadmaps"] },
  { name: "Backend", color: "cyan", items: ["Career Matching Logic", "Roadmap Generator", "Recommendation System", "Business Logic"] },
  { name: "Database", color: "blue", items: ["Student Profiles", "Reports History", "Saved Results", "Progress Tracking"] },
  { name: "AI Layer", color: "fuchsia", items: ["Career Advice", "Analysis", "Personalized Roadmaps", "Insights"] },
];

export function SlideD5_8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />

      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-display font-black text-white mb-16 z-10">
        CareerGPS <span className="text-emerald-400">Architecture</span>
      </motion.h1>

      <div className="w-full max-w-7xl grid grid-cols-4 gap-6 px-8 z-10">
        {layers.map((layer, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.4 }}
            className={`bg-zinc-900/40 border-t-4 border-${layer.color}-500 rounded-2xl p-8 relative overflow-hidden group hover:bg-${layer.color}-500/5 transition-all`}>
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${layer.color}-500/10 blur-[40px] -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            <p className={`text-2xl font-display font-bold text-${layer.color}-400 mb-8`}>{layer.name}</p>
            
            <ul className="space-y-4">
              {layer.items.map((item, j) => (
                <motion.li key={j} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.4 + j * 0.1 }}
                  className="flex items-start gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full bg-${layer.color}-500 mt-2 flex-shrink-0`} />
                  <span className="text-zinc-300 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="mt-16 text-2xl text-emerald-400 font-light z-10">
        Now you stop seeing websites. <strong className="text-white font-bold">You start seeing systems.</strong>
      </motion.p>
    </div>
  );
}
