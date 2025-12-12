import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookiesBanner from "@/components/CookiesBanner";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

/* ===== METADATA ===== */
export const metadata: Metadata = {
  title: "Гермес-Сервис — автосервис в Санкт-Петербурге",
  description:
    "Гермес-Сервис — ремонт, покраска, шиномонтаж, детейлинг и обслуживание авто в Санкт-Петербурге.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={roboto.variable} suppressHydrationWarning>
      <head>
        {/* Тема — загружается ДО React */}
        <Script src="/theme.js" strategy="beforeInteractive" />
      </head>

      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="pt-[96px]">{children}</main>
        <Footer />
        <CookiesBanner />
      </body>
    </html>
  );
}
