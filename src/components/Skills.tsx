const skills = [
  { name: "Kubernetes", level: 90, icon: "☸️" },
  { name: "Docker", level: 88, icon: "🐳" },
  { name: "CI/CD", level: 92, icon: "🔄" },
  { name: "Jenkins", level: 80, icon: "🏗️" },
  { name: "GitLab CI", level: 80, icon: "🦊" },
  { name: "GitHub Actions", level: 85, icon: "⚙️" },
  { name: "Linux Administration", level: 90, icon: "🐧" },
  { name: "Bash Scripting", level: 85, icon: "💻" },
  { name: "Monitoring (Prometheus, Grafana)", level: 82, icon: "📊" },
  { name: "Nginx", level: 78, icon: "🌐" },
  { name: "Terraform", level: 80, icon: "🏗️" },
  { name: "Ansible", level: 78, icon: "📜" },
  { name: "AWS", level: 80, icon: "☁️" },
  { name: "GCP", level: 75, icon: "🌥️" },
  { name: "Networking", level: 78, icon: "🔗" },
  { name: "Helm", level: 82, icon: "⛵" },
  { name: "ArgoCD", level: 80, icon: "🔄" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Skills & Expertise</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Core technologies and tools I work with daily to build and maintain robust infrastructure.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{skill.icon}</span>
              <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">{skill.name}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
