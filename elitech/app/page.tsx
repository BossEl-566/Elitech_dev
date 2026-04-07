"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Star,
  Code2,
  Layers3,
  ShieldCheck,
  Rocket,
  Briefcase,
  Users,
  Award,
  Clock,
  ChevronRight,
  Zap,
  Cpu,
  Cloud,
  Database,
  Smartphone,
  Globe,
  TrendingUp,
  Heart,
  CheckCircle,
  Play,
  Quote,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    color: "#36B7F0",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    color: "#36B7F0",
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Intelligent automation and machine learning solutions for business growth.",
    color: "#36B7F0",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Scalable cloud infrastructure and seamless integration services.",
    color: "#36B7F0",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics.",
    color: "#36B7F0",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets.",
    color: "#36B7F0",
  },
];

const projects = [
  {
    title: "FinTech Platform",
    category: "Web Development",
    image: "/api/placeholder/400/300",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    image: "/api/placeholder/400/300",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Analytics Dashboard",
    category: "AI Solutions",
    image: "/api/placeholder/400/300",
    gradient: "from-orange-500 to-red-500",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "ELITECH transformed our digital presence completely. Their team delivered beyond expectations.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    content: "The best development team we've worked with. Professional, timely, and highly skilled.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    content: "Exceptional quality and attention to detail. Our platform has never performed better.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
];

const stats = [
  { icon: Award, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Code2, value: "50+", label: "Expert Developers" },
  { icon: Globe, value: "25+", label: "Countries Served" },
];

function Home() {
  return (
    <div className="relative overflow-hidden" style={{ fontFamily: "'Droid Sans Mono', 'Courier New', monospace" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#141a47] via-[#1a2260] to-[#141a47]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#36B7F0]/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#36B7F0]/10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-32 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#36B7F0]/30 bg-white/10 px-4 py-2 backdrop-blur-sm w-fit mb-6">
                <Sparkles size={16} className="text-[#36B7F0]" />
                <span className="text-sm font-medium text-white">Innovation Meets Excellence</span>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                Build Your
                <br />
                Digital Future
                <span className="text-[#36B7F0]"> With Us</span>
              </h1>
              
              <p className="mt-6 text-lg text-white/80 max-w-lg">
                We craft cutting-edge software solutions that drive business growth, 
                enhance user experiences, and deliver measurable results.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#36B7F0] to-[#5CC6F3] px-8 py-4 text-base font-bold text-[#141a47] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Start Your Project
                  <Rocket size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </Link>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <Icon size={28} className="mx-auto text-[#36B7F0]" />
                      <div className="mt-2 text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            {/* Right Content - Hero Image/Animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative h-[400px] w-full lg:h-[500px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#36B7F0]/20 to-transparent backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {services.slice(0, 4).map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-white/20"
                        >
                          <Icon size={32} className="mx-auto text-[#36B7F0]" />
                          <h3 className="mt-2 text-sm font-semibold text-white">{service.title}</h3>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#141a47] sm:text-4xl lg:text-5xl">
              What We Do
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div className="rounded-xl bg-gradient-to-br from-[#141a47] to-[#1e2a6e] p-3 w-fit">
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

      {/* Featured Projects */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#141a47] sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Transforming ideas into exceptional digital experiences
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#141a47]">{project.title}</h3>
                  <p className="mt-2 text-gray-600">
                    A comprehensive solution that revolutionized their business operations.
                  </p>
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#141a47] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote size={48} className="mx-auto text-[#36B7F0]" />
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-[#36B7F0] to-[#5CC6F3] p-0.5">
                    <div className="h-full w-full rounded-full bg-[#141a47] flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f4b400" className="text-[#f4b400]" />
                  ))}
                </div>
                <p className="mt-4 text-white/90 leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#36B7F0] to-[#5CC6F3] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#141a47] sm:text-4xl lg:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#141a47]/80">
              Let's discuss your project and create something extraordinary together
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#141a47] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#141a47] px-8 py-4 text-base font-bold text-[#141a47] transition-all duration-300 hover:bg-[#141a47] hover:text-white hover:scale-105"
              >
                View Portfolio
                <Briefcase size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;