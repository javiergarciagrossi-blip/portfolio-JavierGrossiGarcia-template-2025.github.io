export const Contact = () => `
  <section id="contact" class="py-24 px-4 relative z-10">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="reveal text-4xl font-bold text-slate-900 dark:text-white mb-4">¿Trabajamos juntos?</h2>
        <p class="reveal text-lg text-slate-600 dark:text-gray-400">
          Estoy disponible para nuevos proyectos. Cuéntame tu idea.
        </p>
      </div>

      <div class="reveal bg-white dark:bg-dark-card/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
        <form class="space-y-6" onsubmit="event.preventDefault(); alert('¡Gracias! Esto es una demo.');">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Nombre</label>
              <input type="text" class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition duration-300 placeholder-slate-400 dark:placeholder-gray-600" placeholder="Tu nombre">
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email" class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition duration-300 placeholder-slate-400 dark:placeholder-gray-600" placeholder="tu@email.com">
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Mensaje</label>
            <textarea rows="4" class="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition duration-300 placeholder-slate-400 dark:placeholder-gray-600" placeholder="¿En qué puedo ayudarte?"></textarea>
          </div>

          <button type="submit" class="w-full bg-primary text-white dark:text-black font-bold py-4 rounded-lg hover:bg-cyan-600 dark:hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg dark:shadow-[0_0_15px_rgba(0,188,212,0.3)]">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  </section>
`;