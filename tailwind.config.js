/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilitamos modo oscuro manual
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        // Los colores extraídos de tu archivo otros.css
        primary: '#00bcd4', // Cyan Vibrante
        dark: {
          bg: '#0A0A0A',    // Fondo principal muy oscuro
          card: '#161616',  // Fondo de tarjetas
          surface: '#1a1a2e', // Azul muy oscuro para gradientes
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: { // Animación para las formas flotantes
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}