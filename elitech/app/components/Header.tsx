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
import logo from "../assets/elitech-logo4.png";

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
    "inline-flex items-center gap-1.5 py-2 text-[15px] font-medium tracking-[0.01em] transition-all duration-300";

  const navLinkActive =
    "text-[#8ED8FF] drop-shadow-[0_0_10px_rgba(142,216,255,0.35)]";

  const navLinkInactive = "text-white/90 hover:text-white";

  const mobileLinkBase =
    "flex items-center gap-3 rounded-2xl border px-5 py-4 text-base font-medium transition-all duration-300";

  const mobileActive =
    "border-[#55c8ff]/40 bg-[#55c8ff]/10 text-[#8ED8FF] shadow-[0_0_0_1px_rgba(85,200,255,0.14)]";

  const mobileInactive =
    "border-white/10 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white";

  const allDesktopItems = [...menuItems, ...simpleLinks];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full font-['Poppins',sans-serif]">
      {/* Completely transparent background - no gradients, no blur, no lines */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Removed: gradient background, backdrop blur, and bottom border line */}

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center transition duration-300 hover:opacity-90"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative h-10 w-[132px] sm:h-12 sm:w-[150px] lg:h-14 lg:w-[170px]">
            <Image
              src={logo}
              alt="Elitech Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center">
            {allDesktopItems.map((item, index) => {
              const isMenuItem = "isHome" in item || "sections" in item;
              const isHomeItem = "isHome" in item && item.isHome;
              const hasDropdown = "sections" in item && !!item.sections;
              const isActive = isMenuItem
                ? topLevelActiveMap[item.label] ?? isPathActive(item.href)
                : isPathActive(item.href);

              return (
                <div key={item.label} className="group relative flex items-center">
                  <Link
                    href={item.href}
                    className={`${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`}
                  >
                    <span className="relative">
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-[#7ED3FF]" />
                      )}
                    </span>

                    {!isHomeItem && hasDropdown && (
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 group-hover:rotate-180 ${
                          isActive ? "text-[#8ED8FF]" : "text-white/70"
                        }`}
                      />
                    )}
                  </Link>

                  {index !== allDesktopItems.length - 1 && (
                    <span className="mx-5 h-4 w-px bg-white/20" />
                  )}

                  {!isHomeItem && hasDropdown && (
                    <div className="invisible absolute left-1/2 top-full z-50 mt-6 w-[920px] -translate-x-1/2 rounded-[28px] border border-white/10 bg-[#081427]/95 p-6 opacity-0 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                        <div>
                          <p className="text-sm font-semibold text-white">{item.label}</p>
                          <p className="text-xs text-white/55">
                            Explore our {item.label.toLowerCase()} offerings
                          </p>
                        </div>

                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#8ED8FF] transition hover:text-white"
                        >
                          View All
                          <ArrowRight size={14} />
                        </Link>
                      </div>

                      <div
                        className={`grid gap-5 ${
                          item.sections.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
                        }`}
                      >
                        {item.sections.map((section) => {
                          const SectionIcon = section.icon;

                          return (
                            <div
                              key={section.title}
                              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#55c8ff]/25 hover:bg-white/[0.05]"
                            >
                              <div className="mb-4 flex items-start gap-3">
                                <div className="rounded-xl border border-[#55c8ff]/20 bg-[#55c8ff]/10 p-2.5">
                                  <SectionIcon size={18} className="text-[#8ED8FF]" />
                                </div>

                                <div>
                                  <h3 className="text-sm font-semibold text-white">
                                    {section.title}
                                  </h3>
                                  <p className="mt-1 text-xs leading-5 text-white/55">
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
                                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-300 ${
                                        isChildActive
                                          ? "bg-[#55c8ff]/12 text-[#8ED8FF]"
                                          : "text-white/78 hover:bg-white/[0.05] hover:text-white"
                                      }`}
                                    >
                                      <LinkIcon size={16} />
                                      <span>{link.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#7ed3ff]/35 bg-[#267A9E] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#034663] hover:shadow-[0_10px_30px_rgba(83,191,239,0.25)]"
          >
            Get Started
            <Rocket size={16} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 p-2.5 text-white transition-all duration-300 hover:bg-white/15 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-50 bg-[#071325]/95 backdrop-blur-xl lg:hidden">
          {/* Removed: border-t border-white/10 */}
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`${mobileLinkBase} ${pathname === "/" ? mobileActive : mobileInactive}`}
              >
                <Home size={20} className="text-[#8ED8FF]" />
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
                          ? "border-[#55c8ff]/30 bg-[#55c8ff]/10"
                          : "border-white/10 bg-white/[0.04]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        className={`flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium transition ${
                          isTopActive ? "text-[#8ED8FF]" : "text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-all duration-300 ${
                            isOpen ? "rotate-180 text-[#8ED8FF]" : "text-white/70"
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="space-y-5 border-t border-white/10 px-5 py-5">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                              isPathActive(item.href)
                                ? "bg-[#55c8ff]/12 text-[#8ED8FF]"
                                : "text-white/85 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            View All {item.label}
                          </Link>

                          {item.sections?.map((section) => {
                            const SectionIcon = section.icon;

                            return (
                              <div key={section.title}>
                                <div className="mb-3 flex items-center gap-2">
                                  <SectionIcon size={18} className="text-[#8ED8FF]" />
                                  <div>
                                    <h3 className="text-sm font-semibold text-[#8ED8FF]">
                                      {section.title}
                                    </h3>
                                    <p className="text-xs text-white/55">
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
                                        className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-all duration-300 ${
                                          isChildActive
                                            ? "bg-[#55c8ff]/12 text-[#8ED8FF]"
                                            : "text-white/80 hover:bg-white/10 hover:text-white"
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
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#267A9E] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#034663]"
              >
                Get Started
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