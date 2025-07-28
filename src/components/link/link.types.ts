import type { AnchorHTMLAttributes, ReactNode } from 'react'

/**
 * Link component props following Radix UI pattern
 */
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  
  /**
   * Change the default rendered element for the one passed as a child
   * @default false
   */
  asChild?: boolean
  
  /**
   * Link size scale from 1 (smallest) to 9 (largest)
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
  
  /**
   * Underline behavior for links
   * @default "auto"
   */
  underline?: 'auto' | 'always' | 'hover' | 'none'
} 