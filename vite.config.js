import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // En local Vite sirve desde la raíz; en producción GitHub Pages usa el subdirectorio del repositorio.
  base: command === 'build' ? '/portfolio-JavierGrossiGarcia-template-2025.github.io/' : '/',
}))
