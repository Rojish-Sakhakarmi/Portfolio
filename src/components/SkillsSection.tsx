import { Palette, Code2, TrendingUp, MessageCircle, Megaphone, Lightbulb } from "lucide-react";

const skills = [
  {
    category: "UI/UX Design",
    icon: Palette,
    items: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    category: "Web Development",
    icon: Code2,
    items: ["HTML5", "CSS3", "Responsive Design", "Web Accessibility"],
  },
  {
    category: "Trading",
    icon: TrendingUp,
    items: ["Technical Analysis", "Market Research", "Risk Management", "Trading Strategies"],
  },
  {
    category: "Communication",
    icon: MessageCircle,
    items: ["Public Speaking", "Written Communication", "Active Listening", "Team Collaboration"],
  },
  {
    category: "Sales",
    icon: Megaphone,
    items: ["Client Relations", "Negotiation", "Presentation Skills", "Lead Generation"],
  },
  {
    category: "Soft Skills",
    icon: Lightbulb,
    items: ["Problem Solving", "Critical Thinking", "Time Management", "Adaptability"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">02.</span>{" "}
            <span className="text-foreground">Skills & Expertise</span>
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
