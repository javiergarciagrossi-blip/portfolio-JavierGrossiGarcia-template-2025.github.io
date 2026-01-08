import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { BackgroundShapes } from '../components/BackgroundShapes';
import { Contact } from '../components/Contact'; 

export function projects() {
  
  // CORRECCIÓN AQUÍ: 
  // Ahora pasamos 'project.id' como primer argumento al componente ProjectCard.
  // Esto permite crear el enlace correcto (ej: /project-details?id=ecommerce-ui)
  const projectsGridHtml = projectsData.map(project => 
    ProjectCard(project.id, project.title, project.description, project.image, project.tags)
  ).join('');

  return `
    ${Navbar()}
    ${BackgroundShapes()}

    <main class="pt-24 min-h-screen bg-transparent relative z-10 transition-colors duration-300">
      
      <section class="px-4 py-12 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="reveal text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Mis <span class="text-primary">Proyectos</span>
          </h1>
          <p class="reveal text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explorando los límites del desarrollo web moderno.
          </p>
        </div>
      </section>

      <section class="px-4 pb-20">
        <div class="max-w-6xl mx-auto">
          <div class="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${projectsGridHtml}
          </div>
        </div>
      </section>

      <section class="reveal py-16 px-4 border-t border-slate-200 dark:border-white/5">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Código Abierto</h2>
          <p class="text-slate-600 dark:text-gray-400 mb-8">Todo mi trabajo está disponible para revisión.</p>
          
          <a href="https://github.com/javiergarciagrossi-blip" target="_blank" rel="noopener noreferrer" class="inline-block border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-black transition-all duration-300 font-bold">
            Visitar mi GitHub
          </a>
          
        </div>
      </section>

    </main>

    ${Contact()} 
    ${Footer()}
  `;
}