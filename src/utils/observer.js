// Esta función busca todos los elementos con la clase '.reveal'
// y les añade la clase de animación cuando aparecen en pantalla.

export const initScrollReveal = () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Añadimos la clase de animación de Tailwind que definimos antes
          entry.target.classList.add('animate-fade-in-up');
          // Dejamos de observar este elemento (ya se animó)
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // Seleccionar todos los elementos que queramos animar
    document.querySelectorAll('.reveal').forEach(el => {
      // Los hacemos invisibles al principio para que no parpadeen
      el.style.opacity = '0'; 
      observer.observe(el);
    });
  };