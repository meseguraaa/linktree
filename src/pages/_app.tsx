import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bruno Leal | Links",
  description: "Meu linktree pessoal com todos os meus links e redes sociais.",
  openGraph: {
    title: "Bruno Leal | Links",
    description: "Acesse todos os meus links e redes sociais em um só lugar.",
    url: "https://linktree-pearl-omega.vercel.app",
    images: [
      {
        url: "https://linktree-pearl-omega.vercel.app/linktreen_brunoleal.png",
        alt: "Preview do Linktree de Bruno Leal",
      },
    ],
  },
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
