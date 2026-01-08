import './style.css';
import { home } from './pages/home.js';
import { projects } from './pages/projects.js';
import { notFound } from './pages/notFound.js';
import { initScrollReveal } from './utils/observer.js';
import { projectDetails } from './pages/projectDetails';

const routes = {
  '/': home,
  '/projects': projects,
  '/project-details': projectDetails,
};

const navigateTo = (url) => {
  window.history.pushState(null, null, url);
  router();
};

// Lógica del Tema (Modo Oscuro)
const initTheme = () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // 1. Establecer el estado inicial (leer de localStorage o sistema)
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  // 2. Manejar el click (Reemplazamos el botón para limpiar listeners viejos al navegar)
  if (toggleBtn) {
    const newBtn = toggleBtn.cloneNode(true);
    toggleBtn.parentNode.replaceChild(newBtn, toggleBtn);
    
    newBtn.addEventListener('click', () => {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
      }
    });
  }
};

const router = async () => {
  const path = window.location.pathname;
  // Usamos el 404 si la ruta no existe
  const page = routes[path] || notFound;
  
  const app = document.querySelector('#app');
  if (page) {
      app.innerHTML = page();
  }

  // Solo hacemos scroll al inicio si NO es una ancla interna
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }

  // Lógica Menú Móvil
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- AQUÍ ESTABA LO QUE FALTABA ---
  // Inicializamos el botón de tema cada vez que se renderiza la página
  initTheme(); 

  // Animaciones y Scroll a Anclas
  setTimeout(() => {
    initScrollReveal();
    // Si cargamos la página directamente con #contact, hacemos scroll ahora
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); 
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    
    // CASO 1: Enlaces internos de la SPA (data-link)
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault();
      navigateTo(link.href);
      return;
    }

    // CASO 2: Enlaces tipo ancla (#contact)
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
      e.preventDefault();
      const id = anchor.getAttribute('href').substring(1); // quitamos el #
      const element = document.getElementById(id);
      
      if (element) {
        // Scroll suave manual
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Actualizamos la URL sin recargar
        history.pushState(null, null, `#${id}`);
      }
    }
  });
  
  router();
});