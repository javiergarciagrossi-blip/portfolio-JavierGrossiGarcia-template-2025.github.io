# Repository Guidelines

## Project Structure & Architecture

This is a Vite-built single-page portfolio application. `src/main.js` is the entry point and manual router: it maps `/`, `/projects`, and `/project-details?id=...` to page functions, renders into `#app`, handles `data-link` navigation, theme persistence, mobile navigation, anchors, and scroll reveals.

- `src/pages/` contains view functions that return HTML template strings.
- `src/components/` contains reusable template-string components such as `Navbar`, `Footer`, `Contact`, `ProjectCard`, and `ThemeToggle`.
- `src/data/projectsData.js` is the single source for portfolio project metadata; each project needs a unique `id`, text, image, and links.
- `src/utils/observer.js` owns `IntersectionObserver` reveal behavior.
- `src/style.css`, `tailwind.config.js`, and `postcss.config.js` define global styling, tokens, dark-mode class behavior, and animations.
- `public/` stores images served with the site; `docs/` stores project plans.

When adding a page, export a function from `src/pages/`, add its path to `routes` in `src/main.js`, and use `data-link` for internal SPA links. When adding a project, update only `projectsData.js`; cards and detail pages consume that data automatically.

## Build, Test, and Development Commands

Install dependencies before working:

```bash
npm install
```

- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` creates the production bundle in `dist/` and is the required pre-PR verification.
- `npm run preview` serves the built `dist/` output locally for production-like checking.

There is currently no automated test script or test suite. Manually check navigation, theme switching, responsive layouts, project details, and the 404 route while using the dev server or preview server.

## Coding Style & Naming Conventions

Use modern ES modules and plain JavaScript; keep components focused and reusable. Match the existing two-space indentation and semicolon style. Use `PascalCase` for component filenames and component functions, `camelCase` for variables/functions, and descriptive lower-case names for page modules. Prefer Tailwind utility classes for styling and keep global rules in `src/style.css`. Preserve the existing project data shape and use kebab-case IDs such as `chupa-chups`. Keep user-facing copy in Spanish unless the feature requires otherwise.

## Testing Guidelines

No coverage threshold is defined. For every change, run `npm run build` and perform the relevant manual browser checks. When adding tests in the future, place them alongside the code or under a dedicated `tests/` directory, and use descriptive names such as `ProjectCard.test.js`.

## Commit & Pull Request Guidelines

Recent history uses short, imperative subjects such as `Fix imagenes` and `Update workflow to build Vite project`. Follow that convention: keep the subject concise, describe one change, and avoid unrelated formatting churn. Pull requests should explain the user-visible change, list verification steps (including `npm run build`), link any related issue, and include screenshots or short recordings for visual changes. Note deployment or configuration changes explicitly.

## Deployment & Configuration

Pushes to `main` trigger `.github/workflows/static.yml`, which installs dependencies, runs the Vite build, and deploys `dist/` to GitHub Pages. Do not commit secrets; keep repository-specific deployment settings in the workflow or GitHub configuration.
