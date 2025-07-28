import { createElement, forwardRef, useContext } from 'react'
import { modalClasses } from '../../utils/cn'
import { Slot } from '../../utils/slot'
import { ModalContext } from './modal-context'
import type { ModalTriggerProps } from './modal.types'

/**
 * Modal.Trigger - Triggers the modal open state
 * 
 * Can be used both inside Modal.Root context and as standalone with onOpenChange
 */
export const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(
  ({ children, onClick, onOpenChange, asChild, className, ...props }, ref) => {
    const modalContext = useContext(ModalContext)
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Check for external onOpenChange first (for standalone usage)
      if (onOpenChange) {
        onOpenChange(true)
      } 
      // Fall back to modal context (for usage inside Modal.Root)
      else if (modalContext) {
        modalContext.onOpenChange(true)
      }
      
      // Call the original onClick if provided
      onClick?.(event)
    }

    const Comp = asChild ? Slot : 'button'

    return createElement(
      Comp,
      {
        ref,
        type: asChild ? undefined : 'button',
        onClick: handleClick,
        className: modalClasses.trigger(className),
        ...props,
      },
      children
    )
  }
)

ModalTrigger.displayName = 'ModalTrigger' 