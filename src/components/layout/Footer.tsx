"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";

// ======== Синхронизация темы (как в Header) ========

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", callback);
  };
}

function getSnapshot() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot() {
  return "light";
}

export default function Footer() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <footer
      className="
        bg-(--surface-strong)
        text-(--foreground)
        border-t border-(--border)
        mt-20
        transition-colors duration-300
      "
    >
      <div
        className="
    max-w-[1300px]
    mx-auto
    px-6
    py-6                /* ← было 10 */
    grid
    grid-cols-2
    md:grid-cols-2
    lg:grid-cols-4
    gap-6               /* ← было 10 */
    text-[13px]         /* ← было text-sm */
  "
      >
        {/* ЛОГО + ОПИСАНИЕ */}
        <div className="flex flex-col gap-3">
          {/* === Смена логотипа по теме === */}
          {theme === "light" ? (
            <Image
              src="/logo/logotrans-light.png"
              alt="HermesTO logo"
              width={80}
              height={80}
              className="opacity-90"
            />
          ) : (
            <Image
              src="/logo/logotrans-dark.png"
              alt="HermesTO logo dark"
              width={80}
              height={80}
              className="opacity-90"
            />
          )}

          <p className="opacity-70 leading-[1.35] max-w-[240px]">
            Гермес-Сервис — профессиональный ремонт, обслуживание, кузовные
            работы и шиномонтаж.
          </p>
        </div>

        {/* НАВИГАЦИЯ */}
        <div>
          <h3 className="text-[15px] font-semibold mb-3">Навигация</h3>
          <ul className="flex flex-col gap-1 opacity-80">
            <li>
              <Link className="hover:opacity-100 transition" href="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="hover:opacity-100 transition" href="/services">
                Услуги
              </Link>
            </li>
            <li>
              <Link className="hover:opacity-100 transition" href="/contacts">
                Контакты
              </Link>
            </li>
            <li>
              <Link className="hover:opacity-100 transition" href="/about">
                О нас
              </Link>
            </li>
          </ul>
        </div>

        {/* КОНТАКТЫ */}
        <div>
          <h3 className="text-[15px] font-semibold mb-3">Контакты</h3>

          <a
            className="block opacity-80 hover:opacity-100 transition"
            href="tel:+79633000650"
          >
            +7 (963) 300-06-50
          </a>
          <a
            className="block opacity-80 mt-1 hover:opacity-100 transition"
            href="tel:+79112186175"
          >
            +7 (911) 218-61-75
          </a>

          <h3 className="text-[15px] font-semibold mt-4 mb-2">Мы в соцсетях</h3>

          <div className="flex gap-3">
            <a
              href="https://vk.com/club230725340"
              target="_blank"
              className="opacity-80 hover:opacity-100 transition"
            >
              <Image src="/icons/vk.svg" alt="VK" width={24} height={24} />
            </a>

            <a
              href="https://wa.me/79633000650"
              target="_blank"
              className="opacity-80 hover:opacity-100 transition"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* АДРЕС */}
        <div>
          <h3 className="text-[15px] font-semibold mb-3">Адрес</h3>

          <a
            href="https://yandex.ru/maps/?text=Малая%20Балканская%2059%201Б"
            className="
              flex gap-2 items-start
              opacity-80 hover:opacity-100 transition
              leading-[1.35]
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/map-pin.svg"
              width={18}
              height={18}
              alt="Map"
              className="mt-[2px]"
            />
            Малая Балканская ул., 59, корп. 1Б
            <br />
            Санкт-Петербург
          </a>

          <p className="opacity-70 mt-3 text-[13px]">Пн–Вс: 10:00–20:00</p>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div
        className="
          border-t border-(--border)
          py-3 text-center text-[11px] opacity-70
        "
      >
        © {new Date().getFullYear()} Гермес-Сервис. Все права защищены.
      </div>
    </footer>
  );
}
