import React from 'react'

export default function WorkflowFilters({ current, onChange, onClearFinished }) {
  return (
    <div className="workflow-filters" role="toolbar" aria-label="Workflow Filters">
      <button
        aria-label="Show All"
        className={`filter-button ${current === 'all' ? 'active' : ''}`}
        onClick={() => onChange('all')}
      >
        All
      </button>

      <button
        aria-label="Show In-Progress"
        className={`filter-button ${current === 'in-progress' ? 'active' : ''}`}
        onClick={() => onChange('in-progress')}
      >
        In-Progress
      </button>

      <button
        aria-label="Show Finished"
        className={`filter-button ${current === 'finished' ? 'active' : ''}`}
        onClick={() => onChange('finished')}
      >
        Finished
      </button>

      <button aria-label="Clear Finished" className="clear-button" onClick={onClearFinished}>
        Clear Finished
      </button>
    </div>
  )
}
