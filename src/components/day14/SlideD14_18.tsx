"use client";

import { motion } from "framer-motion";
import { BookOpen, Terminal, Sparkles, AlertCircle } from "lucide-react";

export function SlideD14_18() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050508] text-white relative overflow-hidden px-6 font-sans">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#ccff00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Lesson Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 mb-6 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full font-mono text-sm text-[#ccff00]">
          <BookOpen className="w-4 h-4 text-[#ccff00]" />
          <span>LESSON 7: AI SCRIPT WRITING</span>
        </motion.div>

        {/* Narrative triggers */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-zinc-500 font-mono text-xs uppercase bg-zinc-900 border border-zinc-850 px-3 py-1 rounded">
            [ Action: Open ChatGPT ]
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-red-500 font-mono text-xs uppercase bg-red-950/20 border border-red-950 px-3 py-1 rounded flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Show bad prompting first</span>
          </motion.div>
        </div>

        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-xl font-bold font-display text-zinc-400 mb-6">
          Then show them this <span className="text-[#00f0ff] font-bold">God-level prompt:</span>
        </motion.h3>

        {/* Terminal Block */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
          className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 md:p-8 w-full max-w-2xl relative overflow-hidden shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs">
              <Terminal className="w-4 h-4 text-[#00f0ff]" />
              <span>cinematic_script_generator.txt</span>
            </div>
            <Sparkles className="w-4 h-4 text-[#ccff00]" />
          </div>

          <pre className="font-mono text-xs md:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed select-all">
            <span className="text-[#ccff00] font-semibold">Act as a world-class startup marketer.</span>{"\n\n"}
            Create a <span className="text-[#00f0ff]">cinematic 60-second advertisement.</span>{"\n\n"}
            <span className="text-zinc-500">Startup:</span> [Describe your company]{"\n"}
            <span className="text-zinc-500">Audience:</span> [Describe target avatar]{"\n"}
            <span className="text-zinc-500">Problem:</span> [Describe the core pain point]{"\n"}
            <span className="text-zinc-500">Desired Emotion:</span> [Fear / Excitement / Relief]{"\n"}
            <span className="text-zinc-500">Tone:</span> [Futuristic, Raw, Inspiring]{"\n"}
            <span className="text-zinc-500">CTA:</span> [Goal conversion action]{"\n"}
            <span className="text-zinc-500">Platform:</span> [YouTube / TikTok / LinkedIn]{"\n"}
            <span className="text-zinc-500">Style:</span> [Cinematic, Fast-cut, Documentary]
          </pre>
        </motion.div>
      </div>
    </div>
  );
}
