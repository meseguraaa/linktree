import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { links, socials } from "@/data/linktree";
import { LinkCard } from "@/components/ui/link-card";
import { Footer } from "@/components/footer";
import { SiGithub, SiYoutube, SiLinkedin } from "react-icons/si"; // sólidos
import { Instagram } from "lucide-react"; // contorno

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
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-zinc-800"
      style={{ backgroundImage: "url('/bg-desktop-light.jpg')" }}
    >
      {/* Avatar + Username */}
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
      </div>

      {/* Links */}
      <ul className="mt-10 w-full max-w-xl space-y-4">
        {links.map((item) => (
          <li key={item.label}>
            <LinkCard href={item.href} variant="glass" size="md">
              {item.label}
            </LinkCard>
          </li>
        ))}
      </ul>

      {/* Sociais */}
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
              className="
              flex items-center justify-center
              w-12 h-12   /* 🔹 círculo maior */
              rounded-full
              transition-all duration-300 ease-out
              hover:bg-zinc-200 hover:scale-110   /* 🔹 hover maior e mais suave */
            "
            >
              <Icon className="w-6 h-6 text-black" />
            </Link>
          );
        })}
      </div>

      <Footer />
    </section>
  );
}
