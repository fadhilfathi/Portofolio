export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="text-center max-w-3xl relative z-10">
        <div className="mb-6 animate-fade-in">
          <span className="text-6xl">👋</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
          Hi, I&apos;m Fathi
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed animate-fade-in-up">
          Full-Stack Developer &amp; AI Enthusiast. I build modern web applications
          and explore the intersection of technology and creativity.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-white/5"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll to about section" className="text-gray-600 hover:text-gray-400 transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
