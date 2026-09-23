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
        <section className="mx-auto max-w-6xl px-6 pt-36 pb-20 md:pt-44 md:pb-28">
          <Link
            to="/"
            hash="work"
            className="animate-fade-up text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Selected work
          </Link>
          <div className="mt-12 border-t border-border pt-7 md:grid md:grid-cols-[0.72fr_1.28fr] md:gap-12">
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Work {project.number}
            </p>
            <div>
              <h1
                className="animate-fade-up text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
                style={{ animationDelay: "80ms" }}
              >
                {project.title}
              </h1>
              <div
                className="animate-fade-up mt-8 grid gap-8 border-t border-border pt-6 sm:grid-cols-[minmax(8rem,0.48fr)_1fr]"
                style={{ animationDelay: "150ms" }}
              >
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Year
                </p>
                <p className="text-base font-medium">{project.year}</p>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Description
                </p>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Scope of work
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-24 px-6 pb-24 md:space-y-32 md:pb-32">
          {project.sections.map((section) => (
            <section key={section.number} className="border-t border-border pt-7 md:pt-9">
              <Reveal>
                <div className="mb-10 flex items-baseline gap-4 md:mb-12">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {section.number}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                    {section.title}
                  </h2>
                </div>
              </Reveal>
              <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
                {section.media.map((media, index) => (
                  <Reveal
                    key={`${media.title}-${index}`}
                    delay={Math.min(index * 70, 210)}
                    className={mediaLayout[media.aspect]}
                  >
                    <MediaFrame media={media} />
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        {nextProject && (
          <section className="border-t border-border bg-card/60">
            <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
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
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

const mediaLayout: Record<ProjectMedia["aspect"], string> = {
  full: "col-span-full",
  landscape: "col-span-full md:mx-auto md:w-11/12",
  portrait: "md:mx-auto md:w-3/4",
  square: "",
  half: "",
};

function MediaFrame({ media }: { media: ProjectMedia }) {
  const aspectClass = mediaAspect[media.aspect];
  const embedUrl =
    media.type === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${media.src}?rel=0&modestbranding=1`
      : media.type === "vimeo"
        ? `https://player.vimeo.com/video/${media.src}?title=0&byline=0&portrait=0`
        : null;

  return (
    <figure>
      <div className={`overflow-hidden rounded-3xl bg-muted ${aspectClass}`}>
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={media.title}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : (
          <img
            src={media.src}
            alt={media.title}
            loading="lazy"
            width={1280}
            height={960}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <figcaption className="mt-3 text-sm font-medium text-muted-foreground">
        {media.title}
      </figcaption>
    </figure>
  );
}

const mediaAspect: Record<ProjectMedia["aspect"], string> = {
  full: "aspect-[4/3] md:aspect-video",
  landscape: "aspect-[4/3] md:aspect-[16/9]",
  portrait: "aspect-[9/16]",
  square: "aspect-square",
  half: "aspect-[4/3]",
};
