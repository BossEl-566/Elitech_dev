import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers3,
  Bell,
  Cloud,
  CheckCircle,
  Apple,
  PlayCircle,
  Palette,
  Database,
  Rocket,
  Users,
  Star,
  Lock,
  Gauge,
  Code2,
} from "lucide-react";

const features = [
  { icon: Smartphone, title: "iOS & Android Apps", text: "Cross-platform apps with native-feeling performance." },
  { icon: Palette, title: "Premium UI/UX", text: "Modern interfaces, smooth flows, and clean app experiences." },
  { icon: Zap, title: "Fast Performance", text: "Optimized loading, animations, API calls, and media handling." },
  { icon: Cloud, title: "Cloud Integration", text: "Connect apps to databases, APIs, dashboards, and storage." },
  { icon: Bell, title: "Push Notifications", text: "Smart alerts, reminders, order updates, and engagement flows." },
  { icon: ShieldCheck, title: "Secure Architecture", text: "Authentication, role access, validation, and data protection." },
];

const appTypes = [
  "E-commerce Apps",
  "Social Media Apps",
  "School Apps",
  "Health Apps",
  "Delivery Apps",
  "Booking Apps",
  "Business Apps",
  "Admin Companion Apps",
];

const process = [
  { title: "Strategy", text: "We define the app idea, users, features, and business goals." },
  { title: "Design", text: "We create clean screens, user journeys, and interactive app flows." },
  { title: "Development", text: "We build the app, backend, APIs, authentication, and integrations." },
  { title: "Launch", text: "We test, optimize, deploy, and prepare the app for users." },
];

function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f8fb] font-['Poppins',sans-serif]">
      <section className="relative overflow-hidden bg-[#07182d] px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#2cc5ff]/20 blur-3xl" />
          <div className="absolute right-[-100px] top-32 h-96 w-96 rounded-full bg-[#6b5cff]/20 blur-3xl" />
          <div className="absolute bottom-[-140px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#267A9E]/20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur">

              Mobile App Development
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Apps that feel smooth, smart, and premium.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              We build mobile applications for businesses, startups, schools,
              health systems, e-commerce brands, and digital platforms with
              beautiful interfaces and reliable engineering.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.35)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Build My App
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#7ed3ff] hover:text-[#7ed3ff]"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="relative mx-auto h-[560px] w-full max-w-[430px]">
            <div className="absolute left-8 top-8 h-[460px] w-[230px] rotate-[-10deg] rounded-[2.4rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="h-full rounded-[1.9rem] bg-[#0b213d] p-4">
                <div className="mb-5 h-6 w-24 rounded-full bg-white/10" />
                <div className="rounded-3xl bg-[#267A9E] p-5">
                  <p className="text-xs text-white/70">Total users</p>
                  <h3 className="mt-2 text-4xl font-bold">24.8k</h3>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-white/60">Sales</p>
                    <p className="mt-2 text-xl font-bold">$8.2k</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-white/60">Growth</p>
                    <p className="mt-2 text-xl font-bold">38%</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {["Payments", "Orders", "Messages"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-white/10 p-3">
                      <span className="text-sm text-white/80">{item}</span>
                      <CheckCircle size={16} className="text-[#7ed3ff]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-4 top-0 h-[520px] w-[255px] rotate-[8deg] rounded-[2.7rem] border border-white/20 bg-white p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <div className="h-full rounded-[2.1rem] bg-[#f7fbff] p-4 text-[#07182d]">
                <div className="mx-auto mb-5 h-5 w-24 rounded-full bg-[#07182d]/10" />

                <div className="rounded-[1.7rem] bg-[#07182d] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/60">Project</p>
                      <h3 className="mt-1 text-lg font-semibold">Launch App</h3>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7ed3ff]/20">
                      <Smartphone size={20} className="text-[#7ed3ff]" />
                    </div>
                  </div>

                  <div className="mt-6 h-24 rounded-2xl bg-gradient-to-br from-[#267A9E] to-[#7ed3ff]" />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <Apple size={20} />
                    <p className="mt-3 text-xs font-semibold">iOS Ready</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <PlayCircle size={20} />
                    <p className="mt-3 text-xs font-semibold">Android</p>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-slate-500">App performance</p>

                  <div className="mt-4 space-y-3">
                    <Progress label="Speed" value="96%" width="w-[96%]" />
                    <Progress label="UX" value="92%" width="w-[92%]" light />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              What We Deliver
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#07182d] sm:text-5xl">
              Everything your app needs to launch and grow.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#267A9E]/10 text-[#267A9E] transition group-hover:bg-[#267A9E] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#07182d]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APP TYPES */}
      <section className="relative overflow-hidden bg-[#07182d] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              App Categories
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
              We build apps for different industries and business models.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Whether it is a customer-facing mobile product, an internal
              business tool, or a platform with dashboards and user accounts, we
              help you turn the concept into a polished app.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {appTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-[#7ed3ff]/40 hover:bg-white/10"
              >
                <CheckCircle size={20} className="shrink-0 text-[#7ed3ff]" />
                <span className="font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Our Process
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#07182d] sm:text-5xl">
              From rough idea to a production-ready mobile app.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#07182d] text-lg font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-[#07182d]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>

                {index !== process.length - 1 && (
                  <div className="absolute right-[-18px] top-12 hidden h-px w-9 bg-slate-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2.5rem] bg-[#f6f8fb] p-6 shadow-inner">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Code2, title: "Flutter / React Native" },
                { icon: Database, title: "Firebase / Supabase" },
                { icon: Lock, title: "Authentication" },
                { icon: Gauge, title: "Performance Tuning" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="rounded-[1.7rem] bg-white p-6 shadow-sm">
                    <Icon size={26} className="text-[#267A9E]" />
                    <h3 className="mt-5 font-semibold text-[#07182d]">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Engineering Quality
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#07182d] sm:text-5xl">
              Built with a scalable mobile architecture.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We structure apps properly so they are easier to maintain,
              extend, debug, and scale. From authentication to real-time
              features, payment flows, and admin systems, we design the app
              around your long-term product goals.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL STYLE BAND */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-[#07182d] to-[#0d2a4a] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="flex gap-1 text-[#7ed3ff]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
                Designed to impress users. Engineered to support growth.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {[
                { icon: Users, value: "200+", label: "Happy Clients" },
                { icon: Rocket, value: "50+", label: "Apps & Platforms" },
                { icon: Zap, value: "24/7", label: "Support Focus" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <Icon size={26} className="text-[#7ed3ff]" />
                    <p className="mt-5 text-3xl font-bold">{item.value}</p>
                    <p className="mt-1 text-sm text-white/65">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
                Start Your App
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#07182d] sm:text-4xl">
                Ready to build a mobile app for your business?
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Let’s turn your idea into a clean, functional, and beautiful
                mobile product.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/service/web-development"
                className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-7 py-4 text-sm font-semibold text-[#07182d] transition hover:border-[#267A9E] hover:text-[#267A9E]"
              >
                Web Development
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Progress({
  label,
  value,
  width,
  light,
}: {
  label: string;
  value: string;
  width: string;
  light?: boolean;
}) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100">
        <div className={`h-2 rounded-full ${width} ${light ? "bg-[#7ed3ff]" : "bg-[#267A9E]"}`} />
      </div>
    </div>
  );
}

export default MobileAppDevelopmentPage;