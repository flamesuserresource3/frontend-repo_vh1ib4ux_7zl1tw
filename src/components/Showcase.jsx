import { Play, Star } from "lucide-react";
import { motion } from "framer-motion";

const demos = [
  {
    title: "Classic Gold",
    img:
      "https://images.unsplash.com/photo-1529634806980-c3c4ae8e0a3f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Pastel Romance",
    img:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Modern Minimal",
    img:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Nadia & Rizky",
    text:
      "The design was flawless—our guests loved the experience and RSVP was so easy!",
  },
  {
    name: "Ayla (Birthday)",
    text:
      "Beautiful and elegant. The countdown built so much excitement!",
  },
  {
    name: "Mira & Farhan",
    text:
      "Everything felt premium from start to finish. Highly recommended!",
  },
];

export default function Showcase() {
  return (
    <section id="demo" className="bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-zinc-900">Demo & Portfolio</h2>
          <p className="mt-3 text-zinc-600">Explore styles curated for weddings, engagements, and special celebrations.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {demos.map((d) => (
            <div key={d.title} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <img src={d.img} alt={d.title} className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900">{d.title}</h3>
                  <a href="#pricing" className="inline-flex items-center text-yellow-700 hover:text-yellow-800">
                    <Play className="h-4 w-4 mr-1" /> Preview
                  </a>
                </div>
                <p className="mt-1 text-sm text-zinc-600">Refined layouts with tasteful animations and gold accents.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-center gap-2">
            <Star className="h-5 w-5 text-yellow-600" />
            <p className="text-sm uppercase tracking-widest text-zinc-500">Loved by Happy Couples</p>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="text-zinc-700">“{t.text}”</p>
                <p className="mt-3 text-sm font-medium text-zinc-900">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
