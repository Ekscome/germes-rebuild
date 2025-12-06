// src/app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO блок */}
      <section className="max-w-5xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
          Гермес-Сервис — автосервис в Санкт-Петербурге
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Профессиональный автосервис полного цикла: шиномонтаж, кузовной
          ремонт, покраска, детейлинг, техническое обслуживание, ремонт ходовой
          и восстановление после ДТП.
        </p>
        <p className="text-gray-600 max-w-2xl">
          Мы работаем с легковыми автомобилями и кроссоверами, используем
          современное оборудование и сертифицированные материалы. Честная
          диагностика, прозрачная смета и гарантия на выполненные работы.
        </p>
      </section>

      {/* Основные услуги */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
          Услуги автосервиса Гермес-Сервис
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Шиномонтаж</h3>
            <p className="text-gray-600 text-sm">
              Сезонная смена резины, балансировка колес, ремонт проколов и
              порезов, правка дисков. Работаем с R13–R21, аккуратно обращаемся с
              датчиками давления.
            </p>
          </article>

          <article className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Кузовной ремонт</h3>
            <p className="text-gray-600 text-sm">
              Локальный и полный ремонт кузова, восстановление геометрии после
              ДТП, устранение вмятин и коррозии, подбор и покраска элементов.
            </p>
          </article>

          <article className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Покраска автомобиля</h3>
            <p className="text-gray-600 text-sm">
              Камерная покраска с использованием профессиональных материалов,
              полировка, удаление царапин и сколов, восстановление заводского
              блеска.
            </p>
          </article>

          <article className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">
              Техническое обслуживание и ремонт
            </h3>
            <p className="text-gray-600 text-sm">
              Регламентное ТО, замена масел и фильтров, диагностика подвески и
              тормозной системы, ремонт ходовой, электрики и систем двигателя.
            </p>
          </article>

          <article className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Детейлинг</h3>
            <p className="text-gray-600 text-sm">
              Глубокая мойка, химчистка салона, защитные покрытия кузова и
              стекол, уход за кожей и пластиком, подготовка авто к продаже.
            </p>
          </article>

          <article className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">
              Восстановление после ДТП
            </h3>
            <p className="text-gray-600 text-sm">
              Полный цикл: эвакуация, дефектовка, кузовной ремонт, покраска,
              подбор запчастей и подготовка документов для страховой компании.
            </p>
          </article>
        </div>
      </section>

      {/* Блок с lокацией для локального SEO */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Где находится автосервис Гермес-Сервис
        </h2>
        <p className="text-gray-600">
          Наш автосервис расположен в Санкт-Петербурге (укажем точный адрес
          позже), рядом с удобными транспортными развязками и парковкой для
          клиентов.
        </p>
      </section>
    </main>
  );
}
