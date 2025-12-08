"use client";

export default function AboutPage() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* ===== Заголовок ===== */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          О нас
        </h2>

        {/* ===== КАРТОЧКА ===== */}
        <div className="rounded-2xl border border-[var(--border)] shadow-lg bg-[var(--surface)] p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-12">
            {/* ===== ЛЕВАЯ КОЛОНКА — ОТЗЫВЫ ===== */}
            <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-md bg-[var(--surface-strong)]/40">
              {/* Мобильная версия */}
              <div className="lg:hidden">
                <iframe
                  src="https://yandex.ru/maps-reviews-widget/1779666047?comments"
                  frameBorder="0"
                  style={{ width: "100%", height: "500px", border: 0 }}
                  loading="lazy"
                />
              </div>

              {/* Десктоп */}
              <div className="hidden lg:block">
                <iframe
                  src="https://yandex.ru/maps-reviews-widget/1779666047?comments"
                  frameBorder="0"
                  style={{ width: "560px", height: "500px", border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* ===== ПРАВАЯ ЧАСТЬ — ТЕКСТ ===== */}
            <div className="flex flex-col justify-center">
              {/* МИНИ-ЗАГОЛОВОК В СТИЛЕ КОНТАКТОВ */}
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
        </div>
      </div>
    </section>
  );
}
