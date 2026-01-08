import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { Contact } from '../components/Contact';
import { BackgroundShapes } from '../components/BackgroundShapes';
import { projectsData } from '../data/projectsData'; // 1. Importamos tus datos

export function home() {
  
  // 2. Generamos las tarjetas automáticamente usando tus datos reales.
  // slice(0, 3) toma solo los primeros 3 proyectos para mostrarlos como "Destacados".
  // Al usar .map, pasamos correctamente el 'project.id' que ahora es obligatorio.
  const featuredProjects = projectsData.slice(0, 3).map(project => 
    ProjectCard(project.id, project.title, project.description, project.image, project.tags)
  ).join('');

  return `
    ${Navbar()}
    ${BackgroundShapes()} 

    <section class="min-h-screen flex items-center pt-20 px-4 bg-transparent text-slate-900 dark:text-white relative z-10 transition-colors duration-300">
      <div class="max-w-5xl mx-auto text-center">
        
        <span class="reveal inline-block py-1 px-3 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-primary font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
          Portfolio 2026
        </span>
        
        <h1 class="reveal text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none text-slate-900 dark:text-white">
          Javier Grossi <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-blue-600 drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(0,188,212,0.5)]">
            Diseño & Código.
          </span>
        </h1>
        
        <p class="reveal text-xl md:text-2xl text-slate-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Creando experiencias digitales inmersivas donde la creatividad se encuentra con la ingeniería.
        </p>
        
        <div class="reveal flex flex-col sm:flex-row justify-center gap-5">
          <a href="/projects" class="group relative px-8 py-4 bg-primary text-white dark:text-black font-black rounded-full overflow-hidden transition-transform hover:scale-105 shadow-lg dark:shadow-[0_0_40px_rgba(0,188,212,0.4)]" data-link>
             <span class="relative z-10">Ver Mis Trabajos</span>
             <div class="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          
          <a href="#contact" class="px-8 py-4 rounded-full border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition backdrop-blur-md">
            Contactar
          </a>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 bg-transparent relative z-10">
      <div class="max-w-6xl mx-auto">
        <div class="reveal flex justify-between items-end mb-16">
          <div>
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Proyectos Destacados</h2>
            <p class="text-slate-500 dark:text-gray-400 mt-2">Experimentos recientes y código profesional.</p>
          </div>
          <a href="/projects" class="hidden md:block text-primary font-medium hover:underline transition" data-link>Ver todos →</a>
        </div>
        
        <div class="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featuredProjects}
        </div>
      </div>
    </section>

    ${Contact()}
    ${Footer()}
  `;
}