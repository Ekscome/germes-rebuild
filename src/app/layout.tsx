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
  title: {
    default: "Гермес-Сервис — кузовной ремонт и покраска авто в СПб",
    template: "%s | Гермес-Сервис",
  },
  description:
    "Кузовной ремонт, покраска автомобилей, восстановление после ДТП. Санкт-Петербург. Гарантия качества.",
  keywords: [
    "кузовной ремонт",
    "покраска авто",
    "автосервис СПб",
    "ремонт после ДТП",
    "Гермес Сервис",
  ],
  authors: [{ name: "Гермес-Сервис" }],
  creator: "Гермес-Сервис",
  metadataBase: new URL("https://germesto.ru"),

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
