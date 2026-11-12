import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.name}` },
      {
        name: "description",
        content: `Who ${profile.name} is: a student, maker and lifelong learner. Skills, interests and journey so far.`,
      },
      { property: "og:title", content: `About — ${profile.name}` },
      { property: "og:description", content: `The story, skills and interests of ${profile.name}.` },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

const skills = [
  { group: "Build", items: ["HTML & CSS", "JavaScript", "React", "Python", "Arduino"] },
  { group: "Design", items: ["Video editing (DaVinci Resolve)", "Figma", "UI design", "Photography", "Poster design"] },
  { group: "People", items: ["Teamwork", "Event organising", "Public speaking"] },
];

const timeline = [
  { year: "2026", title: "Building Pulse", text: "Designing and shipping my first full mobile app." },
  { year: "2025", title: "Tech fest finalist", text: "Built Rover One with a team of three for the college fest." },
  { year: "2024", title: "Started college", text: "Began my degree and fell in love with making things." },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <section className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div className="animate-rise">
          <p className="eyebrow">About me</p>
          <h1 className="mt-4 font-display text-6xl leading-none sm:text-7xl">
            Learning <em className="text-ember">out loud.</em>
          </h1>
        </div>
        <div className="animate-rise space-y-5 text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "120ms" }}>
          <p>
            I'm <span className="text-foreground">{profile.name}</span>, a student from {profile.location}.
            I like taking ideas from a sketchbook page all the way to something people can touch, tap or use.
          </p>
          <p>
            Right now I'm exploring app design, small electronics and visual storytelling — and looking for
            internships, collaborations and fun side projects.
          </p>
        </div>
      </section>

      <section className="mt-24 grid gap-6 md:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="rounded-lg border border-border bg-card p-7">
            <p className="font-display text-3xl text-primary">{s.group}</p>
            <ul className="mt-5 space-y-2 text-muted-foreground">
              {s.items.map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-24">
        <h2 className="font-display text-5xl">So far</h2>
        <ol className="mt-10 divide-y divide-border border-y border-border">
          {timeline.map((t) => (
            <li key={t.year} className="grid gap-2 py-7 sm:grid-cols-[120px_1fr_2fr] sm:items-baseline">
              <span className="eyebrow text-primary">{t.year}</span>
              <span className="font-display text-2xl">{t.title}</span>
              <span className="text-muted-foreground">{t.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-20">
        <Button variant="ember" size="xl" asChild>
          <Link to="/contact">
            Get in touch <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
