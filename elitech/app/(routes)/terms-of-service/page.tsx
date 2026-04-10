import React from "react";
import {
  FileCheck,
  Scale,
  Shield,
  Briefcase,
  AlertCircle,
  Mail,
  ChevronRight,
} from "lucide-react";

function page() {
  const sections = [
    {
      title: "Introduction",
      body: [
        "Welcome to Elitech. These Terms of Service govern your access to and use of our website, software products, digital platforms, and professional services. By accessing our website or engaging our services, you agree to be bound by these terms.",
        "Elitech is a software company that provides services such as web development, mobile application development, custom software solutions, AI systems, cloud integration, consulting, and related digital services. These terms are intended to define the relationship between Elitech and every visitor, client, and user of our services.",
      ],
    },
    {
      title: "Use of Our Services",
      body: [
        "You agree to use our website and services only for lawful purposes and in a way that does not violate applicable laws, regulations, intellectual property rights, or the rights of other individuals or organizations.",
        "You must not misuse our systems, attempt unauthorized access, interfere with the operation of our services, distribute malicious code, or use our website in any way that may damage our reputation, infrastructure, or other users.",
      ],
    },
    {
      title: "Client Engagements",
      body: [
        "Where Elitech provides custom development, consulting, or implementation services, the details of the engagement may also be governed by a separate proposal, statement of work, contract, or service agreement. In the event of any conflict, the signed service agreement will take precedence over these general terms.",
        "Clients are responsible for providing accurate project requirements, timely feedback, required content, lawful access credentials, and any approvals necessary for project execution.",
      ],
    },
    {
      title: "Intellectual Property",
      body: [
        "Unless otherwise agreed in writing, all content on this website, including text, branding, visuals, source materials, graphics, icons, designs, and documentation, remains the property of Elitech or its licensors and is protected by applicable intellectual property laws.",
        "Ownership of custom-built deliverables, software, designs, or code produced for clients shall be governed by the relevant project agreement. Elitech retains ownership of pre-existing tools, frameworks, reusable components, processes, and know-how used in service delivery unless expressly transferred in writing.",
      ],
    },
    {
      title: "Payments and Billing",
      body: [
        "For paid services, clients agree to pay all fees as stated in the applicable proposal, quotation, invoice, or contract. Payment timelines, milestones, deposits, recurring charges, and penalties for delay may be defined in the relevant agreement.",
        "Failure to make payments on time may result in project suspension, delayed delivery, restricted support, or termination of the service relationship where permitted by contract or law.",
      ],
    },
    {
      title: "Confidentiality",
      body: [
        "Elitech respects confidential information shared during business engagements and expects clients to do the same. Confidential information includes business plans, technical documents, access credentials, source code, trade secrets, client data, and other non-public materials disclosed in the course of a project.",
        "Both parties agree not to disclose confidential information to unauthorized third parties except where required for service delivery, compliance, or by law.",
      ],
    },
    {
      title: "Disclaimers",
      body: [
        "Our website and general information are provided on an 'as is' and 'as available' basis without warranties of any kind, except where otherwise stated in a binding written agreement. While we strive for accuracy, reliability, and quality, we do not guarantee uninterrupted availability, absolute error-free performance, or that all content will always be current.",
        "Any timelines, estimates, performance expectations, or strategic recommendations provided before or during a project are made in good faith but may depend on project scope, client cooperation, third-party tools, and technical constraints.",
      ],
    },
    {
      title: "Limitation of Liability",
      body: [
        "To the fullest extent permitted by law, Elitech shall not be liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, loss of business opportunity, or reputational harm arising from the use of our website or services.",
        "Our total liability in relation to any service engagement shall, where permitted by law, be limited to the amount actually paid to Elitech for the relevant service giving rise to the claim, unless otherwise specified in a written agreement.",
      ],
    },
    {
      title: "Termination",
      body: [
        "We reserve the right to suspend or terminate access to our website or services where a user breaches these terms, engages in unlawful conduct, misuses our infrastructure, fails to meet payment obligations, or otherwise creates material risk to Elitech or its clients.",
        "Termination of a client engagement may also be governed by project contracts, including notice periods, payment for completed work, and handover obligations where applicable.",
      ],
    },
    {
      title: "Changes to These Terms",
      body: [
        "Elitech may update these Terms of Service from time to time to reflect changes in our operations, legal requirements, or service offerings. Updated terms become effective once published on this page unless otherwise stated.",
        "Your continued use of our website or services after such updates means you accept the revised terms.",
      ],
    },
    {
      title: "Contact Us",
      body: [
        "If you have any questions about these Terms of Service or need clarification regarding our website or services, please contact our team through our official channels.",
      ],
    },
  ];

  const quickLinks = sections.map((section) => ({
    id: section.title.toLowerCase().replace(/\s+/g, "-"),
    title: section.title,
  }));

  const highlights = [
    {
      icon: FileCheck,
      title: "Clear Terms",
      text: "Straightforward conditions for using our website and services.",
    },
    {
      icon: Scale,
      title: "Fair Use",
      text: "Defined responsibilities for both Elitech and our clients.",
    },
    {
      icon: Shield,
      title: "Protection",
      text: "Safeguards around confidentiality, liability, and lawful use.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f8] text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#36B7F0]/20 bg-[#36B7F0]/10 px-4 py-1.5 text-sm font-semibold text-[#2563eb]">
              Legal
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#120700] sm:text-5xl">
              Terms of Service
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500">
              The rules, responsibilities, and conditions that govern the use of
              our website, products, and software services.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#36B7F0]/10">
                  <Briefcase size={20} className="text-[#2563eb]" />
                </div>
                <h3 className="font-bold text-slate-900">Business Use</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Terms covering engagements, deliverables, billing, and support.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#36B7F0]/10">
                  <AlertCircle size={20} className="text-[#2563eb]" />
                </div>
                <h3 className="font-bold text-slate-900">User Obligations</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Expectations around lawful and responsible use of our services.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-5"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#36B7F0]/10">
                      <Icon size={20} className="text-[#2563eb]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
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
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#36B7F0]/10 hover:text-[#2563eb]"
                >
                  <span>{item.title}</span>
                  <ChevronRight size={15} />
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#141a47] p-5 text-white">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <Scale size={20} className="text-[#36B7F0]" />
              </div>
              <h3 className="text-base font-bold">Service relationship</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">
                These terms help define how we work with clients and visitors in
                a transparent and professional way.
              </p>
            </div>
          </aside>

          <div className="space-y-8">
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
                  <h3 className="text-2xl font-bold">Need clarification?</h3>
                  <p className="mt-2 max-w-2xl text-white/75">
                    Reach out to our team if you need help understanding these
                    terms before using our services or engaging us for a project.
                  </p>
                </div>

                <a
                  href="mailto:legal@elitech.com"
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

export default page;