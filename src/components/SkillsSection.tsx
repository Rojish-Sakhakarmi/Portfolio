import { Code2, Database, Globe, Laptop, Server, Smartphone } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Globe,
    items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "SQL", "REST APIs"],
  },
  {
    category: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools",
    icon: Laptop,
    items: ["Git", "VS Code", "Docker", "Linux"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Flutter", "Android", "iOS Basics"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">02.</span>{" "}
            <span className="text-foreground">Skills & Technologies</span>
          </h2>
          <div className="h-px bg-border flex-1 ml-4 mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-soft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <skill.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground text-sm flex items-center gap-2"
                    >
                      <span className="text-primary">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
