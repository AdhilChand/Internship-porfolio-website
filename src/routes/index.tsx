import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-desk.jpg";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/project-card";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Student Portfolio` },
      {
        name: "description",
        content: `Selected projects, experiments and ideas by ${profile.name}, a student who loves to build.`,
      },
      { property: "og:title", content: `${profile.name} — Student Portfolio` },
      {
        property: "og:description",
        content: `Selected projects, experiments and ideas by ${profile.name}.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="grain overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-14 md:grid-cols-[1.2fr_1fr] md:pt-20">
          <div className="animate-rise">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              {profile.role}
            </p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
              Hi, I'm Adhil —
              <br />
              <em className="text-ember">I build things</em>
              <br />
              I'm curious about.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              A student based in {profile.location}, learning by making — apps, gadgets, visuals and
              everything in between.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="ember" size="xl" asChild>
                <a href="#work">
                  See my work <ArrowDown />
                </a>
              </Button>
              <Button variant="line" size="xl" asChild>
                <Link to="/contact">
                  Say hello <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-rise" style={{ animationDelay: "150ms" }}>
            <div className="absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={heroImage}
              alt="A desk lit by a warm lamp at night"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full rounded-lg border border-border object-cover shadow-ember"
            />
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
        <div className="mb-14 flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-5xl sm:text-6xl">
            Selected <em className="text-primary">work</em>
          </h2>
          <p className="eyebrow">{String(projects.length).padStart(2, "0")} projects</p>
        </div>
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.title} className={i % 2 === 1 ? "md:mt-24" : undefined}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
