import { forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { modalClasses } from '../../utils/cn'
import type { ModalBodyProps } from './modal.types'

const BodyDiv = forwardRef<HTMLDivElement, Omit<ModalBodyProps, 'asChild'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={modalClasses.body(className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

BodyDiv.displayName = 'BodyDiv'

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, className, asChild, ...props }, ref) => {
    if (asChild) {
      return renderAsChild(
        asChild,
        children,
        BodyDiv,
        {
          children,
          className: modalClasses.body(className),
          ref,
          ...props,
        }
      )
    }

    return (
      <BodyDiv
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </BodyDiv>
    )
  }
)

ModalBody.displayName = 'ModalBody' 