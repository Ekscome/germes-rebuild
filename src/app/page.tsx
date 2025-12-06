// src/app/page.tsx

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
          современное оборудование и сертифицированные материалы.
        </p>
      </section>

      {/* Основные услуги */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
          Услуги автосервиса Гермес-Сервис
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ... твои карточки ... */}
        </div>
      </section>

      {/* Блок локации */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Где находится автосервис Гермес-Сервис
        </h2>
        <p className="text-gray-600">
          Наш автосервис расположен в Санкт-Петербурге…
        </p>
      </section>
    </div>
  );
}
