"use client";

import { useState } from "react";

export default function LocationBlock() {
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <section className="mt-0" id="contacts">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* ====== КАРТОЧКА ====== */}
        <div className="rounded-2xl border border-[var(--border)] shadow-lg bg-[var(--surface)] p-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-10">
            {/* ===== КАРТА ===== */}
            <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-md order-1 lg:order-2">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.431900%2C59.829936&z=17&pt=30.431503,59.830105,pm2rdm"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                loading="lazy"
              />
            </div>

            {/* ===== ТЕКСТ ===== */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              {/* Адрес */}
              <div className="text-[14px] mb-4 flex items-start gap-3">
                <img
                  src="/icons/pindrop.svg"
                  className="w-5 h-5 mt-[3px] opacity-70"
                  alt=""
                />
                <div>
                  <p className="font-semibold text-[15px]">Адрес:</p>
                  <a
                    href="https://yandex.ru/maps/?ll=30.431900%2C59.829936&z=17&pt=30.431503,59.830105,pm2rdm"
                    target="_blank"
                    className="opacity-80 leading-[1.35] hover:opacity-100 transition"
                  >
                    Малая Балканская ул., 59, корп. 1Б <br />
                    Санкт-Петербург
                  </a>
                </div>
              </div>

              {/* Время */}
              <div className="text-[14px] mb-4 flex items-start gap-3">
                <div className="mt-[3px] w-5 h-5" />
                <div>
                  <p className="font-semibold text-[15px]">Время работы:</p>
                  <p className="opacity-80">Пн–Вс: 10:00 — 20:00</p>
                </div>
              </div>

              {/* Телефоны */}
              <div className="text-[14px] mb-4 flex items-start gap-3">
                <img
                  src="/icons/Phone SVG Icon.svg"
                  className="w-5 h-5 mt-[3px] opacity-70"
                  alt=""
                />
                <div>
                  <p className="font-semibold text-[15px]">Телефоны:</p>

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
              <div className="text-[14px] mb-4 flex items-start gap-3">
                <img
                  src="/icons/Mail2 SVG Icon.svg"
                  className="w-5 h-5 mt-[3px] opacity-70"
                  alt=""
                />
                <div>
                  <p className="font-semibold text-[15px]">Email:</p>
                  <a
                    href="mailto:service@germesto.ru"
                    className="opacity-80 hover:opacity-100 transition"
                  >
                    service@germesto.ru
                  </a>
                </div>
              </div>

              {/* ==== КНОПКИ ==== */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                {/* КАК ДОБРАТЬСЯ — такой же стиль как в header */}
                <a
                  href="https://yandex.ru/maps/?rtext=~59.829936,30.431205&rtt=auto"
                  target="_blank"
                  className="
      bg-[var(--accent)]
      hover:bg-[var(--accent-dark)]
      transition text-black font-semibold
      py-3 px-6 rounded-lg
      text-center text-[15px]
    "
                >
                  Как добраться
                </a>

                {/* ✔ ВРЕМЕННАЯ КНОПКА: просто позвонить */}
                <a
                  href="tel:+79633000650"
                  className="
      bg-[var(--accent)]
      hover:bg-[var(--accent-dark)]
      transition text-black font-semibold
      py-3 px-6 rounded-lg
      text-center text-[15px]
    "
                >
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
