import React, { useEffect, useMemo, useState } from 'react'
import { loadState, saveState, generateId } from '../core/workflowEngine'
import WorkflowInput from '../elements/WorkflowInput'
import WorkflowList from '../elements/WorkflowList'
import WorkflowFilters from '../elements/WorkflowFilters'
import '../styles/App.css'

const FILTERS = {
  ALL: 'all',
  IN_PROGRESS: 'in-progress',
  FINISHED: 'finished',
}

export default function WorkflowApp() {
  const [flows, setFlows] = useState(() => loadState())
  const [filter, setFilter] = useState(FILTERS.ALL)

  useEffect(() => {
    saveState(flows)
  }, [flows])

  function handleAdd(text) {
    const item = { id: generateId(), text: text.trim(), completed: false, createdAt: Date.now() }
    if (!item.text) return
    setFlows((s) => [...s, item])
  }

  function handleDelete(id) {
    setFlows((s) => s.filter((i) => i.id !== id))
  }

  function handleToggle(id) {
    setFlows((s) => s.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i)))
  }

  function handleEdit(id, text) {
    setFlows((s) => s.map((i) => (i.id === id ? { ...i, text } : i)))
  }

  function handleClearFinished() {
    setFlows((s) => s.filter((i) => !i.completed))
  }

  const activeCount = useMemo(() => flows.filter((f) => !f.completed).length, [flows])

  const filtered = useMemo(() => {
    if (filter === FILTERS.IN_PROGRESS) return flows.filter((f) => !f.completed)
    if (filter === FILTERS.FINISHED) return flows.filter((f) => f.completed)
    return flows
  }, [flows, filter])

  return (
    <main className="workflow-app">
      <div className="card-wrap">
        <header>
          <h1>Workflow Runner</h1>
          <p className="subtitle">Manage your Flow — add, edit, complete and keep your work moving</p>
        </header>

        <section className="controls">
          <WorkflowInput onAdd={handleAdd} />
          <div className="stats">Active: <strong>{activeCount}</strong></div>
        </section>

        <WorkflowFilters
          current={filter}
          onChange={setFilter}
          onClearFinished={handleClearFinished}
        />

        <WorkflowList
          items={filtered}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </main>
  )
}
