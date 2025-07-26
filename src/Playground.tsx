import { DsButton } from "@akad/design-system/react";
import { useState } from "react";

import { DeclarationModal } from "./components/DeclarationModal/DeclarationModal";
import { DocumentPendingModal } from "./components/DocumentPendingModal/DocumentPendingModal";
import { Modal } from "./components/modal";

export const Playground = () => {
  const [isDeclarationModalOpen, setIsDeclarationModalOpen] = useState(false);
  const [isDocumentPendingModalOpen, setIsDocumentPendingModalOpen] =
    useState(false);

  return (
    <div className="playground">
      <div className="playground-buttons">
        <Modal.Trigger onOpenChange={setIsDeclarationModalOpen} asChild>
          <DsButton>Abrir Declaration Modal</DsButton>
        </Modal.Trigger>
        <Modal.Trigger onOpenChange={setIsDocumentPendingModalOpen} asChild>
          <DsButton>Abrir Document Pending Modal</DsButton>
        </Modal.Trigger>
      </div>

      <DeclarationModal
        open={isDeclarationModalOpen}
        onOpenChange={setIsDeclarationModalOpen}
        onConfirmAction={() => setIsDeclarationModalOpen(false)}
      />
      <DocumentPendingModal
        open={isDocumentPendingModalOpen}
        onOpenChange={setIsDocumentPendingModalOpen}
        onSendFile={() => console.log('Send file!')}
      />
    </div>
  );
};
