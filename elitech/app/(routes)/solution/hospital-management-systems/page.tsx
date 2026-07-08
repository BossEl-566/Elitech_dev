"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Ambulance,
  ArrowRight,
  BarChart3,
  BedDouble,
  BellRing,
  Building2,
  CalendarCheck,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  Database,
  FileText,
  HeartPulse,
  Hospital,
  Lock,
  Microscope,
  Pill,
  Settings,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";

import heroBg from "../../../assets/hero-bg.png";
import aboutBg from "../../../assets/about-bg.png";
import hospitalImg from "../../../assets/hospitalImg.png";
import contactBg from "../../../assets/contact-bg.png";

const modules = [
  {
    icon: UsersRound,
    title: "Patient Management",
    description:
      "Register patients, manage personal records, medical history, emergency contacts, visit history, and patient profiles from one secure platform.",
  },
  {
    icon: CalendarCheck,
    title: "Appointments",
    description:
      "Schedule consultations, manage doctor availability, reduce waiting time, and organize patient bookings efficiently.",
  },
  {
    icon: Stethoscope,
    title: "Doctor & Staff Management",
    description:
      "Manage doctors, nurses, departments, roles, duty schedules, permissions, and internal hospital staff records.",
  },
  {
    icon: ClipboardList,
    title: "Electronic Medical Records",
    description:
      "Store diagnosis notes, prescriptions, lab requests, treatment plans, allergies, vitals, and consultation records digitally.",
  },
  {
    icon: Pill,
    title: "Pharmacy Management",
    description:
      "Track medicine stock, prescriptions, dispensing records, expiry dates, purchases, and pharmacy sales.",
  },
  {
    icon: Microscope,
    title: "Laboratory Management",
    description:
      "Manage lab test requests, sample collection, results, reports, patient test history, and lab workflow.",
  },
  {
    icon: BedDouble,
    title: "Ward & Bed Management",
    description:
      "Monitor ward admissions, bed availability, discharge records, inpatient movement, and room allocation.",
  },
  {
    icon: WalletCards,
    title: "Billing & Payments",
    description:
      "Handle consultation fees, admission bills, lab payments, pharmacy charges, invoices, receipts, and financial reports.",
  },
];

const benefits = [
  "Faster patient registration and record retrieval",
  "Reduced paperwork and manual hospital administration",
  "Better coordination between doctors, nurses, pharmacy, and laboratory",
  "Improved billing accuracy and payment tracking",
  "Secure access to patient medical information",
  "Clear reports for hospital management decisions",
];

const workflow = [
  {
    step: "01",
    title: "Patient Registration",
    description:
      "Patients are registered with personal details, medical information, contact records, and unique hospital identification.",
  },
  {
    step: "02",
    title: "Consultation & Diagnosis",
    description:
      "Doctors view patient history, record symptoms, enter diagnosis notes, request lab tests, and prescribe medication.",
  },
  {
    step: "03",
    title: "Lab, Pharmacy & Billing",
    description:
      "The lab processes test requests, pharmacy handles prescriptions, and the billing unit tracks all service charges.",
  },
  {
    step: "04",
    title: "Reports & Follow-up",
    description:
      "Management can view reports, patients can be scheduled for reviews, and records are kept for future medical decisions.",
  },
];

const userGroups = [
  {
    icon: Hospital,
    title: "Hospital Administrators",
    description:
      "Manage departments, staff, reports, finances, user access, patient records, and overall hospital operations.",
  },
  {
    icon: Stethoscope,
    title: "Doctors & Nurses",
    description:
      "Access patient history, enter consultation notes, request tests, prescribe medicine, and manage clinical workflows.",
  },
  {
    icon: Pill,
    title: "Pharmacy & Laboratory",
    description:
      "Process prescriptions, manage stock, handle lab requests, upload results, and coordinate with clinical staff.",
  },
];

const qualityCards = [
  {
    icon: Database,
    title: "Centralized Records",
    description:
      "Patient, staff, billing, pharmacy, and laboratory records are organized in one reliable system.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Control what admins, doctors, nurses, pharmacists, lab staff, and accountants can access.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Access hospital data securely from approved devices with proper backup and availability planning.",
  },
  {
    icon: Settings,
    title: "Custom Modules",
    description:
      "The system can be customized for clinics, hospitals, diagnostic centers, and specialist facilities.",
  },
];

function HospitalManagementSystemsPage() {
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
            alt="Hospital management system background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#061a31]/84" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,14,35,0.95)_0%,rgba(3,14,35,0.78)_45%,rgba(3,14,35,0.42)_100%)]" />
        </div>

        <div className="pointer-events-none absolute -left-28 top-36 h-96 w-96 rounded-full bg-[#36B7F0]/12 blur-3xl" />
        <div className="pointer-events-none absolute right-[8%] top-[22%] h-80 w-80 rounded-full bg-[#267A9E]/16 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative max-w-3xl"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                  Elitech Dev Healthcare Solution
                </span>
                <span className="h-px w-24 bg-[#36B7F0]/70" />
              </div>

              <h1 className="text-[2.65rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5rem]">
                HOSPITAL
                <br />
                MANAGEMENT
                <span className="block font-light">SYSTEMS</span>
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-[16px]">
                We build secure hospital management systems that help clinics,
                hospitals, and healthcare facilities manage patients, appointments,
                doctors, pharmacy, laboratory, billing, wards, and medical records
                from one reliable digital platform.
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

            {/* RIGHT DASHBOARD MOCKUP */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -left-5 -top-5 h-[82%] w-[82%] border-2 border-[#36B7F0]/55" />

              <div className="relative overflow-hidden border border-white/10 bg-white/[0.08] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                <div className="rounded-[28px] bg-[#f7fbff] p-5 shadow-2xl">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-[#267A9E]">
                        Hospital Dashboard
                      </p>
                      <h3 className="mt-1 text-[1.35rem] font-extrabold text-[#07182d]">
                        Welcome, Admin
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07182d]">
                      <HeartPulse className="text-[#36B7F0]" size={23} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        icon: UsersRound,
                        label: "Patients Today",
                        value: "248",
                        color: "bg-blue-100 text-blue-700",
                      },
                      {
                        icon: Stethoscope,
                        label: "Doctors Active",
                        value: "36",
                        color: "bg-green-100 text-green-700",
                      },
                      {
                        icon: BedDouble,
                        label: "Available Beds",
                        value: "72",
                        color: "bg-purple-100 text-purple-700",
                      },
                      {
                        icon: WalletCards,
                        label: "Revenue Today",
                        value: "₵85,420",
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
                          <p className="text-[12px] text-[#667085]">
                            {item.label}
                          </p>
                          <h4 className="mt-1 text-[1.4rem] font-extrabold text-[#07182d]">
                            {item.value}
                          </h4>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#e2e9f0] bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-[14px] font-extrabold text-[#07182d]">
                        Patient Flow
                      </h4>
                      <span className="rounded-full bg-[#e6f8fd] px-3 py-1 text-[11px] font-semibold text-[#267A9E]">
                        This Week
                      </span>
                    </div>

                    <div className="flex h-[150px] items-end gap-3">
                      {[35, 58, 42, 76, 64, 88, 70].map((height, index) => (
                        <div
                          key={index}
                          className="flex flex-1 flex-col items-center gap-2"
                        >
                          <div
                            className="w-full rounded-t-xl bg-[#267A9E]"
                            style={{ height: `${height}%` }}
                          />
                          <span className="text-[10px] text-[#667085]">
                            D{index + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-[#07182d] p-4 text-white">
                      <p className="text-[12px] text-white/65">
                        Emergency Cases
                      </p>
                      <h4 className="mt-2 text-[1.6rem] font-extrabold">14</h4>
                    </div>

                    <div className="rounded-2xl bg-[#e6f8fd] p-4">
                      <p className="text-[12px] text-[#267A9E]">
                        Lab Results Ready
                      </p>
                      <h4 className="mt-2 text-[1.6rem] font-extrabold text-[#07182d]">
                        53
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 max-w-[270px] border border-[#36B7F0]/40 bg-[#07182d]/95 p-6 shadow-2xl backdrop-blur-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f8fd]">
                  <ShieldCheck className="text-[#267A9E]" size={24} />
                </div>
                <h3 className="text-[1rem] font-bold text-white">
                  Secure healthcare operations.
                </h3>
                <p className="mt-2 text-[12px] leading-6 text-white/68">
                  Built for hospitals that need accuracy, speed, privacy, and
                  reliable reporting.
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
            alt="Hospital management overview background"
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
                  src={hospitalImg}
                  alt="Hospital administration software"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-8 right-8 bg-white p-6 shadow-[0_20px_55px_rgba(20,26,71,0.16)]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "24/7", label: "Access" },
                    { value: "100%", label: "Digital" },
                    { value: "Secure", label: "Records" },
                  ].map((item) => (
                    <div key={item.label}>
                      <h4 className="text-[1.1rem] font-extrabold text-[#07182d]">
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
                  Solution Overview
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.6rem]">
                MANAGE HEALTHCARE
                <span className="block font-light tracking-[-0.05em]">
                  FROM ONE PLATFORM
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                Many healthcare facilities struggle with paper records, long
                patient queues, scattered billing, missing files, pharmacy stock
                issues, slow lab reporting, and poor coordination between
                departments. Our Hospital Management System brings these processes
                together in one organized platform.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#606875]">
                Whether you run a clinic, private hospital, maternity center,
                diagnostic center, pharmacy-connected facility, or specialist
                healthcare institution, we can design a solution that fits your
                operations.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Activity, label: "Track hospital activity" },
                  { icon: BellRing, label: "Improve patient communication" },
                  { icon: Lock, label: "Secure medical records" },
                  { icon: Ambulance, label: "Support emergency workflow" },
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
              WHAT THE HOSPITAL SYSTEM
              <span className="font-light tracking-[-0.05em]"> CAN DO</span>
            </h2>

            <p className="mt-3 text-[14px] leading-7 text-[#6c7280]">
              The platform can be customized with the modules your healthcare
              facility needs most.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      {/* USER GROUPS SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Hospital users background"
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
                User Access
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              DESIGNED FOR
              <span className="font-light tracking-[-0.05em]">
                {" "}
                HEALTHCARE TEAMS
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {userGroups.map((user, index) => {
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

      {/* BENEFITS SECTION */}
      <section className="relative overflow-hidden bg-[#061524] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Hospital benefits background"
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
                  Why Hospitals Need It
                </span>
                <span className="h-px w-24 bg-[#36B7F0]/70" />
              </div>

              <h2 className="text-[2.3rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.1rem] lg:text-[3.8rem]">
                BUILT FOR
                <span className="block font-light tracking-[-0.05em]">
                  BETTER PATIENT CARE
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/76">
                A hospital management system helps healthcare providers reduce
                delays, improve record accuracy, coordinate departments, and give
                patients a smoother service experience.
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
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Hospital workflow background"
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
                Healthcare Workflow
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              HOW THE SYSTEM
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
                  AND HEALTHCARE-READY
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                We design every hospital system with secure databases, controlled
                user access, clear audit trails, responsive dashboards, backup
                planning, and future expansion in mind.
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
                    className="border border-[#267A9E]/15 bg-[#f7f8f9] p-6"
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
                  Start Your Hospital System
                </span>
                <span className="h-px w-28 bg-[#36B7F0]/75" />
              </div>

              <h2 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]">
                READY TO DIGITIZE
                <span className="block font-light tracking-[-0.06em]">
                  YOUR HEALTHCARE FACILITY?
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/86 sm:text-[16px]">
                Let us design and build a hospital management system that improves
                patient care, simplifies administration, strengthens reporting,
                and gives your healthcare team better operational control.
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

export default HospitalManagementSystemsPage;