import { ScrollReveal } from "@/components/scroll-reveal";

/* ─── Data ───────────────────────────────────────────── */

const services = [
  {
    title: "Fractional CTO",
    description:
      "Strategic technical leadership for growing companies. I embed with your team to set architecture, hire engineers, and establish the processes that let you ship with confidence.",
  },
  {
    title: "Technical Architecture",
    description:
      "From zero to millions of users. I design systems that perform under pressure and evolve with your business — databases, APIs, infrastructure, the full picture.",
  },
  {
    title: "Full-Stack Engineering",
    description:
      "React, Node, cloud infrastructure — I build the entire stack, not just the surface layer. End-to-end ownership, zero handoff gaps.",
  },
  {
    title: "AI & AR Innovation",
    description:
      "Two US patents in augmented reality and computer vision. I bring emerging tech from proof-of-concept to production-grade product.",
  },
];

const skillsRow1 = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Python",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "TensorFlow",
];

const skillsRow2 = [
  "Technical Leadership",
  "System Architecture",
  "AR / VR",
  "Computer Vision",
  "CI/CD Pipelines",
  "Microservices",
  "WebGL",
  "Team Building",
  "DevOps",
  "Agile",
];

/* ─── Page ───────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── Navigation ─────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-6">
          <a href="#" className="font-display text-[1.75rem] leading-none tracking-tight">
            Darren Lu
          </a>
          <div className="flex items-center gap-8 text-sm">
            <a
              href="#services"
              className="hidden md:block text-secondary hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#record"
              className="hidden md:block text-secondary hover:text-foreground transition-colors"
            >
              Record
            </a>
            <a
              href="mailto:contact@darren.lu"
              className="text-teal hover:text-teal-dark transition-colors font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-start md:justify-center px-6 md:px-12 pt-24 md:pt-28 pb-16 relative">
        <div className="max-w-7xl mx-auto w-full">
          {/* Availability */}
          <div
            className="flex items-center gap-3 mb-10 anim-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal" />
            </span>
            <span className="text-sm text-secondary font-mono tracking-wide">
              Available for new engagements
            </span>
          </div>

          {/* Headline */}
          <h1 className="relative max-w-5xl">
            <span
              className="block text-[clamp(3.5rem,6.5vw,6rem)] leading-[1.08] md:leading-[1] font-display tracking-normal md:tracking-tight anim-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              I build the
            </span>
            <span
              className="block text-[clamp(3.5rem,6.5vw,6rem)] leading-[1.08] md:leading-[1] font-display tracking-normal md:tracking-tight anim-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <em className="text-teal">technical foundations</em>
            </span>
            <span
              className="block text-[clamp(3.5rem,6.5vw,6rem)] leading-[1.08] md:leading-[1] font-display tracking-normal md:tracking-tight anim-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              that turn ideas into
            </span>
            <span
              className="block text-[clamp(3.5rem,6.5vw,6rem)] leading-[1.08] md:leading-[1] font-display tracking-normal md:tracking-tight anim-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              products at scale.
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="mt-10 text-lg md:text-xl text-secondary max-w-2xl leading-relaxed anim-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            Founding CTO &amp; Full Stack Engineer with 25 years of shipping
            products that matter — from startup MVPs to platforms serving
            millions.
          </p>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-x-12 gap-y-4 mt-14 anim-fade-up"
            style={{ animationDelay: "0.9s" }}
          >
            {[
              ["29+", "Years building"],
              ["8+", "Startups founded"],
              ["3", "Successful exits"],
            ].map(([num, label]) => (
              <div key={label}>
                <span className="text-3xl md:text-4xl font-display text-teal">
                  {num}
                </span>
                <span className="block text-xs text-muted mt-1 font-mono tracking-wide uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-in"
          style={{ animationDelay: "1.3s" }}
        >
          <span className="text-[10px] text-muted tracking-[0.25em] uppercase font-mono">
            Scroll
          </span>
          <span className="w-px h-8 bg-border" />
        </div>
      </section>

      {/* ── Statement ──────────────────────────────── */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-mono text-teal tracking-[0.2em] uppercase mb-4">
              Who I Am
            </p>
            <blockquote className="text-2xl md:text-[2.75rem] font-display leading-snug max-w-4xl">
              I don&apos;t just write code — I build the technical strategy,
              hire the team, and{" "}
              <em className="text-teal">ship the product.</em>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services ───────────────────────────────── */}
      <section id="services" className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-mono text-teal tracking-[0.2em] uppercase mb-4">
              What I Do
            </p>
          </ScrollReveal>

          <div className="border-t border-border">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="service-row border-b border-border py-8 md:py-10 pl-4 md:pl-6 pr-4 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start cursor-default">
                  <span className="md:col-span-1 text-sm font-mono text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="md:col-span-4 text-xl md:text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="md:col-span-7 text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Track Record ───────────────────────────── */}
      <section id="record" className="px-6 md:px-12 py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-mono text-teal tracking-[0.2em] uppercase mb-4">
              Track Record
            </p>
            <h2 className="text-3xl md:text-5xl font-display mb-16 max-w-4xl leading-tight">
              From founding builds to enterprise-scale platforms, I&apos;ve led
              engineering with measurable outcomes.
            </h2>
          </ScrollReveal>

          {/* FaceCake highlight */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start mb-16">
              <span className="text-[5rem] md:text-[7rem] leading-none font-display text-teal/20 shrink-0 select-none">
                100MM+ Users
              </span>
              <div className="pt-2 md:pt-4">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                  Founding CTO, FaceCake Marketing Technologies
                </h3>
                <p className="text-secondary leading-relaxed max-w-2xl">
                  Since November 2008, I&apos;ve led engineering for FaceCake&apos;s
                  augmented reality commerce platform, scaling the stack to
                  support 1M+ virtual products and millions of try-ons monthly,
                  while leading technical partnerships with Microsoft, Disney,
                  CHANEL, Macy&apos;s, NFL, and Visa.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* GoApply highlight */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start mb-16">
              <span className="text-[5rem] md:text-[7rem] leading-none font-display text-teal/20 shrink-0 select-none">
                $50MM+ Exit
              </span>
              <div className="pt-2 md:pt-4">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                  SVP of Technology, GoApply Inc.
                </h3>
                <p className="text-secondary leading-relaxed max-w-2xl">
                  From March 2002 to June 2007, I built GoApply&apos;s frontend and
                  backend from day one, architected core database and web
                  systems, and grew a 17-person development and network
                  engineering team through rapid growth to acquisition by
                  Fidelity National Title.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Autobytel highlight */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start mb-16">
              <span className="text-[5rem] md:text-[7rem] leading-none font-display text-teal/20 shrink-0 select-none">
                Series A &rarr; IPO
              </span>
              <div className="pt-2 md:pt-4">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                  Sr. Engineer, Autobytel.com
                </h3>
                <p className="text-secondary leading-relaxed max-w-2xl">
                  Managed all technical operations for 150-node LAN/WAN,
                  administering routing, firewall, server, and messaging
                  infrastructure across Cisco, FreeBSD, Windows NT, and Exchange
                  environments.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <ScrollReveal delay={100}>
              <div className="border-l-2 border-teal pl-6 py-1">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2">
                  Built Engineering Organizations
                </h3>
                <p className="text-secondary leading-relaxed">
                  Built and managed multiple 25+ person engineering, QA, DevOps, and
                  technical support departments with modern delivery practices
                  and end-to-end ownership from architecture through operations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border-l-2 border-border pl-6 py-1">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2">
                  U.S. Patent 7,337,127
                </h3>
                <p className="text-secondary leading-relaxed">
                  Co-authored the foundational Targeted Marketing System and
                  Method patent, covering virtual try-on using the user&apos;s own
                  image in digital marketing workflows.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Skills Marquee ─────────────────────────── */}
      <section className="py-14 overflow-hidden border-y border-border select-none">
        <div className="marquee-container mb-6">
          <div className="marquee-track">
            {[...skillsRow1, ...skillsRow1].map((skill, i) => (
              <span
                key={`a-${i}`}
                className="marquee-item text-base md:text-lg font-medium whitespace-nowrap px-5 md:px-7"
              >
                {skill}
                <span className="text-teal/30 ml-5 md:ml-7 select-none">
                  /
                </span>
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee-track marquee-reverse">
            {[...skillsRow2, ...skillsRow2].map((skill, i) => (
              <span
                key={`b-${i}`}
                className="marquee-item text-base md:text-lg text-secondary whitespace-nowrap px-5 md:px-7"
              >
                {skill}
                <span className="text-teal/30 ml-5 md:ml-7 select-none">
                  /
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-24 md:w-32 h-px bg-teal mx-auto mb-14" />
            <h2 className="text-3xl md:text-[3.5rem] lg:text-6xl font-display mb-8 max-w-3xl mx-auto leading-tight">
              Ready to build something{" "}
              <em className="text-teal">remarkable?</em>
            </h2>
            <p className="text-lg text-secondary mb-12 max-w-xl mx-auto leading-relaxed">
              I&apos;m currently available for fractional CTO, founding CTO, and
              senior engineering engagements.
            </p>
            <div className="flex flex-col items-center gap-8">
              <a
                href="mailto:contact@darren.lu"
                className="group inline-flex items-center gap-3 text-teal hover:text-teal-dark transition-colors"
              >
                <span className="font-mono text-lg md:text-xl tracking-tight">
                  contact@darren.lu
                </span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-xl">
                  &rarr;
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/DarrenLu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-secondary transition-colors font-mono tracking-wide"
              >
                linkedin.com/in/DarrenLu
              </a>
            </div>
            <div className="w-24 md:w-32 h-px bg-teal mx-auto mt-16" />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <footer className="px-6 md:px-12 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span>&copy; {new Date().getFullYear()} Darren Lu</span>
          <span>Newport Beach, California</span>
        </div>
      </footer>
    </>
  );
}
