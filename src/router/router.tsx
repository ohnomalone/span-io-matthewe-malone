import { createBrowserRouter } from "react-router-dom";
import { Home } from "../modules/Home/Home";
import MainLayout from "../layout/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: [{ index: true, element: <Home /> }],
  },
]);

export { router };
