import { createBrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
]);

export { router };
