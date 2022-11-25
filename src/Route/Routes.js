import { createBrowserRouter, useParams } from "react-router-dom";
import AddAProduct from "../Components/AddAProduct/AddAProduct";
import MyBuyer from "../Components/MyBuyer/MyBuyer";
import MyOrder from "../Components/MyOrder/MyOrder";
import MyProduct from "../Components/MyProduct/MyProduct";
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
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <BuyerRoute>
            <MyOrder></MyOrder>
          </BuyerRoute>
        ),
      },
      {
        path: "dashboard/myWishList",
        element: (
          <BuyerRoute>
            <MyWishList></MyWishList>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/addAProduct",
        element: (
          <SellerRoute>
            <AddAProduct></AddAProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProduct",
        element: (
          <SellerRoute>
            <MyProduct></MyProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myBuyers",
        element: (
          <SellerRoute>
            <MyBuyer></MyBuyer>
          </SellerRoute>
        ),
      },
    ],
  },
]);

export default router;
