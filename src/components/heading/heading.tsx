import { createElement, forwardRef } from 'react'
import { headingClasses } from '../../utils/heading-classes'
import { Slot } from '../../utils/slot'
import type { HeadingProps } from './heading.types'

/**
 * Heading - A foundational heading primitive based on Radix UI
 * 
 * @example
 * ```tsx
 * // Basic heading (renders as h1 by default, size 6)
 * <Heading>Main Page Title</Heading>
 * 
 * // Different heading levels with appropriate sizes
 * <Heading as="h1" size="8">Page Title</Heading>
 * <Heading as="h2" size="7">Section Title</Heading>
 * <Heading as="h3" size="6">Subsection Title</Heading>
 * <Heading as="h4" size="5">Sub-subsection Title</Heading>
 * 
 * // With advanced features
 * <Heading size="7" weight="bold" align="center" trim="both" wrap="balance">
 *   Perfectly Balanced Heading with Advanced Typography
 * </Heading>
 * 
 * // With asChild - renders custom element
 * <Heading asChild size="8" weight="medium">
 *   <div className="custom-title">Custom Title Element</div>
 * </Heading>
 * ```
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, as = 'h1', size = '6', weight = 'regular', align, trim = 'normal', truncate, wrap = 'wrap', className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as

    return createElement(
      Comp,
      {
        ref,
        className: headingClasses({ size, weight, align, trim, truncate, wrap, className }),
        ...props,
      },
      children
    )
  }
)

Heading.displayName = 'Heading' 