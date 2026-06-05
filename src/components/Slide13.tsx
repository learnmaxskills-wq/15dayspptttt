"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function Slide13() {
  const codeString = `I am a student founder in India building a startup to solve 
[your specific problem] for [your specific customer]. 

Run a deep research report covering:
1. How many people in India face this problem
2. Top 3-5 existing solutions or competitors
3. The most common complaints people have
4. What customers currently pay for workarounds
5. One major trend making this problem bigger in 2025-26

Be specific. Cite your sources. Give me founder-level 
insights, not a generic overview.`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <div className="text-center mb-12 z-10">
        <h2 className="text-indigo-400 font-mono tracking-widest text-sm uppercase mb-4">Step 1: Perplexity Deep Research</h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4">The Data Engine</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Replaces 3 days of manual Googling in 3 minutes.</p>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="w-full max-w-4xl bg-[#0D0D11] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col h-[500px]">
        <div className="bg-[#1A1A24] border-b border-zinc-800 px-6 py-4 flex items-center gap-4 flex-shrink-0">
          <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
          <div className="flex items-center gap-2 text-zinc-400 font-mono text-sm ml-4"><Terminal className="w-4 h-4" /><span>perplexity_deep_research.prompt</span></div>
        </div>
        <div className="flex flex-1 overflow-hidden p-6">
          <div className="flex flex-col text-zinc-600 font-mono text-lg leading-relaxed select-none pr-4 text-right border-r border-zinc-800/50 mr-4 pt-1">
            {codeString.split('\n').map((_, i) => (
              <span key={i}>{(i + 1).toString().padStart(2, '0')}</span>
            ))}
          </div>
          <textarea 
            className="flex-1 bg-transparent text-zinc-300 font-mono text-lg leading-relaxed outline-none resize-none whitespace-pre-wrap pt-1 placeholder:text-zinc-700"
            defaultValue={codeString}
            spellCheck={false}
          />
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
    </div>
  );
}
