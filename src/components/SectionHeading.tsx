import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
      <span className="gradient-text">{title}</span>
    </h2>
    {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
    <div className="section-divider w-24 mx-auto mt-6" />
  </motion.div>
);

export default SectionHeading;
