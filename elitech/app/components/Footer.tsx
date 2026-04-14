"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../assets/elitech-logo4.png";

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
  { icon: Mail, text: "info@elitech.com", href: "mailto:info@elitech.com", label: "Email" },
  { icon: Phone, text: "+1 (234) 567-890", href: "tel:+1234567890", label: "Phone" },
  { icon: MapPin, text: "123 Tech Street, Silicon Valley, CA 94025", href: "/contact", label: "Address" },
  { icon: Clock, text: "Mon - Fri: 9:00 AM - 6:00 PM", href: "/contact", label: "Hours" },
];

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-white font-[var(--font-poppins)]">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2a8d95] via-[#3ba8b0] to-[#2a8d95]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-36 sm:h-14 sm:w-44">
                <Image
                  src={logo}
                  alt="ELITECH Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <p className="mt-6 text-[15px] leading-relaxed text-gray-600">
              Delivering innovative technology solutions that transform businesses
              and drive digital excellence worldwide.
            </p>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Connect With Us
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                      style={{ color: social.color }}
                    >
                      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {footerSections.map((section, idx) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="mb-6 text-base font-bold uppercase tracking-wide text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-[14px] text-gray-600 transition-all duration-200 hover:text-[#2a8d95]"
                    >
                      <ArrowRight className="mr-2 h-3 w-0 opacity-0 transition-all duration-200 group-hover:mr-2 group-hover:w-3 group-hover:opacity-100" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Newsletter Section */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-base font-bold uppercase tracking-wide text-gray-900">
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="group flex items-start gap-3 transition-all duration-200 hover:translate-x-1"
                  >
                    <div className="mt-1 rounded-lg bg-[#2a8d95]/10 p-2 text-[#2a8d95] transition-all duration-200 group-hover:bg-[#2a8d95] group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-[14px] text-gray-700 group-hover:text-[#2a8d95] transition-colors duration-200">
                        {item.text}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-gray-700">
                Subscribe to our newsletter
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-[#2a8d95] focus:ring-2 focus:ring-[#2a8d95]/20"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#2a8d95] px-4 py-2.5 text-white transition-all duration-200 hover:bg-[#237a81] hover:shadow-lg active:scale-95"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} ELITECH. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-sm text-gray-500 transition-colors hover:text-[#2a8d95]">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-500 transition-colors hover:text-[#2a8d95]">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-500 transition-colors hover:text-[#2a8d95]">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;