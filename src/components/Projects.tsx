interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "CI/CD Pipeline Automation",
    description:
      "End-to-end CI/CD pipeline with automated testing, building, and deployment using GitHub Actions and ArgoCD.",
    tags: ["GitHub Actions", "ArgoCD", "Docker", "Kubernetes"],
    link: "#",
  },
  {
    title: "Kubernetes Cluster Management",
    description:
      "Production-grade Kubernetes cluster setup with monitoring, auto-scaling, and service mesh.",
    tags: ["Kubernetes", "Helm", "Prometheus", "Istio"],
    link: "#",
  },
  {
    title: "Infrastructure Monitoring Dashboard",
    description:
      "Real-time infrastructure monitoring with alerting, log aggregation, and visualization.",
    tags: ["Grafana", "Prometheus", "ELK Stack"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio built with Next.js and Tailwind CSS. Features responsive design, smooth animations, and dark mode.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        A selection of DevOps and infrastructure projects I&apos;ve worked on, ranging from CI/CD automation to Kubernetes management.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition-colors"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
