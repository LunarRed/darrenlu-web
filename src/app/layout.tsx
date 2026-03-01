import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darren Lu — Founding CTO & Principal Full Stack Engineer",
  description:
    "25+ years architecting scalable platforms, leading engineering teams, and shipping high-impact products. Available for fractional CTO, founding CTO, and senior full stack engineering engagements.",
  keywords: [
    "CTO",
    "Fractional CTO",
    "Founding CTO",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "AI Engineer",
    "AR Engineer",
    "Systems Architect",
    "Newport Beach",
  ],
  authors: [{ name: "Darren Lu" }],
  openGraph: {
    title: "Darren Lu — Founding CTO & Principal Full Stack Engineer",
    description:
      "25+ years architecting scalable platforms and leading engineering teams. Expert in React, Cloud DevOps, and AI/AR Technologies.",
    url: "https://darren.lu",
    siteName: "Darren Lu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
