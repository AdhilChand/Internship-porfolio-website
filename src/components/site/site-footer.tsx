import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-3xl">Let's make something.</p>
          <a href={`mailto:${profile.email}`} className="mt-1 inline-block text-primary hover:underline">
            {profile.email}
          </a>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex gap-5 text-sm text-muted-foreground">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-foreground">
                {s.label}
              </a>
            ))}
          </div>
          <p className="eyebrow">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
