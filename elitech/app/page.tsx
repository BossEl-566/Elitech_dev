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
} from "react-icons/fa6";

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
      <section className="relative overflow-hidden bg-linear-to-br from-[#f7f5f0] to-[#ece8e0] min-h-screen">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#e8e4dc_0%,#f5f3ef_100%)]" />
        
        {/* Decorative Elements matching header */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#141a47]/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#36B7F0]/5 blur-3xl" />
        </div>

        {/* Main Content Container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
          
          {/* Top Layer: Abstract Shape + Headline */}
          <div className="relative mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute -top-20 -left-10 right-0 h-105 lg:h-130"
            >
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
                <path
                  d="M0,200 C150,150 300,100 500,80 C700,60 850,120 1000,100 C1100,90 1150,140 1200,180 L1200,600 L0,600 Z"
                  fill="url(#blueGradient)"
                  className="opacity-90"
                />
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#141a47", stopOpacity: 0.95 }} />
                    <stop offset="50%" style={{ stopColor: "#1a2260", stopOpacity: 0.85 }} />
                    <stop offset="100%" style={{ stopColor: "#0f1440", stopOpacity: 0.75 }} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-32 right-20 h-32 w-32 rounded-full bg-[#36B7F0]/20 blur-2xl" />
              <div className="absolute bottom-20 left-40 h-24 w-24 rounded-full bg-[#141a47]/20 blur-xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-8 top-24 z-10 hidden max-w-xs rounded-3xl bg-linear-to-br from-[#141a47] to-[#1a2260] p-6 shadow-2xl backdrop-blur-sm lg:block"
            >
              <p className="text-lg font-medium leading-relaxed text-white/95">
                We build software that scales
              </p>
              <Sparkles size={16} className="absolute bottom-3 right-3 text-[#36B7F0] opacity-60" />
            </motion.div>

            <div className="relative z-10 pt-20 lg:pt-32">
              <div className="flex flex-col items-start">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative text-7xl font-bold leading-[0.95] tracking-[-0.03em] text-[#141a47] sm:text-8xl lg:text-9xl"
                  style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
                >
                  Build your
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative mt-[-0.1em]"
                >
                  <span 
                    className="relative inline-block text-7xl font-bold leading-[0.95] tracking-[-0.03em] text-white drop-shadow-2xl sm:text-8xl lg:text-9xl"
                    style={{ 
                      fontFamily: "'Times New Roman', Georgia, serif",
                      textShadow: "0 2px 20px rgba(0,0,0,0.2)"
                    }}
                  >
                    digital
                  </span>
                  <div className="absolute -bottom-6 left-0 h-1 w-full bg-linear-to-r from-[#36B7F0] to-transparent opacity-60" />
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative mt-[-0.05em] text-7xl font-bold leading-[0.95] tracking-[-0.03em] text-[#141a47] sm:text-8xl lg:text-9xl"
                  style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
                >
                  future<span className="text-[#36B7F0]">.</span>
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative z-10 mt-12 inline-block"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d4c5b0] px-10 py-5 text-lg font-semibold text-[#141a47] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#c9b99e] hover:shadow-2xl"
              >
                Get a demo
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-20 border-t border-b border-black/10 py-10"
          >
            <div className="grid gap-8 md:grid-cols-3">
              <div className="pr-6">
                <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                  We design and develop reliable web, mobile, cloud, and AI systems 
                  that help businesses launch faster and operate better.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="text-6xl font-bold text-[#141a47] md:text-7xl" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
                    24/7
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-base font-medium text-gray-700 md:text-lg">
                    Technical support and delivery focus
                  </p>
                </div>
              </div>
              <div className="pl-6">
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#f4b400" className="text-[#f4b400]" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-[#141a47]">500+ projects delivered</p>
                <p className="mt-1 text-sm text-gray-600">Trusted by startups and established teams</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="group relative overflow-hidden rounded-4xl bg-linear-to-br from-[#141a47] via-[#1a2260] to-[#0f1440] shadow-2xl lg:p-0"
            >
              <div className="relative h-64 w-full overflow-hidden lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
                  alt="Digital Innovation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#141a47]/80 via-[#141a47]/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-[#36B7F0]/20 p-2 backdrop-blur-sm">
                    <Zap size={24} className="text-[#36B7F0]" />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wider text-white/90">
                    Innovation Lab
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">AI-Powered Solutions</h3>
                  <p className="text-sm text-white/80">Cutting-edge technology for modern business</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-linear-to-br from-[#36B7F0] to-[#5CC6F3] p-0.5">
                    <div className="h-full w-full rounded-full bg-[#141a47] flex items-center justify-center">
                      <span className="text-sm font-bold text-white">AI</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/90">Powered by cutting-edge</p>
                    <p className="text-xs text-white/70">artificial intelligence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="relative rounded-4xl border border-gray-200 bg-white p-6 shadow-xl lg:p-8"
            >
              <div className="absolute -top-3 left-8 h-6 w-16 rounded-t-full bg-[#f5f3ef]" />
              <div className="absolute -bottom-3 right-8 h-6 w-16 rounded-b-full bg-[#f5f3ef]" />
              
              <div className="mb-6 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[
                    "https://randomuser.me/api/portraits/women/1.jpg",
                    "https://randomuser.me/api/portraits/men/2.jpg",
                    "https://randomuser.me/api/portraits/women/3.jpg",
                  ].map((img, i) => (
                    <div key={i} className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                      <Image src={img} alt="Expert" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="rounded-full bg-[#141a47]/10 px-3 py-1 text-xs font-medium text-[#141a47]">
                  +12 experts
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium text-gray-500">Connect with our</p>
                <h3 className="text-3xl font-bold text-[#141a47] lg:text-4xl" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
                  software experts
                </h3>
              </div>

              <p className="mb-8 text-sm leading-relaxed text-gray-600">
                From product design to deployment, we create effective digital 
                solutions that move your business forward.
              </p>

              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Code2, title: "Custom Build", desc: "Tailored systems" },
                  { icon: Layers3, title: "Scalable Stack", desc: "Growth ready" },
                  { icon: ShieldCheck, title: "Secure Delivery", desc: "Enterprise grade" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="group rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all duration-300 hover:border-[#36B7F0]/30 hover:shadow-md">
                      <Icon size={20} className="mb-2 text-[#36B7F0]" />
                      <h4 className="text-sm font-bold text-[#141a47]">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mb-6 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=200&fit=crop"
                  alt="Dashboard Preview"
                  width={600}
                  height={200}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users size={16} className="text-[#141a47]" />
                  <span>200+ happy clients</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 transition-all duration-300 hover:border-[#36B7F0] hover:shadow-lg">
                  <ArrowRight size={20} className="text-gray-600" />
                </div>
              </div>

              <div className="absolute right-6 top-6 rounded-full bg-[#36B7F0]/10 px-3 py-1 text-xs font-semibold text-[#36B7F0] backdrop-blur-sm">
                Featured
              </div>
            </motion.div>
          </div>
        </div>
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
                  <div className={`rounded-xl bg-gradient-to-br ${service.gradient} p-3 w-fit`}>
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