"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Layers3,
  Lightbulb,
  LineChart,
  MonitorSmartphone,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  icon: LucideIcon;
  accent: string;
  services: string[];
  technologies: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
};

const categories = [
  "All",
  "Business Systems",
  "Education",
  "Healthcare",
  "E-commerce",
  "AI & Automation",
  "Mobile Apps",
];

const caseStudies: CaseStudy[] = [
  {
    slug: "operations-command-center",
    title: "Operations Command Center",
    eyebrow: "Unified Business Platform",
    category: "Business Systems",
    client: "Multi-branch services company",
    summary:
      "A centralized operations platform connecting customers, inventory, finance, staff activity and executive reporting in one secure workspace.",
    challenge:
      "The company relied on disconnected spreadsheets and manual approvals, making it difficult to track performance across branches or make timely decisions.",
    solution:
      "We designed a role-based business management system with automated workflows, real-time dashboards, inventory control and consolidated reporting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    icon: BriefcaseBusiness,
    accent: "from-[#36b7f0] to-[#267a9e]",
    services: ["Product Strategy", "UX/UI Design", "Web Development"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Cloud"],
    metrics: [
      { value: "62%", label: "Faster reporting" },
      { value: "40%", label: "Less manual work" },
      { value: "1", label: "Source of truth" },
    ],
  },
  {
    slug: "campusflow-school-platform",
    title: "CampusFlow School Platform",
    eyebrow: "Education Management",
    category: "Education",
    client: "Growing educational institution",
    summary:
      "A responsive school management system for admissions, student records, attendance, fees, results and parent communication.",
    challenge:
      "Academic and administrative teams were using separate tools, causing duplicated records, delayed reports and weak communication with parents.",
    solution:
      "We created a modular platform with dedicated portals for administrators, teachers, students and parents, supported by automated alerts and reporting.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=85",
    icon: GraduationCap,
    accent: "from-[#4f8cff] to-[#2847a5]",
    services: ["System Architecture", "Portal Development", "Support"],
    technologies: ["React", "Laravel", "MySQL", "REST API"],
    metrics: [
      { value: "75%", label: "Quicker results" },
      { value: "4", label: "Connected portals" },
      { value: "24/7", label: "Record access" },
    ],
  },
  {
    slug: "careconnect-health-platform",
    title: "CareConnect Health Platform",
    eyebrow: "Digital Patient Experience",
    category: "Healthcare",
    client: "Private healthcare provider",
    summary:
      "A secure healthcare workflow platform supporting appointments, patient records, billing, staff coordination and management analytics.",
    challenge:
      "Manual appointment handling and fragmented patient records created long queues, limited visibility and unnecessary administrative pressure.",
    solution:
      "We built a secure web platform with appointment scheduling, structured records, permissions, notifications and operational dashboards.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    icon: HeartPulse,
    accent: "from-[#2ac7a3] to-[#117e72]",
    services: ["Workflow Design", "Secure Development", "Cloud Deployment"],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    metrics: [
      { value: "48%", label: "Shorter admin time" },
      { value: "35%", label: "Faster check-in" },
      { value: "100%", label: "Role-based access" },
    ],
  },
  {
    slug: "commerceos-selling-platform",
    title: "CommerceOS Selling Platform",
    eyebrow: "Omnichannel Commerce",
    category: "E-commerce",
    client: "Retail and distribution brand",
    summary:
      "A scalable commerce platform combining product management, online orders, payments, delivery workflows and sales analytics.",
    challenge:
      "The business could sell online, but inventory, order fulfilment and customer communication were not synchronized across channels.",
    solution:
      "We delivered a conversion-focused storefront and operations dashboard with integrated payments, inventory updates and fulfilment tracking.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
    icon: ShoppingCart,
    accent: "from-[#ff9f43] to-[#c76516]",
    services: ["E-commerce UX", "Payment Integration", "Admin Dashboard"],
    technologies: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    metrics: [
      { value: "31%", label: "Higher conversion" },
      { value: "2.4x", label: "Faster fulfilment" },
      { value: "99.9%", label: "Platform availability" },
    ],
  },
  {
    slug: "insightai-automation-suite",
    title: "InsightAI Automation Suite",
    eyebrow: "Applied Artificial Intelligence",
    category: "AI & Automation",
    client: "Data-intensive professional firm",
    summary:
      "An AI-assisted workspace that organizes documents, extracts key information, generates summaries and routes tasks to the right teams.",
    challenge:
      "Employees spent significant time reviewing repetitive documents and manually moving information between internal systems.",
    solution:
      "We combined document intelligence, business rules and human review checkpoints to automate low-risk work without sacrificing control.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    icon: Brain,
    accent: "from-[#9b6dff] to-[#5030a7]",
    services: ["AI Discovery", "Automation", "Systems Integration"],
    technologies: ["Python", "LLM APIs", "Vector DB", "React"],
    metrics: [
      { value: "58%", label: "Less review time" },
      { value: "3x", label: "More documents handled" },
      { value: "92%", label: "Extraction accuracy" },
    ],
  },
  {
    slug: "fieldconnect-mobile-platform",
    title: "FieldConnect Mobile Platform",
    eyebrow: "Mobile Workforce Operations",
    category: "Mobile Apps",
    client: "Distributed field-service team",
    summary:
      "A cross-platform mobile app for job assignments, location-aware updates, digital forms, evidence capture and supervisor monitoring.",
    challenge:
      "Field updates arrived late through calls and messaging apps, leaving managers without reliable information about task progress.",
    solution:
      "We built an offline-capable mobile workflow with synchronized assignments, status tracking, media uploads and an administrative control center.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
    icon: MonitorSmartphone,
    accent: "from-[#36b7f0] to-[#135f86]",
    services: ["Mobile Product Design", "App Development", "API Integration"],
    technologies: ["React Native", "Expo", "Node.js", "Firebase"],
    metrics: [
      { value: "44%", label: "Faster field updates" },
      { value: "80%", label: "Less paper use" },
      { value: "2", label: "Mobile platforms" },
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover the real problem",
    description:
      "We study the users, workflows, constraints and commercial goals before deciding what should be built.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design the right system",
    description:
      "We convert findings into user journeys, interfaces, technical architecture and a practical delivery roadmap.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build and validate",
    description:
      "We develop in focused iterations, test critical flows and continuously validate the product with stakeholders.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch and improve",
    description:
      "We deploy securely, monitor performance, support adoption and improve the platform using real usage data.",
    icon: Rocket,
  },
];

const capabilities = [
  { label: "Product strategy", icon: Target },
  { label: "UX and interface design", icon: Layers3 },
  { label: "Web and mobile engineering", icon: MonitorSmartphone },
  { label: "Cloud and database systems", icon: Database },
  { label: "Security and quality assurance", icon: ShieldCheck },
  { label: "Analytics and optimization", icon: LineChart },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-14 bg-[#36b7f0]" />

      <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#267a9e]">
        {children}
      </span>
    </div>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const Icon = study.icon;

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
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#dfe8ed] bg-white shadow-[0_22px_70px_rgba(7,24,45,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#36b7f0]/50 hover:shadow-[0_30px_90px_rgba(7,24,45,0.14)]"
    >
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/90 via-[#061524]/15 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#061524]/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          {study.category}
        </div>

        <div
          className={`absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${study.accent} text-white shadow-lg`}
        >
          <Icon size={22} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
          {study.eyebrow}
        </p>

        <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-[#07182d]">
          {study.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#65707b]">
          {study.summary}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2 border-y border-[#e7edf1] py-5">
          {study.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-lg font-extrabold text-[#07182d]">
                {metric.value}
              </div>

              <div className="mt-1 text-[10px] font-medium uppercase leading-4 tracking-wide text-[#83909a]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <div className="flex -space-x-2">
            {study.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                title={technology}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#edf7fb] text-[9px] font-extrabold text-[#267a9e]"
              >
                {technology.slice(0, 2).toUpperCase()}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/case-studies/${study.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#267a9e] transition hover:gap-3 hover:text-[#07182d]"
          >
            Read case study
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredStudy = caseStudies[0];
  const FeaturedIcon = featuredStudy.icon;

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === "All") {
      return caseStudies;
    }

    return caseStudies.filter(
      (study) => study.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="overflow-hidden bg-[#f6f8f9] font-['Poppins',sans-serif] text-[#07182d]">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#061524] pt-28 text-white sm:pt-32">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=90"
          alt="Elitech Dev team planning a software project"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-center"
        />

        <div className="absolute inset-0 -z-20 bg-[#061524]/82" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,21,36,0.98)_0%,rgba(6,21,36,0.88)_46%,rgba(6,21,36,0.45)_100%)]" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_35%,rgba(54,183,240,0.22),transparent_28%)]" />

        <div className="absolute -left-28 top-24 h-96 w-96 rounded-full bg-[#36b7f0]/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[#267a9e]/15 blur-3xl" />

        <div className="mx-auto grid min-h-[630px] max-w-7xl items-center gap-14 px-4 pb-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          {/* HERO CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/65">
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

              <span className="text-[#7fd7ff]">Case Studies</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#36b7f0]/35 bg-[#36b7f0]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff] backdrop-blur-md">
              <Sparkles size={14} />
              Strategy, design and engineering
            </div>

            <h1 className="mt-7 max-w-4xl text-[3.2rem] font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-[4.4rem] lg:text-[5.6rem]">
              DIGITAL WORK THAT CREATES{" "}
              <span className="font-light text-[#7fd7ff]">
                REAL IMPACT.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Explore how Elitech Dev turns complex business challenges
              into secure, scalable and user-focused digital products.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#case-studies"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#36a7cf] px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(54,183,240,0.24)] transition hover:bg-[#267a9e]"
              >
                Explore our work

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267a9e] transition group-hover:translate-x-1 group-hover:bg-white/15">
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#7fd7ff] hover:bg-white/10"
              >
                Discuss your project
                <ExternalLink size={15} />
              </Link>
            </div>
          </motion.div>

          {/* HERO RESULTS CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
            <div className="absolute -left-8 -top-8 h-full w-full rounded-[40px] border border-[#36b7f0]/25" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-white/10 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff]">
                    Selected outcome
                  </p>

                  <h2 className="mt-3 text-2xl font-extrabold">
                    From disconnected processes to one digital operation.
                  </h2>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#36b7f0] text-[#061524]">
                  <Workflow size={26} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    value: "40%",
                    label: "less manual work",
                    icon: Clock3,
                  },
                  {
                    value: "62%",
                    label: "faster reporting",
                    icon: TrendingUp,
                  },
                  {
                    value: "1",
                    label: "connected platform",
                    icon: Layers3,
                  },
                  {
                    value: "24/7",
                    label: "secure access",
                    icon: ShieldCheck,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-white/10 bg-[#061524]/45 p-5"
                    >
                      <Icon
                        size={18}
                        className="text-[#7fd7ff]"
                      />

                      <div className="mt-5 text-3xl font-extrabold">
                        {item.value}
                      </div>

                      <div className="mt-1 text-xs uppercase tracking-wide text-white/55">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-3xl bg-white p-4 text-[#07182d]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e3f7fd] text-[#267a9e]">
                  <Quote size={20} />
                </div>

                <p className="text-sm font-semibold leading-6">
                  We measure success by the operational improvement a
                  product creates, not only by how it looks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HERO BOTTOM STATISTICS */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#061524]/55 backdrop-blur-lg">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
            {[
              {
                value: "End-to-end",
                label: "Product delivery",
              },
              {
                value: "Human-centred",
                label: "User experience",
              },
              {
                value: "Secure",
                label: "Engineering approach",
              },
              {
                value: "Measurable",
                label: "Business outcomes",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-6 sm:px-6"
              >
                <div className="text-base font-extrabold text-white">
                  {stat.value}
                </div>

                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="relative bg-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(54,183,240,0.08),transparent_26%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
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
            <SectionLabel>Our work in context</SectionLabel>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
              Every project starts with a business problem worth solving.
            </h2>
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
              We work across strategy, product design, software engineering,
              cloud systems and long-term improvement. Each engagement is
              shaped around the client&apos;s workflow, users and growth
              goals—not a one-size-fits-all template.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.label}
                    className="flex items-center gap-3 rounded-2xl border border-[#e1e9ed] bg-[#f8fafb] p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3f7fd] text-[#267a9e]">
                      <Icon size={19} />
                    </span>

                    <span className="text-sm font-bold text-[#263442]">
                      {capability.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="relative overflow-hidden bg-[#edf3f5] py-24">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#36b7f0]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#267a9e]/10 blur-3xl" />

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
            <div>
              <SectionLabel>Featured transformation</SectionLabel>

              <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
                A closer look at the work.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#66727c]">
              See how product thinking, engineering and operational insight
              come together to create a solution people can actually use.
            </p>
          </motion.div>

          <motion.article
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="overflow-hidden rounded-[36px] border border-white bg-white shadow-[0_30px_100px_rgba(7,24,45,0.11)]"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* FEATURED IMAGE */}
              <div className="relative min-h-[480px] overflow-hidden lg:min-h-[650px]">
                <Image
                  src={featuredStudy.image}
                  alt={featuredStudy.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/95 via-[#061524]/10 to-transparent" />

                <div className="absolute left-7 top-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#061524]/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  <FeaturedIcon size={15} />
                  {featuredStudy.category}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7fd7ff]">
                    {featuredStudy.client}
                  </p>

                  <h3 className="mt-3 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
                    {featuredStudy.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                    {featuredStudy.summary}
                  </p>
                </div>
              </div>

              {/* FEATURED CONTENT */}
              <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                    The challenge
                  </p>

                  <p className="mt-3 text-base leading-8 text-[#5f6b75]">
                    {featuredStudy.challenge}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#e4eaed] pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                    What we delivered
                  </p>

                  <p className="mt-3 text-base leading-8 text-[#5f6b75]">
                    {featuredStudy.solution}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {featuredStudy.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-[#e0e8ec] bg-[#f6f9fa] p-4"
                    >
                      <div className="text-2xl font-extrabold text-[#07182d]">
                        {metric.value}
                      </div>

                      <div className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-wide text-[#7f8b95]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                    Services
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featuredStudy.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-[#cfe5ed] bg-[#edf9fd] px-4 py-2 text-xs font-bold text-[#267a9e]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/projects/case-studies/${featuredStudy.slug}`}
                  className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#07182d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#267a9e] lg:mt-auto"
                >
                  View full case study

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

      {/* CASE STUDIES GRID */}
      <section
        id="case-studies"
        className="relative bg-[#f7f9fa] py-24"
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
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-14 bg-[#36b7f0]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#267a9e]">
                Selected projects
              </span>

              <span className="h-px w-14 bg-[#36b7f0]" />
            </div>

            <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
              Solutions built around measurable outcomes.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#69757f]">
              Filter the portfolio by solution area and explore the
              challenge, approach and value behind each product.
            </p>
          </motion.div>

          {/* CATEGORY FILTER */}
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
                      ? "border-[#267a9e] bg-[#267a9e] text-white shadow-[0_10px_25px_rgba(38,122,158,0.2)]"
                      : "border-[#d8e2e7] bg-white text-[#56626d] hover:border-[#36b7f0] hover:text-[#267a9e]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* PROJECT CARDS */}
          <motion.div
            layout
            className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.slug}
                study={study}
                index={index}
              />
            ))}
          </motion.div>

          {filteredCaseStudies.length === 0 && (
            <div className="mt-12 rounded-3xl border border-dashed border-[#cbd9df] bg-white p-12 text-center">
              <p className="font-bold text-[#07182d]">
                No case studies found.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="relative overflow-hidden bg-[#061524] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,183,240,0.15),transparent_42%)]" />

        <div className="absolute left-0 top-0 h-full w-full opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:48px_48px]" />

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
                  Value beyond launch
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
                We design for adoption, performance and growth.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/65">
                A successful system should improve the way people work,
                reveal useful information and continue creating value after
                the first release.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  title: "User adoption",
                  text: "Clear experiences that reduce training effort and help users complete work confidently.",
                },
                {
                  icon: BarChart3,
                  title: "Operational visibility",
                  text: "Dashboards and reporting that transform daily activity into better management decisions.",
                },
                {
                  icon: ShieldCheck,
                  title: "Reliable foundations",
                  text: "Secure architecture, structured data and scalable infrastructure for long-term use.",
                },
                {
                  icon: CircleDollarSign,
                  title: "Commercial value",
                  text: "Automation and digital workflows designed to reduce costs, increase capacity or support revenue.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 24,
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
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
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
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
          >
            <div>
              <SectionLabel>How we deliver</SectionLabel>

              <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
                A practical path from idea to impact.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#66727c] lg:justify-self-end">
              Our process keeps strategy, design and development aligned
              while giving stakeholders visibility throughout the project.
            </p>
          </motion.div>

          <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#badce8] to-transparent lg:block" />

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    delay: index * 0.1,
                  }}
                  className="relative rounded-[28px] border border-[#e0e8ec] bg-[#f8fafb] p-6"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07182d] text-white shadow-lg">
                      <Icon size={23} />
                    </div>

                    <span className="text-4xl font-black text-[#d7e8ee]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold tracking-[-0.03em]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#69757f]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY PRINCIPLES */}
      <section className="relative overflow-hidden bg-[#eef4f6] py-24">
        <div className="absolute right-[-100px] top-[-100px] h-96 w-96 rounded-full bg-[#36b7f0]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* TEAM IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="relative min-h-[540px] overflow-hidden rounded-[36px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
              alt="Software team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/92 via-[#061524]/15 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7fd7ff]">
                Built together
              </p>

              <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                Collaboration keeps the product aligned with the people
                who will use it.
              </h3>
            </div>
          </motion.div>

          {/* PRINCIPLES CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="flex flex-col justify-center"
          >
            <SectionLabel>Our quality principles</SectionLabel>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
              Technology should make work simpler—not create new
              complexity.
            </h2>

            <div className="mt-9 space-y-4">
              {[
                "Solve the operational problem before adding features.",
                "Make critical user journeys clear, fast and accessible.",
                "Protect data through secure engineering and permissions.",
                "Design architecture that can evolve with the organization.",
                "Measure results and improve the product after launch.",
              ].map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-4 rounded-2xl border border-[#dbe6ea] bg-white p-4"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#267a9e] text-white">
                    <Check size={15} />
                  </span>

                  <p className="text-sm font-semibold leading-7 text-[#4f5d68]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative overflow-hidden bg-[#061524] py-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85"
          alt="Modern technology office"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#061524]/82" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(54,183,240,0.2),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
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
              duration: 0.65,
            }}
            className="rounded-[36px] border border-white/15 bg-white/[0.07] p-8 backdrop-blur-xl sm:p-12 lg:p-16"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#36b7f0]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff]">
                  <CheckCircle2 size={15} />
                  Your project could be next
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Let&apos;s turn your challenge into a digital product
                  that performs.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                  Tell us what is slowing your organization down, what
                  you want to improve, or what new product you want to
                  launch.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#36a7cf] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#267a9e]"
                >
                  Start a conversation

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#7fd7ff] hover:bg-white/10"
                >
                  Explore our services
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