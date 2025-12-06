"use client";

import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";

const services = [
  { title: "Тонировка стёкол", img: "/images/tonirovka-stekol.jpg" },
  { title: "Оклейка защитной плёнкой", img: "/images/okleyka-plenka.jpg" },
  { title: "Покраска элементов", img: "/images/pokraska.jpg" },
  { title: "Полировка + керамика", img: "/images/polirovka-keramika.jpg" },
  { title: "Полировка фар", img: "/images/polirovka-far.jpg" },
  { title: "Ремонт подушек безопасности", img: "/images/remont-podushek.jpg" },
  { title: "Ремонт вмятин без покраски", img: "/images/vmyatiny-bp.jpg" },
  { title: "Замена лобовых стёкол", img: "/images/lobovoe-zamena.jpg" },
  { title: "Локальная покраска бампера", img: "/images/pokraska-bamper.jpg" },
  { title: "Локальная покраска крыши", img: "/images/pokraska-krysha.jpg" },
  { title: "Антихром", img: "/images/antichrom.jpg" },
  {
    title: "Кузовной ремонт любой сложности",
    img: "/images/kuzovnoy-remont.jpg",
  },
  { title: "Независимая экспертиза", img: "/images/ekspertiza.jpg" },
  { title: "Ремонт фар любой сложности", img: "/images/remont-far.jpg" },
];

export default function ServicesPage() {
  return (
    <section className="py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <SectionTitle>Наши услуги</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, idx) => (
            <ServiceCard key={idx} title={service.title} img={service.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
