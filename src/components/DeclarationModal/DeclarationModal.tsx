import {
  DsButton,
  DsHeading,
  DsIcon,
  DsParagraph,
  DsSpacer,
} from "@akad/design-system/react";
import { Modal } from "../modal";

import "./DeclarationModal.css";

const declarationDescription = (
  <>
    <DsParagraph className="text-justify">
      É obrigatório que <b>proponente</b> reconheça que se as informações
      prestadas, que serviram de base para a aceitação e definição dos custos e
      condições forem significativamente divergentes da realidade, o{" "}
      <b>segurado</b> poderá sofrer as penalidades descritas nas condições
      gerais.
    </DsParagraph>
    <DsSpacer vertical="nano" />
    <DsParagraph className="text-justify">
      <code>&bull;</code> O <b>proponente</b> reconhece que se as informações
      prestadas neste questionário, que serviram de base para a aceitação e
      definição dos custos e condições forem significativamente divergentes da
      realidade, o <b>segurado</b> poderá sofrer as penalidades descritas nas
      condições gerais. gerais.
    </DsParagraph>
    <DsSpacer vertical="nano" />
    <DsParagraph className="text-justify">
      <code>&bull;</code> O <b>proponente</b> deve notificar a <b>Seguradora</b>
      , o mais rápido possível, sobre qualquer alteração das informações
      contidas no questionário, ocorridas antes do início da vigência do seguro.
      Neste caso, a <b>seguradora</b> poderá, a seu critério, modificar ou
      cancelar qualquer cotação anterior. A Seguradora está autorizada a fazer
      qualquer investigação ou pergunta relacionada ao risco, na medida em que
      julgue necessário.
    </DsParagraph>
  </>
);

export const DeclarationModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Modal.Root open={open} onOpenChange={onOpenChange}>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content className=" declaration-modal-content">
          <Modal.Close asChild>
            <DsIcon image="close" />
          </Modal.Close>
          <Modal.Header className="declaration-modal-header">
            <Modal.Title>
              <DsHeading type="heading-5">Declaração de veracidade</DsHeading>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Description asChild>{declarationDescription}</Modal.Description>
          </Modal.Body>
          <Modal.Footer>
            <DsButton onClick={() => console.log('CONFIRMADO')}>Confirmar</DsButton>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
};
