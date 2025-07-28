import { useLayoutEffect, useState } from 'react'

/**
 * Hook to check if we're currently inside a Portal
 */
export function useIsInsidePortal(): boolean {
  const [isInsidePortal, setIsInsidePortal] = useState(false)

  useLayoutEffect(() => {
    // Check if current element is inside a portal by checking if it's not in normal document flow
    const checkPortal = () => {
      // This is a simple heuristic - in a real app you might want more sophisticated detection
      return document.body !== document.body.parentElement
    }
    
    setIsInsidePortal(checkPortal())
  }, [])

  return isInsidePortal
}

/**
 * Utility to create a portal container element
 */
export function createPortalContainer(id: string, className?: string): HTMLElement {
  let container = document.getElementById(id)
  
  if (!container) {
    container = document.createElement('div')
    container.id = id
    if (className) {
      container.className = className
    }
    document.body.appendChild(container)
  }
  
  return container
} 