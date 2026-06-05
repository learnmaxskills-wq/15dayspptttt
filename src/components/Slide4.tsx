"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Users, Bot } from "lucide-react";

export function Slide4() {
  const journey = [
    { day: "Days 1-3", title: "Problem & Validation", icon: Target, desc: "Find a painkiller, research the market, validate assumptions." },
    { day: "Days 4-8", title: "Product Building", icon: Rocket, desc: "Build the MVP using AI tools. Real product, real features." },
    { day: "Days 9-12", title: "Go-to-Market", icon: Users, desc: "Marketing strategy, finding your first 100 users, sales copy." },
    { day: "Days 13-15", title: "Automating Business", icon: Bot, desc: "Automating business with the most advanced AI tools available in the market." },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <div className="text-center mb-16 z-10">
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
          The 15-Day Journey
        </h1>
        <p className="text-xl text-zinc-400 mt-4 font-light">Every day you will build something. We build together.</p>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 hidden md:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {journey.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-orange-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-black border border-zinc-700 rounded-full flex items-center justify-center mb-6 z-10 group-hover:border-orange-500 group-hover:text-orange-500 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-2">{step.day}</h3>
                <h4 className="text-xl font-bold font-display mb-3">{step.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
