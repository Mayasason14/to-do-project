const STORAGE_KEY = 'workflow_runner.state'

function safeParse(json) {
  try {
    return JSON.parse(json)
  } catch (e) {
    console.warn('Failed to parse stored workflow state, resetting.', e)
    return null
  }
}

export function loadState() {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  const parsed = safeParse(raw)
  return parsed && Array.isArray(parsed) ? parsed : []
}

export function saveState(state) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.warn('Failed to save workflow state', e)
  }
}

export function clearState() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

export function generateId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

export { STORAGE_KEY }
