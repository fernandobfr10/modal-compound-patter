import { forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { modalClasses } from '../../utils/cn'
import { useModalContext } from './modal-context'
import type { ModalCloseProps } from './modal.types'

const CloseButton = forwardRef<HTMLButtonElement, Omit<ModalCloseProps, 'asChild'>>(
  ({ children = '×', onClick, className, ...props }, ref) => {
    const { onOpenChange } = useModalContext()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onOpenChange(false)
      onClick?.(event)
    }

    return (
      <button
        ref={ref}
        type="button"
        className={modalClasses.close(className)}
        {...props}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }
)

CloseButton.displayName = 'CloseButton'

export const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(
  ({ children = '×', onClick, className, asChild, ...props }, ref) => {
    const { onOpenChange } = useModalContext()

    if (asChild) {
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onOpenChange(false)
        onClick?.(event)
      }

      return renderAsChild(
        asChild,
        children,
        CloseButton,
        {
          children,
          onClick: handleClick,
          className: modalClasses.close(className),
          ref,
          ...props,
        }
      )
    }

    return (
      <CloseButton
        ref={ref}
        onClick={onClick}
        className={className}
        {...props}
      >
        {children}
      </CloseButton>
    )
  }
)

ModalClose.displayName = 'ModalClose' 