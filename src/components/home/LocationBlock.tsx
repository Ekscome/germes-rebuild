"use client";

export default function LocationBlock() {
  return (
    <section id="contacts" className="mt-20">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* ===== ГЛОБАЛЬНЫЙ ЗАГОЛОВОК (как в AboutPage) ===== */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          Контакты и расположение
        </h2>

        <div className="rounded-2xl border border-[var(--border)] shadow-lg bg-[var(--surface)] p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-12">
            {/* ЛЕВАЯ КОЛОНКА */}
            <div className="flex flex-col justify-center">
              {/* Внутренний мини-заголовок */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-[var(--accent)] rounded-full" />
                  <h3 className="text-xl font-semibold">Контакты сервиса</h3>
                </div>
                <p className="text-[15px] opacity-70 mt-2">
                  Мы рядом, чтобы помочь вам с ремонтом вашего автомобиля
                </p>
              </div>

              {/* Блок с текстом */}
              <div className="space-y-6 bg-[var(--surface-strong)]/40 p-6 rounded-xl">
                {/* Адрес */}
                <div className="flex gap-4">
                  <img
                    src="/icons/pindrop.svg"
                    className="w-6 h-6 opacity-70 mt-1"
                  />
                  <div>
                    <p className="font-semibold text-[16px] mb-1">Адрес:</p>
                    <p className="opacity-80 leading-[1.35]">
                      Малая Балканская ул., 59, корп. 1Б <br />
                      Санкт-Петербург
                    </p>
                  </div>
                </div>

                {/* Время */}
                <div className="flex gap-4">
                  <img
                    src="/icons/time.svg"
                    className="w-6 h-6 opacity-70 mt-1"
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
                  <img
                    src="/icons/Phone SVG Icon.svg"
                    className="w-6 h-6 opacity-70 mt-1"
                  />
                  <div>
                    <p className="font-semibold text-[16px] mb-1">Телефоны:</p>

                    <a
                      href="tel:+79633000650"
                      className="block hover:opacity-100 opacity-80 transition"
                    >
                      +7 (963) 300-06-50
                    </a>

                    <a
                      href="tel:+79112186175"
                      className="block hover:opacity-100 opacity-80 transition mt-1"
                    >
                      +7 (911) 218-61-75
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <img
                    src="/icons/Mail2 SVG Icon.svg"
                    className="w-6 h-6 opacity-70 mt-1"
                  />
                  <div>
                    <p className="font-semibold text-[16px] mb-1">Email:</p>
                    <a
                      href="mailto:service@germesto.ru"
                      className="hover:opacity-100 opacity-80 transition"
                    >
                      service@germesto.ru
                    </a>
                  </div>
                </div>
              </div>

              {/* КНОПКИ */}
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
            <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-md">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.431900%2C59.829936&z=17&pt=30.431503,59.830105,pm2rdm"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
