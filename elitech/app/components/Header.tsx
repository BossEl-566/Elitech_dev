"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
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
  Zap
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

// Import missing icons
import { Calendar, CreditCard, Globe } from "lucide-react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(
    null
  );
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl" style={{ backgroundColor: '#141a47', fontFamily: " monospace" }}>
      <div className="mx-auto flex h-24 md:h-28 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Responsive sizes */}
        <Link href="/" className="flex shrink-0 items-center transform transition hover:scale-105 duration-300">
          <div className="relative h-12 w-45 sm:h-14 sm:w-50 md:h-16 md:w-60 lg:h-20 lg:w-70">
            <Image
              src={logo}
              alt="ELITECH Logo"
              fill
              priority
              className="object-contain object-left"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>

        {/* Tablet Menu (768px - 1023px) */}
        {isTablet && (
          <>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Tablet Mobile Menu */}
            {mobileOpen && (
              <div className="fixed inset-0 top-24 z-50 bg-[#141a47] lg:hidden overflow-y-auto">
                <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
                  <nav className="flex flex-col gap-3">
                    {/* Home link for tablet */}
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0]"
                    >
                      <Home size={20} className="text-[#36B7F0]" />
                      Home
                    </Link>

                    {menuItems.filter(item => !item.isHome).map((item) => {
                      const isOpen = activeMobileDropdown === item.label;

                      return (
                        <div
                          key={item.label}
                          className="overflow-hidden rounded-xl border border-white/15 bg-white/5 transition-all duration-300"
                        >
                          <button
                            type="button"
                            onClick={() => toggleMobileDropdown(item.label)}
                            className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold text-white transition hover:bg-white/10"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              size={20}
                              className={`transition-all duration-300 ${isOpen ? "rotate-180 text-[#36B7F0]" : ""}`}
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
                                        <p className="text-xs text-white/60">{section.description}</p>
                                      </div>
                                    </div>
                                    <div className="space-y-2 ml-2">
                                      {section.links.map((link) => {
                                        const LinkIcon = link.icon;
                                        return (
                                          <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-white/85 transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0] hover:translate-x-1"
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
                        className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0]"
                      >
                        {link.label}
                      </Link>
                    ))}

                    <Link
                      href="#contact"
                      onClick={() => setMobileOpen(false)}
                      className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#36B7F0] to-[#5CC6F3] px-6 py-4 text-base font-bold text-[#141a47] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        Build
                      <Rocket size={18} />
                    </Link>
                  </nav>
                </div>
              </div>
            )}
          </>
        )}

        {/* Desktop Nav (1024px and above) */}
        {isDesktop && (
          <>
            <nav className="hidden lg:flex items-center gap-2">
              {menuItems.map((item) => (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-full px-4 lg:px-5 py-2 lg:py-2.5 text-sm lg:text-base font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0] hover:scale-105"
                  >
                    {item.label}
                    {!item.isHome && (
                      <ChevronDown 
                        size={14} 
                        className="transition-all duration-300 group-hover:rotate-180" 
                      />
                    )}
                  </Link>

                  {/* Mega Menu - Icons inside here */}
                  {!item.isHome && item.sections && (
                    <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-200 lg:w-225 -translate-x-1/2 rounded-2xl bg-white opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:mt-4 group-hover:opacity-100">
                      <div className="p-4 lg:p-6">
                        <div className="grid gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {item.sections?.map((section) => {
                            const SectionIcon = section.icon;
                            return (
                              <div
                                key={section.title}
                                className="group/section rounded-xl border border-gray-100 bg-linear-to-br from-gray-50 to-white p-4 lg:p-5 transition-all duration-300 hover:shadow-xl hover:border-[#36B7F0]/20 hover:scale-[1.02]"
                              >
                                <div className="mb-3 lg:mb-4 flex items-start gap-2 lg:gap-3">
                                  <div className="rounded-lg bg-linear-to-br from-[#141a47] to-[#1e2a6e] p-2 shadow-lg">
                                    <SectionIcon size={18} className="text-[#36B7F0]" />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="text-sm lg:text-base font-bold text-gray-800">
                                      {section.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5">
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
                                        className="group/link flex items-center gap-2 lg:gap-3 rounded-lg px-2 lg:px-3 py-1.5 lg:py-2 text-xs lg:text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-linear-to-r hover:from-[#36B7F0]/10 hover:to-transparent hover:text-[#36B7F0] hover:translate-x-1"
                                      >
                                        <LinkIcon size={14} className="text-gray-400 group-hover/link:text-[#36B7F0]" />
                                        {link.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Mega Menu Footer */}
                        <div className="mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-gray-100">
                          <Link 
                            href={item.href} 
                            className="group/footer inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-[#141a47] transition-all duration-300 hover:text-[#36B7F0]"
                          >
                            View All {item.label}
                            <ArrowRight size={14} className="transition-transform group-hover/footer:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {simpleLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 lg:px-5 py-2 lg:py-2.5 text-sm lg:text-base font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-[#36B7F0] hover:scale-105"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#36B7F0] to-[#5CC6F3] px-5 lg:px-7 py-2.5 lg:py-3.5 text-sm lg:text-base font-bold text-[#141a47] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">Build</span>
                <Rocket size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-linear-to-r from-[#5CC6F3] to-[#36B7F0] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;