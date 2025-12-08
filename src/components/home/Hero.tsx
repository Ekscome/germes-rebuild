<section className="relative h-[80vh] min-h-[600px] flex items-center">
  {/* ФОН */}
  <div className="absolute inset-0">
    <img
      src="/hero/painting-room.jpg"
      alt="Малярная камера"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/45"></div>
  </div>

  {/* КОНТЕНТ */}
  <div className="relative max-w-[1300px] mx-auto px-6">
    <p className="text-gray-300 uppercase tracking-widest text-sm mb-4">
      Кузовной ремонт и покраска автомобиля
    </p>

    <h1 className="text-3xl md:text-6xl font-bold text-white max-w-[700px] mb-6">
      Восстановление, покраска и улучшение внешнего вида вашего автомобиля
    </h1>

    <p className="text-lg md:text-xl text-gray-300 max-w-[650px] mb-8">
      Локальная покраска, ремонт вмятин без покраски, замена стекол, полировка,
      оклейка, антихром и независимая экспертиза — всё в одном месте.
    </p>

    <div className="flex gap-4">
      <button className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-semibold">
        Записаться в сервис
      </button>
      <button className="px-6 py-3 border border-white/50 text-white rounded-lg font-semibold">
        Оценить стоимость по фото
      </button>
    </div>
  </div>
</section>;
