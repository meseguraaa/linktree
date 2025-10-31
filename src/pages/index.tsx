import { GetStaticProps } from "next";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkCard } from "@/components/ui/link-card";
import { Footer } from "@/components/footer";
import { SiGithub, SiYoutube, SiLinkedin } from "react-icons/si";
import { Instagram } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { createClient } from "@/lib/prismic";
import Head from "next/head";

const SocialIcon: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  github: SiGithub,
  linkedin: SiLinkedin,
  instagram: Instagram,
};

type Props = { settings: any; links: any[] };

function getUrl(field: any): string | null {
  if (!field) return null;
  if (typeof field === "string") return field || null;
  if (Array.isArray(field)) {
    const f = field[0];
    return typeof f === "string" ? f || null : getUrl(f);
  }
  if (typeof field === "object") {
    if (typeof field.url === "string") return field.url;
    if (typeof field.text === "string") return field.text; // seu caso
    if (typeof field.href === "string") return field.href;
  }
  return null;
}

export default function Home({ settings, links }: Props) {
  const avatarUrl =
    getUrl(settings?.data?.avatar) ||
    settings?.data?.avatar?.url ||
    "/avatar.png";

  const socials = [
    { icon: "github", href: getUrl(settings?.data?.github), label: "GitHub" },
    {
      icon: "instagram",
      href: getUrl(settings?.data?.instagram),
      label: "Instagram",
    },
    {
      icon: "linkedin",
      href: getUrl(settings?.data?.linkedin),
      label: "LinkedIn",
    },
  ].filter((s) => !!s.href) as { icon: string; href: string; label: string }[];

  const linkItems = Array.isArray(links) ? links : [];

  return (
    <>
      <Head>
        <title>Bruno Leal | Links</title>
        <meta
          name="description"
          content="Todos os meus links e redes sociais em um só lugar."
        />
      </Head>

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
                src={avatarUrl}
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
            {linkItems.map((item: any) => (
              <li key={item.id}>
                <LinkCard
                  href={
                    getUrl(item?.data?.href) || item?.data?.href?.url || "#"
                  }
                  variant="glass"
                  size="md"
                  target="_blank"
                  className="text-zinc-900 dark:text-zinc-100"
                >
                  {item?.data?.label || "Sem rótulo"}
                </LinkCard>
              </li>
            ))}
            {process.env.NODE_ENV === "development" &&
              linkItems.length === 0 && (
                <li className="text-center text-sm text-zinc-500">
                  Nenhum Link Item retornado. Verifique no Prismic se há itens
                  publicados.
                </li>
              )}
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
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();
  const [settings, links] = await Promise.all([
    client.getSingle("settings", { lang: "*" }).catch(() => null),
    client
      .getAllByType("link_item", {
        orderings: [{ field: "my.link_item.order", direction: "asc" }],
        lang: "*",
      })
      .catch(() => []),
  ]);

  return { props: { settings, links }, revalidate: 60 };
};
