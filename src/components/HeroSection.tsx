import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-primary/20 p-2 box-glow">
            <img 
              src="/profile.png" 
              alt="Hithul Manoj" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/10 rounded-full blur-xl animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-4 animate-pulse-glow">
            &lt; Hello World /&gt;
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
        >
          <span className="text-foreground">I'm </span>
          <span className="gradient-text">Hithul Manoj</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Computer Science & Engineering Student — passionate about building
          elegant software, exploring data, and solving complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="/hithul pep cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 box-glow"
          >
            View Resume
          </a>
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/hithulmanoj", label: "GitHub" },
              { icon: Linkedin, href: "http://www.linkedin.com/in/hithulmanoj/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:iamhithulmanoj@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+919747692552", label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-primary/50 transition-all duration-300 box-glow"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="inline-block animate-float"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
