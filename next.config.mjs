import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Se despliega como app Node en Hostinger (npm run build + npm start),
  // así que no se usa output: 'export'.

  // El optimizador de imágenes queda apagado a propósito: exige sharp en el
  // servidor y la única foto ya pesa 23 KB, así que no aporta nada.
  images: { unoptimized: true },
};

// Los plugins van por nombre y no importados: desde Next 16 el build usa
// Turbopack, que serializa las opciones del loader para repartirlas entre
// procesos, y una función importada no es serializable. Turbopack los
// resuelve por su cuenta a partir del string.
const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-frontmatter'], ['remark-gfm']],
    rehypePlugins: [['rehype-highlight']],
  },
});

export default withMDX(nextConfig);
