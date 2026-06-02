/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  accent: {
			DEFAULT: '#fbbf24',   // amber-400
			light:   '#fde68a',   // amber-200
			dark:    '#d97706',   // amber-600
		  },
		  dark: {
			bg:      '#0a0a0f',
			surface: '#111118',
			border:  '#1e1e2e',
		  },
		  light: {
			bg:      '#f8f8fc',
			surface: '#ffffff',
			border:  '#e2e2ee',
		  },
		  text: {
			primary:   '#f0f0f5',
			secondary: '#a0a0b0',
			muted:     '#6b7280',
		  },
		},
		fontSize: {
		  'hero-name':        ['3.25rem', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.03em' }],
		  'hero-description': ['1.15rem', { lineHeight: '1.8' }],
		  'section-title':    ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
		  'card-title':       ['1.5rem',   { lineHeight: '1.3', fontWeight: '700' }],
		  'card-title-sm':    ['1.15rem',  { lineHeight: '1.3', fontWeight: '700' }],
		  'body':             ['1rem',     { lineHeight: '1.7' }],
		  'body-sm':          ['0.875rem', { lineHeight: '1.6' }],
		  'label':            ['0.8rem',   { lineHeight: '1', fontWeight: '600' }],
		},
		borderRadius: {
		  'card':   '16px',
		  'tag':    '50px',
		  'button': '12px',
		  'pill':   '50px',
		},
		boxShadow: {
		  'card':        '0 10px 30px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
		  'card-hover':  '0 20px 40px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(251,191,36,0.1)',
		  'accent-glow': '0 10px 30px -10px rgba(251,191,36,0.3)',
		  'focus':       '0 0 0 3px rgba(251,191,36,0.5)',
		},
		keyframes: {
		  slideInRight: {
			from: {
			  opacity: '0',
			  transform: 'translateX(-50px)',
			},
			to: {
			  opacity: '1',
			  transform: 'translateX(0)',
			},
		  },
		},
		animation: {
		  slideInRight: 'slideInRight 1.5s ease-out forwards',
		},
	  },
	},
	plugins: [],
  }
