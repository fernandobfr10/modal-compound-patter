import { createElement, forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { textClasses } from '../../utils/text-classes'
import type { TextProps } from './text.types'

/**
 * Default Text component implementation
 */
const DefaultText = forwardRef<HTMLElement, Omit<TextProps, 'asChild'>>(
  ({ children, as = 'span', size = '3', weight = 'regular', align, truncate, className, ...props }, ref) => {
    const Element = as
    
    return createElement(
      Element,
      {
        ref,
        className: textClasses({ size, weight, align, truncate, className }),
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
 * // Basic text (renders as span by default)
 * <Text>Hello world</Text>
 * 
 * // Different sizes (1-9 scale)
 * <Text size="1">Very small text</Text>
 * <Text size="6">Large text</Text>
 * 
 * // Different elements
 * <Text as="p">Paragraph text</Text>
 * <Text as="label">Label text</Text>
 * 
 * // With styling
 * <Text size="4" weight="bold" align="center">
 *   Centered bold text
 * </Text>
 * 
 * // With asChild - renders custom element
 * <Text asChild size="5" weight="medium">
 *   <button className="custom-button">Custom button</button>
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, as = 'span', size = '3', weight = 'regular', align, truncate, className, asChild, ...props }, ref) => {
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
          truncate,
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
        truncate={truncate}
        className={className}
        {...props}
      >
        {children}
      </DefaultText>
    )
  }
)

Text.displayName = 'Text' 