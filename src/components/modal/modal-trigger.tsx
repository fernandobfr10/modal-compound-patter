import { forwardRef, useContext } from 'react'
import { renderAsChild } from '../../utils/as-child'
import { modalClasses } from '../../utils/cn'
import { ModalContext } from './modal-context'
import type { ModalTriggerProps } from './modal.types'

const TriggerButton = forwardRef<HTMLButtonElement, Omit<ModalTriggerProps, 'asChild'>>(
  ({ children, onClick, className, onOpenChange, ...props }, ref) => {
    // Tenta obter o contexto, mas não falha se não existir
    const context = useContext(ModalContext)
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Prioridade: 1) onOpenChange prop, 2) contexto, 3) erro
      if (onOpenChange) {
        onOpenChange(true)
      } else if (context?.onOpenChange) {
        context.onOpenChange(true)
      } else {
        console.warn(
          'ModalTrigger: Você deve fornecer onOpenChange como prop ou usar dentro de Modal.Root'
        )
      }
      
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
  ({ children, onClick, className, asChild, onOpenChange, ...props }, ref) => {
    const context = useContext(ModalContext)

    if (asChild) {
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onOpenChange) {
          onOpenChange(true)
        } else if (context?.onOpenChange) {
          context.onOpenChange(true)
        } else {
          console.warn(
            'ModalTrigger: Você deve fornecer onOpenChange como prop ou usar dentro de Modal.Root'
          )
        }
        
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
          onOpenChange,
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
        onOpenChange={onOpenChange}
        {...props}
      >
        {children}
      </TriggerButton>
    )
  }
)

ModalTrigger.displayName = 'ModalTrigger' 