import { useEffect, useRef } from 'react'

const FOCUSABLE_ELEMENTS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input[type="text"]:not([disabled])',
  'input[type="radio"]:not([disabled])',
  'input[type="checkbox"]:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLElement>(null)
  const previousActiveElement = useRef<Element | null>(null)

  useEffect(() => {
    if (!isActive) return

    const container = containerRef.current
    if (!container) return

    // Store the currently focused element
    previousActiveElement.current = document.activeElement

    // Get all focusable elements within the container
    const focusableElements = container.querySelectorAll(FOCUSABLE_ELEMENTS)
    const firstFocusable = focusableElements[0] as HTMLElement
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement

    // Focus the first element
    if (firstFocusable) {
      firstFocusable.focus()
    }

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      if (event.shiftKey) {
        // Shift + Tab: moving backwards
        if (document.activeElement === firstFocusable) {
          event.preventDefault()
          lastFocusable?.focus()
        }
      } else {
        // Tab: moving forwards
        if (document.activeElement === lastFocusable) {
          event.preventDefault()
          firstFocusable?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)

    return () => {
      document.removeEventListener('keydown', handleTabKey)
      
      // Restore focus to the previously focused element
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus()
      }
    }
  }, [isActive])

  return containerRef
} 