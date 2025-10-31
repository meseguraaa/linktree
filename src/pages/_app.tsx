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
    images: [
      "https://images.prismic.io/linktree/aQPDr7pReVYa32qp_IMG_3332.JPG?auto=format,compress",
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
