import { forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { modalClasses } from '../../utils/cn'
import { useModalContext } from './modal-context'
import type { ModalDescriptionProps } from './modal.types'

const DescriptionParagraph = forwardRef<HTMLParagraphElement, Omit<ModalDescriptionProps, 'asChild'>>(
  ({ children, className, ...props }, ref) => {
    const { descriptionId } = useModalContext()

    return (
      <p
        ref={ref}
        id={descriptionId}
        className={modalClasses.description(className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)

DescriptionParagraph.displayName = 'DescriptionParagraph'

export const ModalDescription = forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const { descriptionId } = useModalContext()

    if (asChild) {
      return renderAsChild(
        asChild,
        children,
        DescriptionParagraph,
        {
          children,
          className: modalClasses.description(className),
          id: descriptionId,
          ref,
          ...props,
        }
      )
    }

    return (
      <DescriptionParagraph
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </DescriptionParagraph>
    )
  }
)

ModalDescription.displayName = 'ModalDescription' 