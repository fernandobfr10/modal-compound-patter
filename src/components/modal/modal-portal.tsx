import { ThemeProvider } from '@akad/design-system/react'
import { createPortal } from 'react-dom'
import { useModalContext } from './modal-context'
import type { ModalPortalProps } from './modal.types'

import './modal.css'

export function ModalPortal({ 
  children, 
  container = document.body 
}: ModalPortalProps) {
  const { open } = useModalContext()

  if (!open) return null

  return createPortal(<ThemeProvider library="default" theme="light">{children}</ThemeProvider>, container)
} 