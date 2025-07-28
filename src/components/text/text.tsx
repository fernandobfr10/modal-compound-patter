import { createElement, forwardRef } from 'react'
import { Slot } from '../../utils/slot'
import { textClasses } from '../../utils/text-classes'
import type { TextProps } from './text.types'

/**
 * Text - A foundational text primitive based on Radix UI
 * 
 * @example
 * ```tsx
 * // Basic text (renders as p by default, size 3)
 * <Text>Body text content</Text>
 * 
 * // Different elements
 * <Text as="span">Inline text</Text>
 * <Text as="label" htmlFor="input">Label text</Text>
 * <Text as="div">Block text</Text>
 * <Text as="b">Bold text</Text>
 * 
 * // With advanced styling
 * <Text size="5" weight="bold" align="center" trim="both" wrap="balance">
 *   Perfectly Balanced Text with Advanced Typography
 * </Text>
 * 
 * // With asChild - renders custom element
 * <Text asChild size="4" weight="medium">
 *   <span className="custom-text">Custom Element</span>
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, as = 'p', size = '3', weight = 'regular', align, trim = 'normal', truncate, wrap = 'wrap', className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as
    
    return createElement(
      Comp,
      {
        ref,
        className: textClasses({ size, weight, align, trim, truncate, wrap, className }),
        ...props,
      },
      children
    )
  }
)

Text.displayName = 'Text' 