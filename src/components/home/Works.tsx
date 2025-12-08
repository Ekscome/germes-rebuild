"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const works = [
  { id: 1, image: "/works/work1.webp" },
  { id: 2, image: "/works/work2.webp" },
  { id: 3, image: "/works/work3.webp" },
  { id: 6, image: "/works/work6.webp" },
  { id: 7, image: "/works/work7.webp" },
  { id: 8, image: "/works/work8.webp" },
  { id: 9, image: "/works/work9.webp" },
  { id: 4, image: "/works/work4.webp" },
  { id: 10, image: "/works/work10.webp" },
];

export default function Works() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  function openModal(index: number) {
    setCurrent(index);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function prev() {
    setCurrent((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  }

  function next() {
    setCurrent((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  }

  // Листание клавиатурой
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!open) return;

      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeModal();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      {/* ========= СЕКЦИЯ НАШИ РАБОТЫ ========= */}
      <section className="py-20 bg-(--background)">
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Наши работы
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {works.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openModal(index)}
                className="
                  group rounded-xl overflow-hidden border border-(--border)
                  bg-(--surface) shadow-sm hover:shadow-xl transition cursor-pointer
                "
              >
                <div className="relative w-full h-[220px]">
                  <Image
                    src={item.image}
                    alt="work"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= МОДАЛЬНОЕ ОКНО ========= */}
      {open && (
        <div
          className="
            fixed inset-0 bg-black/80 backdrop-blur-sm z-[999]
            flex items-center justify-center p-4
          "
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={works[current].image}
              alt="work"
              width={1600}
              height={900}
              className="rounded-lg shadow-xl w-full h-auto"
            />

            {/* Листание */}
            <button
              onClick={prev}
              className="
                absolute left-0 top-1/2 -translate-y-1/2
                bg-black/40 hover:bg-black/60 text-white
                px-4 py-3 rounded-r-xl transition
              "
            >
              ←
            </button>

            <button
              onClick={next}
              className="
                absolute right-0 top-1/2 -translate-y-1/2
                bg-black/40 hover:bg-black/60 text-white
                px-4 py-3 rounded-l-xl transition
              "
            >
              →
            </button>

            {/* Закрыть */}
            <button
              onClick={closeModal}
              className="
                absolute top-3 right-3 text-white
                bg-black/40 hover:bg-black/60
                px-3 py-1 rounded-lg text-lg
              "
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
