import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Loading from "../Components/Loading/Loading";
import useSeller from "../Hooks/useSeller/useSeller";
import useBuyer from "../Hooks/useBuyer/useBuyer";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import {
  FaPlus,
  FaDollarSign,
  FaShoppingCart,
  FaShapes,
  FaUserFriends,
  FaShare,
} from "react-icons/fa";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isSeller, ] = useSeller(user?.email);
  const [isBuyers, ] = useBuyer(user?.email);
  const [isAdmins, ] = useAdmin(user?.email);

  if (!user) {
   return <Loading></Loading>
  }

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
          <label
            htmlFor="dashboard-drawer"
            className=" bg-blue-400  w-16 flex justify-center items-center rounded-full border-none absolute bottom-0  right-5 drawer-button lg:hidden"
          >
            <FaShare></FaShare>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-3 w-80 bg-white shadow-lg ">
            {/* <!-- Sidebar content here --> */}
            {isBuyers && (
              <>
                <li >
                  <Link to="/dashboard/myOrder">
                    <FaShoppingCart></FaShoppingCart>
                    <span>My Orders</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myWishList">
                    <FaDollarSign></FaDollarSign>
                    <span>My WishList</span>
                  </Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li >
                  <Link to="/dashboard/myProduct">
                    <FaShapes></FaShapes>
                    <span>My Product</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addAProduct">
                    <FaPlus></FaPlus>
                    <span>Add a Product</span>
                  </Link>
                </li>
              </>
            )}
            {isAdmins && (
              <>
                <li>
                  <Link to="/dashboard/allBuyers">
                    <FaUserFriends></FaUserFriends>
                    <span>All Buyers</span>
                  </Link>
                </li>
                <li >
                  <Link to="/dashboard/allSellers">
                    <FaUserFriends></FaUserFriends>
                    <span>All Sellers</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
