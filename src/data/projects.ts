// Importar iconos
import PythonIcon from '../icons/PythonIcon.astro';
import HtmlIcon from '../icons/HtmlIcon.astro';
import ReactIcon from '../icons/ReactIcon.astro';
import TailwindIcon from '../icons/TailwindIcon.astro';
import TypeScriptIcon from '../icons/TypeScriptIcon.astro';
import JavaScriptIcon from '../icons/JavaScriptIcon.astro';
import NextjsIcon from '../icons/NextjsIcon.astro';
import AstroIcon from '../icons/AstroIcon.astro';
import CssIcon from '../icons/CssIcon.astro';
import ExpoIcon from '../icons/ExpoIcon.astro';
import ThreejsIcon from '../icons/ThreejsIcon.astro';
import NodejsIcon from '../icons/NodejsIcon.astro';
import SupabaseIcon from '../icons/SupabaseIcon.astro';
import GroqIcon from '../icons/GroqIcon.astro';
import VueIcon from '../icons/VueIcon.astro';

export const TAGS = {
    PYTHON: {
        name: 'Python',
        class: 'bg-[#3776AB]/25 text-[#3776AB]',
        icon: PythonIcon,
    },
    HTML: {
        name: 'HTML',
        class: 'bg-[#E34F26]/25 text-[#E34F26]',
        icon: HtmlIcon,
    },
    CSS: {
        name: 'CSS',
        class: 'bg-[#1572B6]/25 text-[#1572B6]',
        icon: CssIcon,
    },
    JAVASCRIPT: {
        name: 'JavaScript',
        class: 'bg-[#F7DF1E]/25 text-[#F7DF1E]',
        icon: JavaScriptIcon,
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        class: 'bg-[#3178C6]/25 text-[#3178C6]',
        icon: TypeScriptIcon,
    },
    REACT: {
        name: 'React',
        class: 'bg-[#61DAFB]/25 text-[#61DAFB]',
        icon: ReactIcon,
    },
    REACT_NATIVE: {
        name: 'React Native',
        class: 'bg-[#61DAFB]/25 text-[#61DAFB]',
        icon: ReactIcon,
    },
    VUE: {
        name: 'Vue.js',
        class: 'bg-[#4FC08D]/25 text-[#4FC08D]',
        icon: VueIcon,
    },
    NEXTJS: {
        name: 'Next.js',
        class: 'bg-white/15 text-white',
        icon: NextjsIcon,
    },
    ASTRO: {
        name: 'Astro',
        class: 'bg-[#FF5D01]/25 text-[#FF5D01]',
        icon: AstroIcon,
    },
    NODEJS: {
        name: 'Node.js',
        class: 'bg-[#339933]/25 text-[#339933]',
        icon: NodejsIcon,
    },
    TAILWIND: {
        name: 'Tailwind CSS',
        class: 'bg-[#06B6D4]/25 text-[#06B6D4]',
        icon: TailwindIcon,
    },
    SUPABASE: {
        name: 'Supabase',
        class: 'bg-[#3ECF8E]/25 text-[#3ECF8E]',
        icon: SupabaseIcon,
    },
    GROQ: {
        name: 'Groq',
        class: 'bg-[#F54F35]/25 text-[#F54F35]',
        icon: GroqIcon,
    },
    MYSQL: {
        name: 'MySQL',
        class: 'bg-[#4479A1]/25 text-[#4479A1]',
        icon: null,
    },
    POSTGRESQL: {
        name: 'PostgreSQL',
        class: 'bg-[#4169E1]/25 text-[#4169E1]',
        icon: null,
    },
    DOCKER: {
        name: 'Docker',
        class: 'bg-[#2496ED]/25 text-[#2496ED]',
        icon: null,
    },
    TERRAFORM: {
        name: 'Terraform',
        class: 'bg-[#7B42BC]/25 text-[#7B42BC]',
        icon: null,
    },
    AWS: {
        name: 'AWS',
        class: 'bg-[#FF9900]/25 text-[#FF9900]',
        icon: null,
    },
    THREEJS: {
        name: 'Three.js',
        class: 'bg-white/15 text-white',
        icon: ThreejsIcon,
    },
    EXPO: {
        name: 'Expo',
        class: 'bg-[#1a1a2e]/60 text-[#c4c4c4]',
        icon: ExpoIcon,
    },
    FASTAPI: {
        name: 'FastAPI',
        class: 'bg-[#009688]/25 text-[#009688]',
        icon: null,
    },
    OPENCV: {
        name: 'OpenCV',
        class: 'bg-[#5C3EE8]/25 text-[#5C3EE8]',
        icon: null,
    },
    SCIKIT: {
        name: 'scikit-learn',
        class: 'bg-[#F7931E]/25 text-[#F7931E]',
        icon: null,
    },
}

export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: typeof TAGS[keyof typeof TAGS][];
    github?: string;
    preview?: string;
    featured?: boolean;
}

// Proyectos destacados para la página principal (los 3 originales)
export const PROJECTS: Project[] = [
    {
        title: 'Networking App',
        slug: 'networking',
        description: 'Aplicación web para gestión de contactos profesionales y networking. Incluye autenticación de usuarios, gestión de perfiles, dashboard personalizado y exportación de datos. Con +55 usuarios',
        longDescription: `Networking App es una plataforma web completa diseñada para profesionales que buscan optimizar sus conexiones comerciales. 

**Características principales:**
- Sistema de autenticación seguro con Supabase
- Gestión de perfiles de contactos con información detallada
- Dashboard personalizado con métricas y estadísticas
- Integración de IA con Groq para sugerencias inteligentes
- Exportación de datos en múltiples formatos
- Interfaz responsive y moderna con Tailwind CSS

**Logros:**
- +55 usuarios activos
- Sistema de recomendaciones basado en IA`,
        image: '/networking.png',
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.GROQ],
        preview: 'https://networking-livid.vercel.app/',
        featured: true
    },
    {
        title: 'Gym Tracker',
        slug: 'gym-tracker',
        description: 'Aplicación móvil para seguimiento de entrenamientos en el gimnasio. Permite registrar ejercicios, series, repeticiones y peso. Incluye estadísticas de progreso y visualización de datos.',
        longDescription: `Gym Tracker es una aplicación móvil desarrollada con React Native y Expo, diseñada para ayudar a los usuarios a llevar un registro detallado de sus entrenamientos.

**Características principales:**
- Registro de ejercicios con series, repeticiones y peso
- Historial completo de entrenamientos
- Visualización de estadísticas de progreso
- Rutinas personalizables
- Almacenamiento local para uso offline
- Interfaz intuitiva y fácil de usar

**Stack tecnológico:**
- React Native con Expo para desarrollo multiplataforma
- TypeScript para tipado estático
- AsyncStorage para persistencia de datos`,
        image: '/gym-tracker.png',
        tags: [TAGS.REACT_NATIVE, TAGS.EXPO, TAGS.TYPESCRIPT],
        github: 'https://github.com/MichaelTaboada2003/gym-tracker',
        featured: true
    },
    {
        title: 'A World Away - NASA 2025',
        slug: 'a-world-away',
        description: 'Proyecto desarrollado para el NASA Space Apps Challenge 2025. Exploración de mundos lejanos y visualización de datos astronómicos con IA.',
        longDescription: `A World Away es un proyecto innovador desarrollado para el NASA Space Apps Challenge 2025, enfocado en la exploración y visualización de exoplanetas.

**Características principales:**
- Visualización 3D interactiva de sistemas estelares
- Integración de datos astronómicos reales de la NASA
- Modelos de IA para predicción de habitabilidad
- Interfaz multilingüe (español e inglés)
- Simulaciones de condiciones atmosféricas

**Stack tecnológico:**
- Vue.js para la interfaz de usuario
- Three.js para visualizaciones 3D
- Python para procesamiento de datos
- Groq para análisis con IA`,
        image: '/AWorldAway.png',
        tags: [TAGS.PYTHON, TAGS.VUE, TAGS.THREEJS, TAGS.GROQ],
        github: 'https://github.com/MichaelTaboada2003/AWorldAway_Nasa2025',
        preview: 'https://a-world-away-nasa2025-web.vercel.app/es-ES',
        featured: true
    },
]

// Los 6 proyectos seleccionados para "Todos los proyectos"
export const ALL_SELECTED_PROJECTS: Project[] = [
    {
        title: 'Shainy',
        slug: 'shainy',
        description: 'Plataforma e-commerce de gestión de ventas con sincronización de inventario en tiempo real y checkout dinámico vía WhatsApp.',
        longDescription: `Shainy es una plataforma e-commerce completa diseñada para pequeños y medianos comercios que buscan digitalizar sus ventas.

**Características principales:**
- Panel de administración completo con Supabase
- Sincronización en tiempo real con Google Sheets
- Catálogo de productos dinámico
- Checkout integrado con WhatsApp
- Generación automática de PDFs de catálogos
- Gestión de inventario en tiempo real

**Stack tecnológico:**
- Next.js 14 con App Router
- Supabase para base de datos y autenticación
- Tailwind CSS para estilos
- TypeScript para tipado estático`,
        image: '/shainy.png',
        tags: [TAGS.NEXTJS, TAGS.SUPABASE, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    },
    {
        title: 'Networking App',
        slug: 'networking',
        description: 'Aplicación web para gestión de contactos profesionales y networking. Incluye autenticación de usuarios, gestión de perfiles, dashboard personalizado y exportación de datos. Con +55 usuarios',
        longDescription: `Networking App es una plataforma web completa diseñada para profesionales que buscan optimizar sus conexiones comerciales.

**Características principales:**
- Sistema de autenticación seguro con Supabase
- Gestión de perfiles de contactos con información detallada
- Dashboard personalizado con métricas y estadísticas
- Integración de IA con Groq para sugerencias inteligentes
- Exportación de datos en múltiples formatos

**Logros:**
- +55 usuarios activos`,
        image: '/networking.png',
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.GROQ],
        preview: 'https://networking-livid.vercel.app/',
        featured: true
    },
    {
        title: 'Gym Tracker',
        slug: 'gym-tracker',
        description: 'Aplicación móvil para seguimiento de entrenamientos en el gimnasio. Permite registrar ejercicios, series, repeticiones y peso. Incluye estadísticas de progreso y visualización de datos.',
        longDescription: `Gym Tracker es una aplicación móvil para el seguimiento completo de rutinas de gimnasio.

**Características principales:**
- Registro detallado de ejercicios
- Historial de entrenamientos
- Estadísticas de progreso
- Rutinas personalizables
- Modo offline`,
        image: '/gym-tracker.png',
        tags: [TAGS.REACT_NATIVE, TAGS.EXPO, TAGS.TYPESCRIPT],
        github: 'https://github.com/MichaelTaboada2003/gym-tracker',
        featured: true
    },
    {
        title: 'Exosky - NASA Space Apps 2024',
        slug: 'exosky',
        description: 'Visualizador interactivo del cielo nocturno desde la superficie de exoplanetas. Desarrollado para NASA Space Apps 2024.',
        longDescription: `Exosky es un visualizador astronómico interactivo que permite explorar cómo se vería el cielo nocturno desde la superficie de diferentes exoplanetas.

**Características principales:**
- Cálculos astronómicos precisos basados en coordenadas estelares
- Visualización 3D del cielo nocturno
- Catálogo de más de 100,000 estrellas
- Búsqueda y exploración de exoplanetas
- Dibujo interactivo de constelaciones

**Stack tecnológico:**
- React para la interfaz de usuario
- Three.js para visualizaciones 3D
- FastAPI (Python) para el backend
- Datos astronómicos de catálogos científicos`,
        image: '/exosky.png',
        tags: [TAGS.REACT, TAGS.PYTHON, TAGS.THREEJS, TAGS.TAILWIND],
        github: 'https://github.com/MichaelTaboada2003/Exosky-Nasa-Space-App-2024',
    },
    {
        title: 'A World Away - NASA 2025',
        slug: 'a-world-away',
        description: 'Proyecto desarrollado para el NASA Space Apps Challenge 2025. Exploración de mundos lejanos y visualización de datos astronómicos con IA.',
        longDescription: `A World Away es un proyecto para el NASA Space Apps Challenge 2025 enfocado en la exploración exoplanetaria.

**Características principales:**
- Visualización 3D de sistemas estelares
- Datos astronómicos de la NASA
- Modelos de IA para habitabilidad
- Interfaz multilingüe`,
        image: '/AWorldAway.png',
        tags: [TAGS.VUE, TAGS.PYTHON, TAGS.THREEJS, TAGS.GROQ],
        github: 'https://github.com/MichaelTaboada2003/AWorldAway_Nasa2025',
        preview: 'https://a-world-away-nasa2025-web.vercel.app/es-ES',
        featured: true
    },
    {
        title: 'Novenas 2025',
        slug: 'novenas',
        description: 'Aplicación web para el seguimiento de asistencias de las Novenas navideñas con inteligencia artificial.',
        longDescription: `Novenas 2025 es una aplicación web moderna para gestionar y hacer seguimiento de las tradicionales Novenas navideñas.

**Características principales:**
- Seguimiento de asistencias
- Gestión de participantes
- Integración de IA para contenido dinámico
- Interfaz moderna y responsive
- Calendario interactivo`,
        image: '/novenas.png',
        tags: [TAGS.NEXTJS, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    },
    {
        title: 'Sensado y Modelado de Sistemas Físicos',
        slug: 'sensado-sistemas-fisicos',
        description: 'Hub académico con 5 laboratorios interactivos: estimación de gravedad, visión computacional, coeficiente de restitución, análisis de péndulo con FFT y clasificación de cobertura terrestre con Sentinel-2.',
        longDescription: `Repositorio que centraliza 5 experimentos de la asignatura Sensado y Modelado de Sistemas Físicos, cada uno con arquitectura cliente-servidor (FastAPI + React).

**Bento Launcher:**
- Dashboard central con interfaz glassmorphism para orquestar todos los módulos
- Lanzamiento automatizado de servicios locales con logs en tiempo real

**Aplicaciones del laboratorio:**
- Estimación manual de gravedad mediante ajuste de curva (curve_fit)
- Gravity Tracker automatizado con visión computacional (OpenCV) y segmentación HSV
- Coeficiente de restitución detectando impactos en video
- Péndulo simple con seguimiento de color y FFT para calcular frecuencia dominante
- Imágenes satelitales Sentinel-2 L2A con índices espectrales (NDVI, BSI, NDWI) y clasificador Random Forest

**Stack tecnológico:**
- Backend: Python 3, FastAPI, uvicorn
- Frontend: React 19, TypeScript, Vite, Tailwind CSS
- Visión: OpenCV, numpy, scipy
- ML: scikit-learn, rasterio, pystac-client`,
        image: '/hub-sensado.png',
        tags: [TAGS.PYTHON, TAGS.REACT, TAGS.FASTAPI, TAGS.OPENCV, TAGS.TYPESCRIPT, TAGS.SCIKIT],
        github: 'https://github.com/MichaelTaboada2003/Sensado-y-Modelado-de-Sistemas-Fisicos',
    },
]

export const getFeaturedProjects = () => PROJECTS.filter(p => p.featured);
export const getAllProjects = () => ALL_SELECTED_PROJECTS;
export const getProjectBySlug = (slug: string) => ALL_SELECTED_PROJECTS.find(p => p.slug === slug);

