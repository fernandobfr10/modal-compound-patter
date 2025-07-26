import { useEffect } from 'react'

export function useEscapeKey(
  isActive: boolean,
  onEscape: (event: KeyboardEvent) => void
) {
  useEffect(() => {
    if (!isActive) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscape(event)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive, onEscape])
} 