import { SectionShell } from "@/components/layout/SectionShell";

const tiers = [
  {
    name: "Launch",
    price: "$39",
    period: "/project",
    highlight: false,
    features: [
      "1 лендинг",
      "Hero, Features, FAQ, Footer",
      "Базовая анимация появления"
    ]
  },
  {
    name: "Scale",
    price: "$89",
    period: "/project",
    highlight: true,
    features: [
      "До 5 страниц",
      "3D‑hero и кастомные градиенты",
      "Все анимации и микровзаимодействия"
    ]
  },
  {
    name: "Studio",
    price: "Let's talk",
    period: "",
    highlight: false,
    features: [
      "Безлимитные проекты",
      "Дизайн‑система под ваш бренд",
      "Приоритетная поддержка"
    ]
  }
];

export function Pricing() {
  return (
    <SectionShell
      id="pricing"
      eyebrow="Pricing"
      title="Простой прайсинг без скрытых условий"
      description="Оплачиваете только за проекты, которые действительно запускаете в прод."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`group relative flex flex-col gap-4 rounded-3xl border bg-gradient-to-b from-white/10 to-white/[0.03] p-6 text-sm shadow-[0_18px_60px_rgba(15,23,42,0.7)] backdrop-blur-xl transition hover:-translate-y-0.5 ${
              tier.highlight
                ? "border-primary-400/60 ring-2 ring-primary-400/40"
                : "border-white/10"
            }`}
          >
            {tier.highlight && (
              <span className="absolute right-5 top-5 rounded-full bg-primary-500/90 px-3 py-1 text-[11px] font-semibold text-black shadow-lg">
                Most popular
              </span>
            )}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)] opacity-0 transition group-hover:opacity-100" />
            <div className="relative">
              <h3 className="text-base font-semibold text-white">
                {tier.name}
              </h3>
              <p className="mt-3">
                <span className="text-2xl font-semibold text-white">
                  {tier.price}
                </span>
                <span className="ml-1 text-xs text-white/60">
                  {tier.period}
                </span>
              </p>
            </div>
            <ul className="relative mt-2 flex flex-1 flex-col gap-2 text-xs text-white/70">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-[4px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label={`Start ${tier.name} plan`}
              className={`mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition ${
                tier.highlight
                  ? "bg-white text-background hover:bg-primary-300"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              Get started
            </button>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

