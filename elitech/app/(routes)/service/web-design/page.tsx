import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Monitor,
  Smartphone,
  Search,
  Gauge,
  ShieldCheck,
  Sparkles,
  Palette,
  MousePointer,
  LayoutTemplate,
  CheckCircle,
  Rocket,
  Code2,
  Brush,
  Layers3,
  Megaphone,
  BarChart3,
  Eye,
  Zap,
  PenTool,
  Component,
  MonitorSmartphone,
  Star,
  FileText,
} from "lucide-react";

const webDesignServices = [
  {
    icon: LayoutTemplate,
    title: "Business Website Design",
    text: "Professional websites for companies, startups, institutions, and service-based brands.",
  },
  {
    icon: Palette,
    title: "Brand-Focused Visual Design",
    text: "Clean colors, typography, spacing, and visuals that match your business identity.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web Design",
    text: "Web pages that look sharp on desktop, tablet, and mobile devices.",
  },
  {
    icon: MousePointer,
    title: "Conversion-Focused Layouts",
    text: "Sections designed to guide visitors toward calls, bookings, signups, or purchases.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    text: "Clear page structure, readable sections, headings, and content hierarchy for visibility.",
  },
  {
    icon: Gauge,
    title: "Performance-Aware Design",
    text: "Lightweight layouts designed with speed, readability, and smooth browsing in mind.",
  },
];

const websiteTypes = [
  "Corporate websites",
  "Startup landing pages",
  "Portfolio websites",
  "Product landing pages",
  "Service business websites",
  "Agency websites",
  "School websites",
  "Healthcare websites",
  "E-commerce front pages",
  "Event websites",
  "Church/ministry websites",
  "Personal brand websites",
];

const process = [
  {
    step: "01",
    title: "Brand & Goal Review",
    text: "We understand your brand, audience, competitors, content needs, and the main goal of the website.",
  },
  {
    step: "02",
    title: "Website Structure",
    text: "We plan the pages, hero section, navigation, content flow, calls-to-action, and user journey.",
  },
  {
    step: "03",
    title: "Visual Design",
    text: "We design modern sections with typography, colors, spacing, images, cards, and interactions.",
  },
  {
    step: "04",
    title: "Responsive Build",
    text: "We translate the design into clean responsive pages that work across screen sizes.",
  },
  {
    step: "05",
    title: "Launch Polish",
    text: "We refine spacing, speed, SEO basics, mobile layout, and final presentation before launch.",
  },
];

const designPrinciples = [
  {
    icon: Eye,
    title: "Clear first impression",
    text: "Visitors should immediately understand who you are, what you offer, and why it matters.",
  },
  {
    icon: Megaphone,
    title: "Strong message flow",
    text: "Every section should communicate value and naturally move users toward action.",
  },
  {
    icon: Brush,
    title: "Premium visual style",
    text: "Modern layouts, refined typography, smooth spacing, and professional visual balance.",
  },
  {
    icon: ShieldCheck,
    title: "Trust-building structure",
    text: "Use credibility sections, testimonials, service proof, and strong content hierarchy.",
  },
];

const sections = [
  "Hero section",
  "About section",
  "Services overview",
  "Why choose us",
  "Process section",
  "Portfolio section",
  "Testimonials",
  "Contact CTA",
  "FAQ section",
  "Footer design",
  "Responsive navigation",
  "SEO content layout",
];

function WebDesignPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] font-['Poppins',sans-serif] text-[#06111f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f8fbff] px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute left-[-180px] top-16 h-[520px] w-[520px] rounded-full bg-[#7ed3ff]/35 blur-3xl" />
          <div className="absolute right-[-180px] top-24 h-[560px] w-[560px] rounded-full bg-[#267A9E]/20 blur-3xl" />
          <div className="absolute bottom-[-260px] left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[#dbeafe]/70 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(248,251,255,0.98),rgba(239,250,255,0.94),rgba(255,255,255,0.82))]" />
        </div>

        <div className="absolute inset-0 opacity-[0.28]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(38,122,158,0.22)_1px,transparent_1px)] bg-[size:34px_34px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#267A9E]/15 bg-white/75 px-4 py-2 text-sm font-medium text-[#267A9E] shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Web Design
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.055em] text-[#06111f] sm:text-5xl lg:text-7xl">
              Beautiful websites that make your brand look serious.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We design modern, responsive, and conversion-focused websites for
              businesses, startups, institutions, and personal brands that want
              a strong digital presence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.28)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Design My Website
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-[#267A9E]/20 bg-white/75 px-7 py-4 text-sm font-semibold text-[#06111f] shadow-sm backdrop-blur transition hover:border-[#267A9E] hover:text-[#267A9E]"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { value: "01", label: "Premium layout" },
                { value: "02", label: "Responsive pages" },
                { value: "03", label: "SEO structure" },
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

          <WebDesignHeroVisual />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              What We Design
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Websites designed for clarity, trust, and action.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              A good website must do more than look nice. It should explain your
              value, guide visitors, build trust, and make it easy for people to
              contact you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webDesignServices.map((item) => {
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

      {/* WEBSITE TYPES */}
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
              Website Categories
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              We design websites for different brands and industries.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Whether your goal is to attract clients, sell a product, present a
              company, promote an event, or build credibility, we create a web
              design direction that fits the purpose.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {websiteTypes.map((item) => (
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

      {/* SHOWCASE SPLIT */}
      <section className="bg-[#f8fbff] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <WebsiteShowcase />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Visual Experience
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Designed like a real brand, not a basic template.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We create page sections with strong hierarchy, smooth spacing,
              premium card layouts, trust-building content, and clear
              calls-to-action so your website feels professional from the first
              scroll.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {designPrinciples.map((item) => {
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

      {/* SECTIONS */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Page Sections
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Every page section has a job to do.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We do not just stack random blocks. Each section is planned to
              tell the story of your business, answer visitor questions, reduce
              doubt, and move the user closer to taking action.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sections.map((item) => (
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

      {/* RESPONSIVE DESIGN */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ResponsiveVisual />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7ed3ff]">
              Responsive Design
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Your website should look excellent on every screen.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Mobile visitors are often the majority. We design layouts that
              adapt properly across phones, tablets, laptops, and large desktop
              screens without losing quality or clarity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Smartphone, title: "Mobile-first layout" },
                { icon: Monitor, title: "Desktop presentation" },
                { icon: Gauge, title: "Speed-aware sections" },
                { icon: ShieldCheck, title: "Clean structure" },
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

      {/* PROCESS */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Web Design Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              From brand idea to polished website experience.
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

      {/* DESIGN + DEVELOPMENT */}
      <section className="bg-[#f8fbff] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Design To Build
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              We can design the website and also build it.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              If you want more than design, we can move from UI direction into
              real implementation using modern frontend technologies, responsive
              components, SEO-friendly structure, and clean production code.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/service/web-development"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                View Web Development
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/service/ui-ux-design"
                className="inline-flex items-center gap-3 rounded-full border border-[#267A9E]/20 bg-white px-7 py-4 text-sm font-semibold text-[#06111f] transition hover:border-[#267A9E] hover:text-[#267A9E]"
              >
                View UI/UX Design
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: PenTool,
                title: "Design Direction",
                text: "Visual style, content hierarchy, layout direction, and responsive structure.",
              },
              {
                icon: Component,
                title: "Reusable Sections",
                text: "Hero blocks, cards, forms, CTAs, testimonials, service layouts, and more.",
              },
              {
                icon: Code2,
                title: "Clean Frontend",
                text: "Production-ready web sections that are maintainable and responsive.",
              },
              {
                icon: Zap,
                title: "Launch Ready",
                text: "Optimized page flow, contact actions, speed awareness, and SEO basics.",
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
                Ready for a better website?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Let’s design a website that makes your brand stand out.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Whether you need a corporate website, landing page, service
                website, portfolio, or full redesign, we can create a modern web
                experience for your business.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Start Web Design Project
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative min-h-[340px] bg-[#07182d] p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,211,255,0.2),transparent_36%)]" />

              <div className="relative z-10 space-y-5">
                {[
                  "Modern responsive design",
                  "Conversion-focused layout",
                  "SEO-friendly page structure",
                  "Development-ready sections",
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

function WebDesignHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-[#7ed3ff]/35 blur-3xl" />
      <div className="absolute bottom-10 right-8 h-52 w-52 rounded-full bg-[#267A9E]/22 blur-3xl" />

      <div className="relative rounded-[2.6rem] border border-white/80 bg-white/75 p-4 shadow-[0_30px_100px_rgba(38,122,158,0.22)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[2rem] bg-[#06111f] text-white">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full border border-[#7ed3ff]/20 bg-[#7ed3ff]/10 px-4 py-1 text-xs font-medium text-[#d7f4ff]">
              Website Preview
            </div>
          </div>

          <div className="bg-white p-5 text-[#06111f]">
            <div className="rounded-[1.6rem] bg-[#f8fbff] p-5">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-[#267A9E]" />
                  <div className="h-4 w-28 rounded-full bg-slate-200" />
                </div>

                <div className="hidden gap-3 sm:flex">
                  <div className="h-3 w-12 rounded-full bg-slate-200" />
                  <div className="h-3 w-12 rounded-full bg-slate-200" />
                  <div className="h-3 w-12 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                <div>
                  <div className="mb-4 h-5 w-28 rounded-full bg-[#267A9E]/20" />
                  <div className="h-9 w-[95%] rounded-full bg-[#06111f]" />
                  <div className="mt-3 h-9 w-[78%] rounded-full bg-[#06111f]" />
                  <div className="mt-5 h-4 w-[88%] rounded-full bg-slate-200" />
                  <div className="mt-3 h-4 w-[65%] rounded-full bg-slate-200" />

                  <div className="mt-7 flex gap-3">
                    <div className="h-11 w-36 rounded-full bg-[#267A9E]" />
                    <div className="h-11 w-28 rounded-full border border-slate-200 bg-white" />
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-[#06111f] p-4">
                  <div className="h-44 rounded-[1.2rem] bg-gradient-to-br from-[#267A9E] to-[#7ed3ff]" />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-2xl bg-white/10" />
                    <div className="h-16 rounded-2xl bg-white/10" />
                    <div className="h-16 rounded-2xl bg-white/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Globe, label: "SEO Ready" },
                { icon: Gauge, label: "Fast Layout" },
                { icon: Star, label: "Premium UI" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-[#f8fbff] p-4"
                  >
                    <Icon size={20} className="text-[#267A9E]" />
                    <p className="mt-3 text-sm font-semibold">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-5 top-16 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium text-[#267A9E] shadow-sm backdrop-blur lg:block">
        Responsive Layout
      </div>

      <div className="absolute -left-5 bottom-20 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium text-[#06111f] shadow-sm backdrop-blur lg:block">
        Conversion First
      </div>
    </div>
  );
}

function WebsiteShowcase() {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-[#7ed3ff]/35 blur-3xl" />
      <div className="absolute -right-8 bottom-8 h-52 w-52 rounded-full bg-[#267A9E]/18 blur-3xl" />

      <div className="relative rounded-[2.5rem] bg-white p-5 shadow-2xl ring-1 ring-slate-200">
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#06111f] p-6 text-white">
            <div className="mb-10 flex items-center justify-between">
              <div className="h-10 w-10 rounded-2xl bg-[#7ed3ff]" />
              <div className="h-8 w-24 rounded-full bg-white/10" />
            </div>

            <h3 className="text-3xl font-bold leading-tight">
              Your website is your first impression.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              We design that first impression to look credible, modern, and
              easy to understand.
            </p>

            <div className="mt-8 h-12 w-36 rounded-full bg-[#267A9E]" />
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] bg-[#eef8ff] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Website Analytics</p>
                  <h4 className="font-bold text-[#06111f]">
                    Engagement Growth
                  </h4>
                </div>
                <BarChart3 size={20} className="text-[#267A9E]" />
              </div>

              <div className="flex h-36 items-end gap-3">
                {[38, 62, 48, 74, 85, 68, 96].map((height, index) => (
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
              <div className="rounded-[1.7rem] bg-[#f0fbff] p-5">
                <Palette size={24} className="text-[#267A9E]" />
                <p className="mt-5 text-sm font-semibold text-[#06111f]">
                  Brand Style
                </p>
              </div>

              <div className="rounded-[1.7rem] bg-[#f3f7ff] p-5">
                <Layers3 size={24} className="text-[#267A9E]" />
                <p className="mt-5 text-sm font-semibold text-[#06111f]">
                  Section System
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResponsiveVisual() {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-[#7ed3ff]/20 blur-3xl" />
      <div className="absolute -right-8 bottom-6 h-52 w-52 rounded-full bg-[#267A9E]/25 blur-3xl" />

      <div className="relative min-h-[520px]">
        <div className="absolute left-0 top-10 hidden w-[420px] rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur lg:block">
          <div className="rounded-[1.5rem] bg-white p-5 text-[#06111f]">
            <div className="mb-5 h-6 w-32 rounded-full bg-slate-200" />
            <div className="h-8 w-[85%] rounded-full bg-[#06111f]" />
            <div className="mt-3 h-8 w-[65%] rounded-full bg-[#06111f]" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-24 rounded-2xl bg-[#267A9E]" />
              <div className="h-24 rounded-2xl bg-[#7ed3ff]" />
              <div className="h-24 rounded-2xl bg-white shadow-sm" />
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-0 w-[250px] rounded-[2.5rem] border border-white/15 bg-white p-3 shadow-2xl">
          <div className="rounded-[2rem] bg-[#f8fbff] p-4 text-[#06111f]">
            <div className="mx-auto mb-5 h-5 w-24 rounded-full bg-slate-200" />
            <div className="rounded-[1.5rem] bg-[#06111f] p-5 text-white">
              <Globe size={24} className="text-[#7ed3ff]" />
              <div className="mt-5 h-6 w-[90%] rounded-full bg-white/20" />
              <div className="mt-3 h-6 w-[65%] rounded-full bg-white/20" />
              <div className="mt-6 h-10 w-28 rounded-full bg-[#267A9E]" />
            </div>

            <div className="mt-4 grid gap-3">
              <div className="h-20 rounded-2xl bg-white shadow-sm" />
              <div className="h-20 rounded-2xl bg-white shadow-sm" />
              <div className="h-20 rounded-2xl bg-white shadow-sm" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-10 w-[300px] rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
          <div className="rounded-[1.5rem] bg-white p-5 text-[#06111f]">
            <div className="mb-5 flex items-center justify-between">
              <div className="h-8 w-8 rounded-xl bg-[#267A9E]" />
              <FileText size={20} className="text-[#267A9E]" />
            </div>
            <div className="h-5 w-[85%] rounded-full bg-slate-200" />
            <div className="mt-3 h-5 w-[65%] rounded-full bg-slate-100" />
            <div className="mt-6 h-28 rounded-2xl bg-[#eef8ff]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDesignPage;