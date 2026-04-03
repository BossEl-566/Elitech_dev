"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Code2,
  Paintbrush,
  Rocket,
  Briefcase,
  FolderGit2,
  Users,
  Mail,
  Info,
  Cpu,
  Cloud,
  Database,
  ShoppingBag,
  Star,
  Home,
  ArrowRight,
  LayoutDashboard,
  Brain,
  Shield,
  Zap,
  Calendar,
  CreditCard,
  Globe,
} from "lucide-react";
import logo from "../assets/elitech-logo.png";

const menuItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    isHome: true,
  },
  {
    label: "Services",
    href: "#services",
    sections: [
      {
        title: "Core Development",
        icon: Code2,
        description: "Build robust, scalable applications",
        links: [
          { name: "Web Development", href: "#web-development", icon: Globe },
          { name: "Mobile App Development", href: "#mobile-development", icon: Zap },
          { name: "Desktop Applications", href: "#desktop-apps", icon: LayoutDashboard },
          { name: "Custom Software", href: "#custom-software", icon: Code2 },
        ],
      },
      {
        title: "Emerging Technology",
        icon: Brain,
        description: "Cutting-edge solutions",
        links: [
          { name: "AI Solutions", href: "#ai-solutions", icon: Brain },
          { name: "Machine Learning", href: "#machine-learning", icon: Cpu },
          { name: "Automation Systems", href: "#automation", icon: Zap },
          { name: "Cloud Integration", href: "#cloud-integration", icon: Cloud },
        ],
      },
      {
        title: "Design & Support",
        icon: Paintbrush,
        description: "Creative & reliable support",
        links: [
          { name: "UI/UX Design", href: "#uiux", icon: Paintbrush },
          { name: "Web Design", href: "#web-design", icon: LayoutDashboard },
          { name: "Maintenance & Support", href: "#maintenance", icon: Shield },
          { name: "System Upgrades", href: "#upgrades", icon: Rocket },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    sections: [
      {
        title: "Business Solutions",
        icon: Briefcase,
        description: "Enterprise-grade solutions",
        links: [
          { name: "Business Management Systems", href: "#business-systems", icon: Database },
          { name: "School Management Systems", href: "#school-systems", icon: Users },
          { name: "Hospital Management Systems", href: "#hospital-systems", icon: Shield },
          { name: "E-commerce Platforms", href: "#ecommerce", icon: ShoppingBag },
        ],
      },
      {
        title: "Digital Products",
        icon: Sparkles,
        description: "Modern digital experiences",
        links: [
          { name: "Client Portals", href: "#client-portals", icon: LayoutDashboard },
          { name: "Booking Platforms", href: "#booking", icon: Calendar },
          { name: "Payment Integrations", href: "#payments", icon: CreditCard },
          { name: "Admin Dashboards", href: "#dashboards", icon: LayoutDashboard },
        ],
      },
    ],
  },
  {
    label: "Projects",
    href: "#projects",
    sections: [
      {
        title: "Our Work",
        icon: FolderGit2,
        description: "Success stories",
        links: [
          { name: "Case Studies", href: "#case-studies", icon: Star },
          { name: "Recent Projects", href: "#recent-projects", icon: FolderGit2 },
          { name: "Industries Served", href: "#industries", icon: Briefcase },
          { name: "Client Success Stories", href: "#success-stories", icon: Users },
        ],
      },
    ],
  },
];

const simpleLinks = [
  { label: "About", href: "#about", icon: Info },
  { label: "Contact", href: "#contact", icon: Mail },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 shadow-2xl"
      style={{ backgroundColor: "#141a47", fontFamily: "monospace" }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition duration-300 hover:scale-105"
        >
          <div className="relative h-10 w-37.5 sm:h-12 sm:w-45 md:h-14 md:w-52.5 lg:h-16 lg:w-57.5">
            <Image
              src={logo}
              alt="ELITECH Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-2">
            {menuItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0]"
                >
                  {item.label}
                  {!item.isHome && (
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {!item.isHome && item.sections && (
                  <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-230 -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-6 opacity-0 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="grid gap-6 lg:grid-cols-3">
                      {item.sections.map((section) => {
                        const SectionIcon = section.icon;

                        return (
                          <div
                            key={section.title}
                            className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:border-[#36B7F0]/20 hover:shadow-lg"
                          >
                            <div className="mb-4 flex items-start gap-3">
                              <div className="rounded-xl bg-[#141a47] p-2">
                                <SectionIcon size={18} className="text-[#36B7F0]" />
                              </div>
                              <div>
                                <h3 className="text-sm font-bold text-slate-900">
                                  {section.title}
                                </h3>
                                <p className="mt-1 text-xs text-slate-500">
                                  {section.description}
                                </p>
                              </div>
                            </div>

                            <div className="space-y-2">
                              {section.links.map((link) => {
                                const LinkIcon = link.icon;

                                return (
                                  <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-[#36B7F0]/10 hover:text-[#36B7F0]"
                                  >
                                    <LinkIcon size={15} />
                                    {link.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#141a47] transition hover:text-[#36B7F0]"
                      >
                        View All {item.label}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {simpleLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#36B7F0] to-[#5CC6F3] px-7 py-3 font-bold text-[#141a47] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Build</span>
            <Rocket size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-linear-to-r from-[#5CC6F3] to-[#36B7F0] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition-all duration-300 hover:bg-white/20 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-[#141a47] lg:hidden sm:top-24 sm:max-h-[calc(100vh-6rem)]">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0]"
              >
                <Home size={20} className="text-[#36B7F0]" />
                Home
              </Link>

              {menuItems
                .filter((item) => !item.isHome)
                .map((item) => {
                  const isOpen = activeMobileDropdown === item.label;

                  return (
                    <div
                      key={item.label}
                      className="overflow-hidden rounded-2xl border border-white/15 bg-white/5"
                    >
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold text-white transition hover:bg-white/10"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-all duration-300 ${
                            isOpen ? "rotate-180 text-[#36B7F0]" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="space-y-5 border-t border-white/10 px-5 py-5">
                          {item.sections?.map((section) => {
                            const SectionIcon = section.icon;

                            return (
                              <div key={section.title}>
                                <div className="mb-3 flex items-center gap-2">
                                  <SectionIcon size={18} className="text-[#36B7F0]" />
                                  <div>
                                    <h3 className="text-sm font-bold text-[#36B7F0]">
                                      {section.title}
                                    </h3>
                                    <p className="text-xs text-white/60">
                                      {section.description}
                                    </p>
                                  </div>
                                </div>

                                <div className="ml-2 space-y-2">
                                  {section.links.map((link) => {
                                    const LinkIcon = link.icon;

                                    return (
                                      <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-white/85 transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0]"
                                      >
                                        <LinkIcon size={16} />
                                        {link.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

              {simpleLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#36B7F0] to-[#5CC6F3] px-6 py-4 text-base font-bold text-[#141a47] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                Build
                <Rocket size={18} />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;