import { SectionShell } from "@/components/layout/SectionShell";
import { motion } from "@/lib/motion";

const steps = [
  {
    label: "01",
    title: "Подключите репо или домен",
    body: "Создайте проект на Next.js или подключите уже существующий — мы не ломаем ваш стек."
  },
  {
    label: "02",
    title: "Соберите лендинг из блоков",
    body: "Hero, фичи, прайсинг, FAQ — все секции уже адаптированы под анимацию и премиальный UI."
  },
  {
    label: "03",
    title: "Публикуйте за минуты",
    body: "Деплойте на Vercel/Netlify, правьте контент без участия разработчиков."
  }
];

export function HowItWorks() {
  return (
    <SectionShell
      id="how-it-works"
      eyebrow="How it works"
      title="Запустить новый SaaS‑лендинг стало проще, чем открыть Figma"
      description="От первого коммита до продакшена — весь путь построен вокруг скорости и качества визуала."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.label}
            className="group relative flex flex-col gap-3 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/50 p-6 backdrop-blur-xl transition hover:-translate-y-0.5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.08 * index,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_55%)] opacity-0 transition group-hover:opacity-100" />
            <div className="relative inline-flex w-fit rounded-full border border-primary-300/25 bg-primary-500/10 px-2.5 py-1 text-xs font-mono text-primary-200">
              {step.label}
            </div>
            <div className="relative space-y-2">
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {step.title}
              </h3>
              <p className="text-xs text-white/65 sm:text-sm">{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

