# ⚡ Portfolio Profesional 2026

<div align="center">

  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

  <br />
  
  <h2 align="center">Diseño & Código Sin Límites.</h2>

  <p align="center">
    Una <strong>Single Page Application (SPA)</strong> moderna, construida desde cero con Vanilla JavaScript y estilizada con la potencia de Tailwind CSS.
  </p>

  [Ver Demo en Vivo 🚀](https://javiergarciagrossi-blip.github.io/trabajo-portfolio/)
  
  <br />
</div>

---

## 📸 Vista Previa

> **Nota:** *[Aquí puedes poner una captura de pantalla de tu web. Sube una imagen llamada `screenshot.png` a tu repo y descomenta la línea de abajo]*

---

## 🎨 Características Principales

Este proyecto demuestra el dominio de conceptos modernos de desarrollo frontend sin depender de frameworks pesados:

* **🌗 Sistema de Temas Dual:**
    * **Modo Oscuro (Default):** Estética "Cyberpunk" con neones, glassmorphism y formas flotantes animadas.
    * **Modo Claro:** Estética minimalista y limpia con alta legibilidad.
    * *Persistencia de datos:* Recuerda tu preferencia automáticamente.
* **⚡ Arquitectura SPA (Single Page Application):**
    * Enrutamiento personalizado (`Router`) sin recargas de página.
    * Navegación fluida y gestión del historial del navegador (`History API`).
* **✨ Experiencia de Usuario (UX/UI):**
    * **Scroll Reveal:** Animaciones de entrada al hacer scroll usando `Intersection Observer`.
    * **Glassmorphism:** Efectos de cristal esmerilado en Navbar y Footer.
    * **Formas Animadas:** Fondo dinámico con animaciones CSS puras.
* **📱 Diseño Responsive:**
    * Adaptable 100% a móviles, tablets y escritorio (Mobile First approach).
    * Menú hamburguesa interactivo.
* **🛡️ Gestión de Errores:**
    * Página 404 personalizada con diseño coherente y redirección.

---

## 🛠️ Tecnologías Utilizadas

* **Core:** HTML5, CSS3, JavaScript (ES6+).
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Configuración avanzada, modo oscuro manual, fuentes custom).
* **Build Tool:** [Vite](https://vitejs.dev/) (Para un entorno de desarrollo ultrarrápido y build optimizado).
* **Tipografía:** Google Fonts ('Outfit' para sans, 'Playfair Display' para serif).
* **Despliegue:** GitHub Pages (Automatizado con `gh-pages`).

---

## 🚀 Instalación y Uso Local

Si quieres clonar y ejecutar este proyecto en tu máquina:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/javiergarciagrossi-blip/trabajo-portfolio.git](https://github.com/javiergarciagrossi-blip/trabajo-portfolio.git)
    cd trabajo-portfolio
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Construir para producción:**
    ```bash
    npm run build
    ```

---

## 📂 Estructura del Proyecto

```text
src/
├── components/      # Piezas reutilizables (Navbar, Footer, Cards...)
├── data/            # Datos estáticos (Proyectos) simulando una DB
├── pages/           # Vistas principales (Home, Projects, 404)
├── utils/           # Utilidades lógicas (Scroll Observer)
├── main.js          # Punto de entrada y Router principal
└── style.css        # Directivas de Tailwind y estilos globales
