import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$39",
    desc: "Perfect for intimate celebrations",
    features: [
      "1 premium template",
      "Responsive design",
      "Countdown timer",
      "RSVP form",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$79",
    desc: "Most popular for weddings",
    features: [
      "All Basic features",
      "Music integration",
      "Photo gallery (up to 20)",
      "Custom color accents",
    ],
    highlight: true,
  },
  {
    name: "Exclusive",
    price: "$149",
    desc: "For a bespoke experience",
    features: [
      "All Premium features",
      "Personalized layout",
      "Custom domain & cover",
      "Priority support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-zinc-900">Transparent Pricing</h2>
          <p className="mt-3 text-zinc-600">Choose the package that fits your celebration and start instantly.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border ${p.highlight ? "border-yellow-400" : "border-zinc-200"} bg-white p-6 shadow-sm`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-block rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 px-3 py-1 text-xs font-medium text-white shadow">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-zinc-900">{p.name}</h3>
              <p className="mt-1 text-sm text-zinc-600">{p.desc}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-semibold text-zinc-900">{p.price}</span>
                <span className="text-sm text-zinc-500">one-time</span>
              </div>
              <ul className="mt-5 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-700">
                    <Check className="h-4 w-4 text-yellow-600" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-5 py-3 font-medium shadow-sm transition ${
                  p.highlight
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:brightness-105"
                    : "border border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                Start Now
              </a>
              <p className="mt-3 text-xs text-zinc-500 text-center">No subscriptions. Instant delivery.</p>
            </div>
          ))}
        </div>

        <div id="cta" className="mt-14 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900">Turn Your Dream Invitation into Reality — Start Now!</h3>
          <p className="mt-2 text-zinc-600">Place your order in minutes and receive a stunning digital invitation ready to share.</p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-500 to-yellow-600 px-7 py-3 text-white font-medium shadow-lg shadow-yellow-500/20 hover:brightness-105"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
