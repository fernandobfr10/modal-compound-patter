import { createElement, forwardRef } from 'react'
import { modalClasses } from '../../utils/cn'
import { Slot } from '../../utils/slot'
import type { ModalBodyProps } from './modal.types'

/**
 * Modal.Body - Main content area of the modal
 */
export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'

    return createElement(
      Comp,
      {
        ref,
        className: modalClasses.body(className),
        ...props,
      },
      children
    )
  }
)

ModalBody.displayName = 'ModalBody' 