import type { HTMLAttributes, ReactNode } from 'react'

/**
 * Text component props following Radix UI pattern
 */
export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  
  /**
   * Change the default rendered element for the one passed as a child
   * @default false
   */
  asChild?: boolean
  
  /**
   * HTML element to render
   * @default "p"
   */
  as?: 'span' | 'div' | 'label' | 'p' | 'b'
  
  /**
   * Text size scale from 1 (smallest) to 9 (largest)
   * @default "3"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  
  /**
   * Font weight
   * @default "regular"
   */
  weight?: 'light' | 'regular' | 'medium' | 'bold'
  
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right'
  
  /**
   * Text trimming - removes whitespace
   * @default "normal"
   */
  trim?: 'normal' | 'start' | 'end' | 'both'
  
  /**
   * Whether to truncate text with ellipsis
   * @default false
   */
  truncate?: boolean
  
  /**
   * Text wrapping behavior
   * @default "wrap"
   */
  wrap?: 'wrap' | 'nowrap' | 'pretty' | 'balance'
} 