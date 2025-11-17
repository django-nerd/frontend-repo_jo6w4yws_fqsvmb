import { Shield, CreditCard, Airplay, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'Tokenization, spend controls and audit trails built-in to protect every transaction.',
  },
  {
    icon: CreditCard,
    title: 'Virtual & physical cards',
    desc: 'Issue branded cards with real-time controls, limits and merchant rules.',
  },
  {
    icon: Airplay,
    title: 'Seamless integrations',
    desc: 'Connect with your existing booking flows, GDS and reconciliation tools.',
  },
  {
    icon: Sparkles,
    title: 'Delightful UX',
    desc: 'Modern, interactive experiences your customers will actually enjoy using.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Built for travel payments</h2>
          <p className="mt-3 text-white/70">Everything you need to issue, control and reconcile payments at scale.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
