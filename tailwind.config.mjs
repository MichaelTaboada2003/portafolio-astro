/** @type {import('tailwindcss').Config} */
// El sistema de diseño vive en src/styles/global.css como variables CSS.
// Tailwind se conserva solo por su preflight (reset de base); no se usan
// utilidades, así que este archivo no duplica los tokens.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: { extend: {} },
  plugins: [],
};
