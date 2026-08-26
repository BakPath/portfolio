import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

// Las etiquetas Open Graph necesitan URLs absolutas, así que el dominio vive
// aquí. Si cambia, hay que recompilar y volver a subir.
const SITE_URL = 'https://bakpath.dev';

const TITLE = 'BakPath - Nicolas Desarrollador';
const DESCRIPTION =
  'Portafolio de desarrollo especializado en integraciones de sistemas empresariales (POS, ERP, APIs) y automatización de procesos.';
const OG_ALT =
  'BakPath — Nicolas Baak, desarrollador de integraciones y automatizaciones';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'BakPath',
    locale: 'es_MX',
    type: 'website',
    // Se apunta al .png de public/ y no a la ruta opengraph-image de Next:
    // esa genera un archivo sin extensión, y Apache lo serviría con el MIME
    // type equivocado. Ver app/opengraph-image.tsx para regenerarlo.
    images: [{ url: '/og.png', width: 1200, height: 630, alt: OG_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og.png', alt: OG_ALT }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        {/* Sin JS no hay observer que revele las secciones: se muestran ya
            visibles. Va en noscript para no tocar el DOM antes de hidratar. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
