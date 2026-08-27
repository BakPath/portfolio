'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/#perfil', label: 'Perfil' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#casos', label: 'Casos' },
  { href: '/blog', label: 'Blog' },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M4 4l10 10" />
          <path d="M14 4L4 14" />
        </>
      ) : (
        <>
          <path d="M2.5 5h13" />
          <path d="M2.5 9h13" />
          <path d="M2.5 13h13" />
        </>
      )}
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape cierra el panel: es un menú, no debe atrapar al usuario dentro
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Con el panel abierto la barra necesita fondo aunque no se haya hecho
  // scroll, o los enlaces se leen encima del contenido de la página.
  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-border bg-ink/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-sm font-semibold tracking-tight text-primary"
        >
          Bak<span className="text-pulse">Path</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-secondary transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <Link
            href="/#contacto"
            onClick={() => setOpen(false)}
            className="rounded-full border border-pulse/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-pulse transition-colors hover:bg-pulse hover:text-ink"
          >
            Hablemos
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="-mr-2 inline-flex h-9 w-9 items-center justify-center rounded-md text-secondary transition-colors hover:text-primary md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      {/* Debajo de md los enlaces no caben en la barra; sin este panel el blog
          y las secciones no tendrían ningún punto de entrada en teléfono. */}
      <div id="menu-movil" hidden={!open} className="md:hidden">
        <ul className="border-t border-border bg-ink/95 px-6 backdrop-blur-md">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-secondary transition-colors last:border-b-0 hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
