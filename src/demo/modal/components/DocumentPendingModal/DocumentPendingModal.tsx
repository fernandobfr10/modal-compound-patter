import {
  DsButton,
  DsHeading,
  DsIcon,
  DsParagraph,
  DsSpacer,
} from "@akad/design-system/react";

// Component UI
import { Modal } from "../../../../components/modal";

// Styles
import "./DocumentPendingModal.css";

const documentPendingDescription = (
  <div>
    <DsParagraph className="document-pending-modal-description">
      O <b>envio do documento</b> ainda não foi <b>concluído</b>.
    </DsParagraph>
    <DsParagraph className="document-pending-modal-description">
      Se o documento ainda não estiver pronto para envio, volte e<b>remova-o</b>{" "}
      antes de <b>adicionar um novo</b>.
    </DsParagraph>
    <DsSpacer vertical="xxs" />
    <DsParagraph className="document-pending-modal-description">
      <b>Envie este arquivo antes de prosseguir para o próximo.</b>
    </DsParagraph>
  </div>
);

export const DocumentPendingModal = ({
  open,
  onOpenChange,
  onSendFile,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSendFile: () => void;
}) => {
  return (
    <Modal.Root open={open} onOpenChange={onOpenChange}>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content className="document-pending-modal-content">
          <Modal.Header className="document-pending-modal-header">
            <Modal.Title asChild>
              <DsHeading
                type="heading-5"
                className="document-pending-modal-title"
              >
                Envio do documento pendente
              </DsHeading>
            </Modal.Title>
            <Modal.Close asChild>
              <DsIcon image="close" size="lg" />
            </Modal.Close>
          </Modal.Header>
          <DsSpacer vertical="nano" />
          <Modal.Body>
            <Modal.Description asChild>{documentPendingDescription}</Modal.Description>
          </Modal.Body>
          <DsSpacer  vertical="xxxs" />
          <Modal.Footer className="document-pending-modal-footer">
            <DsButton onClick={() => onOpenChange(false)} variant="text" color="neutral" >Voltar</DsButton>
            <DsButton onClick={() => onSendFile()} icon="download" iconPosition="left">Enviar arquivo</DsButton>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
};
