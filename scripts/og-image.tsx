// Fuente de la imagen de vista previa (public/og.png).
//
// Vive fuera de app/ a propósito: como ruta de Next generaba un archivo sin
// extensión, que Apache sirve con el MIME type equivocado y las vistas previas
// de LinkedIn/WhatsApp rechazan.
//
// Para regenerarla: mueve este archivo a app/opengraph-image.tsx, corre
// `npm run build`, copia out/opengraph-image a public/og.png y vuelve a
// sacarlo de app/.

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
          <span style={{ color: MUTED }}>Oracle Simphony · SAP · APIs REST</span>
        </div>
      </div>
    ),
    size,
  );
}
