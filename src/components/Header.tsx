"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-[var(--background)]
        shadow-[0_1px_3px_rgba(0,0,0,0.08)]
        transition-all duration-300
        ${scrolled ? "shadow-md" : ""}
      `}
    >
      {/* ======================== DESKTOP ======================== */}
      <div className="hidden md:flex max-w-[1300px] mx-auto px-6 py-4 items-center justify-between">
        {/* ЛЕВО — ЛОГО + МЕНЮ */}
        <div className="flex items-center gap-10">
          <Link href="/">
            {/* Авто-смена логотипа */}
            <Image
              src="/logo-light.svg"
              alt="HermesTO logo"
              width={80}
              height={80}
              className="hidden dark:block object-contain"
            />
            <Image
              src="/logo-dark.svg"
              alt="HermesTO logo"
              width={80}
              height={80}
              className="block dark:hidden object-contain"
            />
          </Link>

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

        {/* ЦЕНТР — КНОПКА */}
        <Link
          href="/contacts"
          className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] transition text-black font-semibold py-2 px-6 rounded-lg"
        >
          Записаться
        </Link>

        {/* ПРАВО — МЕССЕНДЖЕРЫ + ТЕЛЕФОНЫ + ТЕМА */}
        <div className="flex items-center gap-4">
          {/* Иконки автоматически меняют цвет */}
          <div className="flex items-center gap-2 text-[var(--foreground)]">
            <Link
              href="https://vk.com/club230725340"
              target="_blank"
              aria-label="VK"
            >
              <Image
                src="/icons/vk.svg"
                width={26}
                height={26}
                alt="VK"
                className="icon-theme"
              />
            </Link>

            <Link
              href="https://wa.me/79633000650?text=Здравствуйте!"
              target="_blank"
              aria-label="WhatsApp"
            >
              <Image
                src="/icons/whatsapp.svg"
                width={26}
                height={26}
                alt="WhatsApp"
                className="icon-theme"
              />
            </Link>
          </div>

          {/* Телефоны */}
          <div className="text-right leading-[1.25] text-[16px]">
            <a href="tel:+79633000650" className="block hover:opacity-70">
              +7 (963) 300-06-50
            </a>
            <a href="tel:+79112186175" className="block hover:opacity-70">
              +7 (911) 218-61-75
            </a>
          </div>

          <ThemeToggle />
        </div>
      </div>

      {/* ======================== MOBILE ======================== */}
      <div className="flex md:hidden max-w-[1300px] mx-auto px-6 py-4 items-center justify-between">
        {/* ЛОГО */}
        <Link href="/">
          <Image
            src="/logo-light.svg"
            width={70}
            height={70}
            alt="logo"
            className="block dark:hidden"
          />
          <Image
            src="/logo-dark.svg"
            width={70}
            height={70}
            alt="logo"
            className="hidden dark:block"
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* Мессенджеры */}
          <div className="flex items-center gap-2 text-[var(--foreground)]">
            <Link href="https://vk.com/club230725340" target="_blank">
              <Image
                src="/icons/vk.svg"
                width={20}
                height={20}
                alt="VK"
                className="icon-theme"
              />
            </Link>
            <Link
              href="https://wa.me/79633000650?text=Здравствуйте!"
              target="_blank"
            >
              <Image
                src="/icons/whatsapp.svg"
                width={20}
                height={20}
                alt="WhatsApp"
                className="icon-theme"
              />
            </Link>
          </div>

          {/* Телефоны */}
          <div className="flex flex-col text-right text-[13px] leading-[1.2]">
            <a href="tel:+79633000650" className="hover:opacity-70">
              +7 (963) 300-06-50
            </a>
            <a href="tel:+79112186175" className="hover:opacity-70">
              +7 (911) 218-61-75
            </a>
          </div>

          <ThemeToggle />

          {/* Бургер */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[6px] ml-2"
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
      </div>

      {/* ======================== MOBILE MENU ======================== */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t py-6 px-6 flex flex-col gap-5 text-lg shadow-inner">
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
            className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-black text-center font-semibold py-3 rounded-lg mt-2"
          >
            Записаться
          </Link>

          {/* Телефоны */}
          <div className="text-[17px] leading-[1.3]">
            <a href="tel:+79633000650" className="block">
              +7 (963) 300-06-50
            </a>
            <a href="tel:+79112186175" className="block">
              +7 (911) 218-61-75
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
