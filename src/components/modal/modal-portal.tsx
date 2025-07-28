import { ThemeProvider } from "@akad/design-system/react";
import { Portal } from "../../utils/portal";
import { useModalContext } from "./modal-context";
import type { ModalPortalProps } from "./modal.types";

import "./modal.css";

/**
 * Modal.Portal - Renders modal content in a portal
 *
 * Uses our custom Portal component to render children outside the normal React tree
 */
export function ModalPortal({ children, container }: ModalPortalProps) {
  const { open } = useModalContext();

  if (!open) return null;

  return (
    <Portal container={container}>
      <ThemeProvider library="default" theme="light">
        {children}
      </ThemeProvider>
    </Portal>
  );
}
