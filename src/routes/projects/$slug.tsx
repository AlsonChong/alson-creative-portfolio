import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { getNextProject, getProjectBySlug, type ProjectMedia } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectCaseStudy,
});

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
          <div className="animate-fade-up mt-12" style={{ animationDelay: "320ms" }}>
            <MediaFrame
              media={project.heroMedia}
              priority
              className="aspect-[4/3] md:aspect-[16/9]"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            {project.media.map((media, index) => (
              <Reveal
                key={`${media.title}-${index}`}
                delay={index === 0 ? 0 : 80}
                className={mediaLayout[media.aspect]}
              >
                <MediaFrame media={media} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-card/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.4fr] md:py-20">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Project information
              </p>
              <p className="mt-4 max-w-lg text-xl font-medium leading-snug tracking-[-0.02em] md:text-2xl">
                {project.description}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {project.role.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </div>
                <dl className="grid gap-5 text-sm">
                  {project.metadata.map((item) => (
                    <div key={item.label}>
                      <dt className="text-muted-foreground">{item.label}</dt>
                      <dd className="mt-1 font-medium">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="mt-10 text-sm text-muted-foreground">
                Credits: {project.credits.join(" · ")}
              </p>
            </Reveal>
          </div>
        </section>

        {nextProject && (
          <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
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
                    alt={`${nextProject.title} project thumbnail`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-[280px] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] md:h-[480px]"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                    {nextProject.title}
                  </h2>
                  <span className="text-xl text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          </section>
        )}
      </main>
    </div>
  );
}

const mediaLayout: Record<ProjectMedia["aspect"], string> = {
  full: "col-span-full",
  landscape: "col-span-full md:mx-auto md:w-11/12",
  portrait: "md:col-span-1 md:mx-auto md:w-3/4",
  square: "md:col-span-1",
  half: "md:col-span-1",
};

function MediaFrame({
  media,
  priority = false,
  className = "",
}: {
  media: ProjectMedia;
  priority?: boolean;
  className?: string;
}) {
  const aspectClass = mediaAspect[media.aspect];

  return (
    <figure className={className}>
      <div className={`overflow-hidden rounded-3xl bg-muted ${aspectClass}`}>
        {media.type === "video" ? (
          <video
            controls
            muted
            playsInline
            preload="metadata"
            poster={media.poster}
            className="h-full w-full object-cover"
          >
            <source src={media.src} />
            Your browser does not support HTML video.
          </video>
        ) : (
          <img
            src={media.src}
            alt={media.description ?? media.title ?? "Project media"}
            loading={priority ? "eager" : "lazy"}
            width={1280}
            height={960}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {(media.title || media.description) && (
        <figcaption className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {media.title && <span className="font-medium text-foreground">{media.title}</span>}
          {media.description && <span>{media.description}</span>}
        </figcaption>
      )}
    </figure>
  );
}

const mediaAspect: Record<ProjectMedia["aspect"], string> = {
  full: "aspect-[4/3] md:aspect-[16/10]",
  landscape: "aspect-[4/3] md:aspect-[16/9]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  half: "aspect-[4/3]",
};
