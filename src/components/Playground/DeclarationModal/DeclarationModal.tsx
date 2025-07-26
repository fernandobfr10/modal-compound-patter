import {
  DsButton,
  DsHeading,
  DsParagraph,
  DsSpacer
} from "@akad/design-system/react";
import { Modal } from "../../modal";

import "./DeclarationModal.css";

const declarationDescription = (
  <div>
    <DsParagraph className="declaration-modal-description">
      É obrigatório que <b>proponente</b> reconheça que se as informações
      prestadas, que serviram de base para a aceitação e definição dos custos e
      condições forem significativamente divergentes da realidade, o{" "}
      <b>segurado</b> poderá sofrer as penalidades descritas nas condições
      gerais.
    </DsParagraph>
    <DsSpacer vertical="nano" />
    <DsParagraph className="declaration-modal-description">
      <code>&bull;</code> O <b>proponente</b> reconhece que se as informações
      prestadas neste questionário, que serviram de base para a aceitação e
      definição dos custos e condições forem significativamente divergentes da
      realidade, o <b>segurado</b> poderá sofrer as penalidades descritas nas
      condições gerais. gerais.
    </DsParagraph>
    <DsSpacer vertical="nano" />
    <DsParagraph className="declaration-modal-description">
      <code>&bull;</code> O <b>proponente</b> deve notificar a <b>Seguradora</b>
      , o mais rápido possível, sobre qualquer alteração das informações
      contidas no questionário, ocorridas antes do início da vigência do seguro.
      Neste caso, a <b>seguradora</b> poderá, a seu critério, modificar ou
      cancelar qualquer cotação anterior. A Seguradora está autorizada a fazer
      qualquer investigação ou pergunta relacionada ao risco, na medida em que
      julgue necessário.
    </DsParagraph>
  </div>
);

export const DeclarationModal = ({
  open,
  onOpenChange,
  onConfirmAction,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirmAction: () => void;
}) => {
  return (
    <Modal.Root open={open} onOpenChange={onOpenChange}>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content className=" declaration-modal-content">
          <Modal.Header className="declaration-modal-header">
            <Modal.Title asChild>
              <DsHeading type="heading-5">Declaração de veracidade</DsHeading>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Description asChild>{declarationDescription}</Modal.Description>
          </Modal.Body>
          <Modal.Footer className="declaration-modal-footer">
            <DsButton onClick={() => onConfirmAction()}>Confirmar</DsButton>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
};
