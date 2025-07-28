import { createElement, forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { textClasses } from '../../utils/text-classes'
import type { TextProps } from './text.types'

/**
 * Default Text component implementation
 */
const DefaultText = forwardRef<HTMLElement, Omit<TextProps, 'asChild'>>(
  ({ children, as = 'p', size = '3', weight = 'regular', align, trim = 'normal', truncate, wrap = 'wrap', className, ...props }, ref) => {
    const Element = as
    
    return createElement(
      Element,
      {
        ref,
        className: textClasses({ size, weight, align, trim, truncate, wrap, className }),
        ...props,
      },
      children
    )
  }
)

DefaultText.displayName = 'DefaultText'

/**
 * Text - A foundational text primitive based on Radix UI
 * 
 * @example
 * ```tsx
 * // Basic text (renders as p by default)
 * <Text>Hello world</Text>
 * 
 * // Different sizes (1-9 scale)
 * <Text size="1">Very small text</Text>
 * <Text size="6">Large text</Text>
 * 
 * // Different elements
 * <Text as="span">Span text</Text>
 * <Text as="label">Label text</Text>
 * 
 * // With styling and new props
 * <Text size="4" weight="bold" align="center" trim="both" wrap="balance">
 *   Styled text with trimming and text-wrap balance
 * </Text>
 * 
 * // With asChild - renders custom element
 * <Text asChild size="5" weight="medium">
 *   <button className="custom-button">Custom button</button>
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, as = 'p', size = '3', weight = 'regular', align, trim = 'normal', truncate, wrap = 'wrap', className, asChild, ...props }, ref) => {
    if (asChild) {
      return renderAsChild(
        asChild,
        children,
        DefaultText,
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
      <DefaultText
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
      </DefaultText>
    )
  }
)

Text.displayName = 'Text' 