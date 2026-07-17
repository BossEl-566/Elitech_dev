"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Handshake,
  HeartPulse,
  Layers3,
  LineChart,
  MessageSquareQuote,
  MonitorSmartphone,
  Quote,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Truck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type SuccessStory = {
  slug: string;
  client: string;
  industry: string;
  category: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  testimonial: string;
  person: string;
  role: string;
  image: string;
  personImage: string;
  icon: LucideIcon;
  accent: string;
  services: string[];
  technologies: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
  featured?: boolean;
};

const categories = [
  "All Stories",
  "Business",
  "Education",
  "Healthcare",
  "E-commerce",
  "Logistics",
  "AI & Automation",
];

const successStories: SuccessStory[] = [
  {
    slug: "apex-operations-transformation",
    client: "Apex Operations Group",
    industry: "Professional Services",
    category: "Business",
    title: "From disconnected processes to one complete business platform.",
    summary:
      "A centralized management system that brought customers, projects, finance, staff activity and reporting into one reliable digital environment.",
    challenge:
      "The organization relied on spreadsheets, messaging platforms and separate tools across multiple departments. Management had limited visibility, approvals were slow and reports took too long to prepare.",
    solution:
      "Elitech Dev designed and developed a role-based business management platform with workflow automation, dashboards, customer records, project tracking and consolidated reporting.",
    testimonial:
      "The platform has completely changed the way our teams work together. We now have clear visibility across the business and can make decisions much faster.",
    person: "Daniel Mensah",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
    personImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85",
    icon: BriefcaseBusiness,
    accent: "from-[#36b7f0] to-[#267a9e]",
    services: [
      "Product Strategy",
      "UI/UX Design",
      "Custom Software Development",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Cloud"],
    metrics: [
      {
        value: "46%",
        label: "Less manual administration",
      },
      {
        value: "61%",
        label: "Faster reporting",
      },
      {
        value: "1",
        label: "Central source of data",
      },
    ],
    featured: true,
  },
  {
    slug: "brightpath-school-digitalization",
    client: "BrightPath Academy",
    industry: "Education",
    category: "Education",
    title: "A connected school experience for staff, students and parents.",
    summary:
      "A modern school management platform supporting admissions, attendance, fees, results, communication and academic administration.",
    challenge:
      "The school managed student records, attendance, fees and results manually. Parents had limited access to information and staff spent significant time preparing reports.",
    solution:
      "We built connected portals for administrators, teachers, students and parents, supported by automated notifications, academic reporting and secure record management.",
    testimonial:
      "Our teachers spend less time on paperwork, parents receive information faster and our management team can access accurate reports whenever they need them.",
    person: "Linda Owusu",
    role: "School Administrator",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85",
    personImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85",
    icon: GraduationCap,
    accent: "from-[#5578ff] to-[#30469e]",
    services: [
      "System Architecture",
      "Portal Development",
      "Cloud Deployment",
    ],
    technologies: ["React", "Laravel", "MySQL", "Notifications"],
    metrics: [
      {
        value: "74%",
        label: "Faster result processing",
      },
      {
        value: "4",
        label: "Connected user portals",
      },
      {
        value: "24/7",
        label: "Secure record access",
      },
    ],
  },
  {
    slug: "wellcare-patient-experience",
    client: "WellCare Medical Centre",
    industry: "Healthcare",
    category: "Healthcare",
    title: "Improving patient service with a secure digital workflow.",
    summary:
      "A healthcare operations system for patient records, appointments, billing, staff coordination and management reporting.",
    challenge:
      "Manual appointment booking and fragmented patient records caused delays, duplicate information and significant administrative pressure.",
    solution:
      "Elitech Dev delivered a secure platform with appointment scheduling, patient records, billing workflows, staff permissions and operational dashboards.",
    testimonial:
      "The new system has reduced pressure on our front desk and made patient information much easier to manage securely.",
    person: "Dr. Nana Boateng",
    role: "Medical Director",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
    personImage:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=85",
    icon: HeartPulse,
    accent: "from-[#2ac7a3] to-[#117e72]",
    services: [
      "Workflow Design",
      "Secure Development",
      "Reporting Systems",
    ],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    metrics: [
      {
        value: "39%",
        label: "Faster patient check-in",
      },
      {
        value: "48%",
        label: "Less administrative time",
      },
      {
        value: "100%",
        label: "Role-based access",
      },
    ],
  },
  {
    slug: "urbanmarket-commerce-growth",
    client: "UrbanMarket Retail",
    industry: "Retail and E-commerce",
    category: "E-commerce",
    title: "Turning an offline retail operation into a connected commerce brand.",
    summary:
      "A conversion-focused e-commerce platform integrating products, inventory, payments, customer communication and order fulfilment.",
    challenge:
      "The company had a growing customer base but relied heavily on social media and manual order processing. Inventory and delivery information were difficult to coordinate.",
    solution:
      "We created a responsive online store and operations dashboard with payment integration, inventory updates, order tracking and customer notifications.",
    testimonial:
      "We now have a professional online sales channel and a much clearer process for managing orders from payment to delivery.",
    person: "Sarah Addo",
    role: "Founder and CEO",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
    personImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=85",
    icon: ShoppingCart,
    accent: "from-[#ff9f43] to-[#c76516]",
    services: [
      "E-commerce Design",
      "Payment Integration",
      "Admin Dashboard",
    ],
    technologies: ["Next.js", "TypeScript", "Paystack", "Supabase"],
    metrics: [
      {
        value: "33%",
        label: "Higher conversion rate",
      },
      {
        value: "2.4x",
        label: "Faster fulfilment",
      },
      {
        value: "24/7",
        label: "Online sales access",
      },
    ],
  },
  {
    slug: "swiftline-logistics-visibility",
    client: "SwiftLine Logistics",
    industry: "Transportation and Logistics",
    category: "Logistics",
    title: "Real-time visibility across deliveries and field operations.",
    summary:
      "A logistics platform that connects dispatch teams, drivers, delivery records, location updates and performance reporting.",
    challenge:
      "Dispatchers depended on phone calls and messaging applications to receive updates from drivers, making delivery tracking unreliable.",
    solution:
      "We built a web and mobile platform with assignments, location-aware updates, proof of delivery, route monitoring and management dashboards.",
    testimonial:
      "Our dispatch team can now see what is happening in the field without making continuous calls. Customers also receive better updates.",
    person: "Michael Asare",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85",
    personImage:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=85",
    icon: Truck,
    accent: "from-[#38bdf8] to-[#075985]",
    services: [
      "Mobile App Development",
      "Tracking Integration",
      "Operations Dashboard",
    ],
    technologies: ["React Native", "Node.js", "Maps", "Firebase"],
    metrics: [
      {
        value: "44%",
        label: "Faster field updates",
      },
      {
        value: "80%",
        label: "Less paper reporting",
      },
      {
        value: "24/7",
        label: "Delivery visibility",
      },
    ],
  },
  {
    slug: "insightpro-ai-automation",
    client: "InsightPro Consulting",
    industry: "Professional Services",
    category: "AI & Automation",
    title: "Automating repetitive document work without losing human control.",
    summary:
      "An AI-assisted workspace for document classification, information extraction, summaries and intelligent task routing.",
    challenge:
      "Consultants spent significant time reviewing similar documents, copying data and manually preparing initial summaries.",
    solution:
      "We created an AI-assisted system combining document intelligence, automated workflows and human validation checkpoints.",
    testimonial:
      "The system handles the repetitive first stage of our review process, allowing our consultants to focus on analysis and client work.",
    person: "Rebecca Tetteh",
    role: "Senior Partner",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85",
    personImage:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=85",
    icon: BrainCircuit,
    accent: "from-[#a06dff] to-[#5631a9]",
    services: [
      "AI Discovery",
      "Workflow Automation",
      "Systems Integration",
    ],
    technologies: ["Python", "LLM APIs", "Vector Database", "React"],
    metrics: [
      {
        value: "58%",
        label: "Less document review time",
      },
      {
        value: "3x",
        label: "More documents processed",
      },
      {
        value: "92%",
        label: "Extraction accuracy",
      },
    ],
  },
];

const partnershipValues = [
  {
    icon: Users,
    title: "We work with your team",
    description:
      "Stakeholders are involved throughout discovery, design, development and testing.",
  },
  {
    icon: Target,
    title: "We focus on the outcome",
    description:
      "Every major feature is connected to a clear operational or commercial objective.",
  },
  {
    icon: MessageSquareQuote,
    title: "We communicate clearly",
    description:
      "Clients receive regular updates, demos and transparent visibility into project progress.",
  },
  {
    icon: ShieldCheck,
    title: "We build responsibly",
    description:
      "Security, data integrity, maintainability and long-term support are considered from the beginning.",
  },
];

const results = [
  {
    icon: Workflow,
    value: "40%+",
    label: "Typical reduction in manual workflows",
  },
  {
    icon: TrendingUp,
    value: "2x",
    label: "Potential improvement in processing speed",
  },
  {
    icon: Users,
    value: "4",
    label: "User groups connected in one platform",
  },
  {
    icon: Cloud,
    value: "24/7",
    label: "Secure access to important systems",
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
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
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

function StoryCard({
  story,
  index,
}: {
  story: SuccessStory;
  index: number;
}) {
  const Icon = story.icon;

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
      <div className="relative h-[265px] overflow-hidden">
        <Image
          src={story.image}
          alt={story.client}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/90 via-[#061524]/10 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#061524]/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
          {story.category}
        </div>

        <div
          className={`absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${story.accent} text-white shadow-lg`}
        >
          <Icon size={22} />
        </div>

        <ArrowUpRight
          size={20}
          className="absolute bottom-6 right-6 text-white transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#267a9e]">
          {story.client}
        </p>

        <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#07182d]">
          {story.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#65717b]">
          {story.summary}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2 border-y border-[#e5ecef] py-5">
          {story.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-lg font-extrabold text-[#07182d]">
                {metric.value}
              </div>

              <div className="mt-1 text-[9px] font-bold uppercase leading-4 tracking-wide text-[#8b969e]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src={story.personImage}
              alt={story.person}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-extrabold text-[#07182d]">
              {story.person}
            </p>

            <p className="text-[11px] text-[#86919a]">
              {story.role}
            </p>
          </div>
        </div>

        <div className="mt-auto pt-7">
          <Link
            href={`/projects/client-success-stories/${story.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#267a9e] transition hover:gap-3 hover:text-[#07182d]"
          >
            Read client story
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ClientSuccessStoriesPage() {
  const [activeCategory, setActiveCategory] =
    useState("All Stories");

  const [activeStorySlug, setActiveStorySlug] = useState(
    successStories[0].slug,
  );

  const featuredStory =
    successStories.find((story) => story.featured) ??
    successStories[0];

  const activeStory = useMemo(
    () =>
      successStories.find(
        (story) => story.slug === activeStorySlug,
      ) ?? successStories[0],
    [activeStorySlug],
  );

  const filteredStories = useMemo(() => {
    if (activeCategory === "All Stories") {
      return successStories;
    }

    return successStories.filter(
      (story) => story.category === activeCategory,
    );
  }, [activeCategory]);

  const FeaturedIcon = featuredStory.icon;
  const ActiveIcon = activeStory.icon;

  return (
    <main className="overflow-hidden bg-[#f6f8f9] font-['Poppins',sans-serif] text-[#07182d]">
      {/* DARK HERO */}
      <section className="relative isolate min-h-[800px] overflow-hidden bg-[#020a13] pb-32 pt-28 text-white sm:pt-32">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90"
          alt="Client and software team collaboration"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-center opacity-40"
        />

        <div className="absolute inset-0 -z-20 bg-[#020a13]/82" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,10,19,0.99)_0%,rgba(4,22,39,0.95)_48%,rgba(5,40,64,0.62)_100%)]" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_30%,rgba(54,183,240,0.27),transparent_28%)]" />

        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[#267a9e]/15 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#36b7f0]/12 blur-3xl" />

        <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
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
                Client Success Stories
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#36b7f0]/30 bg-[#36b7f0]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff] backdrop-blur-md">
              <Sparkles size={14} />
              Real partnerships. Measurable outcomes.
            </div>

            <h1 className="mt-7 max-w-4xl text-[3.1rem] font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-[4.5rem] lg:text-[5.6rem]">
              SUCCESS BUILT{" "}
              <span className="font-light text-[#7fd7ff]">
                TOGETHER.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Discover how organizations have worked with Elitech Dev
              to improve operations, serve users better and create
              stronger digital foundations for growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#success-stories"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#36a7cf] px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(54,183,240,0.23)] transition hover:bg-[#267a9e]"
              >
                Explore success stories

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267a9e] transition group-hover:translate-x-1 group-hover:bg-white/15">
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold transition hover:border-[#7fd7ff] hover:bg-white/10"
              >
                Start your success story
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* HERO TESTIMONIAL PANEL */}
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

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.07] p-7 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff]">
                    Featured client
                  </p>

                  <h2 className="mt-3 text-2xl font-extrabold leading-tight">
                    {featuredStory.client}
                  </h2>
                </div>

                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${featuredStory.accent}`}
                >
                  <FeaturedIcon size={25} />
                </div>
              </div>

              <div className="mt-7 rounded-[28px] border border-white/10 bg-[#020a13]/45 p-6">
                <Quote
                  size={30}
                  className="text-[#7fd7ff]"
                />

                <p className="mt-5 text-base font-semibold leading-8 text-white/82">
                  “{featuredStory.testimonial}”
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20">
                    <Image
                      src={featuredStory.personImage}
                      alt={featuredStory.person}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-extrabold">
                      {featuredStory.person}
                    </p>

                    <p className="text-xs text-white/48">
                      {featuredStory.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {featuredStory.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <div className="text-xl font-extrabold text-white">
                      {metric.value}
                    </div>

                    <div className="mt-1 text-[9px] uppercase leading-4 tracking-wide text-white/40">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* HERO STATS */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#020a13]/65 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
            {[
              {
                value: "Collaborative",
                label: "Delivery approach",
              },
              {
                value: "Transparent",
                label: "Project communication",
              },
              {
                value: "Measurable",
                label: "Business outcomes",
              },
              {
                value: "Long-term",
                label: "Client partnerships",
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
              eyebrow="Client partnerships"
              title="The strongest digital products are built through collaboration."
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
              Our clients understand their businesses. We bring product
              strategy, design and engineering experience. By combining
              both perspectives, we create systems that solve real
              operational problems and support long-term growth.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Handshake,
                  title: "Shared ownership",
                  text: "Clients remain involved in important product decisions.",
                },
                {
                  icon: MessageSquareQuote,
                  title: "Open communication",
                  text: "Regular updates, demos and clear project visibility.",
                },
                {
                  icon: Target,
                  title: "Defined outcomes",
                  text: "Every solution is connected to a measurable objective.",
                },
                {
                  icon: Rocket,
                  title: "Long-term growth",
                  text: "Systems designed to support future expansion.",
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

      {/* FEATURED STORY */}
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
              eyebrow="Featured success story"
              title="A business transformation built around clarity."
            />

            <p className="max-w-xl text-base leading-8 text-[#66727c]">
              See how one organization moved from fragmented processes
              to a connected business platform that supports faster
              decisions.
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
              <div className="relative min-h-[540px] overflow-hidden lg:min-h-[700px]">
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.client}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/95 via-[#061524]/15 to-transparent" />

                <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/20 bg-[#061524]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  <Award size={15} />
                  Featured partnership
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7fd7ff]">
                    {featuredStory.industry}
                  </p>

                  <h3 className="mt-3 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
                    {featuredStory.client}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                    {featuredStory.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                    The challenge
                  </p>

                  <p className="mt-4 text-base leading-8 text-[#5f6b75]">
                    {featuredStory.challenge}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#e3eaed] pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                    The solution
                  </p>

                  <p className="mt-4 text-base leading-8 text-[#5f6b75]">
                    {featuredStory.solution}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {featuredStory.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-[#e0e8ec] bg-[#f6f9fa] p-4"
                    >
                      <div className="text-2xl font-extrabold text-[#07182d]">
                        {metric.value}
                      </div>

                      <div className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-wide text-[#7f8b95]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[26px] bg-[#07182d] p-6 text-white">
                  <Quote
                    size={25}
                    className="text-[#7fd7ff]"
                  />

                  <p className="mt-4 text-sm font-semibold leading-7 text-white/80">
                    “{featuredStory.testimonial}”
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full">
                      <Image
                        src={featuredStory.personImage}
                        alt={featuredStory.person}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold">
                        {featuredStory.person}
                      </p>

                      <p className="text-[11px] text-white/45">
                        {featuredStory.role}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/projects/client-success-stories/${featuredStory.slug}`}
                  className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#267a9e] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#07182d] lg:mt-auto"
                >
                  Read the full success story

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

      {/* INTERACTIVE STORY SELECTOR */}
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
            className="mb-12"
          >
            <SectionHeading
              eyebrow="Client voices"
              title="Hear directly from the people we support."
              description="Select a client to explore their challenge, the solution delivered and the result created."
            />
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
            {/* SELECTOR */}
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
              {successStories.map((story) => {
                const Icon = story.icon;
                const isActive = activeStorySlug === story.slug;

                return (
                  <button
                    key={story.slug}
                    type="button"
                    onClick={() => setActiveStorySlug(story.slug)}
                    className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition duration-300 ${
                      isActive
                        ? "border-[#267a9e] bg-[#07182d] text-white shadow-[0_16px_40px_rgba(7,24,45,0.18)]"
                        : "border-[#d9e3e7] bg-[#f8fafb] text-[#53606a] hover:border-[#36b7f0]/60 hover:bg-white"
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

                      <span>
                        <span className="block text-sm font-bold">
                          {story.client}
                        </span>

                        <span
                          className={`mt-1 block text-[10px] ${
                            isActive
                              ? "text-white/45"
                              : "text-[#929ca4]"
                          }`}
                        >
                          {story.category}
                        </span>
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

            {/* ACTIVE STORY */}
            <motion.article
              key={activeStory.slug}
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
              className="overflow-hidden rounded-[36px] border border-[#e0e8ec] bg-[#f8fafb] shadow-[0_28px_90px_rgba(7,24,45,0.08)]"
            >
              <div className="relative h-[310px] overflow-hidden sm:h-[380px]">
                <Image
                  src={activeStory.image}
                  alt={activeStory.client}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061524]/95 via-[#061524]/15 to-transparent" />

                <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-[#061524]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  {activeStory.industry}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7fd7ff]">
                        Client success story
                      </p>

                      <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                        {activeStory.client}
                      </h3>
                    </div>

                    <div
                      className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activeStory.accent} sm:flex`}
                    >
                      <ActiveIcon size={25} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <h4 className="text-2xl font-extrabold leading-tight tracking-[-0.04em] text-[#07182d]">
                  {activeStory.title}
                </h4>

                <p className="mt-5 text-base leading-8 text-[#65717b]">
                  {activeStory.summary}
                </p>

                <div className="mt-8 grid gap-7 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                      What they needed
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#59666f]">
                      {activeStory.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#267a9e]">
                      What we delivered
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#59666f]">
                      {activeStory.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-[26px] border border-[#dce7eb] bg-white p-6">
                  <div className="flex items-start gap-4">
                    <Quote
                      size={24}
                      className="shrink-0 text-[#267a9e]"
                    />

                    <div>
                      <p className="text-sm font-semibold leading-7 text-[#4f5d67]">
                        “{activeStory.testimonial}”
                      </p>

                      <div className="mt-5 flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={activeStory.personImage}
                            alt={activeStory.person}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-extrabold text-[#07182d]">
                            {activeStory.person}
                          </p>

                          <p className="text-[11px] text-[#8c969e]">
                            {activeStory.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col justify-between gap-5 border-t border-[#e2e9ec] pt-7 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap gap-2">
                    {activeStory.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#cfe4eb] bg-[#edf8fb] px-4 py-2 text-[11px] font-bold text-[#267a9e]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/client-success-stories/${activeStory.slug}`}
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#267a9e] transition hover:gap-3 hover:text-[#07182d]"
                  >
                    Read full story
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* STORIES GRID */}
      <section
        id="success-stories"
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
              eyebrow="More client stories"
              title="Results across different industries."
              description="Browse stories from organizations using digital products to improve operations, customer service and decision-making."
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
            {filteredStories.map((story, index) => (
              <StoryCard
                key={story.slug}
                story={story}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* RESULTS */}
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
                  Client outcomes
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                Success means creating visible improvement.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/60 lg:justify-self-end">
              We evaluate our work by how effectively the product
              improves speed, access, visibility, customer service and
              operational control.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result, index) => {
              const Icon = result.icon;

              return (
                <motion.div
                  key={result.label}
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
                  className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#36b7f0]/15 text-[#7fd7ff]">
                    <Icon size={22} />
                  </div>

                  <div className="mt-7 text-4xl font-extrabold">
                    {result.value}
                  </div>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {result.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-[11px] text-white/35">
            Figures shown are illustrative presentation metrics and
            should be replaced with verified client data before
            publishing.
          </p>
        </div>
      </section>

      {/* PARTNERSHIP VALUES */}
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
          >
            <SectionHeading
              eyebrow="How we work with clients"
              title="A partnership built on clarity and trust."
              description="Successful technology delivery requires more than technical skills. It requires shared responsibility, honest communication and attention to the client’s real objectives."
              centered
            />
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partnershipValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
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
                  className="rounded-[28px] border border-[#e0e8ec] bg-[#f8fafb] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#36b7f0]/55 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#07182d] text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-[-0.03em]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#69757f]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL TESTIMONIAL */}
      <section className="relative overflow-hidden bg-[#edf3f5] py-24">
        <div className="absolute -right-32 top-[-120px] h-[420px] w-[420px] rounded-full bg-[#36b7f0]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            className="rounded-[38px] border border-white bg-white p-8 text-center shadow-[0_30px_100px_rgba(7,24,45,0.1)] sm:p-12 lg:p-16"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#e3f7fd] text-[#267a9e]">
              <Quote size={30} />
            </div>

            <div className="mt-8 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  fill="currentColor"
                  className="text-[#f4b740]"
                />
              ))}
            </div>

            <blockquote className="mx-auto mt-7 max-w-4xl text-2xl font-extrabold leading-relaxed tracking-[-0.035em] text-[#07182d] sm:text-3xl">
              “Elitech Dev did more than deliver software. They took
              time to understand how we work and created a platform that
              our team could adopt confidently.”
            </blockquote>

            <div className="mt-8">
              <p className="font-extrabold text-[#07182d]">
                Client Partnership Feedback
              </p>

              <p className="mt-1 text-sm text-[#7c8790]">
                Business management implementation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#020a13] py-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85"
          alt="Client discussing a software project"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#020a13]/87" />

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
                  <Rocket size={15} />
                  Your success story starts here
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Let&apos;s create a digital solution your team will
                  value.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/62">
                  Tell us about the challenge, the people affected and
                  the result you want your organization to achieve.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[230px] items-center justify-center gap-3 rounded-full bg-[#36a7cf] px-7 py-4 text-sm font-bold transition hover:bg-[#267a9e]"
                >
                  Start a conversation

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/projects/case-studies"
                  className="inline-flex min-w-[230px] items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold transition hover:border-[#7fd7ff] hover:bg-white/10"
                >
                  Explore case studies
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