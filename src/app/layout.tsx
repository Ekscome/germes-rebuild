// src/app/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default:
      "Гермес-Сервис — автосервис в Санкт-Петербурге | Шиномонтаж, кузовной ремонт",
    template: "%s | Гермес-Сервис автосервис",
  },
  description:
    "Гермес-Сервис — автосервис в Санкт-Петербурге. Шиномонтаж, кузовной ремонт, покраска, техническое обслуживание, электрика и восстановление после ДТП.",
  keywords: [
    "автосервис",
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
  metadataBase: new URL("https://hermesto.ru"), // потом поменяешь на реальный домен
  openGraph: {
    type: "website",
    url: "https://hermesto.ru",
    title: "Гермес-Сервис — автосервис в Санкт-Петербурге",
    description:
      "Полный комплекс услуг: шиномонтаж, кузовной ремонт, покраска, детейлинг, техобслуживание и восстановление после ДТП.",
    siteName: "Гермес-Сервис автосервис",
  },
  alternates: {
    canonical: "https://hermesto.ru",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={roboto.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
