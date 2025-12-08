"use client";

import { useState } from "react";
import SignupModal from "@/components/SignupModal";

export default function LocationBlock() {
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <section className="mt-20">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* ===== ДЕКОРАТИВНЫЙ ЗАГОЛОВОК ===== */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-10 bg-(--border)" />
          <h2 className="text-xl md:text-2xl font-semibold">Мы на карте</h2>
          <span className="h-px w-10 bg-(--border)" />
        </div>

        {/* ===== КАРТОЧКА ===== */}
        <div className="rounded-2xl border border-(--border) shadow-lg bg-(--surface) p-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-10">
            {/* ===== КАРТА ===== */}
            <div className="rounded-xl overflow-hidden border border-(--border) shadow-md order-1 lg:order-2">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.431900%2C59.829936&z=17&pt=30.431503,59.830105,pm2rdm"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                loading="lazy"
              ></iframe>
            </div>

            {/* ===== ТЕКСТ ===== */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              {/* Адрес */}
              <div className="text-lg mb-4 flex items-start gap-3">
                <img
                  src="/icons/pindrop.svg"
                  className="w-5 h-5 mt-[3px] opacity-70"
                />
                <div>
                  <p className="font-medium">Адрес:</p>
                  <a
                    href="https://yandex.ru/maps/?ll=30.431900%2C59.829936&z=17&pt=30.431503,59.830105,pm2rdm"
                    target="_blank"
                    className="opacity-80 leading-[1.35] hover:opacity-100 transition"
                  >
                    Малая Балканская ул., 59, корп. 1Б
                    <br />
                    Санкт-Петербург
                  </a>
                </div>
              </div>

              {/* Время */}
              <div className="text-lg mb-4 flex items-start gap-3">
                <div className="mt-[3px] w-5 h-5" />
                <div>
                  <p className="font-medium">Время работы:</p>
                  <p className="opacity-80">Пн–Вс: 10:00 — 20:00</p>
                </div>
              </div>

              {/* Телефоны */}
              <div className="text-lg mb-4 flex items-start gap-3">
                <img
                  src="/icons/Phone SVG Icon.svg"
                  className="w-5 h-5 mt-[3px] opacity-70"
                />
                <div>
                  <p className="font-medium">Телефоны:</p>
                  <a
                    href="tel:+79633000650"
                    className="block opacity-80 hover:opacity-100 transition"
                  >
                    +7 (963) 300-06-50
                  </a>
                  <a
                    href="tel:+79112186175"
                    className="block opacity-80 mt-1 hover:opacity-100 transition"
                  >
                    +7 (911) 218-61-75
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="text-lg mb-4 flex items-start gap-3">
                <img
                  src="/icons/Mail2 SVG Icon.svg"
                  className="w-5 h-5 mt-[3px] opacity-70"
                />
                <div>
                  <p className="font-medium">Email:</p>
                  <a
                    href="mailto:info@hermes-service.ru"
                    className="opacity-80 hover:opacity-100 transition"
                  >
                    info@hermes-service.ru
                  </a>
                </div>
              </div>

              {/* КНОПКИ */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href="https://yandex.ru/maps/?rtext=~59.829936,30.431205&rtt=auto"
                  target="_blank"
                  className="px-5 py-3 rounded-xl bg-blue-600 text-white text-center text-[15px] font-medium hover:bg-blue-700 transition"
                >
                  Как добраться
                </a>

                {/* ВЫЗОВ МОДАЛКИ */}
                <button
                  onClick={() => setOpenSignup(true)}
                  className="px-5 py-3 rounded-xl border border-(--border) text-[15px] font-medium text-(--foreground) text-center hover:bg-(--surface-strong) transition"
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <SignupModal open={openSignup} onClose={() => setOpenSignup(false)} />
    </section>
  );
}
