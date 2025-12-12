"use client";

import { useState } from "react";

const COOKIE_KEY = "germesto_cookies_accepted";

export default function CookiesBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem(COOKIE_KEY);
  });

  function acceptCookies() {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] flex justify-center">
      <div
        className="
          max-w-[900px]
          w-full
          rounded-2xl
          border border-(--border)
          bg-(--surface)/25
          backdrop-blur-sm
          shadow-lg
          p-4 md:p-5
          flex flex-col md:flex-row
          items-start md:items-center
          gap-4
        "
      >
        {/* Текст */}
        <p className="text-sm opacity-80 leading-relaxed">
          Мы используем cookies, чтобы сайт работал стабильнее и удобнее для
          вас. Продолжая использовать сайт, вы соглашаетесь с их применением.
        </p>

        {/* Кнопка */}
        <button
          onClick={acceptCookies}
          className="
            shrink-0
            px-5 py-2
            rounded-xl
            bg-[#FFB400]
            text-black
            text-sm font-medium
            hover:brightness-95
            transition
          "
        >
          Понятно
        </button>
      </div>
    </div>
  );
}
