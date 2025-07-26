import { forwardRef } from 'react'
import { useScrollLock } from '../../hooks/use-scroll-lock'
import { modalClasses } from '../../utils/cn'
import { useModalContext } from './modal-context'
import type { ModalOverlayProps } from './modal.types'

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ onClick, className, ...props }, ref) => {
    const { open, onOpenChange } = useModalContext()
    
    useScrollLock(open)

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      // Como não tem children, qualquer click no overlay deve fechar
      onOpenChange(false)
      onClick?.(event)
    }

    return (
      <div
        ref={ref}
        data-state={open ? 'open' : 'closed'}
        className={modalClasses.overlay(className)}
        {...props}
        onClick={handleClick}
      />
    )
  }
)

ModalOverlay.displayName = 'ModalOverlay' 