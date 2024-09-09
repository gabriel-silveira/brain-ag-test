import RuralProducersPage from "../pages/rural-producers";
import {createBrowserRouter} from "react-router-dom";
import CreateRuralProducerPage from "../pages/rural-producers/create";
import RemoveRuralProducerPage from "../pages/rural-producers/remove";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RuralProducersPage />,
  },
  {
    path: "/create",
    element: <CreateRuralProducerPage />,
  },
  {
    path: "/edit/:id",
    element: <CreateRuralProducerPage />,
  },
  {
    path: "/remove/:id",
    element: <RemoveRuralProducerPage />,
  }
]);

export default router;
