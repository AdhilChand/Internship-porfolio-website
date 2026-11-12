import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${profile.name}` },
      {
        name: "description",
        content: `Get in touch with ${profile.name} for internships, collaborations or a friendly hello.`,
      },
      { property: "og:title", content: `Contact — ${profile.name}` },
      { property: "og:description", content: `Reach out to ${profile.name} by email or socials.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="grain mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="eyebrow animate-rise">Contact</p>
      <h1 className="mt-4 max-w-4xl animate-rise font-display text-6xl leading-[0.95] sm:text-8xl">
        Have an idea? <em className="text-ember">Let's talk.</em>
      </h1>
      <p className="mt-8 max-w-lg text-lg text-muted-foreground">
        Open to internships, student collaborations and creative side projects. I usually reply within a
        couple of days.
      </p>
      <div className="mt-10">
        <Button variant="ember" size="xl" asChild>
          <a href={`mailto:${profile.email}`}>
            <Mail /> {profile.email}
          </a>
        </Button>
      </div>

      <div className="mt-24 grid gap-4 sm:grid-cols-3">
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <span className="font-display text-3xl">{s.label}</span>
            <ArrowUpRight className="text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
          </a>
        ))}
      </div>
    </div>
  );
}
