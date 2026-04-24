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
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter
} from "react-icons/fa6";
import heroBg from "./assets/hero-bg.png";

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
          <div className="pointer-events-none absolute left-0 top-0 h-[280px] w-[220px] border-l-4 border-t-4 border-[#5ecfff] sm:h-[320px] sm:w-[260px]" />
          <div className="pointer-events-none absolute bottom-[18px] left-0 h-[100px] w-[220px] border-b-4 border-r-4 border-[#5ecfff] sm:w-[260px]" />

          {/* main content */}
          <div className="relative z-10 pl-8 pt-12 sm:pl-12 sm:pt-14">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-[700px] text-[2.8rem] font-bold leading-[0.9] tracking-[-0.03em] text-white sm:text-[3.8rem] lg:text-[4.6rem]"
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

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#141a47]/10 px-4 py-2 text-sm font-semibold text-[#141a47]">
              <Sparkles size={16} />
              Our Services
            </span>
            <h2 className="mt-6 text-4xl font-bold text-[#141a47] sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <div className={`rounded-xl bg-linear-to-br ${service.gradient} p-3 w-fit`}>
                    <Icon size={32} className="text-[#36B7F0]" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#141a47]">{service.title}</h3>
                  <p className="mt-3 text-gray-600">{service.description}</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#36B7F0] transition hover:gap-3"
                  >
                    Learn More
                    <ChevronRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="bg-linear-to-br from-[#f7f5f0] to-[#ece8e0] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#141a47]/10 px-4 py-2 text-sm font-semibold text-[#141a47]">
              <Briefcase size={16} />
              Business Solutions
            </span>
            <h2 className="mt-6 text-4xl font-bold text-[#141a47] sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
              Tailored Solutions for Every Industry
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Specialized software solutions designed to meet your unique business requirements
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </div>
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold text-[#141a47]">{solution.title}</h3>
                  <p className="mt-2 text-gray-600">{solution.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {solution.features.map((feature, i) => (
                      <span key={i} className="inline-flex items-center gap-1 rounded-full bg-[#141a47]/10 px-3 py-1 text-xs font-medium text-[#141a47]">
                        <CheckCircle size={12} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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