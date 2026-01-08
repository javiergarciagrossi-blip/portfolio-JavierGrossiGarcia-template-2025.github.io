import { BackgroundShapes } from '../components/BackgroundShapes';

export function notFound() {
  // Comprobamos si BackgroundShapes existe para evitar errores
  const bg = BackgroundShapes ? BackgroundShapes() : '';

  return `
    ${bg}
    <section class="h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
      <div class="relative">
          <h1 class="text-9xl font-bold text-primary opacity-50 blur-sm select-none">404</h1>
          <div class="absolute inset-0 flex items-center justify-center">
             <h1 class="text-9xl font-bold text-white opacity-90 mix-blend-overlay">404</h1>
          </div>
      </div>
      
      <h2 class="text-4xl font-bold text-white mt-8 mb-6">Página no encontrada</h2>
      <p class="text-lg text-gray-400 mb-8 max-w-md mx-auto">
        Parece que te has perdido en el vacío digital.
      </p>
      
      <a href="/" class="inline-block bg-primary text-black px-8 py-3 rounded-full hover:bg-white transition-all duration-300 font-bold shadow-[0_0_20px_rgba(0,188,212,0.4)]" data-link>
        Volver al Inicio
      </a>
    </section>
  `;
}