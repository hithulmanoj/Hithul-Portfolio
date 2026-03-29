import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { BookOpen, Award, ExternalLink } from "lucide-react";

const certificates = [
  { 
    title: "Computational Theory: Language Principle & Finite Automata Theory", 
    org: "Infosys", 
    date: "Sep 2025",
    link: "https://drive.google.com/file/d/1HoYJcSJWIRL-tJy0XzzpK6Km1wF456Mr/view?usp=drive_link"
  },
  { 
    title: "Java Programming", 
    org: "iamneo", 
    date: "May 2025",
    link: "https://drive.google.com/file/d/1dnhSrdtQlcIw0zrHeit-_UGoZHYk1eQa/view?usp=drive_link"
  },
  { 
    title: "Object Oriented Programming using C++", 
    org: "iamneo", 
    date: "Dec 2024",
    link: "https://drive.google.com/file/d/1cBwBkTpFAIqace4GoRF9bt3_6JCuY6D0/view?usp=drive_link"
  },
  { 
    title: "Responsive Web Design", 
    org: "freeCodeCamp", 
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/171GuzQteDnuWhDPrVQ39xHWZ73yzURxU/view?usp=drive_link"
  },
];

const TrainingSection = () => (
  <section id="training" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Training & Certificates" subtitle="Continuous learning and professional development" />

      {/* Training */}
      <motion.a
        href="https://drive.google.com/file/d/16fWnoPlL5Jj4_kyFztuD0gURJJZuV8UO/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 md:p-8 rounded-2xl bg-card border border-border mb-10 block hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-pointer"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Fundamentals of Data Structures
            </h3>
          </div>
          <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" />
        </div>
        <p className="text-sm text-muted-foreground mb-4 font-heading">
          Lovely Professional University · Jun – Jul 2025
        </p>
        <ul className="space-y-2">
          {[
            "Applied algorithmic techniques such as divide-and-conquer, dynamic programming, and greedy paradigms with Big-O optimization in Java.",
            "Gained practical experience implementing arrays, linked lists, stacks, queues, trees, graphs, and hash tables.",
            "Strengthened problem-solving skills focusing on time/space complexity, recursion, sorting, and searching.",
          ].map((p, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary mt-1 shrink-0">▹</span>{p}
            </li>
          ))}
        </ul>
      </motion.a>

      {/* Certificates */}
      <div className="grid sm:grid-cols-2 gap-4">
        {certificates.map((cert, i) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex items-start gap-4 group cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{cert.title}</h4>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0" />
              </div>
              <p className="text-xs text-muted-foreground">{cert.org} · {cert.date}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;
