"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Code2, Layers3, ShieldCheck, Users, Clock, Zap, Sparkles } from "lucide-react";

function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f7f5f0] to-[#ece8e0] min-h-screen">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e8e4dc_0%,_#f5f3ef_100%)]" />
      
      {/* Decorative Elements matching header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#141a47]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#36B7F0]/5 blur-3xl" />
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        
        {/* Top Layer: Abstract Shape + Headline */}
        <div className="relative mb-16">
          {/* Huge Abstract Shape matching header colors */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute -top-20 -left-10 right-0 h-[420px] lg:h-[520px]"
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
            
            {/* Sculpted Edge Details */}
            <div className="absolute top-32 right-20 h-32 w-32 rounded-full bg-[#36B7F0]/20 blur-2xl" />
            <div className="absolute bottom-20 left-40 h-24 w-24 rounded-full bg-[#141a47]/20 blur-xl" />
          </motion.div>

          {/* Smaller Rounded Block matching header */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-8 top-24 z-10 hidden max-w-xs rounded-3xl bg-gradient-to-br from-[#141a47] to-[#1a2260] p-6 shadow-2xl backdrop-blur-sm lg:block"
          >
            <p className="text-lg font-medium leading-relaxed text-white/95">
              We build software that scales
            </p>
            <Sparkles size={16} className="absolute bottom-3 right-3 text-[#36B7F0] opacity-60" />
          </motion.div>

          {/* Main Headline - Editorial Serif Typography */}
          <div className="relative z-10 pt-20 lg:pt-32">
            <div className="flex flex-col items-start">
              {/* Line 1 - Embedded in blue */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative text-7xl font-bold leading-[0.95] tracking-[-0.03em] text-[#141a47] sm:text-8xl lg:text-9xl"
                style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
              >
                Build your
              </motion.h1>
              
              {/* Line 2 - Overlapping and extending outward */}
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
                <div className="absolute -bottom-6 left-0 h-1 w-full bg-gradient-to-r from-[#36B7F0] to-transparent opacity-60" />
              </motion.div>
              
              {/* Line 3 */}
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

          {/* Soft Beige Button Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative z-10 mt-12 inline-block"
          >
            <Link
              href="#demo"
              className="group inline-flex items-center gap-3 rounded-full bg-[#d4c5b0] px-10 py-5 text-lg font-semibold text-[#141a47] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#c9b99e] hover:shadow-2xl"
            >
              Get a demo
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Three-Part Information Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20 border-t border-b border-black/10 py-10"
        >
          <div className="grid gap-8 md:grid-cols-3">
            {/* Left - Supporting Paragraph */}
            <div className="pr-6">
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                We design and develop reliable web, mobile, cloud, and AI systems 
                that help businesses launch faster and operate better.
              </p>
            </div>

            {/* Middle - 24/7 Metric */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
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

            {/* Right - Trust Block */}
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

        {/* Bottom Expressive Visual Blocks */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* Left Bottom - Vivid Blue Organic Panel with Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#141a47] via-[#1a2260] to-[#0f1440] shadow-2xl lg:p-0"
          >
            {/* Online Image */}
            <div className="relative h-64 w-full overflow-hidden lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
                alt="Digital Innovation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141a47]/80 via-[#141a47]/40 to-transparent" />
            </div>
            
            {/* Floating Visual Object Overlay */}
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
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#36B7F0] to-[#5CC6F3] p-0.5">
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
            
            {/* Glass Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>

          {/* Right Bottom - Futuristic Dashboard Panel Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl lg:p-8"
          >
            {/* Cutout Notch Details */}
            <div className="absolute -top-3 left-8 h-6 w-16 rounded-t-full bg-[#f5f3ef]" />
            <div className="absolute -bottom-3 right-8 h-6 w-16 rounded-b-full bg-[#f5f3ef]" />
            
            {/* Profile Images from Online */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/women/1.jpg",
                  "https://randomuser.me/api/portraits/men/2.jpg",
                  "https://randomuser.me/api/portraits/women/3.jpg",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white"
                  >
                    <Image
                      src={img}
                      alt="Expert"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="rounded-full bg-[#141a47]/10 px-3 py-1 text-xs font-medium text-[#141a47]">
                +12 experts
              </div>
            </div>

            {/* Connect with Experts */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500">Connect with our</p>
              <h3 className="text-3xl font-bold text-[#141a47] lg:text-4xl" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
                software experts
              </h3>
            </div>

            {/* Supporting Text */}
            <p className="mb-8 text-sm leading-relaxed text-gray-600">
              From product design to deployment, we create effective digital 
              solutions that move your business forward.
            </p>

            {/* Service Blocks Grid */}
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Code2, title: "Custom Build", desc: "Tailored systems", color: "#141a47" },
                { icon: Layers3, title: "Scalable Stack", desc: "Growth ready", color: "#141a47" },
                { icon: ShieldCheck, title: "Secure Delivery", desc: "Enterprise grade", color: "#141a47" },
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

            {/* Online Image Preview */}
            <div className="mb-6 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=200&fit=crop"
                alt="Dashboard Preview"
                width={600}
                height={200}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Circular Stamp / Directional Icon */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Users size={16} className="text-[#141a47]" />
                <span>200+ happy clients</span>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 transition-all duration-300 hover:border-[#36B7F0] hover:shadow-lg">
                <ArrowRight size={20} className="text-gray-600" />
              </div>
            </div>

            {/* Small Label Element */}
            <div className="absolute right-6 top-6 rounded-full bg-[#36B7F0]/10 px-3 py-1 text-xs font-semibold text-[#36B7F0] backdrop-blur-sm">
              Featured
            </div>
          </motion.div>
        </div>

        {/* Additional Image Row for Visual Interest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {[
            "https://images.unsplash.com/photo-1551434678-e076c2235a2f?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop",
          ].map((img, i) => (
            <div key={i} className="group relative h-32 overflow-hidden rounded-xl lg:h-40">
              <Image
                src={img}
                alt={`Tech showcase ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141a47]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Home;