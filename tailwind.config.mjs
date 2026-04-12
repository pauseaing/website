export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF9416',
          green: '#355E3B',
          black: '#000000',
          white: '#ffffff',
          surface: '#f5f6f8',
          border: '#d7dbe2',
        },
      },
      fontFamily: {
        'display': ['Saira Condensed', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
        'serif': ['Roboto Slab', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(2.4rem, 5.6vw, 4.6rem)', { lineHeight: '0.98' }],
        'h1': ['clamp(2rem, 4.2vw, 3.3rem)', { lineHeight: '1.05' }],
        'h2': ['clamp(1.6rem, 3.1vw, 2.4rem)', { lineHeight: '1.1' }],
        'h3': ['clamp(1.3rem, 2.5vw, 1.8rem)', { lineHeight: '1.2' }],
        'body': ['clamp(1rem, 1.1vw, 1.1rem)', { lineHeight: '1.7' }],
      },
      spacing: {
        '1': '0.625rem',
        '2': '1.25rem',
        '3': '1.875rem',
        '4': '2.5rem',
        '5': '3.125rem',
        '6': '3.75rem',
        '7': '4.375rem',
        '8': '5rem',
      },
      borderRadius: {
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
      },
      boxShadow: {
        'elev-1': '0 2px 8px rgba(0,0,0,0.08)',
        'elev-2': '0 8px 24px rgba(0,0,0,0.12)',
        'elev-3': '0 14px 36px rgba(0,0,0,0.18)',
      },
      zIndex: {
        base: '1',
        nav: '40',
        overlay: '60',
        modal: '80',
        toast: '90',
      },
      backgroundImage: {
        'section-soft': 'linear-gradient(180deg, rgba(245,246,248,1) 0%, rgba(255,255,255,1) 100%)',
        'section-accent': 'linear-gradient(90deg, rgba(255,148,22,0.08) 0%, rgba(53,94,59,0.08) 100%)',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
