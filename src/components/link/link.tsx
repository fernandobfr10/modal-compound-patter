import { forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { linkClasses } from '../../utils/link-classes'
import type { LinkProps } from './link.types'

/**
 * Default Link component implementation
 */
const DefaultLink = forwardRef<HTMLAnchorElement, Omit<LinkProps, 'asChild'>>(
  ({ children, size = '3', weight = 'regular', align, trim = 'normal', truncate, wrap = 'wrap', underline = 'auto', className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={linkClasses({ size, weight, align, trim, truncate, wrap, underline, className })}
        {...props}
      >
        {children}
      </a>
    )
  }
)

DefaultLink.displayName = 'DefaultLink'

/**
 * Link - A foundational link primitive based on Radix UI
 * 
 * @example
 * ```tsx
 * // Basic link (renders as <a> by default, size 3)
 * <Link href="/about">About Page</Link>
 * 
 * // With advanced styling
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
    if (asChild) {
      return renderAsChild(
        asChild,
        children,
        DefaultLink,
        {
          children,
          size,
          weight,
          align,
          trim,
          truncate,
          wrap,
          underline,
          className,
          ref,
          ...props,
        }
      )
    }

    return (
      <DefaultLink
        ref={ref}
        size={size}
        weight={weight}
        align={align}
        trim={trim}
        truncate={truncate}
        wrap={wrap}
        underline={underline}
        className={className}
        {...props}
      >
        {children}
      </DefaultLink>
    )
  }
)

Link.displayName = 'Link' 