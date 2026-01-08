# Plan de Despliegue (CI/CD)

## 1. Estrategia de Hosting
Utilizaremos **GitHub Pages** para alojar el portfolio estático. Es gratuito, rápido y se integra perfectamente con el repositorio.

## 2. Configuración de Build (Vite)
El comando `npm run build` genera la carpeta `/dist`. Necesitamos asegurar que las rutas sean relativas para que funcionen en el subdominio de GitHub.

- **Archivo:** `vite.config.js`
- **Ajuste:** Configurar `base` correctamente.
  ```javascript
  export default defineConfig({
    base: '/nombre-de-tu-repo/', // Importante para GitHub Pages
  })