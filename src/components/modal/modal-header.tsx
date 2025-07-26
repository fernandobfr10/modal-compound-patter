import { forwardRef } from 'react'
import { modalClasses } from '../../utils/cn'
import type { ModalHeaderProps } from './modal.types'

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={modalClasses.header(className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ModalHeader.displayName = 'ModalHeader' 