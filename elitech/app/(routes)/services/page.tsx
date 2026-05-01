"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  LayoutDashboard,
  Paintbrush,
  Rocket,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import heroBg from "../../assets/hero-bg.png";
import aboutBg from "../../assets/about-bg.png";
import aboutImgOne from "../../assets/about-1.png";
import aboutImgTwo from "../../assets/about-2.png";
import aboutImgThree from "../../assets/about-3.png";
import contactBg from "../../assets/contact-bg.png";

const serviceSections = [
  {
    title: "Core Development",
    subtitle: "Build robust, scalable applications",
    icon: Code2,
    image: aboutImgOne,
    description:
      "We design and develop reliable digital products that help businesses operate efficiently, serve customers better, and scale with confidence.",
    services: [
      {
        name: "Web Development",
        href: "/service/web-development",
        icon: Globe,
        text: "Modern websites, web applications, dashboards, portals, and business platforms.",
      },
      {
        name: "Mobile App Development",
        href: "/service/mobile-app-development",
        icon: Smartphone,
        text: "High-quality mobile apps for Android, iOS, and cross-platform product experiences.",
      },
      {
        name: "Desktop Applications",
        href: "/service/desktop-applications",
        icon: LayoutDashboard,
        text: "Powerful desktop systems for internal operations, administration, and productivity.",
      },
      {
        name: "Custom Software",
        href: "/service/custom-software",
        icon: Code2,
        text: "Tailored software built around your exact workflow, business model, and users.",
      },
    ],
  },
  {
    title: "Emerging Technology",
    subtitle: "Cutting-edge solutions",
    icon: Brain,
    image: aboutImgTwo,
    description:
      "We help organizations adopt intelligent technologies that reduce manual work, improve decision-making, and create smarter systems.",
    services: [
      {
        name: "AI Solutions",
        href: "/service/ai-solutions",
        icon: Brain,
        text: "AI-powered tools, assistants, recommendation systems, and intelligent automation.",
      },
      {
        name: "Machine Learning",
        href: "/service/machine-learning",
        icon: Cpu,
        text: "Predictive models, classification systems, data intelligence, and analytics workflows.",
      },
      {
        name: "Automation Systems",
        href: "/service/automation-systems",
        icon: Zap,
        text: "Automated workflows that reduce repetitive tasks and improve business speed.",
      },
      {
        name: "Cloud Integration",
        href: "/service/cloud-integration",
        icon: Cloud,
        text: "Cloud-based deployment, storage, APIs, infrastructure, and scalable system integration.",
      },
    ],
  },
  {
    title: "Design & Support",
    subtitle: "Creative and reliable support",
    icon: Paintbrush,
    image: aboutImgThree,
    description:
      "We combine strong design thinking with ongoing technical support to keep your digital products attractive, stable, and useful.",
    services: [
      {
        name: "UI/UX Design",
        href: "/service/ui-ux-design",
        icon: Paintbrush,
        text: "Clean, modern, user-friendly interfaces designed for better digital experiences.",
      },
      {
        name: "Web Design",
        href: "/service/web-design",
        icon: LayoutDashboard,
        text: "Professional website design with strong visuals, responsive layouts, and clear branding.",
      },
      {
        name: "Maintenance & Support",
        href: "/service/maintenance-support",
        icon: Shield,
        text: "Ongoing monitoring, bug fixes, technical assistance, and system improvements.",
      },
      {
        name: "System Upgrades",
        href: "/service/system-upgrades",
        icon: Rocket,
        text: "Modernization of existing platforms, performance improvements, and feature upgrades.",
      },
    ],
  },
];

const processSteps = [
  {
    title: "Discover",
    text: "We understand your business, your users, your current challenges, and the result you want to achieve.",
  },
  {
    title: "Design",
    text: "We plan the solution architecture, user experience, technical flow, and core product features.",
  },
  {
    title: "Develop",
    text: "We build the software using clean, scalable, and maintainable development practices.",
  },
  {
    title: "Deploy & Support",
    text: "We launch the product, monitor performance, provide updates, and support long-term growth.",
  },
];

function Services() {
  return (
    <main className="relative overflow-hidden bg-white font-['Poppins',sans-serif]">
      {/* HERO SECTION */}
      <section className="relative min-h-[78vh] overflow-hidden bg-[#061524]">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Elitech Dev services hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#061524]/84" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,14,35,0.96)_0%,rgba(3,14,35,0.78)_48%,rgba(3,14,35,0.50)_100%)]" />
        </div>

        <div className="pointer-events-none absolute -left-28 top-36 h-96 w-96 rounded-full bg-[#36B7F0]/12 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-10 h-96 w-96 rounded-full bg-[#267A9E]/12 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-4 flex items-center gap-4">
              <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                Elitech Dev Services
              </span>
              <span className="h-px w-28 bg-[#36B7F0]/75" />
            </div>

            <h1 className="text-[3rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-[4.2rem] lg:text-[5.3rem]">
              SOFTWARE
              <br />
              SERVICES FOR
              <br />
              GROWING BRANDS
            </h1>

            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-[16px]">
              We provide software development, AI solutions, automation,
              cloud integration, UI/UX design, web design, technical support,
              and custom digital systems for businesses and institutions.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#36A7CF] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_16px_40px_rgba(54,183,240,0.24)] transition-all duration-300 hover:bg-[#267A9E]"
              >
                Start A Project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267A9E] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                  <ArrowRight size={15} />
                </span>
              </Link>

              <Link
                href="#service-list"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 transition-all duration-300 hover:text-[#36B7F0]"
              >
                View All Services
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Services background"
            fill
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#267A9E]">
                  What We Do
                </span>
                <span className="h-px w-24 bg-[#267A9E]/75" />
              </div>

              <h2 className="text-[2.3rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.7rem]">
                COMPLETE DIGITAL{" "}
                <span className="font-light tracking-[-0.05em]">
                  SOLUTIONS
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                Elitech Dev helps businesses move from manual, disconnected,
                and outdated processes into modern digital systems. Whether you
                need a simple website, a full business platform, an AI-powered
                tool, or long-term technical support, we build with clarity,
                performance, and growth in mind.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Scalable product architecture",
                  "Modern user interfaces",
                  "Secure backend systems",
                  "Reliable technical support",
                  "Business-focused automation",
                  "Cloud-ready deployment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#267A9E]" />
                    <span className="text-[14px] font-medium text-[#303847]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -right-5 -top-5 h-[82%] w-[82%] border-2 border-[#b62c2c]/75" />

              <div className="relative h-[470px] overflow-hidden shadow-[0_24px_65px_rgba(20,26,71,0.18)]">
                <Image
                  src={aboutImgOne}
                  alt="Elitech Dev service presentation"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section id="service-list" className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-24 bg-[#267A9E]/70" />
              <span className="text-[12px] font-bold uppercase tracking-wide text-[#267A9E]">
                Our Capabilities
              </span>
              <span className="h-px w-24 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.2rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.5rem]">
              SERVICES WE{" "}
              <span className="font-light tracking-[-0.05em]">PROVIDE</span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#606875]">
              Our services are grouped into three key areas: development,
              emerging technology, and design/support.
            </p>
          </motion.div>

          <div className="space-y-20">
            {serviceSections.map((section, sectionIndex) => {
              const SectionIcon = section.icon;

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch"
                >
                  {/* Category panel */}
                  <div className="relative min-h-[420px] overflow-hidden bg-[#061524] p-8">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-[#061524]/78" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,21,36,0.40)_0%,rgba(6,21,36,0.96)_100%)]" />

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-white bg-[#e6f8fd]">
                          <SectionIcon size={27} className="text-[#267A9E]" />
                        </div>

                        <p className="mt-8 text-[12px] font-bold uppercase tracking-wide text-[#36B7F0]">
                          0{sectionIndex + 1}
                        </p>

                        <h3 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-[-0.04em] text-white">
                          {section.title}
                        </h3>

                        <p className="mt-3 text-[14px] font-medium text-[#7fd7ff]">
                          {section.subtitle}
                        </p>

                        <p className="mt-6 text-[14px] leading-7 text-white/72">
                          {section.description}
                        </p>
                      </div>

                      <Link
                        href="/contact"
                        className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#36A7CF] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#267A9E]"
                      >
                        Discuss This Area
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Service cards */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {section.services.map((service, index) => {
                      const Icon = service.icon;

                      return (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, y: 25 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.08,
                            duration: 0.55,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8 }}
                          className="group border border-gray-200 bg-white p-7 shadow-[0_16px_45px_rgba(20,26,71,0.08)] transition-all duration-300 hover:border-[#36B7F0]/55"
                        >
                          <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#e6f8fd]">
                            <Icon
                              size={25}
                              className="text-[#267A9E] transition duration-300 group-hover:scale-110"
                            />
                          </div>

                          <h4 className="mt-6 text-[1.25rem] font-extrabold leading-tight tracking-[-0.03em] text-[#07182d]">
                            {service.name}
                          </h4>

                          <p className="mt-4 text-[14px] leading-7 text-[#606875]">
                            {service.text}
                          </p>

                          <Link
                            href={service.href}
                            className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[#267A9E] transition-all duration-300 hover:gap-3 hover:text-[#034663]"
                          >
                            Learn More
                            <ArrowRight size={14} />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative overflow-hidden bg-[#061524] py-24">
        <div className="absolute inset-0">
          <Image
            src={contactBg}
            alt="Our process background"
            fill
            className="object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-[#061524]/94" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,183,240,0.14),transparent_42%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-24 bg-[#36B7F0]/70" />
              <span className="text-[12px] font-bold uppercase tracking-wide text-[#36B7F0]">
                Our Process
              </span>
              <span className="h-px w-24 bg-[#36B7F0]/70" />
            </div>

            <h2 className="text-[2.2rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[3.5rem]">
              HOW WE{" "}
              <span className="font-light tracking-[-0.05em]">DELIVER</span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-white/70">
              We follow a clear process so that every project moves from idea
              to launch with structure and confidence.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:border-[#36B7F0]/55"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f8fd] text-[18px] font-extrabold text-[#267A9E]">
                  {index + 1}
                </div>

                <h3 className="text-[1.25rem] font-extrabold tracking-[-0.03em] text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-white/65">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#267A9E]">
                  Why Choose Us
                </span>
                <span className="h-px w-24 bg-[#267A9E]/75" />
              </div>

              <h2 className="text-[2.3rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.7rem]">
                BUILT FOR{" "}
                <span className="font-light tracking-[-0.05em]">
                  REAL BUSINESS
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                We do not only build beautiful interfaces. We build systems that
                solve operational problems, improve customer experience, and
                support business growth.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Secure Systems",
                    text: "We consider security, reliability, and data protection from the start.",
                  },
                  {
                    icon: Database,
                    title: "Scalable Architecture",
                    text: "Your product is structured to grow as your users and operations grow.",
                  },
                  {
                    icon: Sparkles,
                    title: "Modern Experience",
                    text: "We design clean, professional interfaces that users can understand quickly.",
                  },
                  {
                    icon: Users,
                    title: "Client Partnership",
                    text: "We work closely with you from planning through delivery and support.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="border border-gray-200 bg-white p-5 shadow-[0_14px_35px_rgba(20,26,71,0.07)]"
                    >
                      <Icon size={24} className="text-[#267A9E]" />
                      <h3 className="mt-4 text-[16px] font-bold text-[#07182d]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-6 text-[#606875]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-5 -top-5 h-[82%] w-[82%] border-2 border-[#b62c2c]/75" />

              <div className="relative h-[520px] overflow-hidden shadow-[0_24px_65px_rgba(20,26,71,0.18)]">
                <Image
                  src={aboutImgThree}
                  alt="Elitech Dev team delivering services"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#061524] py-24">
        <div className="absolute inset-0">
          <Image
            src={contactBg}
            alt="Start project with Elitech Dev"
            fill
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[#061524]/82" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,21,36,0.48)_0%,rgba(6,21,36,0.86)_52%,rgba(6,21,36,0.98)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[300px] items-center lg:grid-cols-2">
            <div className="hidden lg:block" />

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                  Let’s Build
                </span>
                <span className="h-px w-28 bg-[#36B7F0]/75" />
              </div>

              <h2 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]">
                NEED A{" "}
                <span className="font-light tracking-[-0.06em]">
                  SERVICE?
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/84">
                Tell us what you want to build, improve, automate, or redesign.
                We will help you choose the right technical direction and build
                a solution that works.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#36A7CF] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_16px_40px_rgba(54,183,240,0.24)] transition-all duration-300 hover:bg-[#267A9E]"
                >
                  Contact Us Now
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267A9E] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;