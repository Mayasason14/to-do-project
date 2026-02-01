import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import WorkflowItem from '../elements/WorkflowItem'

const sample = { id: '1', text: 'Sample', completed: false }

describe('WorkflowItem', () => {
  it('renders item and handles toggle and delete', () => {
    const onToggle = vi.fn()
    const onDelete = vi.fn()
    const onEdit = vi.fn()

    render(<WorkflowItem item={sample} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />)

    const toggle = screen.getByLabelText(/Toggle Sample/i)
    const del = screen.getByLabelText(/Delete Sample/i)
    const editBtn = screen.getByLabelText(/Edit Sample/i)

    fireEvent.click(toggle)
    expect(onToggle).toHaveBeenCalledWith('1')

    fireEvent.click(editBtn)
    const save = screen.getByLabelText(/Save Sample/i)
    const input = screen.getByLabelText(/Edit task description/i)
    fireEvent.change(input, { target: { value: 'Updated' } })
    fireEvent.click(save)
    expect(onEdit).toHaveBeenCalledWith('1', 'Updated')

    fireEvent.click(del)
    expect(onDelete).toHaveBeenCalledWith('1')
  })
})
