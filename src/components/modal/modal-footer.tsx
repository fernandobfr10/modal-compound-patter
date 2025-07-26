import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { modalClasses } from '../../utils/cn'

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={modalClasses.footer(className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ModalFooter.displayName = 'ModalFooter' 