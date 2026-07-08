"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  BellRing,
  CheckCircle,
  ChevronRight,
  Cloud,
  CreditCard,
  Database,
  FileCheck2,
  FileText,
  Landmark,
  LayoutDashboard,
  Lock,
  MessageSquareText,
  PlugZap,
  QrCode,
  ReceiptText,
  RefreshCcw,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  WalletCards,
  Webhook,
} from "lucide-react";

import heroBg from "../../../assets/hero-bg.png";
import aboutBg from "../../../assets/about-bg.png";
import paymentImg from "../../../assets/paymentImg.png";
import contactBg from "../../../assets/contact-bg.png";

const paymentFeatures = [
  {
    icon: Smartphone,
    title: "Mobile Money Integration",
    description:
      "Accept mobile money payments from customers and connect payment confirmations directly into your website, app, or business system.",
  },
  {
    icon: CreditCard,
    title: "Card Payment Integration",
    description:
      "Enable secure debit and credit card payments through trusted payment gateways with smooth checkout experiences.",
  },
  {
    icon: Landmark,
    title: "Bank Transfer Support",
    description:
      "Allow customers to pay through bank transfer workflows and record payment confirmations inside your admin dashboard.",
  },
  {
    icon: WalletCards,
    title: "Checkout Integration",
    description:
      "Build a clean checkout flow for products, services, subscriptions, bookings, invoices, school fees, or business payments.",
  },
  {
    icon: ReceiptText,
    title: "Receipts & Invoices",
    description:
      "Automatically generate receipts, invoices, payment references, and transaction summaries after successful payments.",
  },
  {
    icon: Webhook,
    title: "Webhook Automation",
    description:
      "Use payment webhooks to update order status, booking status, subscription access, or invoice records automatically.",
  },
  {
    icon: RefreshCcw,
    title: "Refunds & Reconciliation",
    description:
      "Track successful, failed, pending, refunded, and reversed transactions for easier accounting and reconciliation.",
  },
  {
    icon: BarChart3,
    title: "Payment Reports",
    description:
      "Monitor revenue, payment channels, transaction volume, pending payments, customer payment history, and financial performance.",
  },
];

const paymentUseCases = [
  {
    icon: LayoutDashboard,
    title: "Business Systems",
    description:
      "Add payment collection to business management systems, admin dashboards, customer portals, and internal platforms.",
  },
  {
    icon: PlugZap,
    title: "Websites & Apps",
    description:
      "Connect payment gateways to company websites, e-commerce stores, mobile apps, booking platforms, and SaaS products.",
  },
  {
    icon: FileCheck2,
    title: "Invoices & Fees",
    description:
      "Collect school fees, hospital bills, subscriptions, service invoices, membership payments, and customer balances.",
  },
];

const benefits = [
  "Accept digital payments directly from your website or application",
  "Reduce manual payment confirmation and human errors",
  "Automatically update orders, bookings, invoices, or user access",
  "Track successful, failed, pending, and refunded transactions",
  "Give customers a faster and more professional payment experience",
  "Improve accounting, reporting, and financial visibility",
  "Support mobile money, card, bank transfer, and invoice-based payments",
  "Secure your payment flow with controlled access and transaction records",
];

const workflow = [
  {
    step: "01",
    title: "Customer Starts Payment",
    description:
      "The customer selects a product, service, invoice, booking, subscription, or fee and proceeds to payment.",
  },
  {
    step: "02",
    title: "Gateway Processes Payment",
    description:
      "The payment gateway securely handles mobile money, card, bank, or other selected payment methods.",
  },
  {
    step: "03",
    title: "System Receives Confirmation",
    description:
      "Payment status is returned to your system through API callbacks, webhook events, or transaction verification.",
  },
  {
    step: "04",
    title: "Records Update Automatically",
    description:
      "Orders, invoices, bookings, accounts, receipts, dashboards, and reports are updated automatically.",
  },
];

const securityCards = [
  {
    icon: ShieldCheck,
    title: "Secure Gateway Setup",
    description:
      "Connect payment providers using secure API keys, protected credentials, and safe integration practices.",
  },
  {
    icon: Lock,
    title: "Protected Transactions",
    description:
      "Keep transaction data organized and limit access to only authorized admins, accountants, and managers.",
  },
  {
    icon: Database,
    title: "Transaction Database",
    description:
      "Store payment references, customer records, order IDs, receipts, statuses, and reconciliation data.",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    description:
      "Deploy payment-enabled systems on reliable infrastructure with backup planning and controlled availability.",
  },
];

function PaymentIntegrationsPage() {
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
            alt="Payment integration background"
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
                  Elitech Dev Integration Solution
                </span>
                <span className="h-px w-24 bg-[#36B7F0]/70" />
              </div>

              <h1 className="text-[2.7rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5rem]">
                PAYMENT
                <br />
                INTEGRATIONS
                <span className="block font-light">SYSTEMS</span>
              </h1>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-[16px]">
                We integrate secure payment systems into websites, mobile apps,
                business platforms, client portals, booking systems, school
                systems, hospital systems, and e-commerce platforms so your
                customers can pay faster and your records update automatically.
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

            {/* RIGHT PAYMENT DASHBOARD MOCKUP */}
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
                        Payment Dashboard
                      </p>
                      <h3 className="mt-1 text-[1.35rem] font-extrabold text-[#07182d]">
                        Transaction Overview
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                        <Search size={18} className="text-[#667085]" />
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07182d]">
                        <WalletCards className="text-[#36B7F0]" size={23} />
                      </div>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid gap-4 sm:grid-cols-4">
                    {[
                      {
                        icon: WalletCards,
                        label: "Total Revenue",
                        value: "₵84.6k",
                        color: "bg-blue-100 text-blue-700",
                      },
                      {
                        icon: BadgeCheck,
                        label: "Successful",
                        value: "1,284",
                        color: "bg-green-100 text-green-700",
                      },
                      {
                        icon: RefreshCcw,
                        label: "Pending",
                        value: "42",
                        color: "bg-orange-100 text-orange-700",
                      },
                      {
                        icon: ShieldCheck,
                        label: "Verified",
                        value: "98%",
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
                          Payment Channels
                        </h4>
                        <span className="rounded-full bg-[#e6f8fd] px-3 py-1 text-[11px] font-semibold text-[#267A9E]">
                          This Month
                        </span>
                      </div>

                      <div className="space-y-5">
                        {[
                          { label: "Mobile Money", value: 72 },
                          { label: "Card Payments", value: 58 },
                          { label: "Bank Transfer", value: 36 },
                          { label: "Invoice Payments", value: 49 },
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
                          Recent Payments
                        </h4>
                        <ReceiptText size={18} className="text-[#267A9E]" />
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            name: "Invoice #INV-2045",
                            amount: "₵2,450",
                            status: "Paid",
                          },
                          {
                            name: "Booking Payment",
                            amount: "₵850",
                            status: "Success",
                          },
                          {
                            name: "School Fees",
                            amount: "₵1,200",
                            status: "Pending",
                          },
                          {
                            name: "Product Order",
                            amount: "₵640",
                            status: "Paid",
                          },
                        ].map((item) => (
                          <div
                            key={`${item.name}-${item.amount}`}
                            className="flex items-center justify-between gap-3 border-b border-[#edf2f7] pb-3 last:border-b-0 last:pb-0"
                          >
                            <div>
                              <p className="text-[12px] font-bold text-[#07182d]">
                                {item.name}
                              </p>
                              <p className="mt-1 text-[11px] text-[#667085]">
                                {item.amount}
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
                      { icon: QrCode, label: "Pay Link" },
                      { icon: ReceiptText, label: "Receipt" },
                      { icon: Webhook, label: "Webhook" },
                      { icon: BarChart3, label: "Reports" },
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
                  Secure payment flow.
                </h3>
                <p className="mt-2 text-[12px] leading-6 text-white/68">
                  Built for businesses that need fast checkout, automatic
                  confirmations, accurate reports, and protected transactions.
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
            alt="Payment integration overview background"
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
                  src={paymentImg}
                  alt="Payment integration interface"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-8 right-8 bg-white p-6 shadow-[0_20px_55px_rgba(20,26,71,0.16)]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "Fast", label: "Checkout" },
                    { value: "Secure", label: "Payments" },
                    { value: "Auto", label: "Updates" },
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
                  Integration Overview
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.6rem]">
                ACCEPT PAYMENTS
                <span className="block font-light tracking-[-0.05em]">
                  WITHOUT MANUAL STRESS
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                Many businesses still confirm payments manually through screenshots,
                calls, messages, bank alerts, and spreadsheets. This creates delays,
                errors, and confusion when orders, invoices, bookings, or user
                accounts must be updated.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#606875]">
                Payment integration connects your digital platform to a payment
                gateway so your system can receive confirmation, update records,
                issue receipts, and show accurate financial reports automatically.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Smartphone, label: "Mobile money payments" },
                  { icon: CreditCard, label: "Card checkout support" },
                  { icon: Lock, label: "Secure transaction records" },
                  { icon: MessageSquareText, label: "Payment notifications" },
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
                Payment Features
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              WHAT PAYMENT INTEGRATION
              <span className="font-light tracking-[-0.05em]"> CAN DO</span>
            </h2>

            <p className="mt-3 text-[14px] leading-7 text-[#6c7280]">
              We connect your system to digital payment workflows that make
              transactions faster, safer, and easier to track.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {paymentFeatures.map((feature, index) => {
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

      {/* USE CASES SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Payment use cases background"
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
                Integration Use Cases
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              BUILT FOR
              <span className="font-light tracking-[-0.05em]">
                {" "}
                MANY DIGITAL SYSTEMS
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {paymentUseCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#606875]">
                    {item.description}
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
            alt="Payment integration benefits background"
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
                  FASTER PAYMENT COLLECTION
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/76">
                Payment integration helps your business collect money faster,
                confirm transactions automatically, reduce accounting mistakes,
                and give customers a smoother digital payment experience.
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
                Payment Workflow
              </span>
              <span className="h-px w-20 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.4rem]">
              HOW THE INTEGRATION
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

      {/* SECURITY SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Payment security background"
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
                  Payment Security
                </span>
                <span className="h-px w-24 bg-[#267A9E]" />
              </div>

              <h2 className="text-[2.25rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem]">
                SECURE, TRACEABLE
                <span className="block font-light tracking-[-0.05em]">
                  AND BUSINESS-READY
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                We design payment integrations with secure gateway setup,
                transaction verification, webhook handling, database records,
                controlled user access, and clear admin reporting.
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
                  Start Your Payment Integration
                </span>
                <span className="h-px w-28 bg-[#36B7F0]/75" />
              </div>

              <h2 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]">
                READY TO ACCEPT
                <span className="block font-light tracking-[-0.06em]">
                  DIGITAL PAYMENTS?
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/86 sm:text-[16px]">
                Let us integrate a secure payment system into your website, app,
                business platform, school system, hospital system, booking platform,
                or e-commerce store.
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

export default PaymentIntegrationsPage;