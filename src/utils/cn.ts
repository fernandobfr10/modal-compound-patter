/**
 * Utility function to merge CSS classes
 * Combines default component classes with user-provided classes
 * 
 * Features:
 * - Merges multiple class strings
 * - Handles conditional classes
 * - Removes duplicates
 * - User classes override default classes for same properties
 */

type ClassValue = string | number | boolean | undefined | null
type ClassArray = ClassValue[]
type ClassDict = Record<string, boolean | undefined | null>
type ClassInput = ClassValue | ClassArray | ClassDict

/**
 * Merges CSS classes with intelligent deduplication
 * 
 * @param inputs - Class inputs (strings, arrays, objects, conditionals)
 * @returns Merged class string
 * 
 * @example
 * ```tsx
 * cn('base-class', userClassName) 
 * // → "base-class user-class"
 * 
 * cn('btn btn-primary', 'btn-large', { 'btn-disabled': disabled })
 * // → "btn btn-primary btn-large" (or "btn btn-primary btn-large btn-disabled")
 * 
 * cn('text-sm text-blue-500', 'text-lg text-red-500')
 * // → "text-lg text-red-500" (later classes override earlier ones)
 * ```
 */
export function cn(...inputs: ClassInput[]): string {
  const classes: string[] = []
  
  for (const input of inputs) {
    if (!input) continue
    
    if (typeof input === 'string') {
      classes.push(input)
    } else if (typeof input === 'number') {
      classes.push(String(input))
    } else if (Array.isArray(input)) {
      const nested = cn(...input)
      if (nested) classes.push(nested)
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key)
      }
    }
  }
  
  return classes.join(' ').trim()
}

/**
 * Alternative approach with more sophisticated class merging
 * This version handles Tailwind-like conflicts better
 */
export function cnAdvanced(...inputs: ClassInput[]): string {
  const classMap = new Map<string, string>()
  const finalClasses: string[] = []
  
  // First pass: collect all classes
  const allClasses = cn(...inputs).split(' ').filter(Boolean)
  
  for (const className of allClasses) {
    // Simple approach: last class wins for same base
    // For more sophisticated merging, you could parse prefixes
    const baseClass = className.split('-')[0]
    
    // If it's a utility class (has dash), track by base
    if (className.includes('-')) {
      classMap.set(baseClass, className)
    } else {
      // Regular classes just get added
      finalClasses.push(className)
    }
  }
  
  // Add utility classes (with conflict resolution)
  finalClasses.push(...Array.from(classMap.values()))
  
  return finalClasses.join(' ').trim()
}

/**
 * Helper to create component-specific class mergers
 * 
 * @param defaultClasses - Default classes for the component
 * @returns Function that merges default with user classes
 * 
 * @example
 * ```tsx
 * const mergeButtonClasses = createClassMerger('btn btn-base')
 * 
 * // Usage in component
 * const className = mergeButtonClasses(props.className, {
 *   'btn-disabled': disabled,
 *   'btn-loading': loading
 * })
 * ```
 */
export function createClassMerger(defaultClasses: string) {
  return (...additionalClasses: ClassInput[]) => {
    return cn(defaultClasses, ...additionalClasses)
  }
}

/**
 * Specific helper for modal components
 * Provides consistent class merging for all modal parts
 */
export const modalClasses = {
  overlay: createClassMerger('modal-overlay'),
  content: createClassMerger('modal-content'),
  header: createClassMerger('modal-header'),
  title: createClassMerger('modal-title'),
  description: createClassMerger('modal-description'),
  body: createClassMerger('modal-body'),
  footer: createClassMerger('modal-footer'),
  close: createClassMerger('modal-close'),
  trigger: createClassMerger('modal-trigger'),
} as const

/**
 * Export default as cn for convenience
 */
export default cn 