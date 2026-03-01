import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { headers } from 'next/headers';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nobel | Secure Wealth Management",
  description: "Fixed Income Solutions & Capital Protection for Australian investors.",
};

import { GlobalUIRenderer } from "@/components/layout/GlobalUIRenderer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col`}
      >
        <GlobalUIRenderer>
          {children}
        </GlobalUIRenderer>
      </body>
    </html>
  );
}
