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
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../assets/elitech-logo.png";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#web-development" },
      { name: "Mobile App Development", href: "#mobile-development" },
      { name: "AI Solutions", href: "#ai-solutions" },
      { name: "Cloud Integration", href: "#cloud-integration" },
      { name: "UI/UX Design", href: "#uiux" },
      { name: "Custom Software", href: "#custom-software" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Business Management", href: "#business-systems" },
      { name: "School Management", href: "#school-systems" },
      { name: "Hospital Management", href: "#hospital-systems" },
      { name: "E-commerce Platforms", href: "#ecommerce" },
      { name: "Client Portals", href: "#client-portals" },
      { name: "Payment Integrations", href: "#payments" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Projects", href: "#projects" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#docs" },
      { name: "Support Center", href: "#support" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "FAQ", href: "#faq" },
      { name: "Sitemap", href: "#sitemap" },
    ],
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook", color: "#1877f2" },
  { icon: FaTwitter, href: "#", label: "Twitter", color: "#000000" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "#0a66c2" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "#e4405f" },
  { icon: FaYoutube, href: "#", label: "YouTube", color: "#ff0000" },
];

const contactInfo = [
  { icon: Mail, text: "info@elitech.com", href: "mailto:info@elitech.com", label: "Email" },
  { icon: Phone, text: "+1 (234) 567-890", href: "tel:+1234567890", label: "Phone" },
  { icon: MapPin, text: "123 Tech Street, Silicon Valley, CA 94025", href: "#", label: "Address" },
  { icon: Clock, text: "Mon - Fri: 9:00 AM - 6:00 PM", href: "#", label: "Hours" },
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
    <footer className="bg-white font-['Poppins',sans-serif]">
      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-[#034663] via-blue-400 to-[#034663]" />

      <div className="relative">
       

        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Column */}
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

              <p className="mb-6 text-sm leading-relaxed text-gray-600">
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
                      className="group flex items-center gap-3 text-sm text-gray-600 transition-all duration-300 hover:text-[#034663]"
                    >
                      <div className="rounded-lg bg-gray-100 p-1.5 transition-all duration-300 group-hover:bg-blue-50">
                        <Icon size={14} className="text-gray-500 group-hover:text-[#034663]" />
                      </div>
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {item.text}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#267A9E]">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-gray-600 transition-all duration-300 hover:text-[#034663]"
                      >
                        <ChevronRight
                          size={12}
                          className="text-blue-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5"
                        />
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-sm text-gray-600">
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
                      className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 pr-12 text-sm text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                    />
                    <Mail
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex h-12 items-center gap-2 rounded-xl bg-[#267A9E] px-6 font-semibold text-white transition-all duration-300 hover:bg-[#034663] hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span className="text-sm">Subscribe</span>
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>

                {isSubmitted && (
                  <p className="mt-2 animate-pulse text-sm text-[#034663]">
                    Thank you for subscribing! 🎉
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center text-sm text-gray-500 md:text-left">
                © {new Date().getFullYear()} ELITECH. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl bg-gray-50 p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-md"
                      aria-label={social.label}
                    >
                      <Icon
                        size={18}
                        className="text-gray-600 transition-colors group-hover:text-[#034663]"
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                <Link
                  href="#privacy"
                  className="text-gray-500 transition hover:text-[#034663]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#terms"
                  className="text-gray-500 transition hover:text-[#034663]"
                >
                  Terms of Use
                </Link>
                <Link
                  href="#cookies"
                  className="text-gray-500 transition hover:text-[#034663]"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#267A9E] p-3 text-white shadow-lg transition-all duration-300 hover:bg-[#034663] hover:scale-110 hover:shadow-xl lg:bottom-8 lg:right-8"
        aria-label="Back to top"
      >
        <ArrowRight size={20} className="rotate-[-90deg]" />
      </button>
    </footer>
  );
}

export default Footer;