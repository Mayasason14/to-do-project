import React, { useState } from 'react'

export default function WorkflowItem({ item, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(item.text)

  function save() {
    const trimmed = text.trim()
    if (!trimmed) return
    onEdit(item.id, trimmed)
    setEditing(false)
  }

  return (
    <li className={`flow-item ${item.completed ? 'finished' : ''}`} aria-label={`Flow item ${item.text}`}>
      <input
        aria-label={`Toggle ${item.text}`}
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />

      {!editing ? (
        <span className="flow-text">{item.text}</span>
      ) : (
        <input
          aria-label="Edit task description"
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}

      <div className="actions">
        {!editing ? (
          <button aria-label={`Edit ${item.text}`} onClick={() => setEditing(true)}>Edit</button>
        ) : (
          <>
            <button aria-label={`Save ${item.text}`} onClick={save}>Save</button>
            <button aria-label={`Cancel edit ${item.text}`} onClick={() => { setEditing(false); setText(item.text); }}>Cancel</button>
          </>
        )}

        <button aria-label={`Delete ${item.text}`} onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </li>
  )
}
