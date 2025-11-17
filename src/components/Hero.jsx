import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient vignette overlay for readability; pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Fintech-grade travel payments
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            The modern way to issue and manage travel payments
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            Buzztion helps airlines, OTAs and fintechs create dynamic, secure and branded payment experiences — from virtual cards to boarding-pass perks.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-orange-500/30 hover:opacity-95 transition">
              Request a demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
              Explore features
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> PCI-DSS compliant
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-orange-400" /> Issuer-agnostic
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-sky-400" /> API-first
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
