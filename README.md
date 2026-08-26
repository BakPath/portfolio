# BakPath — Portafolio

Sitio personal de **Nicolas Baak**, desarrollador de integraciones y automatizaciones.
Casos de trabajo con Oracle Simphony, SAP Business ByDesign y APIs REST, más notas
técnicas sobre lo que voy aprendiendo.

## Stack

- **Next.js 14** (App Router, todo estático)
- **TypeScript**
- **Tailwind CSS** con tokens de color propios
- **MDX** para los artículos del blog

## Correrlo en local

```bash
npm install
npm run dev
```

Queda en http://localhost:3000

```bash
npm run build   # build de producción
npm start       # servir el build
```

> Nota: no corras `build` con el servidor de desarrollo encendido — el build
> sobrescribe `.next` y deja al dev server con caché inválida.

## Estructura

```
app/
  page.tsx              Home: ensambla todas las secciones
  layout.tsx            Fuentes y metadata global
  globals.css           Tokens de diseño y animaciones de reveal
  blog/page.tsx         Índice del blog
  blog/[slug]/page.tsx  Post individual, leído desde MDX
components/             Hero, About, Stack, Projects, Contact, SystemMap...
content/blog/*.mdx      Un archivo por artículo
lib/projects.ts         Data de los casos destacados
lib/posts.ts            Lectura de los .mdx
public/                 Imágenes estáticas
```

## Escribir un post

Crea `content/blog/mi-post.mdx` con este front-matter:

```md
---
title: "Título del post"
date: "2026-09-01"
excerpt: "Resumen de una línea"
tags: ["Automatización"]
---

Contenido en Markdown.
```

Next lo detecta solo — no hay que registrar nada en código.

## Detalles de implementación

- Las secciones aparecen con un `IntersectionObserver` en `components/Section.tsx`.
  Sin JavaScript se muestran ya visibles (fallback en `<noscript>`), y se respeta
  `prefers-reduced-motion`.
- El diagrama animado del hero (`components/SystemMap.tsx`) es SVG puro, sin librerías.

## Deploy

Desplegado en Vercel; cada push a `main` publica automáticamente.
