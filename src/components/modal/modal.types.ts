import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode
} from 'react'

export interface ModalContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
  contentId: string
  titleId: string
  descriptionId: string
}

export interface ModalRootProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

export interface ModalTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  onOpenChange?: (open: boolean) => void  // Opcional - para uso externo
}

export interface ModalPortalProps {
  children: ReactNode
  container?: HTMLElement
}

export type ModalOverlayProps = HTMLAttributes<HTMLDivElement>

export interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onPointerDownOutside?: (event: PointerEvent) => void
}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  asChild?: boolean
}

export interface ModalDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  asChild?: boolean
}

export interface ModalCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  asChild?: boolean
}

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  asChild?: boolean
}

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
} 