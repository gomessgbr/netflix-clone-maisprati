import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Movies, TvShow} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path:"movies",
    element: <Movies/>
  },
  {
    path: "tvShows",
    element: <TvShow/>
  }
]);
