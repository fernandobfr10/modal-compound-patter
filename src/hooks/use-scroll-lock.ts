import { useEffect } from 'react'

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return

    // Store original overflow values
    const originalBodyOverflow = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflow

    // Get the scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    // Apply scroll lock styles
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    // Compensate for scrollbar width to prevent layout shift
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      // Restore original overflow values
      document.body.style.overflow = originalBodyOverflow
      document.documentElement.style.overflow = originalHtmlOverflow
      document.body.style.paddingRight = ''
    }
  }, [isLocked])
} 