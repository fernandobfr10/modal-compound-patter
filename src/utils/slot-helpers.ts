import React from 'react'

/**
 * Merges props from parent and child components intelligently
 */
export function mergeProps(
  parentProps: Record<string, unknown>, 
  childProps: Record<string, unknown>
): Record<string, unknown> {
  const merged = { ...parentProps }

  for (const key in childProps) {
    const parentValue = parentProps[key]
    const childValue = childProps[key]

    if (key === 'className') {
      // Merge CSS classes
      merged[key] = [parentValue, childValue].filter(Boolean).join(' ')
    } else if (key === 'style') {
      // Merge style objects
      merged[key] = {
        ...(typeof parentValue === 'object' && parentValue ? parentValue : {}),
        ...(typeof childValue === 'object' && childValue ? childValue : {}),
      }
    } else if (key.startsWith('on') && typeof parentValue === 'function' && typeof childValue === 'function') {
      // Merge event handlers - call parent first, then child
      merged[key] = (...args: unknown[]) => {
        (parentValue as (...args: unknown[]) => void)(...args);
        (childValue as (...args: unknown[]) => void)(...args)
      }
    } else if (key === 'ref') {
      // Handle refs properly
      merged[key] = (node: HTMLElement | null) => {
        // Call parent ref
        if (typeof parentValue === 'function') {
          (parentValue as (node: HTMLElement | null) => void)(node)
        } else if (parentValue && typeof parentValue === 'object') {
          (parentValue as React.MutableRefObject<HTMLElement | null>).current = node
        }
        
        // Call child ref
        if (typeof childValue === 'function') {
          (childValue as (node: HTMLElement | null) => void)(node)
        } else if (childValue && typeof childValue === 'object') {
          (childValue as React.MutableRefObject<HTMLElement | null>).current = node
        }
      }
    } else {
      // Child props take precedence for other attributes
      merged[key] = childValue
    }
  }

  return merged
} 