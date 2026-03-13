"use client";
import { Hero } from "@/components/hero/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Logos } from "@/components/sections/Logos";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pb-20 pt-24 md:gap-32 md:pt-32">
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <div className="mx-auto w-full max-w-6xl px-6 pb-10">
        <SiteFooter />
      </div>
    </>
  );
}

