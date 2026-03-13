 "use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { useState } from "react";

const items = [
  {
    q: "Это шаблон или конструктор?",
    a: "Это продакшн‑готовый starter на Next.js с Tailwind, Framer Motion и Three.js, который вы полностью контролируете в коде."
  },
  {
    q: "Сколько времени нужно, чтобы запустить лендинг?",
    a: "Обычно хватает одного дня: структура и анимации уже настроены, остаётся только адаптировать текст и визуал под ваш продукт."
  },
  {
    q: "Нужны ли дизайнеры или motion‑специалисты?",
    a: "Нет. Мы повторили лучшие паттерны Framer‑подобных SaaS, так что UI и анимации выглядят дорогими из коробки."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Ответы на вопросы до того, как вы их задали"
    >
      <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl">
        {items.map((item, idx) => {
          const open = idx === openIndex;
          return (
            <button
              key={item.q}
              type="button"
              className="flex w-full flex-col gap-2 py-4 text-left text-sm text-white/80"
              onClick={() => setOpenIndex(open ? -1 : idx)}
            >
              <div className="flex items-center justify-between gap-4">
                <span>{item.q}</span>
                <span className="text-xs text-white/50">
                  {open ? "–" : "+"}
                </span>
              </div>
              {open && (
                <p className="text-xs text-white/60 sm:text-sm">{item.a}</p>
              )}
            </button>
          );
        })}
      </div>
    </SectionShell>
  );
}

