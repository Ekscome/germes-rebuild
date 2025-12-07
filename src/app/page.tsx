"use client";

import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <main className="bg-(--background) text-(--foreground)">
      {/* ====================== HERO ====================== */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Текст */}
          <div className="max-w-[600px]">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Гермес-Сервис — автосервис в Санкт-Петербурге
            </h1>

            <p className="text-[17px] opacity-80 mb-8">
              Профессиональный автосервис полного цикла: кузовной ремонт,
              покраска, детейлинг, замена стёкол, ремонт вмятин, восстановление
              после ДТП.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacts"
                className="px-7 py-3 bg-(--accent) hover:bg-(--accent-dark) transition rounded-lg text-black font-semibold text-[15px]"
              >
                Записаться в сервис
              </Link>

              <a
                href="https://wa.me/79633000650"
                target="_blank"
                className="px-7 py-3 border border-(--border) hover:bg-white/10 transition rounded-lg text-[15px]"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>

          {/* Фото / иллюстрация */}
          <div className="w-full md:w-auto">
            <Image
              src="/hero-car.png"
              alt="car"
              width={550}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ====================== БЫСТРЫЕ УСЛУГИ ====================== */}
      <section className="py-12 bg-(--surface)">
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Кузовной ремонт",
            "Покраска авто",
            "Замена стёкол",
            "Детейлинг",
          ].map((item, idx) => (
            <div
              key={idx}
              className="
                p-5 rounded-xl bg-(--background) border border-(--border)
                hover:shadow-md transition cursor-pointer text-center
              "
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== ПРЕИМУЩЕСТВА ====================== */}
      <section className="py-20">
        <div className="max-w-[1300px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Почему выбирают нас</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Прозрачная смета",
                text: "Стоимость работ известна заранее, без скрытых затрат.",
              },
              {
                title: "Гарантия на работы",
                text: "Мы уверены в качестве услуг — даём гарантию на ремонт.",
              },
              {
                title: "Опыт мастеров",
                text: "Профессионалы с большим стажем в кузовном и покрасочном деле.",
              },
              {
                title: "Современное оборудование",
                text: "Точная диагностика и качественный ремонт.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-(--surface) border border-(--border)"
              >
                <h3 className="font-semibold text-[18px] mb-2">{item.title}</h3>
                <p className="opacity-75 text-[14px] leading-[1.4]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== УСЛУГИ (ВАШИ КАРТОЧКИ) ====================== */}
      <Services />

      {/* ====================== О КОМПАНИИ ====================== */}
      <section className="py-20 bg-(--surface)">
        <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-[600px]">
            <h2 className="text-3xl font-semibold mb-4">О компании</h2>
            <p className="opacity-80 leading-[1.6] mb-5">
              Гермес-Сервис — это современный автосервис полного цикла в
              Санкт-Петербурге. Мы выполняем кузовной ремонт, покраску,
              детейлинг, восстановление после ДТП, ремонт фар, замену стёкол и
              другие услуги.
            </p>
            <p className="opacity-80 leading-[1.6] mb-7">
              Работаем официально, предоставляем гарантию и всегда открыты к
              диалогу.
            </p>

            <Link
              href="/about"
              className="text-(--accent) font-semibold hover:opacity-70"
            >
              Читать подробнее →
            </Link>
          </div>

          <Image
            src="/garage.jpg"
            width={500}
            height={360}
            alt="garage"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ====================== КАРТА ====================== */}
      <section className="py-20">
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Где мы находимся</h2>

          <div className="rounded-xl overflow-hidden shadow-lg border border-(--border)">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3AВАШ_ID&source=constructor"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ====================== ОТЗЫВЫ ЯНДЕКС ====================== */}
      <section className="py-20 bg-(--surface)">
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Отзывы клиентов</h2>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://yandex.ru/maps-reviews-widget/ВАШ_ID"
              width="100%"
              height="400"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <ContactCTA />
    </main>
  );
}
