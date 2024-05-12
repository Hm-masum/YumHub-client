import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/AddFood";
import PrivateRoutes from "./PrivateRoutes";
import FoodDetails from "../Pages/FoodDetails";
import ManageMyFood from "../Pages/ManageMyFood";
import UpdateFood from "../Pages/UpdateFood";

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
        path: "/food/:id",
        element:<PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "/update/:id",
        element:<PrivateRoutes><UpdateFood></UpdateFood></PrivateRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "/available-food",
      },
      {
        path: "/manage-myFood",
        element:<PrivateRoutes><ManageMyFood></ManageMyFood></PrivateRoutes>
      },
      {
        path: "/myFood-req",
      },
    ],
  },
]);

export default router;
