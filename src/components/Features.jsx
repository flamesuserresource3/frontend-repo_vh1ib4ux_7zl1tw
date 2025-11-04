import { Music, Smartphone, Check, Clock, Images, Sparkles } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Sparkles,
      title: "Elegant, Luxurious Design",
      desc: "Minimalist layouts with gold and pastel accents for a timeless look.",
    },
    {
      icon: Smartphone,
      title: "Works on Any Device",
      desc: "Beautiful and responsive on phones, tablets, and desktops.",
    },
    { icon: Music, title: "Background Music", desc: "Set the mood with curated tracks or your own song." },
    { icon: Images, title: "Photo Gallery", desc: "Share your favorite memories in a clean, scrollable gallery." },
    { icon: Clock, title: "Countdown Timer", desc: "Build excitement with a live, elegant countdown." },
    { icon: Check, title: "RSVP & Guestbook", desc: "Collect responses and heartfelt wishes instantly." },
  ];

  return (
    <section id="features" className="relative">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-zinc-900">Why Choose Us</h2>
          <p className="mt-3 text-zinc-600">
            Seamless, stylish, and made to impress—from first glance to happy ever after.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
