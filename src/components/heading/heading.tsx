import { createElement, forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { headingClasses } from '../../utils/heading-classes'
import type { HeadingProps } from './heading.types'

/**
 * Default Heading component implementation
 */
const DefaultHeading = forwardRef<HTMLHeadingElement, Omit<HeadingProps, 'asChild'>>(
  ({ children, as = 'h1', size = '6', weight = 'regular', align, trim = 'normal', truncate, wrap = 'wrap', className, ...props }, ref) => {
    const Element = as
    
    return createElement(
      Element,
      {
        ref,
        className: headingClasses({ size, weight, align, trim, truncate, wrap, className }),
        ...props,
      },
      children
    )
  }
)

DefaultHeading.displayName = 'DefaultHeading'

/**
 * Heading - A foundational heading primitive based on Radix UI
 * 
 * @example
 * ```tsx
 * // Basic heading (renders as h1 by default, size 6)
 * <Heading>Main Title</Heading>
 * 
 * // Different heading levels
 * <Heading as="h1" size="8">Page Title</Heading>
 * <Heading as="h2" size="6">Section Title</Heading>
 * <Heading as="h3" size="4">Subsection Title</Heading>
 * 
 * // With advanced styling
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
    if (asChild) {
      return renderAsChild(
        asChild,
        children,
        DefaultHeading,
        {
          children,
          as,
          size,
          weight,
          align,
          trim,
          truncate,
          wrap,
          className,
          ref,
          ...props,
        }
      )
    }

    return (
      <DefaultHeading
        ref={ref}
        as={as}
        size={size}
        weight={weight}
        align={align}
        trim={trim}
        truncate={truncate}
        wrap={wrap}
        className={className}
        {...props}
      >
        {children}
      </DefaultHeading>
    )
  }
)

Heading.displayName = 'Heading' 