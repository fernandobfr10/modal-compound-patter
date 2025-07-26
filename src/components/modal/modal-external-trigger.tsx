import { forwardRef } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { modalClasses } from '../../utils/cn'
import type { ModalExternalTriggerProps } from './modal.types'

const ExternalTriggerButton = forwardRef<HTMLButtonElement, Omit<ModalExternalTriggerProps, 'asChild'>>(
  ({ children, onOpenChange, onClick, className, ...props }, ref) => {
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

ExternalTriggerButton.displayName = 'ExternalTriggerButton'

export const ModalExternalTrigger = forwardRef<HTMLButtonElement, ModalExternalTriggerProps>(
  ({ children, onOpenChange, onClick, className, asChild, ...props }, ref) => {
    if (asChild) {
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onOpenChange(true)
        onClick?.(event)
      }

      return renderAsChild(
        asChild,
        children,
        ExternalTriggerButton,
        {
          children,
          onOpenChange,
          onClick: handleClick,
          className: modalClasses.trigger(className),
          ref,
          ...props,
        }
      )
    }

    return (
      <ExternalTriggerButton
        ref={ref}
        onOpenChange={onOpenChange}
        onClick={onClick}
        className={className}
        {...props}
      >
        {children}
      </ExternalTriggerButton>
    )
  }
)

ModalExternalTrigger.displayName = 'ModalExternalTrigger' 