import { ScrollReveal } from "@/components/scroll-reveal";

const services = [
  {
    title: "Fractional & Founding CTO",
    description:
      "I've been the first engineer and the CTO who built the team. From defining technical vision to managing 24-person engineering orgs — I've done it from Day One, repeatedly.",
    tags: ["Technical Strategy", "Team Building", "Fundraising Support"],
  },
  {
    title: "Senior Full Stack Engineering",
    description:
      "React, TypeScript, Node.js, Three.js — I write production code, not just architecture diagrams. Hands-on engineering with 25+ years of shipping real products.",
    tags: ["React", "TypeScript", "Node.js", "API Design"],
  },
  {
    title: "AI & AR Engineering",
    description:
      "Computer vision, multimodal LLMs, augmented reality — I've shipped all of it to millions of users. From TensorFlow models to agentic AI chatbots built with Google.",
    tags: ["Computer Vision", "LLMs", "MediaPipe", "Three.js"],
  },
  {
    title: "Cloud Architecture & DevOps",
    description:
      "Multi-cloud architectures on AWS, GCP, and Azure handling millions of transactions. From hosted data centers to scalable serverless — I've managed every migration.",
    tags: ["AWS", "GCP", "Azure", "Docker", "CI/CD"],
  },
];

const timeline = [
  {
    period: "2008 — Present",
    role: "Founding CTO",
    company: "FaceCake Marketing Technologies",
    description:
      "Built a real-time augmented reality shopping platform from scratch as sole programmer. Grew and managed 24-person engineering, QA, DevOps, and technical support team. Architected AI/ML pipeline handling 1M+ virtual products and millions of try-ons monthly.",
    partners: ["Microsoft", "Disney", "CHANEL", "Macy\u2019s", "NFL", "Visa"],
    featured: true,
  },
  {
    period: "2002 — 2007",
    role: "Sr. Vice President of Technology",
    company: "Go Apply Inc.",
    description:
      "Created frontend and backend for Internet lead generation startup from Day One inception through rapid growth and successful acquisition by Fidelity National Title. Built and managed 17-person development team.",
    featured: false,
  },
  {
    period: "1999 — 2001",
    role: "Founding Partner",
    company: "Acropolis One Consultants",
    description:
      "Founded consulting firm handling high-end client engagements. Acted as Startup CTO for FaceCake \u2014 created company\u2019s core web application in 100 days with team of in-house programmers and IBM Global Services.",
    featured: false,
  },
  {
    period: "1996 — 1999",
    role: "Systems Architect & Network Engineer",
    company: "Consumer Resource Services \u00b7 Autobytel.com",
    description:
      "Built custom web-based systems and managed enterprise networking infrastructure from the ground up during the early commercial Internet.",
    featured: false,
  },
];

const skillGroups = [
  {
    category: "Full-Stack Development",
    skills: [
      "JavaScript & TypeScript",
      "React 18 & Next.js",
      "Node.js",
      "Three.js & PixiJS",
      "API Design & Implementation",
      "SQL/T-SQL & MSSQL",
      "Firebase & MongoDB",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Computer Vision & Classification",
      "Multimodal LLMs",
      "Agentic AI Systems",
      "MediaPipe & TensorFlow",
      "WASM Runtime Optimization",
    ],
  },
  {
    category: "Augmented Reality",
    skills: [
      "JS/WASM AR Frameworks",
      "2D & 3D Virtual Try-On",
      "Real-time Body Tracking",
      "Browser-based AR at Scale",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, RDS, CloudFront, Lambda)",
      "Google Cloud Platform",
      "Microsoft Azure",
      "Docker & Kubernetes",
      "CI/CD & Multi-cloud Ops",
    ],
  },
  {
    category: "Leadership & Strategy",
    skills: [
      "Engineering Team Management",
      "Technical Vision & Roadmapping",
      "Startup Founding & Scaling",
      "Fundraising & Investor Relations",
      "Project Management",
    ],
  },
  {
    category: "Enterprise",
    skills: [
      "Partner Technical Relations",
      "Enterprise Integration",
      "Patent Co-authorship",
      "Technical Writing",
      "UI/UX Design & Optimization",
    ],
  },
];

const stats = [
  { number: "25+", label: "Years" },
  { number: "1M+", label: "Products Scaled" },
  { number: "24", label: "Engineers Led" },
  { number: "6+", label: "Enterprise Partners" },
  { number: "1", label: "US Patent" },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md bg-black/60 border-b border-white/[0.04]">
        <a
          href="#"
          className="font-mono text-[13px] text-secondary tracking-wide hover:text-foreground transition-colors"
        >
          darren.lu
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#services"
            className="hidden sm:block font-mono text-[13px] text-muted hover:text-foreground transition-colors accent-line"
          >
            Services
          </a>
          <a
            href="#track-record"
            className="hidden sm:block font-mono text-[13px] text-muted hover:text-foreground transition-colors accent-line"
          >
            Track Record
          </a>
          <a
            href="https://www.linkedin.com/in/DarrenLu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[13px] text-muted hover:text-accent transition-colors accent-line"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@darren.lu"
            className="font-mono text-[13px] text-accent hover:text-foreground transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center dot-grid overflow-hidden">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2.5 mb-10 anim-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-accent status-dot" />
            <span className="font-mono text-[13px] text-accent/80 tracking-[0.2em] uppercase">
              Available for Contract &amp; Fractional Roles
            </span>
          </div>

          <h1
            className="font-display text-[clamp(3.5rem,10vw,9rem)] font-extrabold tracking-[-0.03em] leading-[0.9] mb-8 anim-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            DARREN
            <br />
            LU
          </h1>

          <p
            className="text-[clamp(1.15rem,2.5vw,1.75rem)] text-secondary leading-relaxed mb-5 max-w-2xl mx-auto anim-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            I architect the technology
            <br className="hidden sm:block" /> that scales your vision.
          </p>

          <p
            className="font-mono text-[13px] text-muted tracking-[0.15em] mb-14 anim-fade-in"
            style={{ animationDelay: "0.75s" }}
          >
            Founding CTO&ensp;&middot;&ensp;Fractional
            CTO&ensp;&middot;&ensp;Principal Full Stack Engineer
          </p>

          <div className="anim-fade-up" style={{ animationDelay: "0.95s" }}>
            <a
              href="mailto:contact@darren.lu"
              className="group inline-flex items-center gap-3 px-9 py-4 border border-accent/60 text-accent font-mono text-[13px] tracking-[0.15em] uppercase hover:bg-accent hover:text-black hover:border-accent transition-all duration-300"
            >
              Start a Conversation
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-muted/40 to-muted" />
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 80}
              className="text-center md:text-left"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-accent tracking-tight">
                {stat.number}
              </div>
              <div className="font-mono text-[11px] text-muted tracking-[0.15em] uppercase mt-1">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[13px] text-accent tracking-[0.2em] uppercase mb-4">
              Services
            </p>
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold tracking-tight leading-[1.1] mb-20 max-w-xl">
              What I Bring
              <br />
              to the Table
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <ScrollReveal
                key={service.title}
                delay={i * 100}
                className="group border border-border p-8 md:p-11 hover:border-accent/25 transition-all duration-500 bg-card/40"
              >
                <div className="font-mono text-[12px] text-muted/60 tracking-wider mb-5">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-secondary text-[15px] leading-relaxed mb-7">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-muted border border-border/80 px-3 py-1 tracking-wide"
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

      {/* Track Record */}
      <section
        id="track-record"
        className="py-24 md:py-36 px-6 md:px-12 bg-surface"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[13px] text-accent tracking-[0.2em] uppercase mb-4">
              Track Record
            </p>
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold tracking-tight leading-[1.1] mb-20 max-w-lg">
              Proven at
              <br />
              Every Stage
            </h2>
          </ScrollReveal>

          <div className="space-y-14">
            {timeline.map((item) => (
              <ScrollReveal
                key={item.period}
                className={`border-l-2 ${item.featured ? "border-accent" : "border-border"} pl-8 md:pl-12`}
              >
                <div
                  className={`font-mono text-[13px] ${item.featured ? "text-accent" : "text-muted"} mb-2 tracking-wide`}
                >
                  {item.period}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-1">
                  {item.role}
                </h3>
                <div className="text-secondary text-base mb-4">
                  {item.company}
                </div>
                <p className="text-secondary/80 text-[15px] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
                {item.partners && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                    {item.partners.map((partner) => (
                      <span
                        key={partner}
                        className="font-mono text-[12px] text-muted/70 tracking-wider"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>

          {/* Patent callout */}
          <ScrollReveal className="mt-20 p-8 md:p-11 border border-border bg-card/50">
            <div className="flex items-start gap-4">
              <div className="font-mono text-accent text-2xl leading-none mt-0.5 hidden sm:block">
                &sect;
              </div>
              <div>
                <div className="font-mono text-[13px] text-accent mb-2 tracking-wide">
                  U.S. Patent 7,337,127
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold mb-2">
                  Targeted Marketing System and Method
                </h3>
                <p className="text-secondary text-[15px]">
                  Co-authored foundational patent covering Virtual Try-On on
                  user&apos;s own image in marketing applications.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technical Expertise */}
      <section id="expertise" className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-[13px] text-accent tracking-[0.2em] uppercase mb-4">
              Expertise
            </p>
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold tracking-tight leading-[1.1] mb-20 max-w-md">
              Technical
              <br />
              Depth
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {skillGroups.map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 70}>
                <h3 className="font-mono text-[12px] text-accent tracking-[0.2em] uppercase mb-5">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-secondary text-[14px] flex items-start gap-2.5"
                    >
                      <span className="text-border text-[8px] mt-[7px] shrink-0">
                        &#9670;
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 px-6 md:px-12 dot-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight leading-[1.05] mb-7">
              Let&apos;s Build
              <br />
              Something Great
            </h2>
            <p className="text-secondary text-lg md:text-xl leading-relaxed mb-14 max-w-xl mx-auto">
              Available for fractional CTO, founding CTO, and senior full stack
              engineering engagements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="mailto:contact@darren.lu"
                className="group inline-flex items-center gap-3 px-9 py-4 bg-accent text-black font-mono text-[13px] tracking-[0.12em] font-bold hover:bg-foreground transition-colors duration-300"
              >
                CONTACT@DARREN.LU
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/DarrenLu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-9 py-4 border border-border text-secondary font-mono text-[13px] tracking-[0.12em] hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              >
                LINKEDIN
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  &#8599;
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[12px] text-muted/60">
            &copy; 2026 Darren Lu &middot; Newport Beach, California
          </div>
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/DarrenLu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] text-muted/60 hover:text-foreground transition-colors accent-line"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@darren.lu"
              className="font-mono text-[12px] text-muted/60 hover:text-foreground transition-colors accent-line"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
