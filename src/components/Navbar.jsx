import { Menu, Plane, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-10">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
            <Plane className="h-5 w-5" />
          </div>
          <span className="text-white text-lg font-semibold tracking-tight">Buzztion</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#how" className="text-white/80 hover:text-white transition">How it works</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-orange-500/30 hover:opacity-95 transition">
            Get started <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
