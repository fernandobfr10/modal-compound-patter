import { Link } from "react-router-dom";
import { DemoHeader } from "./DemoHeader";

const demoList = [
  {
    label: "Modal",
    path: "/demo/modal",
  },
  {
    label: "Text",
    path: "/demo/text",
  },
];

export const DemoIndex = () => {
  return (
    <div className="demo">
      <DemoHeader title="Demonstrações" />
      <div className="demo-list">
        {demoList.map((demo) => (
          <Link key={demo.path} to={demo.path} className="demo-list-item">
            {demo.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
