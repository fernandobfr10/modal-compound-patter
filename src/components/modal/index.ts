import { ModalBody } from './modal-body'
import { ModalClose } from './modal-close'
import { ModalContent } from './modal-content'
import { ModalDescription } from './modal-description'
import { ModalFooter } from './modal-footer'
import { ModalHeader } from './modal-header'
import { ModalOverlay } from './modal-overlay'
import { ModalPortal } from './modal-portal'
import { ModalRoot } from './modal-root'
import { ModalTitle } from './modal-title'
import { ModalTrigger } from './modal-trigger'

// Compound component pattern following Radix UI structure
export const Modal = {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Portal: ModalPortal,
  Overlay: ModalOverlay,
  Content: ModalContent,
  Header: ModalHeader,
  Title: ModalTitle,
  Description: ModalDescription,
  Body: ModalBody,
  Footer: ModalFooter,
  Close: ModalClose,
}

// Individual exports for tree-shaking
export { ModalBody, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, ModalPortal, ModalRoot, ModalTitle, ModalTrigger }

// Export types
export type * from './modal.types'
