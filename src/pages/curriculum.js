import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackgroundShapes } from '../components/BackgroundShapes';

export function curriculum() {
  return `
    ${Navbar()}
    ${BackgroundShapes()}

    <main class="pt-28 pb-16 px-4 min-h-screen bg-transparent relative z-10 transition-colors duration-300">
      <section class="max-w-5xl mx-auto">
        <div class="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span class="inline-block py-1 px-3 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-primary font-bold tracking-widest uppercase text-xs mb-4">
              Perfil profesional
            </span>
            <h1 class="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Mi <span class="text-primary">currículum</span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-gray-400 max-w-2xl">
              Javier Grossi García · Diseñador gráfico
            </p>
          </div>

          <a href="/curriculum-javier-grossi-garcia.pdf" download class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white dark:text-black font-bold shadow-lg dark:shadow-[0_0_24px_rgba(0,188,212,0.3)] hover:scale-105 transition-transform">
            Descargar PDF
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m0 0 4-4m-4 4-4-4m-5 6v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1" /></svg>
          </a>
        </div>

        <div class="reveal bg-white/80 dark:bg-dark-card/70 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
          <iframe
            class="w-full h-[70vh] min-h-[620px] bg-slate-100 dark:bg-dark-bg"
            src="/curriculum-javier-grossi-garcia.pdf"
            title="Currículum de Javier Grossi García"
          >
            <p class="p-6 text-slate-600 dark:text-gray-300">Tu navegador no puede mostrar el PDF. <a href="/curriculum-javier-grossi-garcia.pdf" class="text-primary font-bold underline">Descárgalo aquí</a>.</p>
          </iframe>
        </div>
      </section>
    </main>

    ${Footer()}
  `;
}
