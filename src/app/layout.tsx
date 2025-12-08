import type { ReactNode } from "react";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={roboto.variable} suppressHydrationWarning>
      <head>
        {/* Тема — загружается ДО React */}
        <Script src="/theme.js" strategy="beforeInteractive" />

        <title>Гермес-Сервис — автосервис в Санкт-Петербурге</title>
        <meta
          name="description"
          content="Гермес-Сервис — ремонт, покраска, шиномонтаж, детейлинг и обслуживание авто."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="pt-[96px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
