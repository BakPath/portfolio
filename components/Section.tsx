'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  /** Texto breve bajo el título, cuando la sección lo necesita */
  lead?: string;
  /** Última sección: el riel se desvanece en lugar de cortarse */
  last?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  last = false,
  className = 'py-20 lg:py-24',
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sin soporte de observer, mostramos el contenido sin animación. El
    // cambio de estado va en el frame siguiente y no en el cuerpo del efecto
    // para no encadenar un segundo render sincrónico apenas monta.
    if (typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={visible ? 'is-visible' : undefined}>
      <div className="mx-auto max-w-shell px-6">
        <div className="grid lg:grid-cols-[4.5rem_1fr]">
          <div
            aria-hidden="true"
            className={`rail hidden lg:block ${className} ${last ? 'rail-end' : ''}`}
          >
            <span className="rail-node" />
          </div>

          <div className={className}>
            <header className="reveal mb-10 max-w-2xl">
              <span className="node-label">{eyebrow}</span>
              <h2 className="mt-4 font-display type-section font-semibold text-primary">
                {title}
              </h2>
              {lead && (
                <p className="mt-4 text-base leading-relaxed text-secondary">
                  {lead}
                </p>
              )}
            </header>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
