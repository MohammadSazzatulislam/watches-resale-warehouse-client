import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../page/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            }
        ]
    }
])

export default router;