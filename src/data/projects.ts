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
import FlaskIcon from '../icons/FlaskIcon.astro';
import FastAPIIcon from '../icons/FastAPIIcon.astro';

export const TAGS = {
    PYTHON: {
        name: 'Python',
        icon: PythonIcon,
        color: '#3776AB',
    },
    HTML: {
        name: 'HTML',
        icon: HtmlIcon,
        color: '#E34F26',
    },
    CSS: {
        name: 'CSS',
        icon: CssIcon,
        color: '#1572B6',
    },
    JAVASCRIPT: {
        name: 'JavaScript',
        icon: JavaScriptIcon,
        color: '#F7DF1E',
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        icon: TypeScriptIcon,
        color: '#3178C6',
    },
    REACT: {
        name: 'React',
        icon: ReactIcon,
        color: '#61DAFB',
    },
    REACT_NATIVE: {
        name: 'React Native',
        icon: ReactIcon,
        color: '#61DAFB',
    },
    VUE: {
        name: 'Vue.js',
        icon: VueIcon,
        color: '#4FC08D',
    },
    NEXTJS: {
        name: 'Next.js',
        icon: NextjsIcon,
        color: 'currentColor',
    },
    ASTRO: {
        name: 'Astro',
        icon: AstroIcon,
        color: '#FF5D01',
    },
    NODEJS: {
        name: 'Node.js',
        icon: NodejsIcon,
        color: '#339933',
    },
    TAILWIND: {
        name: 'Tailwind CSS',
        icon: TailwindIcon,
        color: '#06B6D4',
    },
    SUPABASE: {
        name: 'Supabase',
        icon: SupabaseIcon,
        color: '#3ECF8E',
    },
    GROQ: {
        name: 'Groq',
        icon: GroqIcon,
        color: '#F54F35',
    },
    MYSQL: {
        name: 'MySQL',
        icon: null,
        color: '#4479A1',
    },
    POSTGRESQL: {
        name: 'PostgreSQL',
        icon: null,
        color: '#4169E1',
    },
    DOCKER: {
        name: 'Docker',
        icon: null,
        color: '#2496ED',
    },
    TERRAFORM: {
        name: 'Terraform',
        icon: null,
        color: '#7B42BC',
    },
    AWS: {
        name: 'AWS',
        icon: null,
        color: '#FF9900',
    },
    THREEJS: {
        name: 'Three.js',
        icon: ThreejsIcon,
        color: 'currentColor',
    },
    EXPO: {
        name: 'Expo',
        icon: ExpoIcon,
        color: 'currentColor',
    },
    FASTAPI: {
        name: 'FastAPI',
        icon: FastAPIIcon,
        color: '#009688',
    },
    OPENCV: {
        name: 'OpenCV',
        icon: null,
        color: '#5C3EE8',
    },
    SCIKIT: {
        name: 'scikit-learn',
        icon: null,
        color: '#F7931E',
    },
    FLASK: {
        name: 'Flask',
        icon: FlaskIcon,
        color: 'currentColor',
    },
    RUST: {
        name: 'Rust',
        icon: null,
        color: '#DEA584',
    },
    TAURI: {
        name: 'Tauri',
        icon: null,
        color: '#24C8D8',
    },
    SQLITE: {
        name: 'SQLite',
        icon: null,
        color: '#003B57',
    },
    PYTORCH: {
        name: 'PyTorch',
        icon: null,
        color: '#EE4C2C',
    },
    WHISPER: {
        name: 'Whisper AI',
        icon: null,
        color: '#412991',
    },
    DEMUCS: {
        name: 'Demucs',
        icon: null,
        color: '#FF7043',
    },
    FFMPEG: {
        name: 'FFmpeg',
        icon: null,
        color: '#007808',
    },
}

export interface Project {
    title: string;
    slug: string;
    context: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: typeof TAGS[keyof typeof TAGS][];
    github?: string;
    preview?: string;
    featured?: boolean;
}

// Single source of truth — mark featured: true to appear on the homepage
export const ALL_PROJECTS: Project[] = [
    {
        title: 'Networking App',
        slug: 'networking',
        context: 'Producto',
        description: 'Aplicación web para gestión de contactos profesionales y networking. Incluye autenticación de usuarios, gestión de perfiles, dashboard personalizado y exportación de datos. Con +55 usuarios.',
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
        image: '/networking.webp',
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.GROQ],
        preview: 'https://networking-livid.vercel.app/',
        featured: true,
    },
    {
        title: 'EmotiSpeech — Clasificador de Emociones de Voz',
        slug: 'emotispeech',
        context: 'Investigación',
        description: 'Aplicación web de IA emocional y toma de decisiones para atención al cliente. Clasifica emociones en audio de voz con alta precisión y traduce los resultados en métricas financieras mediante simulaciones Monte Carlo para justificar el despliegue del modelo en entornos de negocio.',
        longDescription: `EmotiSpeech es un proyecto integrado de Machine Learning y Toma de Decisiones para clasificación de emociones en audio de voz.

**Capa de Machine Learning:**
- Encoder audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim (1024 dims) fine-tuneado para SER
- 6 clasificadores clásicos sobre embeddings emocionales (LogReg, SVM lineal, SVM RBF, RF, KNN)
- Balanced accuracy honesta 0.86 en 4 clases (0.92 en 2 clases, 0.97 en 3 clases)
- Evaluación leave-one-audio-out honesta y leave-one-collector-out

**Capa de Toma de Decisiones:**
- Simulador de despliegue en call-center con matriz de costos editable
- Curva ROC con umbral óptimo que maximiza el VPN mensual
- Análisis de sensibilidad (tornado ±30%) y Monte Carlo (2 000 escenarios)
- Recomendación automática GO / GO condicional / NO-GO con justificación cuantitativa

**Stack tecnológico:**
- Backend: Python 3, Flask, scikit-learn, transformers (HuggingFace)
- Frontend: HTML/CSS/JS (simulador de decisiones en cliente)
- ML: wav2vec2, librosa, numpy, scipy`,
        image: '/clasificador-audios.webp',
        tags: [TAGS.PYTHON, TAGS.FLASK],
        github: 'https://github.com/MichaelTaboada2003/audio-ml-classifier',
        featured: true,
    },
    {
        title: 'A World Away - NASA 2025',
        slug: 'a-world-away',
        context: 'Hackathon',
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
        image: '/AWorldAway.webp',
        tags: [TAGS.PYTHON, TAGS.VUE, TAGS.THREEJS, TAGS.GROQ],
        github: 'https://github.com/MichaelTaboada2003/AWorldAway_Nasa2025',
        preview: 'https://a-world-away-nasa2025-web.vercel.app/es-ES',
        featured: true,
    },
    {
        title: 'Shainy',
        slug: 'shainy',
        context: 'Cliente',
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
        image: '/shainy.webp',
        tags: [TAGS.NEXTJS, TAGS.SUPABASE, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    },
    {
        title: 'Gym Tracker',
        slug: 'gym-tracker',
        context: 'Personal',
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
        image: '/gym-tracker.webp',
        tags: [TAGS.REACT_NATIVE, TAGS.EXPO, TAGS.TYPESCRIPT],
        github: 'https://github.com/MichaelTaboada2003/gym-tracker',
    },
    {
        title: 'Exosky - NASA Space Apps 2024',
        slug: 'exosky',
        context: 'Hackathon',
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
        image: '/exosky.webp',
        tags: [TAGS.REACT, TAGS.PYTHON, TAGS.THREEJS, TAGS.TAILWIND],
        github: 'https://github.com/MichaelTaboada2003/Exosky-Nasa-Space-App-2024',
    },
    {
        title: 'Novenas 2025',
        slug: 'novenas',
        context: 'Personal',
        description: 'Aplicación web para el seguimiento de asistencias de las Novenas navideñas con inteligencia artificial.',
        longDescription: `Novenas 2025 es una aplicación web moderna para gestionar y hacer seguimiento de las tradicionales Novenas navideñas.

**Características principales:**
- Seguimiento de asistencias
- Gestión de participantes
- Integración de IA para contenido dinámico
- Interfaz moderna y responsive
- Calendario interactivo`,
        image: '/novenas.webp',
        tags: [TAGS.NEXTJS, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    },
    {
        title: 'Sensado y Modelado de Sistemas Físicos',
        slug: 'sensado-sistemas-fisicos',
        context: 'Académico',
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
        image: '/hub-sensado.webp',
        tags: [TAGS.PYTHON, TAGS.REACT, TAGS.FASTAPI, TAGS.OPENCV, TAGS.TYPESCRIPT, TAGS.SCIKIT],
        github: 'https://github.com/MichaelTaboada2003/physics-sensing-automation',
    },
    {
        title: 'Dev Command Center',
        slug: 'command-dev-center',
        context: 'Herramienta',
        description: 'Aplicación de escritorio local-first para registrar, supervisar, ejecutar y mantener proyectos de desarrollo desde un panel centralizado con integración Git/GitHub en tiempo real, control de procesos y servidor MCP para agentes de IA.',
        longDescription: `Dev Command Center es una aplicación de escritorio local-first diseñada para registrar, supervisar y controlar proyectos de desarrollo desde un único panel centralizado sin depender de servidores externos ni telemetría invasiva.

**Gestión de proyectos y detección automática:**
- Registro flexible mediante rutas absolutas o selector nativo de macOS (rfd)
- Detección automática de stacks tecnológicos (Node.js, Python, Rust, PHP, Docker) y resolución inteligente de puertos
- Proyectos favoritos fijados y archivo seguro de proyectos inactivos
- Limpieza de disco protegida (node_modules, target, .venv, dist) con dry-run y confirmación explícita

**Control de Git, GitHub Hub y Safe Offload:**
- Panel de estado Git en tiempo real: ramas, archivos modificados, conteo de commits ahead/behind y último commit
- Acciones rápidas en 1 clic: Pull, Push y Commit & Push integrado
- Publicación asistida de proyectos locales a repositorios de GitHub
- Safe Offload: libera almacenamiento local archivando a la nube únicamente tras verificar sincronización total

**Supervisión de procesos y servidor MCP:**
- Control de servidores de desarrollo en segundo plano con logs en tiempo real (stdout/stderr)
- Lanzadores rápidos a editores (VS Code, Cursor, Antigravity IDE, Finder, Terminal)
- Servidor MCP (Model Context Protocol) integrado para permitir a asistentes y agentes de IA inspeccionar y gestionar proyectos locales por stdio

**Stack tecnológico:**
- Frontend: React 19, TypeScript estricto, CSS modular
- Backend: Rust nativo con Tauri v2
- Persistencia: SQLite local con modo WAL y migraciones automáticas
- Integración: Git CLI, GitHub API y protocolo MCP`,
        image: '/command-dev-center.webp',
        tags: [TAGS.RUST, TAGS.TAURI, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.SQLITE],
        github: 'https://github.com/MichaelTaboada2003/central-ejecucion',
    },
    {
        title: 'Music Lab',
        slug: 'music-lab',
        context: 'Multimedia / IA',
        description: 'Estación integral de producción musical, reproductor inmersivo HD con iluminación acústica a 60 FPS, sincronización de karaoke por IA (Whisper + Demucs) y generador de videos reactivos para redes sociales.',
        longDescription: `Music Lab es una plataforma web full-stack que combina un reproductor musical de estética Glassmorphism reactivo con herramientas avanzadas de inteligencia artificial para separación de pistas, sincronización fonética milimétrica y renderizado de videos dinámicos para redes sociales.

**Reproductor inmersivo y motor visual HD:**
- Iluminación acústica volumétrica en tiempo real (Web Audio API + Canvas 2D) con análisis FFT a 60 FPS
- Adaptación cromática automática extrayendo la paleta tonal de la carátula de cada canción
- Soundcheck, calibración de ganancia y recorte no destructivo de fragmentos musicales con fundidos automáticos

**Pipeline de Inteligencia Artificial y Karaoke:**
- Aislamiento vocal mediante redes neuronales convolucionales profundas con Demucs v4 (htdemucs)
- Detección de actividad de voz (VAD) con Auditok para descartar silencios
- Alineación temporal forzada (Forced Alignment) palabra por palabra con Whisper Timestamped
- Modo Karaoke en vivo con pantalla dividida y resaltado dinámico de letras

**Video Studio dinámico para redes:**
- Exportación vertical en alta definición (1080x1920 MP4) para TikTok, Reels y Shorts
- Múltiples estilos visuales: Reproductor Glassmorphism y Modo Terminal Cyberpunk con arte ASCII
- Sincronización lírica precisa con tipografía y transiciones reactivas al tempo

**Stack tecnológico:**
- Frontend: Vanilla JavaScript (ES Modules), HTML5 Semántico, Web Audio API, Canvas 2D
- Backend: Python 3.14+, FastAPI, Starlette, Uvicorn, Pydantic v2
- Modelos IA: OpenAI Whisper, Whisper-Timestamped, PyTorch, Torchaudio
- Procesamiento & Video: Demucs v4, Auditok, SciPy, NumPy, MoviePy, Pillow, FFmpeg, yt-dlp`,
        image: '/music-lab.webp',
        tags: [TAGS.PYTHON, TAGS.FASTAPI, TAGS.PYTORCH, TAGS.JAVASCRIPT, TAGS.WHISPER, TAGS.FFMPEG],
        github: 'https://github.com/MichaelTaboada2003/music-lab',
    },
]

/*
  Cada imagen existe en dos formatos WebP optimizados:
    x.webp        1920px  detalle del caso y OpenGraph
    x-card.webp   1040px  tarjetas y carrusel
*/
export const cardSrc = (image: string) => image.replace('.webp', '-card.webp');

// Derived helpers — no duplication
export const getFeaturedProjects = () => ALL_PROJECTS.filter(p => p.featured);
export const getAllProjects = () => ALL_PROJECTS;
export const getProjectBySlug = (slug: string) => ALL_PROJECTS.find(p => p.slug === slug);
