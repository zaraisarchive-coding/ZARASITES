import type { Metadata } from "next";
import { Fraunces, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import CursorGlow from "@/components/ui/CursorGlow";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fathimah Az Zahra — Junior Web Developer & UI/UX Designer",
  description:
    "Portofolio Fathimah Az Zahra, Junior Web Developer & UI/UX Designer yang berfokus pada pengembangan web modern dan desain antarmuka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${fraunces.variable} ${inter.variable} ${poppins.variable}`}
      >
        <ScrollProgressBar />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
