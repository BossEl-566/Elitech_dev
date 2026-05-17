import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  LineChart,
  ScanSearch,
  Cpu,
  ShieldCheck,
  Workflow,
  Layers3,
  CheckCircle,
  Sparkles,
  Network,
  Gauge,
  BarChart3,
  Cloud,
  Code2,
  Rocket,
  Eye,
  Settings2,
  Activity,
  GitBranch,
  FileSearch,
  LockKeyhole,
  Server,
} from "lucide-react";

const capabilities = [
  {
    icon: LineChart,
    title: "Predictive Models",
    text: "Forecast demand, sales, customer behavior, risks, trends, and business performance.",
  },
  {
    icon: ScanSearch,
    title: "Classification Systems",
    text: "Automatically categorize documents, users, transactions, products, tickets, and records.",
  },
  {
    icon: BrainCircuit,
    title: "Recommendation Engines",
    text: "Suggest products, content, services, actions, or next steps based on user and business data.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    text: "Analyze images, detect objects, inspect quality, recognize patterns, and automate visual tasks.",
  },
  {
    icon: FileSearch,
    title: "Data Mining",
    text: "Extract patterns from large datasets and turn raw information into practical business insight.",
  },
  {
    icon: ShieldCheck,
    title: "Anomaly Detection",
    text: "Identify unusual activity, fraud signals, operational errors, and unexpected system behavior.",
  },
];

const useCases = [
  "Sales forecasting",
  "Customer segmentation",
  "Fraud detection",
  "Product recommendations",
  "Churn prediction",
  "Demand planning",
  "Image recognition",
  "Risk scoring",
  "Document classification",
  "Inventory prediction",
  "Smart dashboards",
  "Automated decision support",
];

const process = [
  {
    step: "01",
    title: "Data Discovery",
    text: "We review your available data, business goals, current systems, and the decision you want the model to support.",
  },
  {
    step: "02",
    title: "Data Preparation",
    text: "We clean, structure, label, transform, and prepare the dataset so it can be used for training.",
  },
  {
    step: "03",
    title: "Model Development",
    text: "We test algorithms, tune performance, validate accuracy, and select the best model approach.",
  },
  {
    step: "04",
    title: "Deployment",
    text: "We integrate the model into your app, dashboard, API, workflow, or internal business system.",
  },
  {
    step: "05",
    title: "Monitoring",
    text: "We monitor accuracy, performance, drift, and model behavior after launch.",
  },
];

const modelTypes = [
  {
    icon: BarChart3,
    title: "Regression Models",
    text: "For forecasting numbers such as sales, revenue, demand, cost, and usage.",
  },
  {
    icon: GitBranch,
    title: "Classification Models",
    text: "For predicting categories, status, risk level, labels, and outcomes.",
  },
  {
    icon: Network,
    title: "Neural Networks",
    text: "For more complex pattern recognition across text, image, sequence, and structured data.",
  },
  {
    icon: Activity,
    title: "Time-Series Models",
    text: "For trend forecasting, historical patterns, seasonality, and future demand.",
  },
];

const dataReadiness = [
  "Structured datasets",
  "Clean historical records",
  "Clear business objective",
  "Defined target outcome",
  "Enough training examples",
  "Consistent data format",
  "Secure data access",
  "Model evaluation plan",
];

function MachineLearningPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] font-['Poppins',sans-serif] text-[#06111f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#030712] px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8 lg:pb-32">
        <div className="absolute inset-0">
          <div className="absolute left-[-180px] top-16 h-[520px] w-[520px] rounded-full bg-[#267A9E]/25 blur-3xl" />
          <div className="absolute right-[-180px] top-20 h-[540px] w-[540px] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute bottom-[-250px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-700/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(126,211,255,0.14),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,7,18,0.98),rgba(6,17,31,0.94),rgba(38,122,158,0.28))]" />
        </div>

        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              <Sparkles size={16} className="text-cyan-300" />
              Machine Learning Solutions
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Turn your data into predictions, intelligence, and automation.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              We build machine learning systems that help businesses forecast
              outcomes, detect patterns, classify data, recommend actions, and
              make smarter decisions from real operational data.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(38,122,158,0.38)] transition hover:-translate-y-1 hover:bg-[#034663]"
              >
                Build ML System
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/service/ai-solutions"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                View AI Solutions
              </Link>
            </div>
          </div>

          <MachineLearningVisual />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              ML Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              Practical machine learning features for real business problems.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Machine learning becomes powerful when it is connected to your
              data, systems, and decisions. We build models that solve clear
              operational problems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06111f] text-cyan-300 transition group-hover:bg-[#267A9E] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#06111f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="relative overflow-hidden bg-[#06111f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[#267A9E]/20 blur-3xl" />
          <div className="absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Use Cases
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              Build systems that learn from your business data.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              From forecasting sales to detecting unusual activity, machine
              learning helps your business move from guessing to data-informed
              decision-making.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <CheckCircle
                  size={20}
                  className="shrink-0 text-cyan-300 transition group-hover:scale-110"
                />
                <span className="font-medium text-white/86">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL TYPES */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Model Types
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              The right model depends on the problem you want to solve.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We do not force every project into the same AI approach. We study
              the data and the business objective, then choose the model type
              that best fits the use case.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {modelTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] bg-[#f8fafc] p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon size={28} className="text-[#267A9E]" />
                  <h3 className="mt-5 text-lg font-semibold text-[#06111f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ML PIPELINE */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-[#06111f] p-6 text-white shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/45">ML Pipeline</p>
                <h3 className="mt-1 text-2xl font-bold">
                  Data to Prediction
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-300">
                <Workflow size={24} />
              </div>
            </div>

            <div className="space-y-0">
              {[
                {
                  icon: Database,
                  title: "Data Collection",
                  text: "Gather structured data, documents, logs, records, and historical activity.",
                },
                {
                  icon: Settings2,
                  title: "Feature Engineering",
                  text: "Transform raw data into meaningful variables the model can learn from.",
                },
                {
                  icon: BrainCircuit,
                  title: "Model Training",
                  text: "Train, tune, test, and validate the best machine learning approach.",
                },
                {
                  icon: Gauge,
                  title: "Evaluation",
                  text: "Measure accuracy, error rate, recall, precision, and real-world usefulness.",
                },
                {
                  icon: Cloud,
                  title: "Deployment",
                  text: "Integrate the model into apps, dashboards, APIs, and business workflows.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                          <Icon size={21} />
                        </div>

                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-white/55">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>

                    {index !== 4 && (
                      <div className="ml-10 h-5 w-px bg-cyan-300/30" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Development Pipeline
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              A complete workflow from raw data to useful predictions.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Machine learning is more than training a model. The real value
              comes from preparing the data properly, evaluating the model
              carefully, and integrating the prediction output into your actual
              business process.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: LockKeyhole, title: "Secure data handling" },
                { icon: Activity, title: "Performance monitoring" },
                { icon: Server, title: "API-based deployment" },
                { icon: Layers3, title: "Scalable architecture" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <Icon size={24} className="text-[#267A9E]" />
                    <p className="mt-3 font-semibold text-[#06111f]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DATA READINESS */}
      <section className="relative overflow-hidden bg-[#030712] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(126,211,255,0.16),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Data Readiness
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              The better the data, the better the model.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/65">
              Before building a model, we check whether your data is ready. If
              it is not, we help clean, organize, structure, and prepare it for
              reliable machine learning.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dataReadiness.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5"
              >
                <CheckCircle size={20} className="shrink-0 text-cyan-300" />
                <span className="font-medium text-white/86">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#267A9E]">
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#06111f] sm:text-5xl">
              From business question to deployed ML system.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#06111f] text-sm font-bold text-white">
                  {item.step}
                </div>

                <h3 className="text-xl font-semibold text-[#06111f]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                {index !== process.length - 1 && (
                  <div className="absolute right-[-18px] top-12 hidden h-px w-9 bg-slate-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-[#06111f] text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <Rocket size={16} className="text-cyan-300" />
                Ready to learn from your data?
              </div>

              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                Let’s build a machine learning solution for your business.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Whether you want forecasting, classification, recommendations,
                anomaly detection, or data-driven automation, we can help you
                design and deploy a reliable ML system.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#267A9E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#034663]"
              >
                Start ML Project
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative min-h-[340px] bg-[#07182d] p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,211,255,0.2),transparent_36%)]" />

              <div className="relative z-10 space-y-5">
                {[
                  "Data readiness review",
                  "Model selection and training",
                  "Prediction API integration",
                  "Monitoring and improvement",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                  >
                    <CheckCircle size={20} className="text-cyan-300" />
                    <span className="text-white/82">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MachineLearningVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-10 right-8 h-52 w-52 rounded-full bg-blue-600/25 blur-3xl" />

      <div className="relative rounded-[2.4rem] border border-white/15 bg-white/[0.08] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[1.8rem] bg-[#06111f]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-medium text-cyan-200">
              Model Training
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[210px_1fr]">
            <aside className="border-b border-white/10 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <BrainCircuit size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">ML Engine</p>
                  <p className="text-xs text-white/45">Prediction layer</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Database, label: "Dataset" },
                  { icon: Cpu, label: "Training" },
                  { icon: Gauge, label: "Accuracy" },
                  { icon: Cloud, label: "Deploy" },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${
                        index === 1
                          ? "bg-cyan-300/10 text-cyan-200"
                          : "bg-white/[0.04] text-white/55"
                      }`}
                    >
                      <Icon size={17} />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </aside>

            <div className="p-5">
              <div className="mb-5 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Accuracy", value: "96%" },
                  { label: "Samples", value: "48k" },
                  { label: "Error", value: "0.04" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-xs text-white/45">{item.label}</p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Prediction Output
                    </p>
                    <p className="text-xs text-white/45">
                      Business forecast preview
                    </p>
                  </div>

                  <LineChart size={22} className="text-cyan-300" />
                </div>

                <div className="flex h-40 items-end gap-3">
                  {[45, 62, 52, 74, 68, 88, 81, 94].map((height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 items-end rounded-full bg-white/[0.06]"
                    >
                      <div
                        className="w-full rounded-full bg-gradient-to-t from-[#267A9E] to-cyan-300"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-3 flex items-center justify-between text-xs text-white/50">
                  <span>Training progress</span>
                  <span>87%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[87%] rounded-full bg-cyan-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -right-5 top-16 hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100 backdrop-blur lg:block">
        Predictive Intelligence
      </div>

      <div className="absolute -left-5 bottom-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur lg:block">
        Model Accuracy 96%
      </div>
    </div>
  );
}

export default MachineLearningPage;