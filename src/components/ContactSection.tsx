import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
const ContactSection = () => {
  return <section id="contact" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-primary font-mono text-xs mb-3 md:mb-4 md:text-base">
            03. What's Next?
          </motion.p>
          
          <motion.h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            Get In Touch
          </motion.h2>
          
          <motion.p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 leading-relaxed px-2" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            I'll try my best to get back to you!
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <Button variant="hero" size="lg" asChild>
              <motion.a href="mailto:rojish@example.com" className="inline-flex items-center gap-2" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Mail size={18} />
                Say Hello
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;