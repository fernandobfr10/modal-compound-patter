import React from 'react'

/**
 * Utility for implementing asChild functionality like Radix UI
 * 
 * When asChild is true, the component will render its child directly
 * with the component's props merged in.
 */

/**
 * Merges props, combining className and event handlers appropriately
 */
function mergeProps(parentProps: Record<string, unknown>, childProps: Record<string, unknown>) {
  const merged = { ...parentProps }

  for (const key in childProps) {
    const parentValue = parentProps[key]
    const childValue = childProps[key]

    if (key === 'className') {
      // Merge className strings
      merged[key] = [parentValue, childValue].filter(Boolean).join(' ')
    } else if (key === 'style') {
      // Merge style objects
      merged[key] = { 
        ...(typeof parentValue === 'object' && parentValue ? parentValue : {}), 
        ...(typeof childValue === 'object' && childValue ? childValue : {}) 
      }
    } else if (key.startsWith('on') && typeof parentValue === 'function' && typeof childValue === 'function') {
      // Merge event handlers - call both
      merged[key] = (...args: unknown[]) => {
        ;(parentValue as (...args: unknown[]) => void)(...args)
        ;(childValue as (...args: unknown[]) => void)(...args)
      }
    } else {
      // Child props take precedence for other props
      merged[key] = childValue
    }
  }

  return merged
}

/**
 * Renders either the child element (when asChild=true) or the default component
 */
export function renderAsChild<T extends Record<string, unknown>>(
  asChild: boolean | undefined,
  children: React.ReactNode,
  DefaultComponent: React.ComponentType<T>,
  props: T
): React.ReactElement {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, mergeProps(props, children.props as Record<string, unknown>))
  }

  return React.createElement(DefaultComponent, props, children)
} 