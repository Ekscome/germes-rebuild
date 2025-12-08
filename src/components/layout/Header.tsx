"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

/* --------------------------------------------------------
   ХУК ТЕМЫ — тот же механизм, что и в ThemeToggle
--------------------------------------------------------- */

// Подписка на изменения
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

// Текущее состояние темы
function getSnapshot() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// Для SSR
function getServerSnapshot() {
  return "light";
}

/* --------------------------------------------------------
   HEADER COMPONENT
--------------------------------------------------------- */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ← Получаем тему
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        isolation: "isolate",
        height: "100px",
      }}
      className={`
        fixed top-0 left-0 w-full z-50
        bg-[var(--background)]
        shadow-[0_1px_3px_rgba(0,0,0,0.08)]
        transition-all duration-300
        ${scrolled ? "shadow-md" : ""}
      `}
    >
      {/* ======================== DESKTOP ======================== */}
      <div
        className="
          hidden md:flex
          max-w-[1300px] w-full
          mx-auto px-6 py-4
          items-center justify-center
          gap-16
        "
      >
        {/* ЛОГО */}
        <div className="flex items-center gap-10">
          <Link href="/">
            {theme === "light" ? (
              <Image
                src="/logo/logotrans-light.png"
                alt="HermesTO logo"
                width={80}
                height={80}
                className="object-contain"
              />
            ) : (
              <Image
                src="/logo/logotrans-dark.png"
                alt="HermesTO dark theme logo"
                width={80}
                height={80}
                className="object-contain"
              />
            )}
          </Link>

          {/* Меню */}
          <nav className="flex items-center gap-8 text-[17px] font-medium">
            <Link href="/" className="hover:opacity-70 transition">
              Главная
            </Link>
            <Link href="/services" className="hover:opacity-70 transition">
              Услуги
            </Link>
            <Link href="/contacts" className="hover:opacity-70 transition">
              Контакты
            </Link>
            <Link href="/about" className="hover:opacity-70 transition">
              О нас
            </Link>
          </nav>
        </div>

        {/* Кнопка */}
        <div>
          <Link
            href="/contacts"
            className="
              bg-[var(--accent)]
              hover:bg-[var(--accent-dark)]
              transition text-black font-semibold
              py-2 px-6 rounded-lg
            "
          >
            Записаться
          </Link>
        </div>

        {/* Соцсети + телефоны + тема */}
        <div className="flex items-center gap-3 text-right">
          <div className="flex items-center gap-2">
            <a href="https://vk.com/club230725340" target="_blank">
              <Image src="/icons/vk.svg" alt="VK" width={26} height={26} />
            </a>

            <a href="https://wa.me/79633000650" target="_blank">
              <Image
                src="/icons/whatsapp.svg"
                alt="Whatsapp"
                width={26}
                height={26}
              />
            </a>
          </div>

          <div className="leading-[1.25] text-[16px] text-right">
            <a href="tel:+79633000650" className="hover:opacity-70 block">
              +7 (963) 300-06-50
            </a>
            <a href="tel:+79112186175" className="hover:opacity-70 block">
              +7 (911) 218-61-75
            </a>
          </div>

          <ThemeToggle />
        </div>
      </div>

      {/* ======================== MOBILE HEADER ======================== */}
      <div
        className="
          flex md:hidden
          max-w-[1300px] mx-auto
          px-6 py-4
          items-center justify-between
        "
      >
        {/* ЛОГО */}
        <Link href="/">
          {theme === "light" ? (
            <Image
              src="/logo/logotrans-light.png"
              width={60}
              height={60}
              alt="logo"
            />
          ) : (
            <Image
              src="/logo/logotrans-dark.png"
              width={60}
              height={60}
              alt="logo dark"
            />
          )}
        </Link>

        {/* Соцсети + телефоны */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a href="https://vk.com/club230725340" target="_blank">
              <Image src="/icons/vk.svg" width={22} height={22} alt="VK" />
            </a>
            <a href="https://wa.me/79633000650" target="_blank">
              <Image
                src="/icons/whatsapp.svg"
                width={22}
                height={22}
                alt="WA"
              />
            </a>
          </div>

          <div className="flex flex-col text-right text-[14px] leading-[1.2]">
            <a href="tel:+79633000650">+7 (963) 300-06-50</a>
            <a href="tel:+79112186175">+7 (911) 218-61-75</a>
          </div>
        </div>

        {/* Тема */}
        <ThemeToggle />

        {/* Бургер */}
        <button
          className="flex flex-col gap-[6px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-[3px] w-7 bg-[var(--foreground)] rounded transition ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`h-[3px] w-7 bg-[var(--foreground)] rounded transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] w-7 bg-[var(--foreground)] rounded transition ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ======================== MOBILE MENU ======================== */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-[var(--background)]
            border-t
            py-4 px-6
            flex flex-col gap-3
            text-[17px]
            shadow-inner
          "
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Главная
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Услуги
          </Link>
          <Link href="/contacts" onClick={() => setMenuOpen(false)}>
            Контакты
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            О нас
          </Link>

          <Link
            href="/contacts"
            onClick={() => setMenuOpen(false)}
            className="
              bg-[var(--accent)]
              hover:bg-[var(--accent-dark)]
              transition text-black text-center
              font-semibold py-3 rounded-lg mt-2
            "
          >
            Записаться
          </Link>
        </div>
      )}
    </header>
  );
}
