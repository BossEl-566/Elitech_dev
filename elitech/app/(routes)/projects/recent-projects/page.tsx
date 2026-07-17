"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  image: string;
  icon: LucideIcon;
  services: string[];
  technologies: string[];
  result: string;
  resultLabel: string;
  accent: string;
  featured?: boolean;
};

const categories = [
  "All Projects",
  "Web Applications",
  "Mobile Apps",
  "Business Systems",
  "AI Solutions",
  "E-commerce",
];

const projects: Project[] = [
  {
    slug: "nexus-business-suite",
    title: "Nexus Business Suite",
    client: "Enterprise Operations Company",
    category: "Business Systems",
    year: "2026",
    description:
      "A centralized business management platform connecting finance, customers, inventory, employees and executive reporting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
    icon: BriefcaseBusiness,
    services: [
      "Product Strategy",
      "UI/UX Design",
      "Software Development",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    result: "45%",
    resultLabel: "Less manual work",
    accent: "from-[#36b7f0] to-[#267a9e]",
    featured: true,
  },
  {
    slug: "campus-connect-platform",
    title: "Campus Connect Platform",
    client: "Educational Institution",
    category: "Web Applications",
    year: "2026",
    description:
      "A connected digital environment for students, lecturers and administrators to manage academic and institutional activities.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=85",
    icon: GraduationCap,
    services: ["Portal Development", "Database Design", "Cloud Hosting"],
    technologies: ["React", "Laravel", "MySQL", "Redis"],
    result: "4",
    resultLabel: "Connected portals",
    accent: "from-[#627cff] to-[#3349a8]",
  },
  {
    slug: "medix-care-system",
    title: "Medix Care System",
    client: "Private Healthcare Provider",
    category: "Business Systems",
    year: "2026",
    description:
      "A healthcare operations system for appointments, patient records, billing, pharmacy workflows and administrative reports.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    icon: HeartPulse,
    services: ["Workflow Design", "Secure Development", "Analytics"],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    result: "38%",
    resultLabel: "Faster check-in",
    accent: "from-[#2cc7a5] to-[#118176]",
  },
  {
    slug: "marketflow-commerce",
    title: "MarketFlow Commerce",
    client: "Retail and Distribution Brand",
    category: "E-commerce",
    year: "2026",
    description:
      "A high-performance e-commerce platform combining online sales, inventory management, payments and fulfilment tracking.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
    icon: ShoppingCart,
    services: ["E-commerce Design", "Payment Integration", "Admin Portal"],
    technologies: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    result: "32%",
    resultLabel: "Higher conversion",
    accent: "from-[#ff9e43] to-[#c76616]",
  },
  {
    slug: "fieldforce-mobile",
    title: "FieldForce Mobile",
    client: "Field Service Organization",
    category: "Mobile Apps",
    year: "2025",
    description:
      "A cross-platform workforce application for assignments, field reports, location updates, digital forms and media uploads.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
    icon: MonitorSmartphone,
    services: ["Mobile Design", "App Development", "API Integration"],
    technologies: ["React Native", "Expo", "Node.js", "Firebase"],
    result: "47%",
    resultLabel: "Faster updates",
    accent: "from-[#38bdf8] to-[#075985]",
  },
  {
    slug: "insight-ai-workspace",
    title: "Insight AI Workspace",
    client: "Professional Services Firm",
    category: "AI Solutions",
    year: "2025",
    description:
      "An AI-assisted document workspace that extracts information, summarizes reports and automates repetitive review workflows.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    icon: Brain,
    services: ["AI Discovery", "Automation", "System Integration"],
    technologies: ["Python", "LLM APIs", "Vector DB", "React"],
    result: "3x",
    resultLabel: "More work processed",
    accent: "from-[#a06dff] to-[#5631a9]",
  },
  {
    slug: "booking-hub-platform",
    title: "Booking Hub Platform",
    client: "Hospitality and Events Business",
    category: "Web Applications",
    year: "2025",
    description:
      "A flexible online booking platform with availability management, automated confirmations, payments and reporting.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=85",
    icon: CalendarDays,
    services: ["Product Design", "Web Development", "Payments"],
    technologies: ["Next.js", "Node.js", "MongoDB", "Paystack"],
    result: "24/7",
    resultLabel: "Online booking",
    accent: "from-[#ec4899] to-[#9d174d]",
  },
  {
    slug: "executive-analytics-dashboard",
    title: "Executive Analytics Dashboard",
    client: "Multi-branch Organization",
    category: "Business Systems",
    year: "2025",
    description:
      "A real-time analytics environment that gives management a consolidated view of sales, operations and business performance.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    icon: LayoutDashboard,
    services: ["Data Strategy", "Dashboard Design", "Cloud Integration"],
    technologies: ["React", "Python", "PostgreSQL", "Power BI"],
    result: "60%",
    resultLabel: "Faster reporting",
    accent: "from-[#22c55e] to-[#166534]",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Purpose-built software designed around real business processes.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web and Mobile",
    description:
      "Responsive platforms and applications for modern users.",
  },
  {
    icon: Brain,
    title: "AI and Automation",
    description:
      "Intelligent workflows that reduce repetitive work.",
  },
  {
    icon: Cloud,
    title: "Cloud Systems",
    description:
      "Secure infrastructure built for reliability and growth.",
  },
];

const deliveryStats = [
  {
    value: "8+",
    label: "Recent solutions",
    icon: Layers3,
  },
  {
    value: "6",
    label: "Industries supported",
    icon: Target,
  },
  {
    value: "99.9%",
    label: "Target availability",
    icon: ShieldCheck,
  },
  {
    value: "24/7",
    label: "Digital access",
    icon: Cloud,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-14 bg-[#36b7f0]" />

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#267a9e]">
          {eyebrow}
        </span>

        {centered && <span className="h-px w-14 bg-[#36b7f0]" />}
      </div>

      <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#07182d] sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#66727c]">
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = project.icon;

  return (
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.08, 0.3),
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[#dfe8ed] bg-white shadow-[0_20px_65px_rgba(7,24,45,0.07)] transition duration-500 hover:-translate-y-2 hover:border-[#36b7f0]/50 hover:shadow-[0_30px_90px_rgba(7,24,45,0.13)]"
    >
      <div className="relative h-[270px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/85 via-transparent to-[#061524]/10" />

        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#061524]/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
          <CalendarDays size={13} />
          {project.year}
        </div>

        <div
          className={`absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} text-white shadow-lg`}
        >
          <Icon size={22} />
        </div>

        <div className="absolute bottom-5 right-5 text-right text-white">
          <div className="text-2xl font-extrabold">
            {project.result}
          </div>

          <div className="text-[10px] uppercase tracking-wider text-white/65">
            {project.resultLabel}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#267a9e]">
            {project.category}
          </span>

          <ArrowUpRight
            size={18}
            className="text-[#9aa6ae] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#267a9e]"
          />
        </div>

        <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-[#07182d]">
          {project.title}
        </h3>

        <p className="mt-2 text-xs font-semibold text-[#98a2aa]">
          {project.client}
        </p>

        <p className="mt-5 text-sm leading-7 text-[#65717b]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#dce8ed] bg-[#f6fafb] px-3 py-1.5 text-[10px] font-bold text-[#64717b]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <Link
            href={`/projects/recent-projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#267a9e] transition hover:gap-3 hover:text-[#07182d]"
          >
            View project
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function RecentProjectsPage() {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const featuredProject =
    projects.find((project) => project.featured) ?? projects[0];

  const FeaturedIcon = featuredProject.icon;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="overflow-hidden bg-[#f6f8f9] font-['Poppins',sans-serif] text-[#07182d]">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[790px] overflow-hidden bg-[#061524] pb-32 pt-28 text-white sm:pt-32">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=90"
          alt="Elitech Dev project collaboration"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />

        <div className="absolute inset-0 -z-20 bg-[#061524]/85" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,21,36,0.99)_0%,rgba(6,21,36,0.9)_48%,rgba(6,21,36,0.4)_100%)]" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_32%,rgba(54,183,240,0.25),transparent_28%)]" />

        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#36b7f0]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#267a9e]/15 blur-3xl" />

        <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/60">
              <Link
                href="/"
                className="transition hover:text-[#7fd7ff]"
              >
                Home
              </Link>

              <ChevronRight size={13} />

              <Link
                href="/projects"
                className="transition hover:text-[#7fd7ff]"
              >
                Projects
              </Link>

              <ChevronRight size={13} />

              <span className="text-[#7fd7ff]">
                Recent Projects
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#36b7f0]/35 bg-[#36b7f0]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff] backdrop-blur-md">
              <Sparkles size={14} />
              Recently designed and delivered
            </div>

            <h1 className="mt-7 max-w-4xl text-[3.1rem] font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-[4.5rem] lg:text-[5.7rem]">
              PROJECTS BUILT TO{" "}
              <span className="font-light text-[#7fd7ff]">
                MOVE BUSINESS FORWARD.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Explore the recent digital products, platforms and
              software systems we have designed to solve operational
              challenges and create measurable value.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#recent-projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#36a7cf] px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(54,183,240,0.25)] transition hover:bg-[#267a9e]"
              >
                Explore recent work

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267a9e] transition group-hover:translate-x-1 group-hover:bg-white/15">
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold transition hover:border-[#7fd7ff] hover:bg-white/10"
              >
                Start your project
                <ExternalLink size={15} />
              </Link>
            </div>
          </motion.div>

          {/* HERO PROJECT PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative hidden lg:block"
          >
            <div className="absolute -left-7 -top-7 h-full w-full rounded-[38px] border border-[#36b7f0]/25" />

            <div className="relative overflow-hidden rounded-[38px] border border-white/15 bg-white/10 p-5 shadow-[0_35px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl">
              <div className="relative h-[290px] overflow-hidden rounded-[28px]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/90 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#061524]/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] backdrop-blur-md">
                  Featured recent project
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#7fd7ff]">
                        {featuredProject.category}
                      </p>

                      <h2 className="mt-2 text-2xl font-extrabold">
                        {featuredProject.title}
                      </h2>
                    </div>

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${featuredProject.accent}`}
                    >
                      <FeaturedIcon size={22} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 p-3 pt-5">
                {[
                  {
                    value: featuredProject.result,
                    label: featuredProject.resultLabel,
                  },
                  {
                    value: "4",
                    label: "Core technologies",
                  },
                  {
                    value: featuredProject.year,
                    label: "Delivered",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-[#061524]/45 p-4"
                  >
                    <div className="text-xl font-extrabold">
                      {item.value}
                    </div>

                    <div className="mt-1 text-[9px] uppercase leading-4 tracking-wider text-white/50">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* HERO STATS */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#061524]/60 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
            {deliveryStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 px-3 py-6 sm:px-6"
                >
                  <Icon
                    size={20}
                    className="hidden text-[#7fd7ff] sm:block"
                  />

                  <div>
                    <div className="font-extrabold text-white">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative bg-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(54,183,240,0.08),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <SectionHeading
              eyebrow="What we have been building"
              title="Recent work across digital products and business systems."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
          >
            <p className="text-lg leading-9 text-[#5e6974]">
              Our recent projects combine product strategy, thoughtful
              user experience and reliable engineering. Each solution is
              shaped around the client&apos;s actual operations, users
              and growth objectives.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-[#e0e8ec] bg-[#f8fafb] p-5 transition hover:border-[#36b7f0]/60 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e3f7fd] text-[#267a9e]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-extrabold text-[#07182d]">
                      {capability.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6a7680]">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="relative overflow-hidden bg-[#edf3f5] py-24">
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#36b7f0]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#267a9e]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <SectionHeading
              eyebrow="Project spotlight"
              title="A recent solution designed for operational clarity."
            />

            <p className="max-w-xl text-base leading-8 text-[#66727c]">
              A closer view of how strategy, interface design and
              software engineering come together in one complete
              business platform.
            </p>
          </motion.div>

          <motion.article
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="overflow-hidden rounded-[38px] border border-white bg-white shadow-[0_30px_100px_rgba(7,24,45,0.12)]"
          >
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[520px] overflow-hidden lg:min-h-[670px]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/95 via-[#061524]/15 to-transparent" />

                <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/20 bg-[#061524]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  <CheckCircle2 size={15} />
                  Completed project
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7fd7ff]">
                    {featuredProject.client}
                  </p>

                  <h3 className="mt-3 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                    {featuredProject.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${featuredProject.accent} text-white`}
                  >
                    <FeaturedIcon size={25} />
                  </div>

                  <span className="rounded-full bg-[#edf8fc] px-4 py-2 text-xs font-bold text-[#267a9e]">
                    {featuredProject.year}
                  </span>
                </div>

                <div className="mt-9">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                    Project scope
                  </p>

                  <div className="mt-4 space-y-3">
                    {featuredProject.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 rounded-2xl border border-[#e1e9ed] bg-[#f8fafb] p-4"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#267a9e] text-white">
                          <CheckCircle2 size={14} />
                        </span>

                        <span className="text-sm font-bold text-[#4d5a64]">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                    Technology
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featuredProject.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#cfe3ea] bg-[#edf8fc] px-4 py-2 text-xs font-bold text-[#267a9e]"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-8 rounded-[26px] bg-[#07182d] p-6 text-white">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7fd7ff]">
                        Project outcome
                      </p>

                      <div className="mt-3 text-4xl font-extrabold">
                        {featuredProject.result}
                      </div>

                      <p className="mt-2 text-sm text-white/60">
                        {featuredProject.resultLabel}
                      </p>
                    </div>

                    <TrendingUp
                      size={28}
                      className="text-[#7fd7ff]"
                    />
                  </div>
                </div>

                <Link
                  href={`/projects/recent-projects/${featuredProject.slug}`}
                  className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#267a9e] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#07182d] lg:mt-auto"
                >
                  View project details

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* RECENT PROJECT GRID */}
      <section
        id="recent-projects"
        className="bg-[#f7f9fa] py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <SectionHeading
              eyebrow="Latest portfolio"
              title="Explore our recent projects."
              description="Browse the latest web platforms, mobile applications, intelligent systems and digital business solutions."
              centered
            />
          </motion.div>

          {/* FILTERS */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                    isActive
                      ? "border-[#267a9e] bg-[#267a9e] text-white shadow-[0_12px_30px_rgba(38,122,158,0.22)]"
                      : "border-[#d7e2e7] bg-white text-[#5d6872] hover:border-[#36b7f0] hover:text-[#267a9e]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="relative overflow-hidden bg-[#061524] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,183,240,0.16),transparent_40%)]" />

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:50px_50px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-14 bg-[#7fd7ff]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#7fd7ff]">
                  Designed for impact
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                More than attractive interfaces.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/65">
                Our projects are built to improve operations, simplify
                customer experiences and provide organizations with
                better control over their data and workflows.
              </p>

              <Link
                href="/projects/case-studies"
                className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#7fd7ff] transition hover:gap-4 hover:text-white"
              >
                Explore detailed case studies
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Workflow,
                  title: "Smarter workflows",
                  description:
                    "Digital processes that reduce repetitive work and unnecessary delays.",
                },
                {
                  icon: Users,
                  title: "Better experiences",
                  description:
                    "Clear and intuitive interfaces designed around real users.",
                },
                {
                  icon: Database,
                  title: "Connected data",
                  description:
                    "Structured systems that provide one reliable source of information.",
                },
                {
                  icon: BarChart3,
                  title: "Visible performance",
                  description:
                    "Dashboards and reporting that support better business decisions.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#36b7f0]/15 text-[#7fd7ff]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/60">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
          >
            <div>
              <SectionHeading
                eyebrow="Technology approach"
                title="Modern tools selected for the right reasons."
                description="We select technologies based on product requirements, security, performance, maintainability and long-term growth."
              />

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#07182d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#267a9e]"
              >
                Explore our services
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                {
                  name: "Next.js",
                  icon: Code2,
                },
                {
                  name: "React Native",
                  icon: MonitorSmartphone,
                },
                {
                  name: "Node.js",
                  icon: Layers3,
                },
                {
                  name: "Cloud",
                  icon: Cloud,
                },
                {
                  name: "Databases",
                  icon: Database,
                },
                {
                  name: "AI Systems",
                  icon: Brain,
                },
              ].map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="group rounded-[24px] border border-[#e0e8ec] bg-[#f8fafb] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#36b7f0]/60 hover:bg-white hover:shadow-xl"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3f7fd] text-[#267a9e] transition group-hover:bg-[#267a9e] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <p className="mt-4 text-sm font-extrabold text-[#07182d]">
                      {technology.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#061524] py-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Elitech Dev workspace"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#061524]/84" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(54,183,240,0.22),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="rounded-[38px] border border-white/15 bg-white/[0.07] p-8 backdrop-blur-xl sm:p-12 lg:p-16"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#36b7f0]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff]">
                  <Rocket size={15} />
                  Build your next project
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Have an idea that deserves a reliable digital
                  solution?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                  Let&apos;s discuss the business problem, the users and
                  the result you want your next project to achieve.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#36a7cf] px-7 py-4 text-sm font-bold transition hover:bg-[#267a9e]"
                >
                  Start your project

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/projects/case-studies"
                  className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold transition hover:border-[#7fd7ff] hover:bg-white/10"
                >
                  View case studies
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}