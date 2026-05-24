const aboutCards = [
  {
    icon: "💻",
    title: "Development",
    description: "Building modern web applications with React, Next.js, and TypeScript.",
    accent: "blue",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description: "Exploring AI agents, LLMs, and intelligent automation workflows.",
    accent: "purple",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description: "Turning data into insights with Python, SQL, and visualization tools.",
    accent: "green",
  },
];

const accentMap: Record<string, string> = {
  blue: "hover:border-blue-500/50",
  purple: "hover:border-purple-500/50",
  green: "hover:border-green-500/50",
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Passionate developer with a love for clean code and great user experiences.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {aboutCards.map((card) => (
          <div
            key={card.title}
            className={`bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${accentMap[card.accent]}`}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
