"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      {/** ======================== DESKTOP HEADER ======================== **/}
      <div
        className="
          hidden md:flex
          max-w-[1300px]
          mx-auto
          px-6
          py-4
          items-center
          justify-center
          gap-16
        "
      >
        {/* ЛЕВАЯ ЧАСТЬ — ЛОГО + МЕНЮ */}
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="HermesTO logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8 text-[17px] font-medium">
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

        {/* ЦЕНТР — КНОПКА "Записаться" */}
        <div className="hidden md:block">
          <Link
            href="/contacts"
            className="bg-[#f2c94c] hover:bg-[#e5b93f] transition text-black font-semibold py-2 px-6 rounded-lg"
          >
            Записаться
          </Link>
        </div>

        {/* ПРАВАЯ ЧАСТЬ — ИКОНКИ + ТЕЛЕФОНЫ */}
        <div className="hidden md:flex items-start gap-3 text-right">
          <div className="flex items-center gap-2 mt-[2px]">
            <a href="https://t.me/" target="_blank">
              <Image
                src="/icons/telegram.svg"
                alt="Telegram"
                width={26}
                height={26}
              />
            </a>
            <a href="https://wa.me/" target="_blank">
              <Image
                src="/icons/whatsapp.svg"
                alt="Whatsapp"
                width={26}
                height={26}
              />
            </a>
          </div>

          <div className="leading-[1.25] text-[16px]">
            <a
              href="tel:+70000000000"
              className="hover:opacity-70 transition block"
            >
              +7 (000) 000-00-00
            </a>
            <a
              href="tel:+79990000000"
              className="hover:opacity-70 transition block"
            >
              +7 (999) 000-00-00
            </a>
          </div>
        </div>
      </div>

      {/** ======================== MOBILE TOP BAR ======================== **/}
      <div
        className="
    flex md:hidden
    max-w-[1300px]
    mx-auto
    px-6
    py-4
    items-center
    justify-between
  "
      >
        {/* ЛОГО */}
        <Link href="/">
          <Image
            src="/logotrans.png"
            alt="HermesTO logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* ИКОНКИ + ТЕЛЕФОНЫ */}
        <div className="flex items-center gap-3">
          {/* Иконки мессенджеров */}
          <div className="flex items-center gap-2">
            <a href="https://t.me/" target="_blank">
              <Image
                src="/icons/telegram.svg"
                alt="Telegram"
                width={22}
                height={22}
              />
            </a>

            <a href="https://wa.me/" target="_blank">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={22}
                height={22}
              />
            </a>
          </div>

          {/* Телефоны */}
          <div className="flex flex-col text-right text-[14px] leading-[1.2]">
            <a href="tel:+70000000000" className="hover:opacity-70 transition">
              +7 (000) 000-00-00
            </a>
            <a href="tel:+79990000000" className="hover:opacity-70 transition">
              +7 (999) 000-00-00
            </a>
          </div>
        </div>

        {/* БУРГЕР */}
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

      {/** ======================== MOBILE DROPDOWN MENU ======================== **/}
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
            className="bg-[#f2c94c] hover:bg-[#e5b93f] transition text-black text-center font-semibold py-3 rounded-lg mt-2"
          >
            Записаться
          </Link>

          {/* Телефоны */}
          <div className="text-[17px] leading-[1.3]">
            <a href="tel:+70000000000" className="block">
              +7 (000) 000-00-00
            </a>
            <a href="tel:+79990000000" className="block">
              +7 (999) 000-00-00
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
