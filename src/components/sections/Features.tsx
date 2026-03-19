import { SectionShell } from "@/components/layout/SectionShell";
import { motion } from "@/lib/motion";

const features = [
  {
    title: "Hero, который продаёт",
    body: "Гигантский текст, 3D‑объекты и плавный motion из коробки — на уровне лучших SaaS.",
    tag: "Hero builder"
  },
  {
    title: "Motion без кода",
    body: "Готовые пресеты Framer Motion: fade, stagger, parallax. Просто включаете и настраиваете.",
    tag: "Animations"
  },
  {
    title: "Градиенты и стекло",
    body: "Премиальные градиенты, стеклянные карточки и glow‑эффекты по гайдлайнам.",
    tag: "Visual system"
  },
  {
    title: "3D‑сцены на Three.js",
    body: "Интерактивные объекты на react‑three‑fiber с оптимизацией под прод.",
    tag: "3D ready"
  }
];

export function Features() {
  return (
    <SectionShell
      id="features"
      eyebrow="Features"
      title="Все паттерны дорогих SaaS уже собраны"
      description="Соберите лендинг уровня Framer, Linear или Vercel за часы, а не недели."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, idx) => (
          <motion.article
            key={feature.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-[0_20px_70px_rgba(2,6,23,0.7)] backdrop-blur-xl transition hover:-translate-y-0.5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              delay: 0.06 * idx,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_60%)] opacity-0 transition group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            <div className="relative space-y-3">
              <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-primary-200 ring-1 ring-white/10">
                {feature.tag}
              </span>
              <h3 className="text-base font-semibold text-white sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70">{feature.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

