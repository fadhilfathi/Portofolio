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
    <section id="about" className="py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-start w-full">
        <h2 className="text-4xl font-bold text-left mb-4">About Me</h2>
        <p className="text-gray-400 text-left mb-12 max-w-2xl">
          DevOps Engineer at PT. Prima Vista Solusi, specializing in Kubernetes, CI/CD, and infrastructure automation.
        </p>
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {aboutCards.map((card) => (
            <div
              key={card.title}
              className={`bg-gray-800/50 border border-gray-700 rounded-xl text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${accentMap[card.accent]}`}
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                paddingTop: '20px',
                paddingBottom: '20px',
              }}
            >
              <div className="text-4xl mb-6">{card.icon}</div>
              <h3
                className="text-xl font-semibold mb-4 text-left"
                style={{ paddingLeft: '4px', paddingRight: '4px' }}
              >
                {card.title}
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed text-left"
                style={{ paddingLeft: '4px', paddingRight: '4px' }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
