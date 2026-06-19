"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Copy } from "lucide-react";

export function SlideD13_14() {
  const models = ["Claude", "Gemini", "ChatGPT", "Perplexity"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020005] text-white relative overflow-hidden px-6">
      {/* Glow */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-4xl w-full flex flex-col items-center">
        {/* Act badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-6 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-rose-400">
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>ACT 6: AI SCRIPT GENERATION</span>
        </motion.div>

        {/* Model grid */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8">
          {models.map((model, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2 }}
              className="px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 font-mono text-sm text-zinc-300"
            >
              {model}
            </motion.div>
          ))}
        </div>

        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-xl font-bold font-display text-zinc-400 mb-6">
          Teach a <span className="text-amber-400">God-level prompt:</span>
        </motion.h3>

        {/* Terminal block */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}
          className="bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 md:p-8 w-full max-w-2xl relative overflow-hidden shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
            <div className="flex items-center gap-2 text-zinc-500">
              <Terminal className="w-4 h-4 text-rose-400" />
              <span className="font-mono text-xs uppercase tracking-wider">marketer_prompt.md</span>
            </div>
            <Copy className="w-4 h-4 text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors" />
          </div>

          <pre className="font-mono text-sm md:text-base text-zinc-200 whitespace-pre-wrap leading-relaxed select-all">
            <span className="text-amber-400 font-semibold">Act as a world-class startup marketer.</span>{"\n\n"}
            Create a <span className="text-rose-400">60-second marketing video script.</span>{"\n\n"}
            <span className="text-zinc-500">Audience:</span> [Describe target users]{"\n"}
            <span className="text-zinc-500">Problem:</span> [Describe their primary pain point]{"\n"}
            <span className="text-zinc-500">Solution:</span> [Describe your startup/product]{"\n"}
            <span className="text-zinc-500">Desired emotion:</span> [Excited, Relieved, Inspired]{"\n"}
            <span className="text-zinc-500">CTA:</span> [What they should do immediately]
          </pre>
        </motion.div>
      </div>
    </div>
  );
}
