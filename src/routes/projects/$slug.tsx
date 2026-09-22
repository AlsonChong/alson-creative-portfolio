import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { getNextProject, getProjectBySlug, type ProjectMedia } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({ component: ProjectCaseStudy });

function ProjectCaseStudy() {
  const { slug } = Route.useParams();
  const project = getProjectBySlug(slug);
  if (!project) throw notFound();
  const nextProject = getNextProject(project.slug);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-36 pb-16 md:pt-44 md:pb-24">
          <Link
            to="/"
            hash="work"
            className="animate-fade-up text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Selected work
          </Link>
          <div className="mt-10 grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p
                className="animate-fade-up text-sm font-semibold uppercase tracking-wide text-muted-foreground"
                style={{ animationDelay: "80ms" }}
              >
                {project.number} — {project.year}
              </p>
              <h1
                className="animate-fade-up mt-3 text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]"
                style={{ animationDelay: "150ms" }}
              >
                {project.title}
              </h1>
            </div>
            <p
              className="animate-fade-up max-w-xs text-sm leading-relaxed text-muted-foreground"
              style={{ animationDelay: "240ms" }}
            >
              {project.category}
            </p>
          </div>
          <img
            src={project.heroMedia}
            alt={`${project.title} hero image`}
            width={1280}
            height={960}
            className="animate-fade-up mt-12 h-[320px] w-full rounded-3xl object-cover shadow-card md:h-[580px]"
            style={{ animationDelay: "320ms" }}
          />
        </section>
        <section className="border-y border-border bg-card/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Overview
              </p>
              <p className="mt-4 text-2xl font-medium leading-snug tracking-[-0.02em] md:text-3xl">
                {project.description}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-muted-foreground">{project.overview}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.role.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Individual work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Campaigns and stories.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-16 md:space-y-24">
            {project.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 90}>
                <article className="grid gap-8 border-t border-border pt-8 md:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm text-muted-foreground">0{index + 1}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                      {section.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {section.description}
                    </p>
                    <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                      {section.deliverables.map((deliverable) => (
                        <li key={deliverable}>— {deliverable}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={`grid gap-4 ${section.media.length > 1 ? "sm:grid-cols-2" : ""}`}>
                    {section.media.map((media) => (
                      <MediaCard key={media.title} media={media} />
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="border-y border-border bg-card/60">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Images and videos
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                Selected frames.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {project.gallery.map((media, index) => (
                <Reveal key={media.title} delay={index * 90}>
                  <MediaCard media={media} large />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <dl className="grid gap-8 border-y border-border py-8 md:grid-cols-3">
              {project.metadata.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm text-muted-foreground">{item.label}</dt>
                  <dd className="mt-2 text-lg font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-muted-foreground">
              Credits: {project.credits.join(" · ")}
            </p>
          </Reveal>
        </section>
        {nextProject && (
          <section className="border-t border-border bg-card/60">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Next project
                </p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: nextProject.slug }}
                  className="group mt-5 block"
                >
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={nextProject.thumbnail}
                      alt=""
                      width={1280}
                      height={960}
                      className="h-[280px] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05] md:h-[420px]"
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                      {nextProject.title}
                    </h2>
                    <span className="text-sm text-muted-foreground">{nextProject.number} →</span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function MediaCard({ media, large = false }: { media: ProjectMedia; large?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative overflow-hidden">
        <img
          src={media.image}
          alt={media.title}
          loading="lazy"
          width={1280}
          height={960}
          className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05] ${large ? "h-[300px] md:h-[360px]" : "h-[260px]"}`}
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
          {media.type}
          {media.duration ? ` · ${media.duration}` : ""}
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-semibold">{media.title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{media.description}</p>
      </div>
    </article>
  );
}
