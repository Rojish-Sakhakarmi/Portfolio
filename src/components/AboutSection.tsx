const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-lg">01.</span>{" "}
            <span className="text-foreground">About Me</span>
          </h2>
          <div className="h-px bg-border flex-1 ml-4 mb-12" />

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm a passionate IT student with a love for technology and problem-solving. 
                My journey in tech started when I built my first website, and I've been hooked ever since.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy creating things that live on the internet, whether that be websites, 
                applications, or anything in between. My goal is to always build products that 
                provide pixel-perfect, performant experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or learning about the latest trends in software development.
              </p>
            </div>

            <div className="relative group">
              <div className="relative">
                <div className="aspect-square rounded-lg bg-gradient-card border border-border overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg border-2 border-primary translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
