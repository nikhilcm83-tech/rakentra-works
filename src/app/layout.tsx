import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rakentra Works | Premium Construction & Engineering Finland",
    template: "%s | Rakentra Works",
  },
  description: "Finland's premier construction company specializing in state-of-the-art commercial hubs, high-end residential builds, heavy industrial complexes, and civil infrastructure. Building Finland's future with quality, safety, and innovation since 2008.",
  keywords: ["Rakentra Works", "Construction Finland", "Rakennusliike", "Industrial Construction Finland", "Commercial Construction Helsinki", "Residential Builders Finland", "Premium Architecture", "Civil Engineering Finland"],
  authors: [{ name: "Rakentra Works" }],
  openGraph: {
    title: "Rakentra Works | Premium Construction & Engineering",
    description: "Building Finland's Future. State-of-the-art commercial, industrial, residential, and infrastructure projects across Finland.",
    type: "website",
    locale: "en_FI",
    siteName: "Rakentra Works",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-navy-deep text-slate-100 font-inter pt-[80px]">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
