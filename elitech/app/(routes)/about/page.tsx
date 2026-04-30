"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  Code2,
  Cpu,
  Globe,
  HeartHandshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

import heroBg from "../../assets/hero-bg-about.png";
import aboutBg from "../../assets/aboutpage-bg.png";
import aboutImgOne from "../../assets/aboutpage-1.png";
import aboutImgTwo from "../../assets/aboutpage-2.png";
import aboutImgThree from "../../assets/aboutpage-3.png";
import founderImg from "../../assets/founder-ceo.jpeg";
import contactBg from "../../assets/contact-bg.png";

const stats = [
  {
    icon: Code2,
    value: "50+",
    label: "Digital Solutions",
  },
  {
    icon: Users,
    value: "30+",
    label: "Businesses Supported",
  },
  {
    icon: Globe,
    value: "5+",
    label: "Industries Served",
  },
  {
    icon: Award,
    value: "100%",
    label: "Client-Focused Delivery",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We think beyond ordinary software. Every solution is designed to solve real problems, improve processes, and create measurable value.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We build systems with performance, security, maintainability, and long-term stability in mind.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work closely with clients as technology partners, not just service providers. Your goals shape the solution.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description:
      "Our work is focused on helping businesses scale through better systems, smarter workflows, and stronger digital presence.",
  },
];

const expertise = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "AI Solutions",
  "Automation Systems",
  "Cloud Integration",
  "UI/UX Design",
  "Business Systems",
];

function About() {
  return (
    <main className="relative overflow-hidden bg-white font-['Poppins',sans-serif]">
      {/* HERO SECTION */}
      <section className="relative min-h-[82vh] overflow-hidden bg-[#061524]">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Elitech Dev about hero background"
            fill
            priority
            className="object-cover"
          />

          {/* dark overlays because header is transparent */}
          <div className="absolute inset-0 bg-[#061524]/82" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,14,35,0.94)_0%,rgba(3,14,35,0.76)_45%,rgba(3,14,35,0.50)_100%)]" />
        </div>

        {/* glow effects */}
        <div className="pointer-events-none absolute -left-24 top-40 h-96 w-96 rounded-full bg-[#36B7F0]/12 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-[#267A9E]/12 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* hero text */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                  About Elitech Dev
                </span>
                <span className="h-px w-28 bg-[#36B7F0]/75" />
              </div>

              <h1 className="text-[3rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-[4.2rem] lg:text-[5.3rem]">
                BUILDING
                <br />
                SMART DIGITAL
                <br />
                SOLUTIONS
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-[16px]">
                Elitech Dev is a technology company focused on building modern
                software, business systems, AI-powered solutions, and digital
                platforms that help organizations operate smarter, faster, and
                more efficiently.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#36A7CF] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_16px_40px_rgba(54,183,240,0.24)] transition-all duration-300 hover:bg-[#267A9E]"
                >
                  Work With Us
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267A9E] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                    <ArrowRight size={15} />
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 transition-all duration-300 hover:text-[#36B7F0]"
                >
                  Explore Our Services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            {/* hero image collage */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative hidden min-h-[500px] lg:block"
            >
              <div className="absolute right-0 top-0 h-[360px] w-[420px] overflow-hidden border border-[#36B7F0]/35 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                <Image
                  src={aboutImgOne}
                  alt="Elitech Dev business technology presentation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#061524]/15" />
              </div>

              <div className="absolute bottom-4 left-0 h-[260px] w-[360px] overflow-hidden border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                <Image
                  src={aboutImgThree}
                  alt="Elitech Dev team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#061524]/20" />
              </div>

              <div className="absolute bottom-24 right-10 flex h-28 w-28 items-center justify-center rounded-full border-[7px] border-white bg-[#e6f8fd] shadow-2xl">
                <Sparkles size={38} className="text-[#267A9E]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="About background"
            fill
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-5 -top-5 h-[82%] w-[82%] border-2 border-[#b62c2c]/75" />

              <div className="relative h-[480px] overflow-hidden shadow-[0_24px_65px_rgba(20,26,71,0.18)]">
                <Image
                  src={aboutImgTwo}
                  alt="Elitech Dev professional working with technology"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#267A9E]">
                  Who We Are
                </span>
                <span className="h-px w-24 bg-[#267A9E]/75" />
              </div>

              <h2 className="text-[2.3rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.6rem]">
                TECHNOLOGY WITH{" "}
                <span className="font-light tracking-[-0.05em]">
                  PURPOSE
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                We are a software development and digital solutions company
                focused on helping businesses, schools, hospitals, startups,
                and institutions use technology more effectively. Our work
                combines strategy, design, development, automation, and support.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#606875]">
                From websites and mobile apps to custom business systems,
                dashboards, cloud platforms, and AI-powered tools, we build
                solutions that are practical, scalable, and aligned with each
                client’s goals.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#267A9E]" />
                    <span className="text-[14px] font-medium text-[#303847]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group border border-gray-200 bg-white p-8 text-center shadow-[0_16px_45px_rgba(20,26,71,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#36B7F0]/55"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f8fd]">
                    <Icon size={28} className="text-[#267A9E]" />
                  </div>

                  <h3 className="mt-5 text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#07182d]">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-[14px] font-medium text-[#606875]">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER / CEO SECTION */}
      <section className="relative overflow-hidden bg-[#061524] py-24">
        <div className="absolute inset-0">
          <Image
            src={contactBg}
            alt="Founder section background"
            fill
            className="object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-[#061524]/94" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(54,183,240,0.16),transparent_40%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-[470px]"
            >
              <div className="absolute -left-5 -top-5 h-[85%] w-[85%] border-2 border-[#36B7F0]/70" />

              <div className="relative h-[560px] overflow-hidden border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={founderImg}
                  alt="Founder and CEO of Elitech Dev"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(6,21,36,0.92)_100%)]" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-[12px] font-bold uppercase tracking-wide text-[#36B7F0]">
                      Founder & CEO
                    </p>
                    <h3 className="mt-1 text-[1.4rem] font-extrabold text-white">
                      Elliot Datsomor
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/70">
                      Visionary leader, builder, and technology strategist.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                  Leadership
                </span>
                <span className="h-px w-24 bg-[#36B7F0]/75" />
              </div>

              <h2 className="text-[2.3rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[3.6rem]">
                MEET THE{" "}
                <span className="font-light tracking-[-0.05em]">
                  FOUNDER & CEO
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-white/78">
                Elitech Dev is led by a founder with a strong passion for
                technology, problem-solving, and business transformation. As
                both Founder and CEO, he guides the company with a clear vision:
                to help organizations use software not just as a tool, but as a
                foundation for growth, efficiency, and innovation.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-white/78">
                His leadership combines technical understanding, creative
                thinking, and a practical approach to solving real business
                challenges. He believes that great technology should be simple
                to use, reliable in performance, and valuable to the people who
                depend on it every day.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Target,
                    title: "Vision Driven",
                    text: "Focused on building solutions that create long-term impact.",
                  },
                  {
                    icon: Brain,
                    title: "Technology Minded",
                    text: "Understands software, systems, automation, and digital growth.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Client Focused",
                    text: "Values strong relationships and practical business outcomes.",
                  },
                  {
                    icon: Zap,
                    title: "Execution Focused",
                    text: "Committed to turning ideas into working digital products.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="border border-white/10 bg-white/[0.04] p-5"
                    >
                      <Icon size={24} className="text-[#36B7F0]" />
                      <h3 className="mt-4 text-[16px] font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-6 text-white/62">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative bg-white py-24">
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
                Our Values
              </span>
              <span className="h-px w-24 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.2rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.5rem]">
              WHAT GUIDES{" "}
              <span className="font-light tracking-[-0.05em]">US</span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#606875]">
              Our values shape how we design, build, communicate, and deliver
              every project.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="border border-gray-200 bg-white p-7 shadow-[0_16px_45px_rgba(20,26,71,0.08)] transition-all duration-300 hover:border-[#36B7F0]/55"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f8fd]">
                    <Icon size={28} className="text-[#267A9E]" />
                  </div>

                  <h3 className="mt-6 text-[1.25rem] font-extrabold tracking-[-0.03em] text-[#07182d]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#606875]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#061524] py-24">
        <div className="absolute inset-0">
          <Image
            src={contactBg}
            alt="Contact Elitech Dev"
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
                READY TO{" "}
                <span className="font-light tracking-[-0.06em]">
                  START?
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/84">
                Whether you need a website, mobile app, custom software,
                business system, AI solution, or digital transformation support,
                we are ready to help you bring your idea to life.
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

export default About;