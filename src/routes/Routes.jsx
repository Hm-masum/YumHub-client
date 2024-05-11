import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/AddFood";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-food",
        element:<PrivateRoutes><AddFood></AddFood></PrivateRoutes>
      },
      {
        path: "/available-food",
      },
      {
        path: "/manage-myFood",
      },
      {
        path: "/myFood-req",
      },
    ],
  },
]);

export default router;
