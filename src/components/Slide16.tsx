"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, Copy } from "lucide-react";

export function Slide16() {
  const codeString = `Find me Reddit threads and Quora discussions where people 
are complaining about [your problem]. I want the exact 
words real people use to describe their frustration. 
Quote specific comments if possible. What do they say 
they wish existed?`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative">
      <div className="text-center mb-12 z-10">
        <h2 className="text-orange-500 font-mono tracking-widest text-sm uppercase mb-4">Step 4: Reddit & Quora Mining</h2>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4">Customer Language</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Extracting your marketing copy directly from the source.</p>
      </div>

      <div className="w-full max-w-5xl z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-[#1a120b] border border-orange-900/50 rounded-3xl overflow-hidden shadow-2xl mb-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="p-8">
            <pre className="font-mono text-xl leading-relaxed text-zinc-200 whitespace-pre-wrap">
              {codeString}
            </pre>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex gap-6 items-start">
            <MessageSquareQuote className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-2">Unfiltered Pain</h3>
              <p className="text-zinc-400">These are not survey responses. These are real people venting about a real problem in their own language.</p>
            </div>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex gap-6 items-start">
            <Copy className="w-8 h-8 text-orange-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-2">Copywriting Gold</h3>
              <p className="text-zinc-400">When you describe your product using the exact words your customers use to describe their pain — it feels like you read their mind.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
