import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse delay-500" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-4 animate-fade-up opacity-0">
            Hi, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-up opacity-0 delay-100">
            <span className="text-foreground">Rojish Sakhakarmi</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6 animate-fade-up opacity-0 delay-200">
            UI/UX Enthusiast & IT Student
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 animate-fade-up opacity-0 delay-300">
            I'm a BCS.IT student from Bhaktapur, passionate about creating beautiful 
            and intuitive user experiences. Currently studying at KFA Business School & IT.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-10 animate-fade-up opacity-0 delay-400">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rojish@example.com"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-up opacity-0 delay-500">
            <Button variant="hero" size="lg" asChild>
              <a href="#skills">View My Skills</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
