# Workflow Runner

Workflow Runner is a small React 19 application built with Vite that demonstrates component composition, Hooks-based state management, prop-driven data flow, LocalStorage persistence, and basic unit testing.

Getting started

# Workflow Runner

Workflow Runner is a modern, dashboard-style Flow management application built with React 19 and Vite. It demonstrates component composition, Hooks-based state management, prop-driven data flow, LocalStorage persistence, accessibility best practices and unit testing with Vitest.

## Description

A polished Workflow Runner app focusing on "Flow" terminology and workflow-oriented interactions. Users can add, edit, toggle completion, delete, filter, and batch-clear finished Flow items. State persists in the browser via LocalStorage.

## How to run

Install dependencies (use legacy peer deps for compatibility with React 19 if required):

```bash
npm install --legacy-peer-deps
```

Start the development server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

## Components

- **WorkflowApp** — Main container that manages state, persistence, and coordinates child components.
- **WorkflowInput** — Controlled input for creating new Flow items with accessible labels.
- **WorkflowList** — Displays a list of Flow items or an empty state when no items exist.
- **WorkflowItem** — Single Flow item component with toggle, edit and delete actions; accessible and keyboard-friendly.
- **WorkflowFilters** — Filter controls for `All`, `In-Progress`, and `Finished` views, and a Batch Clear action.

## Tests

Unit tests are implemented with Vitest and React Testing Library for core components (`WorkflowInput`, `WorkflowItem`). The test environment uses JSDOM and jest-dom matchers.

## Known issues

None — all tests pass and the app is functionally complete.

## Notes

- State is persisted to LocalStorage under the key `workflow_runner.state`.
- IDs are generated using `crypto.randomUUID()` when available; a safe fallback is included.
