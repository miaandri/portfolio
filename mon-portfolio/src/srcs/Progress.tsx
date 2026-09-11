import React from "react";

export default function Progress() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute w-80 h-80 bg-pink-500/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center gap-3">
        <span className="text-5xl mb-2 animate-bounce">🌸</span>
        <h1 className="text-5xl md:text-7xl font-black text-pink-400 tracking-widest font-mono">
          WORK_IN_PROGRESS
        </h1>
        <p className="text-gray-400 text-xs md:text-sm font-mono tracking-widest uppercase mt-2">
          This feature is currently under construction.
        </p>
        <a 
          href="/" 
          className="mt-8 text-xs font-mono text-pink-400/80 hover:text-pink-300 underline underline-offset-8 transition-colors"
        >
          ← back to home
        </a>
      </div>
    </div>
  );
}