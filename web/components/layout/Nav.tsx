"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/theorie", label: "Théorie J1" },
  { href: "/brief", label: "Brief projet" },
  { href: "/ressources", label: "Ressources" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="px-6 sm:px-8 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            letterSpacing: "0.04em",
            color: "#1A1714",
          }}
        >
          COURS<span style={{ color: "#F97316" }}>.</span>VICTORR
        </Link>
        <ul className="flex items-center gap-1 sm:gap-3">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block px-2 sm:px-3 py-2 transition-colors"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: active ? "#F97316" : "#8C8680",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
