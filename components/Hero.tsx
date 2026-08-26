import SystemMap from './SystemMap';

/** Sistemas con los que trabaja — se listan bajo el héroe como firma técnica */
const domains = [
  'Oracle Simphony',
  'SAP Business ByDesign',
  'APIs REST',
  'OAuth 2.0',
  'Python',
];

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-shell px-6 pb-14 pt-12 sm:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-secondary">
            <span className="live-dot" />
            Disponible para nuevos proyectos
          </span>

          <h1 className="mt-6 font-display type-hero font-semibold text-primary">
            Conecto sistemas
            <br />
            que no se hablan
            <br />
            <span className="text-pulse">entre sí.</span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-secondary">
            Desarrollador de integraciones y automatización.{' '}
            <span className="text-primary">
              POS, ERP y APIs empresariales
            </span>{' '}
            — hago que los datos fluyan entre plataformas sin captura manual
            de por medio.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#casos" className="btn-primary">
              Ver casos
            </a>
            <a href="#contacto" className="btn-ghost">
              Contactar
            </a>
          </div>
        </div>

        {/* El diagrama es la tesis: ocupa más de la mitad del héroe */}
        <div className="lg:col-span-6">
          <div className="h-[300px] w-full sm:h-[400px] lg:h-[460px]">
            <SystemMap />
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="hairline" />
        <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 pt-5">
          {domains.map((d) => (
            <li key={d} className="font-mono text-xs text-muted">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
