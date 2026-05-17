import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Palette,
  PenTool,
  LayoutTemplate,
  Smartphone,
  Monitor,
  MousePointer,
  Eye,
  Layers3,
  Component,
  Wand2,
  CheckCircle,
  Star,
  Users,
  Brush,
  Boxes,
  Workflow,
  Gauge,
  ShieldCheck,
  Rocket,
  MessageSquare,
  Search,
  FileText,
  LayoutDashboard,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand-Aligned Interface Design",
    text: "Beautiful interfaces that match your brand identity, tone, audience, and business goals.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Page Design",
    text: "High-converting landing pages with modern sections, strong hierarchy, and smooth user flow.",
  },
  {
    icon: Smartphone,
    title: "Mobile App UI/UX",
    text: "Premium mobile screens for iOS and Android with clean navigation and polished interactions.",
  },
  {
    icon: Monitor,
    title: "Web App & Dashboard Design",
    text: "Admin dashboards, SaaS portals, analytics pages, and business systems with clear layouts.",
  },
  {
    icon: Component,
    title: "Design Systems",
    text: "Reusable components, typography, colors, spacing, buttons, forms, cards, and UI rules.",
  },
  {
    icon: MousePointer,
    title: "Interactive Prototypes",
    text: "Clickable prototypes that help you test the product flow before development begins.",
  },
];

const deliverables = [
  "User research and experience strategy",
  "Wireframes and user journey maps",
  "High-fidelity UI screens",
  "Clickable prototypes",
  "Responsive web layouts",
  "Mobile app screens",
  "Dashboard and admin interfaces",
  "Component libraries",
  "Design system documentation",
  "Developer handoff files",
  "Usability improvements",
  "Conversion-focused landing pages",
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We understand the product, users, brand, business goal, competitors, and expected experience.",
  },
  {
    step: "02",
    title: "Structure",
    text: "We define the user flow, content hierarchy, wireframes, and layout direction.",
  },
  {
    step: "03",
    title: "Design",
    text: "We create polished UI screens with colors, typography, components, and visual rhythm.",
  },
  {
    step: "04",
    title: "Prototype",
    text: "We connect screens into clickable prototypes so the flow can be reviewed and tested.",
  },
  {
    step: "05",
    title: "Handoff",
    text: "We prepare design assets, specs, components, and guidance for smooth development.",
  },
];

const designFocus = [
  {
    icon: Eye,
    title: "Visual clarity",
    text: "Users should quickly understand what matters on every screen.",
  },
  {
    icon: Users,
    title: "User-first flow",
    text: "Each interaction should feel natural, direct, and easy to complete.",
  },
  {
    icon: Gauge,
    title: "Conversion focus",
    text: "Landing pages and product flows are designed to guide users toward action.",
  },
  {
    icon: ShieldCheck,
    title: "Consistency",
    text: "Components, spacing, typography, and colors stay consistent across the product.",
  },
];

const designSystemItems = [
  "Typography scale",
  "Color palette",
  "Buttons",
  "Input fields",
  "Cards",
  "Navigation",
  "Modals",
  "Tables",
  "Charts",
  "Icons",
  "Spacing rules",
  "Responsive grids",
];

function UiUxDesignPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ff] font-['Poppins',sans-serif] text-[#111827]">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute left-[-160px] top-16 h-[520px] w-[520px] rounded-full bg-[#ff6bd6]/20 blur-3xl" />
          <div className="absolute right-[-180px] top-20 h-[560px] w-[560px] rounded-full bg-[#7ed3ff]/35 blur-3xl" />
          <div className="absolute bottom-[-260px] left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[#8b5cf6]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(251,247,255,0.98),rgba(239,250,255,0.94),rgba(255,255,255,0.76))]" />
        </div>

        <div className="absolute inset-0 opacity-[0.28]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(38,122,158,0.28)_1px,transparent_1px)] bg-[size:34px_34px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#267A9E]/15 bg-white/75 px-4 py-2 text-sm font-medium text-[#267A9E] shadow-sm backdrop-blur">
              <Sparkles size={16} />
              UI/UX Design
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.055em] text-[#06111f] sm:text-5xl lg:text-7xl">
              Digital experiences that look beautiful and feel effortless.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We design modern websites, mobile apps, dashboards, SaaS
              platforms, and business systems with clean user flows, premium
              visuals, and interfaces that users actually enjoy using.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.28)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Start a Design Project
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-[#267A9E]/20 bg-white/75 px-7 py-4 text-sm font-semibold text-[#06111f] shadow-sm backdrop-blur transition hover:border-[#267A9E] hover:text-[#267A9E]"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { value: "UX", label: "Research-led flow" },
                { value: "UI", label: "Premium visuals" },
                { value: "DX", label: "Clean handoff" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-bold text-[#267A9E]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <DesignHeroVisual />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Design Services
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Design support for every stage of your product.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              From idea validation to polished screens and developer handoff, we
              help turn product concepts into professional digital experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fbfdff] p-7 shadow-sm transition hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
                >
                  <div className="absolute right-[-60px] top-[-60px] h-36 w-36 rounded-full bg-[#ff6bd6]/10 blur-2xl transition group-hover:bg-[#7ed3ff]/20" />

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

      {/* DESIGN PHILOSOPHY */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[#7ed3ff]/18 blur-3xl" />
          <div className="absolute right-[-180px] bottom-0 h-[460px] w-[460px] rounded-full bg-[#ff6bd6]/12 blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Our Design Thinking
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              A good interface is not just pretty. It must guide users clearly.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              We combine visual design, usability, content hierarchy,
              accessibility, and product strategy to create interfaces that
              feel modern, useful, and easy to understand.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {designFocus.map((item) => {
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

      {/* SHOWCASE */}
      <section className="bg-[#fbf7ff] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ShowcaseBoard />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Visual Direction
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Interfaces with depth, hierarchy, and a premium product feel.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We design pages and screens with clear typography, intentional
              spacing, strong contrast, soft shadows, beautiful cards, and
              responsive structure so the final product feels polished and
              professional.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Brush, title: "Modern visual style" },
                { icon: Workflow, title: "Clean user journeys" },
                { icon: Zap, title: "Conversion sections" },
                { icon: LayoutDashboard, title: "Dashboard-ready layouts" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur"
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

      {/* DELIVERABLES */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              What You Get
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Design deliverables that make development easier.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We prepare design assets properly so developers can understand
              layouts, components, spacing, responsive behavior, and interaction
              states clearly.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#fbfdff] p-5 transition hover:-translate-y-1 hover:border-[#267A9E]/30 hover:bg-white hover:shadow-xl"
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

      {/* DESIGN SYSTEM */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
            <div className="rounded-[2rem] bg-white p-6 text-[#06111f]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Design System</p>
                  <h3 className="mt-1 text-2xl font-bold">
                    Component Library
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#267A9E]/10 text-[#267A9E]">
                  <Component size={24} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {designSystemItems.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl border p-4 ${
                      index % 3 === 0
                        ? "border-[#267A9E]/20 bg-[#267A9E]/10"
                        : index % 3 === 1
                        ? "border-[#ff6bd6]/20 bg-[#ff6bd6]/10"
                        : "border-[#8b5cf6]/20 bg-[#8b5cf6]/10"
                    }`}
                  >
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Consistent UI
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Design systems keep your product clean as it grows.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Instead of designing random screens, we create reusable rules and
              components that help your product stay consistent across pages,
              features, dashboards, and future updates.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Design Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              From rough idea to polished product experience.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
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

      {/* TOOLS */}
      <section className="bg-[#fbf7ff] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Tools & Handoff
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Designs prepared for real development teams.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We design with implementation in mind. Components, spacing,
              typography, responsive states, and interaction details are
              organized so developers can build faster and more accurately.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: FileText,
                title: "Figma Design Files",
                text: "Organized frames, components, variants, and prototypes.",
              },
              {
                icon: FileText,
                title: "Handoff Notes",
                text: "Clear implementation guidance for developers.",
              },
              {
                icon: Boxes,
                title: "Component Structure",
                text: "Reusable UI patterns for scalable development.",
              },
              {
                icon: Search,
                title: "UX Review",
                text: "Flow checks, clarity improvements, and usability review.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/80 bg-white/80 p-7 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:shadow-xl"
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
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-[#06111f] text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-2 text-sm text-[#d7f4ff]">
                <Rocket size={16} className="text-[#7ed3ff]" />
                Ready for a better product experience?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Let’s design a digital product your users will love.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Whether you need a landing page, mobile app, dashboard, web
                platform, redesign, or full product design system, we can help
                you create something modern and effective.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Start UI/UX Project
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative min-h-[340px] bg-[#07182d] p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,211,255,0.2),transparent_36%)]" />

              <div className="relative z-10 space-y-5">
                {[
                  "UX research and wireframes",
                  "High-fidelity UI screens",
                  "Clickable prototypes",
                  "Design system and developer handoff",
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

function DesignHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-[#ff6bd6]/25 blur-3xl" />
      <div className="absolute bottom-10 right-8 h-52 w-52 rounded-full bg-[#7ed3ff]/35 blur-3xl" />

      <div className="relative rotate-[-2deg] rounded-[2.7rem] border border-white/80 bg-white/75 p-4 shadow-[0_30px_100px_rgba(38,122,158,0.22)] backdrop-blur-xl transition hover:rotate-0">
        <div className="overflow-hidden rounded-[2.1rem] bg-[#06111f] text-white">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-1 text-xs font-medium text-[#d7f4ff]">
              UI Studio
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[180px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7ed3ff]/10 text-[#7ed3ff]">
                  <Palette size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">DesignKit</p>
                  <p className="text-xs text-white/45">Product UI</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: PenTool, label: "Design" },
                  { icon: Component, label: "Components" },
                  { icon: Eye, label: "Preview" },
                  { icon: Wand2, label: "Polish" },
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
                  { label: "Screens", value: "48" },
                  { label: "Components", value: "120" },
                  { label: "Flow", value: "UX" },
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
                      Landing Page Concept
                    </p>
                    <p className="text-xs text-white/45">
                      Premium hero layout
                    </p>
                  </div>

                  <Brush size={22} className="text-[#7ed3ff]" />
                </div>

                <div className="rounded-[1.5rem] bg-white p-4 text-[#06111f]">
                  <div className="mb-4 h-8 w-32 rounded-full bg-[#06111f]" />
                  <div className="h-5 w-[88%] rounded-full bg-slate-200" />
                  <div className="mt-3 h-5 w-[70%] rounded-full bg-slate-100" />

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="h-24 rounded-2xl bg-[#267A9E]" />
                    <div className="h-24 rounded-2xl bg-[#7ed3ff]" />
                    <div className="h-24 rounded-2xl bg-[#ff6bd6]" />
                  </div>

                  <div className="mt-6 flex gap-3">
                    <div className="h-10 w-32 rounded-full bg-[#267A9E]" />
                    <div className="h-10 w-24 rounded-full border border-slate-200" />
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-3 flex items-center justify-between text-xs text-white/50">
                  <span>Design polish</span>
                  <span>96%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[96%] rounded-full bg-[#7ed3ff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -right-5 top-16 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium text-[#267A9E] shadow-sm backdrop-blur lg:block">
        Premium UI Direction
      </div>

      <div className="absolute -left-5 bottom-20 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium text-[#06111f] shadow-sm backdrop-blur lg:block">
        120 Components
      </div>
    </div>
  );
}

function ShowcaseBoard() {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-[#ff6bd6]/20 blur-3xl" />
      <div className="absolute -right-8 bottom-8 h-52 w-52 rounded-full bg-[#7ed3ff]/35 blur-3xl" />

      <div className="relative rounded-[2.5rem] bg-white p-5 shadow-2xl ring-1 ring-slate-200">
        <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#06111f] p-6 text-white">
            <div className="mb-10 flex items-center justify-between">
              <div className="h-10 w-10 rounded-2xl bg-[#7ed3ff]" />
              <div className="h-8 w-24 rounded-full bg-white/10" />
            </div>

            <h3 className="text-3xl font-bold leading-tight">
              Build better product experiences.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Elegant interfaces with structure, contrast, rhythm, and
              interaction clarity.
            </p>

            <div className="mt-8 h-12 w-36 rounded-full bg-[#267A9E]" />
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] bg-[#eef8ff] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Dashboard UI</p>
                  <h4 className="font-bold text-[#06111f]">User Analytics</h4>
                </div>
                <Star size={20} className="text-[#267A9E]" />
              </div>

              <div className="flex h-36 items-end gap-3">
                {[42, 78, 54, 92, 68, 86, 60].map((height, index) => (
                  <div
                    key={index}
                    className="flex flex-1 items-end rounded-full bg-white"
                  >
                    <div
                      className="w-full rounded-full bg-gradient-to-t from-[#267A9E] to-[#7ed3ff]"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.7rem] bg-[#fff0fb] p-5">
                <Palette size={24} className="text-[#ff4fc3]" />
                <p className="mt-5 text-sm font-semibold text-[#06111f]">
                  Color System
                </p>
              </div>

              <div className="rounded-[1.7rem] bg-[#f3efff] p-5">
                <Layers3 size={24} className="text-[#8b5cf6]" />
                <p className="mt-5 text-sm font-semibold text-[#06111f]">
                  UI Components
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UiUxDesignPage;