// src/components/Hero.tsx

export default function Hero() {
  return (
    <section className="bg-[var(--surface)] border-b border-default">
      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-12 md:pt-16 md:pb-16 grid gap-8 md:grid-cols-[1.4fr,1fr] items-center">
        {/* ============ ЛЕВАЯ ЧАСТЬ HERO ============ */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Гермес-Сервис — кузовной ремонт, покраска и обслуживание авто
          </h1>

          <p className="text-base md:text-lg text-[var(--text-secondary)] mb-5 max-w-[620px]">
            Полный комплекс услуг: кузовной ремонт, покраска, детейлинг,
            восстановление после ДТП, шиномонтаж и техническое обслуживание.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+79633000650"
              className="px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-black font-semibold text-sm transition inline-flex justify-center"
            >
              Позвонить и записаться
            </a>

            <a
              href="#services"
              className="px-6 py-3 rounded-lg border border-default text-sm text-[var(--text-primary)] hover:bg-white/60 transition inline-flex justify-center"
            >
              Посмотреть услуги
            </a>
          </div>
        </div>

        {/* ============ ПРАВАЯ КАРТОЧКА ============ */}
        <div className="bg-[var(--background)] border border-default rounded-2xl p-5 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-[0.5fr_0.5fr] gap-4 items-start">
            {/* Левый текст */}
            <div className="text-sm text-[var(--text-secondary)] space-y-2">
              <h2 className="text-base font-semibold mb-1 text-[var(--text-primary)]">
                Быстрая запись на ремонт
              </h2>

              <p className="text-[13px] mb-2 text-[var(--text-secondary)]">
                Расскажите, что случилось с автомобилем, пришлите фото — мы
                подскажем по срокам и стоимости.
              </p>

              <p className="text-[var(--text-primary)]">
                📍 Малая Балканская ул., 59, корп. 1Б
              </p>
              <p className="text-[var(--text-primary)]">
                🕒 Ежедневно: 10:00–20:00
              </p>

              <p className="text-[var(--text-primary)]">
                📞 <a href="tel:+79633000650">+7 (963) 300-06-50</a>
              </p>
              <p className="text-[var(--text-primary)]">
                📞 <a href="tel:+79112186175">+7 (911) 218-61-75</a>
              </p>

              {/* ✅ Кнопка маршрута — обновлено */}
              <a
                href="https://yandex.ru/maps/-/CLgc5ZZE"
                target="_blank"
                className="
                  mt-3 inline-flex items-center justify-center
                  px-4 py-2 rounded-lg
                  bg-[var(--accent)] hover:bg-[var(--accent-dark)]
                  text-black text-sm font-semibold
                  transition
                "
              >
                Построить маршрут
              </a>
            </div>

            {/* Правая колонка — КАРТА */}
            <div className="w-full h-[200px] md:h-[260px] rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/-/CLgc5ZZE"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
