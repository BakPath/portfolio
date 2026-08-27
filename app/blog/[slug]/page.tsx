import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getPostSlugs } from '@/lib/posts';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, 'utf8'));
  return { title: `${data.title} — BakPath`, description: data.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(source);

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
            {(data.tags ?? []).map((tag: string) => (
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
