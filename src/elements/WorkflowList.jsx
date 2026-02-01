import React from 'react'
import WorkflowItem from './WorkflowItem'

export default function WorkflowList({ items, onToggle, onDelete, onEdit }) {
  if (!items || items.length === 0) {
    return <p className="empty">No activities in your Flow — add one above.</p>
  }

  return (
    <ul className="workflow-list" aria-label="Flow list">
      {items.map((item) => (
        <WorkflowItem key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  )
}
