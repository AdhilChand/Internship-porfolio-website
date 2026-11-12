import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group animate-rise"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative overflow-hidden rounded-lg border border-border bg-card">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={1200}
          height={912}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:text-primary">
          <ArrowUpRight />
        </span>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-3xl leading-tight transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <span className="eyebrow shrink-0">{project.year}</span>
      </div>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
