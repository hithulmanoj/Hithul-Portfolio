import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Database, Users } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["C++", "Python", "Java"],
  },
  {
    icon: Database,
    title: "Tools / Platforms",
    skills: ["MongoDB", "Tableau", "Power BI", "MS SQL Server"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Problem-Solving", "Team Player", "Project Management", "Adaptability"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Skills" subtitle="Technologies and competencies I work with" />
      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <group.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
