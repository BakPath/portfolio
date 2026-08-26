export type Project = {
  slug: string;
  title: string;
  status: 'producción' | 'demo';
  stack: string[];
  problem: string;
  solution: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: 'sts-gen2-integration',
    title: 'Integración STS Gen 2 — Oracle Simphony',
    status: 'producción',
    stack: ['REST', 'OAuth 2.0', 'Simphony EMC'],
    problem:
      'Los sistemas de punto de venta de las propiedades necesitaban intercambiar datos de transacciones con la plataforma central sin intervención manual.',
    solution:
      'Configuración e integración vía la API STS Gen 2 de Oracle Simphony, incluyendo autenticación OAuth y mapeo de datos entre entornos.',
    result:
      'Flujo de datos automatizado entre punto de venta y sistema central, validado en pruebas UAT antes de salir a producción.',
  },
  {
    slug: 'pdf-invoice-extractor',
    title: 'Extractor automático de facturas en PDF',
    status: 'producción',
    stack: ['Python', 'Procesamiento de documentos', 'Reportes'],
    problem:
      'Las facturas llegaban por correo y se procesaban manualmente, lo que consumía tiempo y generaba errores de captura.',
    solution:
      'Herramienta que detecta correos con facturas adjuntas, extrae los datos relevantes del PDF y genera reportes estructurados automáticamente.',
    result:
      'Eliminación de la captura manual y reportes consistentes disponibles de forma automática.',
  },
  {
    slug: 'sap-byd-support',
    title: 'Soporte e integraciones SAP Business ByDesign',
    status: 'producción',
    stack: ['SAP ByD', 'Integraciones', 'Soporte técnico'],
    problem:
      'Los procesos internos requerían que distintos módulos y sistemas externos se mantuvieran sincronizados con el entorno SAP.',
    solution:
      'Soporte técnico continuo y desarrollo de integraciones entre SAP Business ByDesign y otras herramientas internas.',
    result:
      'Casos de soporte resueltos y sistemas manteniendo consistencia de datos entre plataformas.',
  },
];
