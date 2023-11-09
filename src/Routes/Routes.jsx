import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
// import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import AllItems from "../Pages/All-Items/AllItems";
import Blog from "../Pages/Blog/Blog";
import AddFood from "../Pages/AddFood/AddFood";

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
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            // {
            //     path: "/login",
            //     element: <Login></Login>,
            // },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/add-food",
                element: <AddFood></AddFood>,
            },
        ],
    },
]);

export default router;
