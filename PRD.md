# Workflow Runner — Product Requirements Document (PRD)

**Version:** 1.0

## Project Overview

**Workflow Runner** is a single-page React 19 application scaffolded with Vite that demonstrates core React fundamentals: functional components, state management with Hooks, prop-driven data flow, event callbacks, and client-side persistence. The project uses a "Workflow" theme to distinguish it from generic task lists and to emphasize flow-oriented terminology.

## Goals

- Demonstrate React 19 Functional Components and Hooks (`useState`, `useEffect`).
- Provide a clean, accessible interface for managing workflows: create, edit, toggle completion, delete, and filter Flow items.
- Persist workflow state in LocalStorage so the app restores previous state between sessions.
- Keep architecture modular and testable, with clear separation of concerns.

## Functional Requirements

- **Task Management**: Users can **add** a new Flow item with a text description, **edit** an existing item, **toggle** completion (In-Progress ↔ Finished), and **delete** an item.
- **Filtering System**: Provide three views — **All**, **In-Progress (Active)**, and **Finished (Completed)**. Filters must update the visible item list immediately.
- **Visual Indicator**: The currently active filter must be visually highlighted (for example, via a distinct background, underline, or bold label).
- **Live Counter**: Display a real-time counter of remaining active (In-Progress) Flow items.

## Technical Requirements

### Architecture

- The app must be implemented as a composition of **at least four** functional components with single responsibilities. Example components:
  - **WorkflowInput** — handles new item entry and submission.
  - **WorkflowList** — receives an array of Flow items and renders them.
  - **WorkflowItem** — represents a single Flow item with edit/toggle/delete controls.
  - **WorkflowFilters** — manages filter selection and batch actions (e.g., clear finished).

### State & Data

- Do **not** use external state libraries (e.g., Redux, Zustand) or routing libraries. Use React Hooks (`useState`, `useEffect`) for state management.
- Persist the app state in `localStorage` under a dedicated key (suggested key: **`workflow_runner.state`**). Initialize state from LocalStorage on app load and write updates back on change.
- Generate **unique IDs** for each Flow item (UUID or timestamp+salt) to avoid collisions.

### Props & Events

- Follow unidirectional data flow: **data flows down** via `props`; **events flow up** via callback props (e.g., `onAdd`, `onEdit`, `onToggle`, `onDelete`, `onClearFinished`).

### Tooling

- Use **Vite** as the build tool. The codebase should be compatible with React 19.
- Use ESLint/Prettier or configured formatting rules for consistent code style (if present in the repo).

## Bonus Features (Optional)

- **Unit tests** using **Vitest** and **React Testing Library** for at least two components (e.g., `WorkflowInput` and `WorkflowList`/`WorkflowItem`).
- **Batch Clear**: a **Clear Finished** or **Batch Clear** action that removes all Completed (Finished) Flow items at once.

## Acceptance Criteria / Evaluation

The implementation will be evaluated against the following functional and quality criteria. Suggested scoring distribution:

- **CRUD Functionality (Add/Edit/Delete/Toggle): 30%** — All standard operations work correctly and persist to LocalStorage.
- **Filtering & UI State (All/In-Progress/Finished + Visual Indicator): 20%** — Filters work and the active filter is clearly highlighted.
- **Persistence (LocalStorage Integration): 20%** — State is loaded from and saved to LocalStorage reliably.
- **Code Quality & Architecture: 20%** — Clear component separation, semantic naming, consistent formatting, and correct use of Hooks and props.
- **Tests & Bonus Features: 10%** — Presence and quality of unit tests and optional Batch Clear feature.

Acceptance tests (examples):

- Adding a Flow item causes it to appear in the list and persist on reload.
- Editing an item updates its text and persists the change.
- Toggling an item updates its completed status and updates the active counter.
- Selecting filters updates the displayed items; the active filter is visually distinct.
- Using **Batch Clear** removes all Finished items and persists the result.

## Data Model

- **FlowItem** object shape (recommended):
  - **id**: string — unique identifier.
  - **text**: string — description of the Flow item.
  - **completed**: boolean — Finished (true) or In-Progress (false).
  - **createdAt**: number — timestamp for sorting/auditing.

## LocalStorage Integration

- **Key**: `workflow_runner.state` (namespace to avoid collisions).
- **Strategy**: Initialize from LocalStorage on mount. Persist on every meaningful state change (debounce optional). Handle parse errors gracefully by falling back to an empty state.

## Recommended Implementation Plan

1. Initialize Vite + React 19 project skeleton.
2. Implement the Flow data model and LocalStorage synchronization utilities.
3. Build components: `WorkflowInput`, `WorkflowList`, `WorkflowItem`, `WorkflowFilters`.
4. Add live counter, visual filter indicator, and **Batch Clear** function.
5. Add unit tests for two components using Vitest + React Testing Library.
6. Prepare `README.md` with run/test instructions and push to GitHub.

## Submission Requirements

- A GitHub repository containing full source code and `package.json`.
- A `README.md` describing how to run the app and tests (commands for development and test runner).
- This PRD file (`PRD.md`) included at the repository root.

## Notes

- Use "Workflow" and "Flow" terminology consistently in the UI and documentation to emphasize the project theme.
- Keep component APIs small and test-friendly; favor explicit callback props and pure rendering where possible.

---

**File:** [PRD.md](PRD.md)
