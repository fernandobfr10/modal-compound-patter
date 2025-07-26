import { DsButton } from "@akad/design-system/react";
import { useState } from "react";

import { DeclarationModal } from "./components/DeclarationModal/DeclarationModal";
import { Modal } from "./components/modal";

export const Playground = () => {
  const [isAkadModalOpen, setIsAkadModalOpen] = useState(false);

  return (
    <div className="playground">
      <Modal.ExternalTrigger onOpenChange={setIsAkadModalOpen} asChild>
        <DsButton >Abrir Akad Modal</DsButton>
      </Modal.ExternalTrigger>

      <DeclarationModal 
        open={isAkadModalOpen} 
        onOpenChange={setIsAkadModalOpen} 
        onConfirmAction={() => setIsAkadModalOpen(false)}
        />
    </div>
  );
};
