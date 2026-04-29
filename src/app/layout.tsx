import "./styles/globals.scss";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { AppProvider } from "./context/AppContext";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matheusfinatto-portfolio.vercel.app"),
  title: "Matheus Finatto — Fullstack Developer",
  description:
    "Fullstack developer with 5+ years building production web applications. React, TypeScript, NestJS, PostgreSQL.",
  keywords: [
    "React developer",
    "Fullstack developer",
    "TypeScript",
    "NestJS",
    "GraphQL",
    "PostgreSQL",
    "Matheus Finatto",
  ],
  authors: [{ name: "Matheus Finatto" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://matheusfinatto-portfolio.vercel.app",
    title: "Matheus Finatto — Fullstack Developer",
    description:
      "More than 5 years building production frontend apps, now architecting systems end-to-end.",
    siteName: "Matheus Finatto",
    images: [{ url: "/photo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Finatto — Fullstack Developer",
    description: "5 years frontend, now building end-to-end.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <AppProvider>{children}</AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
