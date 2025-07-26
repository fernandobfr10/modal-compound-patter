import { forwardRef, useCallback } from 'react'
import { useEscapeKey } from '../../hooks/use-escape-key'
import { useFocusTrap } from '../../hooks/use-focus-trap'
import { modalClasses } from '../../utils/cn'
import { useModalContext } from './modal-context'
import type { ModalContentProps } from './modal.types'

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ 
    children, 
    onEscapeKeyDown, 
    onPointerDownOutside,
    onClick,
    className,
    ...props 
  }, ref) => {
    const { open, onOpenChange, contentId, titleId, descriptionId } = useModalContext()
    
    const focusTrapRef = useFocusTrap(open)
    
    const handleEscape = useCallback((event: KeyboardEvent) => {
      onEscapeKeyDown?.(event)
      if (!event.defaultPrevented) {
        onOpenChange(false)
      }
    }, [onEscapeKeyDown, onOpenChange])
    
    useEscapeKey(open, handleEscape)

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
      onClick?.(event)
    }

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
      const target = event.target as Element
      if (!event.currentTarget.contains(target)) {
        onPointerDownOutside?.(event.nativeEvent)
      }
    }

    return (
      <div
        ref={(element) => {
          // Combine refs
          if (typeof ref === 'function') {
            ref(element)
          } else if (ref) {
            ref.current = element
          }
          
          if (focusTrapRef) {
            focusTrapRef.current = element
          }
        }}
        id={contentId}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        data-state={open ? 'open' : 'closed'}
        className={modalClasses.content(className)}
        {...props}
        onClick={handleClick}
        onPointerDown={handlePointerDown}
      >
        {children}
      </div>
    )
  }
)

ModalContent.displayName = 'ModalContent' 