"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Star,
  Code2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

function Home() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5ef]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[#36B7F0]/10 blur-3xl" />
        <div className="absolute right-16 top-10 h-52 w-52 rounded-full bg-[#4f46e5]/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-[#d7c5aa]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-start gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          {/* LEFT */}
          <div className="pt-2 lg:pt-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
            >
              <Sparkles size={16} className="text-[#4f46e5]" />
              Smart software solutions for modern businesses
            </motion.div>

            <div className="mt-8">
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-stretch">
                {/* Main heading block */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative rounded-[42px] bg-gradient-to-r from-[#4338ca] via-[#4f46e5] to-[#5b4df3] px-7 pb-7 pt-6 shadow-[0_24px_70px_rgba(79,70,229,0.18)] sm:px-9 sm:pb-8 sm:pt-7"
                >
                  <h1
                    className="max-w-[12ch] text-[#120700] leading-[0.9] tracking-[-0.06em]"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "clamp(3.2rem, 8vw, 6.3rem)",
                    }}
                  >
                    Build your
                    <br />
                    digital future
                  </h1>
                </motion.div>

                {/* Side text block */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="flex rounded-[38px] bg-gradient-to-b from-[#4f46e5] to-[#4338ca] px-7 py-7 text-white shadow-[0_24px_60px_rgba(79,70,229,0.16)]"
                >
                  <p className="self-center text-3xl leading-[1.15] font-medium">
                    We build
                    <br />
                    software
                    <br />
                    that scales
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="-mt-2 ml-0 inline-block rounded-[30px] bg-[#d7c5aa] px-10 py-5 shadow-sm sm:ml-2"
              >
                <button className="text-lg font-semibold text-[#120700] transition hover:scale-[1.02]">
                  Get a demo
                </button>
              </motion.div>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-start">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
              >
                <p className="max-w-xs text-lg leading-8 text-slate-800">
                  We design and develop reliable web, mobile, cloud, and AI
                  systems that help businesses launch faster and operate better.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55 }}
                className="flex items-start gap-4"
              >
                <div
                  className="text-6xl leading-none text-[#120700] sm:text-7xl"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  24/7
                </div>
                <p className="max-w-[130px] pt-2 text-xl leading-7 text-slate-800">
                  Technical support and delivery focus
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.65 }}
                className="md:pl-3"
              >
                <div className="mb-2 flex items-center gap-1 text-[#f4b400]">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} size={22} fill="currentColor" />
                  ))}
                  <Star size={22} className="text-black/20" fill="currentColor" />
                </div>
                <p className="text-2xl font-bold text-[#120700]">
                  500+ projects delivered
                </p>
                <p className="mt-1 text-base leading-7 text-slate-600">
                  Trusted by startups and established teams
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative min-h-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="absolute left-2 top-0 h-[220px] w-[76%] rounded-[40px] bg-gradient-to-br from-[#6485f0] to-[#2f5fe4] shadow-[0_25px_70px_rgba(59,91,219,0.2)]"
            >
              <div className="absolute right-7 top-10 rounded-full bg-white/85 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                AI + Cloud Ready
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute right-[-14px] top-16 h-18 w-18 rounded-[24px] bg-[#4f46e5]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="absolute right-0 top-16 w-full max-w-[620px] rounded-[38px] border border-black/10 bg-[#fcfcfb] px-7 pb-8 pt-9 shadow-[0_18px_60px_rgba(0,0,0,0.07)]"
            >
              <div className="absolute left-1/2 top-0 h-8 w-28 -translate-x-1/2 rounded-b-[18px] border-x border-b border-black/10 bg-[#ece9e2]" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-5 flex -space-x-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#e3d8ff] text-base font-bold text-[#120700]">
                      JD
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#d8c5a7] text-base font-bold text-[#120700]">
                      AM
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#cfe8ff] text-base font-bold text-[#120700]">
                      KO
                    </div>
                  </div>

                  <h2 className="max-w-[360px] text-3xl font-bold leading-tight text-[#120700] sm:text-4xl">
                    Connect with our software experts
                  </h2>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                  className="hidden h-28 w-28 items-center justify-center rounded-full border border-black/10 md:flex"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10">
                    <ArrowRight size={22} className="text-slate-700" />
                  </div>
                </motion.div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[24px] border border-black/10 bg-[#f4f1eb] p-5"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e9e5ff]">
                    <Code2 className="h-6 w-6 text-[#4f46e5]" />
                  </div>
                  <h3 className="text-[1.7rem] font-bold leading-tight text-[#120700]">
                    Custom
                    <br />
                    Build
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Tailored web and mobile systems.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[24px] border border-black/10 bg-[#f4f1eb] p-5"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e9e5ff]">
                    <Layers3 className="h-6 w-6 text-[#4f46e5]" />
                  </div>
                  <h3 className="text-[1.7rem] font-bold leading-tight text-[#120700]">
                    Scalable
                    <br />
                    Stack
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Strong architecture for growth.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[24px] border border-black/10 bg-[#f4f1eb] p-5"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e9e5ff]">
                    <ShieldCheck className="h-6 w-6 text-[#4f46e5]" />
                  </div>
                  <h3 className="text-[1.7rem] font-bold leading-tight text-[#120700]">
                    Secure
                    <br />
                    Delivery
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Reliable systems with privacy in mind.
                  </p>
                </motion.div>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-md text-lg leading-8 text-slate-700">
                  From product design to deployment, we create effective digital
                  solutions that move your business forward.
                </p>

                <button className="group inline-flex items-center gap-2 rounded-full bg-[#141a47] px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-[#36B7F0] hover:text-[#141a47]">
                  Start a project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;