import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech — Computer Science & Engineering",
    period: "Aug 2023 – Present",
    detail: "CGPA: 6.18",
  },
  {
    institution: "GHSS Thiruvali",
    location: "Thiruvali, Kerala",
    degree: "Intermediate (PCMB)",
    period: "Jun 2020 – Mar 2022",
    detail: "Percentage: 85%",
  },
  {
    institution: "Otten English School CBSE",
    location: "Wandoor, Kerala",
    degree: "Matriculation",
    period: "Jun 2008 – Mar 2020",
    detail: "Percentage: 74.2%",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6 bg-surface">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Education" subtitle="My academic journey" />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />

              <div className={`ml-14 md:ml-0 md:w-[45%] p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300`}>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">{edu.institution}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{edu.location}</p>
                <p className="text-sm font-medium text-foreground mb-1">{edu.degree}</p>
                <p className="text-xs text-muted-foreground mb-1">{edu.period}</p>
                <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium">
                  {edu.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
