import Image from 'next/image';
import Section from './Section';

const focus = [
  {
    title: 'Integración de sistemas dispares',
    detail: 'POS, ERP y herramientas internas intercambiando datos por API.',
  },
  {
    title: 'Automatización de procesos manuales',
    detail: 'Lo que hoy se captura a mano pasa a correr solo.',
  },
  {
    title: 'Soporte técnico y UAT',
    detail: 'Desde la configuración en EMC hasta el soporte en producción.',
  },
];

export default function About() {
  return (
    <Section id="perfil" eyebrow="Perfil" title="Trabajo del lado técnico">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div className="reveal">
          <div className="mb-8 flex items-center gap-5">
            <Image
              src="/nicolas.jpg"
              alt="Retrato de Nicolas Baak"
              width={400}
              height={400}
              sizes="96px"
              className="h-20 w-20 shrink-0 rounded-xl border border-border object-cover sm:h-24 sm:w-24"
            />
            <div>
              <p className="font-display text-base font-medium text-primary">
                Nicolas Baak
              </p>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Integraciones · Automatización
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-secondary">
            Conecto plataformas de punto de venta{' '}
            <span className="text-primary">(Oracle Simphony)</span>, entornos{' '}
            <span className="text-primary">SAP</span> y herramientas internas
            para que la información se mueva automáticamente entre ellas — sin
            hojas de cálculo intermedias ni procesos manuales repetitivos.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-secondary">
            Me involucro en el ciclo completo: configuración, pruebas UAT y
            soporte una vez que el sistema ya está en producción.
          </p>
        </div>

        <ul className="reveal space-y-0">
          {focus.map((f) => (
            <li
              key={f.title}
              className="group border-t border-border py-5 last:border-b"
            >
              <div className="flex items-baseline gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse/60 transition-colors group-hover:bg-pulse" />
                <div>
                  <p className="font-display text-base font-medium text-primary">
                    {f.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {f.detail}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
