import React, { forwardRef } from 'react'
import { mergeProps } from './slot-helpers'

/**
 * Custom Slot implementation inspired by Radix UI
 * 
 * This component allows for polymorphic rendering - it can render as any element
 * while preserving the functionality and props of the parent component.
 */

/**
 * Props for the Slot component
 */
export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

/**
 * Slot component that renders its child with merged props
 * 
 * @example
 * ```tsx
 * // Instead of rendering <button>, renders the child <a> with button props
 * <Slot onClick={handleClick} className="btn">
 *   <a href="/link">Custom Link</a>
 * </Slot>
 * // Result: <a href="/link" onClick={handleClick} className="btn">Custom Link</a>
 * ```
 */
export const Slot = forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children)
    
    // Handle the case where there are no children
    if (childrenArray.length === 0) {
      console.warn('Slot: No children provided')
      return null
    }
    
    // Handle the case where there are multiple children
    if (childrenArray.length > 1) {
      console.warn('Slot: Multiple children provided, using the first valid React element')
    }
    
    // Find the first valid React element
    const slottableChild = childrenArray.find((child): child is React.ReactElement => 
      React.isValidElement(child)
    )
    
    if (!slottableChild) {
      console.warn('Slot: No valid React element found in children')
      return <>{children}</>
    }
    
    // Merge props and clone the element
    const mergedProps = mergeProps(
      { ...props, ref }, 
      slottableChild.props as Record<string, unknown>
    )
    
    return React.cloneElement(slottableChild, mergedProps)
  }
)

Slot.displayName = 'Slot' 