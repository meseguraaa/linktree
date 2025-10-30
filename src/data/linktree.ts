export type LinkItem = { label: string; href: string };
export type SocialItem = { label: string; href: string; icon: "github" | "instagram" | "linkedin" };

export const links: LinkItem[] = [
  { label: "Site institucional", href: "#" },
  { label: "Plataforma", href: "#" },
  { label: "Graduação", href: "#" },
  { label: "Pós-graduação", href: "#" },
];

export const socials: SocialItem[] = [
  { label: "GitHub", href: "https://github.com/meseguraaa", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/brunoleal", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/brunoleal.h", icon: "instagram" },
];
