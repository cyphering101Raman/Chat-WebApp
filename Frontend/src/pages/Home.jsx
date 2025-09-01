import React, { useEffect } from "react";
import {
  MessageCircle,
  Users,
  ShieldCheck,
  Search,
  Smartphone,
  Globe,
  Sparkles,
  Send,
  Github,
  Twitter,
  Mail
} from "lucide-react";
import { useLocation, Link, NavLink } from "react-router-dom";

import { Testimonial, FeatureCard } from "../components/index.js";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);


  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white text-slate-800">
      {/* Decorative background glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
      </div>

      {/* Hero */}
      <section id="home" className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-24 pb-8 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-32">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Real-time chatting made <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">simple & secure</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Echoe helps you connect instantly—one-on-one or in groups—with privacy controls that keep conversations safe, and a sleek interface that just feels right.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Start chatting
              <Send className="h-4 w-4" />
            </Link>

            <Link
              to="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              See features
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> End-to-end privacy options</div>
            <div className="flex items-center gap-2"><Globe className="h-4 w-4" /> Works across devices</div>
          </div>
        </div>

        {/* a minimal chat preview mockup */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sky-100 to-indigo-100 blur-xl" aria-hidden />
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 grid place-items-center rounded-2xl bg-sky-600 text-white"><MessageCircle className="h-5 w-5"/></div>
                <div>
                  <p className="text-sm font-semibold">Echoe Group</p>
                  <p className="text-xs text-slate-500">12 online • 48 members</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Search className="h-5 w-5"/>
                <ShieldCheck className="h-5 w-5"/>
              </div>
            </div>

            {/* Chat bubbles */}
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="h-8 w-8 rounded-full bg-slate-200" />
                <div className="max-w-[70%] rounded-2xl rounded-tl-none bg-slate-100 p-3 shadow-sm">
                  <p className="text-sm text-slate-800">Hey team, let’s jump on a quick call in 5? 👋</p>
                </div>
              </li>
              <li className="flex items-start justify-end gap-2">
                <div className="max-w-[70%] rounded-2xl rounded-tr-none bg-sky-600 p-3 text-white shadow-sm">
                  <p className="text-sm">On it! I’ll share notes here for anyone who can’t join.</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-sky-200" />
              </li>
              <li className="flex items-start gap-2">
                <div className="h-8 w-8 rounded-full bg-slate-200" />
                <div className="max-w-[70%] rounded-2xl rounded-tl-none bg-slate-100 p-3 shadow-sm">
                  <p className="text-sm text-slate-800">Perfect. Also, the release is ready for review. 🚀</p>
                </div>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-inner">
              <input
                type="text"
                className="flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-slate-400"
                placeholder="Write a message…"
                aria-label="Type a message"
              />
              <button className="grid h-9 w-9 place-items-center rounded-xl bg-sky-600 text-white transition hover:bg-sky-700">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-12 md:scroll-mt-12 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to stay in sync</h2>
          <p className="mt-3 text-slate-600">Fast real-time messaging, powerful search, granular privacy, and seamless cross-device support.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<MessageCircle className="h-6 w-6" />}
            title="Real‑time messaging"
            desc="Low-latency, reliable chat for individuals and groups with typing indicators and read receipts."
          />
          <FeatureCard
            icon={<Search className="h-6 w-6" />}
            title="Powerful search"
            desc="Find messages, files, and people instantly with filters and saved queries."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Privacy controls"
            desc="End‑to‑end privacy options, invite-only groups, and fine‑grained permissions."
          />
          <FeatureCard
            icon={<Smartphone className="h-6 w-6" />}
            title="Cross‑device"
            desc="Stay connected on desktop, tablet, and mobile with a unified experience."
          />
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Group chats"
            desc="Spin up topic channels or project rooms, and @mention teammates to loop them in."
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Global ready"
            desc="Optimized for international teams with time‑zone aware timestamps and RTL support."
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6" />}
            title="Delightful UI"
            desc="Polished details, subtle animations, and an accessible, modern design."
          />
          <FeatureCard
            icon={<Mail className="h-6 w-6" />}
            title="File & media"
            desc="Share images, voice notes, and docs—organized and searchable."
          />
        </div>
      </section>

      {/* About / Credibility */}
      <section id="about" className="scroll-mt-24 md:scroll-mt-28 mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Built for clarity, speed, and trust</h3>
            <p className="mt-3 text-slate-600">
              Echoe is crafted with a focus on performance and privacy. Whether you’re coordinating with a team or
              catching up with friends, our simple, consistent UI helps you stay in the flow.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-sky-600"/> End‑to‑end privacy options for sensitive conversations.</li>
              <li className="flex items-start gap-3"><Smartphone className="mt-0.5 h-5 w-5 text-sky-600"/> Responsive by default—works beautifully on any device.</li>
              <li className="flex items-start gap-3"><Globe className="mt-0.5 h-5 w-5 text-sky-600"/> Localized and accessible to meet global standards.</li>
            </ul>
          </div>

          {/* Mini stat/testimonials block */}
          <div id="testimonials" className="scroll-mt-24 md:scroll-mt-28 grid gap-4 sm:grid-cols-2">
            <Testimonial
              quote="Echoe keeps our remote team in sync without the noise."
              author="Priya Sharma"
              role="Product Manager"
            />
            <Testimonial
              quote="Simple, fast, and secure. Exactly what we needed for client comms."
              author="Daniel Kim"
              role="Agency Founder"
            />
            <Testimonial
              quote="The UI feels modern and thoughtful—our team actually enjoys using it."
              author="Amelia Green"
              role="Design Lead"
            />
            <Testimonial
              quote="Search and privacy controls are top‑notch. Setup took minutes."
              author="Rahul Mehta"
              role="CTO"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-600 to-indigo-600 p-8 text-white shadow-lg">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to start the conversation?</h3>
            <p className="mt-2 max-w-2xl text-white/90">Create your account and set up your first group in minutes.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/signup" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:-translate-y-0.5">
                Get started <Send className="h-4 w-4" />
              </Link>
              <Link to="/login" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}