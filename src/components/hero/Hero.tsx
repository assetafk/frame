import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false
});

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function Hero() {
  return (
    <section className="grid items-center gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <motion.div
        initial="hidden"
        animate="show"
        variants={textVariants}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-400" />
          Loved by product teams
        </div>

        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Design, ship &amp; grow
            <span className="block bg-gradient-to-r from-primary-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
              premium SaaS experiences
            </span>
          </h1>
          <p className="max-w-xl text-sm text-white/70 sm:text-base">
            A Framer‑level landing builder for your SaaS. Build pages that feel
            expensive: cinematic hero, smooth motion, gradients and 3D in one
            place.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-background shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-primary-400 hover:text-black"
          >
            Start free trial
          </Link>
          <Link
            href="#"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/80 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary-400/70 hover:text-white"
          >
            Book live demo
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 text-xs text-white/50">
          <div>
            <div className="text-sm font-semibold text-white">
              +27%
              <span className="ml-1 text-[11px] text-emerald-400">↑</span>
            </div>
            <div>higher signup conversion</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">5 min</div>
            <div>to publish a new page</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">No code</div>
            <div>designed for product teams</div>
          </div>
        </div>
      </motion.div>

      <div className="relative h-[320px] overflow-visible md:h-[420px]">
        <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.16),_transparent_60%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 bg-white/5/60 shadow-[0_0_80px_rgba(56,189,248,0.25)] backdrop-blur-xl" />

        <HeroCanvas />

        <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between text-[11px] text-white/60">
          <span>Realtime motion preview</span>
          <span>3D powered by Three.js</span>
        </div>
      </div>
    </section>
  );
}

