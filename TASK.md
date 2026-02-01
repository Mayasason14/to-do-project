# TASK: Implementation Roadmap — Workflow Runner

This file is a step-by-step implementation checklist derived from `PRD.md`. Use the checkboxes to track progress.

- [ ] **Phase 1 — Foundation & Core Logic**
  - [ ] Create `src/core/workflowEngine.js` to centralize LocalStorage sync utilities (load, save, clear).
  - [ ] Implement serialization and parsing with error handling and an exported storage key (`workflow_runner.state`).
  - [ ] Initialize global state in `App.jsx` (use `useState` / `useEffect`) and wire up `workflowEngine` methods.
  - [ ] Define the Flow data model and ID generation (UUID or timestamp+salt).

- [ ] **Phase 2 — UI Elements (UI Layer)**
  - [ ] Build `src/components/WorkflowInput.jsx` for adding new Flow items (text input + submit).
  - [ ] Build `src/components/WorkflowItem.jsx` to render a single Flow item (display, edit, toggle, delete).
  - [ ] Build `src/components/WorkflowList.jsx` to render a list of `WorkflowItem` components and accept props for items and callbacks.
  - [ ] Create `src/components/WorkflowFilters.jsx` for filter buttons (`All`, `In-Progress`, `Finished`) and batch actions.

- [ ] **Phase 3 — Logic Implementation (CRUD)**
  - [ ] Implement **Add** in `App.jsx`: handler that creates a new FlowItem, updates state, and persists.
  - [ ] Implement **Delete** in `App.jsx`: handler to remove a FlowItem by `id` and persist.
  - [ ] Implement **Toggle** in `App.jsx`: handler to flip `completed` and persist; update live counter.
  - [ ] Implement **Edit** in `App.jsx`: handler to update item `text` and persist.
  - [ ] Ensure props and callbacks are passed correctly (data down, events up): `onAdd`, `onDelete`, `onToggle`, `onEdit`.

- [ ] **Phase 4 — Advanced Features**
  - [ ] Implement filtering logic in `App.jsx` and pass current filter to `WorkflowList`.
  - [ ] Implement visual highlighting of the active filter inside `WorkflowFilters.jsx`.
  - [ ] Add **Batch Clear** control in `WorkflowFilters.jsx` and implement `onClearFinished` handler in `App.jsx`.
  - [ ] Add Live Counter component or inline display for remaining active (In-Progress) items.

- [ ] **Phase 5 — Testing (Bonus)**
  - [ ] Add `vitest` and `@testing-library/react` to `package.json` devDependencies.
  - [ ] Create test setup file (Vitest + DOM environment) and scripts in `package.json`.
  - [ ] Write unit tests for `WorkflowInput.jsx` (render, input, submit -> `onAdd`).
  - [ ] Write unit tests for `WorkflowList.jsx` / `WorkflowItem.jsx` (rendering, toggle, delete callbacks).

- [ ] **Phase 6 — UI Refinement & Accessibility**
  - [ ] Add modern CSS (or CSS modules) to style components and emphasize active filter highlighting.
  - [ ] Ensure responsive layout (mobile-first) and test on small viewports.
  - [ ] Add ARIA attributes and `aria-label`s for interactive controls (inputs, buttons, list items).
  - [ ] Run accessibility checks (keyboard navigation, focus states, screen reader labels).

- [ ] **Phase 7 — Final Submission**
  - [ ] Clean up code, remove console logs, and run linters/formatters.
  - [ ] Create or update `README.md` with run and test instructions (dev, build, test commands).
  - [ ] Initialize Git repo (if not already), commit changes, and push to GitHub.
  - [ ] Confirm `PRD.md`, `TASK.md`, and `README.md` exist in the repository root.

---

If you want, I can now scaffold the component files for Phase 2 or implement the `workflowEngine` for Phase 1 — which should I start next?
