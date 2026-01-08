# Plan de Sistema de Diseño (UI Kit)

## 1. Filosofía Visual
El sitio sigue una estética **"Glassmorphism Moderno"** con soporte nativo para **Dark Mode**. Prioriza la legibilidad, las transiciones suaves y la profundidad visual mediante capas (z-index) y desenfoques (backdrop-blur).

## 2. Paleta de Colores (Tailwind Config)
Definición de variables en `tailwind.config.js` para mantener consistencia.

- **Primary:** Un tono acento vibrante (ej. Indigo-500 o un degradado personalizado).
- **Background Light:** `bg-slate-50` (Casi blanco, limpio).
- **Background Dark:** `bg-slate-900` (Profundo, reduce fatiga visual).
- **Surface (Glass):** `bg-white/30` (Light) vs `bg-black/30` (Dark) con `backdrop-blur-xl`.
- **Text:** `text-slate-900` (Principal) / `text-slate-600` (Secundario).

## 3. Tipografía
- **Headings:** Sans-serif geométrica (ej. 'Inter' o 'Space Grotesk') para títulos impactantes.
- **Body:** Sans-serif legible con buen tracking.
- **Monospace:** Para snippets de código o etiquetas técnicas.

## 4. Componentes Base
Lista de componentes reutilizables a implementar en `/src/components/`:

### A. Botones (`Button.js`)
- Variantes: `primary` (relleno), `outline` (borde), `ghost` (solo texto).
- Estados: Hover (scale-105), Active, Disabled.

### B. Tarjetas (`ProjectCard.js`)
- Estilo: Borde sutil (`border-white/10`), sombra suave, efecto *lift* al hacer hover.
- Contenido: Imagen (aspect-video), Título, Tags (pills), Link.

### C. Navegación
- Navbar pegajoso (`sticky top-0`) con efecto blur.
- Footer con enlaces sociales y copyright.

## 5. Animaciones
Uso de clases utilitarias de Tailwind para micro-interacciones:
- `transition-all duration-300` como estándar.
- `hover:scale-105` para elementos interactivos.
- `animate-fade-in` para la carga inicial de contenido.