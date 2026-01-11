import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-primary font-mono text-sm md:text-lg">01.</span>{" "}
              <span className="text-foreground">About Me</span>
            </h2>
            <div className="h-px bg-border flex-1 ml-4 mb-8 md:mb-12" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* About Text */}
            <motion.div
              className="md:col-span-2 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Namaste! I’m Rojish Sakhakarmi, a BCS.IT student at KFA Business School & IT from Bhaktapur, Nepal. I’m passionate about UI/UX design — understanding how people interact with technology and making interfaces simple, smooth, and enjoyable to use.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                I’m also interested in trading and financial markets, which helps me think analytically and make data-driven decisions. I enjoy exploring new ideas, learning from real-world experiences, and applying them to my projects.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Alongside my studies, I’ve gained experience in customer-facing roles and online business operations, which strengthened my communication, problem-solving, and people skills. I love collaborating, experimenting, and building things that actually help people.
              </p>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="relative group mx-auto md:mx-0 w-48 md:w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="aspect-square rounded-lg bg-gradient-card border border-border overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-muted flex items-center justify-center overflow-hidden">
                    <motion.img
                      src="/images/profile.jpg" // ✅ Correct path for public folder
                      alt="Rojish Sakhakarmi"
                      className="w-full h-full object-cover rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-primary translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
