import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Hosting estático (Hostinger): genera HTML plano en out/ en lugar de
  // necesitar un servidor Node.
  output: 'export',

  // Cada ruta queda como carpeta/index.html para que Apache la sirva sin
  // reglas de rewrite.
  trailingSlash: true,

  // El optimizador de imágenes de Next necesita servidor; en export se
  // sirven tal cual (la foto ya viene comprimida a 23 KB).
  images: { unoptimized: true },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
