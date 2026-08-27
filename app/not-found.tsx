import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Página no encontrada — ${SITE_NAME}`,
};

/**
 * 404 del sitio. Sin este archivo Next cae en su pantalla por defecto —fondo
 * blanco, sin Nav ni Footer— que rompe el hilo con el resto del portafolio.
 * La sirve tanto una URL inexistente como un slug de post desconocido, porque
 * app/blog/[slug] declara dynamicParams = false.
 */
export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-shell px-6 py-24 lg:py-32">
        <div className="max-w-xl">
          <span className="node-label">Error 404</span>
          <h1 className="mt-4 font-display type-section font-semibold text-primary">
            Esta ruta no lleva a ningún lado
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-secondary">
            La página que buscas no existe o cambió de dirección. Los caminos
            que sí llevan a algún lado:
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className="btn-primary">
              Ir al inicio
            </Link>
            <Link href="/blog" className="btn-ghost">
              Ver las notas
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
