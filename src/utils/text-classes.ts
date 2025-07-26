import type { TextProps } from '../components/text/text.types'
import { cn } from './cn'

/**
 * Text component class generator
 */
export const textClasses = (props?: Pick<TextProps, 'size' | 'weight' | 'align' | 'truncate'> & { className?: string }) => {
  const { size = '3', weight = 'regular', align, truncate, className } = props || {}
  
  return cn(
    // Base class
    'text-base',
    
    // Size variants (1-9 scale following Radix UI)
    size === '1' && 'text-size-1',
    size === '2' && 'text-size-2',
    size === '3' && 'text-size-3',
    size === '4' && 'text-size-4',
    size === '5' && 'text-size-5',
    size === '6' && 'text-size-6',
    size === '7' && 'text-size-7',
    size === '8' && 'text-size-8',
    size === '9' && 'text-size-9',
    
    // Weight variants
    weight === 'light' && 'text-weight-light',
    weight === 'regular' && 'text-weight-regular',
    weight === 'medium' && 'text-weight-medium',
    weight === 'bold' && 'text-weight-bold',
    
    // Alignment variants
    align === 'left' && 'text-align-left',
    align === 'center' && 'text-align-center',
    align === 'right' && 'text-align-right',
    
    // Truncate
    truncate && 'text-truncate',
    
    // Custom classes
    className
  )
} 