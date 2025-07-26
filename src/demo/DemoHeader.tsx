import { DsButton } from "@akad/design-system/react";
import { Link } from "react-router-dom";

export const DemoHeader = ({ title, }: { title: string }) => {
  return (
    <div className="demo-header">
      <Link to="/">
        <DsButton variant="text" disabled={title === "Demonstrações"}>
          Voltar
        </DsButton>
      </Link>
      <h2 className="demo-header-title">{title}</h2>
    </div>
  );
};
