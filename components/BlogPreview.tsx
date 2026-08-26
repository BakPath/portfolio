import Link from 'next/link';
import Section from './Section';
import { getAllPosts } from '@/lib/posts';

/** Lista con reglas finas, no tarjetas: diferencia las notas de los casos. */
export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Section
      id="notas"
      eyebrow="Notas"
      title="Escribo lo que aprendo"
      className="py-16 lg:py-20"
    >
      <div className="reveal">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group grid items-baseline gap-2 border-t border-border py-6 transition-colors last:border-b hover:border-pulse/40 sm:grid-cols-[7rem_1fr_auto] sm:gap-8"
          >
            <time
              dateTime={post.date}
              className="font-mono text-xs text-muted"
            >
              {new Date(post.date).toLocaleDateString('es-MX', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <div>
              <p className="font-display text-lg font-medium leading-snug text-primary transition-colors group-hover:text-pulse">
                {post.title}
              </p>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="hidden font-mono text-sm text-muted transition-all group-hover:translate-x-1 group-hover:text-pulse sm:block"
            >
              →
            </span>
          </Link>
        ))}
      </div>

      <Link
        href="/blog"
        className="reveal mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-pulse transition-opacity hover:opacity-75"
      >
        Todas las notas
        <span aria-hidden="true">→</span>
      </Link>
    </Section>
  );
}
