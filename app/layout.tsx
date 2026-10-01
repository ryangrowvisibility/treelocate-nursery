import type { Metadata } from "next";
import { Source_Serif_4, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serifDisplay = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bodyGrotesk = Hanken_Grotesk({
  variable: "--font-body-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const microMono = JetBrains_Mono({
  variable: "--font-micro-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Treelocate Nursery — Milton Ontario mature trees, cedar privacy walls, large-caliper planting",
  description:
    "Mehdi and crew have delivered mature trees across the GTA for over a decade. Large-caliper installs, cedar and spruce privacy walls, nursery supply from Milton. On time, placed exactly where you asked, site left clean.",
  openGraph: {
    title: "Treelocate Nursery — Mature trees and privacy walls, placed right",
    description:
      "Milton, Ontario nursery and planting crew. Over 10 years. 64 Google reviews averaging 4.8 stars. Large-caliper trees, cedar fences, long-distance delivery.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serifDisplay.variable} ${bodyGrotesk.variable} ${microMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  );
}
