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
    <section id="experience" className="py-20 px-6 sm:px-10 lg:px-16 w-full flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">Experience</h2>
        <p className="text-gray-400 text-center mb-12">
          Infrastructure engineering and automation journey.
        </p>

        <div className="w-full max-w-3xl mx-4 sm:mx-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.role}-${exp.company}`}
              className="devops-card w-full mx-auto"
              style={{
                paddingLeft: '24px',
                paddingRight: '24px',
                paddingTop: '20px',
                paddingBottom: '20px',
              }}
            >
              <div
                className="flex flex-col mb-8 gap-4"
                style={{ paddingLeft: '4px', paddingRight: '4px' }}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-2xl font-bold text-white tracking-wider">{exp.role}</h3>
                  <span className="text-sm px-4 py-1.5 bg-purple-900/30 text-purple-300 rounded-sm border border-purple-500/30 font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-cyan-500 font-medium text-lg">{exp.company}</p>
              </div>

              <ul
                className="space-y-5 mb-10"
                style={{ paddingLeft: '4px', paddingRight: '4px' }}
              >
                {exp.descriptions.map((desc, i) => (
                  <li key={i} className="text-gray-300 text-sm flex gap-4 items-start">
                    <span className="text-cyan-500 font-mono shrink-0 leading-relaxed">❯</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              <div
                className="flex flex-wrap gap-3 justify-center mt-6"
                style={{ paddingLeft: '4px', paddingRight: '4px' }}
              >
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-[#1a1a2e] text-cyan-200 rounded-sm border border-cyan-900/50 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
