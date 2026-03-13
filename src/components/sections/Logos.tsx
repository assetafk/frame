import { SectionShell } from "@/components/layout/SectionShell";
import { motion } from "framer-motion";

const logos = [
  "Linear",
  "Vercel",
  "Figma",
  "Notion",
  "Superhuman",
  "Cron"
];

export function Logos() {
  return (
    <SectionShell
      eyebrow="Trusted teams"
      title="Создано для команд, которые заботятся о пикселях"
    >
      <div className="overflow-hidden">
        <motion.div
          className="flex min-w-max gap-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white/40"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div key={`${logo}-${idx}`} className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/15" />
              <span>{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}

