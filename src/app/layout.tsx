import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Darren Lu — Founding CTO & Full Stack Engineer",
  description:
    "25+ years architecting scalable platforms, leading engineering teams, and shipping high-impact products. Available for fractional CTO, founding CTO, and senior engineering roles.",
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
    title: "Darren Lu — Founding CTO & Full Stack Engineer",
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
        className={`${dmSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
