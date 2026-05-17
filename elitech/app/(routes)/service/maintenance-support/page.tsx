import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  LifeBuoy,
  ShieldCheck,
  Activity,
  Bug,
  RefreshCcw,
  Server,
  Database,
  Clock,
  Bell,
  CheckCircle,
  Sparkles,
  Rocket,
  Gauge,
  LockKeyhole,
  Wrench,
  Headphones,
  FileText,
  Cloud,
  Monitor,
  Settings2,
  Search,
  Users,
  BarChart3,
  ClipboardCheck,
  Zap,
  AlertTriangle,
  MessageCircle,
  HardDrive,
  GitBranch,
} from "lucide-react";

const supportServices = [
  {
    icon: Bug,
    title: "Bug Fixes & Issue Resolution",
    text: "We diagnose and fix broken features, UI problems, backend errors, API failures, and unexpected system behavior.",
  },
  {
    icon: Activity,
    title: "System Monitoring",
    text: "Track uptime, performance, logs, errors, traffic, database health, and application stability.",
  },
  {
    icon: RefreshCcw,
    title: "Regular Updates",
    text: "Keep your website, app, dashboard, and backend updated with improvements, security patches, and feature refinements.",
  },
  {
    icon: ShieldCheck,
    title: "Security Maintenance",
    text: "Protect your system with access reviews, SSL checks, dependency updates, validation, and safer deployment practices.",
  },
  {
    icon: Server,
    title: "Server & Hosting Support",
    text: "Maintain cloud servers, domains, SSL, Nginx, deployments, databases, backups, and environment configurations.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    text: "Get reliable support when users face problems, features stop working, or your team needs technical help.",
  },
];

const supportAreas = [
  "Website maintenance",
  "Web application support",
  "Mobile app support",
  "Admin dashboard support",
  "Backend/API maintenance",
  "Database monitoring",
  "Cloud server support",
  "SSL and domain checks",
  "Performance optimization",
  "Bug tracking and fixes",
  "Security updates",
  "Backup verification",
];

const process = [
  {
    step: "01",
    title: "Audit",
    text: "We inspect the current system, hosting, codebase, database, performance, errors, and security gaps.",
  },
  {
    step: "02",
    title: "Stabilize",
    text: "We fix urgent issues, broken flows, deployment problems, slow pages, and unreliable features.",
  },
  {
    step: "03",
    title: "Monitor",
    text: "We track system health, uptime, logs, user complaints, errors, and performance patterns.",
  },
  {
    step: "04",
    title: "Improve",
    text: "We make continuous improvements through updates, refinements, optimization, and security maintenance.",
  },
];

const maintenanceBenefits = [
  {
    icon: Clock,
    title: "Less Downtime",
    text: "Reduce unexpected outages and keep your digital systems available.",
  },
  {
    icon: Gauge,
    title: "Better Performance",
    text: "Improve speed, responsiveness, and overall user experience.",
  },
  {
    icon: LockKeyhole,
    title: "Stronger Security",
    text: "Patch weaknesses before they become serious business risks.",
  },
  {
    icon: Users,
    title: "Happier Users",
    text: "Fix issues quickly so customers and staff can use the system smoothly.",
  },
];

const maintenancePlans = [
  {
    name: "Essential Care",
    tag: "For small websites",
    description:
      "Basic maintenance for websites and simple business pages that need occasional updates and checks.",
    features: [
      "Monthly website check",
      "Basic bug fixes",
      "Content updates",
      "SSL and domain check",
      "Basic performance review",
    ],
  },
  {
    name: "Growth Support",
    tag: "For growing systems",
    description:
      "Ongoing support for websites, dashboards, portals, and business systems that need regular attention.",
    features: [
      "Priority issue handling",
      "Performance optimization",
      "Database checks",
      "Security updates",
      "Monthly improvement report",
    ],
    featured: true,
  },
  {
    name: "Managed Support",
    tag: "For critical platforms",
    description:
      "Advanced maintenance for systems that need monitoring, faster response, backend support, and continuous improvement.",
    features: [
      "System monitoring",
      "Backend/API support",
      "Cloud server support",
      "Backup verification",
      "Technical support sessions",
    ],
  },
];

const monitoringItems = [
  {
    icon: Activity,
    title: "Uptime Monitoring",
    text: "Track whether your system is online and responding correctly.",
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    text: "Measure speed, errors, traffic, and usage patterns.",
  },
  {
    icon: Bell,
    title: "Alerts & Notifications",
    text: "Receive alerts when critical problems need attention.",
  },
  {
    icon: HardDrive,
    title: "Backup Checks",
    text: "Confirm that important data is backed up and recoverable.",
  },
];

function MaintenanceSupportPage() {
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
              Maintenance & Support
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Keep your software secure, stable, and always improving.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              We provide ongoing maintenance and technical support for websites,
              web applications, mobile apps, dashboards, servers, databases, and
              business systems so your digital products keep running smoothly.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.38)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Get Support
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/service/cloud-integration"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#7ed3ff] hover:text-[#7ed3ff]"
              >
                Cloud Support
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { value: "24/7", label: "System care" },
                { value: "Fast", label: "Issue response" },
                { value: "Secure", label: "Maintenance" },
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

          <SupportHeroVisual />
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              What We Maintain
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Technical care for the systems your business depends on.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Software needs regular attention after launch. We help you keep it
              updated, protected, fast, and reliable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportServices.map((item) => {
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

      {/* SUPPORT AREAS */}
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
              Support Coverage
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              From frontend issues to backend stability, we cover the full stack.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              We support different parts of your digital system, including the
              user interface, backend logic, database, hosting environment,
              integrations, security, and user-facing workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {supportAreas.map((item) => (
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

      {/* MONITORING */}
      <section className="bg-[#f8fafc] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <MonitoringVisual />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Monitoring & Reliability
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Know what is happening before small issues become big problems.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We help track system health so problems can be noticed early.
              Monitoring improves stability, supports better decisions, and
              gives your team confidence in the system.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {monitoringItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
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

      {/* SUPPORT PLANS */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Support Plans
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Choose support based on how critical your system is.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Different systems need different levels of care. We can support
              simple websites, growing platforms, and critical business systems.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {maintenancePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[2rem] p-7 shadow-sm ring-1 transition hover:-translate-y-2 hover:shadow-2xl ${
                  plan.featured
                    ? "bg-[#06111f] text-white ring-[#06111f]"
                    : "bg-[#fbfdff] text-[#06111f] ring-slate-200"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-6 top-6 rounded-full bg-[#7ed3ff]/15 px-3 py-1 text-xs font-semibold text-[#7ed3ff]">
                    Recommended
                  </div>
                )}

                <p
                  className={`text-sm font-semibold ${
                    plan.featured ? "text-[#7ed3ff]" : "text-[#267A9E]"
                  }`}
                >
                  {plan.tag}
                </p>

                <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>

                <p
                  className={`mt-4 text-sm leading-7 ${
                    plan.featured ? "text-white/65" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-7 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle
                        size={18}
                        className={
                          plan.featured ? "text-[#7ed3ff]" : "text-[#267A9E]"
                        }
                      />
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-white/80" : "text-slate-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-[#267A9E] text-white hover:bg-[#034663]"
                      : "bg-[#267A9E]/10 text-[#267A9E] hover:bg-[#267A9E] hover:text-white"
                  }`}
                >
                  Request Plan
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f8fafc] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Maintenance Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              A simple process for keeping your system healthy.
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

      {/* BENEFITS */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Why It Matters
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Launching is only the beginning. Maintenance keeps the product alive.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Without maintenance, systems become slower, outdated, vulnerable,
              and unreliable. With the right support, your software can remain
              useful, secure, and ready for growth.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {maintenanceBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur"
                >
                  <Icon size={28} className="text-[#7ed3ff]" />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH SUPPORT */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Technical Operations
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Support for frontend, backend, server, and database issues.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We can help maintain the full technical stack, from visual bugs
              and broken forms to API errors, database issues, deployment
              problems, server logs, and cloud configuration.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/service/system-upgrades"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                View System Upgrades
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-[#267A9E]/20 bg-white px-7 py-4 text-sm font-semibold text-[#06111f] transition hover:border-[#267A9E] hover:text-[#267A9E]"
              >
                Contact Support
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Monitor,
                title: "Frontend Support",
                text: "UI bugs, layout issues, responsiveness, and visual improvements.",
              },
              {
                icon: Server,
                title: "Backend Support",
                text: "API errors, logic bugs, authentication, and integration problems.",
              },
              {
                icon: Database,
                title: "Database Support",
                text: "Data issues, backups, queries, migrations, and optimization.",
              },
              {
                icon: Cloud,
                title: "Cloud Support",
                text: "Server health, domains, SSL, deployment, and monitoring.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-[#fbfdff] p-7 shadow-sm transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <Icon size={28} className="text-[#267A9E]" />
                  <h3 className="mt-5 text-xl font-semibold text-[#06111f]">
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

      {/* CTA */}
      <section className="bg-[#f8fafc] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-[#06111f] text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-2 text-sm text-[#d7f4ff]">
                <Rocket size={16} className="text-[#7ed3ff]" />
                Need reliable support?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Let’s keep your digital system running smoothly.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Whether you need bug fixes, server support, system monitoring,
                security updates, performance improvements, or long-term
                maintenance, we can help.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Request Maintenance Support
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative min-h-[340px] bg-[#07182d] p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,211,255,0.2),transparent_36%)]" />

              <div className="relative z-10 space-y-5">
                {[
                  "Bug fixing and updates",
                  "Performance and security checks",
                  "Server and database support",
                  "Monitoring and improvement reports",
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

function SupportHeroVisual() {
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
              Support Center
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[210px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7ed3ff]/10 text-[#7ed3ff]">
                  <LifeBuoy size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    CareDesk
                  </p>
                  <p className="text-xs text-white/45">Live system health</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Activity, label: "Monitor" },
                  { icon: Bug, label: "Issues" },
                  { icon: ShieldCheck, label: "Security" },
                  { icon: Wrench, label: "Fixes" },
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
                  { label: "Uptime", value: "99.9%" },
                  { label: "Tickets", value: "12" },
                  { label: "Health", value: "Good" },
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
                      Maintenance Queue
                    </p>
                    <p className="text-xs text-white/45">
                      Active support tasks
                    </p>
                  </div>

                  <ClipboardCheck size={22} className="text-[#7ed3ff]" />
                </div>

                <div className="space-y-4">
                  {[
                    { title: "SSL certificate checked", status: "Done" },
                    { title: "Database backup verified", status: "Secure" },
                    { title: "API response optimized", status: "Updated" },
                    { title: "UI bug report reviewed", status: "In Review" },
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
                  <span>System stability</span>
                  <span>98%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[98%] rounded-full bg-[#7ed3ff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -right-5 top-16 hidden rounded-2xl border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-3 text-sm text-[#d7f4ff] backdrop-blur lg:block">
        Live Monitoring
      </div>

      <div className="absolute -left-5 bottom-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur lg:block">
        Stability 98%
      </div>
    </div>
  );
}

function MonitoringVisual() {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-[#7ed3ff]/30 blur-3xl" />
      <div className="absolute -right-8 bottom-8 h-52 w-52 rounded-full bg-[#267A9E]/18 blur-3xl" />

      <div className="relative rounded-[2.5rem] bg-white p-5 shadow-2xl ring-1 ring-slate-200">
        <div className="rounded-[2rem] bg-[#06111f] p-6 text-white">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-sm text-white/45">System Monitor</p>
              <h3 className="mt-1 text-2xl font-bold">
                Health Dashboard
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7ed3ff]/10 text-[#7ed3ff]">
              <Activity size={24} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Server", value: "Online", icon: Server },
              { label: "Database", value: "Stable", icon: Database },
              { label: "API", value: "Fast", icon: GitBranch },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <Icon size={22} className="text-[#7ed3ff]" />
                  <p className="mt-4 text-xs text-white/45">{item.label}</p>
                  <p className="mt-1 font-semibold text-white">{item.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-semibold">Response Time</p>
              <span className="rounded-full bg-[#7ed3ff]/10 px-3 py-1 text-xs font-semibold text-[#7ed3ff]">
                42ms
              </span>
            </div>

            <div className="flex h-40 items-end gap-3">
              {[45, 62, 58, 74, 66, 82, 70, 94].map((height, index) => (
                <div
                  key={index}
                  className="flex flex-1 items-end rounded-full bg-white/[0.06]"
                >
                  <div
                    className="w-full rounded-full bg-gradient-to-t from-[#267A9E] to-[#7ed3ff]"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <Search size={22} className="text-[#7ed3ff]" />
              <p className="mt-4 text-sm font-semibold">Error Scan</p>
              <p className="mt-1 text-xs text-white/45">No critical issues</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <MessageCircle size={22} className="text-[#7ed3ff]" />
              <p className="mt-4 text-sm font-semibold">Support Notes</p>
              <p className="mt-1 text-xs text-white/45">3 updates pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaintenanceSupportPage;