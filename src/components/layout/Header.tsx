"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

/* ==========================================
   ФУНКЦИИ ДЛЯ ТЕМЫ
========================================== */

// Получаем текущую тему из HTML
function getCurrentTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ==========================================
     FIX: Безопасно читаем тему после рендера
  =========================================== */
  useEffect(() => {
    requestAnimationFrame(() => {
      setTheme(getCurrentTheme());
    });

    // Отслеживание изменений класса "dark"
    const observer = new MutationObserver(() => {
      requestAnimationFrame(() => {
        setTheme(getCurrentTheme());
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  /* === Эффект скролла === */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ==========================================
     ВЁРСТКА
  =========================================== */

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[var(--background)]
      transition-all duration-300 shadow-sm
      ${scrolled ? "shadow-md" : ""}`}
      style={{ isolation: "isolate", height: "100px" }}
    >
      {/* ======================== DESKTOP ======================== */}
      <div className="hidden md:flex max-w-[1300px] w-full mx-auto px-6 py-4 items-center justify-between gap-12">
        {/* =========== ЛОГО + МЕНЮ =========== */}
        <div className="flex items-center gap-10">
          {/* ЛОГО */}
          <Link href="/">
            {theme === "light" ? (
              <Image
                src="/logo/logotrans-light.png"
                alt="Logo"
                width={80}
                height={80}
              />
            ) : (
              <Image
                src="/logo/logotrans-dark.png"
                alt="Logo Dark"
                width={80}
                height={80}
              />
            )}
          </Link>

          {/* МЕНЮ */}
          <nav className="flex items-center gap-8 text-[17px] font-medium">
            <a href="#top" className="hover:opacity-70 transition">
              Главная
            </a>
            <a href="#services" className="hover:opacity-70 transition">
              Услуги
            </a>
            <a href="#works" className="hover:opacity-70 transition">
              Наши работы
            </a>
            <a href="#about" className="hover:opacity-70 transition">
              О нас
            </a>
            <a href="#contacts" className="hover:opacity-70 transition">
              Контакты
            </a>
          </nav>
        </div>

        {/* =========== КНОПКА "ЗАПИСАТЬСЯ" =========== */}
        <a
          href="#contacts"
          className="bg-[var(--accent)] hover:bg-[var(--accent-dark)]
          transition text-black font-semibold py-2 px-6 rounded-lg"
        >
          Записаться
        </a>

        {/* =========== СОЦСЕТИ + ТЕЛЕФОНЫ + ТЕМА =========== */}
        <div className="flex items-center gap-3 text-right">
          {/* Соцсети */}
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

          {/* Телефоны */}
          <div className="text-[16px] leading-[1.25]">
            <a href="tel:+79633000650" className="block hover:opacity-70">
              +7 (963) 300-06-50
            </a>
            <a href="tel:+79112186175" className="block hover:opacity-70">
              +7 (911) 218-61-75
            </a>
          </div>

          {/* Переключатель темы */}
          <ThemeToggle />
        </div>
      </div>

      {/* ======================== MOBILE HEADER ======================== */}
      <div className="flex md:hidden max-w-[1300px] mx-auto px-6 py-4 items-center justify-between">
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

        {/* Соцсети */}
        <div className="flex items-center gap-2">
          <a href="https://vk.com/club230725340" target="_blank">
            <Image src="/icons/vk.svg" width={22} height={22} alt="VK" />
          </a>
          <a href="https://wa.me/79633000650" target="_blank">
            <Image src="/icons/whatsapp.svg" width={22} height={22} alt="WA" />
          </a>
        </div>

        {/* ТЕЛЕФОНЫ (исправлено ⚡) */}
        <div className="flex flex-col mr-3 text-right text-[13px] leading-[1.2]">
          <a href="tel:+79633000650">+7 (963) 300-06-50</a>
          <a href="tel:+79112186175">+7 (911) 218-61-75</a>
        </div>

        {/* ТЕМА */}
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
        <div className="md:hidden bg-[var(--background)] border-t py-4 px-6 flex flex-col gap-3 text-[17px] shadow-inner">
          <a href="#top" onClick={() => setMenuOpen(false)}>
            Главная
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Услуги
          </a>
          <a href="#works" onClick={() => setMenuOpen(false)}>
            Наши работы
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            О нас
          </a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>
            Контакты
          </a>

          <a
            href="#contacts"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] transition text-black text-center font-semibold py-3 rounded-lg mt-2"
          >
            Записаться
          </a>
        </div>
      )}
    </header>
  );
}
