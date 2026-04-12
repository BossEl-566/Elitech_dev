"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Award,
  Users,
  Code2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../assets/elitech-logo.png";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/service/web-development" },
      { name: "Mobile App Development", href: "/service/mobile-app-development" },
      { name: "AI Solutions", href: "/service/ai-solutions" },
      { name: "Cloud Integration", href: "/service/cloud-integration" },
      { name: "UI/UX Design", href: "/service/ui-ux-design" },
      { name: "Custom Software", href: "/service/custom-software" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Business Management", href: "/solution/business-management-systems" },
      { name: "School Management", href: "/solution/school-management-systems" },
      { name: "Hospital Management", href: "/solution/hospital-management-systems" },
      { name: "E-commerce Platforms", href: "/solution/ecommerce-platforms" },
      { name: "Client Portals", href: "/solution/client-portals" },
      { name: "Payment Integrations", href: "/solution/payment-integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Projects", href: "/projects" },
      { name: "Case Studies", href: "/projects/case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/documentation" },
      { name: "Support Center", href: "/support" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "FAQ", href: "/faq" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook", color: "#1877f2" },
  { icon: FaXTwitter, href: "#", label: "X", color: "#000000" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "#0a66c2" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "#e4405f" },
  { icon: FaYoutube, href: "#", label: "YouTube", color: "#ff0000" },
];

const contactInfo = [
  { icon: Mail, text: "info@elitech.com", href: "mailto:info@elitech.com" },
  { icon: Phone, text: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MapPin, text: "123 Tech Street, Silicon Valley, CA 94025", href: "/contact" },
  { icon: Clock, text: "Mon - Fri: 9:00 AM - 6:00 PM", href: "/contact" },
];

const stats = [
  { icon: Award, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Code2, value: "50+", label: "Expert Developers" },
  { icon: Sparkles, value: "10+", label: "Years Experience" },
];

function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: "#141a47",
        fontFamily: "'Droid Sans Mono', 'Courier New', monospace",
      }}
    >
      <div className="relative z-10">
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group text-center transition-all duration-300 hover:scale-105"
                  >
                    <div className="mb-3 flex justify-center">
                      <div className="rounded-full bg-white/10 p-3 transition-all duration-300 group-hover:bg-[#36B7F0]/20 group-hover:shadow-lg">
                        <Icon size={28} className="text-[#36B7F0]" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-white/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <Link href="/" className="mb-4 inline-block">
                <div className="relative h-12 w-45 transition-transform hover:scale-105">
                  <Image
                    src={logo}
                    alt="ELITECH Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <p className="mb-4 text-sm leading-relaxed text-white/70">
                Delivering innovative technology solutions that transform businesses
                and drive digital excellence.
              </p>

              <div className="space-y-3">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="group flex items-center gap-3 text-sm text-white/70 transition-all duration-300 hover:text-[#36B7F0]"
                    >
                      <Icon
                        size={16}
                        className="transition-transform group-hover:scale-110"
                      />
                      <span>{item.text}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-base font-bold uppercase tracking-wider text-[#36B7F0]">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-[#36B7F0]"
                      >
                        <ChevronRight
                          size={12}
                          className="opacity-0 transition-all group-hover:opacity-100"
                        />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-sm text-white/70">
                  Get the latest updates on new products and upcoming sales
                </p>
              </div>

              <div>
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="h-12 w-full rounded-lg border border-white/20 bg-white/5 px-4 pr-12 text-sm text-white placeholder-white/50 transition-all duration-300 focus:border-[#36B7F0] focus:outline-none focus:ring-2 focus:ring-[#36B7F0]/20"
                    />
                    <Mail
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-lg bg-linear-to-r from-[#36B7F0] to-[#5CC6F3] px-6 font-semibold text-[#141a47] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span className="relative z-10 text-sm">Subscribe</span>
                    <Send
                      size={16}
                      className="relative z-10 transition-transform group-hover:translate-x-1"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#5CC6F3] to-[#36B7F0] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </form>

                {isSubmitted && (
                  <p className="mt-2 animate-pulse text-sm text-[#36B7F0]">
                    Thank you for subscribing! 
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center text-sm text-white/60 md:text-left">
                © {new Date().getFullYear()} ELITECH. All rights reserved.
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-full bg-white/10 p-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <Icon className="text-[18px] text-white/80 transition-colors group-hover:text-white" />
                      <div
                        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                        style={{ backgroundColor: social.color }}
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="flex gap-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-white/60 transition hover:text-[#36B7F0]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-white/60 transition hover:text-[#36B7F0]"
                >
                  Terms of Use
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-white/60 transition hover:text-[#36B7F0]"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#36B7F0]/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#36B7F0]/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#36B7F0] p-3 text-[#141a47] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl lg:bottom-8 lg:right-8"
        aria-label="Back to top"
      >
        <ArrowRight size={20} className="-rotate-90" />
      </button>
    </footer>
  );
}

export default Footer;