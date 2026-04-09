import React from "react";
import Image from "next/image";
import {
  Search,
  ShieldCheck,
  Lock,
  FileText,
  Eye,
  Mail,
  ChevronRight,
} from "lucide-react";
import privacy from "../../assets/privacy-illustration.png"

function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      body: [
        "At Elitech, we value your privacy and are committed to protecting the personal information of our clients, partners, and website visitors. This Privacy Policy explains how we collect, use, store, and safeguard your information when you interact with our website, products, and services.",
        "As a software company, we may process information in connection with web development, mobile applications, custom software, cloud systems, AI solutions, and other digital services we provide. We handle such data responsibly and in accordance with applicable laws and industry best practices.",
        "By using our website or engaging our services, you agree to the terms outlined in this Privacy Policy.",
      ],
    },
    {
      title: "Information We Collect",
      body: [
        "We may collect personal information such as your name, email address, phone number, company name, billing details, and other contact information you voluntarily provide when you contact us, request a quote, subscribe to updates, or engage our services.",
        "We may also collect technical information including IP address, browser type, operating system, device information, cookies, usage analytics, and interaction data to help us improve user experience, website performance, and service delivery.",
      ],
    },
    {
      title: "How We Use Your Information",
      body: [
        "We use the information we collect to respond to inquiries, provide and improve our services, process transactions, manage client relationships, personalize user experience, send important service updates, maintain security, and comply with legal obligations.",
        "Where permitted, we may also use your information to share insights about our new products, software solutions, company updates, and other relevant communications.",
      ],
    },
    {
      title: "Sensitive Personal Data",
      body: [
        "We do not intentionally collect sensitive personal data unless it is necessary for a specific service and provided lawfully. Where such information is required, we apply stronger access control, limited retention, and appropriate security measures to protect it.",
        "Clients are encouraged not to submit confidential or highly sensitive personal information through general website forms unless specifically requested as part of a secured business process.",
      ],
    },
    {
      title: "Data Sharing and Disclosure",
      body: [
        "We do not sell your personal information. We may share information with trusted service providers, hosting platforms, payment processors, analytics providers, or other business partners strictly where necessary to operate our website and services.",
        "We may also disclose information when required by law, regulation, court order, or to protect our legal rights, systems, clients, and users.",
      ],
    },
    {
      title: "Data Security",
      body: [
        "We implement reasonable technical and organizational safeguards to protect your information against unauthorized access, misuse, alteration, disclosure, or destruction. These measures may include encryption, secure hosting, access controls, monitoring, and staff confidentiality practices.",
        "While we take security seriously, no digital transmission or storage system can be guaranteed to be completely secure.",
      ],
    },
    {
      title: "Your Rights",
      body: [
        "Depending on your location and applicable law, you may have the right to request access to your personal data, request correction or deletion, object to certain processing, withdraw consent where applicable, and request a copy of the information we hold about you.",
        "To exercise any of these rights, please contact us using the details provided below.",
      ],
    },
    {
      title: "Contact Us",
      body: [
        "If you have questions about this Privacy Policy or how Elitech handles personal data, please contact us through our official communication channels. We will review your request and respond within a reasonable time.",
      ],
    },
  ];

  const quickLinks = sections.map((section) => ({
    id: section.title.toLowerCase().replace(/\s+/g, "-"),
    title: section.title,
  }));

  return (
    <main className="min-h-screen bg-[#f7f7f8] text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#36B7F0]/20 bg-[#36B7F0]/10 px-4 py-1.5 text-sm font-semibold text-[#2563eb]">
              Legal
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#120700] sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500">
              Our commitment to protecting your data and maintaining trust as a
              technology partner.
            </p>

            <div className="mt-8 max-w-xl">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search policy"
                  className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-[#36B7F0] focus:ring-4 focus:ring-[#36B7F0]/10"
                />
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-70 w-full max-w-130">
              <Image
                src={privacy}
                alt="Privacy illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              On this page
            </h2>

            <div className="mt-5 space-y-2">
              {quickLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#36B7F0]/8 hover:text-[#2563eb]"
                >
                  <span>{item.title}</span>
                  <ChevronRight size={15} />
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#141a47] p-5 text-white">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck size={20} className="text-[#36B7F0]" />
              </div>
              <h3 className="text-base font-bold">Your data matters</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">
                We design secure and reliable software solutions with privacy in
                mind.
              </p>
            </div>
          </aside>

          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#36B7F0]/10">
                  <Lock size={20} className="text-[#2563eb]" />
                </div>
                <h3 className="font-bold text-slate-900">Security First</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Strong safeguards for personal and business data.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#36B7F0]/10">
                  <Eye size={20} className="text-[#2563eb]" />
                </div>
                <h3 className="font-bold text-slate-900">Transparency</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Clear information on how and why we use data.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#36B7F0]/10">
                  <FileText size={20} className="text-[#2563eb]" />
                </div>
                <h3 className="font-bold text-slate-900">Compliance</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Practices aligned with applicable privacy obligations.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  id={section.title.toLowerCase().replace(/\s+/g, "-")}
                  className={index !== 0 ? "mt-12" : ""}
                >
                  <h2 className="text-3xl font-bold text-[#2563eb]">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-6">
                    {section.body.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-lg leading-9 text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="rounded-3xl bg-[#141a47] p-8 text-white shadow-sm">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Need more clarification?</h3>
                  <p className="mt-2 max-w-2xl text-white/75">
                    Contact our team for questions about privacy, security, or
                    how your information is handled across our services.
                  </p>
                </div>

                <a
                  href="mailto:privacy@elitech.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[#36B7F0] px-6 py-3 font-semibold text-[#141a47] transition hover:scale-[1.02]"
                >
                  <Mail size={18} />
                  Contact Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;