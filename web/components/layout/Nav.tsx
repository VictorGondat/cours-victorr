"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const cours = [
  { href: "/theorie", label: "J1 — Théorie" },
  { href: "/j2", label: "J2 — Lancer le projet" },
  { href: "/brief#j3", label: "J3 — Tests & itération" },
  { href: "/brief#j4", label: "J4 — Finalisation" },
];

const otherLinks = [
  { href: "/brief", label: "Brief projet" },
  { href: "/ressources", label: "Ressources" },
  { href: "/groupes", label: "Groupes" },
];

const coursPaths = ["/theorie", "/j2"];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const coursActive = coursPaths.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

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
          <li>
            <Link
              href="/"
              className="block px-2 sm:px-3 py-2 transition-colors"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: pathname === "/" ? "#F97316" : "#8C8680",
              }}
            >
              Accueil
            </Link>
          </li>

          <li ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="block px-2 sm:px-3 py-2 transition-colors"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: coursActive || open ? "#F97316" : "#8C8680",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              aria-haspopup="true"
              aria-expanded={open}
            >
              Cours <span style={{ marginLeft: "0.25rem" }}>▾</span>
            </button>
            {open && (
              <div
                role="menu"
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  right: 0,
                  minWidth: "220px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  borderRadius: "2px",
                  padding: "0.5rem 0",
                  zIndex: 60,
                }}
              >
                {cours.map((c) => {
                  const active =
                    c.href.startsWith("/theorie") || c.href.startsWith("/j2")
                      ? pathname.startsWith(c.href.split("#")[0])
                      : false;
                  return (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="block transition-colors"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: active ? "#F97316" : "#2D2926",
                        padding: "0.6rem 1rem",
                      }}
                    >
                      {c.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </li>

          {otherLinks.map((l) => {
            const active = pathname.startsWith(l.href);
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
