'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/#perfil', label: 'Perfil' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#casos', label: 'Casos' },
  { href: '/blog', label: 'Blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-ink/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-4">
        <Link
          href="/"
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

        <Link
          href="/#contacto"
          className="rounded-full border border-pulse/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-pulse transition-colors hover:bg-pulse hover:text-ink"
        >
          Hablemos
        </Link>
      </nav>
    </header>
  );
}
