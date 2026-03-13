import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} SaaS Landing. All rights reserved.</span>
        <nav className="flex flex-wrap gap-4">
          <Link href="#features" className="hover:text-white/80">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white/80">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-white/80">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
}

