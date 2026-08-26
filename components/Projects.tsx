import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/projects';

export default function Projects() {
  const [lead, ...rest] = projects;

  return (
    <Section
      id="casos"
      eyebrow="Casos"
      title="Sistemas que puse a hablar"
      lead="Cada caso, en los términos que importan: qué estaba roto, qué construí y qué cambió después."
    >
      {/* El primer caso ocupa el ancho completo; así los tres encajan sin huecos */}
      <div className="reveal">
        <ProjectCard project={lead} featured />
      </div>
      <div className="reveal mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
