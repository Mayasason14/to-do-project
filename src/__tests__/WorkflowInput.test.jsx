import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import WorkflowInput from '../elements/WorkflowInput'

describe('WorkflowInput', () => {
  it('renders and calls onAdd with input text', () => {
    const onAdd = vi.fn()
    render(<WorkflowInput onAdd={onAdd} />)

    const input = screen.getByLabelText(/New Flow text/i)
    const button = screen.getByRole('button', { name: /Add Flow/i })

    fireEvent.change(input, { target: { value: 'New task' } })
    fireEvent.click(button)

    expect(onAdd).toHaveBeenCalledTimes(1)
    expect(onAdd).toHaveBeenCalledWith('New task')
  })
})
