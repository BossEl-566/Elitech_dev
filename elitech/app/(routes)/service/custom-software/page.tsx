import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Layers3,
  ShieldCheck,
  Users,
  Cpu,
  Cloud,
  Database,
  Zap,
  Sparkles,
  Settings,
  CheckCircle,
  Rocket,
  Globe,
  Briefcase,
  FileText,
  Gauge,
  LockKeyhole,
  Server,
  MonitorSmartphone,
} from "lucide-react";

const coreFeatures = [
  {
    icon: Layers3,
    title: "Tailored System Architecture",
    text: "We design the structure around your workflow, not around generic templates.",
  },
  {
    icon: Database,
    title: "Custom Database Design",
    text: "Clean database models for users, records, transactions, reports, and operations.",
  },
  {
    icon: Cloud,
    title: "Cloud & API Integrations",
    text: "Connect your software to payment systems, SMS, email, maps, analytics, and third-party APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Security & User Roles",
    text: "Role-based access, protected routes, data validation, and secure authentication.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    text: "Fast dashboards, optimized queries, smooth pages, and scalable backend logic.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web, Mobile & Desktop Ready",
    text: "Build software that can work across browsers, mobile apps, and internal desktop tools.",
  },
];

const systems = [
  "Business management systems",
  "School management platforms",
  "Hospital and clinic systems",
  "Inventory and warehouse software",
  "Booking and appointment systems",
  "Client portals",
  "Admin dashboards",
  "Payment and billing systems",
  "Workflow automation tools",
  "Delivery and logistics systems",
  "Reporting and analytics platforms",
  "Internal staff management tools",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    text: "We understand your business, users, problems, processes, and expected outcomes.",
  },
  {
    step: "02",
    title: "System Planning",
    text: "We define features, user roles, database structure, dashboards, and technical architecture.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    text: "We design clean interfaces that make the software simple, professional, and easy to use.",
  },
  {
    step: "04",
    title: "Development",
    text: "We build the frontend, backend, database, APIs, authentication, and integrations.",
  },
  {
    step: "05",
    title: "Testing",
    text: "We test the system for bugs, speed, security, user flow, and real operational use cases.",
  },
  {
    step: "06",
    title: "Launch & Support",
    text: "We deploy, train users, monitor performance, and support future improvements.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Automate repetitive work",
  },
  {
    icon: Users,
    title: "Improve staff productivity",
  },
  {
    icon: FileText,
    title: "Generate accurate reports",
  },
  {
    icon: LockKeyhole,
    title: "Protect business data",
  },
];

function CustomSoftwarePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] font-['Poppins',sans-serif]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute left-[-160px] top-16 h-[420px] w-[420px] rounded-full bg-[#267A9E]/25 blur-3xl" />
          <div className="absolute right-[-180px] top-24 h-[500px] w-[500px] rounded-full bg-[#7ed3ff]/10 blur-3xl" />
          <div className="absolute bottom-[-220px] left-[45%] h-[460px] w-[460px] rounded-full bg-[#267A9E]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,17,31,0.96),rgba(7,24,45,0.92),rgba(38,122,158,0.24))]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur">
                
                Custom Software Development
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                Software built around the way your business actually works.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                We design and develop custom systems, dashboards, portals, and
                business platforms that solve specific operational problems and
                help teams work faster, smarter, and more accurately.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.35)] transition hover:-translate-y-1 hover:bg-[#034663]"
                >
                  Start Custom Project
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#7ed3ff] hover:text-[#7ed3ff]"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* System blueprint card */}
            <div className="relative">
              <div className="absolute -left-8 top-10 h-48 w-48 rounded-full bg-[#7ed3ff]/15 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-56 w-56 rounded-full bg-[#267A9E]/25 blur-3xl" />

              <div className="relative rounded-[2.2rem] border border-white/15 bg-white/10 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="rounded-[1.7rem] bg-[#081b31] p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">System Blueprint</p>
                      <h3 className="mt-1 text-2xl font-bold text-white">
                        Operations Suite
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7ed3ff]/15 text-[#7ed3ff]">
                      <Code2 size={24} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: Users, title: "Users", value: "Roles & Access" },
                      { icon: Database, title: "Data", value: "Structured DB" },
                      { icon: Server, title: "API", value: "Secure Backend" },
                      { icon: Globe, title: "Portal", value: "Client Facing" },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                        >
                          <Icon size={22} className="text-[#7ed3ff]" />
                          <p className="mt-4 text-sm text-white/50">
                            {item.title}
                          </p>
                          <p className="mt-1 font-semibold text-white">
                            {item.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="font-semibold text-white">Build Progress</p>
                      <span className="rounded-full bg-[#267A9E] px-3 py-1 text-xs font-semibold text-white">
                        Live
                      </span>
                    </div>

                    <div className="space-y-4">
                      <Progress label="Architecture" value="94%" width="w-[94%]" />
                      <Progress label="Database" value="88%" width="w-[88%]" />
                      <Progress label="UI Screens" value="91%" width="w-[91%]" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {[
                      "Authentication connected",
                      "Dashboard modules configured",
                      "Reports engine activated",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3"
                      >
                        <span className="text-sm text-white/75">{item}</span>
                        <CheckCircle size={17} className="text-[#7ed3ff]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="sticky top-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Why Custom Software
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#06111f] sm:text-5xl">
              Stop forcing your business into software that does not fit.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Generic software can help at the beginning, but as your workflow
              becomes unique, you need a system designed around your operations,
              staff, customers, reports, and growth plans.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#267A9E]/10 text-[#267A9E]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#06111f]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Core Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#06111f] sm:text-5xl">
              Modern software features built for real operations.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-2 hover:border-[#267A9E]/30 hover:bg-white hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06111f] text-[#7ed3ff] transition group-hover:bg-[#267A9E] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#06111f]">
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

      {/* SYSTEM TYPES */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-150px] top-20 h-[360px] w-[360px] rounded-full bg-[#267A9E]/20 blur-3xl" />
          <div className="absolute right-[-120px] bottom-0 h-[360px] w-[360px] rounded-full bg-[#7ed3ff]/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              What We Can Build
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-5xl">
              Custom platforms for different industries and teams.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/68">
              Whether you need a full business system or a focused internal
              tool, we can design it from the ground up with the features,
              roles, reports, and integrations your work requires.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {systems.map((system) => (
              <div
                key={system}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition hover:border-[#7ed3ff]/40 hover:bg-white/[0.08]"
              >
                <CheckCircle size={20} className="shrink-0 text-[#7ed3ff]" />
                <span className="font-medium text-white/88">{system}</span>
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
              Development Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#06111f] sm:text-5xl">
              A clear process from business problem to working software.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-200 lg:block" />

            <div className="grid gap-6">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="relative grid gap-6 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-xl lg:grid-cols-[90px_0.7fr_1fr] lg:items-center lg:p-7"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#06111f] text-sm font-bold text-white">
                    {item.step}
                  </div>

                  <h3 className="text-2xl font-semibold text-[#06111f]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY BAND */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-[#f8fafc] p-6 shadow-inner">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Code2, title: "Frontend Interfaces", text: "Clean dashboards, portals, and user-facing screens." },
                { icon: Server, title: "Backend Services", text: "APIs, business logic, authentication, and integrations." },
                { icon: Database, title: "Data Layer", text: "Structured databases, records, reports, and search." },
                { icon: Settings, title: "Admin Controls", text: "Settings, roles, approvals, logs, and system management." },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.7rem] bg-white p-6 shadow-sm"
                  >
                    <Icon size={28} className="text-[#267A9E]" />
                    <h3 className="mt-5 font-semibold text-[#06111f]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Engineering Quality
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#06111f] sm:text-5xl">
              Built with a scalable foundation.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We build systems with clean modules, reusable components,
              maintainable backend logic, secure authentication, proper database
              relationships, and room for future expansion.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Scalable", "Secure", "Maintainable", "Fast", "Integrated"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#267A9E]/20 bg-[#267A9E]/10 px-4 py-2 text-sm font-semibold text-[#267A9E]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-[#06111f] text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/80">
                <Rocket size={16} className="text-[#7ed3ff]" />
                Ready to build something custom?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.035em] sm:text-5xl">
                Let’s create software that fits your business perfectly.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                From internal tools to full business platforms, we can help you
                design and develop a custom software solution that supports your
                team, customers, and growth.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Discuss Your Project
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative min-h-[340px] bg-[#0b2238] p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,211,255,0.18),transparent_35%)]" />

              <div className="relative z-10 space-y-5">
                {[
                  "Custom workflow mapping",
                  "Database and API design",
                  "Dashboard and report modules",
                  "Deployment and long-term support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                  >
                    <CheckCircle size={20} className="text-[#7ed3ff]" />
                    <span className="text-white/82">{item}</span>
                  </div>
                ))}
              </div>
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
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs text-white/65">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div className={`h-2 rounded-full bg-[#7ed3ff] ${width}`} />
      </div>
    </div>
  );
}

export default CustomSoftwarePage;