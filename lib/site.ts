/**
 * Constantes de identidad del sitio.
 *
 * Viven aquí y no en app/layout.tsx porque hay tres consumidores que necesitan
 * las mismas: la metadata global, la metadata por post y el sitemap. El dominio
 * en particular tiene que ser absoluto —las etiquetas Open Graph no admiten
 * rutas relativas— y si cambia hay que recompilar y volver a subir.
 */

export const SITE_URL = 'https://bakpath.dev';

export const SITE_NAME = 'BakPath';

export const SITE_LOCALE = 'es_MX';

export const SITE_TITLE = 'BakPath - Nicolas Desarrollador';

export const SITE_DESCRIPTION =
  'Portafolio de desarrollo especializado en integraciones de sistemas empresariales (POS, ERP, APIs) y automatización de procesos.';

/**
 * Tarjeta de vista previa compartida por todas las páginas. Se apunta al .png
 * de public/ y no a la ruta opengraph-image de Next: esa genera un archivo sin
 * extensión, y Apache lo serviría con el MIME type equivocado. Ver
 * scripts/og-image.tsx para regenerarlo.
 */
export const OG_IMAGE = '/og.png';

export const OG_ALT =
  'BakPath — Nicolas Baak, desarrollador de integraciones y automatizaciones';
