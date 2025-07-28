import { createElement, forwardRef } from 'react'
import { modalClasses } from '../../utils/cn'
import { Slot } from '../../utils/slot'
import { useModalContext } from './modal-context'
import type { ModalDescriptionProps } from './modal.types'

/**
 * Modal.Description - Provides accessible description for the modal
 */
export const ModalDescription = forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ children, asChild, className, ...props }, ref) => {
    const { descriptionId } = useModalContext()
    
    const Comp = asChild ? Slot : 'p'

    return createElement(
      Comp,
      {
        ref,
        id: descriptionId,
        className: modalClasses.description(className),
        ...props,
      },
      children
    )
  }
)

ModalDescription.displayName = 'ModalDescription' 