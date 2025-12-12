"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { works } from "../../data/works";

const STEP = 9;
const MAX = 18;

export default function Works() {
  const [visible, setVisible] = useState(STEP);

  function showMore() {
    setVisible((v) => Math.min(v + STEP, MAX));
  }

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Наши работы
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {works.slice(0, visible).map((item) => (
            <div
              key={item.id}
              className="
                rounded-2xl overflow-hidden
                border border-[var(--border)]
                bg-[var(--surface)]
                shadow-sm
              "
            >
              <div className="relative h-[240px]">
                <Image
                  src={item.image}
                  alt="Пример выполненной работы"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Кнопки */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {visible < MAX && (
            <button
              onClick={showMore}
              className="
                px-6 py-3 rounded-xl
                bg-[var(--surface-strong)]
                border border-[var(--border)]
                hover:opacity-80 transition
              "
            >
              Показать ещё
            </button>
          )}

          <Link
            href="/works"
            className="
              px-6 py-3 rounded-xl
              border border-[var(--border)]
              hover:bg-[var(--surface-strong)]
              transition
            "
          >
            Все работы →
          </Link>
        </div>
      </div>
    </section>
  );
}
