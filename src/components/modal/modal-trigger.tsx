import { forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { modalClasses } from '../../utils/cn'
import { useModalContext } from './modal-context'
import type { ModalTriggerProps } from './modal.types'

const TriggerButton = forwardRef<HTMLButtonElement, Omit<ModalTriggerProps, 'asChild'>>(
  ({ children, onClick, className, ...props }, ref) => {
    const { onOpenChange } = useModalContext()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onOpenChange(true)
      onClick?.(event)
    }

    return (
      <button
        ref={ref}
        type="button"
        className={modalClasses.trigger(className)}
        {...props}
        onClick={handleClick}
      >
        {children}
      </button>
    )
  }
)

TriggerButton.displayName = 'TriggerButton'

export const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(
  ({ children, onClick, className, asChild, ...props }, ref) => {
    const { onOpenChange } = useModalContext()

    if (asChild) {
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onOpenChange(true)
        onClick?.(event)
      }

      return renderAsChild(
        asChild,
        children,
        TriggerButton,
        {
          children,
          onClick: handleClick,
          className: modalClasses.trigger(className),
          ref,
          ...props,
        }
      )
    }

    return (
      <TriggerButton
        ref={ref}
        onClick={onClick}
        className={className}
        {...props}
      >
        {children}
      </TriggerButton>
    )
  }
)

ModalTrigger.displayName = 'ModalTrigger' 