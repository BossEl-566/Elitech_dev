"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronRight,
  Clock3,
  Cloud,
  Database,
  FileText,
  LineChart,
  Lock,
  Package,
  Settings,
  ShieldCheck,
  UsersRound,
  WalletCards,
  Workflow,
} from "lucide-react"; 

import heroBg from "../../../assets/hero-bg.png";
import aboutBg from "../../../assets/about-bg.png";
import softwareImg from "../../../assets/softwareImg.png";
import contactBg from "../../../assets/contact-bg.png";

const modules = [
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    description:
      "Monitor business performance, sales, expenses, stock levels, customer activity, and operational reports from one central dashboard.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Track products, stock movement, low-stock alerts, purchases, suppliers, and warehouse activity with accuracy and speed.",
  },
  {
    icon: UsersRound,
    title: "Customer Management",
    description:
      "Manage customer records, communication history, enquiries, sales leads, follow-ups, and long-term client relationships.",
  },
  {
    icon: WalletCards,
    title: "Sales & Finance",
    description:
      "Handle invoices, payments, expenses, quotations, receipts, financial summaries, and business transaction records.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Reduce manual work by automating approvals, reminders, reports, recurring tasks, and internal business processes.",
  },
  {
    icon: FileText,
    title: "Reports & Records",
    description:
      "Generate clear reports for management decisions, auditing, performance reviews, financial control, and operational planning.",
  },
];

const benefits = [
  "Centralized control of business operations",
  "Better decision-making with real-time reports",
  "Improved productivity and reduced manual work",
  "Accurate customer, inventory, and financial records",
  "Secure access for management and staff",
  "Scalable system that grows with your business",
];

const process = [
  {
    step: "01",
    title: "Business Analysis",
    description:
      "We study how your business currently works, identify the operational gaps, and define the exact features your system needs.",
  },
  {
    step: "02",
    title: "System Design",
    description:
      "We design the database, user roles, dashboards, workflows, and interface structure before development begins.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build the platform using reliable technologies, clean code, secure architecture, and responsive layouts.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description:
      "We test the system, fix issues, train users, deploy the platform, and provide technical support after launch.",
  },
];

function BusinessManagementSystemsPage() {
  return (
    <div
      className="relative overflow-hidden bg-[#f7f5f0]"
      style={{ fontFamily: "'Droid Sans Mono', 'Courier New', monospace" }}
    >
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] overflow-hidden bg-[#07182d] font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Business management system background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#061a31]/82" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,14,35,0.92)_0%,rgba(3,14,35,0.72)_45%,rgba(3,14,35,0.38)_100%)]" />
        </div>

        <div className="pointer-events-none absolute -left-28 top-36 h-96 w-96 rounded-full bg-[#36B7F0]/12 blur-3xl" />
        <div className="pointer-events-none absolute right-[8%] top-[24%] h-80 w-80 rounded-full bg-[#267A9E]/14 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative max-w-3xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                  Elitech Dev Solution
                </span>
                <span className="h-px w-24 bg-[#36B7F0]/70" />
              </div>

              <h1 className="text-[2.8rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5rem]">
                BUSINESS
                <br />
                MANAGEMENT
                <span className="block font-light">SYSTEMS</span>
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-[16px]">
                We build powerful business management systems that help companies
                manage operations, customers, inventory, finance, reporting, staff
                activities, and daily workflows from one reliable digital platform.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#267A9E] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_14px_35px_rgba(38,122,158,0.28)] transition-all duration-300 hover:bg-[#034663]"
                >
                  Request This Solution
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/14 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight size={15} />
                  </span>
                </Link>

                <Link
                  href="#modules"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-6 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:border-[#36B7F0] hover:text-[#36B7F0]"
                >
                  Explore Features
                  <ChevronRight size={15} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -left-5 -top-5 h-[80%] w-[80%] border-2 border-[#36B7F0]/60" />

              <div className="relative h-[460px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.38)]">
                <Image
                  src={softwareImg}
                  alt="Business software dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#061524]/25" />
              </div>

              <div className="absolute -bottom-8 -left-8 max-w-[270px] border border-[#36B7F0]/40 bg-[#07182d]/95 p-6 shadow-2xl backdrop-blur-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f8fd]">
                  <ShieldCheck className="text-[#267A9E]" size={24} />
                </div>
                <h3 className="text-[1rem] font-bold text-white">
                  Secure. Scalable. Business-ready.
                </h3>
                <p className="mt-2 text-[12px] leading-6 text-white/68">
                  Built for growing businesses that need better control,
                  automation, and digital visibility.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="relative overflow-hidden bg-[#f5f6f7] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Business management overview background"
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
              className="relative"
            >
              <div className="absolute -left-6 -top-6 h-[75%] w-[75%] border-2 border-[#b62c2c]/70" />

              <div className="relative h-[360px] overflow-hidden shadow-[0_18px_45px_rgba(20,26,71,0.16)] sm:h-[460px]">
                <Image
                  src={softwareImg}
                  alt="Business operations system"
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
                  Solution Overview
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.6rem]">
                RUN YOUR BUSINESS
                <span className="block font-light tracking-[-0.05em]">
                  FROM ONE PLATFORM
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                Many businesses lose time and money because their daily activities
                are scattered across notebooks, spreadsheets, WhatsApp messages,
                manual receipts, and disconnected systems. Our Business Management
                System brings everything together into one structured platform.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#606875]">
                Whether you run a retail shop, service company, school support
                business, logistics operation, agency, or growing institution, we
                can design a system that fits how your business actually works.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Clock3, label: "Save time daily" },
                  { icon: LineChart, label: "Improve business visibility" },
                  { icon: Lock, label: "Secure your records" },
                  { icon: Cloud, label: "Access from anywhere" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 border border-[#267A9E]/15 bg-white p-4 shadow-sm"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f8fd]">
                        <Icon size={18} className="text-[#267A9E]" />
                      </div>
                      <span className="text-[13px] font-semibold text-[#07182d]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODULES SECTION */}
      <section
        id="modules"
        className="relative overflow-hidden bg-white py-24 font-['Poppins',sans-serif]"
      >
        <div className="pointer-events-none absolute left-[-8%] top-20 h-96 w-96 rounded-full bg-[#267A9E]/8 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8%] bottom-20 h-96 w-96 rounded-full bg-[#141a47]/6 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-20 bg-[#267A9E]/70" />
              <span className="text-[12px] font-bold uppercase tracking-wide text-[#267A9E]">
                Core Features
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              WHAT THE SYSTEM
              <span className="font-light tracking-[-0.05em]"> CAN DO</span>
            </h2>

            <p className="mt-3 text-[14px] leading-7 text-[#6c7280]">
              A complete system can be customized with the modules your business
              needs most.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group border border-[#dfe7ec] bg-white p-8 shadow-[0_14px_35px_rgba(20,26,71,0.06)] transition-all duration-300 hover:border-[#267A9E]/55 hover:shadow-[0_22px_55px_rgba(20,26,71,0.12)]"
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#dff5fb]">
                    <Icon
                      size={28}
                      className="text-[#155f7b] transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-[1.25rem] font-extrabold tracking-[-0.03em] text-[#101827]">
                    {module.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#606875]">
                    {module.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative overflow-hidden bg-[#061524] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Benefits background"
            fill
            className="object-cover opacity-[0.1]"
          />
          <div className="absolute inset-0 bg-[#061524]/94" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(54,183,240,0.16),transparent_38%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                  Why It Matters
                </span>
                <span className="h-px w-24 bg-[#36B7F0]/70" />
              </div>

              <h2 className="text-[2.3rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.1rem] lg:text-[3.8rem]">
                BUILT FOR
                <span className="block font-light tracking-[-0.05em]">
                  BUSINESS GROWTH
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/76">
                A business management system is not just software. It is a digital
                control center that helps business owners understand what is
                happening, make better decisions, and reduce operational mistakes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex gap-4 border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md"
                >
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#36B7F0]/18">
                    <CheckCircle size={16} className="text-[#36B7F0]" />
                  </div>
                  <p className="text-[13px] leading-6 text-white/78">
                    {benefit}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Implementation process background"
            fill
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 bg-white/90" />
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
              <span className="h-px w-20 bg-[#267A9E]/70" />
              <span className="text-[12px] font-bold uppercase tracking-wide text-[#267A9E]">
                Our Process
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              HOW WE
              <span className="font-light tracking-[-0.05em]"> BUILD IT</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                viewport={{ once: true }}
                className="relative border border-[#dfe7ec] bg-white p-7 shadow-[0_14px_35px_rgba(20,26,71,0.06)]"
              >
                <span className="text-[2.8rem] font-extrabold leading-none tracking-[-0.05em] text-[#267A9E]/18">
                  {item.step}
                </span>

                <h3 className="mt-5 text-[1.2rem] font-extrabold tracking-[-0.03em] text-[#07182d]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-[#606875]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="relative overflow-hidden bg-white py-24 font-['Poppins',sans-serif]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#267A9E]">
                  System Quality
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem]">
                SECURE, SCALABLE
                <span className="block font-light tracking-[-0.05em]">
                  AND EASY TO USE
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                We design every system with strong database structure, user access
                control, clean dashboards, mobile responsiveness, cloud deployment,
                backups, and future expansion in mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {[
                { icon: Database, title: "Reliable Database" },
                { icon: ShieldCheck, title: "Role-Based Access" },
                { icon: Cloud, title: "Cloud Deployment" },
                { icon: Settings, title: "Custom Configuration" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border border-[#267A9E]/15 bg-[#f7f8f9] p-6"
                  >
                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#dff5fb]">
                      <Icon size={24} className="text-[#267A9E]" />
                    </div>

                    <h3 className="text-[1rem] font-extrabold text-[#07182d]">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="relative overflow-hidden bg-[#061524] py-28 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={contactBg}
            alt="Contact Elitech Dev"
            fill
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[#061524]/80" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,21,36,0.48)_0%,rgba(6,21,36,0.84)_48%,rgba(6,21,36,0.98)_100%)]" />
        </div>

        <div className="pointer-events-none absolute right-[14%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#36B7F0]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[360px] items-center lg:grid-cols-2">
            <div className="hidden lg:block" />

            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                  Start Your System
                </span>
                <span className="h-px w-28 bg-[#36B7F0]/75" />
              </div>

              <h2 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]">
                READY TO BUILD
                <span className="block font-light tracking-[-0.06em]">
                  YOUR BUSINESS SYSTEM?
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/86 sm:text-[16px]">
                Let us design and build a business management system that matches
                your operations, improves your workflow, and gives you better
                control over your company.
              </p>

              <motion.div whileHover={{ scale: 1.03 }} className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#36A7CF] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_16px_40px_rgba(54,183,240,0.24)] transition-all duration-300 hover:bg-[#267A9E]"
                >
                  Talk To Us Now
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267A9E] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                    <ArrowRight size={15} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessManagementSystemsPage;