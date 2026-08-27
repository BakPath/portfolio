// Fuente de la imagen de vista previa (public/og.png).
//
// Vive fuera de app/ a propósito: viene del tiempo del export estático, cuando
// la ruta opengraph-image dejaba un archivo sin extensión que Apache servía con
// el MIME type equivocado y las vistas previas de LinkedIn/WhatsApp rechazaban.
// Se mantiene el .png en public/ porque ya funciona y no depende de cómo lo
// sirva el host.
//
// Para regenerarla (procedimiento verificado: reproduce public/og.png byte a
// byte):
//
//   cp scripts/og-image.tsx app/opengraph-image.tsx
//   npm run dev
//   curl -o public/og.png http://localhost:3000/opengraph-image
//   rm app/opengraph-image.tsx
//
// El paso viejo por `out/opengraph-image` ya no aplica: ese directorio solo
// existía con output: 'export', que se quitó al pasar a app Node.

import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt =
  'BakPath — Nicolas Baak, desarrollador de integraciones y automatizaciones';

// Tokens tomados de app/globals.css para que la tarjeta se vea como el sitio.
const INK = '#070C15';
const BORDER = '#1E2B40';
const PRIMARY = '#E8ECF4';
const SECONDARY = '#93A3BF';
const MUTED = '#5F6E8A';
const PULSE = '#FF8A3D';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: INK,
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 30, fontWeight: 700 }}>
          <span style={{ color: PRIMARY }}>Bak</span>
          <span style={{ color: PULSE }}>Path</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 20,
              letterSpacing: 4,
              color: MUTED,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: PULSE,
                marginRight: 16,
              }}
            />
            INTEGRACIONES · AUTOMATIZACIÓN
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 28,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.12,
              color: PRIMARY,
            }}
          >
            <span>Conecto sistemas</span>
            {/* Satori colapsa el espacio antes de un span anidado, así que la
                línea va como fila con separación explícita. */}
            <div style={{ display: 'flex' }}>
              <span>que no se hablan</span>
              <span style={{ color: PULSE, marginLeft: 22 }}>entre sí.</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 32,
            fontSize: 26,
          }}
        >
          <span style={{ color: SECONDARY }}>Nicolas Baak</span>
          <span style={{ color: MUTED }}>Oracle Simphony · ERP · APIs REST</span>
        </div>
      </div>
    ),
    size,
  );
}
