import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Institution Management System",
    tech: "JavaScript, PHP, HTML, CSS, MySQL, Bootstrap",
    date: "Jun 2025",
    points: [
      "Designed a dynamic, role-based system enabling seamless coordination between students, faculty, and administrators with database-driven authentication.",
      "Implemented dashboards with assignment tracking, announcements, fee status, leave applications, and interactions.",
      "Deployed using Flask with an intuitive interface, achieving a user satisfaction score of 90.",
    ],
  },
  {
    title: "Retail Sales EDA",
    tech: "Python, Pandas, Seaborn, Matplotlib",
    date: "Apr 2025",
    points: [
      "Performed EDA on retail sales datasets to uncover trends, seasonality patterns, and major business insights.",
      "Analyzed product- and store-level performance to identify high- and low-performing categories.",
      "Evaluated impact of promotions, discounts, and holidays on sales for data-driven decision-making.",
    ],
  },
  {
    title: "CPU Scheduling Simulator",
    tech: "HTML, CSS, JavaScript",
    date: "Mar 2025",
    points: [
      "Built an interactive web-based CPU scheduling simulator supporting FCFS, SJF, and Round Robin algorithms.",
      "Integrated real-time Gantt chart visualizations with detailed performance and energy consumption metrics.",
      "Added CSV import/export functionality for custom process data upload and result download.",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 bg-surface">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Projects" subtitle="Some of the things I've built" />
      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-primary shrink-0" />
                <h3 className="font-heading text-xl font-semibold text-foreground">{project.title}</h3>
              </div>
              <span className="text-sm text-muted-foreground font-heading">{project.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.split(", ").map((t) => (
                <span key={t} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-2">
              {project.points.map((point, j) => (
                <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-primary mt-1 shrink-0">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
