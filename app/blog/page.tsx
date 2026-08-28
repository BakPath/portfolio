import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/posts';
import { OG_ALT, OG_IMAGE, SITE_LOCALE, SITE_NAME } from '@/lib/site';

const TITULO = `Notas — ${SITE_NAME}`;
const DESCRIPCION =
  'Notas técnicas sobre integraciones, automatización y sistemas empresariales.';

// Sin openGraph propio esta página heredaba la tarjeta del home, así que
// compartir el enlace del blog mostraba la portada del portafolio.
export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: '/blog',
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITULO,
    description: DESCRIPCION,
    images: [{ url: OG_IMAGE, alt: OG_ALT }],
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-shell px-6 py-16 lg:py-24">
        <header className="max-w-2xl">
          <span className="node-label">Notas</span>
          <h1 className="mt-4 font-display type-section font-semibold text-primary">
            Escribo lo que aprendo
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-secondary">
            Apuntes sobre integraciones, automatización y sistemas
            empresariales — lo que me habría gustado leer antes de resolverlo.
          </p>
        </header>

        <div className="mt-14">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid gap-3 border-t border-border py-7 transition-colors last:border-b hover:border-pulse/40 sm:grid-cols-[8rem_1fr] sm:gap-10"
            >
              <time
                dateTime={post.date}
                className="pt-1 font-mono text-xs text-muted"
              >
                {new Date(post.date).toLocaleDateString('es-MX', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>
              <div>
                <p className="font-display text-xl font-medium leading-snug text-primary transition-colors group-hover:text-pulse">
                  {post.title}
                </p>
                <p className="mt-2 max-w-2xl leading-relaxed text-secondary">
                  {post.excerpt}
                </p>
                {post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
