// src/pages/projectDetails.js
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackgroundShapes } from '../components/BackgroundShapes';
import { Contact } from '../components/Contact'; 
import { projectsData } from '../data/projectsData'; // Importamos los datos

export function projectDetails() {
  
  // 1. Lógica para capturar el ID de la URL
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');

  // 2. Buscamos el proyecto específico
  const project = projectsData.find(p => p.id === projectId);

  // 3. Si no existe, mostramos error
  if (!project) {
    return `
      ${Navbar()}
      ${BackgroundShapes()}
      <main class="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
        <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">Proyecto no encontrado 😕</h1>
        <a href="/projects" class="text-primary hover:underline font-bold" data-link>Volver a la galería</a>
      </main>
      ${Footer()}
    `;
  }

  // 4. Renderizamos el detalle
  return `
    ${Navbar()}
    ${BackgroundShapes()}

    <main class="pt-24 min-h-screen bg-transparent relative z-10 transition-colors duration-300">
      
      <section class="px-4 mb-12">
        <div class="max-w-4xl mx-auto">
          <a href="/projects" class="inline-flex items-center text-sm font-bold text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary mb-8 transition-colors" data-link>
            ← Volver a Proyectos
          </a>
          
          <div class="reveal">
            <h1 class="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              ${project.title}
            </h1>
            <div class="flex flex-wrap gap-2 mb-6">
              
            </div>
          </div>
        </div>
      </section>

      <section class="px-4 mb-16">
        <div class="max-w-6xl mx-auto reveal">
          <div class="rounded-2xl overflow-hidden shadow-2xl dark:shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-white/10 aspect-video group">
            <img 
              src="${project.image}" 
              alt="${project.title}" 
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            >
          </div>
        </div>
      </section>

      <section class="px-4 pb-24">
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div class="md:col-span-2 reveal">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Sobre el Proyecto</h3>
            <div class="prose prose-lg dark:prose-invert text-slate-600 dark:text-gray-300 leading-relaxed">
              <p>${project.fullDescription || project.description}</p>
            </div>
          </div>

          <div class="md:col-span-1 reveal space-y-6">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">Enlaces</h3>
            
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:brightness-110 transition-all transform hover:-translate-y-1">
              Ver Demo en Vivo 
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>

            <a href="https://github.com/javiergarciagrossi-blip" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-full py-4 bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-white/10 transition-all border border-transparent dark:border-white/10">
              Ver Código GitHub
              <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>

        </div>
      </section>

    </main>
    ${Contact()}
    
    ${Footer()}
  `;
}