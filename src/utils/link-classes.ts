import type { LinkProps } from '../components/link/link.types'
import { cn } from './cn'

/**
 * Link component class generator
 */
export const linkClasses = (props?: Pick<LinkProps, 'size' | 'weight' | 'align' | 'trim' | 'truncate' | 'wrap' | 'underline'> & { className?: string }) => {
  const { size = '3', weight = 'regular', align, trim = 'normal', truncate, wrap = 'wrap', underline = 'auto', className } = props || {}
  
  return cn(
    // Base class
    'link-base',
    
    // Size variants (1-9 scale following Radix UI)
    size === '1' && 'link-size-1',
    size === '2' && 'link-size-2',
    size === '3' && 'link-size-3',
    size === '4' && 'link-size-4',
    size === '5' && 'link-size-5',
    size === '6' && 'link-size-6',
    size === '7' && 'link-size-7',
    size === '8' && 'link-size-8',
    size === '9' && 'link-size-9',
    
    // Weight variants
    weight === 'light' && 'link-weight-light',
    weight === 'regular' && 'link-weight-regular',
    weight === 'medium' && 'link-weight-medium',
    weight === 'bold' && 'link-weight-bold',
    
    // Alignment variants
    align === 'left' && 'link-align-left',
    align === 'center' && 'link-align-center',
    align === 'right' && 'link-align-right',
    
    // Trim variants
    trim === 'normal' && 'link-trim-normal',
    trim === 'start' && 'link-trim-start',
    trim === 'end' && 'link-trim-end',
    trim === 'both' && 'link-trim-both',
    
    // Truncate
    truncate && 'link-truncate',
    
    // Wrap variants
    wrap === 'wrap' && 'link-wrap-wrap',
    wrap === 'nowrap' && 'link-wrap-nowrap',
    wrap === 'pretty' && 'link-wrap-pretty',
    wrap === 'balance' && 'link-wrap-balance',
    
    // Underline variants
    underline === 'auto' && 'link-underline-auto',
    underline === 'always' && 'link-underline-always',
    underline === 'hover' && 'link-underline-hover',
    underline === 'none' && 'link-underline-none',
    
    // Custom classes
    className
  )
} 