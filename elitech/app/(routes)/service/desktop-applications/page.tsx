import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Laptop,
  Server,
  Database,
  ShieldCheck,
  RefreshCcw,
  Bell,
  LockKeyhole,
  FileText,
  Printer,
  BarChart3,
  WifiOff,
  Cloud,
  Settings,
  Layers3,
  Code2,
  CheckCircle,
  Cpu,
  HardDrive,
  Sparkles,
  Gauge,
  Boxes,
  Users,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Cross-Platform Desktop Apps",
    text: "Build applications for Windows, macOS, and Linux with a consistent professional experience.",
  },
  {
    icon: Database,
    title: "Local Database Support",
    text: "Store data locally for speed, reliability, and offline-first workflows.",
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    text: "Allow users to keep working even when internet connectivity is unstable.",
  },
  {
    icon: RefreshCcw,
    title: "Cloud Sync",
    text: "Sync local activity with cloud databases, APIs, dashboards, and admin systems.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access Control",
    text: "Role-based permissions, login security, encrypted workflows, and protected data handling.",
  },
  {
    icon: Printer,
    title: "Reports & Printing",
    text: "Generate invoices, receipts, reports, PDFs, exports, and printable documents.",
  },
];

const modernFeatures = [
  "Offline-first data storage",
  "Automatic updates",
  "Cloud synchronization",
  "Role-based access control",
  "Local file management",
  "Barcode / QR support",
  "Receipt and invoice printing",
  "Analytics dashboards",
  "Data import and export",
  "API integrations",
  "Admin and staff accounts",
  "Audit logs and activity history",
];

const useCases = [
  {
    title: "Business Management Systems",
    text: "Desktop systems for inventory, sales, billing, staff, customers, reports, and daily operations.",
  },
  {
    title: "School Administration Tools",
    text: "Apps for student records, attendance, fees, reports, exams, and administrative workflows.",
  },
  {
    title: "Hospital & Clinic Systems",
    text: "Desktop tools for patients, appointments, billing, pharmacy, lab records, and internal operations.",
  },
  {
    title: "Warehouse & Inventory Apps",
    text: "Track stock, suppliers, purchase orders, sales, barcode scans, and warehouse movement.",
  },
];

const process = [
  {
    title: "Understand Workflow",
    text: "We study your business process, users, daily tasks, and pain points.",
  },
  {
    title: "Design the System",
    text: "We plan screens, database structure, user roles, reports, and application flow.",
  },
  {
    title: "Build & Integrate",
    text: "We develop the desktop app, backend, database, printing, and integrations.",
  },
  {
    title: "Deploy & Support",
    text: "We install, test, train users, and provide support for long-term use.",
  },
];

const stackItems = [
  {
    icon: Code2,
    title: "Modern Frameworks",
    text: "Electron, Tauri, .NET, Java, or custom stacks depending on the project needs.",
  },
  {
    icon: Database,
    title: "Database Layer",
    text: "SQLite, MySQL, PostgreSQL, MongoDB, or cloud database integration.",
  },
  {
    icon: Cloud,
    title: "Cloud Backend",
    text: "API services, authentication, admin dashboards, storage, and synchronization.",
  },
  {
    icon: LockKeyhole,
    title: "Security Layer",
    text: "User permissions, encrypted data handling, validation, and activity tracking.",
  },
];

function DesktopApplicationsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fc] font-['Poppins',sans-serif]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07182d] px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-160px] top-24 h-[420px] w-[420px] rounded-full bg-[#267A9E]/30 blur-3xl" />
          <div className="absolute right-[-180px] top-20 h-[460px] w-[460px] rounded-full bg-[#7ed3ff]/15 blur-3xl" />
          <div className="absolute bottom-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#0f5f88]/30 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,24,45,0.96),rgba(7,24,45,0.82),rgba(3,70,99,0.42))]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur">
              
              Desktop Applications
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Powerful desktop software for real business operations.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              We build secure, fast, offline-ready desktop applications for
              businesses, schools, hospitals, warehouses, offices, and
              institutions that need reliable software beyond the browser.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.35)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Build Desktop App
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#7ed3ff] hover:text-[#7ed3ff]"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Desktop mockup */}
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -left-8 top-16 h-40 w-40 rounded-full bg-[#7ed3ff]/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-52 w-52 rounded-full bg-[#267A9E]/30 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#edf4fb] text-[#07182d]">
                <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-7 flex-1 rounded-full bg-slate-100" />
                </div>

                <div className="grid min-h-[390px] grid-cols-[80px_1fr]">
                  <aside className="bg-[#07182d] p-4">
                    <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7ed3ff]/15 text-[#7ed3ff]">
                      <Monitor size={22} />
                    </div>

                    <div className="space-y-4">
                      {[Monitor, BarChart3, Database, Settings, Users].map(
                        (Icon, index) => (
                          <div
                            key={index}
                            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                              index === 0
                                ? "bg-[#267A9E] text-white"
                                : "bg-white/8 text-white/55"
                            }`}
                          >
                            <Icon size={18} />
                          </div>
                        )
                      )}
                    </div>
                  </aside>

                  <div className="p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Desktop System</p>
                        <h3 className="text-2xl font-bold">Operations Hub</h3>
                      </div>

                      <div className="rounded-full bg-[#267A9E]/10 px-4 py-2 text-sm font-semibold text-[#267A9E]">
                        Online Sync
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {[
                        { label: "Sales", value: "₵42.8k" },
                        { label: "Inventory", value: "1,248" },
                        { label: "Reports", value: "86" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl bg-white p-4 shadow-sm"
                        >
                          <p className="text-xs text-slate-500">{item.label}</p>
                          <p className="mt-2 text-2xl font-bold">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-3xl bg-white p-5 shadow-sm">
                      <div className="mb-5 flex items-center justify-between">
                        <h4 className="font-semibold">System Activity</h4>
                        <span className="text-xs text-slate-400">Today</span>
                      </div>

                      <div className="space-y-4">
                        {[
                          { name: "Database backup completed", tag: "Secure" },
                          { name: "Inventory synced to cloud", tag: "Sync" },
                          { name: "Invoice printed successfully", tag: "Print" },
                        ].map((row) => (
                          <div
                            key={row.name}
                            className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
                          >
                            <div className="flex items-center gap-3">
                              <CheckCircle
                                size={18}
                                className="text-[#267A9E]"
                              />
                              <span className="text-sm font-medium">
                                {row.name}
                              </span>
                            </div>

                            <span className="rounded-full bg-[#267A9E]/10 px-3 py-1 text-xs font-semibold text-[#267A9E]">
                              {row.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* base stand */}
            <div className="mx-auto h-8 w-40 bg-white/15" />
            <div className="mx-auto h-4 w-64 rounded-full bg-white/10" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Modern Features
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#07182d] sm:text-5xl">
              Desktop apps built for speed, control, and reliability.
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

      {/* MODERN FEATURE LIST */}
      <section className="relative overflow-hidden bg-[#07182d] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Advanced Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
              Everything your internal desktop system needs.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70">
              We build desktop software with the practical features businesses
              need every day: offline access, local databases, printing,
              reporting, user roles, syncing, backups, and integrations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {modernFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-[#7ed3ff]/40 hover:bg-white/10"
              >
                <CheckCircle size={20} className="shrink-0 text-[#7ed3ff]" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Where It Works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#07182d] sm:text-5xl">
              Built for teams that need dependable software.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute right-6 top-6 text-7xl font-bold text-[#07182d]/5">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07182d] text-white">
                    <Boxes size={24} />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#07182d]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2.5rem] bg-[#f6f8fb] p-6 shadow-inner">
            <div className="grid gap-4 sm:grid-cols-2">
              {stackItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.7rem] bg-white p-6 shadow-sm"
                  >
                    <Icon size={28} className="text-[#267A9E]" />
                    <h3 className="mt-5 font-semibold text-[#07182d]">
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

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#07182d] sm:text-5xl">
              Developed with a strong system architecture.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A good desktop application is not just about screens. It needs a
              well-planned database, secure user roles, clean modules, stable
              performance, smooth syncing, and a structure that can grow with
              the business.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Cpu, label: "Fast" },
                { icon: HardDrive, label: "Offline" },
                { icon: Gauge, label: "Reliable" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <Icon size={24} className="text-[#267A9E]" />
                    <p className="mt-3 font-semibold text-[#07182d]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
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
              From workflow study to installed desktop software.
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

      {/* CTA BAND */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-[#07182d] to-[#0d2a4a] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <Rocket size={16} className="text-[#7ed3ff]" />
                Ready to modernize your operations?
              </div>

              <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
                Let’s build a desktop application your team can rely on daily.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                Whether you need a full business management system, a reporting
                app, a staff tool, or an offline-first internal application, we
                can design and build it professionally.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4">
                {[
                  "Custom desktop application",
                  "Database and reporting",
                  "Offline and cloud sync",
                  "Deployment and support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#7ed3ff]" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Start a Desktop Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DesktopApplicationsPage;