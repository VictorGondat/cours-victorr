export function Footer() {
  return (
    <footer
      className="px-6 sm:px-8 py-10 mt-16"
      style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8C8680",
          }}
        >
          cours.victorr.fr — ynov 2026
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            fontSize: "0.95rem",
            color: "#8C8680",
          }}
        >
          Construit en direct pendant le cours, pour le cours.
        </div>
      </div>
    </footer>
  );
}
