import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Bot,
  Cpu,
  Database,
  Cloud,
  ShieldCheck,
  Zap,
  BarChart3,
  Code2,
  Layers3,
  CheckCircle,
  Rocket,
  LockKeyhole,
  Eye,
  Gauge,
  FileText,
  Search,
  Settings2,
  Network,
  MessageSquareText,
  Sparkles,
  Workflow,
} from "lucide-react";

const aiCapabilities = [
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    text: "Build intelligent assistants for customer support, internal staff, websites, portals, and business workflows.",
  },
  {
    icon: Brain,
    title: "Machine Learning Models",
    text: "Train, integrate, and deploy models that classify, recommend, predict, summarize, or automate decisions.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    text: "Use your business data to forecast demand, identify trends, detect risks, and improve decision-making.",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    text: "Extract insights from PDFs, forms, reports, invoices, contracts, and business documents.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Automate repetitive tasks such as approvals, reporting, customer responses, and internal operations.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI Systems",
    text: "Design secure AI workflows with validation, human review, audit logs, and access control.",
  },
];

const aiUseCases = [
  "Customer support AI assistant",
  "Business data prediction",
  "AI-powered search",
  "Document summarization",
  "Fraud and anomaly detection",
  "Recommendation engines",
  "Smart admin dashboards",
  "Automated reporting",
  "Voice and text automation",
  "Internal knowledge assistant",
  "Image and document analysis",
  "AI workflow agents",
];

const process = [
  {
    step: "01",
    title: "AI Opportunity Mapping",
    text: "We study your business process and identify where AI can reduce time, cost, or manual work.",
  },
  {
    step: "02",
    title: "Data & System Review",
    text: "We assess your data, documents, APIs, workflows, and existing software environment.",
  },
  {
    step: "03",
    title: "Prototype & Validation",
    text: "We build a focused AI prototype so you can test the value before scaling the full system.",
  },
  {
    step: "04",
    title: "Integration & Deployment",
    text: "We integrate the AI into your website, app, dashboard, backend, or internal tools.",
  },
];

const techBlocks = [
  {
    icon: Brain,
    title: "LLM Integration",
    text: "ChatGPT-style assistants, prompt workflows, AI agents, and retrieval-based systems.",
  },
  {
    icon: Database,
    title: "Vector Search",
    text: "Knowledge-base search, semantic retrieval, document Q&A, and internal AI memory.",
  },
  {
    icon: Cloud,
    title: "Cloud AI APIs",
    text: "Connect AI services with cloud storage, databases, dashboards, and external platforms.",
  },
  {
    icon: Code2,
    title: "Custom AI Backend",
    text: "APIs, queues, model endpoints, authentication, monitoring, and admin control.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Reduce manual work",
  },
  {
    icon: Gauge,
    title: "Speed up decisions",
  },
  {
    icon: Search,
    title: "Find information faster",
  },
  {
    icon: LockKeyhole,
    title: "Protect sensitive data",
  },
];

function AiSolutionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] font-['Poppins',sans-serif] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-[-180px] top-32 h-[560px] w-[560px] rounded-full bg-blue-700/25 blur-3xl" />
          <div className="absolute bottom-[-260px] left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[#267A9E]/25 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,211,255,0.16),transparent_32%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,7,18,0.98),rgba(7,24,45,0.92),rgba(3,70,99,0.35))]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              <Sparkles size={16} className="text-cyan-300" />
              AI Solutions
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Intelligent systems that think, learn, and automate.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              We build AI-powered chatbots, automation systems, predictive
              dashboards, document intelligence tools, and custom AI workflows
              that help businesses work faster and make smarter decisions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.38)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Build an AI Solution
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Explore AI Projects
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { value: "10x", label: "Faster workflows" },
                { value: "24/7", label: "AI assistance" },
                { value: "Smart", label: "Automation" },
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

          <AiHeroVisual />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative bg-[#f8fafc] px-4 py-24 text-[#06111f] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              AI Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Practical AI features built for real businesses.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We focus on AI that solves business problems, improves operations,
              and integrates naturally into your existing digital systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#267A9E]/8 blur-2xl transition group-hover:bg-cyan-400/15" />

                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06111f] text-cyan-300 transition group-hover:bg-[#267A9E] group-hover:text-white">
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

      {/* USE CASES */}
      <section className="relative overflow-hidden bg-[#030712] px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-blue-700/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,7,18,0.96),rgba(6,17,31,0.96))]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              AI Use Cases
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              Turn your data, documents, and workflows into intelligent systems.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              AI is most useful when it becomes part of the way your business
              works. We help you connect AI to your data, platforms, staff
              workflows, and customer experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aiUseCases.map((useCase) => (
              <div
                key={useCase}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <CheckCircle
                  size={20}
                  className="shrink-0 text-cyan-300 transition group-hover:scale-110"
                />
                <span className="font-medium text-white/86">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI PIPELINE */}
      <section className="bg-white px-4 py-24 text-[#06111f] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-[#f8fafc] p-6 shadow-inner">
            <div className="rounded-[2rem] bg-[#06111f] p-6 text-white shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">AI Pipeline</p>
                  <h3 className="mt-1 text-2xl font-bold">
                    Data to Intelligence
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-300">
                  <Network size={24} />
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: Database,
                    title: "Data Layer",
                    text: "Documents, APIs, databases, and business records",
                  },
                  {
                    icon: Search,
                    title: "Retrieval Layer",
                    text: "Vector search, semantic matching, and context retrieval",
                  },
                  {
                    icon: Brain,
                    title: "AI Reasoning Layer",
                    text: "Model prompts, classification, summaries, and decisions",
                  },
                  {
                    icon: Settings2,
                    title: "Action Layer",
                    text: "Dashboards, alerts, reports, automations, and approvals",
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

                      {index !== 3 && (
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
              How We Build
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              AI that connects to your real systems, not just a demo.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We design AI solutions with a complete pipeline: data input,
              processing, model reasoning, validation, and business output. That
              means your AI can work inside websites, apps, dashboards, CRMs,
              portals, and internal tools.
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-[#f8fafc] px-4 py-24 text-[#06111f] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              AI Engineering Stack
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Built with scalable AI architecture.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techBlocks.map((item) => {
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
      <section className="bg-white px-4 py-24 text-[#06111f] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              From AI idea to production-ready solution.
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

      {/* RESPONSIBLE AI */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(126,211,255,0.16),transparent_34%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Responsible AI
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Smart automation with security, control, and human review.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              AI systems should be powerful, but also safe and controlled. We
              design AI workflows with guardrails, permissions, validation, and
              clear business rules.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "Guardrails" },
              { icon: Eye, title: "Human Review" },
              { icon: LockKeyhole, title: "Access Control" },
              { icon: BarChart3, title: "Monitoring" },
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
      <section className="bg-[#f8fafc] px-4 py-24 text-[#06111f] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-[#030712] text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <Rocket size={16} className="text-cyan-300" />
                Ready to add intelligence to your business?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Let’s build an AI solution that actually works for your team.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Whether you need an AI chatbot, automation system, predictive
                dashboard, document AI tool, or internal assistant, we can help
                you design and build it professionally.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Start AI Project
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative min-h-[340px] bg-[#07182d] p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,211,255,0.2),transparent_36%)]" />

              <div className="relative z-10 space-y-5">
                {[
                  "AI opportunity assessment",
                  "Prototype and validation",
                  "Secure AI integration",
                  "Deployment and improvement",
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

function AiHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-8 right-10 h-52 w-52 rounded-full bg-blue-600/25 blur-3xl" />

      <div className="relative rounded-[2.4rem] border border-white/15 bg-white/[0.08] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[1.8rem] bg-[#06111f]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-medium text-cyan-200">
              AI Engine Online
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Brain size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">Neural OS</p>
                  <p className="text-xs text-white/45">v2.8 intelligence</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Bot, label: "Assistant" },
                  { icon: Database, label: "Knowledge" },
                  { icon: Cpu, label: "Model" },
                  { icon: ShieldCheck, label: "Guardrails" },
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
                  { label: "Accuracy", value: "94%" },
                  { label: "Tasks", value: "1.8k" },
                  { label: "Latency", value: "0.8s" },
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
                      AI Conversation
                    </p>
                    <p className="text-xs text-white/45">
                      Business assistant preview
                    </p>
                  </div>

                  <MessageSquareText size={22} className="text-cyan-300" />
                </div>

                <div className="space-y-4">
                  <div className="max-w-[85%] rounded-2xl bg-white/[0.08] p-4 text-sm leading-6 text-white/70">
                    Analyze sales data and summarize the biggest growth
                    opportunity.
                  </div>

                  <div className="ml-auto max-w-[88%] rounded-2xl bg-[#267A9E] p-4 text-sm leading-6 text-white">
                    The strongest opportunity is repeat customers. Revenue can
                    improve by targeting users who purchased within the last 30
                    days.
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-3 flex items-center justify-between text-xs text-white/50">
                  <span>Model confidence</span>
                  <span>91%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[91%] rounded-full bg-cyan-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating nodes */}
      <div className="absolute -right-5 top-16 hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100 backdrop-blur lg:block">
        Smart Automation
      </div>

      <div className="absolute -left-5 bottom-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur lg:block">
        Predictive Insights
      </div>
    </div>
  );
}

export default AiSolutionsPage;