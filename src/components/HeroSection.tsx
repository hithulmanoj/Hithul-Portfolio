import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl pt-12">
        {/* Profile Image Container */}
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ 
             duration: 0.8,
             ease: [0.16, 1, 0.3, 1] 
           }}
           className="mb-8 relative inline-block group"
        >
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-tr from-primary via-primary/20 to-transparent box-glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-surface relative border border-border">
              <img 
                 src="/profile.png" 
                 alt="Hithul Manoj" 
                 className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 grayscale hover:grayscale-0"
                 onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Hithul+Manoj&background=0D0D0D&color=FF3B3B&size=256"; }}
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Pulsing Status indicator */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(255,59,59,0.5)]" 
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-4 animate-pulse-glow">
            &lt; Hello World /&gt;
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
        >
          <span className="text-foreground">I'm </span>
          <span className="gradient-text">Hithul Manoj</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Computer Science & Engineering Student — passionate about building
          elegant software, exploring data, and solving complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="/hithul%20pep%20cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all box-glow active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center bg-white/20 rounded-full group-hover:rotate-12 transition-transform">
                <ChevronDown className="w-4 h-4 rotate-[135deg]" /> 
              </span>
              Download CV
            </span>
          </a>
          
          <div className="flex items-center gap-4">
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
          transition={{ delay: 1.5 }}
          className="inline-block animate-float"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
