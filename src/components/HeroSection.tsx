import { ArrowDown, Linkedin, Mail, Instagram } from "lucide-react"; // imported Instagram
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-5 md:pt-8 px-4">
      {/* Background gradient orbs */}
      <motion.div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-xs mb-3 md:mb-4 md:text-base">
            Hi, my name is
          </motion.p>

          <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4" initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-foreground">Rojish Sakhakarmi</span>
          </motion.h1>

          <motion.h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-muted-foreground mb-4 md:mb-6" initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            IT Student & Tech Enthusiast
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg max-w-xl mx-auto mb-6 md:mb-8 px-2 text-slate-300"
          >
            I’m a BCS.IT student from Bhaktapur who enjoys learning new technologies and building practical digital solutions. Currently studying at KFA Business School & IT.
          </motion.p>

          {/* Social Links */}
          <motion.div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="https://linkedin.com/in/rojish0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 md:p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} className="md:w-5 md:h-5" />
            </motion.a>

            <motion.a
              href="mailto:rojish180example.com"
              className="p-2.5 md:p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} className="md:w-5 md:h-5" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/rojish0" // replace with your Instagram handle
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 md:p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={18} className="md:w-5 md:h-5" />
            </motion.a>
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <motion.a href="#skills" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View My Skills
              </motion.a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get In Touch
              </motion.a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted-foreground opacity-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
