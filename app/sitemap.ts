import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { SITE_URL } from '@/lib/site';

/**
 * Se genera al compilar, leyendo los mismos .mdx que el blog: un post nuevo
 * entra al sitemap solo, sin registrarlo en ningún lado.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // getAllPosts ordena por fecha descendente, así que el primero marca la
  // última vez que el índice cambió.
  const ultimaNota = posts[0] ? new Date(posts[0].date) : new Date();

  return [
    {
      url: SITE_URL,
      lastModified: ultimaNota,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: ultimaNota,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
