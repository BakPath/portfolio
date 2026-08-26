export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-shell flex-col items-center justify-between gap-3 px-6 py-9 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} · BakPath</p>
        <p className="flex items-center gap-2">
          <span className="live-dot" />
          construido con Next.js
        </p>
      </div>
    </footer>
  );
}
