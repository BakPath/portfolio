/**
 * Diagrama de integración: sistemas de origen -> punto de sincronía -> salidas.
 * Es la tesis de la página, así que se dibuja a escala grande y con los
 * sistemas reales del stack, no con nodos genéricos.
 */

const inputs = [
  { id: 'pos', label: 'Simphony POS', y: 56 },
  { id: 'sap', label: 'SAP ByD', y: 152 },
  { id: 'api', label: 'API REST', y: 288 },
  { id: 'pdf', label: 'Facturas PDF', y: 384 },
];

const outputs = [
  { id: 'sync', label: 'Datos en sync', y: 150 },
  { id: 'rep', label: 'Reportes', y: 290 },
];

const HUB_X = 352;
const HUB_Y = 220;
const HUB_R = 48;

const inPath = (y: number) =>
  `M 144 ${y} C 250 ${y}, 250 ${HUB_Y}, ${HUB_X - HUB_R - 4} ${HUB_Y}`;

const outPath = (y: number) =>
  `M ${HUB_X + HUB_R + 4} ${HUB_Y} C 452 ${HUB_Y}, 452 ${y}, 492 ${y}`;

function NodeBox({
  x,
  y,
  w,
  label,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y - 17}
        width={w}
        height="34"
        rx="7"
        fill="#0D1524"
        stroke="#1E2B40"
      />
      <text
        x={x + w / 2}
        y={y + 4}
        textAnchor="middle"
        fontFamily="var(--font-mono), monospace"
        fontSize="10.5"
        fill="#93A3BF"
      >
        {label}
      </text>
    </g>
  );
}

export default function SystemMap() {
  return (
    <svg
      viewBox="0 0 640 440"
      className="h-full w-full"
      role="img"
      aria-label="Diagrama: Simphony POS, SAP Business ByDesign, API REST y facturas PDF convergen en un punto de sincronía que emite datos sincronizados y reportes."
    >
      <defs>
        {inputs.map((n) => (
          <path key={`d-${n.id}`} id={`trace-${n.id}`} d={inPath(n.y)} />
        ))}
        {outputs.map((n) => (
          <path key={`d-${n.id}`} id={`trace-${n.id}`} d={outPath(n.y)} />
        ))}
      </defs>

      {/* trazos en reposo */}
      {[...inputs, ...outputs].map((n) => (
        <use
          key={`line-${n.id}`}
          href={`#trace-${n.id}`}
          fill="none"
          stroke="#1E2B40"
          strokeWidth="1.5"
        />
      ))}

      {/* paquetes de datos viajando por cada trazo */}
      {[...inputs, ...outputs].map((n, i) => (
        <circle
          key={`pkt-${n.id}`}
          className="map-motion"
          r="3"
          fill="#FF8A3D"
          opacity="0"
        >
          <animateMotion
            dur={`${2.8 + (i % 3) * 0.45}s`}
            begin={`${i * 0.5}s`}
            repeatCount="indefinite"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="linear"
          >
            <mpath href={`#trace-${n.id}`} />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.12;0.88;1"
            dur={`${2.8 + (i % 3) * 0.45}s`}
            begin={`${i * 0.5}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {inputs.map((n) => (
        <NodeBox key={n.id} x={28} y={n.y} w={116} label={n.label} />
      ))}
      {outputs.map((n) => (
        <NodeBox key={n.id} x={492} y={n.y} w={120} label={n.label} />
      ))}

      {/* punto de sincronía */}
      <circle
        cx={HUB_X}
        cy={HUB_Y}
        r={HUB_R}
        fill="#0D1524"
        stroke="#FF8A3D"
        strokeWidth="1.5"
      />
      <circle
        className="map-motion"
        cx={HUB_X}
        cy={HUB_Y}
        r={HUB_R}
        fill="none"
        stroke="#FF8A3D"
        strokeWidth="1.5"
        opacity="0.35"
      >
        <animate
          attributeName="r"
          values={`${HUB_R};${HUB_R + 14};${HUB_R}`}
          dur="2.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.35;0;0.35"
          dur="2.6s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x={HUB_X}
        y={HUB_Y - 2}
        textAnchor="middle"
        fontFamily="var(--font-mono), monospace"
        fontSize="10"
        fill="#E8ECF4"
      >
        sync
      </text>
      <text
        x={HUB_X}
        y={HUB_Y + 13}
        textAnchor="middle"
        fontFamily="var(--font-mono), monospace"
        fontSize="8.5"
        fill="#5F6E8A"
      >
        24/7
      </text>
    </svg>
  );
}
