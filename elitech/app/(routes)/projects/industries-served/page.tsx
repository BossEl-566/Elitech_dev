"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Layers3,
  LineChart,
  MonitorSmartphone,
  PackageCheck,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Truck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Industry = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  accent: string;
  stat: string;
  statLabel: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
};

const industryCategories = [
  "All Industries",
  "Commercial",
  "Public & Social",
  "Service Operations",
];

const industries: Industry[] = [
  {
    slug: "business-professional-services",
    name: "Business & Professional Services",
    shortName: "Business Services",
    category: "Commercial",
    tagline: "Digital systems that simplify complex operations.",
    description:
      "We help service-based companies improve customer management, internal workflows, reporting, project delivery and day-to-day business coordination.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
    icon: BriefcaseBusiness,
    accent: "from-[#36b7f0] to-[#267a9e]",
    stat: "45%",
    statLabel: "Potential workflow reduction",
    challenges: [
      "Disconnected departments and business tools",
      "Manual approvals and repetitive administration",
      "Limited visibility across teams and branches",
    ],
    solutions: [
      "Business management platforms",
      "Customer and project management systems",
      "Executive dashboards and automated reporting",
    ],
    technologies: ["Web Platforms", "Cloud", "Analytics", "Automation"],
  },
  {
    slug: "education",
    name: "Education & Training",
    shortName: "Education",
    category: "Public & Social",
    tagline: "Connected learning and administration platforms.",
    description:
      "We build digital systems for schools, universities, training organizations and educational programs that connect students, staff and administrators.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85",
    icon: GraduationCap,
    accent: "from-[#5275ff] to-[#2e439e]",
    stat: "4",
    statLabel: "Connected user portals",
    challenges: [
      "Fragmented student and academic records",
      "Slow fee, attendance and results management",
      "Weak communication between stakeholders",
    ],
    solutions: [
      "School and campus management systems",
      "Student, parent and staff portals",
      "Learning, assessment and communication tools",
    ],
    technologies: ["Student Portals", "Mobile Apps", "Cloud", "Notifications"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medical Services",
    shortName: "Healthcare",
    category: "Public & Social",
    tagline: "Secure platforms for efficient patient care.",
    description:
      "We support hospitals, clinics, pharmacies and health programs with secure systems for patient records, scheduling, billing and operational management.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
    icon: HeartPulse,
    accent: "from-[#2ac7a3] to-[#117e72]",
    stat: "38%",
    statLabel: "Faster patient processing",
    challenges: [
      "Manual patient and appointment records",
      "Long administrative and check-in processes",
      "Sensitive information requiring controlled access",
    ],
    solutions: [
      "Patient and appointment systems",
      "Hospital administration platforms",
      "Secure medical dashboards and reporting",
    ],
    technologies: ["Secure Access", "Databases", "Cloud", "Analytics"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    shortName: "Retail",
    category: "Commercial",
    tagline: "Better shopping experiences and smarter operations.",
    description:
      "We create digital commerce platforms that connect products, customers, payments, inventory, fulfilment and business analytics.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
    icon: ShoppingCart,
    accent: "from-[#ff9f43] to-[#c76516]",
    stat: "32%",
    statLabel: "Potential conversion growth",
    challenges: [
      "Disconnected inventory and sales channels",
      "Poor online shopping experiences",
      "Limited customer and order visibility",
    ],
    solutions: [
      "E-commerce websites and mobile apps",
      "Inventory and order management systems",
      "Payment, delivery and analytics integrations",
    ],
    technologies: ["E-commerce", "Payments", "Inventory", "Mobile"],
  },
  {
    slug: "financial-services",
    name: "Finance & Financial Services",
    shortName: "Financial Services",
    category: "Commercial",
    tagline: "Secure digital tools for financial operations.",
    description:
      "We design reliable systems for savings groups, financial institutions, payment businesses and organizations managing financial workflows.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=85",
    icon: Landmark,
    accent: "from-[#23a6d5] to-[#14528a]",
    stat: "100%",
    statLabel: "Role-based data control",
    challenges: [
      "Sensitive customer and transaction information",
      "Manual reconciliation and reporting",
      "Complex approval and audit requirements",
    ],
    solutions: [
      "Financial management platforms",
      "Savings, loans and payment systems",
      "Transaction dashboards and audit workflows",
    ],
    technologies: ["Security", "Payments", "Reporting", "Cloud"],
  },
  {
    slug: "logistics-transportation",
    name: "Logistics & Transportation",
    shortName: "Logistics",
    category: "Service Operations",
    tagline: "Real-time visibility for moving operations.",
    description:
      "We help logistics companies, transport operators and field teams manage vehicles, routes, deliveries, assignments and operational performance.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
    icon: Truck,
    accent: "from-[#34b3ff] to-[#075985]",
    stat: "24/7",
    statLabel: "Operational visibility",
    challenges: [
      "Limited visibility over vehicles and deliveries",
      "Delayed field updates and manual reporting",
      "Difficult route and workforce coordination",
    ],
    solutions: [
      "Fleet and delivery management systems",
      "GPS tracking and route dashboards",
      "Field workforce mobile applications",
    ],
    technologies: ["GPS", "Mobile Apps", "Real-time Data", "Maps"],
  },
  {
    slug: "hospitality-booking",
    name: "Hospitality, Events & Booking",
    shortName: "Hospitality",
    category: "Service Operations",
    tagline: "Seamless digital booking and guest experiences.",
    description:
      "We build booking and customer-management platforms for hotels, venues, event companies, travel services and appointment-based businesses.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85",
    icon: CalendarCheck2,
    accent: "from-[#ec4899] to-[#9d174d]",
    stat: "24/7",
    statLabel: "Online reservations",
    challenges: [
      "Manual reservations and availability tracking",
      "Slow customer confirmation processes",
      "Disconnected payments and service records",
    ],
    solutions: [
      "Booking and reservation platforms",
      "Customer communication automation",
      "Payment and availability management",
    ],
    technologies: ["Booking Systems", "Payments", "Email", "Mobile"],
  },
  {
    slug: "public-sector-ngos",
    name: "Public Sector & Non-profit Organizations",
    shortName: "Public & Non-profit",
    category: "Public & Social",
    tagline: "Technology that improves service delivery and impact.",
    description:
      "We support public institutions, NGOs and social programs with digital tools for service delivery, beneficiary management, reporting and transparency.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1800&q=85",
    icon: HandHeart,
    accent: "from-[#22c55e] to-[#166534]",
    stat: "1",
    statLabel: "Reliable source of data",
    challenges: [
      "Paper-based beneficiary and program records",
      "Complex reporting to partners and stakeholders",
      "Limited transparency across projects",
    ],
    solutions: [
      "Beneficiary and program management systems",
      "Monitoring and evaluation dashboards",
      "Public portals and digital service platforms",
    ],
    technologies: ["Data Collection", "Dashboards", "Cloud", "Mobile"],
  },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Replace repetitive manual processes with structured digital workflows.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web & Mobile Platforms",
    description:
      "Provide secure access to staff, customers and field teams from any device.",
  },
  {
    icon: Database,
    title: "Connected Data",
    description:
      "Create one reliable source of information across departments and locations.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Turn operational activity into dashboards and management insights.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Tools",
    description:
      "Use automation and artificial intelligence to improve speed and accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Permissions",
    description:
      "Protect important information with secure access and role-based controls.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Understand the industry",
    description:
      "We study your operations, users, regulatory environment and commercial priorities.",
    icon: Target,
  },
  {
    number: "02",
    title: "Map the workflows",
    description:
      "We identify bottlenecks, information gaps and opportunities for digital improvement.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Design the solution",
    description:
      "We create an experience and technical architecture aligned with your industry.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Build for growth",
    description:
      "We develop, launch and improve a platform that can evolve with the organization.",
    icon: Rocket,
  },
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

function IndustryCard({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const Icon = industry.icon;

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
        delay: Math.min(index * 0.07, 0.28),
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-[#dfe8ed] bg-white shadow-[0_20px_65px_rgba(7,24,45,0.07)] transition duration-500 hover:-translate-y-2 hover:border-[#36b7f0]/50 hover:shadow-[0_30px_90px_rgba(7,24,45,0.13)]"
    >
      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/90 via-[#061524]/10 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#061524]/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
          {industry.category}
        </div>

        <div
          className={`absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white shadow-lg`}
        >
          <Icon size={22} />
        </div>

        <ArrowUpRight
          size={21}
          className="absolute bottom-6 right-6 text-white transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[#07182d]">
          {industry.name}
        </h3>

        <p className="mt-3 text-sm font-semibold text-[#267a9e]">
          {industry.tagline}
        </p>

        <p className="mt-4 text-sm leading-7 text-[#65717b]">
          {industry.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {industry.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#dce8ed] bg-[#f6fafb] px-3 py-1.5 text-[10px] font-bold text-[#64717b]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#e5ecef] pt-6">
          <div>
            <div className="text-2xl font-extrabold text-[#07182d]">
              {industry.stat}
            </div>

            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8b969e]">
              {industry.statLabel}
            </div>
          </div>

          <Link
            href={`/projects/industries-served/${industry.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#267a9e] transition hover:gap-3 hover:text-[#07182d]"
          >
            Explore
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function IndustriesServedPage() {
  const [activeCategory, setActiveCategory] =
    useState("All Industries");

  const [activeIndustrySlug, setActiveIndustrySlug] = useState(
    industries[0].slug,
  );

  const activeIndustry = useMemo(
    () =>
      industries.find(
        (industry) => industry.slug === activeIndustrySlug,
      ) ?? industries[0],
    [activeIndustrySlug],
  );

  const filteredIndustries = useMemo(() => {
    if (activeCategory === "All Industries") {
      return industries;
    }

    return industries.filter(
      (industry) => industry.category === activeCategory,
    );
  }, [activeCategory]);

  const ActiveIndustryIcon = activeIndustry.icon;

  return (
    <main className="overflow-hidden bg-[#f6f8f9] font-['Poppins',sans-serif] text-[#07182d]">
      {/* DARK BLUE-BLACK HERO */}
      <section className="relative isolate min-h-[790px] overflow-hidden bg-[#030d18] pb-32 pt-28 text-white sm:pt-32">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90"
          alt="Modern organization using digital technology"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-center opacity-35"
        />

        <div className="absolute inset-0 -z-20 bg-[#020a13]/80" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,10,19,0.99)_0%,rgba(5,23,40,0.94)_46%,rgba(4,34,57,0.65)_100%)]" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_30%,rgba(36,157,207,0.28),transparent_28%)]" />

        <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-[#0e7ea8]/15 blur-3xl" />

        <div className="absolute right-[-140px] bottom-0 h-[500px] w-[500px] rounded-full bg-[#36b7f0]/12 blur-3xl" />

        <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          {/* HERO CONTENT */}
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
            <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/55">
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
                Industries Served
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#36b7f0]/30 bg-[#36b7f0]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff] backdrop-blur-md">
              <Sparkles size={14} />
              Industry-focused digital transformation
            </div>

            <h1 className="mt-7 max-w-4xl text-[3.15rem] font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-[4.5rem] lg:text-[5.7rem]">
              TECHNOLOGY BUILT FOR{" "}
              <span className="font-light text-[#7fd7ff]">
                REAL INDUSTRIES.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              We design software around the realities of each industry,
              helping organizations improve operations, serve users
              better and make stronger decisions with reliable data.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#industries"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#36a7cf] px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(54,183,240,0.23)] transition hover:bg-[#267a9e]"
              >
                Explore industries

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267a9e] transition group-hover:translate-x-1 group-hover:bg-white/15">
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold transition hover:border-[#7fd7ff] hover:bg-white/10"
              >
                Discuss your industry
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* HERO INDUSTRY PANEL */}
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
            <div className="absolute -left-7 -top-7 h-full w-full rounded-[40px] border border-[#36b7f0]/20" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.07] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff]">
                    Cross-industry expertise
                  </p>

                  <h2 className="mt-3 text-2xl font-extrabold leading-tight">
                    One technology partner. Multiple industry
                    environments.
                  </h2>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#36b7f0] text-[#03101b]">
                  <Building2 size={26} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    value: "8",
                    label: "Industry groups",
                    icon: Building2,
                  },
                  {
                    value: "6",
                    label: "Core capabilities",
                    icon: Layers3,
                  },
                  {
                    value: "Web + Mobile",
                    label: "Digital channels",
                    icon: MonitorSmartphone,
                  },
                  {
                    value: "Secure",
                    label: "Technology foundation",
                    icon: ShieldCheck,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-white/10 bg-[#020a13]/45 p-5"
                    >
                      <Icon
                        size={18}
                        className="text-[#7fd7ff]"
                      />

                      <div className="mt-5 text-xl font-extrabold">
                        {item.value}
                      </div>

                      <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-3xl border border-[#36b7f0]/15 bg-[#36b7f0]/10 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#7fd7ff]"
                  />

                  <p className="text-sm font-semibold leading-7 text-white/75">
                    We adapt the product, workflow and technology to
                    your organization instead of forcing your operations
                    into a generic system.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HERO BOTTOM STATS */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#020a13]/65 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
            {[
              {
                value: "Industry-aware",
                label: "Product strategy",
              },
              {
                value: "User-centred",
                label: "Experience design",
              },
              {
                value: "Scalable",
                label: "System architecture",
              },
              {
                value: "Measurable",
                label: "Business improvement",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-6 sm:px-6"
              >
                <div className="text-sm font-extrabold text-white sm:text-base">
                  {stat.value}
                </div>

                <div className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/40 sm:text-[10px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative bg-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(54,183,240,0.08),transparent_28%)]" />

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
              eyebrow="Industry experience"
              title="Different sectors require different digital solutions."
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
              The processes that matter in healthcare are not the same
              as those in retail, education or transportation. We take
              time to understand the sector, the users and the
              operational environment before designing the technology.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Industry context",
                  text: "Solutions shaped around sector-specific realities.",
                },
                {
                  icon: Users,
                  title: "Real users",
                  text: "Interfaces designed for the people doing the work.",
                },
                {
                  icon: ShieldCheck,
                  title: "Risk awareness",
                  text: "Security and controls appropriate to the data.",
                },
                {
                  icon: LineChart,
                  title: "Business outcomes",
                  text: "Technology connected to measurable improvement.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#e0e8ec] bg-[#f8fafb] p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e3f7fd] text-[#267a9e]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-extrabold text-[#07182d]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#68747e]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE INDUSTRY SHOWCASE */}
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
              eyebrow="Industry spotlight"
              title="Explore how our solutions adapt."
            />

            <p className="max-w-xl text-base leading-8 text-[#66727c]">
              Select an industry to see the common operational
              challenges and the types of digital solutions we can
              deliver.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
            {/* INDUSTRY SELECTOR */}
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
              className="space-y-3"
            >
              {industries.map((industry) => {
                const Icon = industry.icon;
                const isActive =
                  activeIndustrySlug === industry.slug;

                return (
                  <button
                    key={industry.slug}
                    type="button"
                    onClick={() =>
                      setActiveIndustrySlug(industry.slug)
                    }
                    className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition duration-300 ${
                      isActive
                        ? "border-[#267a9e] bg-[#07182d] text-white shadow-[0_16px_40px_rgba(7,24,45,0.18)]"
                        : "border-[#d9e3e7] bg-white text-[#53606a] hover:border-[#36b7f0]/60"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          isActive
                            ? "bg-[#36b7f0] text-[#07182d]"
                            : "bg-[#e5f6fb] text-[#267a9e]"
                        }`}
                      >
                        <Icon size={19} />
                      </span>

                      <span className="text-sm font-bold">
                        {industry.shortName}
                      </span>
                    </span>

                    <ChevronRight
                      size={17}
                      className={
                        isActive
                          ? "text-[#7fd7ff]"
                          : "text-[#9ca6ad]"
                      }
                    />
                  </button>
                );
              })}
            </motion.div>

            {/* ACTIVE INDUSTRY */}
            <motion.div
              key={activeIndustry.slug}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="overflow-hidden rounded-[36px] border border-white bg-white shadow-[0_28px_90px_rgba(7,24,45,0.1)]"
            >
              <div className="relative h-[320px] overflow-hidden sm:h-[390px]">
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/95 via-[#061524]/15 to-transparent" />

                <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-[#061524]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  {activeIndustry.category}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff]">
                        {activeIndustry.tagline}
                      </p>

                      <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                        {activeIndustry.name}
                      </h3>
                    </div>

                    <div
                      className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activeIndustry.accent} sm:flex`}
                    >
                      <ActiveIndustryIcon size={25} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-base leading-8 text-[#65717b]">
                  {activeIndustry.description}
                </p>

                <div className="mt-8 grid gap-7 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                      Common challenges
                    </p>

                    <div className="mt-4 space-y-3">
                      {activeIndustry.challenges.map((challenge) => (
                        <div
                          key={challenge}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff1f1] text-[#b93a3a]">
                            <Check size={13} />
                          </span>

                          <p className="text-sm leading-6 text-[#59666f]">
                            {challenge}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                      Solutions we deliver
                    </p>

                    <div className="mt-4 space-y-3">
                      {activeIndustry.solutions.map((solution) => (
                        <div
                          key={solution}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f8fc] text-[#267a9e]">
                            <Check size={13} />
                          </span>

                          <p className="text-sm leading-6 text-[#59666f]">
                            {solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col justify-between gap-5 border-t border-[#e2e9ec] pt-7 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-2">
                    {activeIndustry.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#cfe4eb] bg-[#edf8fb] px-4 py-2 text-[11px] font-bold text-[#267a9e]"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>

                  <Link
                    href={`/projects/industries-served/${activeIndustry.slug}`}
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#267a9e] transition hover:gap-3 hover:text-[#07182d]"
                  >
                    Explore industry
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section
        id="industries"
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
              eyebrow="Industries we support"
              title="Digital solutions across growing sectors."
              description="Explore the industries where our software, mobile, cloud, automation and data capabilities can create practical value."
              centered
            />
          </motion.div>

          {/* FILTERS */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industryCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                    isActive
                      ? "border-[#267a9e] bg-[#267a9e] text-white shadow-[0_12px_30px_rgba(38,122,158,0.2)]"
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
            {filteredIndustries.map((industry, index) => (
              <IndustryCard
                key={industry.slug}
                industry={industry}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SHARED CAPABILITIES */}
      <section className="relative overflow-hidden bg-[#061524] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,183,240,0.16),transparent_42%)]" />

        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:52px_52px]" />

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
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-14 bg-[#7fd7ff]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#7fd7ff]">
                  Shared capabilities
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                Core technology that adapts to every sector.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/60 lg:justify-self-end">
              Although each industry has different needs, strong
              digital systems are built on the same foundations:
              usability, security, reliable data and scalable
              engineering.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <motion.div
                  key={capability.title}
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
                    delay: index * 0.07,
                  }}
                  className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition hover:border-[#36b7f0]/45 hover:bg-white/[0.09]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#36b7f0]/15 text-[#7fd7ff]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/58">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERY APPROACH */}
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
            <SectionHeading
              eyebrow="Our delivery approach"
              title="We learn the sector before building the system."
            />

            <p className="max-w-2xl text-base leading-8 text-[#66727c] lg:justify-self-end">
              Our approach ensures the final product fits the
              organization, the industry and the people who will use it
              every day.
            </p>
          </motion.div>

          <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#badce8] to-transparent lg:block" />

            {deliverySteps.map((step, index) => {
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
                    delay: index * 0.09,
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

      {/* WHY CROSS-INDUSTRY EXPERIENCE MATTERS */}
      <section className="relative overflow-hidden bg-[#edf3f5] py-24">
        <div className="absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#36b7f0]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
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
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85"
              alt="Business technology team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/95 via-[#061524]/15 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7fd7ff]">
                Knowledge across sectors
              </p>

              <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                Strong ideas from one industry can inspire innovation
                in another.
              </h3>
            </div>
          </motion.div>

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
            <SectionHeading
              eyebrow="Why it matters"
              title="Cross-industry experience creates stronger solutions."
            />

            <p className="mt-6 text-base leading-8 text-[#65717b]">
              Working across different sectors helps us identify proven
              patterns, avoid common mistakes and introduce useful ideas
              that may not yet be common in your industry.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "We recognize common operational problems more quickly.",
                "We apply proven workflows from related industries.",
                "We design flexible systems instead of narrow solutions.",
                "We balance industry requirements with modern user expectations.",
                "We create technology that can support future expansion.",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 rounded-2xl border border-[#dbe6ea] bg-white p-4"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#267a9e] text-white">
                    <Check size={15} />
                  </span>

                  <p className="text-sm font-semibold leading-7 text-[#4f5d68]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#020a13] py-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85"
          alt="Modern digital workplace"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#020a13]/86" />

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
            className="rounded-[38px] border border-white/12 bg-white/[0.06] p-8 backdrop-blur-xl sm:p-12 lg:p-16"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#36b7f0]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff]">
                  <Building2 size={15} />
                  Solutions for your sector
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Let&apos;s build technology that understands your
                  industry.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/62">
                  Tell us about your organization, the challenges you
                  face and the improvements you want the new system to
                  create.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[225px] items-center justify-center gap-3 rounded-full bg-[#36a7cf] px-7 py-4 text-sm font-bold transition hover:bg-[#267a9e]"
                >
                  Discuss your industry

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/projects/case-studies"
                  className="inline-flex min-w-[225px] items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold transition hover:border-[#7fd7ff] hover:bg-white/10"
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