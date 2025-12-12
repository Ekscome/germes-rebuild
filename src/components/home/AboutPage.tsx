"use client";

export default function AboutPage() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* ===== Заголовок ===== */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          О нас
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

            /* десктоп — КАК БЫЛО */
            lg:p-10
          "
        >
          {/* МОБИЛКА — ОТЗЫВЫ СО СКРУГЛЕНИЕМ */}
          <div className="lg:hidden overflow-hidden rounded-t-2xl">
            <iframe
              src="https://yandex.ru/maps-reviews-widget/1779666047?comments"
              frameBorder="0"
              className="block w-full"
              style={{ height: "520px" }}
              loading="lazy"
            />
          </div>

          {/* ==================================================
              ДЕСКТОП — КАК БЫЛО (GRID)
          ================================================== */}
          <div className="hidden lg:grid grid-cols-[560px_1fr] gap-12">
            {/* отзывы */}
            <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-md bg-[var(--surface-strong)]/40">
              <iframe
                src="https://yandex.ru/maps-reviews-widget/1779666047?comments"
                frameBorder="0"
                style={{ width: "560px", height: "500px", border: 0 }}
                loading="lazy"
              />
            </div>

            {/* текст */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-8 bg-[var(--accent)] rounded-full" />
                <h3 className="text-xl font-semibold">О сервисе</h3>
              </div>

              <div className="bg-[var(--surface-strong)]/40 p-6 rounded-xl space-y-4">
                <p className="text-sm opacity-80 leading-relaxed">
                  Гермес-Сервис — это команда мастеров, которые ценят
                  аккуратность, честность и открытое общение.
                </p>

                <p className="text-sm opacity-80 leading-relaxed">
                  Выполняем локальные и комплексные ремонты, восстановление
                  геометрии, ремонт стекол, полировку, нанесение защитных
                  покрытий и подготовку авто после ДТП.
                </p>

                <p className="text-sm opacity-80 leading-relaxed">
                  Работаем по принципу прозрачной сметы, соблюдаем сроки и
                  предоставляем гарантию на выполненные работы.
                </p>
              </div>
            </div>
          </div>

          {/* ==================================================
              МОБИЛКА — ТЕКСТ В СВОЕЙ КАРТОЧКЕ
          ================================================== */}
          {/* МОБИЛКА — ТЕКСТ */}
          <div className="lg:hidden px-6 pt-6 pb-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-8 bg-[var(--accent)] rounded-full" />
              <h3 className="text-xl font-semibold">О сервисе</h3>
            </div>

            <div className="bg-[var(--surface-strong)]/40 p-6 rounded-xl border border-[var(--border)] space-y-4">
              <p className="text-sm opacity-80 leading-relaxed">
                Гермес-Сервис — это команда мастеров, которые ценят
                аккуратность, честность и открытое общение.
              </p>

              <p className="text-sm opacity-80 leading-relaxed">
                Выполняем локальные и комплексные ремонты, восстановление
                геометрии, ремонт стекол, полировку, нанесение защитных покрытий
                и подготовку авто после ДТП.
              </p>

              <p className="text-sm opacity-80 leading-relaxed">
                Работаем по принципу прозрачной сметы, соблюдаем сроки и
                предоставляем гарантию на выполненные работы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
