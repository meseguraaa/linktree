"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Alternar tema"
      className={[
        "group inline-flex items-center rounded-full transition-all duration-300",
        "h-8 w-16 px-1 shadow-sm hover:shadow backdrop-blur",
        "border border-black bg-white/80",
        "dark:border-white dark:bg-white/10",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60",
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300",
          isDark
            ? "translate-x-8 bg-white text-black"
            : "translate-x-0 bg-black text-white",
          "border border-transparent",
        ].join(" ")}
      >
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4.5 h-4.5"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4.5 h-4.5"
          >
            <path
              fillRule="evenodd"
              d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1.5a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1Zm0-19a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm10 9a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H21a1 1 0 0 1 1 1ZM4.5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1Zm13.657 7.071a1 1 0 0 1-1.414 0l-1.06-1.06a1 1 0 1 1 1.414-1.415l1.06 1.06a1 1 0 0 1 0 1.415ZM7.317 7.317a1 1 0 0 1-1.415 0l-1.06-1.06A1 1 0 1 1 6.257 4.84l1.06 1.06a1 1 0 0 1 0 1.416Zm10.928-3.182a1 1 0 0 1 0 1.414l-1.06 1.06A1 1 0 1 1 15.77 5.195l1.06-1.06a1 1 0 0 1 1.415 0ZM7.317 16.683a1 1 0 0 1 0 1.415l-1.06 1.06a1 1 0 1 1-1.415-1.414l1.06-1.06a1 1 0 0 1 1.415 0Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
