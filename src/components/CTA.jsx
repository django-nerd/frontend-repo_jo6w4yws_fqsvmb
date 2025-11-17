export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-black via-black to-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur shadow-xl">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Ready to buzz your payments?</h3>
            <p className="mt-3 text-white/70">Get a guided demo to see how Buzztion powers secure, flexible travel payments.</p>

            <form className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
              <input type="email" placeholder="Work email" className="h-12 rounded-xl border border-white/15 bg-black/40 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <button className="h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-6 text-sm font-medium text-white shadow-lg shadow-orange-500/30 hover:opacity-95 transition">Request demo</button>
            </form>

            <p className="mt-3 text-xs text-white/50">We respond within 1 business day.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
