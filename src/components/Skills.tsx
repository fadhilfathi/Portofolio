const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "PostgreSQL", level: 75 },
  { name: "Docker", level: 70 },
  { name: "Git / GitHub", level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Technologies and tools I work with daily.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
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
