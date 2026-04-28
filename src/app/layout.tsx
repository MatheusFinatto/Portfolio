import "./styles/globals.scss";
import "./styles/button.scss";
import "./styles/section.scss";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://matheusfinatto.vercel.app"),
  title: "Matheus Finatto — React + Node Developer",
  description:
    "Full-stack developer with 5+ years of production experience in React, TypeScript, Node.js, NestJS, and GraphQL. Currently building ERP tooling at Wonder Sistemas.",
  keywords: [
    "React developer",
    "Node.js developer",
    "TypeScript",
    "NestJS",
    "GraphQL",
    "full-stack developer",
    "frontend developer",
    "Matheus Finatto",
  ],
  authors: [{ name: "Matheus Finatto" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://matheusfinatto.vercel.app",
    title: "Matheus Finatto — React + Node Developer",
    description:
      "Full-stack developer with 5+ years of production experience in React, TypeScript, Node.js, NestJS, and GraphQL.",
    siteName: "Matheus Finatto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Finatto — React + Node Developer",
    description:
      "Full-stack developer with 5+ years of production experience in React, TypeScript, Node.js, NestJS, and GraphQL.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
