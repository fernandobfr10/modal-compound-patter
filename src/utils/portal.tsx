import { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * Portal component props
 */
export interface PortalProps {
  children: React.ReactNode
  /**
   * An optional container where the portaled content should be appended.
   * @default document.body
   */
  container?: HTMLElement | null
  /**
   * Specify a container by querySelector string.
   * @default undefined
   */
  containerQuery?: string
  /**
   * Whether the portal should be disabled and render children normally.
   * @default false
   */
  asChild?: boolean
}

/**
 * Portal component inspired by Radix UI
 * 
 * Renders children into a different part of the DOM tree while preserving React context.
 * 
 * @example
 * ```tsx
 * // Basic usage - renders in document.body
 * <Portal>
 *   <div>This will be rendered at the end of body</div>
 * </Portal>
 * 
 * // Custom container
 * <Portal container={myElement}>
 *   <div>This will be rendered inside myElement</div>
 * </Portal>
 * 
 * // Query selector
 * <Portal containerQuery="#modal-root">
 *   <div>This will be rendered inside element with id="modal-root"</div>
 * </Portal>
 * 
 * // Disabled portal (renders normally)
 * <Portal asChild>
 *   <div>This will render in normal position</div>
 * </Portal>
 * ```
 */
export function Portal({
  children,
  container,
  containerQuery,
  asChild = false,
}: PortalProps) {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    if (asChild) {
      setMountNode(null)
      return
    }

    let targetContainer: HTMLElement | null = null

    // Priority: explicit container > containerQuery > document.body
    if (container !== undefined) {
      targetContainer = container
    } else if (containerQuery) {
      targetContainer = document.querySelector(containerQuery)
      if (!targetContainer) {
        console.warn(`Portal: No element found for query "${containerQuery}"`)
        targetContainer = document.body
      }
    } else {
      targetContainer = document.body
    }

    setMountNode(targetContainer)
  }, [container, containerQuery, asChild])

  // If asChild is true, render children normally (no portal)
  if (asChild) {
    return <>{children}</>
  }

  // If no mount node yet, don't render anything
  if (!mountNode) {
    return null
  }

  // Create portal
  return createPortal(children, mountNode)
} 