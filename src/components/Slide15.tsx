"use client";

import { motion } from "framer-motion";
import { Brain, ShieldAlert } from "lucide-react";

export function Slide15() {
  const codeString = `I am a student founder in India. I want to build [product 
idea] to solve [specific problem] for [specific customer].

Here is my market research summary:
[paste your 3 key findings from Perplexity]
[paste your Google Trends observation]

Now act as a senior startup investor. Do three things:

1. VALIDATE — What does this research confirm?
2. CHALLENGE — What are the 3 biggest assumptions I am 
   making that could be wrong? What could kill this?
3. GAP — What is the single most important thing I still 
   don't know that I must find out before building?

Be direct. Don't flatter the idea. Give me the truth.`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <div className="text-center mb-12 z-10">
        <h2 className="text-amber-400 font-mono tracking-widest text-sm uppercase mb-4">Step 3: Claude Strategic Analysis</h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4">The Stress Test</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Make AI think like a senior investor tearing apart your idea.</p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-[#1C1917] border border-amber-900/30 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="bg-[#292524] border-b border-amber-900/30 px-6 py-4 flex items-center gap-4">
            <Brain className="w-5 h-5 text-amber-500" />
            <span className="text-amber-500 font-mono text-sm">claude_investor_prompt.txt</span>
          </div>
          <div className="p-8">
            <pre className="font-mono text-[15px] leading-relaxed text-zinc-300 whitespace-pre-wrap">
              {codeString.split('\n').map((line, i) => (
                <div key={i} className={line.includes('VALIDATE') || line.includes('CHALLENGE') || line.includes('GAP') ? "text-amber-400 font-bold" : ""}>{line}</div>
              ))}
            </pre>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-8">
          <div className="bg-amber-500/10 border border-amber-500/20 p-8 rounded-3xl flex gap-6 items-start">
            <ShieldAlert className="w-10 h-10 text-amber-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">The Uncomfortable Truth</h3>
              <p className="text-zinc-300 text-lg leading-relaxed">
                Most founders never ask for the truth before building. They assume they are right. This prompt saves you 6 months of building the wrong thing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
