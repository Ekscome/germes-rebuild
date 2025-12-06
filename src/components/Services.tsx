"use client";

import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";

const services = [
  { title: "Тонировка стёкол", img: "/images/Тонировка стёкол.jpeg" },
  {
    title: "Оклейка защитной плёнкой",
    img: "/images/Оклейка автомобиля и его элементов.jpeg",
  },
  { title: "Покраска элементов", img: "/images/Покраска.jpeg" },
  {
    title: "Полировка + керамика",
    img: "/images/Полировка с нанесением керамики.jpeg",
  },
  { title: "Полировка фар", img: "/images/Полировка фар.jpeg" },
  {
    title: "Ремонт подушек безопасности",
    img: "/images/Ремонт безопасности.jpeg",
  },
  {
    title: "Ремонт вмятин без покраски",
    img: "/images/Ремонт вмятин без покраски.jpeg",
  },
  { title: "Замена лобовых стёкол", img: "/images/Замена лобовых стёкол.jpeg" },
  {
    title: "Локальная покраска бампера",
    img: "/images/Частичная (локальная) покраска бампера.jpeg",
  },
  {
    title: "Локальная покраска крыши",
    img: "/images/Частичная (локальная) покраска крыши.jpeg",
  },
  { title: "Антихром", img: "/images/Антихром.jpeg" },
  {
    title: "Кузовной ремонт любой сложности",
    img: "/images/Кузовной ремонт любой сложности.jpeg",
  },
  {
    title: "Независимая экспертиза",
    img: "/images/Независимая экспертиза.jpeg",
  },
  {
    title: "Ремонт фар любой сложности",
    img: "/images/Ремонт фар любой сложности.jpeg",
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <SectionTitle>Наши услуги</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, i) => (
            <ServiceCard key={i} title={service.title} img={service.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
("use client");

import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";

const services = [
  { title: "Тонировка стёкол", img: "/images/Тонировка стёкол.jpeg" },
  {
    title: "Оклейка защитной плёнкой",
    img: "/images/Оклейка автомобиля и его элементов.jpeg",
  },
  { title: "Покраска элементов", img: "/images/Покраска.jpeg" },
  {
    title: "Полировка + керамика",
    img: "/images/Полировка с нанесением керамики.jpeg",
  },
  { title: "Полировка фар", img: "/images/Полировка фар.jpeg" },
  {
    title: "Ремонт подушек безопасности",
    img: "/images/Ремонт безопасности.jpeg",
  },
  {
    title: "Ремонт вмятин без покраски",
    img: "/images/Ремонт вмятин без покраски.jpeg",
  },
  { title: "Замена лобовых стёкол", img: "/images/Замена лобовых стёкол.jpeg" },
  {
    title: "Локальная покраска бампера",
    img: "/images/Частичная (локальная) покраска бампера.jpeg",
  },
  {
    title: "Локальная покраска крыши",
    img: "/images/Частичная (локальная) покраска крыши.jpeg",
  },
  { title: "Антихром", img: "/images/Антихром.jpeg" },
  {
    title: "Кузовной ремонт любой сложности",
    img: "/images/Кузовной ремонт любой сложности.jpeg",
  },
  {
    title: "Независимая экспертиза",
    img: "/images/Независимая экспертиза.jpeg",
  },
  {
    title: "Ремонт фар любой сложности",
    img: "/images/Ремонт фар любой сложности.jpeg",
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <SectionTitle>Наши услуги</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, i) => (
            <ServiceCard key={i} title={service.title} img={service.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
