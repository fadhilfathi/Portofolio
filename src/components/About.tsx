const aboutCards = [
  {
    icon: "🔄",
    title: "CI/CD Pipelines",
    description: "Managing and maintaining CI/CD pipelines — automating build, test, and deployment workflows for reliable software delivery.",
    accent: "blue",
  },
  {
    icon: "☸️",
    title: "Kubernetes Administration",
    description: "Cluster management, deployments, scaling, and core Kubernetes operations for enterprise environments.",
    accent: "purple",
  },
  {
    icon: "🏗️",
    title: "DevOps & Infrastructure",
    description: "Docker containerization, Linux server management, scripting/automation, monitoring, and cloud/on-premise infrastructure support.",
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
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        DevOps Engineer at PT. Prima Vista Solusi, specializing in Kubernetes, CI/CD, and infrastructure automation.
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
