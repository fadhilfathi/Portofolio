interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Kubernetes Cluster Management",
    description:
      "Production-grade Kubernetes cluster setup with monitoring, auto-scaling, and service mesh for high-availability workloads.",
    tags: ["Kubernetes", "Helm", "Prometheus", "Istio"],
    link: "https://github.com/fadhilfathi",
  },
  {
    title: "CI/CD Pipeline Automation",
    description:
      "End-to-end CI/CD pipeline with automated testing, building, and deployment using Jenkins, GitLab CI, GitHub Actions, and ArgoCD.",
    tags: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
    link: "https://github.com/fadhilfathi",
  },
  {
    title: "Dockerized Application Deployment",
    description:
      "Containerized microservices deployment with Docker Compose, multi-stage builds, and Helm charts for Kubernetes orchestration.",
    tags: ["Docker", "Docker Compose", "Helm", "Kubernetes"],
    link: "https://github.com/fadhilfathi",
  },
  {
    title: "Monitoring & Observability Stack",
    description:
      "Real-time infrastructure monitoring with Prometheus, Grafana dashboards, alerting rules, and centralized log aggregation.",
    tags: ["Prometheus", "Grafana", "Alerting", "Log Aggregation"],
    link: "https://github.com/fadhilfathi",
  },
  {
    title: "GitOps with ArgoCD",
    description:
      "Declarative GitOps workflow for Kubernetes deployments using ArgoCD, ensuring consistent and auditable infrastructure changes.",
    tags: ["ArgoCD", "GitOps", "Kubernetes", "Helm"],
    link: "https://github.com/fadhilfathi",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl">
          A selection of DevOps and infrastructure projects I&apos;ve worked on, ranging from CI/CD automation to Kubernetes management.
        </p>
        <div className="grid md:grid-cols-2 gap-8 w-full">
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
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
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
                className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition-colors justify-center"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
