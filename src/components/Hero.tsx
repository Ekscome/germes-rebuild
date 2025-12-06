export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Гермес-Сервис — профессиональный автосервис в Санкт-Петербурге
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Кузовной ремонт, покраска, детейлинг, шиномонтаж и техническое
          обслуживание автомобилей всех марок.
        </p>

        <a
          href="https://wa.me/79633000650"
          className="inline-block bg-[#f2c94c] hover:bg-[#e5b93f] text-black font-semibold py-3 px-8 rounded-lg transition"
        >
          Записаться
        </a>
      </div>
    </section>
  );
}
