import { ScrollReveal } from "@/components/scroll-reveal";

const services = [
  {
    emoji: "🧭",
    title: "Fractional & Founding CTO",
    description:
      "From sole programmer to 24-person engineering org. I define technical vision, build teams, and align engineering with business goals.",
    tags: ["Technical Strategy", "Team Building", "Fundraising"],
  },
  {
    emoji: "⚡",
    title: "Full Stack Engineering",
    description:
      "React, TypeScript, Node.js, Three.js — I ship production code, not just architecture decks. 25+ years of hands-on building.",
    tags: ["React", "TypeScript", "Node.js", "APIs"],
  },
  {
    emoji: "🔮",
    title: "AI & AR Engineering",
    description:
      "Computer vision, multimodal LLMs, augmented reality — shipped to millions. From TensorFlow to agentic AI chatbots with Google.",
    tags: ["Computer Vision", "LLMs", "MediaPipe", "Three.js"],
  },
  {
    emoji: "☁️",
    title: "Cloud & DevOps",
    description:
      "Multi-cloud on AWS, GCP, Azure handling millions of transactions. Managed every migration from data centers to serverless.",
    tags: ["AWS", "GCP", "Azure", "Docker"],
  },
];

const timeline = [
  {
    period: "2008 — Present",
    role: "Founding CTO",
    company: "FaceCake Marketing Technologies",
    highlight:
      "Built a real-time AR shopping platform from scratch. Grew to 24-person team. 1M+ virtual products. Partners include Microsoft, Disney, CHANEL, Macy\u2019s, NFL, and Visa.",
    featured: true,
  },
  {
    period: "2002 — 2007",
    role: "SVP of Technology",
    company: "Go Apply Inc.",
    highlight:
      "Created the platform from Day One through rapid growth and acquisition by Fidelity National Title. Built 17-person dev team.",
    featured: false,
  },
  {
    period: "1999 — 2001",
    role: "Founding Partner",
    company: "Acropolis One Consultants",
    highlight:
      "Founded consulting firm. Acted as Startup CTO for FaceCake \u2014 built their core application in 100 days.",
    featured: false,
  },
  {
    period: "1996 — 1999",
    role: "Systems Architect",
    company: "Consumer Resource Services \u00b7 Autobytel.com",
    highlight:
      "Built web systems and enterprise networking infrastructure during the early commercial Internet.",
    featured: false,
  },
];

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React 18",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Three.js",
      "PixiJS",
      "HTML/CSS",
    ],
  },
  {
    name: "AI & AR",
    skills: [
      "Computer Vision",
      "Multimodal LLMs",
      "Agentic AI",
      "MediaPipe",
      "TensorFlow",
      "WASM AR",
      "Virtual Try-On",
    ],
  },
  {
    name: "Backend & Data",
    skills: [
      "Node.js",
      "API Design",
      "SQL/T-SQL",
      "MSSQL",
      "Firebase",
      "MongoDB",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    name: "Leadership",
    skills: [
      "Team Building",
      "Technical Vision",
      "Startup Scaling",
      "Fundraising",
      "Project Management",
    ],
  },
];

const stats = [
  { number: "25+", label: "years of experience" },
  { number: "1M+", label: "products scaled" },
  { number: "24", label: "engineers led" },
  { number: "6+", label: "enterprise partners" },
];

const partners = ["Microsoft", "Disney", "CHANEL", "Macy\u2019s", "NFL", "Visa"];

export default function Home() {
  return (
    <>
      {/* ─── Navigation ──────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-lg bg-white/80 border-b border-border-light">
        <a
          href="#"
          className="font-display text-lg font-bold text-teal-dark tracking-tight"
        >
          darren.lu
        </a>
        <div className="flex items-center gap-7">
          <a
            href="#services"
            className="hidden sm:block text-[14px] text-secondary hover:text-foreground transition-colors accent-line"
          >
            Services
          </a>
          <a
            href="#experience"
            className="hidden sm:block text-[14px] text-secondary hover:text-foreground transition-colors accent-line"
          >
            Experience
          </a>
          <a
            href="https://www.linkedin.com/in/DarrenLu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-[14px] text-secondary hover:text-teal transition-colors accent-line"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@darren.lu"
            className="pill bg-teal text-white text-[13px] font-medium hover:bg-teal-dark transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* ─── Hero ────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Decorative shapes */}
        <div
          className="hero-blob-1 -top-32 -right-40 md:right-10"
          aria-hidden="true"
        />
        <div
          className="hero-blob-2 bottom-20 -left-40 md:left-10"
          aria-hidden="true"
        />
        <div
          className="hero-ring top-40 right-20 hidden lg:block"
          aria-hidden="true"
        />
        <div
          className="hero-ring bottom-40 left-1/4 hidden lg:block"
          style={{ width: 180, height: 180 }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">
            <div
              className="anim-fade-in mb-7"
              style={{ animationDelay: "0.15s" }}
            >
              <span className="pill bg-teal-50 text-teal border border-teal-light">
                <span className="inline-block w-2 h-2 rounded-full bg-teal animate-pulse" />
                Available for new engagements
              </span>
            </div>

            <h1
              className="font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold tracking-tight leading-[1.08] mb-6 anim-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              I build the tech
              <br />
              that{" "}
              <span className="gradient-text">scales your vision</span>
            </h1>

            <p
              className="text-secondary text-[clamp(1.05rem,2vw,1.3rem)] leading-relaxed max-w-xl mb-10 anim-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              Founding CTO with 25+ years of architecting platforms, building
              engineering teams, and shipping products used by millions.
              Based in Newport Beach, CA.
            </p>

            <div
              className="flex flex-wrap gap-4 anim-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              <a
                href="mailto:contact@darren.lu"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal text-white font-medium text-[15px] hover:bg-teal-dark transition-all duration-300 shadow-lg shadow-teal/20 hover:shadow-xl hover:shadow-teal/25"
              >
                Start a Conversation
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/DarrenLu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-secondary font-medium text-[15px] hover:border-teal hover:text-teal transition-all duration-300"
              >
                View LinkedIn
                <span className="text-sm">&#8599;</span>
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div
            className="mt-20 pt-10 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 anim-fade-up"
            style={{ animationDelay: "0.85s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-teal tracking-tight">
                  {stat.number}
                </div>
                <div className="text-muted text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partner Strip ───────────────────────────── */}
      <section className="py-10 border-y border-border-light bg-surface-warm">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <span className="text-muted text-sm">Trusted by</span>
            {partners.map((partner) => (
              <span
                key={partner}
                className="font-display text-[15px] font-semibold text-secondary/70 tracking-tight"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ────────────────────────────────── */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="pill bg-teal-50 text-teal border border-teal-light text-[13px] mb-5 inline-flex">
              What I Do
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-tight">
              Everything you need to go
              <br />
              from idea to launch
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <ScrollReveal
                key={service.title}
                delay={i * 80}
                className="card-lift rounded-2xl border border-border bg-card p-8 md:p-9"
              >
                <div className="text-3xl mb-5">{service.emoji}</div>
                <h3 className="font-display text-xl font-bold mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-secondary text-[15px] leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] text-teal bg-teal-50 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience ──────────────────────────────── */}
      <section
        id="experience"
        className="py-24 md:py-32 px-6 md:px-12 bg-surface"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="pill bg-white text-teal border border-teal-light text-[13px] mb-5 inline-flex">
              Track Record
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-tight">
              Proven at every stage
            </h2>
          </ScrollReveal>

          <div className="space-y-5 max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <ScrollReveal
                key={item.period}
                delay={i * 80}
                className={`rounded-2xl border bg-card p-7 md:p-9 ${
                  item.featured
                    ? "border-teal/30 shadow-md shadow-teal/5"
                    : "border-border"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight">
                      {item.role}
                    </h3>
                    <div className="text-secondary text-[15px]">
                      {item.company}
                    </div>
                  </div>
                  <div
                    className={`text-[13px] font-medium shrink-0 ${item.featured ? "text-teal" : "text-muted"}`}
                  >
                    {item.period}
                  </div>
                </div>
                <p className="text-secondary text-[15px] leading-relaxed">
                  {item.highlight}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Patent */}
          <ScrollReveal className="mt-8 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-teal/20 bg-gradient-to-r from-teal-50 to-white p-7 md:p-9 flex items-start gap-4">
              <div className="text-3xl shrink-0">📜</div>
              <div>
                <div className="text-teal text-[13px] font-semibold mb-1">
                  U.S. Patent 7,337,127
                </div>
                <h3 className="font-display font-bold tracking-tight mb-1">
                  Targeted Marketing System and Method
                </h3>
                <p className="text-secondary text-[14px]">
                  Co-authored foundational patent covering Virtual Try-On on
                  user&apos;s own image in marketing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Skills ──────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="pill bg-teal-50 text-teal border border-teal-light text-[13px] mb-5 inline-flex">
              Expertise
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-tight">
              Deep technical breadth
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillCategories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 60}>
                <h3 className="font-display text-base font-bold text-foreground mb-4 tracking-tight">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[13px] text-secondary bg-surface-warm border border-border px-3 py-1.5 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto teal-gradient-bg rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative dots */}
            <div
              className="absolute inset-0 dots-pattern opacity-20 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight leading-tight mb-5">
                Let&apos;s build something
                <br />
                great together
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                Available for fractional CTO, founding CTO, and senior full
                stack engineering engagements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@darren.lu"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-teal-dark font-bold text-[15px] hover:bg-teal-50 transition-all duration-300 shadow-lg"
                >
                  contact@darren.lu
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/DarrenLu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium text-[15px] hover:bg-white/10 transition-all duration-300"
                >
                  LinkedIn
                  <span className="text-sm">&#8599;</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── Footer ──────────────────────────────────── */}
      <footer className="border-t border-border py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">
            &copy; 2026 Darren Lu &middot; Newport Beach, California
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/DarrenLu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-teal transition-colors accent-line"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@darren.lu"
              className="text-sm text-muted hover:text-teal transition-colors accent-line"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
