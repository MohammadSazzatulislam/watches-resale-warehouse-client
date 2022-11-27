import { createBrowserRouter } from "react-router-dom";
import AddAProduct from "../Components/AddAProduct/AddAProduct";
import AllBuyers from "../Components/AllBuyers/AllBuyers";
import AllSellers from "../Components/AllSellers/AllSellers";
import MyBuyer from "../Components/MyBuyer/MyBuyer";
import MyOrder from "../Components/MyOrder/MyOrder";
import MyProduct from "../Components/MyProduct/MyProduct";
import MyWishList from "../Components/MyWishList/MyWishList";
import Payment from "../Components/Payment/Payment";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../page/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AllCategory from "../page/Home/Categories/AllCategory/AllCategory";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Signup/Signup";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyersRoute from "./BuyersRoute/BuyersRoute";
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
        element: (
          <PrivateRoute>
            <AllCategory></AllCategory>
          </PrivateRoute>
        ),
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
        path: "/dashboard/myOrders",
        element: (
          <BuyersRoute>
            <MyOrder></MyOrder>
          </BuyersRoute>
        ),
      },
      {
        path: "dashboard/myWishList",
        element: (
          <BuyersRoute>
            <MyWishList></MyWishList>
          </BuyersRoute>
        ),
      },
      {
        path: 'dashboard/payment/:id',
        loader : async ({params}) => fetch(''),
        element: <Payment></Payment>
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
      {
        path: "/dashboard/allBuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allSellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
