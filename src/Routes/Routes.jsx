import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import AuthRoot from "../Layout/AuthRoot";
import Login from "../Pages/LogIn/Login";

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
        ],
    },
    {
        path: "/",
        element: <AuthRoot></AuthRoot>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;
