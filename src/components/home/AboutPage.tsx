export default function AboutPage() {
  return (
    <div id="about" className="min-h-screen bg-[var(--background)]">
      <div className="max-w-[1300px] mx-auto px-6 pt-10 pb-16">
        {/* ===== Заголовок ===== */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          О нас
        </h1>

        {/* ===== Общая карточка: отзывы + описание ===== */}
        <div
          className="
            rounded-2xl 
            border border-(--border)
            shadow-lg 
            bg-(--surface)
            p-6
          "
        >
          {/* Внутренний grid — две колонки на десктопе, одна на мобилке */}
          <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-10">
            {/* ---- Левая часть — Отзывы ---- */}
            {/* Левая колонка — отзывный виджет */}
            <div
              className="
    rounded-xl 
    overflow-hidden
    bg-(--surface)
  "
              style={{
                height: "420px",
              }}
            >
              <div className="block lg:hidden w-full">
                {/* --- МОБИЛЬНАЯ ВЕРСИЯ --- */}
                <iframe
                  src="https://yandex.ru/maps-reviews-widget/1779666047?comments"
                  frameBorder={0}
                  style={{
                    width: "100%", // адаптивная ширина
                    height: "700px", // чтобы уместились отзывы
                    border: "0",
                  }}
                />
              </div>

              <div
                className="hidden lg:block"
                style={{
                  width: "560px",
                  height: "420px",
                }}
              >
                {/* --- ДЕСКТОПНАЯ ВЕРСИЯ (компактная, без правой части) --- */}
                <iframe
                  src="https://yandex.ru/maps-reviews-widget/1779666047?comments"
                  frameBorder={0}
                  style={{
                    width: "560px",
                    height: "800px",
                    border: "0",
                  }}
                />
              </div>
            </div>

            {/* ---- Правая часть — информация о сервисе ---- */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">О сервисе</h3>

              <p className="text-sm opacity-80 leading-relaxed mb-4">
                Гермес-Сервис — это команда мастеров, которые ценят
                аккуратность, честность и открытое общение.
              </p>

              <p className="text-sm opacity-80 leading-relaxed">
                Выполняем локальные и комплексные ремонты, восстановление
                геометрии, ремонт стекол, полировку, нанесение защитных покрытий
                и подготовку авто после ДТП. Мы работаем по принципу прозрачной
                сметы, соблюдаем сроки и предоставляем гарантию на выполненные
                работы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
