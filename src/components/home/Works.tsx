"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { works } from "@/data/works";

const STEP = 9;
const MAX = 18;

export default function Works() {
  const [visible, setVisible] = useState(STEP);

  // ===== МОДАЛКА =====
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
    setCurrent((v) => (v === 0 ? visible - 1 : v - 1));
  }

  function next() {
    setCurrent((v) => (v === visible - 1 ? 0 : v + 1));
  }

  // ===== КЛАВИАТУРА =====
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeModal();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, visible]);

  return (
    <>
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Наши работы
          </h2>

          <div
            className="
              rounded-2xl
              border border-[var(--border)]
              shadow-lg
              bg-[var(--surface)]
              p-6 md:p-8 lg:p-10
            "
          >
            {/* ===== СЕТКА ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {works.slice(0, visible).map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openModal(index)}
                  className="
                    group relative cursor-pointer
                    rounded-2xl overflow-hidden
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                  "
                >
                  <div className="relative h-[240px]">
                    <Image
                      src={item.image}
                      alt="Пример выполненной работы"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/40 opacity-0
                      group-hover:opacity-100
                      transition
                      flex items-center justify-center
                    "
                  >
                    <span className="text-white text-lg">🔍 Посмотреть</span>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== КНОПКА ===== */}
            {visible < MAX && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisible((v) => Math.min(v + STEP, MAX))}
                  className="
                    bg-[var(--accent)] hover:bg-[var(--accent-dark)]
                    text-black font-semibold py-3 px-6
                    rounded-lg text-[15px] transition
                  "
                >
                  Показать ещё
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== МОДАЛЬНОЕ ОКНО ===== */}
      {open && (
        <div
          className="
            fixed inset-0 z-[999]
            bg-black/85 backdrop-blur-sm
            flex items-center justify-center p-4
          "
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={works[current].image}
              alt="Работа автосервиса"
              width={1800}
              height={1000}
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* СЧЁТЧИК */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80 bg-black/40 px-4 py-1 rounded-full">
              {current + 1} / {visible}
            </div>

            {/* НАВИГАЦИЯ */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-4 py-4 rounded-r-2xl"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-4 py-4 rounded-l-2xl"
            >
              →
            </button>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white px-3 py-1 rounded-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
