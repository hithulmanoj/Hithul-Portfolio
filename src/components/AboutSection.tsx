import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Database, TrendingUp, BrainCircuit, BarChart3 } from "lucide-react";

const expertise = [
  { icon: Database, label: "Data Science" },
  { icon: BrainCircuit, label: "Machine Learning" },
  { icon: BarChart3, label: "Data Analytics" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="My journey in the world of data and intelligence" 
        />

        <div className="relative group">
          {/* Glass Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-3xl bg-card/40 border border-border/50 backdrop-blur-xl relative z-10 box-glow"
          >
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I am a <span className="text-foreground font-semibold">B.Tech Computer Science student</span> with a strong interest in Data Science, Machine Learning, and Data Analytics.
              </p>
              
              <p>
                I have hands-on experience working with real-world datasets, building machine learning models, and developing interactive dashboards. My work focuses on extracting meaningful insights from data and using them to solve 
                <span className="text-primary font-medium"> real-world problems</span>.
              </p>

              <p>
                I am proficient in <span className="text-foreground border-b border-primary/30 pb-0.5">Python, SQL</span>, and data visualization tools like <span className="text-foreground border-b border-primary/30 pb-0.5">Power BI</span>, and I continuously strive to enhance my analytical and problem-solving skills.
              </p>

              <p className="border-l-2 border-primary pl-6 py-2 bg-primary/5 rounded-r-xl italic">
                Currently, I am seeking opportunities in Data Science where I can apply my knowledge and grow as a data professional.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-border/50">
              {expertise.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border group-hover:border-primary/30 transition-colors"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-heading font-medium tracking-wide uppercase">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
