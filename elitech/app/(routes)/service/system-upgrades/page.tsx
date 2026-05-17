import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  RefreshCcw,
  Rocket,
  ShieldCheck,
  Gauge,
  Database,
  Server,
  Cloud,
  Code2,
  Layers3,
  MonitorSmartphone,
  GitBranch,
  Wrench,
  CheckCircle,
  AlertTriangle,
  Cpu,
  LockKeyhole,
  Activity,
  Settings2,
  Workflow,
  FileText,
  Boxes,
  Zap,
  HardDrive,
  Search,
  Terminal,
  Repeat,
  Package,
  Monitor,
} from "lucide-react";

const upgradeServices = [
  {
    icon: Code2,
    title: "Codebase Modernization",
    text: "Refactor old, messy, or difficult-to-maintain code into cleaner, scalable, and more reliable architecture.",
  },
  {
    icon: MonitorSmartphone,
    title: "UI/UX Refresh",
    text: "Upgrade outdated interfaces into modern, responsive, user-friendly designs that look professional.",
  },
  {
    icon: Database,
    title: "Database Upgrade",
    text: "Improve database structure, queries, relationships, backups, migrations, and performance.",
  },
  {
    icon: ShieldCheck,
    title: "Security Improvements",
    text: "Strengthen authentication, permissions, validation, SSL, dependency safety, and access control.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    text: "Move old systems from weak hosting or local setups to secure, scalable cloud infrastructure.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    text: "Speed up slow pages, heavy APIs, database queries, dashboards, and user workflows.",
  },
];

const upgradeAreas = [
  "Outdated website redesign",
  "Old dashboard modernization",
  "Legacy backend upgrade",
  "Database restructuring",
  "Cloud migration",
  "API improvement",
  "Security patching",
  "Frontend framework upgrade",
  "Mobile responsiveness update",
  "Admin panel redesign",
  "Server configuration upgrade",
  "Performance optimization",
];

const warningSigns = [
  {
    icon: AlertTriangle,
    title: "Slow system performance",
    text: "Pages load slowly, dashboards freeze, API requests delay, or users complain about system speed.",
  },
  {
    icon: LockKeyhole,
    title: "Weak security structure",
    text: "Old authentication, exposed credentials, missing validation, outdated dependencies, or poor access control.",
  },
  {
    icon: Wrench,
    title: "Hard to maintain",
    text: "Simple changes take too long because the system has messy logic, repeated code, or poor structure.",
  },
  {
    icon: MonitorSmartphone,
    title: "Outdated user interface",
    text: "The system looks old, does not respond well on mobile, or feels difficult for users to navigate.",
  },
];

const process = [
  {
    step: "01",
    title: "System Audit",
    text: "We inspect your current software, codebase, database, hosting, performance, security, and user experience.",
  },
  {
    step: "02",
    title: "Upgrade Plan",
    text: "We define what should be upgraded, what should be rebuilt, what should be preserved, and what should be removed.",
  },
  {
    step: "03",
    title: "Modernization",
    text: "We refactor, redesign, migrate, optimize, secure, and improve the system step by step.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    text: "We test the upgraded system, confirm stability, deploy safely, and monitor performance after launch.",
  },
];

const modernizationLayers = [
  {
    icon: Monitor,
    title: "Presentation Layer",
    text: "Modern UI, responsive design, clean layouts, forms, dashboards, navigation, and user experience.",
  },
  {
    icon: Code2,
    title: "Application Layer",
    text: "Cleaner business logic, better frontend structure, reusable components, and maintainable modules.",
  },
  {
    icon: Server,
    title: "Backend Layer",
    text: "Improved APIs, authentication, validation, integrations, server logic, and application security.",
  },
  {
    icon: Database,
    title: "Data Layer",
    text: "Better database schema, optimized queries, migrations, backups, and safer data handling.",
  },
];

const benefits = [
  {
    icon: Gauge,
    title: "Faster system",
    text: "Improve loading speed, API response time, dashboard performance, and user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Better security",
    text: "Reduce risk through security patches, access control, validation, and safe configurations.",
  },
  {
    icon: Layers3,
    title: "Cleaner architecture",
    text: "Make the system easier to maintain, extend, debug, and scale over time.",
  },
  {
    icon: Rocket,
    title: "Ready for growth",
    text: "Prepare your platform for more users, more features, more data, and future integrations.",
  },
];

const upgradeStack = [
  {
    icon: GitBranch,
    title: "Framework Upgrades",
    text: "Upgrade frontend, backend, libraries, dependencies, and project structure.",
  },
  {
    icon: Package,
    title: "Dependency Updates",
    text: "Update outdated packages and remove risky or unsupported libraries.",
  },
  {
    icon: Terminal,
    title: "Deployment Pipeline",
    text: "Improve build, deployment, environment variables, server setup, and release process.",
  },
  {
    icon: Activity,
    title: "Monitoring Setup",
    text: "Add logs, error tracking, uptime checks, performance metrics, and alerts.",
  },
];

function SystemUpgradesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] font-['Poppins',sans-serif] text-[#06111f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-[#267A9E]/25 blur-3xl" />
          <div className="absolute right-[-180px] top-16 h-[560px] w-[560px] rounded-full bg-[#7ed3ff]/12 blur-3xl" />
          <div className="absolute bottom-[-260px] left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-blue-700/18 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,17,31,0.98),rgba(7,24,45,0.94),rgba(38,122,158,0.28))]" />
        </div>

        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-2 text-sm font-medium text-[#d7f4ff] backdrop-blur">
              <Sparkles size={16} className="text-[#7ed3ff]" />
              System Upgrades
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Modernize old systems into faster, safer, and better software.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              We upgrade outdated websites, dashboards, business systems,
              backends, databases, and cloud setups so your software becomes
              cleaner, faster, more secure, and ready for future growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.38)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Upgrade My System
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/service/maintenance-support"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#7ed3ff] hover:text-[#7ed3ff]"
              >
                Maintenance Support
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { value: "Fast", label: "Performance" },
                { value: "Secure", label: "System safety" },
                { value: "Modern", label: "Architecture" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                >
                  <p className="text-2xl font-bold text-[#7ed3ff]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-white/55">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <UpgradeHeroVisual />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              What We Upgrade
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Upgrade the parts of your system holding your business back.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              System upgrades can target the frontend, backend, database,
              hosting, security, performance, user experience, or the entire
              application architecture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upgradeServices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fbfdff] p-7 shadow-sm transition hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
                >
                  <div className="absolute right-[-60px] top-[-60px] h-36 w-36 rounded-full bg-[#7ed3ff]/20 blur-2xl transition group-hover:bg-[#267A9E]/15" />

                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06111f] text-[#7ed3ff] transition group-hover:bg-[#267A9E] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="relative z-10 text-xl font-semibold text-[#06111f]">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WARNING SIGNS */}
      <section className="bg-[#f8fafc] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Signs You Need An Upgrade
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Old systems become expensive when they slow down your work.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              When software becomes slow, insecure, confusing, or hard to
              modify, it usually means the system needs a structured upgrade
              instead of small temporary fixes.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {warningSigns.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#267A9E]/10 text-[#267A9E]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#06111f]">
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

      {/* UPGRADE AREAS */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[#267A9E]/22 blur-3xl" />
          <div className="absolute right-[-180px] bottom-0 h-[460px] w-[460px] rounded-full bg-[#7ed3ff]/12 blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Upgrade Coverage
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              We can upgrade the full system or specific weak areas.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Some systems need a complete rebuild. Others only need better
              structure, cleaner UI, stronger security, faster database queries,
              improved hosting, or a modernized backend.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {upgradeAreas.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition hover:border-[#7ed3ff]/40 hover:bg-white/[0.08]"
              >
                <CheckCircle
                  size={20}
                  className="shrink-0 text-[#7ed3ff] transition group-hover:scale-110"
                />
                <span className="font-medium text-white/86">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <BeforeAfterVisual />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Before And After
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Turn outdated software into a modern digital asset.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A proper system upgrade improves more than appearance. It can
              improve maintainability, security, speed, user confidence,
              business reporting, and your ability to add future features.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-5 shadow-sm"
                  >
                    <Icon size={24} className="text-[#267A9E]" />
                    <p className="mt-3 font-semibold text-[#06111f]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MODERNIZATION LAYERS */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Modernization Layers
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              A strong upgrade touches the right layer of the system.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              We analyze your application layer by layer so we can upgrade the
              areas that truly need improvement without breaking the parts that
              already work well.
            </p>
          </div>

          <div className="grid gap-4">
            {modernizationLayers.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7ed3ff]/10 text-[#7ed3ff]">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-white/58">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {index !== modernizationLayers.length - 1 && (
                    <div className="ml-6 h-5 w-px bg-[#7ed3ff]/30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="bg-[#f8fafc] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Upgrade Stack
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              We upgrade the technical foundation, not just the surface.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A modern system needs updated frameworks, safer dependencies,
              cleaner deployment flow, monitoring, backups, and proper
              development practices.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {upgradeStack.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#267A9E]/10 text-[#267A9E]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#06111f]">
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

      {/* PROCESS */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Upgrade Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              From unstable old system to clean modern software.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#06111f] text-sm font-bold text-white">
                  {item.step}
                </div>

                <h3 className="text-xl font-semibold text-[#06111f]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                {index !== process.length - 1 && (
                  <div className="absolute right-[-18px] top-12 hidden h-px w-9 bg-slate-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIGRATION / SAFETY */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <div className="rounded-[2rem] bg-[#07182d] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Safe Upgrade Flow</p>
                  <h3 className="mt-1 text-2xl font-bold">
                    Backup → Upgrade → Test → Deploy
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7ed3ff]/10 text-[#7ed3ff]">
                  <Workflow size={24} />
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: HardDrive,
                    title: "Backup",
                    text: "Protect existing code, database, files, and important configurations.",
                  },
                  {
                    icon: Wrench,
                    title: "Upgrade",
                    text: "Apply the planned changes to design, code, database, server, or integrations.",
                  },
                  {
                    icon: Search,
                    title: "Test",
                    text: "Check core flows, edge cases, forms, logins, dashboards, and deployment behavior.",
                  },
                  {
                    icon: Rocket,
                    title: "Deploy",
                    text: "Launch carefully, monitor the system, and confirm stability after release.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title}>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7ed3ff]/10 text-[#7ed3ff]">
                            <Icon size={21} />
                          </div>

                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="mt-1 text-sm leading-6 text-white/55">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      {index !== 3 && (
                        <div className="ml-10 h-5 w-px bg-[#7ed3ff]/30" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Safe Modernization
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Upgrade carefully without damaging what already works.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              System upgrades must be handled with care. We plan backups,
              testing, staged changes, deployment checks, and rollback thinking
              so your business does not lose important data or functionality.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: "Backup-first approach" },
                { icon: Activity, title: "Post-launch monitoring" },
                { icon: Repeat, title: "Rollback thinking" },
                { icon: CheckCircle, title: "Core flow testing" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5"
                  >
                    <Icon size={24} className="text-[#7ed3ff]" />
                    <p className="mt-3 font-semibold">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-[#06111f] text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-2 text-sm text-[#d7f4ff]">
                <Rocket size={16} className="text-[#7ed3ff]" />
                Ready to modernize your system?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Let’s upgrade your old software into something faster and stronger.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Whether you need a UI refresh, database upgrade, backend
                modernization, cloud migration, security improvement, or full
                system rebuild, we can help you move forward.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Request System Upgrade
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative min-h-[340px] bg-[#07182d] p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,211,255,0.2),transparent_36%)]" />

              <div className="relative z-10 space-y-5">
                {[
                  "System audit and upgrade plan",
                  "UI, code, database, and server improvements",
                  "Security and performance optimization",
                  "Testing, deployment, and support",
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

function UpgradeHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-[#7ed3ff]/20 blur-3xl" />
      <div className="absolute bottom-10 right-8 h-52 w-52 rounded-full bg-blue-600/25 blur-3xl" />

      <div className="relative rounded-[2.4rem] border border-white/15 bg-white/[0.08] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[1.8rem] bg-[#06111f]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-1 text-xs font-medium text-[#d7f4ff]">
              Upgrade Console
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[210px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7ed3ff]/10 text-[#7ed3ff]">
                  <RefreshCcw size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    UpgradeOS
                  </p>
                  <p className="text-xs text-white/45">Modernization mode</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Code2, label: "Codebase" },
                  { icon: Database, label: "Database" },
                  { icon: ShieldCheck, label: "Security" },
                  { icon: Gauge, label: "Speed" },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${
                        index === 0
                          ? "bg-[#7ed3ff]/10 text-[#d7f4ff]"
                          : "bg-white/[0.04] text-white/55"
                      }`}
                    >
                      <Icon size={17} />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </aside>

            <div className="p-5">
              <div className="mb-5 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Speed", value: "+68%" },
                  { label: "Risk", value: "-42%" },
                  { label: "Health", value: "96%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-xs text-white/45">{item.label}</p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Modernization Tasks
                    </p>
                    <p className="text-xs text-white/45">
                      Current upgrade progress
                    </p>
                  </div>

                  <Wrench size={22} className="text-[#7ed3ff]" />
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Legacy code refactored", status: "Done" },
                    { title: "Database queries optimized", status: "Done" },
                    { title: "Security patches applied", status: "Secure" },
                    { title: "Cloud deployment prepared", status: "Ready" },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            index < 2
                              ? "bg-[#7ed3ff] text-[#06111f]"
                              : "bg-[#7ed3ff]/10 text-[#7ed3ff]"
                          }`}
                        >
                          <CheckCircle size={16} />
                        </div>

                        <span className="text-sm text-white/75">
                          {item.title}
                        </span>
                      </div>

                      <span className="rounded-full bg-[#7ed3ff]/10 px-3 py-1 text-xs font-medium text-[#d7f4ff]">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-3 flex items-center justify-between text-xs text-white/50">
                  <span>Upgrade completion</span>
                  <span>89%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[89%] rounded-full bg-[#7ed3ff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -right-5 top-16 hidden rounded-2xl border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-3 text-sm text-[#d7f4ff] backdrop-blur lg:block">
        System Health 96%
      </div>

      <div className="absolute -left-5 bottom-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur lg:block">
        Speed Improved +68%
      </div>
    </div>
  );
}

function BeforeAfterVisual() {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-[#7ed3ff]/30 blur-3xl" />
      <div className="absolute -right-8 bottom-8 h-52 w-52 rounded-full bg-[#267A9E]/18 blur-3xl" />

      <div className="relative rounded-[2.5rem] bg-white p-5 shadow-2xl ring-1 ring-slate-200">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Before</p>
                <h3 className="text-2xl font-bold text-[#06111f]">
                  Legacy System
                </h3>
              </div>

              <AlertTriangle size={26} className="text-orange-500" />
            </div>

            <div className="space-y-4">
              {[
                "Slow pages",
                "Old interface",
                "Weak security",
                "Difficult updates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-600 shadow-sm"
                >
                  <div className="h-3 w-3 rounded-full bg-orange-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 h-2 rounded-full bg-slate-200">
              <div className="h-2 w-[38%] rounded-full bg-orange-400" />
            </div>
            <p className="mt-3 text-xs text-slate-500">System health: 38%</p>
          </div>

          <div className="rounded-[2rem] bg-[#06111f] p-6 text-white">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/45">After</p>
                <h3 className="text-2xl font-bold">Modern System</h3>
              </div>

              <Rocket size={26} className="text-[#7ed3ff]" />
            </div>

            <div className="space-y-4">
              {[
                "Fast performance",
                "Modern UI",
                "Secure access",
                "Scalable structure",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 text-white/78"
                >
                  <CheckCircle size={18} className="text-[#7ed3ff]" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[96%] rounded-full bg-[#7ed3ff]" />
            </div>
            <p className="mt-3 text-xs text-white/45">System health: 96%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemUpgradesPage;