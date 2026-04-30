"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Star, Code2, Layers3, ShieldCheck, Users, Clock, Zap, Sparkles,
  Briefcase, FolderGit2, Mail, Phone, MapPin, CheckCircle, Play, Quote, Cpu, Cloud, Database, Smartphone,
  Globe, TrendingUp, Heart, Award, MessageCircle, Calendar, ChevronRight
} from "lucide-react";
import {
  Brain,
  LayoutDashboard,
  Paintbrush,
  Shield,
  Rocket,
  ShoppingBag,
  CreditCard,
} from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter
} from "react-icons/fa6";
import heroBg from "./assets/hero-bg.png";
import aboutBg from "./assets/about-bg.png";
import aboutImgOne from "./assets/about-1.png";
import aboutImgTwo from "./assets/about-2.png";
import aboutImgThree from "./assets/about-3.png";
import aboutImgFour from "./assets/about-4.png";
import softwareOne from "./assets/about-2.png";
import softwareTwo from "./assets/about-3.png";

const focusAreas = [
  {
    icon: Code2,
    title: "Core Development",
    href: "/services",
    image: aboutImgOne,
    description:
      "We build reliable web applications, mobile apps, desktop software, and custom systems designed around real business operations.",
    links: [
      "Web Development",
      "Mobile App Development",
      "Desktop Applications",
      "Custom Software",
    ],
  },
  {
    icon: Brain,
    title: "Emerging Technology",
    href: "/services",
    image: aboutImgTwo,
    description:
      "We help businesses adopt AI, machine learning, automation, and cloud technologies to improve speed, intelligence, and efficiency.",
    links: [
      "AI Solutions",
      "Machine Learning",
      "Automation Systems",
      "Cloud Integration",
    ],
  },
  {
    icon: Paintbrush,
    title: "Design & Support",
    href: "/services",
    image: aboutImgThree,
    description:
      "We provide clean UI/UX design, modern web design, system maintenance, upgrades, and long-term technical support.",
    links: [
      "UI/UX Design",
      "Web Design",
      "Maintenance & Support",
      "System Upgrades",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    href: "/solutions",
    image: aboutImgFour,
    description:
      "We create digital platforms for schools, hospitals, businesses, e-commerce operations, and growing institutions.",
    links: [
      "Business Management Systems",
      "School Management Systems",
      "Hospital Management Systems",
      "E-commerce Platforms",
    ],
  },
  {
    icon: Sparkles,
    title: "Digital Products",
    href: "/solutions",
    image: aboutImgOne,
    description:
      "We develop client portals, booking platforms, payment systems, admin dashboards, and other digital products for modern companies.",
    links: [
      "Client Portals",
      "Booking Platforms",
      "Payment Integrations",
      "Admin Dashboards",
    ],
  },
];
const softwareHighlights = [
  {
    title: "Business Management Systems",
    badge: "BMS",
    image: softwareOne,
    href: "/solution/business-management-systems",
    description:
      "We build business management systems that help companies manage operations, customers, inventory, reporting, internal workflows, and daily business activities from one reliable digital platform.",
  },
  {
    title: "School Management Systems",
    badge: "SMS",
    image: softwareTwo,
    href: "/solution/school-management-systems",
    description:
      "Our school management systems help institutions manage students, staff, fees, attendance, results, communication, and administrative processes through a modern and easy-to-use platform.",
  },
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    gradient: "from-[#141a47] to-[#1a2260]"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    gradient: "from-[#141a47] to-[#1a2260]"
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Intelligent automation and machine learning solutions for business growth.",
    gradient: "from-[#141a47] to-[#1a2260]"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Scalable cloud infrastructure and seamless integration services.",
    gradient: "from-[#141a47] to-[#1a2260]"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics.",
    gradient: "from-[#141a47] to-[#1a2260]"
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets.",
    gradient: "from-[#141a47] to-[#1a2260]"
  },
];

const solutions = [
  {
    title: "Business Management",
    description: "Comprehensive ERP and business management solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    features: ["Inventory Management", "CRM Integration", "Financial Analytics"]
  },
  {
    title: "School Management",
    description: "Complete educational institution management platform",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    features: ["Student Portal", "Grade Management", "Parent Communication"]
  },
  {
    title: "Healthcare Systems",
    description: "HIPAA-compliant healthcare management solutions",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    features: ["Patient Records", "Appointment Scheduling", "Telemedicine"]
  },
  {
    title: "E-commerce Platforms",
    description: "Scalable online stores with payment integration",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&h=400&fit=crop",
    features: ["Payment Gateway", "Inventory Sync", "Analytics Dashboard"]
  }
];

const projects = [
  {
    title: "FinTech Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Revolutionary banking platform serving 100k+ users"
  },
  {
    title: "HealthAI Diagnostics",
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    description: "AI-powered medical diagnosis assistance system"
  },
  {
    title: "CloudScale ERP",
    category: "Cloud Integration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    description: "Enterprise resource planning on cloud infrastructure"
  },
  {
    title: "ShopEase Mobile",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    description: "Cross-platform e-commerce mobile application"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "ELITECH transformed our digital presence completely. Their team delivered beyond expectations with exceptional quality.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content: "The best development team we've worked with. Professional, timely, and highly skilled in modern technologies.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    content: "Exceptional quality and attention to detail. Our platform has never performed better since the redesign.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const stats = [
  { icon: Award, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Code2, value: "50+", label: "Expert Developers" },
  { icon: Globe, value: "25+", label: "Countries Served" },
];

const partners = [
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=150&h=80&fit=crop",
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=80&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=150&h=80&fit=crop",
];

function Home() {
  return (
    <div className="relative overflow-hidden bg-[#f7f5f0]" style={{ fontFamily: "'Droid Sans Mono', 'Courier New', monospace" }}>
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-[#07182d] font-['Poppins',sans-serif]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Corporate meeting background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#061a31]/78" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,14,35,0.88)_0%,rgba(3,14,35,0.62)_35%,rgba(3,14,35,0.35)_100%)]" />
        </div>

        {/* soft blue mood */}
        <div className="absolute inset-0">
          <div className="absolute -left-30 top-45 h-95 w-95 rounded-full bg-[#1d8fca]/10 blur-3xl" />
          <div className="absolute right-[8%] top-[20%] h-70 w-70 rounded-full bg-[#123d75]/18 blur-3xl" />
        </div>

        {/* content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[120px_minmax(0,720px)_1fr]">
            
            {/* Left side rail */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden h-full flex-col items-center justify-between py-10 lg:flex"
            >
              <div className="flex flex-col items-center">
              </div>

              <div className="flex flex-col items-center gap-5">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[11px] text-white/80 [writing-mode:vertical-rl]">
                    Follow Us
                  </span>
                  <span className="h-20 w-px bg-white/30" />
                </motion.div>

                <div className="flex flex-col gap-3">
                  {[
                    { icon: FaFacebookF, href: "#", label: "Facebook" },
                    { icon: FaInstagram, href: "#", label: "Instagram" },
                    { icon: FaXTwitter, href: "#", label: "X" },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, rotate: 12 }}
                      >
                        <Link
                          href={item.href}
                          aria-label={item.label}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/45 text-white/90 transition-all duration-300 hover:border-[#7fd7ff] hover:text-[#7fd7ff]"
                        >
                          <Icon className="text-[12px]" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Main hero copy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative max-w-190"
            >
              <div className="relative inline-block">
                {/* frame */}
                <div className="pointer-events-none absolute left-0 top-0 h-70 w-55 border-l-4 border-t-4 border-[#5ecfff] sm:h-80 sm:w-65" />
                <div className="pointer-events-none absolute bottom-4.5 left-0 h-25 w-55 border-b-4 border-r-4 border-[#5ecfff] sm:w-65" />

                {/* main content */}
                <div className="relative z-10 pl-8 pt-12 sm:pl-12 sm:pt-14">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-175 text-[2.8rem] font-bold leading-[0.9] tracking-[-0.03em] text-white sm:text-[3.8rem] lg:text-[4.6rem]"
                  >
                    WE
                    <br />
                    IMPLEMENT
                  </motion.h1>

                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-4 text-[1.6rem] font-bold leading-none tracking-[-0.02em] text-white sm:text-[2.2rem] lg:text-[2.8rem]"
                  >
                    CORPORATE SOFTWARE
                  </motion.h2>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-6 flex max-w-[560px] items-start gap-4"
                  >
                    <div className="mt-1 hidden h-14 w-[3px] bg-[#5ecfff] sm:block" />
                    <p className="max-w-[430px] text-[13px] leading-6 text-white/82 sm:text-[14px]">
                      We implement the corporate performance software
                      {" "}
                      <span className="font-medium text-white">“Elitech Dev”</span>
                      {" "}
                      for consolidation, planning and reporting purposes.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="mt-16"
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_30px_rgba(105,201,243,0.22)] transition-all duration-300 hover:bg-[#034663]"
                    >
                      Get Started Now
                      <motion.span 
                        whileHover={{ x: 4 }}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white/14 transition-all duration-300"
                      >
                        <ArrowRight size={14} />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>

                {/* vertical text */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute left-[-26px] top-[68px] hidden lg:block"
                >
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#86d8ff] [writing-mode:vertical-rl]">
                    ELITECH DEV
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right decoration */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden justify-end lg:flex"
            >
              <div className="mr-6 flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="mb-4 flex h-4 w-4 items-center justify-center rounded-full border border-white/70"
                >
                  <div className="h-1 w-1 rounded-full bg-white" />
                </motion.div>

                <div className="h-20 w-px bg-white/35" />

                <div className="mt-3 flex flex-col gap-2">
                  <motion.span 
                    whileHover={{ scale: 1.5 }}
                    className="h-1.5 w-1.5 rounded-full bg-white/95" 
                  />
                  <motion.span 
                    whileHover={{ scale: 1.5 }}
                    className="h-1.5 w-1.5 rounded-full bg-white/60" 
                  />
                  <motion.span 
                    whileHover={{ scale: 1.5 }}
                    className="h-1.5 w-1.5 rounded-full bg-white/35" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* bottom center scroll/mouse hint */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-[-26px] left-1/2 z-20 -translate-x-1/2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-white bg-[#f6f6f6] shadow-lg">
            <div className="flex h-7 w-7 items-start justify-center rounded-full border border-[#c9c9c9] bg-white pt-1">
              <div className="h-1.5 w-0.5 rounded-full bg-[#9a9a9a]" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative overflow-hidden bg-[#f5f6f7] py-24 font-['Poppins',sans-serif]">
        {/* faded background image */}
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="About background"
            fill
            className="object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-white/82" />
        </div>

        {/* soft decorative shapes */}
        <div className="pointer-events-none absolute left-[10%] top-24 h-72 w-72 rounded-full bg-[#267A9E]/8 blur-3xl" />
        <div className="pointer-events-none absolute right-[8%] bottom-20 h-80 w-80 rounded-full bg-[#141a47]/6 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
            
            {/* LEFT IMAGE COLLAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative mx-auto min-h-[560px] w-full max-w-[600px]"
            >
              {/* thin frame line behind images */}
              <div className="absolute left-[28%] top-[10%] hidden h-[410px] w-[360px] border-2 border-[#9b1f1f]/70 lg:block" />

              {/* top image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 h-[185px] w-[300px] overflow-hidden shadow-[0_18px_45px_rgba(20,26,71,0.14)] sm:h-[210px] sm:w-[340px]"
              >
                <Image
                  src={aboutImgOne}
                  alt="Business analytics presentation"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* middle image */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute right-0 top-[155px] z-20 h-[235px] w-[330px] overflow-hidden shadow-[0_20px_55px_rgba(20,26,71,0.20)] sm:h-[260px] sm:w-[370px]"
              >
                <Image
                  src={aboutImgTwo}
                  alt="Professional using tablet"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* bottom image */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-[8%] z-10 h-[245px] w-[360px] overflow-hidden shadow-[0_18px_45px_rgba(20,26,71,0.16)] sm:h-[270px] sm:w-[410px]"
              >
                <Image
                  src={aboutImgThree}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* small accent card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-[42%] top-[65px] z-30 hidden h-[92px] w-[92px] overflow-hidden rounded-full border-[6px] border-white shadow-xl sm:block"
              >
                <Image
                  src={aboutImgFour}
                  alt="Consulting team"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* subtle patterned block */}
              <div className="absolute -left-8 -top-12 hidden h-40 w-52 bg-[repeating-linear-gradient(135deg,rgba(38,122,158,0.08)_0px,rgba(38,122,158,0.08)_1px,transparent_1px,transparent_7px)] lg:block" />

              <div className="relative">
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-[13px] font-bold uppercase tracking-wide text-[#267A9E]">
                    Our Story
                  </span>
                  <span className="h-px w-24 bg-[#267A9E]" />
                </div>

                <h2 className="text-[2.4rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3.2rem] lg:text-[3.8rem]">
                  ABOUT{" "}
                  <span className="font-light tracking-[-0.05em]">
                    ELITECH DEV
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-[15px] font-medium leading-8 text-[#3f4652]">
                  We are specialists in software development, digital transformation,
                  and intelligent business systems.
                </p>

                <div className="mt-8 space-y-6 text-[14px] leading-8 text-[#606875]">
                  <p>
                    With strong technical know-how, we support businesses and
                    institutions with the design, development, and implementation of
                    modern digital solutions. Our work focuses on building reliable
                    web platforms, mobile applications, AI-powered systems, cloud
                    solutions, and data-driven tools that improve performance and
                    decision-making.
                  </p>

                  <p>
                    Elitech Dev stands for practical innovation, clean engineering,
                    and long-term value. We work closely with our clients to understand
                    their operations, solve real problems, and deliver solutions that
                    are scalable, secure, and easy to use.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="mt-9"
                >
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_14px_35px_rgba(38,122,158,0.25)] transition-all duration-300 hover:bg-[#034663]"
                  >
                    Learn More Now
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f6f91] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative overflow-hidden bg-white py-24 font-['Poppins',sans-serif]">
        {/* faded background image */}
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Services background"
            fill
            className="object-cover opacity-[0.045]"
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-28 bg-[#267A9E]/70" />
              <span className="text-[13px] font-bold uppercase tracking-wide text-[#267A9E]">
                Elitech Dev
              </span>
              <span className="h-px w-28 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.2rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[3rem] lg:text-[3.5rem]">
              ELITECH DEV{" "}
              <span className="font-light tracking-[-0.05em]">
                SERVICES
              </span>
            </h2>

            <p className="mt-3 text-[14px] text-[#6c7280]">
              Services that we provide to help your business grow digitally.
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <div className="grid gap-14 md:grid-cols-3 lg:gap-20">
            {[
              {
                icon: Code2,
                title: "Web & Software Development",
                description:
                  "We design and build modern websites, dashboards, portals, and custom software systems that help businesses operate more efficiently and deliver better digital experiences.",
              },
              {
                icon: Cpu,
                title: "AI & Automation Solutions",
                description:
                  "We help organizations use artificial intelligence and automation to reduce repetitive work, improve decision-making, and create smarter business workflows.",
              },
              {
                icon: Cloud,
                title: "Cloud & Data Systems",
                description:
                  "We provide scalable cloud integration, database systems, analytics dashboards, and secure digital infrastructure for growing businesses and institutions.",
              },
            ].map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  {/* ICON CIRCLE */}
                  <div className="relative mx-auto mb-8 flex h-[142px] w-[142px] items-center justify-center rounded-full bg-[#dff5fb]">
                    {/* outer animated ring */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-[#36B7F0] transition-all duration-300 group-hover:scale-105 group-hover:border-[#267A9E]" />

                    {/* small dots */}
                    <span className="absolute left-[8px] top-[31px] h-4 w-4 rounded-full bg-[#267A9E]" />
                    <span className="absolute left-[34px] top-[-4px] h-4 w-4 rounded-full bg-[#267A9E]" />

                    {/* icon */}
                    <Icon
                      size={48}
                      strokeWidth={2.4}
                      className="relative z-10 text-[#155f7b] transition-all duration-300 group-hover:scale-110 group-hover:text-[#034663]"
                    />
                  </div>

                  <h3 className="mx-auto max-w-[320px] text-[1.35rem] font-extrabold leading-tight tracking-[-0.03em] text-[#101827] sm:text-[1.45rem]">
                    {service.title}
                  </h3>

                  <p className="mx-auto mt-5 max-w-[360px] text-[14px] leading-8 text-[#606875]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS SECTION */}
      <section className="relative overflow-hidden bg-[#061524] py-24 font-['Poppins',sans-serif]">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Technology background"
            fill
            className="object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-[#061524]/92" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,183,240,0.13),transparent_42%)]" />
        </div>

        {/* decorative glows */}
        <div className="pointer-events-none absolute left-[-8%] top-20 h-96 w-96 rounded-full bg-[#36B7F0]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-10%] bottom-16 h-96 w-96 rounded-full bg-[#267A9E]/12 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-20 bg-[#36B7F0]/70" />
              <span className="text-[12px] font-bold uppercase tracking-wide text-[#36B7F0]">
                Elitech Dev
              </span>
              <span className="h-px w-20 bg-[#36B7F0]/70" />
            </div>

            <h2 className="text-[2.1rem] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[2.8rem] lg:text-[3.4rem]">
              WHAT{" "}
              <span className="font-light tracking-[-0.05em]">
                CONCERNS US
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-white/72">
              These are the major areas we focus on when helping businesses,
              institutions, and organizations build stronger digital systems.
            </p>
          </motion.div>

          {/* cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.slice(0, 3).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative min-h-[360px] overflow-hidden border border-[#36B7F0]/35 bg-[#0b1d31]/80 p-8 shadow-[0_22px_55px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#36B7F0]/80"
                >
                  {/* card background */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-[0.18] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.24]"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-[#07182d]/95 via-[#07182d]/82 to-[#123d75]/70" />

                  {/* content */}
                  <div className="relative z-10">
                    <div className="mb-9 flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-white/85 bg-white shadow-lg">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f8fd]">
                        <Icon size={24} className="text-[#267A9E]" />
                      </div>
                    </div>

                    <h3 className="text-[1.45rem] font-extrabold leading-tight tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>

                    <div className="mt-5 flex gap-4">
                      <span className="mt-1 h-24 w-[3px] bg-[#c73333]" />

                      <div>
                        <p className="text-[13px] leading-6 text-white/82">
                          {item.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.links.slice(0, 2).map((link) => (
                            <span
                              key={link}
                              className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] text-white/75"
                            >
                              {link}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={item.href}
                          className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white underline decoration-white/40 underline-offset-4 transition-all duration-300 hover:gap-3 hover:text-[#36B7F0]"
                        >
                          Read More
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* lower mini cards */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {focusAreas.slice(3).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden border border-[#36B7F0]/30 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:border-[#36B7F0]/75"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-[#0b1d31]/90 to-[#123d75]/40" />

                  <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white/85 bg-white shadow-lg">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f8fd]">
                        <Icon size={24} className="text-[#267A9E]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[1.35rem] font-extrabold tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/78">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.links.map((link) => (
                          <span
                            key={link}
                            className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] text-white/72"
                          >
                            {link}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={item.href}
                        className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#36B7F0] transition-all duration-300 hover:gap-3 hover:text-white"
                      >
                        Explore Area
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* slider dots visual */}
          <div className="mt-14 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#36B7F0]/45" />
            <span className="h-3 w-3 rounded-full bg-[#36B7F0]" />
            <span className="h-2 w-2 rounded-full bg-[#36B7F0]/45" />
          </div>
        </div>
      </section>

      {/* RIGHT SOFTWARE SECTION */}
      <section
        id="solutions"
        className="relative overflow-hidden bg-[#f7f8f9] py-24 font-['Poppins',sans-serif]"
      >
        {/* faded background */}
        <div className="absolute inset-0">
          <Image
            src={aboutBg}
            alt="Software solutions background"
            fill
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>

        {/* subtle blue glows */}
        <div className="pointer-events-none absolute left-[-8%] top-20 h-96 w-96 rounded-full bg-[#267A9E]/8 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8%] bottom-20 h-96 w-96 rounded-full bg-[#141a47]/6 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADER */}
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
                Elitech Dev
              </span>
              <span className="h-px w-24 bg-[#267A9E]/70" />
            </div>

            <h2 className="text-[2.15rem] font-extrabold leading-tight tracking-[-0.04em] text-[#07182d] sm:text-[2.9rem] lg:text-[3.35rem]">
              THE RIGHT{" "}
              <span className="font-light tracking-[-0.05em]">
                SOFTWARE
              </span>
            </h2>

            <p className="mt-3 text-[14px] text-[#6c7280]">
              Software solutions that we provide to help organizations work smarter.
            </p>
          </motion.div>

          {/* FIRST ROW */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* image */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              <div className="absolute -left-4 -top-4 h-[82%] w-[82%] border-2 border-[#b62c2c]/75" />

              <div className="relative h-[270px] overflow-hidden shadow-[0_18px_45px_rgba(20,26,71,0.15)] sm:h-[315px]">
                <Image
                  src={softwareHighlights[0].image}
                  alt={softwareHighlights[0].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute right-[-22px] top-1/2 z-20 flex h-[82px] w-[82px] -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-[#07182d] bg-white shadow-xl">
                <span className="text-center text-[10px] font-semibold leading-tight text-[#07182d]">
                  {softwareHighlights[0].badge}
                </span>
              </div>
            </motion.div>

            {/* content */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-10 -top-10 hidden h-40 w-52 bg-[repeating-linear-gradient(135deg,rgba(38,122,158,0.08)_0px,rgba(38,122,158,0.08)_1px,transparent_1px,transparent_7px)] lg:block" />

              <div className="relative">
                <h3 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#101827] sm:text-[2.1rem]">
                  {softwareHighlights[0].title}
                </h3>

                <p className="mt-5 max-w-xl text-[14px] leading-8 text-[#606875]">
                  {softwareHighlights[0].description}
                </p>

                <motion.div whileHover={{ scale: 1.03 }} className="mt-7">
                  <Link
                    href={softwareHighlights[0].href}
                    className="group inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(38,122,158,0.24)] transition-all duration-300 hover:bg-[#034663]"
                  >
                    Read More
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f6f91] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* SECOND ROW */}
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
            {/* content */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#101827] sm:text-[2.1rem]">
                {softwareHighlights[1].title}
              </h3>

              <p className="mt-5 max-w-xl text-[14px] leading-8 text-[#606875]">
                {softwareHighlights[1].description}
              </p>

              <motion.div whileHover={{ scale: 1.03 }} className="mt-7">
                <Link
                  href={softwareHighlights[1].href}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(38,122,158,0.24)] transition-all duration-300 hover:bg-[#034663]"
                >
                  Read More
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f6f91] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* image */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative order-1 mx-auto w-full max-w-[560px] lg:order-2"
            >
              <div className="absolute -right-4 -top-4 h-[82%] w-[82%] border-2 border-[#b62c2c]/75" />

              <div className="relative h-[270px] overflow-hidden shadow-[0_18px_45px_rgba(20,26,71,0.15)] sm:h-[315px]">
                <Image
                  src={softwareHighlights[1].image}
                  alt={softwareHighlights[1].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute left-[-22px] top-1/2 z-20 flex h-[82px] w-[82px] -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-[#07182d] bg-white shadow-xl">
                <span className="text-center text-[10px] font-semibold leading-tight text-[#07182d]">
                  {softwareHighlights[1].badge}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#141a47]/10 px-4 py-2 text-sm font-semibold text-[#141a47]">
              <FolderGit2 size={16} />
              Featured Work
            </span>
            <h2 className="mt-6 text-4xl font-bold text-[#141a47] sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
              Recent Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Transforming ideas into exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#141a47]">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#141a47]">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#36B7F0] transition hover:gap-3"
                  >
                    View Case Study
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#141a47] px-8 py-3 text-sm font-semibold text-[#141a47] transition-all duration-300 hover:bg-[#141a47] hover:text-white"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#141a47]/10 px-4 py-2 text-sm font-semibold text-[#141a47]">
              <Quote size={16} />
              Testimonials
            </span>
            <h2 className="mt-6 text-4xl font-bold text-[#141a47] sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#141a47]">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f4b400" className="text-[#f4b400]" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="bg-linear-to-br from-[#f7f5f0] to-[#ece8e0] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Trusted By Innovative Companies</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-20 grayscale transition-all duration-300 hover:grayscale-0"
              >
                <Image src={partner} alt={`Partner ${index + 1}`} fill className="object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-[#141a47] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                <Mail size={16} />
                Get In Touch
              </span>
              <h2 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
                Let's Work Together
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Ready to start your next project? We'd love to hear from you. 
                Let's discuss how we can help transform your business.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/10 p-3">
                    <Mail size={24} className="text-[#36B7F0]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email Us</p>
                    <a href="mailto:info@elitech.com" className="text-white hover:text-[#36B7F0] transition">
                      info@elitech.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/10 p-3">
                    <Phone size={24} className="text-[#36B7F0]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Call Us</p>
                    <a href="tel:+1234567890" className="text-white hover:text-[#36B7F0] transition">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/10 p-3">
                    <MapPin size={24} className="text-[#36B7F0]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Visit Us</p>
                    <p className="text-white">123 Tech Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {[FaFacebookF, FaLinkedinIn,
  FaInstagram,
  FaYoutube
              
                ].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-[#36B7F0] hover:scale-110"
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#141a47]">First Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#36B7F0] focus:outline-none focus:ring-2 focus:ring-[#36B7F0]/20"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#141a47]">Last Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#36B7F0] focus:outline-none focus:ring-2 focus:ring-[#36B7F0]/20"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#141a47]">Email Address</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#36B7F0] focus:outline-none focus:ring-2 focus:ring-[#36B7F0]/20"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#141a47]">Project Type</label>
                  <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#36B7F0] focus:outline-none focus:ring-2 focus:ring-[#36B7F0]/20">
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI Solutions</option>
                    <option>Cloud Integration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#141a47]">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#36B7F0] focus:outline-none focus:ring-2 focus:ring-[#36B7F0]/20"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full rounded-full bg-linear-to-r from-[#36B7F0] to-[#5CC6F3] px-8 py-4 font-bold text-[#141a47] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                  <ArrowRight size={18} className="ml-2 inline transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default Home;