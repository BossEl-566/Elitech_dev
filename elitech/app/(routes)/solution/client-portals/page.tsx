"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  CheckCircle,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  Cloud,
  Database,
  FileCheck2,
  FileText,
  FolderKanban,
  Gauge,
  Headphones,
  Inbox,
  KeyRound,
  LayoutDashboard,
  Lock,
  MessageSquareText,
  PanelsTopLeft,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  UserCog,
  UsersRound,
  Workflow,
} from "lucide-react";

import heroBg from "../../../assets/hero-bg.png";
import aboutBg from "../../../assets/about-bg.png";
import clientPortalImg from "../../../assets/clientPortalImg.png";
import contactBg from "../../../assets/contact-bg.png";

const portalModules = [
  {
    icon: LayoutDashboard,
    title: "Client Dashboard",
    description:
      "Give every client a clean dashboard where they can view project updates, invoices, files, messages, tickets, and important business activity.",
  },
  {
    icon: FolderKanban,
    title: "Project Tracking",
    description:
      "Let clients monitor project progress, milestones, timelines, task updates, deliverables, and approval stages in real time.",
  },
  {
    icon: UploadCloud,
    title: "Document Sharing",
    description:
      "Allow secure upload, download, review, and organization of contracts, reports, proposals, receipts, forms, and shared business files.",
  },
  {
    icon: MessageSquareText,
    title: "Secure Messaging",
    description:
      "Keep client communication organized with private conversations, project discussions, notices, and message history.",
  },
  {
    icon: Headphones,
    title: "Support Tickets",
    description:
      "Clients can submit issues, track ticket status, receive support updates, and communicate with your service team.",
  },
  {
    icon: CircleDollarSign,
    title: "Invoices & Payments",
    description:
      "Share invoices, payment history, outstanding balances, receipts, quotations, and online payment options with clients.",
  },
  {
    icon: BellRing,
    title: "Notifications",
    description:
      "Send alerts for approvals, document requests, project updates, due payments, support replies, and important announcements.",
  },
  {
    icon: UserCog,
    title: "Role-Based Access",
    description:
      "Control what clients, staff, managers, finance teams, and administrators can see and do inside the portal.",
  },
];

const modernFeatures = [
  "Personalized client dashboards",
  "Project progress and milestone tracking",
  "Secure document upload and file sharing",
  "Private client-to-business messaging",
  "Invoice, quotation, and payment management",
  "Support ticketing and issue resolution",
  "Real-time notifications and reminders",
  "Admin control panel with user permissions",
];

const userTypes = [
  {
    icon: UsersRound,
    title: "Clients",
    description:
      "Access files, track projects, submit tickets, view invoices, approve work, and communicate with your team.",
  },
  {
    icon: Workflow,
    title: "Internal Teams",
    description:
      "Manage projects, respond to requests, upload documents, update statuses, and support clients efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Administrators",
    description:
      "Control users, permissions, content, billing records, notifications, portal settings, and full system activity.",
  },
];

const process = [
  {
    step: "01",
    title: "Portal Strategy",
    description:
      "We study how your business works with clients, including communication, files, approvals, payments, and support requests.",
  },
  {
    step: "02",
    title: "UX & Dashboard Design",
    description:
      "We design the client experience, admin dashboard, user roles, navigation flow, and main portal modules.",
  },
  {
    step: "03",
    title: "Development & Integration",
    description:
      "We build the portal with secure authentication, database structure, file management, notifications, and integrations.",
  },
  {
    step: "04",
    title: "Launch & Training",
    description:
      "We deploy the portal, train your team, test client access, and provide support for smooth adoption.",
  },
];

const securityCards = [
  {
    icon: KeyRound,
    title: "Secure Login",
    description:
      "Protect client access with authentication, account controls, and optional multi-step verification.",
  },
  {
    icon: Lock,
    title: "Private Data Access",
    description:
      "Each client only sees their own files, projects, invoices, conversations, and assigned records.",
  },
  {
    icon: Database,
    title: "Organized Database",
    description:
      "Store users, projects, files, messages, tickets, billing records, and activity logs in a structured system.",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    description:
      "Deploy the portal online with scalable hosting, backup planning, and reliable access from approved devices.",
  },
];

function ClientPortalsPage() {
  return (
    <div
      className="relative overflow-hidden bg-[#f7f5f0]"
      style={{ fontFamily: "'Droid Sans Mono', 'Courier New', monospace" }}
    >
      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] overflow-hidden bg-[#07182d] font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Client portal background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#061a31]/86" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,14,35,0.96)_0%,rgba(3,14,35,0.78)_44%,rgba(3,14,35,0.42)_100%)]" />
        </div>

        <div className="pointer-events-none absolute -left-28 top-36 h-96 w-96 rounded-full bg-[#36B7F0]/12 blur-3xl" />
        <div className="pointer-events-none absolute right-[8%] top-[22%] h-80 w-80 rounded-full bg-[#267A9E]/16 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative max-w-3xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                  Elitech Dev Digital Product
                </span>
                <span className="h-px w-24 bg-[#36B7F0]/70" />
              </div>

              <h1 className="text-[2.7rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5rem]">
                CLIENT
                <br />
                PORTALS
                <span className="block font-light">SYSTEMS</span>
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-[16px]">
                We build secure client portals that help businesses give their
                clients private access to projects, documents, invoices, support
                tickets, messages, approvals, and real-time updates from one modern
                digital workspace.
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
                  href="#features"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-6 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:border-[#36B7F0] hover:text-[#36B7F0]"
                >
                  Explore Features
                  <ChevronRight size={15} />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT MODERN PORTAL MOCKUP */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -left-5 -top-5 h-[82%] w-[82%] border-2 border-[#36B7F0]/50" />

              <div className="relative overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="rounded-[28px] bg-[#f7fbff] p-5 shadow-2xl">
                  {/* Top bar */}
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-[#267A9E]">
                        Client Portal
                      </p>
                      <h3 className="mt-1 text-[1.35rem] font-extrabold text-[#07182d]">
                        Good morning, Client
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                        <Search size={18} className="text-[#667085]" />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07182d]">
                        <PanelsTopLeft className="text-[#36B7F0]" size={23} />
                      </div>
                    </div>
                  </div>

                  {/* KPI cards */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      {
                        icon: FolderKanban,
                        label: "Active Projects",
                        value: "08",
                        color: "bg-blue-100 text-blue-700",
                      },
                      {
                        icon: FileCheck2,
                        label: "Files Shared",
                        value: "124",
                        color: "bg-green-100 text-green-700",
                      },
                      {
                        icon: Headphones,
                        label: "Open Tickets",
                        value: "03",
                        color: "bg-orange-100 text-orange-700",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-[#e2e9f0] bg-white p-4 shadow-sm"
                        >
                          <div
                            className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}
                          >
                            <Icon size={20} />
                          </div>
                          <p className="text-[11px] text-[#667085]">
                            {item.label}
                          </p>
                          <h4 className="mt-1 text-[1.45rem] font-extrabold text-[#07182d]">
                            {item.value}
                          </h4>
                        </div>
                      );
                    })}
                  </div>

                  {/* Main content */}
                  <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-2xl border border-[#e2e9f0] bg-white p-5 shadow-sm">
                      <div className="mb-5 flex items-center justify-between">
                        <h4 className="text-[14px] font-extrabold text-[#07182d]">
                          Project Progress
                        </h4>
                        <span className="rounded-full bg-[#e6f8fd] px-3 py-1 text-[11px] font-semibold text-[#267A9E]">
                          Live
                        </span>
                      </div>

                      <div className="space-y-5">
                        {[
                          { label: "Website Redesign", value: 82 },
                          { label: "Payment Integration", value: 64 },
                          { label: "Client Training", value: 38 },
                        ].map((item) => (
                          <div key={item.label}>
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-[12px] font-semibold text-[#344054]">
                                {item.label}
                              </span>
                              <span className="text-[12px] font-bold text-[#267A9E]">
                                {item.value}%
                              </span>
                            </div>
                            <div className="h-2.5 overflow-hidden rounded-full bg-[#e9eef5]">
                              <div
                                className="h-full rounded-full bg-[#267A9E]"
                                style={{ width: `${item.value}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#e2e9f0] bg-white p-5 shadow-sm">
                      <div className="mb-5 flex items-center justify-between">
                        <h4 className="text-[14px] font-extrabold text-[#07182d]">
                          Recent Activity
                        </h4>
                        <Inbox size={18} className="text-[#267A9E]" />
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            icon: UploadCloud,
                            text: "New proposal uploaded",
                            time: "12 min",
                          },
                          {
                            icon: MessageSquareText,
                            text: "Admin replied to ticket",
                            time: "35 min",
                          },
                          {
                            icon: CircleDollarSign,
                            text: "Invoice marked as paid",
                            time: "1 hr",
                          },
                          {
                            icon: CalendarCheck,
                            text: "Review meeting scheduled",
                            time: "2 hrs",
                          },
                        ].map((item) => {
                          const Icon = item.icon;

                          return (
                            <div
                              key={item.text}
                              className="flex items-start gap-3"
                            >
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e6f8fd]">
                                <Icon size={16} className="text-[#267A9E]" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-[12px] font-semibold text-[#344054]">
                                  {item.text}
                                </p>
                                <p className="mt-1 text-[11px] text-[#98a2b3]">
                                  {item.time} ago
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Bottom quick actions */}
                  <div className="mt-5 grid gap-4 sm:grid-cols-4">
                    {[
                      { icon: FileText, label: "Files" },
                      { icon: ClipboardList, label: "Tasks" },
                      { icon: MessageSquareText, label: "Chat" },
                      { icon: CircleDollarSign, label: "Billing" },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="rounded-2xl bg-[#eef7fb] p-4 text-center"
                        >
                          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                            <Icon size={18} className="text-[#267A9E]" />
                          </div>
                          <p className="text-[11px] font-semibold text-[#07182d]">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 max-w-[270px] border border-[#36B7F0]/40 bg-[#07182d]/95 p-6 shadow-2xl backdrop-blur-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f8fd]">
                  <ShieldCheck className="text-[#267A9E]" size={24} />
                </div>
                <h3 className="text-[1rem] font-bold text-white">
                  Private client access.
                </h3>
                <p className="mt-2 text-[12px] leading-6 text-white/68">
                  Built for businesses that want professional client experience,
                  organized communication, and secure digital service delivery.
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
            alt="Client portal overview background"
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
                  src={clientPortalImg}
                  alt="Client portal interface"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-8 right-8 bg-white p-6 shadow-[0_20px_55px_rgba(20,26,71,0.16)]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "24/7", label: "Client Access" },
                    { value: "Secure", label: "File Sharing" },
                    { value: "Live", label: "Updates" },
                  ].map((item) => (
                    <div key={item.label}>
                      <h4 className="text-[1.05rem] font-extrabold text-[#07182d]">
                        {item.value}
                      </h4>
                      <p className="mt-1 text-[11px] uppercase tracking-wide text-[#667085]">
                        {item.label}
                      </p>
                    </div>
                  ))}
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
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#267A9E]">
                  Portal Overview
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.6rem]">
                GIVE CLIENTS
                <span className="block font-light tracking-[-0.05em]">
                  A DIGITAL WORKSPACE
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                Many businesses communicate with clients through scattered emails,
                WhatsApp chats, shared folders, manual invoices, and repeated phone
                calls. A client portal brings everything into one organized and
                branded environment.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#606875]">
                It helps your clients find what they need quickly while helping
                your team manage documents, support requests, updates, approvals,
                and billing from one controlled admin dashboard.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Gauge, label: "Professional client experience" },
                  { icon: FileCheck2, label: "Easy approval tracking" },
                  { icon: Lock, label: "Secure private access" },
                  { icon: Sparkles, label: "Modern branded interface" },
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

      {/* FEATURES SECTION */}
      <section
        id="features"
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
                Modern Portal Features
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              WHAT THE CLIENT PORTAL
              <span className="font-light tracking-[-0.05em]"> CAN DO</span>
            </h2>

            <p className="mt-3 text-[14px] leading-7 text-[#6c7280]">
              The portal can be customized with the tools your business needs to
              serve clients better.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {portalModules.map((module, index) => {
              const Icon = module.icon;

              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group border border-[#dfe7ec] bg-white p-7 shadow-[0_14px_35px_rgba(20,26,71,0.06)] transition-all duration-300 hover:border-[#267A9E]/55 hover:shadow-[0_22px_55px_rgba(20,26,71,0.12)]"
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#dff5fb]">
                    <Icon
                      size={28}
                      className="text-[#155f7b] transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-[1.15rem] font-extrabold tracking-[-0.03em] text-[#101827]">
                    {module.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-[#606875]">
                    {module.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODERN BENEFIT STRIP */}
      <section className="relative overflow-hidden bg-[#061524] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Client portal benefits background"
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
                  Why Businesses Need It
                </span>
                <span className="h-px w-24 bg-[#36B7F0]/70" />
              </div>

              <h2 className="text-[2.3rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.1rem] lg:text-[3.8rem]">
                BUILT FOR
                <span className="block font-light tracking-[-0.05em]">
                  CLIENT EXPERIENCE
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/76">
                A client portal helps your business look more professional,
                communicate faster, reduce repeated requests, protect client data,
                and deliver a smooth digital service experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {modernFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-4 border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md"
                >
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#36B7F0]/18">
                    <CheckCircle size={16} className="text-[#36B7F0]" />
                  </div>
                  <p className="text-[13px] leading-6 text-white/78">
                    {feature}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* USER GROUPS SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Client portal user access background"
            fill
            className="object-cover opacity-[0.045]"
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
                User Experience
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              BUILT FOR
              <span className="font-light tracking-[-0.05em]">
                {" "}
                EVERY PORTAL USER
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {userTypes.map((user, index) => {
              const Icon = user.icon;

              return (
                <motion.div
                  key={user.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.55 }}
                  viewport={{ once: true }}
                  className="border border-[#dfe7ec] bg-white p-8 text-center shadow-[0_14px_35px_rgba(20,26,71,0.06)]"
                >
                  <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#dff5fb]">
                    <Icon size={34} className="text-[#267A9E]" />
                  </div>

                  <h3 className="text-[1.25rem] font-extrabold text-[#07182d]">
                    {user.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#606875]">
                    {user.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative overflow-hidden bg-white py-24 font-['Poppins',sans-serif]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

      {/* SECURITY SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Client portal security background"
            fill
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#267A9E]">
                  Portal Security
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem]">
                PRIVATE, SECURE
                <span className="block font-light tracking-[-0.05em]">
                  AND BUSINESS-READY
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                We design client portals with secure access, clean database
                structure, user roles, activity tracking, protected file handling,
                and controlled admin management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {securityCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border border-[#267A9E]/15 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#dff5fb]">
                      <Icon size={24} className="text-[#267A9E]" />
                    </div>

                    <h3 className="text-[1rem] font-extrabold text-[#07182d]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-[#606875]">
                      {item.description}
                    </p>
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
                  Start Your Client Portal
                </span>
                <span className="h-px w-28 bg-[#36B7F0]/75" />
              </div>

              <h2 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]">
                READY TO IMPROVE
                <span className="block font-light tracking-[-0.06em]">
                  YOUR CLIENT EXPERIENCE?
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/86 sm:text-[16px]">
                Let us design and build a secure client portal that gives your
                clients a professional digital workspace while helping your team
                manage files, support, projects, payments, and communication.
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

export default ClientPortalsPage;