"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
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
    href: "/services",
    sections: [
      {
        title: "Core Development",
        icon: Code2,
        description: "Build robust, scalable applications",
        links: [
          { name: "Web Development", href: "/service/web-development", icon: Globe },
          { name: "Mobile App Development", href: "/service/mobile-app-development", icon: Zap },
          { name: "Desktop Applications", href: "/service/desktop-applications", icon: LayoutDashboard },
          { name: "Custom Software", href: "/service/custom-software", icon: Code2 },
        ],
      },
      {
        title: "Emerging Technology",
        icon: Brain,
        description: "Cutting-edge solutions",
        links: [
          { name: "AI Solutions", href: "/service/ai-solutions", icon: Brain },
          { name: "Machine Learning", href: "/service/machine-learning", icon: Cpu },
          { name: "Automation Systems", href: "/service/automation-systems", icon: Zap },
          { name: "Cloud Integration", href: "/service/cloud-integration", icon: Cloud },
        ],
      },
      {
        title: "Design & Support",
        icon: Paintbrush,
        description: "Creative & reliable support",
        links: [
          { name: "UI/UX Design", href: "/service/ui-ux-design", icon: Paintbrush },
          { name: "Web Design", href: "/service/web-design", icon: LayoutDashboard },
          { name: "Maintenance & Support", href: "/service/maintenance-support", icon: Shield },
          { name: "System Upgrades", href: "/service/system-upgrades", icon: Rocket },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    sections: [
      {
        title: "Business Solutions",
        icon: Briefcase,
        description: "Enterprise-grade solutions",
        links: [
          { name: "Business Management Systems", href: "/solution/business-management-systems", icon: Database },
          { name: "School Management Systems", href: "/solution/school-management-systems", icon: Users },
          { name: "Hospital Management Systems", href: "/solution/hospital-management-systems", icon: Shield },
          { name: "E-commerce Platforms", href: "/solution/ecommerce-platforms", icon: ShoppingBag },
        ],
      },
      {
        title: "Digital Products",
        icon: Sparkles,
        description: "Modern digital experiences",
        links: [
          { name: "Client Portals", href: "/solution/client-portals", icon: LayoutDashboard },
          { name: "Booking Platforms", href: "/solution/booking-platforms", icon: Calendar },
          { name: "Payment Integrations", href: "/solution/payment-integrations", icon: CreditCard },
          { name: "Admin Dashboards", href: "/solution/admin-dashboards", icon: LayoutDashboard },
        ],
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    sections: [
      {
        title: "Our Work",
        icon: FolderGit2,
        description: "Success stories",
        links: [
          { name: "Case Studies", href: "/projects/case-studies", icon: Star },
          { name: "Recent Projects", href: "/projects/recent-projects", icon: FolderGit2 },
          { name: "Industries Served", href: "/projects/industries-served", icon: Briefcase },
          { name: "Client Success Stories", href: "/projects/client-success-stories", icon: Users },
        ],
      },
    ],
  },
];

const simpleLinks = [
  { label: "About", href: "/about", icon: Info },
  { label: "Contact", href: "/contact", icon: Mail },
];

function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  const isPathActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  const isParentActive = (item: (typeof menuItems)[number]) => {
    if (item.isHome) return pathname === "/";

    const childLinks =
      item.sections?.flatMap((section) => section.links.map((link) => link.href)) ?? [];

    return pathname === item.href || childLinks.includes(pathname);
  };

  const topLevelActiveMap = useMemo(() => {
    const result: Record<string, boolean> = {};
    for (const item of menuItems) {
      result[item.label] = isParentActive(item);
    }
    return result;
  }, [pathname]);

  const navLinkBase =
    "inline-flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300";

  const navLinkActive =
    "bg-white/15 text-[#36B7F0] shadow-[0_0_0_1px_rgba(54,183,240,0.35),0_0_20px_rgba(54,183,240,0.18)]";

  const navLinkInactive =
    "text-white/90 hover:bg-white/10 hover:text-[#36B7F0]";

  const mobileLinkBase =
    "flex items-center gap-3 rounded-2xl border px-5 py-4 text-base font-semibold transition-all duration-300";

  const mobileActive =
    "border-[#36B7F0]/50 bg-[#36B7F0]/15 text-[#36B7F0] shadow-[0_0_0_1px_rgba(54,183,240,0.25),0_0_20px_rgba(54,183,240,0.16)]";

  const mobileInactive =
    "border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-[#36B7F0]";

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 shadow-2xl"
      style={{ backgroundColor: "#141a47", fontFamily: "monospace" }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center transition duration-300 hover:scale-105"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative h-10 w-[150px] sm:h-12 sm:w-[180px] md:h-14 md:w-[210px] lg:h-16 lg:w-[230px]">
            <Image
              src={logo}
              alt="ELITECH Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-2">
            {menuItems.map((item) => {
              const isActive = topLevelActiveMap[item.label];

              return (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`}
                  >
                    {item.label}
                    {!item.isHome && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 group-hover:rotate-180 ${
                          isActive ? "text-[#36B7F0]" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {!item.isHome && item.sections && (
                    <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-230 -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-6 opacity-0 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div
                        className={`mb-5 rounded-2xl border px-4 py-3 ${
                          isActive
                            ? "border-[#36B7F0]/30 bg-[#36B7F0]/5"
                            : "border-slate-100 bg-slate-50"
                        }`}
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-500">
                          {isActive ? "Currently selected" : "Select a section below"}
                        </p>
                      </div>

                      <div
                        className={`grid gap-6 ${
                          item.sections.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                        }`}
                      >
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
                                  const isChildActive = isPathActive(link.href);

                                  return (
                                    <Link
                                      key={link.name}
                                      href={link.href}
                                      className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 ${
                                        isChildActive
                                          ? "bg-[#36B7F0]/12 text-[#36B7F0] shadow-[inset_0_0_0_1px_rgba(54,183,240,0.22)]"
                                          : "text-slate-700 hover:bg-[#36B7F0]/10 hover:text-[#36B7F0]"
                                      }`}
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
                          className={`inline-flex items-center gap-2 text-sm font-semibold transition ${
                            isActive ? "text-[#36B7F0]" : "text-[#141a47] hover:text-[#36B7F0]"
                          }`}
                        >
                          View All {item.label}
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {simpleLinks.map((link) => {
              const isActive = isPathActive(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#36B7F0] to-[#5CC6F3] px-7 py-3 font-bold text-[#141a47] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Build</span>
            <Rocket
              size={16}
              className="relative z-10 transition-transform group-hover:translate-x-1"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#5CC6F3] to-[#36B7F0] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition-all duration-300 hover:bg-white/20 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-[#141a47] lg:hidden sm:top-24 sm:max-h-[calc(100vh-6rem)]">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`${mobileLinkBase} ${pathname === "/" ? mobileActive : mobileInactive}`}
              >
                <Home size={20} className="text-[#36B7F0]" />
                Home
              </Link>

              {menuItems
                .filter((item) => !item.isHome)
                .map((item) => {
                  const isOpen = activeMobileDropdown === item.label;
                  const isTopActive = topLevelActiveMap[item.label];

                  return (
                    <div
                      key={item.label}
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isTopActive
                          ? "border-[#36B7F0]/40 bg-[#36B7F0]/10 shadow-[0_0_0_1px_rgba(54,183,240,0.18),0_0_20px_rgba(54,183,240,0.12)]"
                          : "border-white/15 bg-white/5"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold transition ${
                          isTopActive
                            ? "text-[#36B7F0]"
                            : "text-white hover:bg-white/10"
                        }`}
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
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                              isPathActive(item.href)
                                ? "bg-[#36B7F0]/15 text-[#36B7F0]"
                                : "text-white/90 hover:bg-white/10 hover:text-[#36B7F0]"
                            }`}
                          >
                            View All {item.label}
                          </Link>

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
                                    const isChildActive = isPathActive(link.href);

                                    return (
                                      <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                                          isChildActive
                                            ? "bg-[#36B7F0]/15 text-[#36B7F0] shadow-[inset_0_0_0_1px_rgba(54,183,240,0.2)]"
                                            : "text-white/85 hover:bg-white/10 hover:text-[#36B7F0]"
                                        }`}
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

              {simpleLinks.map((link) => {
                const isActive = isPathActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`${mobileLinkBase} ${isActive ? mobileActive : mobileInactive}`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#36B7F0] to-[#5CC6F3] px-6 py-4 text-base font-bold text-[#141a47] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
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