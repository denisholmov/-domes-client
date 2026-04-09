import { createBrowserRouter } from "react-router-dom";

import { Landing } from "@/components/pages/Landing";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);
