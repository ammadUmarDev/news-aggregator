import { createBrowserRouter } from "react-router-dom";

import NotAllowed from "../pages/NotAllowed";
import NotFound from "../pages/NotFound";
import AppLayout from "../components/layout";
import protectedRoutes from "./protected-routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: protectedRoutes
  },
  {
    path: "not-allowed",
    element: <NotAllowed />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
