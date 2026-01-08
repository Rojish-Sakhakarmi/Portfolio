import { Linkedin, Mail, Instagram } from "lucide-react"; // import Instagram
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-4">
            <motion.a
              href="https://linkedin.com/in/rojish0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              href="mailto:rojish80@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={18} />
            </motion.a>

            {/* Instagram icon */}
            <motion.a
              href="https://instagram.com/rojish0" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={18} />
            </motion.a>
          </div>

          <p className="text-muted-foreground text-xs md:text-sm font-mono text-center">
            Designed & Built by Rojish Sakhakarmi
          </p>
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
