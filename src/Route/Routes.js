import { createBrowserRouter, useParams } from "react-router-dom";
import MyOrder from "../Components/MyOrder/MyOrder";
import MyWishList from "../Components/MyWishList/MyWishList";
import ProductLoader from "../Components/ProductLoader/ProductLoader";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../page/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AllCategory from "../page/Home/Categories/AllCategory/AllCategory";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/allCategory/:name",
        element: <AllCategory></AllCategory>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "dashboard/myWishList",
        element: <MyWishList></MyWishList>,
      },
    ],
  },
]);

export default router;
