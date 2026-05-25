"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = `Hi, I'm Muh. Fadhil Fathi Rizal`;
  const subtitleText = `DevOps Engineer at PT. Prima Vista Solusi`;

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    setText("");
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [fullText]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-20 relative overflow-hidden">
      {/* Background: dark with subtle grid */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Subtle green glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-3xl w-full relative z-10">
        {/* Terminal window */}
        <div className="bg-[#0d0d14] border border-emerald-900/40 rounded-xl overflow-hidden shadow-2xl shadow-emerald-900/10">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a24] border-b border-emerald-900/30">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-xs text-emerald-600/60 ml-2 font-mono">user@devops:~$</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-10 font-mono">
            {/* Prompt line */}
            <div className="flex items-start gap-2 mb-2">
              <span className="text-emerald-500/70 shrink-0 mt-1">$</span>
              <span className="text-emerald-400/60 text-sm">cat /etc/profile</span>
            </div>

            {/* Name with typewriter */}
            <div className="flex items-start gap-2 mb-1">
              <span className="text-emerald-500/70 shrink-0 mt-1">$</span>
              <h1 className="text-3xl md:text-5xl font-bold text-emerald-400 leading-tight break-words">
                {text}
                {showCursor && (
                  <span className="inline-block w-[3px] h-[1em] bg-emerald-400 ml-1 align-middle animate-pulse" />
                )}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="flex items-start gap-2 mb-6">
              <span className="text-emerald-500/70 shrink-0 mt-0.5">#</span>
              <p className="text-base md:text-lg text-emerald-600">{subtitleText}</p>
            </div>

            {/* Description */}
            <div className="flex items-start gap-2 mb-8">
              <span className="text-emerald-500/70 shrink-0 mt-0.5">$</span>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                Building and automating infrastructure for reliable, scalable deployments.
                <span className="text-emerald-600/40"> {"{"}K8s, Docker, CI/CD, Cloud{"}"}</span>
              </p>
            </div>

            {/* Terminal-style buttons */}
            <div className="flex items-start gap-2 mb-4">
              <span className="text-emerald-500/70 shrink-0 mt-2">$</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-5 py-2 text-sm font-mono border border-emerald-700/50 text-emerald-400 rounded hover:bg-emerald-950/50 hover:border-emerald-500 transition-all duration-200 inline-flex items-center gap-2"
                >
                  ./view-work.sh
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2 text-sm font-mono border border-gray-700 text-gray-400 rounded hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200 inline-flex items-center gap-2"
                >
                  ./get-in-touch.sh
                </a>
                <a
                  href="https://github.com/fadhilfathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-sm font-mono border border-gray-700 text-gray-400 rounded hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200 inline-flex items-center gap-2"
                >
                  gh repo open
                </a>
                <a
                  href="https://linkedin.com/in/fadhilfathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-sm font-mono border border-gray-700 text-gray-400 rounded hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200 inline-flex items-center gap-2"
                >
                  linkedin connect
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="px-5 py-2 text-sm font-mono border border-emerald-700/50 text-emerald-400 rounded hover:bg-emerald-950/50 hover:border-emerald-500 transition-all duration-200 inline-flex items-center gap-2"
                >
                  wget cv.pdf
                </a>
              </div>
            </div>

            {/* Status line */}
            <div className="flex items-start gap-2 mt-6">
              <span className="text-emerald-500/70 shrink-0 mt-0.5">➜</span>
              <span className="text-xs text-emerald-700/50">
                System ready | uptime: {new Date().getFullYear() - 2022}+ years | status:{" "}
                <span className="text-emerald-500">active</span>
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 animate-bounce text-center">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="text-emerald-700/40 hover:text-emerald-500/60 transition-colors inline-block"
          >
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
