# Workflow Runner

Workflow Runner is a small React 19 application built with Vite that demonstrates component composition, Hooks-based state management, prop-driven data flow, LocalStorage persistence, and basic unit testing.

Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Project structure

- `src/core/workflowEngine.js` — persistence utilities and ID generation.
- `src/containers/WorkflowApp.jsx` — main application container and state logic.
- `src/elements` — UI components: `WorkflowInput`, `WorkflowList`, `WorkflowItem`, `WorkflowFilters`.
- `src/styles/App.css` — application styles and responsive layout.
- `src/__tests__` — unit tests for key components (Vitest + React Testing Library).

Notes

- The app uses `crypto.randomUUID()` when available to generate unique IDs for Flow items.
- State is synchronized with LocalStorage under the key `workflow_runner.state`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
