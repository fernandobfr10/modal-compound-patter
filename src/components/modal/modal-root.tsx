import { useCallback, useId, useMemo, useState } from 'react'
import { ModalContext } from './modal-context'
import type { ModalRootProps } from './modal.types'

export function ModalRoot({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: ModalRootProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen
  
  const handleOpenChange = useCallback((newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }, [controlledOpen, onOpenChange])

  const contentId = useId()
  const titleId = useId()
  const descriptionId = useId()

  const contextValue = useMemo(
    () => ({
      open,
      onOpenChange: handleOpenChange,
      contentId,
      titleId,
      descriptionId,
    }),
    [open, handleOpenChange, contentId, titleId, descriptionId]
  )

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
} 