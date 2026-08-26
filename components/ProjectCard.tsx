import type { Project } from '@/lib/projects';

function StatusPill({ status }: { status: Project['status'] }) {
  const live = status === 'producción';
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
        live
          ? 'border-live/35 bg-live/5 text-live'
          : 'border-border text-muted'
      }`}
    >
      {live && <span className="h-1.5 w-1.5 rounded-full bg-live" />}
      {status}
    </span>
  );
}

/** Problema / Solución / Resultado como filas etiquetadas, no como párrafos sueltos */
function TraceRow({ label, children }: { label: string; children: string }) {
  return (
    <div className="grid gap-1 border-t border-border/70 py-3.5 sm:grid-cols-[7rem_1fr] sm:gap-5">
      <span className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      <p className="text-sm leading-relaxed text-secondary">{children}</p>
    </div>
  );
}

function StackTags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span
          key={s}
          className="rounded border border-border bg-ink/40 px-2 py-0.5 font-mono text-[11px] text-secondary"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-pulse/40 ${
        featured ? 'p-7 sm:p-9' : 'p-6 sm:p-7'
      }`}
    >
      {/* filo superior que se enciende al pasar el cursor */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pulse to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70"
      />

      {featured ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12">
          <div className="flex flex-col">
            <StatusPill status={project.status} />
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-primary">
              {project.title}
            </h3>
            <div className="mt-6 lg:mt-auto lg:pt-8">
              <StackTags items={project.stack} />
            </div>
          </div>
          <div>
            <TraceRow label="Problema">{project.problem}</TraceRow>
            <TraceRow label="Solución">{project.solution}</TraceRow>
            <TraceRow label="Resultado">{project.result}</TraceRow>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-lg font-semibold leading-snug text-primary">
              {project.title}
            </h3>
            <StatusPill status={project.status} />
          </div>
          <div className="mt-5">
            <TraceRow label="Problema">{project.problem}</TraceRow>
            <TraceRow label="Solución">{project.solution}</TraceRow>
            <TraceRow label="Resultado">{project.result}</TraceRow>
          </div>
          <div className="mt-5">
            <StackTags items={project.stack} />
          </div>
        </>
      )}
    </article>
  );
}
