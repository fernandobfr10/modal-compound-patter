import { createElement, forwardRef } from 'react'
import { modalClasses } from '../../utils/cn'
import { Slot } from '../../utils/slot'
import { useModalContext } from './modal-context'
import type { ModalTitleProps } from './modal.types'

/**
 * Modal.Title - Provides accessible title for the modal
 */
export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ children, asChild, className, ...props }, ref) => {
    const { titleId } = useModalContext()
    
    const Comp = asChild ? Slot : 'h2'

    return createElement(
      Comp,
      {
        ref,
        id: titleId,
        className: modalClasses.title(className),
        ...props,
      },
      children
    )
  }
)

ModalTitle.displayName = 'ModalTitle' 