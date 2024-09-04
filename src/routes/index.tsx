import RuralProducersPage from "../pages/rural-producers";
import {createBrowserRouter} from "react-router-dom";
import CreateRuralProducerPage from "../pages/rural-producers/create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RuralProducersPage />,
  },
  {
    path: "/create",
    element: <CreateRuralProducerPage />,
  }
]);

export default router;
