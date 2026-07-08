"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  CalendarCheck,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Cloud,
  CreditCard,
  Database,
  Filter,
  Gauge,
  Headphones,
  LayoutDashboard,
  Lock,
  MapPin,
  MessageSquareText,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Star,
  TimerReset,
  UserRoundCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";

import heroBg from "../../../assets/hero-bg.png";
import aboutBg from "../../../assets/about-bg.png";
import bookingImg from "../../../assets/bookingImg.png";
import contactBg from "../../../assets/contact-bg.png";

const bookingFeatures = [
  {
    icon: CalendarCheck,
    title: "Online Booking",
    description:
      "Allow customers to book services, appointments, reservations, consultations, sessions, or rentals directly from your website or portal.",
  },
  {
    icon: Clock3,
    title: "Availability Management",
    description:
      "Manage available days, working hours, unavailable slots, staff schedules, breaks, holidays, and booking limits.",
  },
  {
    icon: UsersRound,
    title: "Staff & Resource Scheduling",
    description:
      "Assign bookings to staff, rooms, vehicles, equipment, facilities, consultants, or service providers automatically.",
  },
  {
    icon: CreditCard,
    title: "Payments & Deposits",
    description:
      "Accept full payments, deposits, booking fees, cancellation charges, and payment confirmations through secure integrations.",
  },
  {
    icon: BellRing,
    title: "Reminders & Notifications",
    description:
      "Send booking confirmations, reminders, rescheduling notices, payment alerts, and follow-up messages to customers.",
  },
  {
    icon: UserRoundCheck,
    title: "Customer Self-Service",
    description:
      "Let customers view bookings, cancel, reschedule, update details, make payments, and receive booking history.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description:
      "Track bookings, customers, revenue, schedules, pending requests, cancellations, staff performance, and daily activities.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Monitor booking trends, revenue, peak hours, customer behavior, service demand, cancellations, and business performance.",
  },
];

const bookingTypes = [
  {
    icon: CalendarDays,
    title: "Appointments",
    description:
      "For clinics, salons, consultants, repair services, training centers, agencies, and professional service providers.",
  },
  {
    icon: MapPin,
    title: "Reservations",
    description:
      "For restaurants, hotels, event spaces, conference rooms, coworking spaces, facilities, and hospitality businesses.",
  },
  {
    icon: TimerReset,
    title: "Rentals & Sessions",
    description:
      "For equipment rentals, vehicle bookings, studios, sports facilities, classes, coaching sessions, and activity scheduling.",
  },
];

const benefits = [
  "Reduce manual calls and repeated WhatsApp booking messages",
  "Allow customers to book services online anytime",
  "Prevent double bookings and scheduling confusion",
  "Collect deposits or full payments before service delivery",
  "Send automatic reminders to reduce no-shows",
  "Track bookings, revenue, customers, staff, and performance",
  "Give customers a smoother and more professional experience",
  "Scale appointment, reservation, and service operations easily",
];

const workflow = [
  {
    step: "01",
    title: "Customer Selects Service",
    description:
      "Customers browse services, packages, locations, staff options, prices, and available booking categories.",
  },
  {
    step: "02",
    title: "Chooses Date & Time",
    description:
      "The system displays only available slots based on your schedule, staff availability, booking rules, and capacity.",
  },
  {
    step: "03",
    title: "Confirms Booking",
    description:
      "Customers submit details, make payment or deposit when required, and receive instant booking confirmation.",
  },
  {
    step: "04",
    title: "Business Manages Delivery",
    description:
      "Your team views schedules, handles check-ins, updates status, sends reminders, and manages follow-up activities.",
  },
];

const platformQuality = [
  {
    icon: Database,
    title: "Structured Booking Database",
    description:
      "Organize customers, services, time slots, staff, resources, payments, booking history, and activity logs.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access Control",
    description:
      "Protect booking data with admin, staff, manager, and customer-level access permissions.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Run your booking platform online with reliable hosting, backups, and access from approved devices.",
  },
  {
    icon: Settings,
    title: "Custom Booking Rules",
    description:
      "Add rules for deposits, cancellations, rescheduling, staff assignment, booking limits, and service duration.",
  },
];

function BookingPlatformsPage() {
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
            alt="Booking platform background"
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
                BOOKING
                <br />
                PLATFORMS
                <span className="block font-light">SYSTEMS</span>
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-[16px]">
                We build modern booking platforms that help businesses accept
                online reservations, manage appointments, schedule staff, collect
                payments, send reminders, and control daily booking operations
                from one reliable digital system.
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

            {/* RIGHT MODERN BOOKING MOCKUP */}
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
                        Booking Dashboard
                      </p>
                      <h3 className="mt-1 text-[1.35rem] font-extrabold text-[#07182d]">
                        Today’s Schedule
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                        <Search size={18} className="text-[#667085]" />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07182d]">
                        <CalendarCheck className="text-[#36B7F0]" size={23} />
                      </div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid gap-4 sm:grid-cols-4">
                    {[
                      {
                        icon: CalendarDays,
                        label: "Bookings",
                        value: "124",
                        color: "bg-blue-100 text-blue-700",
                      },
                      {
                        icon: Clock3,
                        label: "Pending",
                        value: "18",
                        color: "bg-orange-100 text-orange-700",
                      },
                      {
                        icon: WalletCards,
                        label: "Revenue",
                        value: "₵9.8k",
                        color: "bg-green-100 text-green-700",
                      },
                      {
                        icon: UsersRound,
                        label: "Clients",
                        value: "342",
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
                          <h4 className="mt-1 text-[1.35rem] font-extrabold text-[#07182d]">
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
                          Available Slots
                        </h4>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f8fd] px-3 py-1 text-[11px] font-semibold text-[#267A9E]">
                          <Filter size={12} />
                          Today
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {[
                          "09:00",
                          "10:30",
                          "12:00",
                          "01:30",
                          "03:00",
                          "04:30",
                          "05:00",
                          "06:30",
                          "07:00",
                        ].map((slot, index) => (
                          <div
                            key={slot}
                            className={`rounded-xl px-3 py-3 text-center text-[12px] font-semibold ${
                              index === 2 || index === 5
                                ? "bg-[#07182d] text-white"
                                : "bg-[#eef7fb] text-[#07182d]"
                            }`}
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#e2e9f0] bg-white p-5 shadow-sm">
                      <div className="mb-5 flex items-center justify-between">
                        <h4 className="text-[14px] font-extrabold text-[#07182d]">
                          Upcoming Bookings
                        </h4>
                        <CalendarDays size={18} className="text-[#267A9E]" />
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            name: "Consultation",
                            time: "09:00 AM",
                            status: "Confirmed",
                          },
                          {
                            name: "Room Reservation",
                            time: "10:30 AM",
                            status: "Paid",
                          },
                          {
                            name: "Service Appointment",
                            time: "12:00 PM",
                            status: "Pending",
                          },
                          {
                            name: "Training Session",
                            time: "03:00 PM",
                            status: "Confirmed",
                          },
                        ].map((item) => (
                          <div
                            key={`${item.name}-${item.time}`}
                            className="flex items-center justify-between gap-3 border-b border-[#edf2f7] pb-3 last:border-b-0 last:pb-0"
                          >
                            <div>
                              <p className="text-[12px] font-bold text-[#07182d]">
                                {item.name}
                              </p>
                              <p className="mt-1 text-[11px] text-[#667085]">
                                {item.time}
                              </p>
                            </div>
                            <span className="rounded-full bg-[#e6f8fd] px-3 py-1 text-[10px] font-bold text-[#267A9E]">
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Quick Actions */}
                  <div className="mt-5 grid gap-4 sm:grid-cols-4">
                    {[
                      { icon: CalendarCheck, label: "Add Booking" },
                      { icon: BellRing, label: "Send Reminder" },
                      { icon: UsersRound, label: "Assign Staff" },
                      { icon: Gauge, label: "View Reports" },
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
                  Smart booking control.
                </h3>
                <p className="mt-2 text-[12px] leading-6 text-white/68">
                  Built for businesses that want fewer scheduling errors, faster
                  reservations, and better customer experience.
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
            alt="Booking platform overview background"
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
                  src={bookingImg}
                  alt="Booking platform interface"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-8 right-8 bg-white p-6 shadow-[0_20px_55px_rgba(20,26,71,0.16)]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "24/7", label: "Bookings" },
                    { value: "Auto", label: "Reminders" },
                    { value: "Secure", label: "Payments" },
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
                  Platform Overview
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.6rem]">
                ACCEPT BOOKINGS
                <span className="block font-light tracking-[-0.05em]">
                  WITHOUT THE CONFUSION
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                Many businesses still depend on phone calls, WhatsApp chats,
                notebooks, and manual schedules to manage bookings. This often
                leads to missed appointments, double bookings, late payments, and
                poor customer experience.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#606875]">
                A booking platform gives your business a professional system where
                customers can book online, receive confirmation, pay when required,
                and get reminders before their appointment or reservation.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Smartphone, label: "Mobile-friendly booking flow" },
                  { icon: ClipboardCheck, label: "Easy booking approval" },
                  { icon: Lock, label: "Secure customer records" },
                  { icon: MessageSquareText, label: "Automated communication" },
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
                Modern Booking Features
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              WHAT THE BOOKING PLATFORM
              <span className="font-light tracking-[-0.05em]"> CAN DO</span>
            </h2>

            <p className="mt-3 text-[14px] leading-7 text-[#6c7280]">
              The platform can be customized for appointments, reservations,
              rentals, facilities, sessions, and service-based businesses.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {bookingFeatures.map((feature, index) => {
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

      {/* BOOKING TYPES SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Booking platform types background"
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
                Booking Categories
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              BUILT FOR
              <span className="font-light tracking-[-0.05em]">
                {" "}
                DIFFERENT BOOKING NEEDS
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {bookingTypes.map((type, index) => {
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
            alt="Booking platform benefits background"
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
                  SMART SCHEDULING
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/76">
                A booking platform helps your business reduce scheduling mistakes,
                save administrative time, improve customer convenience, and manage
                reservations with more control.
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
                Booking Workflow
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              HOW THE PLATFORM
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
            alt="Booking platform security background"
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
                  Platform Quality
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem]">
                SECURE, FLEXIBLE
                <span className="block font-light tracking-[-0.05em]">
                  AND BOOKING-READY
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                We design booking platforms with secure access, organized data,
                flexible booking rules, payment integrations, staff scheduling,
                customer notifications, and clean admin control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {platformQuality.map((item) => {
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
                  Start Your Booking Platform
                </span>
                <span className="h-px w-28 bg-[#36B7F0]/75" />
              </div>

              <h2 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]">
                READY TO ACCEPT
                <span className="block font-light tracking-[-0.06em]">
                  BOOKINGS ONLINE?
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/86 sm:text-[16px]">
                Let us design and build a booking platform that helps your
                customers reserve services easily while giving your business full
                control over schedules, payments, reminders, and daily operations.
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

export default BookingPlatformsPage;