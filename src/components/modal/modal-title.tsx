import { forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { modalClasses } from '../../utils/cn'
import { useModalContext } from './modal-context'
import type { ModalTitleProps } from './modal.types'

const TitleHeading = forwardRef<HTMLHeadingElement, Omit<ModalTitleProps, 'asChild'>>(
  ({ children, className, ...props }, ref) => {
    const { titleId } = useModalContext()

    return (
      <h1
        ref={ref}
        id={titleId}
        className={modalClasses.title(className)}
        {...props}
      >
        {children}
      </h1>
    )
  }
)

TitleHeading.displayName = 'TitleHeading'

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const { titleId } = useModalContext()

    if (asChild) {
      return renderAsChild(
        asChild,
        children,
        TitleHeading,
        {
          children,
          className: modalClasses.title(className),
          id: titleId,
          ref,
          ...props,
        }
      )
    }

    return (
      <TitleHeading
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </TitleHeading>
    )
  }
)

ModalTitle.displayName = 'ModalTitle' 