import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AllItems from "../Pages/All-Items/AllItems";
import Blog from "../Pages/Blog/Blog";
import AddFood from "../Pages/AddFood/AddFood";
import SingleFood from "../Pages/SingleFood/SingleFood";
import PurchasePage from "../Pages/PurchasePage/PurchasePage";
import PrivateRoute from "./PrivateRoute";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import MyOrder from "../Pages/MyOrder/MyOrder";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/all-items",
                element: <AllItems></AllItems>,
                loader: () => fetch("http://localhost:5000/foods-count"),
            },
            {
                path: "/all-items/:id",
                element: <SingleFood></SingleFood>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/food/${params.id}`),
            },
            {
                path: "/purchase/:id",
                element: (
                    <PrivateRoute>
                        <PurchasePage></PurchasePage>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/food/${params.id}`),
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
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
                element: (
                    <PrivateRoute>
                        <AddFood></AddFood>
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-added-food",
                element: (
                    <PrivateRoute>
                        <MyAddedFood></MyAddedFood>
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-food/:id",
                element: (
                    <PrivateRoute>
                        <UpdateFood></UpdateFood>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/food/${params.id}`),
            },
            {
                path: "/my-order",
                element: (
                    <PrivateRoute>
                        <MyOrder></MyOrder>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
