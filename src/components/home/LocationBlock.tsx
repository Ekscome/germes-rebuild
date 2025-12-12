"use client";

import Image from "next/image";

export default function LocationBlock() {
  return (
    <section id="contacts" className="py-20">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* ===== Заголовок ===== */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          Контакты и расположение
        </h2>

        {/* ======================================================
            ЕДИНАЯ БОЛЬШАЯ КАРТОЧКА
        ====================================================== */}
        <div
          className="
            rounded-2xl
            border border-[var(--border)]
            shadow-lg
            bg-[var(--surface)]

            /* мобилка */
            p-0

            /* десктоп — как было */
            lg:p-10
          "
        >
          {/* ==================================================
              ДЕСКТОП — КАК БЫЛО (GRID)
          ================================================== */}
          <div className="hidden lg:grid grid-cols-[1fr_560px] gap-12">
            {/* ЛЕВАЯ КОЛОНКА — КОНТАКТЫ */}
            <div className="flex flex-col justify-center">
              {/* мини-заголовок */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-[var(--accent)] rounded-full" />
                  <h3 className="text-xl font-semibold">Контакты сервиса</h3>
                </div>
                <p className="text-[15px] opacity-70 mt-2">
                  Мы рядом, чтобы помочь вам с ремонтом вашего автомобиля
                </p>
              </div>

              {/* текстовый блок */}
              <div className="space-y-6 bg-[var(--surface-strong)]/40 p-6 rounded-xl">
                {/* Адрес */}
                <div className="flex gap-4">
                  <Image
                    src="/icons/pindrop.svg"
                    alt="Адрес"
                    width={24}
                    height={24}
                    className="opacity-70 mt-1"
                  />

                  <div>
                    <p className="font-semibold text-[16px] mb-1">Адрес:</p>
                    <p className="opacity-80 leading-[1.35]">
                      <a
                        href="https://yandex.ru/maps/?text=Малая%20Балканская%2059%201Б"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block opacity-80 hover:opacity-100 transition"
                      >
                        Малая Балканская ул., 59, корп. 1Б <br />
                        Санкт-Петербург
                      </a>
                    </p>
                  </div>
                </div>

                {/* Время */}
                <div className="flex gap-4">
                  <Image
                    src="/icons/time.svg"
                    alt="Время работы"
                    width={24}
                    height={24}
                    className="opacity-70 mt-1"
                  />

                  <div>
                    <p className="font-semibold text-[16px] mb-1">
                      Время работы:
                    </p>
                    <p className="opacity-80">Пн–Вс: 10:00 — 20:00</p>
                  </div>
                </div>

                {/* Телефоны */}
                <div className="flex gap-4">
                  <Image
                    src="/icons/Phone SVG Icon.svg"
                    alt="Телефон"
                    width={24}
                    height={24}
                    className="opacity-70 mt-1"
                  />

                  <div>
                    <p className="font-semibold text-[16px] mb-1">Телефоны:</p>
                    <a
                      href="tel:+79633000650"
                      className="block opacity-80 hover:opacity-100 transition"
                    >
                      +7 (963) 300-06-50
                    </a>
                    <a
                      href="tel:+79112186175"
                      className="block mt-1 opacity-80 hover:opacity-100 transition"
                    >
                      +7 (911) 218-61-75
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Image
                    src="/icons/Mail2 SVG Icon.svg"
                    alt="Email"
                    width={24}
                    height={24}
                    className="opacity-70 mt-1"
                  />

                  <div>
                    <p className="font-semibold text-[16px] mb-1">Email:</p>
                    <a
                      href="mailto:service@germesto.ru"
                      className="opacity-80 hover:opacity-100 transition"
                    >
                      service@germesto.ru
                    </a>
                  </div>
                </div>
              </div>

              {/* кнопки */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://yandex.ru/maps/?rtext=~59.829936,30.431205&rtt=auto"
                  target="_blank"
                  className="bg-[var(--accent)] hover:bg-[var(--accent-dark)]
                  text-black font-semibold py-3 px-6 rounded-lg text-center text-[15px] transition"
                >
                  Как добраться
                </a>

                <a
                  href="tel:+79633000650"
                  className="bg-[var(--accent)] hover:bg-[var(--accent-dark)]
                  text-black font-semibold py-3 px-6 rounded-lg text-center text-[15px] transition"
                >
                  Позвонить
                </a>
              </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА — КАРТА */}
            <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-md flex">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.431900%2C59.829936&z=17&pt=30.431503,59.830105,pm2rdm"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* ==================================================
              МОБИЛКА — КОНТАКТЫ В СВОЕЙ КАРТОЧКЕ
          ================================================== */}
          <div className="lg:hidden px-6 py-6">
            {/* мини-заголовок */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[var(--accent)] rounded-full" />
                <h3 className="text-xl font-semibold">Контакты сервиса</h3>
              </div>
              <p className="text-[15px] opacity-70 mt-2">
                Мы рядом, чтобы помочь вам с ремонтом вашего автомобиля
              </p>
            </div>

            <div className="space-y-6 bg-[var(--surface-strong)]/40 p-6 rounded-xl border border-[var(--border)]">
              {/* Адрес */}
              <div className="flex gap-4">
                <Image
                  src="/icons/pindrop.svg"
                  alt="Адрес"
                  width={24}
                  height={24}
                  className="opacity-70 mt-1"
                />

                <div>
                  <p className="font-semibold text-[16px] mb-1">Адрес:</p>
                  <p className="opacity-80 leading-[1.35]">
                    <a
                      href="https://yandex.ru/maps/?text=Малая%20Балканская%2059%201Б"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block opacity-80 hover:opacity-100 transition"
                    >
                      Малая Балканская ул., 59, корп. 1Б <br />
                      Санкт-Петербург
                    </a>
                  </p>
                </div>
              </div>

              {/* Время */}
              <div className="flex gap-4">
                <Image
                  src="/icons/time.svg"
                  alt="Время работы"
                  width={24}
                  height={24}
                  className="opacity-70 mt-1"
                />

                <div>
                  <p className="font-semibold text-[16px] mb-1">
                    Время работы:
                  </p>
                  <p className="opacity-80">Пн–Вс: 10:00 — 20:00</p>
                </div>
              </div>

              {/* Телефоны */}
              <div className="flex gap-4">
                <Image
                  src="/icons/Phone SVG Icon.svg"
                  alt="Телефон"
                  width={24}
                  height={24}
                  className="opacity-70 mt-1"
                />

                <div>
                  <p className="font-semibold text-[16px] mb-1">Телефоны:</p>
                  <a
                    href="tel:+79633000650"
                    className="block opacity-80 hover:opacity-100 transition"
                  >
                    +7 (963) 300-06-50
                  </a>
                  <a
                    href="tel:+79112186175"
                    className="block mt-1 opacity-80 hover:opacity-100 transition"
                  >
                    +7 (911) 218-61-75
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Image
                  src="/icons/Mail2 SVG Icon.svg"
                  alt="Email"
                  width={24}
                  height={24}
                  className="opacity-70 mt-1"
                />

                <div>
                  <p className="font-semibold text-[16px] mb-1">Email:</p>
                  <a
                    href="mailto:service@germesto.ru"
                    className="opacity-80 hover:opacity-100 transition"
                  >
                    service@germesto.ru
                  </a>
                </div>
              </div>
            </div>

            {/* кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://yandex.ru/maps/?rtext=~59.829936,30.431205&rtt=auto"
                target="_blank"
                className="bg-[var(--accent)] hover:bg-[var(--accent-dark)]
                text-black font-semibold py-3 px-6 rounded-lg text-center text-[15px] transition"
              >
                Как добраться
              </a>

              <a
                href="tel:+79633000650"
                className="bg-[var(--accent)] hover:bg-[var(--accent-dark)]
                text-black font-semibold py-3 px-6 rounded-lg text-center text-[15px] transition"
              >
                Позвонить
              </a>
            </div>
          </div>
          {/* ==================================================
    МОБИЛКА — КАРТА СНИЗУ (как в исходнике)
================================================== */}
          <div className="lg:hidden overflow-hidden rounded-b-xl mt-6">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=30.431900%2C59.829936&z=17&pt=30.431503,59.830105,pm2rdm"
              className="block w-full"
              style={{ border: 0, height: "420px" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
