import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Faq } from "@/components/site/Faq";
import { Reveal } from "@/components/site/Reveal";
import heroPortrait from "@/assets/hero-portrait.jpg";
import projectAutomotive from "@/assets/project-automotive.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectOutdoor from "@/assets/project-outdoor.jpg";
import projectTravel from "@/assets/project-travel.jpg";

const title = "Alson Chong — Expert Photographer & Visual Storyteller";
const description =
  "Alson Chong is an expert commercial and editorial photographer crafting cinematic campaigns, portraits and films for brands worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const clients = ["AURORA", "NORTHTRAIL", "PACIFIC AIR", "STANDARD", "KOMA", "VELOCE"];

const projects = [
  {
    client: "Aurelia Motors",
    title: "Night Runner",
    tags: "Automotive · Campaign",
    year: "2026",
    image: projectAutomotive,
  },
  {
    client: "Standard Journal",
    title: "After Hours",
    tags: "Fashion · Editorial",
    year: "2025",
    image: projectFashion,
  },
  {
    client: "Northtrail",
    title: "Above The Cloudline",
    tags: "Outdoor · Film & Stills",
    year: "2025",
    image: projectOutdoor,
  },
  {
    client: "Pacific Air",
    title: "Departures",
    tags: "Travel · Brand",
    year: "2024",
    image: projectTravel,
  },
];

const services = [
  { name: "Commercial campaigns", detail: "Concept to final grade for brand launches." },
  { name: "Editorial & portraits", detail: "Character-led frames for magazines and founders." },
  { name: "Automotive", detail: "Rolling, static and studio light-painting." },
  { name: "Travel & documentary", detail: "Long-form visual stories on location." },
  { name: "Creative direction", detail: "Moodboards, casting, locations, shot lists." },
  { name: "Post-production", detail: "Retouching, colour grading, motion cutdowns." },
];

const tools = [
  "Lightroom",
  "Capture One",
  "Photoshop",
  "DaVinci Resolve",
  "Premiere Pro",
  "After Effects",
  "Profoto",
];

const journal = [
  {
    date: "Aug 2026",
    title: "Why I light cars at 3am",
    excerpt: "Empty streets, wet asphalt and one moving light source.",
  },
  {
    date: "Jun 2026",
    title: "The one-lens brief",
    excerpt: "Shooting a whole campaign on a 35mm, and what that gave back.",
  },
  {
    date: "Mar 2026",
    title: "Reading a face before you shoot it",
    excerpt: "Notes on direction, silence and the first ten frames.",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium shadow-pill">
              <span className="animate-soft-pulse h-2 w-2 rounded-full bg-available" />
              Available for inquiries
            </span>
            <h1
              className="animate-fade-up mt-7 text-[clamp(2.75rem,8vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
              style={{ animationDelay: "120ms" }}
            >
              <span className="text-muted-foreground">I Tell Stories,</span>
              <br />
              with visual passions 
            </h1>
            <p
              className="animate-fade-up mt-8 text-sm font-semibold uppercase tracking-wide"
              style={{ animationDelay: "220ms" }}
            >
              DOCUMENT YOUR STORY WITH ME ✨
            </p>
            <div
              className="animate-fade-up mt-5 space-y-4 text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "300ms" }}
            >
              <p>
                hello, I'm <strong className="font-semibold text-foreground">Alson Chong</strong> —
                an expert photographer and director.
              </p>
              <p>I shoot campaigns, reel contents and films for events from <strong className="font-semibold text-foreground">Clubs & Societies</strong> to <strong className="font-semibold text-foreground">Student Teams</strong>.</p>
            </div>
            <a
              href="#contact"
              className="animate-fade-up mt-9 inline-flex items-center gap-3 rounded-full bg-primary py-3 pr-6 pl-3 text-sm font-medium text-primary-foreground shadow-pill transition-transform duration-300 hover:scale-[1.04]"
              style={{ animationDelay: "380ms" }}
            >
              <img
                src={heroPortrait}
                alt=""
                width={1280}
                height={1600}
                className="h-7 w-7 rounded-full object-cover"
              />
              Send me a message
            </a>
          </div>

          {/* Stacked tilted photos */}
          <div className="relative mx-auto h-[340px] w-full max-w-md md:h-[420px]">
            {[
              { src: projectOutdoor, rot: "-8deg", x: "-14%", y: "-6%", z: "z-10" },
              { src: projectTravel, rot: "7deg", x: "14%", y: "2%", z: "z-20" },
              { src: projectFashion, rot: "-2deg", x: "0%", y: "10%", z: "z-30" },
            ].map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt="Selected photography by Alson Chong"
                loading="lazy"
                width={1280}
                height={960}
                className={`absolute top-1/2 left-1/2 ${p.z} h-[62%] w-[76%] rounded-2xl object-cover shadow-card transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-40 hover:rotate-0 hover:scale-[1.06]`}
                style={{
                  transform: `translate(calc(-50% + ${p.x}), calc(-50% + ${p.y})) rotate(${p.rot})`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-border bg-card/60 py-8">
        <div className="mx-auto flex max-w-6xl items-center gap-8 overflow-hidden px-6">
          <span className="shrink-0 text-lg font-medium">
            Trusted by <strong className="font-bold">many</strong>
          </span>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="animate-marquee flex w-max gap-14">
              {[0, 1].map((r) => (
                <div key={r} className="flex gap-14">
                  {clients.map((c) => (
                    <span
                      key={c + r}
                      className="text-xl font-bold tracking-[0.18em] text-muted-foreground/70"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Latest projects
          </h2>
          <p className="mt-3 text-base text-muted-foreground">Selected work, 2024 — 2026.</p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group rounded-3xl border border-border bg-card p-3 transition-all duration-500 hover:shadow-card">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={p.image}
                    alt={`${p.client} — ${p.title}`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-[260px] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] md:h-[320px]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-3 py-5">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{p.client}</p>
                    <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em]">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.tags}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{p.year}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services & tools */}
      <section id="services" className="border-y border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Services & tools
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 transition-transform duration-500 hover:-translate-y-1">
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <img
              src={heroPortrait}
              alt="Alson Chong in the studio"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full rounded-3xl object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              Fifteen years chasing light, one frame at a time.
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I work across commercial, editorial and documentary photography. I started with a
                borrowed film camera and a stubborn habit of waiting for the right moment — that
                hasn't changed.
              </p>
              <p>
                Quiet on set, deliberate in post. Every project is built around one clear idea, then
                lit, framed and graded until nothing unnecessary is left.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["15+", "Years shooting"],
                ["240+", "Projects delivered"],
                ["30+", "Countries"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-3xl font-semibold tracking-[-0.03em]">{n}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="border-y border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">Journal</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {journal.map((j, i) => (
              <Reveal key={j.title} delay={i * 90}>
                <article className="h-full rounded-2xl border border-border bg-background p-6 transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-sm text-muted-foreground">{j.date}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Frequently asked
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <Faq />
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                  Let's make something worth looking at twice.
                </h2>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                  Tell me the dates, the location and the idea. Every serious enquiry gets a reply
                  within 48 hours.
                </p>
              </div>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks — your message has been noted. Alson will be in touch.");
                }}
              >
                <input
                  required
                  placeholder="Your name"
                  className="w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-foreground"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-foreground"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="About the project"
                  className="w-full rounded-2xl border border-input bg-background px-5 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-foreground"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
                >
                  Send enquiry
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span className="font-semibold text-foreground">Alson Chong</span>
          <div className="flex gap-6">
            <a href="#work" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              YouTube
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              Behance
            </a>
          </div>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}
