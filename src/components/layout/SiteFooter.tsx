import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-xs text-white/50 backdrop-blur-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} SaaS Landing. All rights reserved.</span>
        <nav className="flex flex-wrap gap-4">
          <Link href="#features" className="transition hover:text-white/80">
            Features
          </Link>
          <Link href="#pricing" className="transition hover:text-white/80">
            Pricing
          </Link>
          <Link href="#faq" className="transition hover:text-white/80">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
}

