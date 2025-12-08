"use client";

import { useState } from "react";

export default function CookiesBanner() {
  const [accepted, setAccepted] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return Boolean(localStorage.getItem("cookies-accepted"));
    }
    return true; // SSR — скрываем баннер
  });

  function acceptCookies() {
    localStorage.setItem("cookies-accepted", "true");
    setAccepted(true);
  }

  if (accepted) return null;

  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 z-[999]
        w-[90%] md:w-auto animate-fade-in
      "
    >
      <div
        className="
          px-6 py-4 max-w-xl rounded-xl shadow-lg border
          bg-[#ececec] border-gray-300
          !text-gray-700 dark:!text-gray-300
          dark:bg-[var(--surface-strong)] dark:border-gray-700
        "
      >
        <p
          className="
            text-sm leading-relaxed mb-3
            !text-gray-700 dark:!text-gray-300
          "
        >
          Мы используем cookies для улучшения работы сайта и удобства
          пользователей.
        </p>

        <button
          onClick={acceptCookies}
          className="
            px-4 py-2 rounded-lg font-medium transition
            bg-black text-white hover:bg-gray-800
            dark:bg-white dark:text-black dark:hover:bg-gray-300
          "
        >
          Принять
        </button>
      </div>
    </div>
  );
}
