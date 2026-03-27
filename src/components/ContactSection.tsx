import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  { icon: Mail, label: "iamhithulmanoj@gmail.com", href: "mailto:iamhithulmanoj@gmail.com" },
  { icon: Phone, label: "+91 9747692552", href: "tel:+919747692552" },
  { icon: Github, label: "github.com/hithulmanoj", href: "https://github.com/hithulmanoj" },
  { icon: Linkedin, label: "linkedin.com/in/hithulmanoj", href: "http://www.linkedin.com/in/hithulmanoj/" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <SectionHeading title="Get In Touch" subtitle="I'm always open to new opportunities and collaborations" />
      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <link.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
