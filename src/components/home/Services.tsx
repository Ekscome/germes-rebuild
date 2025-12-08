"use client";

import Image from "next/image";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Наши услуги
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="
    rounded-xl overflow-hidden bg-(--background) border border-(--border)
    hover:shadow-lg transition cursor-pointer
  "
            >
              {/* Фото — можно сделать ниже */}
              <div className="relative w-full h-40">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-[15px] leading-tight">
                  {s.title}
                </h3>

                {/* Описание — супер-компактное */}
                {s.desc && (
                  <p className="text-[12px] opacity-70 leading-tight mt-1">
                    {s.desc}
                  </p>
                )}

                {/* Цена — сразу под описанием */}
                <p className="font-semibold text-(--accent) text-[14px] mt-2">
                  от {s.price} ₽
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
