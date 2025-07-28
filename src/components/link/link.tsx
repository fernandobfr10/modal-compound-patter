import { createElement, forwardRef } from 'react'
import { linkClasses } from '../../utils/link-classes'
import { Slot } from '../../utils/slot'
import type { LinkProps } from './link.types'

/**
 * Link - A foundational link primitive based on Radix UI
 * 
 * @example
 * ```tsx
 * // Basic link (always renders as <a>, size 3)
 * <Link href="/about">About Page</Link>
 * 
 * // External link
 * <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
 *   External Link
 * </Link>
 * 
 * // With advanced features
 * <Link size="5" weight="bold" underline="hover" trim="both" wrap="balance">
 *   Perfectly Styled Link with Advanced Typography
 * </Link>
 * 
 * // With asChild - renders custom element
 * <Link asChild size="4" weight="medium" underline="always">
 *   <button className="custom-link-button">Custom Link Button</button>
 * </Link>
 * ```
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, size = '3', weight = 'regular', align, trim = 'normal', truncate, wrap = 'wrap', underline = 'auto', className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'

    return createElement(
      Comp,
      {
        ref,
        className: linkClasses({ size, weight, align, trim, truncate, wrap, underline, className }),
        ...props,
      },
      children
    )
  }
)

Link.displayName = 'Link' 