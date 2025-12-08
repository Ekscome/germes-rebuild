(function () {
  try {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      return;
    }
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      return;
    }

    // Если не сохранено → берём системную тему
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  } catch (e) {}
})();
