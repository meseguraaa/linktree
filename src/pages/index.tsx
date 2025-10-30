export default function Home() {
  const links = [
    { label: "Site institucional", href: "#" },
    { label: "Plataforma", href: "#" },
    { label: "Graduação", href: "#" },
    { label: "Pós-graduação", href: "#" },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/meseguraaa", icon: "github" },
    {
      label: "Instagram",
      href: "https://instagram.com/brunoleal.h",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/brunoleal",
      icon: "linkedin",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-radial-fade text-zinc-100 px-4">
      {/* Avatar + Username */}
      <div className="flex flex-col items-center">
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-24 h-24 rounded-full border-2 border-zinc-700"
        />
        <span className="mt-4 text-zinc-800 font-medium">@BrunoLeal</span>
      </div>

      {/* Lista de links com microinterações */}
      <ul className="mt-10 w-full max-w-sm space-y-4">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="
                group relative block w-full overflow-hidden
                rounded-xl border border-white/10 bg-white/5 backdrop-blur
                px-6 h-12 flex items-center justify-center text-zinc-200 font-medium
                transition duration-300 ease-out
                hover:bg-white/10 hover:border-white/20
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                active:scale-[0.985]
                motion-reduce:transition-none motion-reduce:transform-none
              "
            >
              {/* brilho varrendo */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  -translate-x-full opacity-0
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  transition duration-500 ease-out
                  group-hover:opacity-100 group-hover:translate-x-full
                  motion-reduce:transition-none
                "
              />
              {/* halo suave */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0 rounded-xl
                  ring-0 group-hover:ring-1 ring-white/10
                  transition duration-300
                  motion-reduce:transition-none
                "
              />
              <span className="relative z-10 tracking-tight">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Ícones sociais com microinterações */}
      <div className="mt-8 flex items-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className="
              group grid place-items-center w-10 h-10 rounded-full border border-white/10 bg-white/5
              transition duration-300 ease-out
              hover:bg-white/10 hover:border-white/20
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
              active:scale-95
              motion-reduce:transition-none motion-reduce:transform-none
            "
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none">
              {s.icon === "github" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-zinc-800"
                >
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05 .9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 .1-2.71 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 7.82a9.6 9.6 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.2.71.1 1.61.05 2.71 0 3.85-2.35 4.69-4.58 4.94.36.31.69.92.69 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                </svg>
              )}
              {s.icon === "instagram" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-zinc-800"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              )}
              {s.icon === "linkedin" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-zinc-800"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.8h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.73 2.63 4.73 6.06V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21H9z" />
                </svg>
              )}
            </span>
          </a>
        ))}
      </div>

      {/* Rodapé */}
      <footer className="mt-8 mb-6 text-xs text-zinc-500">
        Feito com <span className="text-zinc-800">Next.js</span> +{" "}
        <span className="text-zinc-800">TailwindCSS</span>
      </footer>
    </main>
  );
}
