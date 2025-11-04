import { useEffect } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Pricing from "./components/Pricing";
import { Instagram, Mail, MessageCircle } from "lucide-react";

function App() {
  useEffect(() => {
    document.title = "Premium Digital Invitations | Elegant, Luxury Online Wedding Invitation";

    const ensureMeta = (name, content) => {
      let el = document.querySelector(`meta[name='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    ensureMeta(
      "description",
      "Premium digital invitations with elegant minimalist design, music, RSVP, and photo galleries. Perfect for weddings, engagements, birthdays, and special events."
    );
    ensureMeta(
      "keywords",
      "premium digital invitation, luxury online wedding invitation, elegant e-invite, RSVP, wedding website, minimalist invitation"
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">LuxeInvite</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-700">
            <a href="#features" className="hover:text-zinc-900">Features</a>
            <a href="#demo" className="hover:text-zinc-900">Portfolio</a>
            <a href="#pricing" className="hover:text-zinc-900">Pricing</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </nav>
          <a href="#pricing" className="hidden sm:inline-flex rounded-md bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 text-white text-sm font-medium shadow-sm">Create Yours</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
      </main>

      <footer id="contact" className="border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold">LuxeInvite</h4>
              <p className="mt-2 text-sm text-zinc-600">
                Modern, minimalist, and luxurious digital invitations for your most important moments.
              </p>
            </div>
            <div>
              <h5 className="font-medium text-zinc-900">Get in touch</h5>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"
                  >
                    <MessageCircle className="h-4 w-4 text-yellow-700" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@luxeinvite.com"
                    className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"
                  >
                    <Mail className="h-4 w-4 text-yellow-700" /> hello@luxeinvite.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/luxeinvite"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900"
                  >
                    <Instagram className="h-4 w-4 text-yellow-700" /> @luxeinvite
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-zinc-900">Quick Links</h5>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li><a href="#features" className="hover:text-zinc-900">Features</a></li>
                <li><a href="#demo" className="hover:text-zinc-900">Portfolio</a></li>
                <li><a href="#pricing" className="hover:text-zinc-900">Pricing</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} LuxeInvite. All rights reserved.</p>
            <p>Crafted with care — fast, mobile-friendly, and delightful to use.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
