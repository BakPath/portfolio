import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export type PostMeta = {
  slug: string;
  title: string;
  /** Fecha ISO (YYYY-MM-DD) del front-matter. Se parsea como medianoche UTC,
   *  así que hay que formatearla con timeZone: 'UTC' o retrocede un día en
   *  zonas negativas. */
  date: string;
  excerpt: string;
  tags: string[];
};

/** Los slugs vienen de nombres de archivo, así que no llevan separadores de
 *  ruta. Se valida antes de tocar el disco para que un slug de la URL no pueda
 *  construir una ruta fuera de content/blog. */
const SLUG_VALIDO = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;

function archivosDePosts(): string[] {
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));
}

function leerPost(filename: string): PostMeta {
  const source = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
  const { data } = matter(source);

  return {
    slug: filename.replace(/\.mdx$/, ''),
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tags: data.tags ?? [],
  };
}

export function getAllPosts(): PostMeta[] {
  return archivosDePosts()
    .map(leerPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  return archivosDePosts().map((f) => f.replace(/\.mdx$/, ''));
}

/** Front-matter de un post. Devuelve null si el slug no existe, para que la
 *  ruta decida (notFound) en vez de reventar. */
export function getPost(slug: string): PostMeta | null {
  if (!SLUG_VALIDO.test(slug)) return null;

  const filename = `${slug}.mdx`;
  if (!fs.existsSync(path.join(POSTS_DIR, filename))) return null;

  return leerPost(filename);
}
