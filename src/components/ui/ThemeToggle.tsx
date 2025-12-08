"use client";

import { useState, useEffect, useLayoutEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // --- FIX: React 19 безопасное определение темы ---
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    setMounted(true);

    // читаем текущую тему, установленную theme.js
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  if (!mounted) return null;

  function toggle() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Переключить тему"
      className="
        w-12 h-12 flex items-center justify-center 
        rounded-lg hover:bg-[var(--surface-strong)] transition
      "
    >
      {theme === "light" ? (
        // 🌙 ЛУНА (для светлой темы)
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-blue-400 transition-all duration-500 transform group-hover:rotate-[-20deg]"
        >
          <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 17a7 7 0 009-4.21z" />
        </svg>
      ) : (
        // ☀️ СОЛНЦЕ (для темной темы)
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-yellow-400 transition-all duration-500 transform group-hover:rotate-90"
        >
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2v2m0 16v2m10-10h-2M4 12H2m15.07 7.07l1.41 1.41M5.52 5.52L4.11 4.11m14.96 0l1.41 1.41M4.11 19.89l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}
