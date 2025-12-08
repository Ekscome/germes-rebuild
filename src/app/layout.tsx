import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =============================
   🎨 Подключение шрифта Roboto
============================= */
const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

/* =============================
   🏷️ SEO и OpenGraph настройки
============================= */
export const metadata: Metadata = {
  title: {
    default:
      "Гермес-Сервис — автосервис в Санкт-Петербурге | Шиномонтаж, кузовной ремонт",
    template: "%s | Гермес-Сервис автосервис",
  },
  description:
    "Гермес-Сервис — автосервис в Санкт-Петербурге. Шиномонтаж, кузовной ремонт, покраска, техническое обслуживание, электрика и восстановление после ДТП.",
  metadataBase: new URL("https://hermesto.ru"),
  alternates: {
    canonical: "https://hermesto.ru",
  },
  keywords: [
    "автосервис",
    "Гермес-Сервис",
    "HermesTO",
    "шиномонтаж",
    "кузовной ремонт",
    "покраска автомобиля",
    "детейлинг",
    "техобслуживание",
    "автосервис Санкт-Петербург",
    "ремонт авто",
    "СТО",
  ],
  openGraph: {
    type: "website",
    url: "https://hermesto.ru",
    title: "Гермес-Сервис — автосервис в Санкт-Петербурге",
    description:
      "Полный комплекс услуг: шиномонтаж, кузовной ремонт, покраска, детейлинг, техобслуживание и восстановление после ДТП.",
    siteName: "Гермес-Сервис автосервис",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

/* =============================
   🌙 Тема до загрузки React
   — корректная реализация
============================= */
const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (_) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${roboto.variable} font-sans`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Header />

        {/* Отступ для фиксированного header */}
        <main className="pt-[96px]">{children}</main>

        <Footer />
        {/* <CookiesBanner /> */}
      </body>
    </html>
  );
}
