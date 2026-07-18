import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  MonitorSmartphone,
  Gauge,
  ShieldCheck,
  Search,
  Database,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    text: "Websites that look sharp on desktop, tablet, and mobile.",
  },
  {
    icon: Gauge,
    title: "Fast Performance",
    text: "Optimized pages, clean code, and smooth loading experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Structure",
    text: "Built with security, validation, and reliability in mind.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    text: "Clean structure to help your business become more discoverable.",
  },
  {
    icon: Database,
    title: "Backend Integration",
    text: "APIs, dashboards, databases, and admin systems when needed.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    text: "Tailored systems instead of basic template-only websites.",
  },
];

const process = [
  "Discovery & requirements gathering",
  "UI/UX planning and wireframing",
  "Frontend and backend development",
  "Testing, optimization, and deployment",
];

function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <section className="relative overflow-hidden bg-[#07182d] px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,207,255,0.18),transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#7ed3ff]">
              Elitech Service
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Web Development
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              We design and build modern websites, web applications, admin
              dashboards, and business platforms that are fast, secure,
              responsive, and built to support real business growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/project"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#7ed3ff] hover:text-[#7ed3ff]"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#267A9E]">
              What We Build
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#07182d] sm:text-4xl">
              Reliable websites and web systems for modern businesses
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#267A9E]/10 text-[#267A9E]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#07182d]">
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

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#267A9E]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#07182d] sm:text-4xl">
              From idea to launch
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We work with you from the first conversation to final deployment,
              making sure the website is clean, functional, scalable, and easy
              to manage.
            </p>
          </div>

          <div className="space-y-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#267A9E] text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="font-medium text-[#07182d]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#07182d] p-8 text-white sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Need a professional website or web platform?
              </h2>

              <p className="mt-4 max-w-2xl text-white/70">
                Let’s build something clean, powerful, and useful for your
                business.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WebDevelopmentPage;