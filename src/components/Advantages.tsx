export default function Advantages() {
  const items = [
    {
      title: "5+ лет опыта",
      desc: "Профессиональные мастера по ремонту и детейлингу.",
    },
    {
      title: "Современное оборудование",
      desc: "Работаем на сертифицированных системах.",
    },
    { title: "Гарантия", desc: "Гарантируем качество всех выполненных работ." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">Почему выбирают нас</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl border">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
