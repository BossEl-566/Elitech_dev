"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  Cloud,
  Database,
  FileText,
  Gauge,
  LayoutDashboard,
  LineChart,
  Lock,
  MonitorCog,
  PieChart,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TableProperties,
  TrendingUp,
  UserCog,
  UsersRound,
  Workflow,
} from "lucide-react";

import heroBg from "../../../assets/hero-bg.png";
import aboutBg from "../../../assets/about-bg.png";
import adminDashboardImg from "../../../assets/adminDashboardImg.png";
import contactBg from "../../../assets/contact-bg.png";

const dashboardFeatures = [
  {
    icon: LayoutDashboard,
    title: "Central Admin Dashboard",
    description:
      "Give administrators one clean control panel to manage users, records, activities, settings, reports, and important business operations.",
  },
  {
    icon: BarChart3,
    title: "Analytics & KPIs",
    description:
      "Display key performance indicators, revenue summaries, activity metrics, growth charts, operational statistics, and performance trends.",
  },
  {
    icon: UsersRound,
    title: "User Management",
    description:
      "Manage users, staff, customers, departments, roles, permissions, access levels, and account activity from one secure area.",
  },
  {
    icon: FileText,
    title: "Reports & Records",
    description:
      "Generate reports, export records, review summaries, filter data, and organize important business information clearly.",
  },
  {
    icon: BellRing,
    title: "Notifications & Alerts",
    description:
      "Show important alerts, system updates, approval requests, overdue tasks, payment notices, activity changes, and reminders.",
  },
  {
    icon: Workflow,
    title: "Workflow Management",
    description:
      "Control approvals, task flows, requests, assignments, review stages, internal processes, and operational movement.",
  },
  {
    icon: TableProperties,
    title: "Data Tables & Filters",
    description:
      "Build searchable, sortable, filterable, and exportable tables for users, orders, payments, records, reports, and logs.",
  },
  {
    icon: Settings,
    title: "System Settings",
    description:
      "Allow admins to configure business rules, modules, branding, notifications, integrations, permissions, and platform behavior.",
  },
];

const dashboardTypes = [
  {
    icon: Gauge,
    title: "Business Dashboards",
    description:
      "For companies that need to monitor sales, expenses, customers, staff, inventory, reports, and daily operations.",
  },
  {
    icon: MonitorCog,
    title: "System Dashboards",
    description:
      "For platforms that need admin control over users, modules, roles, activities, logs, content, and system settings.",
  },
  {
    icon: PieChart,
    title: "Analytics Dashboards",
    description:
      "For organizations that need visual data, charts, KPIs, trends, summaries, and decision-making reports.",
  },
];

const benefits = [
  "Control important business operations from one place",
  "Monitor KPIs, reports, users, and system activity clearly",
  "Reduce manual data checking and scattered admin work",
  "Improve decision-making with visual reports and analytics",
  "Secure platform access with roles and permissions",
  "Track user activity, workflow progress, and operational status",
  "Make complex systems easier for administrators to manage",
  "Create a professional backend for websites, apps, and platforms",
];

const workflow = [
  {
    step: "01",
    title: "Data Collection",
    description:
      "The dashboard receives data from your website, app, database, payment system, booking system, or business platform.",
  },
  {
    step: "02",
    title: "Data Organization",
    description:
      "Records are arranged into users, reports, transactions, tasks, analytics, activity logs, and system modules.",
  },
  {
    step: "03",
    title: "Admin Control",
    description:
      "Administrators can manage records, approve requests, update settings, monitor KPIs, and control access.",
  },
  {
    step: "04",
    title: "Reports & Decisions",
    description:
      "Management can review visual reports, export data, track performance, and make faster business decisions.",
  },
];

const qualityCards = [
  {
    icon: Database,
    title: "Structured Database",
    description:
      "Organize users, analytics, records, reports, logs, permissions, and system activity in a reliable data structure.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Security",
    description:
      "Control what super admins, managers, staff, finance teams, and operators can access or edit.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Deploy your dashboard online with reliable hosting, backup planning, and secure access from approved devices.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Widgets",
    description:
      "Add custom charts, cards, filters, tables, reports, actions, alerts, and modules based on your business needs.",
  },
];

function AdminDashboardsPage() {
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
            alt="Admin dashboard background"
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
                ADMIN
                <br />
                DASHBOARDS
                <span className="block font-light">SYSTEMS</span>
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-[16px]">
                We build modern admin dashboards that help businesses control
                users, manage data, monitor performance, review reports, track
                activities, configure systems, and make better decisions from one
                powerful digital control center.
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

            {/* RIGHT DASHBOARD MOCKUP */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -left-5 -top-5 h-[82%] w-[82%] border-2 border-[#36B7F0]/50" />

              <div className="relative overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="rounded-[28px] bg-[#f7fbff] p-5 shadow-2xl">
                  {/* Top Bar */}
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-[#267A9E]">
                        Admin Control Center
                      </p>
                      <h3 className="mt-1 text-[1.35rem] font-extrabold text-[#07182d]">
                        Dashboard Overview
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                        <Search size={18} className="text-[#667085]" />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07182d]">
                        <LayoutDashboard className="text-[#36B7F0]" size={23} />
                      </div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid gap-4 sm:grid-cols-4">
                    {[
                      {
                        icon: UsersRound,
                        label: "Users",
                        value: "12.4k",
                        color: "bg-blue-100 text-blue-700",
                      },
                      {
                        icon: TrendingUp,
                        label: "Growth",
                        value: "+28%",
                        color: "bg-green-100 text-green-700",
                      },
                      {
                        icon: ClipboardList,
                        label: "Tasks",
                        value: "86",
                        color: "bg-orange-100 text-orange-700",
                      },
                      {
                        icon: ShieldCheck,
                        label: "System Health",
                        value: "99%",
                        color: "bg-purple-100 text-purple-700",
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
                          <h4 className="mt-1 text-[1.3rem] font-extrabold text-[#07182d]">
                            {item.value}
                          </h4>
                        </div>
                      );
                    })}
                  </div>

                  {/* Main Grid */}
                  <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-2xl border border-[#e2e9f0] bg-white p-5 shadow-sm">
                      <div className="mb-5 flex items-center justify-between">
                        <h4 className="text-[14px] font-extrabold text-[#07182d]">
                          Performance Overview
                        </h4>
                        <span className="rounded-full bg-[#e6f8fd] px-3 py-1 text-[11px] font-semibold text-[#267A9E]">
                          This Month
                        </span>
                      </div>

                      <div className="flex h-[150px] items-end gap-3">
                        {[42, 58, 44, 76, 63, 88, 72, 94].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex flex-1 flex-col items-center gap-2"
                            >
                              <div
                                className="w-full rounded-t-xl bg-[#267A9E]"
                                style={{ height: `${height}%` }}
                              />
                              <span className="text-[10px] text-[#667085]">
                                W{index + 1}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#e2e9f0] bg-white p-5 shadow-sm">
                      <div className="mb-5 flex items-center justify-between">
                        <h4 className="text-[14px] font-extrabold text-[#07182d]">
                          Recent Activity
                        </h4>
                        <Activity size={18} className="text-[#267A9E]" />
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            title: "New user account created",
                            time: "8 min ago",
                          },
                          {
                            title: "Monthly report exported",
                            time: "25 min ago",
                          },
                          {
                            title: "Payment record updated",
                            time: "1 hour ago",
                          },
                          {
                            title: "Admin changed role access",
                            time: "2 hours ago",
                          },
                        ].map((item) => (
                          <div
                            key={item.title}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#267A9E]" />
                            <div>
                              <p className="text-[12px] font-semibold text-[#344054]">
                                {item.title}
                              </p>
                              <p className="mt-1 text-[11px] text-[#98a2b3]">
                                {item.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Quick Actions */}
                  <div className="mt-5 grid gap-4 sm:grid-cols-4">
                    {[
                      { icon: UserCog, label: "Users" },
                      { icon: FileText, label: "Reports" },
                      { icon: BellRing, label: "Alerts" },
                      { icon: Settings, label: "Settings" },
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
                  Smarter admin control.
                </h3>
                <p className="mt-2 text-[12px] leading-6 text-white/68">
                  Built for businesses that need visibility, security, reports,
                  user management, and operational control.
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
            alt="Admin dashboard overview background"
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
                  src={adminDashboardImg}
                  alt="Admin dashboard interface"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-8 right-8 bg-white p-6 shadow-[0_20px_55px_rgba(20,26,71,0.16)]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "Live", label: "Analytics" },
                    { value: "Secure", label: "Access" },
                    { value: "Smart", label: "Reports" },
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
                  Dashboard Overview
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.6rem]">
                CONTROL YOUR PLATFORM
                <span className="block font-light tracking-[-0.05em]">
                  FROM ONE PLACE
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                A good admin dashboard is the control center of a digital system.
                It helps business owners, managers, and staff monitor activity,
                manage users, control data, review reports, and handle daily
                operations without confusion.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#606875]">
                Whether you are building a business system, school system,
                hospital system, booking platform, e-commerce store, client portal,
                SaaS product, or internal platform, we can design an admin
                dashboard that fits your operations.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: LineChart, label: "Visual performance reports" },
                  { icon: UserCog, label: "User and role control" },
                  { icon: Lock, label: "Secure admin access" },
                  { icon: Sparkles, label: "Modern dashboard UI" },
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
                Modern Dashboard Features
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              WHAT THE ADMIN DASHBOARD
              <span className="font-light tracking-[-0.05em]"> CAN DO</span>
            </h2>

            <p className="mt-3 text-[14px] leading-7 text-[#6c7280]">
              We build dashboards that give administrators the tools they need to
              manage systems confidently.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {dashboardFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
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
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-[#606875]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DASHBOARD TYPES SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Admin dashboard types background"
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
                Dashboard Categories
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              BUILT FOR
              <span className="font-light tracking-[-0.05em]">
                {" "}
                DIFFERENT ADMIN NEEDS
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {dashboardTypes.map((type, index) => {
              const Icon = type.icon;

              return (
                <motion.div
                  key={type.title}
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
                    {type.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#606875]">
                    {type.description}
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
            alt="Admin dashboard benefits background"
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
                  SMARTER MANAGEMENT
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/76">
                An admin dashboard helps your business manage complex operations
                with clarity, speed, security, and better access to important
                information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {benefits.map((benefit) => (
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

      {/* WORKFLOW SECTION */}
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
                Dashboard Workflow
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              HOW THE DASHBOARD
              <span className="font-light tracking-[-0.05em]"> WORKS</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, index) => (
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

      {/* QUALITY SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Admin dashboard quality background"
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
                  Dashboard Quality
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem]">
                SECURE, FLEXIBLE
                <span className="block font-light tracking-[-0.05em]">
                  AND ADMIN-READY
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                We design admin dashboards with secure access, clean data
                structure, responsive layouts, powerful filters, chart widgets,
                activity tracking, user permissions, and scalable architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {qualityCards.map((item) => {
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
                  Start Your Admin Dashboard
                </span>
                <span className="h-px w-28 bg-[#36B7F0]/75" />
              </div>

              <h2 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]">
                READY TO CONTROL
                <span className="block font-light tracking-[-0.06em]">
                  YOUR SYSTEM BETTER?
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/86 sm:text-[16px]">
                Let us design and build a modern admin dashboard that gives your
                business better control over users, data, reports, workflows,
                settings, and system operations.
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

export default AdminDashboardsPage;