import { Link, createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Faq } from "@/components/site/Faq";
import { HoverFooter } from "@/components/site/HoverFooter";
import { Reveal } from "@/components/site/Reveal";
import heroPortrait from "@/assets/DSC_8290.jpg";
import { projects } from "@/data/projects";

const title = "Alson Chong — Photographer, Filmmaker & Visual Storyteller";
const description =
  "Photography, videography and publicity work by Alson Chong, made with student teams and university societies.";

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

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="mx-auto max-w-6xl px-6 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium shadow-pill">
              <span className="animate-soft-pulse h-2 w-2 rounded-full bg-available" />
              Available for creative collaborations
            </span>
            <h1
              className="animate-fade-up mt-7 text-[clamp(2.75rem,8vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
              style={{ animationDelay: "120ms" }}
            >
              <span className="text-muted-foreground">Modern</span>
              <br />
              polymath.
            </h1>
            <p
              className="animate-fade-up mt-8 text-sm font-semibold uppercase tracking-wide"
              style={{ animationDelay: "220ms" }}
            >
              You narrate, I create visually 🧙‍♂️
            </p>
            <div
              className="animate-fade-up mt-5 space-y-4 text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "300ms" }}
            >
              <p>
                Hi, I&apos;m <strong className="font-semibold text-foreground">Alson Chong</strong>{" "}
                — a cinematic mixed-media creative based in Melbourne, Australia.
              </p>
              <p>
                Specialised in creating, marketing & documenting event stories from{" "}
                <strong className="font-semibold text-foreground">clubs & societies</strong> to{" "}
                <strong className="font-semibold text-foreground">Student teams</strong>.
              </p>
            </div>
            <a
              href="#work"
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
              Explore selected work
            </a>
          </div>
          <div className="relative mx-auto h-[340px] w-full max-w-md md:h-[420px]">
            {projects.map((project, index) => {
              const positions = [
                { rot: "-8deg", x: "-14%", y: "-6%", z: "z-10" },
                { rot: "7deg", x: "14%", y: "2%", z: "z-20" },
                { rot: "-2deg", x: "0%", y: "10%", z: "z-30" },
              ];
              const position = positions[index]!;
              return (
                <img
                  key={project.slug}
                  src={project.thumbnail}
                  alt={`${project.title} selected work`}
                  loading={index === 0 ? "eager" : "lazy"}
                  width={1280}
                  height={960}
                  className={`absolute top-1/2 left-1/2 ${position.z} h-[62%] w-[76%] rounded-2xl object-cover shadow-card transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-40 hover:rotate-0 hover:scale-[1.06]`}
                  style={{
                    transform: `translate(calc(-50% + ${position.x}), calc(-50% + ${position.y})) rotate(${position.rot})`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            My creative journey in Publicity and Media coordination
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            From high-school film competitions and videography roles, through student council
            marketing & storytelling, to car launch campaigns for Monash Motorsport.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 90}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="group block rounded-3xl border border-border bg-card p-3 transition-all duration-500 hover:shadow-card"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} project thumbnail`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className={`w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] ${index === 0 ? "h-[300px] md:h-[420px]" : "h-[260px] md:h-[320px]"}`}
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-3 py-5">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {project.number} — {project.year}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-[-0.02em]">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                    View
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="about" className="border-y border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <img
                src={heroPortrait}
                alt="Alson Chong"
                loading="lazy"
                width={1280}
                height={1600}
                className="w-full rounded-3xl object-cover shadow-card"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Creative journey
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
                Learning to make moments last.
              </h2>
              <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  My work began with documenting school events and making films with friends. MUFY
                  Student Council taught me how content can bring a community together; Monash
                  Motorsport continues to challenge me to make technical work feel human.
                </p>
                <p>
                  Across every chapter, I&apos;m drawn to the people, momentum and quiet details
                  that make a story worth returning to.
                </p>
              </div>
              <ol className="mt-10 space-y-3 border-t border-border pt-7 text-sm text-muted-foreground">
                {projects
                  .slice()
                  .reverse()
                  .map((project) => (
                    <li key={project.slug} className="flex justify-between gap-4">
                      <span className="font-medium text-foreground">{project.title}</span>
                      <span>{project.year}</span>
                    </li>
                  ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>
      <section id="faq" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-5xl">
              Your questions
              <br />
              answered.
            </h2>
          </Reveal>
          <div>
            <Reveal delay={100}>
              <Faq />
            </Reveal>
            <Reveal delay={180}>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-3 text-sm font-medium transition-colors hover:text-muted-foreground"
              >
                <span>
                  Still have a question?
                  <br />
                  Let&apos;s talk.
                </span>
                <span aria-hidden="true" className="text-lg">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                  Let&apos;s make something worth looking at twice.
                </h2>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                  Tell me the date, location and idea. I&apos;d love to hear what your team or
                  community is building.
                </p>
              </div>
              <form
                className="space-y-3"
                onSubmit={(event) => {
                  event.preventDefault();
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
      <HoverFooter />
    </div>
  );
}
