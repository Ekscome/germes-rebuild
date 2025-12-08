"use client";

import { useSyncExternalStore } from "react";

// Подписка на изменения темы
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

// Текущая тема (читает DOM)
function getSnapshot() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// Тема на сервере (SSR)
function getServerSnapshot() {
  return "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";

    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);

    // Запустить обновление во всех вкладках
    window.dispatchEvent(new StorageEvent("storage"));
  };

  return (
    <button onClick={toggleTheme} className="p-2">
      <span className="text-lg">{theme === "light" ? "☀️" : "🌙"}</span>
    </button>
  );
}
