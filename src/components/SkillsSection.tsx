import { Palette, Code2, TrendingUp, MessageCircle, Megaphone, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-primary font-mono text-sm md:text-lg">02.</span>{" "}
              <span className="text-foreground">Skills & Expertise</span>
            </h2>
            <div className="h-px bg-border flex-1 ml-4 mb-8 md:mb-12" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 30px hsl(172 66% 50% / 0.2)"
                }}
                className="group p-5 md:p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="p-2 rounded-lg bg-primary/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className="text-primary w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className="text-muted-foreground text-xs md:text-sm flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                    >
                      <span className="text-primary">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
