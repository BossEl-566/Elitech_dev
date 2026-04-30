"use client";

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Globe,
  Smartphone,
  Code2,
  Brain,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import contactBg from "../../assets/contact-bg.png";
import aboutBg from "../../assets/about-bg.png";

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@elitechdev.com",
    href: "mailto:info@elitechdev.com",
    description: "Send us a message anytime.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+233 00 000 0000",
    href: "tel:+233000000000",
    description: "Speak directly with our team.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Accra, Ghana",
    href: "#",
    description: "Available for local and remote projects.",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri, 9AM - 5PM",
    href: "#",
    description: "We respond as quickly as possible.",
  },
];

const projectTypes = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "AI Solution",
  "Automation System",
  "Cloud Integration",
  "UI/UX Design",
  "Business System",
  "Other",
];

const reasons = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Build modern web apps, mobile apps, dashboards, and custom business platforms.",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    text: "Use artificial intelligence and automation to simplify workflows and improve operations.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    text: "Get technical support, maintenance, upgrades, and long-term improvement for your systems.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Web Development",
    budget: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `New Project Inquiry - ${formData.projectType}`
    );

    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}

Message:
${formData.message}
    `);

    window.location.href = `mailto:info@elitechdev.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative overflow-hidden bg-white font-['Poppins',sans-serif]">
      {/* HERO SECTION */}
      <section className="relative min-h-[72vh] overflow-hidden bg-[#061524]">
        <div className="absolute inset-0">
          <Image
            src={contactBg}
            alt="Contact Elitech Dev"
            fill
            priority
            className="object-cover"
          />

          {/* darker overlays for transparent header */}
          <div className="absolute inset-0 bg-[#061524]/82" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,14,35,0.95)_0%,rgba(3,14,35,0.80)_48%,rgba(3,14,35,0.52)_100%)]" />
        </div>

        <div className="pointer-events-none absolute -left-28 top-32 h-96 w-96 rounded-full bg-[#36B7F0]/12 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-10 h-96 w-96 rounded-full bg-[#267A9E]/12 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-4 flex items-center gap-4">
              <span className="text-[13px] font-bold uppercase tracking-wide text-[#36B7F0]">
                Contact Elitech Dev
              </span>
              <span className="h-px w-28 bg-[#36B7F0]/75" />
            </div>

            <h1 className="text-[3rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-white sm:text-[4.2rem] lg:text-[5.3rem]">
              LET’S BUILD
              <br />
              SOMETHING
              <br />
              POWERFUL
            </h1>

            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/82 sm:text-[16px]">
              Have an idea, project, business challenge, or digital product in
              mind? Talk to us. We help businesses and institutions build
              reliable software, smart systems, AI solutions, and modern digital
              platforms.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@elitechdev.com"
                className="group inline-flex items-center gap-3 rounded-full bg-[#36A7CF] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_16px_40px_rgba(54,183,240,0.24)] transition-all duration-300 hover:bg-[#267A9E]"
              >
                Send Us An Email
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267A9E] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                  <ArrowRight size={15} />
                </span>
              </a>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 transition-all duration-300 hover:text-[#36B7F0]"
              >
                View Services
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative z-20 -mt-16 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group border border-gray-200 bg-white p-7 shadow-[0_18px_50px_rgba(20,26,71,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#36B7F0]/60"
                >
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#e6f8fd]">
                    <Icon size={26} className="text-[#267A9E]" />
                  </div>

                  <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.03em] text-[#07182d]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[14px] font-semibold text-[#267A9E]">
                    {card.value}
                  </p>

                  <p className="mt-3 text-[13px] leading-6 text-[#606875]">
                    {card.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative overflow-hidden bg-[#f7f8f9] py-24">
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Contact background"
            fill
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* left text */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center gap-4">
                <span className="text-[13px] font-bold uppercase tracking-wide text-[#267A9E]">
                  Start A Conversation
                </span>
                <span className="h-px w-24 bg-[#267A9E]/75" />
              </div>

              <h2 className="text-[2.3rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.7rem]">
                TELL US ABOUT{" "}
                <span className="font-light tracking-[-0.05em]">
                  YOUR PROJECT
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#606875]">
                Whether you are starting from an idea or improving an existing
                system, we want to understand your goals clearly. Send us the
                details and we will help you identify the right solution.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Clear project direction and professional guidance",
                  "Modern software design and scalable development",
                  "Practical solutions for real business problems",
                  "Support from planning to implementation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="mt-1 shrink-0 text-[#267A9E]"
                    />
                    <p className="text-[14px] leading-7 text-[#303847]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[#36B7F0]/25 bg-white p-6 shadow-[0_16px_45px_rgba(20,26,71,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#e6f8fd]">
                    <Headphones size={24} className="text-[#267A9E]" />
                  </div>

                  <div>
                    <h3 className="text-[1.1rem] font-bold text-[#07182d]">
                      Need quick support?
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#606875]">
                      For urgent requests, call or email us directly and our
                      team will respond as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* form */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="border border-gray-200 bg-white p-6 shadow-[0_24px_70px_rgba(20,26,71,0.12)] sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-bold text-[#07182d]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full border border-gray-200 bg-[#f8fafc] px-4 py-3 text-[14px] text-[#07182d] outline-none transition focus:border-[#36B7F0] focus:bg-white focus:ring-4 focus:ring-[#36B7F0]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-bold text-[#07182d]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Enter your email"
                      className="w-full border border-gray-200 bg-[#f8fafc] px-4 py-3 text-[14px] text-[#07182d] outline-none transition focus:border-[#36B7F0] focus:bg-white focus:ring-4 focus:ring-[#36B7F0]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-bold text-[#07182d]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+233..."
                      className="w-full border border-gray-200 bg-[#f8fafc] px-4 py-3 text-[14px] text-[#07182d] outline-none transition focus:border-[#36B7F0] focus:bg-white focus:ring-4 focus:ring-[#36B7F0]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-bold text-[#07182d]">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full border border-gray-200 bg-[#f8fafc] px-4 py-3 text-[14px] text-[#07182d] outline-none transition focus:border-[#36B7F0] focus:bg-white focus:ring-4 focus:ring-[#36B7F0]/10"
                    >
                      {projectTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#07182d]">
                    Estimated Budget
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    placeholder="Example: GHS 5,000 - GHS 20,000"
                    className="w-full border border-gray-200 bg-[#f8fafc] px-4 py-3 text-[14px] text-[#07182d] outline-none transition focus:border-[#36B7F0] focus:bg-white focus:ring-4 focus:ring-[#36B7F0]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-bold text-[#07182d]">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us what you want to build..."
                    className="w-full resize-none border border-gray-200 bg-[#f8fafc] px-4 py-3 text-[14px] text-[#07182d] outline-none transition focus:border-[#36B7F0] focus:bg-white focus:ring-4 focus:ring-[#36B7F0]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#267A9E] px-6 py-4 text-[15px] font-bold text-white shadow-[0_16px_40px_rgba(38,122,158,0.22)] transition-all duration-300 hover:bg-[#034663]"
                >
                  Send Message
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f6f91] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                    <Send size={15} />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CONTACT US */}
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
                How We Can Help
              </span>
              <span className="h-px w-24 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.2rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.5rem]">
              LET’S SOLVE THE{" "}
              <span className="font-light tracking-[-0.05em]">
                RIGHT PROBLEM
              </span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#606875]">
              We do not only build software. We help you understand the problem,
              plan the right system, and create a solution that can grow with
              your business.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="border border-gray-200 bg-white p-8 shadow-[0_16px_45px_rgba(20,26,71,0.08)] transition-all duration-300 hover:border-[#36B7F0]/55"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f8fd]">
                    <Icon size={28} className="text-[#267A9E]" />
                  </div>

                  <h3 className="mt-6 text-[1.3rem] font-extrabold tracking-[-0.03em] text-[#07182d]">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#606875]">
                    {reason.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#061524] py-24">
        <div className="absolute inset-0">
          <Image
            src={contactBg}
            alt="Contact call to action"
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
                  Ready When You Are
                </span>
                <span className="h-px w-28 bg-[#36B7F0]/75" />
              </div>

              <h2 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]">
                START YOUR{" "}
                <span className="font-light tracking-[-0.06em]">
                  PROJECT TODAY
                </span>
              </h2>

              <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/84">
                Send us your project idea, and let’s discuss how Elitech Dev can
                help you build a strong, reliable, and scalable digital
                solution.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:info@elitechdev.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#36A7CF] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_16px_40px_rgba(54,183,240,0.24)] transition-all duration-300 hover:bg-[#267A9E]"
                >
                  Email Us Now
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#267A9E] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                    <Mail size={15} />
                  </span>
                </a>

                <a
                  href="tel:+233000000000"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:border-[#36B7F0] hover:text-[#36B7F0]"
                >
                  <Phone size={17} />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;