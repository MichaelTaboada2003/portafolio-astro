# Implementation Plan: Mejora Visual del Portafolio

## Overview

Implementación incremental del sistema de diseño, tema claro/oscuro, animaciones pulidas y mejoras de accesibilidad/rendimiento sobre el portafolio Astro existente. Las tareas están ordenadas desde la base (tokens y utilitarios) hasta la capa de componentes, garantizando que cada paso sea integrrable sin código huérfano.

Stack de implementación: TypeScript + Astro + Tailwind CSS + GSAP + Lenis + Vitest + fast-check.

---

## Tasks

- [x] 1. Establecer la base del sistema de diseño
  - [x] 1.1 Ampliar `tailwind.config.mjs` con los tokens de diseño
    - Agregar `colors.accent`, `colors.dark`, `colors.light`, `colors.text` bajo `theme.extend.colors`
    - Agregar escala tipográfica `fontSize` (hero-name, hero-description, section-title, card-title, etc.)
    - Agregar tokens de `borderRadius` (card, tag, button, pill), `boxShadow` (card, card-hover, accent-glow, focus) y mantener las `keyframes` existentes
    - _Requirements: 2.1, 2.2, 2.5_

  - [x] 1.2 Crear `src/styles/global.css` con reset, variables CSS y utilidades base
    - Declarar variables CSS en `:root,.dark` (tema oscuro por defecto) y `.light` (tema claro)
    - Añadir regla `:focus-visible` global con `outline` usando `var(--color-accent)`
    - Añadir override `@font-face` para `font-display: swap` en la fuente Onest Variable
    - Añadir patrones `@media (prefers-reduced-motion: no-preference)` para transiciones largas
    - _Requirements: 2.1, 2.3, 8.2, 9.2_

  - [x] 1.3 Crear `src/utils/theme.ts` con las funciones puras de lógica de tema
    - Exportar `resolveInitialTheme(stored: string | null, prefersDark: boolean): 'dark' | 'light'`
    - Exportar `getNextTheme(current: 'dark' | 'light'): 'dark' | 'light'`
    - Ambas funciones sin efectos secundarios y completamente testeables con Vitest
    - _Requirements: 3.2, 3.3, 3.4_

- [x] 2. Implementar el tema claro/oscuro sin parpadeo
  - [x] 2.1 Modificar `src/layouts/Layout.astro` para inicialización flash-free de tema
    - Agregar `lang="es"` en `<html>`
    - Insertar script inline bloqueante en `<head>` (antes de cualquier otro tag) que lea `localStorage` y aplique la clase `dark` o `light` en `<html>` antes del primer paint
    - Script con fallback `try/catch` para modo privado: usar `matchMedia('prefers-color-scheme: dark')` si `localStorage` no está disponible
    - Importar `src/styles/global.css` en el layout
    - Mantener el import de `@fontsource-variable/onest` y todas las integraciones existentes
    - Ajustar el bloque `<style is:global>` para declarar variables CSS de temas (`:root,.dark` y `.light`) en lugar de los estilos hard-coded actuales
    - _Requirements: 3.1, 3.3, 3.4, 9.2_

  - [x] 2.2 Crear el componente `src/components/ThemeToggle.astro`
    - Sin props; autónomo — lee y escribe `localStorage` + clase en `<html>`
    - Mostrar icono sol (dark → cambiar a light) o luna (light → cambiar a dark) con `aria-hidden="true"` en los SVG decorativos
    - `role="switch"`, `aria-checked` dinámico, `aria-label` dinámico ("Cambiar a tema claro" / "Cambiar a tema oscuro")
    - Tamaño mínimo `min-width: 44px; min-height: 44px` (cumple Requisito 7.4)
    - Script con listener `astro:page-load` para re-inicializar en ViewTransitions
    - Usar `getNextTheme` de `src/utils/theme.ts` (importado como módulo)
    - _Requirements: 3.1, 3.2, 7.4, 8.2_

  - [x] 2.3 Integrar `ThemeToggle.astro` en `src/components/Header.astro`
    - Importar y renderizar `<ThemeToggle />` a la derecha del `<nav>` con `flex + justify-between`
    - Cambiar el fondo del backdrop del nav de `bg-white/50` a `bg-[var(--color-surface)]/80` para soporte de temas
    - Reemplazar `text-yellow-400` / `text-yellow-500` en el hover e IntersectionObserver por `text-[var(--color-accent)]`
    - Aumentar el área táctil de los enlaces de nav a `min-height: 44px` (padding vertical adicional)
    - Mantener la lógica existente del IntersectionObserver y el scroll-animation del nav
    - _Requirements: 3.1, 7.3, 7.4, 8.4_

- [x] 3. Checkpoint — Asegurarse de que el toggle de tema funciona
  - Verificar que al cambiar el tema no se produce parpadeo (flash) al recargar la página
  - Verificar que `localStorage` persiste la elección del tema entre navegaciones
  - Asegurarse de que todos los tests pasan; consultar al usuario si surge alguna duda.

- [x] 4. Actualizar componentes para usar variables CSS del sistema de diseño
  - [x] 4.1 Modificar `src/components/SectionContainer.astro`
    - Verificar y añadir `scroll-margin-top` suficiente (≥ altura del header fijo, ~56–64px) a las secciones con `id` para que los anchor links no queden tapados
    - _Requirements: 1.3_

  - [x] 4.2 Modificar `src/components/SocialPill.astro`
    - Reemplazar colores rgba en crudo por `var(--color-accent)` y `var(--color-surface)`
    - Añadir estado `:focus-visible` con `box-shadow: var(--shadow-focus)` y `outline: none`
    - Asegurar `min-height: 44px` en el área táctil del pill
    - _Requirements: 2.3, 7.4, 8.2_

  - [x] 4.3 Modificar `src/components/ExperienceItem.astro`
    - Reemplazar colores `#fbbf24` / `#fcd34d` por `var(--color-accent)` / `var(--color-accent-light)`
    - Adaptar `experience-card` para usar `var(--color-surface)` y `var(--color-border)` en fondo y borde
    - Asegurar que los colores cumplan contraste en ambos temas (verificar en tema claro)
    - _Requirements: 2.3, 3.5, 3.6_

  - [x] 4.4 Modificar `src/components/AboutMe.astro`
    - Reemplazar colores `text-*` hard-coded de texto `strong` por `var(--color-accent)`
    - Confirmar que la imagen de perfil tiene `width="200" height="200"` declarados (o contenedor con `aspect-ratio`) para evitar CLS
    - Mover la imagen de perfil a `public/` si está en URL externa (postimg.cc) para eliminar dependencia externa
    - _Requirements: 2.3, 8.1, 9.3_

  - [x] 4.5 Modificar `src/components/Footer.astro`
    - Usar `var(--color-text-muted)` en el texto del footer
    - Aplicar `var(--color-surface)` / `var(--color-border)` en fondo y borde superior
    - _Requirements: 2.3, 3.5, 3.6_

- [x] 5. Mejorar visualmente los proyectos
  - [x] 5.1 Modificar `src/components/Projects.astro` con aspect-ratio uniforme y tokens de diseño
    - Añadir `aspect-ratio: 16/10; width: 100%; overflow: hidden` al contenedor `.project-image-container` para reservar espacio y evitar CLS
    - Cambiar `object-fit: contain` por `object-fit: cover` en `.project-image` (necesario con `aspect-ratio` fijo)
    - Reemplazar colores hard-coded en `.project-title`, `.project-link`, `.view-more-btn` por variables CSS y tokens Tailwind
    - Añadir glassmorphism a `.project-card`: `background: rgba(var(--color-surface-rgb), 0.6); backdrop-filter: blur(8px)` — solo en las tarjetas de la página principal; sin blur en todas simultáneamente para cuidar el rendimiento
    - Verificar que `loading="lazy"` sigue presente en todas las imágenes de proyecto
    - _Requirements: 2.3, 2.5, 5.1, 5.3, 5.4_

  - [x] 5.4 Modificar `src/pages/proyectos.astro` para grid multi-columna y tokens de diseño
    - Aplicar grid responsivo: 1 columna (móvil), 2 columnas (`md`), 3 columnas (`lg`)
    - Asegurar `aspect-ratio: 16/10` en el contenedor de imagen de cada tarjeta de la cuadrícula
    - Reemplazar colores hard-coded por variables CSS del sistema de diseño
    - _Requirements: 2.3, 5.3, 7.2_

  - [x] 5.5 Modificar `src/pages/proyecto/[slug].astro` para usar tokens de diseño
    - Reemplazar colores hard-coded por variables CSS del sistema de diseño
    - Asegurar que la imagen de detalle tiene `loading="lazy"` si no es la imagen principal above-the-fold
    - Añadir `width` y `height` o `aspect-ratio` al contenedor de imagen para evitar CLS
    - _Requirements: 2.3, 8.1, 9.1, 9.3_

- [x] 6. Mejorar la sección Hero y animar con GSAP
  - [x] 6.1 Modificar `src/pages/index.astro` (sección Hero) para usar tokens de diseño
    - Reemplazar el gradiente del `.hero-name` con `var(--color-accent)` y `var(--color-accent-light)` en lugar de hex fijos
    - Reemplazar `.hero-greeting` con `var(--color-text)` opacidad
    - Ajustar los tamaños tipográficos con la escala `text-hero-name` / `text-hero-description` de Tailwind
    - Mantener toda la estructura HTML existente (imagen, badge, descripción, nav social) — solo cambiar estilos
    - Asegurar `alt="Michael Taboada - Desarrollador de software"` en la imagen de perfil y que el contenedor tiene dimensiones fijas para evitar CLS
    - _Requirements: 1.1, 2.2, 2.3, 4.1, 4.4_

  - [x] 6.2 Modificar `src/components/Animations.astro` para compatibilidad con ViewTransitions y reduced-motion
    - Envolver toda la lógica GSAP + Lenis en `document.addEventListener('astro:page-load', () => { ... })`
    - Agregar bloque `try/catch` alrededor de la inicialización de Lenis y GSAP para silenciar errores de carga
    - Verificar que el `if (!prefersReducedMotion)` cubre TANTO Lenis como todas las llamadas `gsap.fromTo` / `gsap.utils.toArray`
    - Añadir `onComplete: () => { el.style.willChange = 'auto'; }` en las animaciones Hero para limpiar `will-change`
    - Asegurar que las animaciones Hero se mantienen dentro del límite de 1.5s (delay máximo 0.8s + duration 0.6s = 1.4s)
    - _Requirements: 4.2, 6.1, 6.2_

---

## Notes

- Las tareas marcadas con `*` son opcionales y pueden omitirse para una implementación MVP más rápida
- Cada tarea hace referencia a requisitos específicos para trazabilidad
- Los checkpoints validan el avance incremental antes de continuar
- Las pruebas de propiedad (fast-check) validan propiedades universales del sistema
- Las funciones puras en `src/utils/theme.ts` son el núcleo testeable de la lógica de tema
- Todos los cambios de color deben verificarse con contraste ≥ 4.5:1 en ambos temas durante la implementación
- El stack de pruebas es **Vitest + fast-check** (TypeScript), con mínimo 100 runs por propiedad

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["1.4", "2.1"] },
    { "id": 2, "tasks": ["2.2", "4.1"] },
    { "id": 3, "tasks": ["2.3", "4.2", "4.3", "4.4", "4.5"] },
    { "id": 4, "tasks": ["5.1", "5.4", "5.5", "6.1", "6.2"] },
    { "id": 5, "tasks": ["5.2", "5.3", "6.3"] },
  ]
}
```
