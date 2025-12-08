"use client";

import Image from "next/image";
import Services from "@/components/home/Services";
import Works from "@/components/home/Works";
import AboutPage from "@/components/home/AboutPage";
import LocationBlock from "@/components/home/LocationBlock";

export default function HomePage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]" id="top">
      {/* HERO */}
      <section
        id="hero"
        className="relative pt-32 pb-24 md:pb-32 min-h-[520px] flex items-center"
      >
        <div className="absolute inset-0">
          <Image
            src="/hero/painting-room.jpg"
            alt="Малярная камера"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-[650px] text-white">
              <p className="uppercase tracking-[0.16em] text-sm text-gray-300 mb-3">
                Кузовной ремонт и покраска автомобиля
              </p>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Восстановление, покраска и улучшение внешнего вида вашего
                автомобиля
              </h1>

              <p className="text-[17px] text-gray-200 mb-8">
                Локальная покраска бамперов и крыши, ремонт вмятин без покраски,
                замена и тонировка стёкол, полировка, керамика, антихром,
                оклейка элементов и независимая экспертиза — всё в одном
                сервисе.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacts"
                  className="px-7 py-3 bg-[var(--accent)] hover:bg-[var(--accent-dark)] transition rounded-lg text-black font-semibold text-[15px]"
                >
                  Записаться в сервис
                </a>
              </div>
            </div>

            <div className="hidden md:block w-[320px]" />
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services">
        <Services />
      </section>

      {/* НАШИ РАБОТЫ */}
      <section id="works">
        <Works />
      </section>

      {/* О НАС / ОТЗЫВЫ */}
      <section id="about">
        <AboutPage />
      </section>

      {/* КОНТАКТЫ / КАРТА */}
      <section id="contacts">
        <LocationBlock />
      </section>
    </main>
  );
}
