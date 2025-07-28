import type { HeadingProps } from '../components/heading/heading.types'
import { cn } from './cn'

/**
 * Heading component class generator
 */
export const headingClasses = (props?: Pick<HeadingProps, 'size' | 'weight' | 'align' | 'trim' | 'truncate' | 'wrap'> & { className?: string }) => {
  const { size = '6', weight = 'regular', align, trim = 'normal', truncate, wrap = 'wrap', className } = props || {}
  
  return cn(
    // Base class
    'heading-base',
    
    // Size variants (1-9 scale following Radix UI)
    size === '1' && 'heading-size-1',
    size === '2' && 'heading-size-2',
    size === '3' && 'heading-size-3',
    size === '4' && 'heading-size-4',
    size === '5' && 'heading-size-5',
    size === '6' && 'heading-size-6',
    size === '7' && 'heading-size-7',
    size === '8' && 'heading-size-8',
    size === '9' && 'heading-size-9',
    
    // Weight variants
    weight === 'light' && 'heading-weight-light',
    weight === 'regular' && 'heading-weight-regular',
    weight === 'medium' && 'heading-weight-medium',
    weight === 'bold' && 'heading-weight-bold',
    
    // Alignment variants
    align === 'left' && 'heading-align-left',
    align === 'center' && 'heading-align-center',
    align === 'right' && 'heading-align-right',
    
    // Trim variants
    trim === 'normal' && 'heading-trim-normal',
    trim === 'start' && 'heading-trim-start',
    trim === 'end' && 'heading-trim-end',
    trim === 'both' && 'heading-trim-both',
    
    // Truncate
    truncate && 'heading-truncate',
    
    // Wrap variants
    wrap === 'wrap' && 'heading-wrap-wrap',
    wrap === 'nowrap' && 'heading-wrap-nowrap',
    wrap === 'pretty' && 'heading-wrap-pretty',
    wrap === 'balance' && 'heading-wrap-balance',
    
    // Custom classes
    className
  )
} 