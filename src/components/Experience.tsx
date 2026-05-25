interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  descriptions: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "DevOps Engineer",
    company: "PT. Prima Vista Solusi",
    period: "Present",
    descriptions: [
      "Designing and maintaining CI/CD pipelines to automate build, test, and deployment workflows for reliable software delivery.",
      "Managing Kubernetes clusters including deployments, scaling, monitoring, and day-to-day administration.",
      "Containerizing applications with Docker and orchestrating microservices in production environments.",
      "Administering Linux servers, writing automation scripts, and supporting both cloud and on-premise infrastructure.",
      "Implementing monitoring and alerting solutions to ensure system reliability and performance.",
      "Implementing Infrastructure as Code with Terraform and Ansible for automated provisioning and configuration management.",
      "Managing cloud infrastructure on AWS and GCP, including networking, security, and cost optimization.",
    ],
    tags: ["Kubernetes", "CI/CD", "Docker", "Linux", "Terraform", "Ansible", "AWS", "GCP", "Monitoring"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl">
          Current role and responsibilities in the DevOps and infrastructure space.
        </p>

        <div className="relative w-full max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.role}-${exp.company}`}
              className="relative mb-12 md:mb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-7px] md:left-1/2 md:-translate-x-1/2 top-0 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-gray-950 z-10 shadow-lg shadow-blue-500/25" />

              {/* Content card */}
              <div className="ml-6 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
