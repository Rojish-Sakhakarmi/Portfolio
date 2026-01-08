import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description:
      "A web application that helps users manage their daily tasks efficiently with a clean and intuitive interface.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with modern design, seamless checkout experience, and integrated payment solutions.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project Three",
    description:
      "A real-time chat application with features like group chats, file sharing, and end-to-end encryption.",
    tech: ["React", "Socket.io", "Express", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">03.</span>{" "}
            <span className="text-foreground">Things I've Built</span>
          </h2>
          <div className="h-px bg-border flex-1 ml-4 mb-12" />

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative p-6 md:p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-primary font-mono text-sm mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
