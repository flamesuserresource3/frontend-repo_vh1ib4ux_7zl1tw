import { motion } from "framer-motion";
import { Rocket, Play, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs tracking-wide text-zinc-600 shadow-sm">
                <Rocket className="h-3.5 w-3.5 text-yellow-600" /> Premium Digital Invitations
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-zinc-900">
                Make Your Special Moment Unforgettable with a Premium Digital Invitation
              </h1>
              <p className="text-zinc-600 max-w-xl">
                Elegant, modern, and fully personalized invitations that look stunning on any
                device. Share instantly, add music, collect RSVPs, and create a memorable
                experience for your guests.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-3 text-white font-medium shadow-lg shadow-yellow-500/20 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-600/30"
                >
                  Create Yours Now
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-6 py-3 text-zinc-800 font-medium hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                >
                  <Play className="mr-2 h-4 w-4" /> View Demo
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
            aria-hidden
          >
            <div className="relative mx-auto w-[90%] sm:w-96 aspect-[9/18] rounded-[2.5rem] border-[10px] border-zinc-900 bg-black shadow-2xl">
              <div className="absolute inset-[10px] rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-zinc-100" />
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: "radial-gradient(circle at 20% 10%, #f59e0b 0, transparent 25%), radial-gradient(circle at 80% 90%, #eab308 0, transparent 25%)"}} />
                <div className="relative h-full w-full p-6 flex flex-col items-center justify-center text-center">
                  <Smartphone className="h-8 w-8 text-yellow-600" />
                  <h3 className="mt-4 text-xl font-semibold text-zinc-900">Amara & Daffa</h3>
                  <p className="text-sm text-zinc-600">Wedding Invitation</p>
                  <div className="mt-5 w-full">
                    <div className="mx-auto h-40 w-40 rounded-full border-4 border-yellow-400/60 bg-cover bg-center shadow-lg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')"}} />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-widest text-zinc-500">Saturday, 14 June 2025</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs text-zinc-700 shadow-sm backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-yellow-500" /> Live RSVP Enabled
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-yellow-200/60 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
