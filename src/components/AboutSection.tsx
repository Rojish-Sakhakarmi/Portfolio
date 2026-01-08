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
                Namaste! I'm Rojish Sakhakarmi, a passionate IT student from the beautiful 
                city of Bhaktapur, Nepal. Currently pursuing BCS.IT at KFA Business School & IT, 
                I'm dedicated to mastering the art of creating user-centered digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My primary interest lies in UI/UX design – understanding how people interact 
                with technology and creating interfaces that are not just functional, but 
                delightful to use. I believe great design is invisible; it just works.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond design, I have a keen interest in trading and possess strong 
                communication and sales skills. I'm always eager to learn new things and 
                connect with like-minded individuals.
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
