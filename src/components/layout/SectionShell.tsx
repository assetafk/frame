import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="space-y-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="space-y-3">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">
            {eyebrow}
          </div>
        )}
        <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-sm text-white/65 sm:text-base">
            {description}
          </p>
        )}
      </div>

      {children}
    </motion.section>
  );
}

