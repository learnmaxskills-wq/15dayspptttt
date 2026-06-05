"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Volume2 } from "lucide-react";

export function Slide0() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasUnmuted, setHasUnmuted] = useState(false);

  const handleUnmuteAndRestart = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setHasUnmuted(true);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-white relative overflow-hidden">
      {/* Background cinematic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 mb-8"
      >
        <p className="text-orange-500 font-mono tracking-widest text-sm uppercase mb-4 animate-pulse">
          Starting Shortly
        </p>
        <h1 className="text-4xl md:text-5xl font-display font-black tracking-tighter mix-blend-difference">
          THE REAL WORLD
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 w-full max-w-5xl rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(249,115,22,0.15)] group bg-black"
      >
        <video
          ref={videoRef}
          src="/lmtraler.mp4"
          className="w-full h-auto aspect-video object-cover"
          autoPlay
          muted
          loop={!hasUnmuted} // Loop while muted, perhaps let it play through once unmuted
          controls
          playsInline
        />

        {!hasUnmuted && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm transition-opacity duration-500">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUnmuteAndRestart}
              className="flex items-center gap-4 bg-orange-500 text-black font-display font-bold px-8 py-4 rounded-full text-2xl shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] transition-shadow"
            >
              <Volume2 className="w-8 h-8" />
              UNMUTE & RESTART
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
