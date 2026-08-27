import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getPost, getPostSlugs } from '@/lib/posts';
import { OG_ALT, OG_IMAGE, SITE_LOCALE, SITE_NAME } from '@/lib/site';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

// Los posts son archivos en el repo: fuera de los que generateStaticParams
// devuelve no hay nada que renderizar, así que un slug desconocido va directo
// al 404 en vez de intentar un render en el servidor.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;

  return {
    title: `${post.title} — ${SITE_NAME}`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [{ url: OG_IMAGE, alt: OG_ALT }],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const data = getPost(params.slug);

  if (!data) {
    notFound();
  }

  // @next/mdx permite importar el archivo .mdx directamente como componente
  const { default: PostContent } = await import(
    `@/content/blog/${params.slug}.mdx`
  );

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-pulse"
        >
          <span aria-hidden="true">←</span> Notas
        </Link>

        <header className="mt-8">
          <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-primary sm:text-4xl">
            {data.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <time
              dateTime={data.date}
              className="font-mono text-xs text-muted"
            >
              {new Date(data.date).toLocaleDateString('es-MX', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                timeZone: 'UTC',
              })}
            </time>
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="hairline mt-8" />

        <article className="post mt-10">
          <PostContent />
        </article>
      </main>
      <Footer />
    </>
  );
}
