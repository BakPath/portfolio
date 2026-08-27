import Section from './Section';

const groups = [
  {
    label: 'Integraciones / APIs',
    items: ['REST', 'OAuth 2.0', 'Webhooks', 'JSON / XML'],
  },
  {
    label: 'Sistemas empresariales',
    items: ['Oracle Simphony', 'ERP', 'EMC'],
  },
  {
    label: 'Automatización',
    items: ['Scripts a medida', 'ETL', 'Procesamiento de documentos'],
  },
  {
    label: 'Lenguajes / Herramientas',
    items: ['Python', 'JavaScript / TypeScript', 'SQL', 'Git'],
  },
];

/**
 * Hoja de especificación, no cuadrícula de tarjetas: la etiqueta del grupo
 * a la izquierda y las piezas a la derecha, separadas por reglas finas.
 */
export default function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Con qué trabajo"
      className="py-16 lg:py-20"
    >
      <div className="reveal">
        {groups.map((g) => (
          <div
            key={g.label}
            className="grid gap-3 border-t border-border py-6 last:border-b md:grid-cols-[16rem_1fr] md:gap-10"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-pulse">
              {g.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-secondary transition-colors hover:border-secondary/50 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
