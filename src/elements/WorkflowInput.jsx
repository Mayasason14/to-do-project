import React, { useState } from 'react'

export default function WorkflowInput({ onAdd }) {
  const [text, setText] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text)
    setText('')
  }

  return (
    <form className="workflow-input" onSubmit={submit} aria-label="Add Flow Item">
      <input
        aria-label="New Flow text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new Flow item"
      />
      <button aria-label="Add Flow" type="submit">Add</button>
    </form>
  )
}
