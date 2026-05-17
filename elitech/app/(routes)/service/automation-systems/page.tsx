import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  Bot,
  Cpu,
  Zap,
  Settings2,
  Clock,
  Repeat,
  ShieldCheck,
  Cloud,
  Database,
  Bell,
  CheckCircle,
  Sparkles,
  Rocket,
  Gauge,
  Cable,
  Network,
  Server,
  FileText,
  Users,
  LockKeyhole,
  Activity,
  CalendarCheck,
  Mail,
  BarChart3,
  Layers3,
  ClipboardCheck,
} from "lucide-react";

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Automate approvals, notifications, reports, task assignments, follow-ups, and internal business processes.",
  },
  {
    icon: Bot,
    title: "Smart Business Bots",
    text: "Build bots that respond to customers, support staff, route requests, and trigger actions automatically.",
  },
  {
    icon: Cable,
    title: "System Integrations",
    text: "Connect your website, mobile app, CRM, database, email, SMS, payment, and third-party services.",
  },
  {
    icon: Bell,
    title: "Automated Alerts",
    text: "Send real-time alerts through email, SMS, push notification, WhatsApp, or dashboard notifications.",
  },
  {
    icon: Database,
    title: "Data Processing",
    text: "Clean, validate, move, sync, transform, and organize business data between multiple systems.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Automation",
    text: "Add user permissions, logs, validation rules, error handling, and human approval where needed.",
  },
];

const automationTypes = [
  "Customer onboarding automation",
  "Invoice and payment reminders",
  "Email and SMS automation",
  "Report generation automation",
  "Lead capture and CRM sync",
  "Staff task assignment",
  "Approval workflow automation",
  "Document processing automation",
  "Booking and appointment reminders",
  "Inventory and stock alerts",
  "Data backup and synchronization",
  "Admin dashboard automation",
];

const process = [
  {
    step: "01",
    title: "Process Mapping",
    text: "We study your current workflow and identify repetitive tasks that can be automated.",
  },
  {
    step: "02",
    title: "Automation Design",
    text: "We define triggers, actions, rules, approvals, integrations, and fallback handling.",
  },
  {
    step: "03",
    title: "System Development",
    text: "We build the automation logic, connect APIs, configure dashboards, and secure the workflow.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    text: "We test edge cases, errors, notifications, permissions, and deploy the automation safely.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save time",
    text: "Reduce hours spent on repetitive manual tasks.",
  },
  {
    icon: Gauge,
    title: "Improve speed",
    text: "Move tasks, approvals, alerts, and reports faster.",
  },
  {
    icon: Users,
    title: "Support teams",
    text: "Help staff focus on important work, not routine processes.",
  },
  {
    icon: LockKeyhole,
    title: "Reduce errors",
    text: "Use rules and validation to make operations more accurate.",
  },
];

const integrationStack = [
  {
    icon: Mail,
    title: "Email & SMS",
    text: "Automated messages, reminders, alerts, and customer communication.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    text: "Sync data with cloud platforms, storage, dashboards, and APIs.",
  },
  {
    icon: Database,
    title: "Databases",
    text: "Move and process data across PostgreSQL, MySQL, MongoDB, Firebase, and more.",
  },
  {
    icon: CalendarCheck,
    title: "Scheduling",
    text: "Automated appointments, reminders, due dates, recurring jobs, and timed tasks.",
  },
];

function AutomationSystemsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] font-['Poppins',sans-serif] text-[#06111f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-[#267A9E]/25 blur-3xl" />
          <div className="absolute right-[-180px] top-16 h-[560px] w-[560px] rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute bottom-[-260px] left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-blue-700/18 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,17,31,0.98),rgba(7,24,45,0.94),rgba(38,122,158,0.28))]" />
        </div>

        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              <Sparkles size={16} className="text-cyan-300" />
              Automation Systems
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Automate repetitive work and run your business smarter.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              We build automation systems that connect your tools, reduce manual
              work, trigger smart actions, send alerts, process data, and help
              your team operate faster with fewer errors.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.38)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Automate My Business
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/service/ai-solutions"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Explore AI Solutions
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { value: "70%", label: "Less manual work" },
                { value: "24/7", label: "Automated workflows" },
                { value: "Fast", label: "Task execution" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                >
                  <p className="text-2xl font-bold text-cyan-200">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-white/55">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <AutomationVisual />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Automation Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Systems that work in the background while your team moves forward.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We build automation that is practical, secure, measurable, and
              connected to the tools your business already uses.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06111f] text-cyan-300 transition group-hover:bg-[#267A9E] group-hover:text-white">
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

      {/* AUTOMATION TYPES */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[#267A9E]/20 blur-3xl" />
          <div className="absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              What Can Be Automated
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              If your team repeats it often, we can probably automate it.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Automation is useful when it removes delays, reduces human error,
              connects systems, and helps staff focus on higher-value work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {automationTypes.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <CheckCircle
                  size={20}
                  className="shrink-0 text-cyan-300 transition group-hover:scale-110"
                />
                <span className="font-medium text-white/86">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION FLOW */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-[#f8fafc] p-6 shadow-inner">
            <div className="rounded-[2rem] bg-[#06111f] p-6 text-white shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Automation Flow</p>
                  <h3 className="mt-1 text-2xl font-bold">
                    Trigger to Action
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-300">
                  <Workflow size={24} />
                </div>
              </div>

              <div className="space-y-0">
                {[
                  {
                    icon: Zap,
                    title: "Trigger",
                    text: "A form submission, payment, message, schedule, or system event starts the workflow.",
                  },
                  {
                    icon: Settings2,
                    title: "Rules Engine",
                    text: "The system checks conditions, validates data, and decides what should happen next.",
                  },
                  {
                    icon: Cable,
                    title: "Integration",
                    text: "The workflow connects to email, SMS, database, CRM, dashboard, or external API.",
                  },
                  {
                    icon: Bell,
                    title: "Notification",
                    text: "The right users receive alerts, updates, approvals, or follow-up tasks.",
                  },
                  {
                    icon: BarChart3,
                    title: "Tracking",
                    text: "Every automation run can be logged, measured, reviewed, and improved.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title}>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
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

                      {index !== 4 && (
                        <div className="ml-10 h-5 w-px bg-cyan-300/30" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              How Automation Works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Every automation needs clear triggers, rules, actions, and logs.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We design automation systems carefully so they do not just run
              blindly. They check conditions, handle errors, notify the right
              people, and keep a record of what happened.
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

      {/* INTEGRATIONS */}
      <section className="bg-[#f8fafc] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Integration Ready
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Connect the tools your business already depends on.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A good automation system should connect with your current
              software ecosystem instead of creating more manual work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {integrationStack.map((item) => {
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
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              From manual workflow to automated operation.
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

      {/* MONITORING */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Monitoring & Control
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Automation should be visible, measurable, and controllable.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              We can add dashboards that show automation runs, failed actions,
              pending approvals, activity logs, delivery status, and performance
              reports.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: Activity, title: "Activity Logs" },
              { icon: ClipboardCheck, title: "Approval Tracking" },
              { icon: BarChart3, title: "Performance Reports" },
              { icon: ShieldCheck, title: "Error Handling" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur"
                >
                  <Icon size={28} className="text-cyan-300" />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
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
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <Rocket size={16} className="text-cyan-300" />
                Ready to automate your workflow?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Let’s build an automation system that saves time every day.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Whether you need alerts, approvals, reporting, integrations,
                data processing, or AI-powered automation, we can design and
                build the right system for your business.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Start Automation Project
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative min-h-[340px] bg-[#07182d] p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,211,255,0.2),transparent_36%)]" />

              <div className="relative z-10 space-y-5">
                {[
                  "Workflow analysis",
                  "Trigger and rule design",
                  "API and tool integration",
                  "Monitoring and support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                  >
                    <CheckCircle size={20} className="text-cyan-300" />
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

function AutomationVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-10 right-8 h-52 w-52 rounded-full bg-blue-600/25 blur-3xl" />

      <div className="relative rounded-[2.4rem] border border-white/15 bg-white/[0.08] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[1.8rem] bg-[#06111f]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-medium text-cyan-200">
              Automation Running
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[210px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Workflow size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Flow Engine
                  </p>
                  <p className="text-xs text-white/45">Live operations</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Zap, label: "Triggers" },
                  { icon: Settings2, label: "Rules" },
                  { icon: Cable, label: "APIs" },
                  { icon: Bell, label: "Alerts" },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${
                        index === 0
                          ? "bg-cyan-300/10 text-cyan-200"
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
                  { label: "Tasks", value: "2.4k" },
                  { label: "Saved", value: "82h" },
                  { label: "Errors", value: "0.3%" },
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
                      Active Workflow
                    </p>
                    <p className="text-xs text-white/45">
                      Customer onboarding automation
                    </p>
                  </div>

                  <Repeat size={22} className="text-cyan-300" />
                </div>

                <div className="space-y-4">
                  {[
                    { title: "New form submitted", status: "Trigger" },
                    { title: "CRM profile created", status: "Action" },
                    { title: "Welcome email sent", status: "Notify" },
                    { title: "Admin task assigned", status: "Done" },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            index === 3
                              ? "bg-cyan-300 text-[#06111f]"
                              : "bg-cyan-300/10 text-cyan-300"
                          }`}
                        >
                          <CheckCircle size={16} />
                        </div>
                        <span className="text-sm text-white/75">
                          {item.title}
                        </span>
                      </div>

                      <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-3 flex items-center justify-between text-xs text-white/50">
                  <span>Workflow efficiency</span>
                  <span>93%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[93%] rounded-full bg-cyan-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -right-5 top-16 hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100 backdrop-blur lg:block">
        2,400 Tasks Automated
      </div>

      <div className="absolute -left-5 bottom-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur lg:block">
        Workflow Efficiency 93%
      </div>
    </div>
  );
}

export default AutomationSystemsPage;