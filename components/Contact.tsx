import Section from './Section';

const channels = [
  { label: 'Correo', value: 'nicolas123alejandro@gmail.com', href: 'mailto:nicolas123alejandro@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nicolas-alejandro-baak-poot-b98b3a166',
    href: 'https://www.linkedin.com/in/nicolas-alejandro-baak-poot-b98b3a166/',
  },
  { label: 'GitHub', value: 'github.com/BakPath', href: 'https://github.com/BakPath' },
];

export default function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="¿Tienes dos sistemas que no se hablan?"
      lead="Cuéntame qué necesitas conectar o qué proceso ya es hora de automatizar, y lo revisamos."
      last
      className="py-20 lg:py-28"
    >
      <div className="reveal overflow-hidden rounded-xl border border-border bg-surface">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.href.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="group flex flex-col gap-1.5 border-b border-border px-6 py-5 transition-colors last:border-b-0 hover:bg-raised sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {c.label}
            </span>
            <span className="flex items-center gap-3 break-all font-mono text-sm text-primary transition-colors group-hover:text-pulse">
              {c.value}
              <span
                aria-hidden="true"
                className="text-muted transition-all group-hover:translate-x-0.5 group-hover:text-pulse"
              >
                →
              </span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
