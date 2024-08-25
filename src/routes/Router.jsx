import { createBrowserRouter } from "react-router-dom";
import { Home, Login } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);
