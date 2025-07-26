// DemoIndex
import { DemoIndex } from "../demo/DemoIndex";

// Demo Components
import { DemoModal } from "../demo/modal/DemoModal";
import { DemoText } from "../demo/text/DemoText";

const routeConfig = [
  {
    path: '/',
    element: <DemoIndex />,
  },
  {
    path: '/demo/modal',
    element: <DemoModal />,
  },
  {
    path: '/demo/text',
    element: <DemoText />,
  },
  {
    path: '*',
    element: <DemoIndex />,
  }
]

export default routeConfig