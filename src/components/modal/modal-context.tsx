import { createContext, useContext } from 'react'
import type { ModalContextType } from './modal.types'

export const ModalContext = createContext<ModalContextType | null>(null)

export function useModalContext() {
  const context = useContext(ModalContext)
  
  if (!context) {
    throw new Error(
      'Modal components must be rendered within Modal.Root'
    )
  }
  
  return context
} 