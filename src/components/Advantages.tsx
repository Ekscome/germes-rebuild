// src/components/Advantages.tsx

import SectionTitle from "@/components/SectionTitle";

const items = [
  {
    title: "Кузовной ремонт любой сложности",
    text: "Восстанавливаем геометрию кузова, работаем с серьёзными повреждениями после ДТП.",
  },
  {
    title: "Честная смета и сроки",
    text: "Согласовываем работы и стоимость до начала ремонта. Без скрытых доплат.",
  },
  {
    title: "Современное оборудование",
    text: "Камерная покраска, профессиональные материалы и проверенные технологии.",
  },
  {
    title: "Удобное расположение",
    text: "Санкт-Петербург, Фрунзенский район. Рядом парковка для клиентов.",
  },
];

export default function Advantages() {
  return (
    <section className="bg-[var(--background)] py-10 md:py-14 border-b border-default">
      <div className="max-w-[1300px] mx-auto px-6">
        <SectionTitle className="mb-8">
          Почему выбирают Гермес-Сервис
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[var(--surface)] border border-default rounded-xl p-4 shadow-sm"
            >
              <h3 className="font-semibold mb-2 text-[15px]">{item.title}</h3>
              <p className="text-gray-700 text-[13px] leading-[1.35]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
