<section className="relative py-20">
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
  <div className="relative max-w-[1300px] mx-auto px-6 flex flex-col">
    <p className="text-gray-300 uppercase tracking-widest text-sm mb-4">
      Кузовной ремонт любой сложности на стапеле Siver K-210
    </p>

    <h1 className="text-3xl md:text-6xl font-bold text-white max-w-[700px] mb-6">
      Восстановление, покраска и улучшение внешнего вида вашего автомобиля
    </h1>

    <p className="text-lg md:text-xl text-gray-300 max-w-[650px] mb-8">
      Локальная покраска, ремонт вмятин без покраски, замена стекол, полировка,
      оклейка, антихром и независимая экспертиза — всё в одном месте.
    </p>

    {/* КНОПКА */}
    <div className="w-full flex justify-center md:justify-start">
      <button
        className="
    bg-[var(--accent)]
    text-black font-semibold
    rounded-lg
    px-6 py-3
    w-full sm:w-auto
    flex items-center justify-center
    text-center
    leading-none
    tracking-tight

    transition-all duration-200
    hover:brightness-[1.08]
    hover:shadow-[0_0_20px_rgba(255,193,7,0.4)]
    active:scale-[0.97]
  "
      >
        Записаться в сервис
      </button>
    </div>
  </div>
</section>;
