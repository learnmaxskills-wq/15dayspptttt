"use client";

import { motion } from "framer-motion";
import { Globe, Server } from "lucide-react";

export function SlideD5_15() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020a08] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl grid grid-cols-2 gap-16 z-10 px-8">
        {/* Hosting */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-orange-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 9</h2>
          <h1 className="text-5xl font-display font-black text-white mb-8">HOSTING</h1>
          <p className="text-2xl text-zinc-400 font-light mb-10">"Where does a website live?"</p>
          
          <div className="bg-zinc-900/50 border border-zinc-700 p-8 rounded-3xl mb-8">
            <p className="text-red-400 font-medium mb-2">Before Deployment:</p>
            <p className="text-xl text-white">Exists only on your laptop. Nobody can access it.</p>
          </div>

          <div className="flex items-center gap-4 bg-orange-500/10 border border-orange-500/30 p-8 rounded-3xl">
            <Server className="w-12 h-12 text-orange-400 flex-shrink-0" />
            <div>
              <p className="text-orange-300 font-medium mb-1">Vercel takes your code</p>
              <p className="text-xl text-white font-bold">And publishes it to the world.</p>
            </div>
          </div>
        </motion.div>

        {/* Domains */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <h2 className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-4">Part 10</h2>
          <h1 className="text-5xl font-display font-black text-white mb-8">DOMAINS</h1>
          
          <div className="flex flex-col gap-4 mb-10">
            {["google.com", "amazon.com", "netflix.com"].map((domain, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 + i * 0.2 }} className="text-3xl font-mono text-cyan-300 bg-cyan-500/5 px-6 py-3 rounded-xl inline-block border border-cyan-500/20 w-fit">
                {domain}
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="bg-gradient-to-br from-cyan-500/15 to-transparent border border-cyan-500/30 p-8 rounded-3xl">
            <Globe className="w-10 h-10 text-cyan-400 mb-6" />
            <ul className="space-y-4 text-xl">
              <li><strong className="text-white">Domain</strong> = Address</li>
              <li><strong className="text-white">Hosting</strong> = Land</li>
              <li><strong className="text-white">Website</strong> = House</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
