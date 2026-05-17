import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Server,
  Database,
  ShieldCheck,
  Upload,
  Download,
  RefreshCcw,
  Network,
  Activity,
  Gauge,
  Settings2,
  CheckCircle,
  Sparkles,
  Rocket,
  Cpu,
  Layers3,
  LockKeyhole,
  Globe,
  Workflow,
  Bell,
  Cable,
  Boxes,
  Monitor,
  Terminal,
  Zap,
  GitBranch,
} from "lucide-react";

const cloudServices = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure Setup",
    text: "Design and configure cloud environments for websites, apps, APIs, databases, and internal systems.",
  },
  {
    icon: Server,
    title: "Backend Deployment",
    text: "Deploy backend services, APIs, dashboards, admin systems, and business platforms reliably.",
  },
  {
    icon: Database,
    title: "Cloud Databases",
    text: "Set up scalable databases, backups, replication, access control, and secure connection flows.",
  },
  {
    icon: ShieldCheck,
    title: "Security Configuration",
    text: "Protect cloud resources with permissions, firewalls, SSL, secrets, authentication, and access rules.",
  },
  {
    icon: RefreshCcw,
    title: "Data Sync & Integration",
    text: "Connect cloud apps, mobile apps, dashboards, third-party APIs, and real-time data flows.",
  },
  {
    icon: Activity,
    title: "Monitoring & Reliability",
    text: "Track uptime, performance, errors, logs, usage, alerts, and system health after deployment.",
  },
];

const cloudUseCases = [
  "Website and web app hosting",
  "API deployment",
  "Cloud database setup",
  "Realtime app backend",
  "File storage and media delivery",
  "Business dashboard hosting",
  "Mobile app backend integration",
  "Payment system integration",
  "Automated backups",
  "Server monitoring",
  "Domain and SSL setup",
  "Cloud migration",
];

const platforms = [
  {
    icon: Cloud,
    title: "AWS / Lightsail",
    text: "Cloud hosting, servers, databases, storage, networking, and production deployment.",
  },
  {
    icon: Database,
    title: "Firebase / Supabase",
    text: "Realtime data, authentication, storage, serverless functions, and modern app backends.",
  },
  {
    icon: Server,
    title: "VPS / Linux Servers",
    text: "Custom server setup, Nginx, SSL, Docker, PM2, databases, APIs, and monitoring.",
  },
  {
    icon: Globe,
    title: "Domains & CDN",
    text: "DNS setup, SSL certificates, CDN routing, fast delivery, and secure public access.",
  },
];

const process = [
  {
    step: "01",
    title: "Cloud Assessment",
    text: "We review your current app, backend, database, hosting needs, traffic expectations, and security requirements.",
  },
  {
    step: "02",
    title: "Architecture Design",
    text: "We design the cloud structure: servers, APIs, databases, storage, domains, SSL, scaling, and monitoring.",
  },
  {
    step: "03",
    title: "Deployment & Integration",
    text: "We deploy the system, configure environments, connect services, and secure communication between components.",
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    text: "We monitor uptime, logs, performance, backups, and improve the cloud setup as your product grows.",
  },
];

const benefits = [
  {
    icon: Gauge,
    title: "Fast Performance",
    text: "Optimized infrastructure for better speed, uptime, and response times.",
  },
  {
    icon: LockKeyhole,
    title: "Better Security",
    text: "Secure access, SSL, protected credentials, and safer deployment workflows.",
  },
  {
    icon: RefreshCcw,
    title: "Reliable Backups",
    text: "Automated backup strategies to protect important business data.",
  },
  {
    icon: Layers3,
    title: "Scalable Systems",
    text: "Infrastructure that can grow with more users, data, and traffic.",
  },
];

const architectureLayers = [
  {
    icon: Globe,
    title: "Client Layer",
    text: "Websites, mobile apps, dashboards, and user-facing platforms.",
  },
  {
    icon: Network,
    title: "Gateway Layer",
    text: "Domains, SSL, CDN, reverse proxy, routing, and API gateway configuration.",
  },
  {
    icon: Server,
    title: "Application Layer",
    text: "Backend services, APIs, workers, queues, business logic, and integrations.",
  },
  {
    icon: Database,
    title: "Data Layer",
    text: "Cloud databases, file storage, backups, logs, analytics, and protected records.",
  },
];

function CloudIntegrationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#eef6ff] font-['Poppins',sans-serif] text-[#06111f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#eaf6ff] px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute left-[-180px] top-16 h-[520px] w-[520px] rounded-full bg-[#7ed3ff]/45 blur-3xl" />
          <div className="absolute right-[-170px] top-20 h-[560px] w-[560px] rounded-full bg-[#267A9E]/25 blur-3xl" />
          <div className="absolute bottom-[-260px] left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(238,246,255,0.98),rgba(232,247,255,0.94),rgba(255,255,255,0.72))]" />
        </div>

        <div className="absolute inset-0 opacity-[0.32]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(38,122,158,0.28)_1px,transparent_1px)] bg-[size:34px_34px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#267A9E]/15 bg-white/70 px-4 py-2 text-sm font-medium text-[#267A9E] shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Cloud Integration
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.05em] text-[#06111f] sm:text-5xl lg:text-7xl">
              Connect, deploy, and scale your business in the cloud.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We help businesses move from fragile local setups to secure,
              scalable cloud systems with connected apps, APIs, databases,
              storage, backups, monitoring, and reliable deployment workflows.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.28)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Start Cloud Project
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/service/automation-systems"
                className="inline-flex items-center gap-3 rounded-full border border-[#267A9E]/20 bg-white/70 px-7 py-4 text-sm font-semibold text-[#06111f] shadow-sm backdrop-blur transition hover:border-[#267A9E] hover:text-[#267A9E]"
              >
                View Automation
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { value: "99.9%", label: "Uptime focus" },
                { value: "Secure", label: "Cloud access" },
                { value: "Scalable", label: "Infrastructure" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-bold text-[#267A9E]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <CloudHeroVisual />
        </div>
      </section>

      {/* CLOUD SERVICES */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Cloud Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Cloud infrastructure designed for modern digital products.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We create cloud environments that are reliable, secure,
              maintainable, and ready to support real users and business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cloudServices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-7 shadow-sm transition hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
                >
                  <div className="absolute right-[-60px] top-[-60px] h-36 w-36 rounded-full bg-[#7ed3ff]/20 blur-2xl transition group-hover:bg-[#267A9E]/15" />

                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#267A9E]/10 text-[#267A9E] transition group-hover:bg-[#267A9E] group-hover:text-white">
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

      {/* ARCHITECTURE */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[#267A9E]/25 blur-3xl" />
          <div className="absolute right-[-180px] bottom-0 h-[460px] w-[460px] rounded-full bg-[#7ed3ff]/12 blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Cloud Architecture
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              A clean cloud structure from users to backend to data.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Every reliable cloud setup needs a clear structure. We define how
              users access the system, how requests move through APIs, where
              data is stored, and how everything is secured and monitored.
            </p>
          </div>

          <div className="grid gap-4">
            {architectureLayers.map((item, index) => {
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

                  {index !== architectureLayers.length - 1 && (
                    <div className="ml-6 h-5 w-px bg-[#7ed3ff]/30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-[#eef6ff] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Cloud Use Cases
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Cloud integration for websites, apps, data, and operations.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether you are launching a new product or improving an existing
              system, we can connect the right cloud services for speed,
              reliability, storage, and automation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cloudUseCases.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#267A9E]/30 hover:shadow-xl"
              >
                <CheckCircle
                  size={20}
                  className="shrink-0 text-[#267A9E] transition group-hover:scale-110"
                />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Cloud Platforms
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              We choose the right cloud stack for the project.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The best platform depends on your application type, data volume,
              budget, traffic, security needs, and long-term growth plan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {platforms.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] bg-[#f8fbff] p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
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

      {/* MIGRATION FLOW */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="rounded-[2rem] bg-[#06111f] p-6 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Migration Flow</p>
                  <h3 className="mt-1 text-2xl font-bold">
                    Local to Cloud
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7ed3ff]/15 text-[#7ed3ff]">
                  <Upload size={24} />
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: Monitor,
                    title: "Current System",
                    text: "Existing website, app, database, files, or manual workflow.",
                  },
                  {
                    icon: GitBranch,
                    title: "Migration Plan",
                    text: "Architecture, dependencies, backups, DNS, SSL, and deployment strategy.",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Environment",
                    text: "Server, database, storage, API, monitoring, and secure access.",
                  },
                  {
                    icon: Activity,
                    title: "Live Monitoring",
                    text: "Uptime checks, logs, alerts, backups, performance, and support.",
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Migration & Deployment
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Move your system to the cloud without breaking operations.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We plan deployments carefully so your systems remain stable. This
              includes environment setup, data backup, secure migration,
              testing, domain configuration, SSL, and post-launch monitoring.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => {
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

      {/* PROCESS */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              From cloud planning to stable production deployment.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#267A9E] text-sm font-bold text-white">
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

      {/* SECURITY & MONITORING */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Security & Monitoring
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Your cloud system should be secure, visible, and maintainable.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              We do not just deploy and leave. We configure security,
              monitoring, backups, error tracking, logs, alerts, and performance
              checks so the system can be maintained properly.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "SSL & Access Security" },
              { icon: LockKeyhole, title: "Secrets Management" },
              { icon: Bell, title: "Alerts & Notifications" },
              { icon: Download, title: "Backup Strategy" },
              { icon: Terminal, title: "Server Logs" },
              { icon: Gauge, title: "Performance Tracking" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur"
                >
                  <Icon size={28} className="text-[#7ed3ff]" />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eef6ff] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-[#06111f] text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-2 text-sm text-[#d7f4ff]">
                <Rocket size={16} className="text-[#7ed3ff]" />
                Ready to move into the cloud?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Let’s build a cloud setup that is secure, fast, and ready to grow.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Whether you need cloud hosting, backend deployment, database
                setup, storage, monitoring, domain configuration, or complete
                cloud migration, we can help.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Start Cloud Integration
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative min-h-[340px] bg-[#07182d] p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,211,255,0.2),transparent_36%)]" />

              <div className="relative z-10 space-y-5">
                {[
                  "Cloud architecture planning",
                  "Backend and database deployment",
                  "Security and SSL configuration",
                  "Monitoring, backups, and support",
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

function CloudHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-[#7ed3ff]/35 blur-3xl" />
      <div className="absolute bottom-8 right-10 h-52 w-52 rounded-full bg-[#267A9E]/25 blur-3xl" />

      <div className="relative rounded-[2.6rem] border border-white/80 bg-white/70 p-4 shadow-[0_30px_100px_rgba(38,122,158,0.22)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[2rem] bg-[#06111f] text-white">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-1 text-xs font-medium text-[#d7f4ff]">
              Cloud Console
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[210px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7ed3ff]/10 text-[#7ed3ff]">
                  <Cloud size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Cloud Hub
                  </p>
                  <p className="text-xs text-white/45">Production ready</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Server, label: "Servers" },
                  { icon: Database, label: "Database" },
                  { icon: ShieldCheck, label: "Security" },
                  { icon: Activity, label: "Monitor" },
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
                  { label: "Latency", value: "42ms" },
                  { label: "Regions", value: "3" },
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
                      Infrastructure Map
                    </p>
                    <p className="text-xs text-white/45">
                      Connected cloud services
                    </p>
                  </div>

                  <Network size={22} className="text-[#7ed3ff]" />
                </div>

                <div className="relative min-h-[240px]">
                  <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-[#7ed3ff]/25 bg-[#7ed3ff]/10 text-[#7ed3ff]">
                    <Cloud size={34} />
                  </div>

                  {[
                    {
                      icon: Server,
                      label: "API",
                      className: "left-0 top-4",
                    },
                    {
                      icon: Database,
                      label: "DB",
                      className: "right-0 top-4",
                    },
                    {
                      icon: Boxes,
                      label: "Storage",
                      className: "left-4 bottom-4",
                    },
                    {
                      icon: Cpu,
                      label: "Worker",
                      className: "right-4 bottom-4",
                    },
                  ].map((node) => {
                    const Icon = node.icon;

                    return (
                      <div
                        key={node.label}
                        className={`absolute ${node.className} flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/80`}
                      >
                        <Icon size={22} className="text-[#7ed3ff]" />
                        <span className="mt-2 text-xs">{node.label}</span>
                      </div>
                    );
                  })}

                  <div className="absolute left-[22%] top-[32%] h-px w-[28%] rotate-[20deg] bg-[#7ed3ff]/20" />
                  <div className="absolute right-[22%] top-[32%] h-px w-[28%] -rotate-[20deg] bg-[#7ed3ff]/20" />
                  <div className="absolute bottom-[32%] left-[24%] h-px w-[26%] -rotate-[24deg] bg-[#7ed3ff]/20" />
                  <div className="absolute bottom-[32%] right-[24%] h-px w-[26%] rotate-[24deg] bg-[#7ed3ff]/20" />
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-3 flex items-center justify-between text-xs text-white/50">
                  <span>Deployment health</span>
                  <span>97%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[97%] rounded-full bg-[#7ed3ff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -right-5 top-16 hidden rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm font-medium text-[#267A9E] shadow-sm backdrop-blur lg:block">
        Secure Deployment
      </div>

      <div className="absolute -left-5 bottom-20 hidden rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm font-medium text-[#06111f] shadow-sm backdrop-blur lg:block">
        99.9% Uptime Focus
      </div>
    </div>
  );
}

export default CloudIntegrationPage;