import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Institution Management System",
    tech: "JavaScript, PHP, HTML, CSS, MySQL, Bootstrap",
    date: "Jun 2025",
    link: "https://github.com/hithulmanoj/Student-Management-System-",
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
    link: "https://www.linkedin.com/posts/activity-7316852356434837504-T40l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfL928B3z9WaFoAvAc3fe5mRbcndXmPssQ",
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
    link: "https://github.com/hithulmanoj/Dynamic-CPU-Scheduling-Simulator",
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
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group block p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 font-heading">{project.date}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(", ").map((t) => (
                  <span key={t} className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-surface border border-border group-hover:border-primary/30 text-muted-foreground group-hover:text-primary transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-3">
              {project.points.map((point, j) => (
                <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-primary mt-1 shrink-0">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
