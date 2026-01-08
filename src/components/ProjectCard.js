// src/components/ProjectCard.js
// Ahora recibimos 'id' como primer argumento
export function ProjectCard(id, title, description, image, tags) {
  return `
    <a href="/project-details?id=${id}" class="group block bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-link>
      <div class="relative h-56 overflow-hidden">
        <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img src="${image}" alt="${title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
      </div>
      
      <div class="p-6 relative z-20">
        <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
          ${title}
        </h3>
        <p class="text-slate-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          ${description}
        </p>
        
        
      </div>
    </a>
  `;
}