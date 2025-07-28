import { createElement, forwardRef } from 'react'
import { modalClasses } from '../../utils/cn'
import { Slot } from '../../utils/slot'
import { useModalContext } from './modal-context'
import type { ModalCloseProps } from './modal.types'

/**
 * Modal.Close - Closes the modal
 */
export const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(
  ({ children = '✕', onClick, asChild, className, ...props }, ref) => {
    const { onOpenChange } = useModalContext()
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onOpenChange(false)
      onClick?.(event)
    }

    const Comp = asChild ? Slot : 'button'

    return createElement(
      Comp,
      {
        ref,
        type: asChild ? undefined : 'button',
        onClick: handleClick,
        className: modalClasses.close(className),
        'aria-label': 'Close modal',
        ...props,
      },
      children
    )
  }
)

ModalClose.displayName = 'ModalClose' 