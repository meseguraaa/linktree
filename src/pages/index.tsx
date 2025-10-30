import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { links, socials } from "@/data/linktree";
import { LinkCard } from "@/components/ui/link-card";
import { Footer } from "@/components/footer";
import { SiGithub, SiYoutube, SiLinkedin } from "react-icons/si";
import { Instagram } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

const SocialIcon: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  github: SiGithub,
  youtube: SiYoutube,
  linkedin: SiLinkedin,
  instagram: Instagram,
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/bg-desktop-light.jpg')] dark:bg-[url('/bg-desktop-dark.jpg')] transition-[background-image] duration-300"
      />
      <div aria-hidden className="bg-overlay absolute inset-0" />
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-zinc-800 dark:text-zinc-100 px-4">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 border-2 border-border/60">
            <AvatarImage
              src="/avatar.png"
              alt="Avatar"
              className="object-cover"
            />
            <AvatarFallback>BL</AvatarFallback>
          </Avatar>
          <span className="mt-4 font-medium">@brunoleal</span>
          <div className="mt-3">
            <ThemeToggle />
          </div>
        </div>
        <ul className="mt-10 w-full max-w-xl space-y-4">
          {links.map((item) => (
            <li key={item.label}>
              <LinkCard
                href={item.href}
                variant="glass"
                size="md"
                className="text-zinc-900 dark:text-zinc-100"
              >
                {item.label}
              </LinkCard>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-center gap-6">
          {socials.map((s) => {
            const Icon = SocialIcon[s.icon];
            if (!Icon) return null;
            return (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-out hover:scale-110 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <Icon className="w-6 h-6 text-black dark:text-white" />
              </Link>
            );
          })}
        </div>
        <Footer />
      </section>
    </main>
  );
}
