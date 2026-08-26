import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Se despliega como app Node en Hostinger (npm run build + npm start),
  // así que no se usa output: 'export'.

  // El optimizador de imágenes queda apagado a propósito: exige sharp en el
  // servidor y la única foto ya pesa 23 KB, así que no aporta nada.
  images: { unoptimized: true },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
