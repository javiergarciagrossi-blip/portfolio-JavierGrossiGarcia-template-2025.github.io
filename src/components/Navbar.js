import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => `
  <nav class="fixed top-0 left-0 w-full bg-white/70 dark:bg-dark-bg/70 backdrop-blur-md border-b border-slate-200/50 dark:border-white/10 z-50 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center h-20">
        
        <a href="/" class="text-2xl font-bold text-slate-900 dark:text-white tracking-tighter" data-link>
          PORTFOLIO<span class="text-primary">.</span>
        </a>

        <div class="flex items-center gap-6">
          <div class="hidden md:flex space-x-8">
            <a href="/" class="text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition font-medium" data-link>Inicio</a>
            <a href="/projects" class="text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition font-medium" data-link>Proyectos</a>
            <a href="#contact" class="text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition font-medium">Contacto</a>
          </div>

          ${ThemeToggle()} 

          <button id="menu-btn" class="md:hidden text-slate-900 dark:text-white focus:outline-none ml-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div id="mobile-menu" class="hidden md:hidden bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl border-t border-slate-200 dark:border-white/10">
      <a href="/" class="block px-4 py-3 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5" data-link>Inicio</a>
      <a href="/projects" class="block px-4 py-3 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5" data-link>Proyectos</a>
      <a href="#contact" class="block px-4 py-3 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5">Contacto</a>
    </div>
  </nav>
`;