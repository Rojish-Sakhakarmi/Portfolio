import { Button } from "./ui/button";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2">
              <Mail size={18} />
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
