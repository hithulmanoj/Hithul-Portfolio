import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { BookOpen, Award } from "lucide-react";

const certificates = [
  { title: "Computational Theory: Language Principle & Finite Automata Theory", org: "Infosys", date: "Sep 2025" },
  { title: "Java Programming", org: "iamneo", date: "May 2025" },
  { title: "Object Oriented Programming using C++", org: "iamneo", date: "Dec 2024" },
  { title: "Responsive Web Design", org: "freeCodeCamp", date: "Oct 2023" },
];

const TrainingSection = () => (
  <section id="training" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Training & Certificates" subtitle="Continuous learning and professional development" />

      {/* Training */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 md:p-8 rounded-2xl bg-card border border-border mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Fundamentals of Data Structures
          </h3>
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
      </motion.div>

      {/* Certificates */}
      <div className="grid sm:grid-cols-2 gap-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex gap-4"
          >
            <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">{cert.title}</h4>
              <p className="text-xs text-muted-foreground">{cert.org} · {cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;
