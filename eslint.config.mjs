import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

// Next 16 quitó `next lint`, así que la config deja de ser implícita y vive
// acá. eslint-config-next ya publica config plana, así que se extiende
// directo, sin el puente FlatCompat.
const config = [
  ...coreWebVitals,
  ...typescript,
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
];

export default config;
