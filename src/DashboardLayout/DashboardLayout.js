import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Loading from "../Components/Loading/Loading";
import useSeller from "../Hooks/useSeller/useSeller";
import useBuyer from "../Hooks/useBuyer/useBuyer";
import useAdmin from "../Hooks/useAdmin/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isBuyers, isBuyerLoading] = useBuyer(user?.email);
  const[isAdmins, isAdminLoading] = useAdmin(user?.email);


  if (isSellerLoading || isBuyerLoading || isAdminLoading) {
    return <Loading></Loading>;
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
              className="btn btn-primary absolute bottom-0  right-5 drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              {/* <!-- Sidebar content here --> */}
              {isBuyers && (
                <>
                  <li>
                    <Link to="/dashboard/myOrders">My Orders</Link>
                  </li>
                  <li>
                    <Link to="dashboard/myWishList">My WishList</Link>
                  </li>
                </>
              )}
              {isSeller && (
                <>
                  <li>
                    <Link to="/dashboard/myProduct">My Product</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addAProduct">Add a Product</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myBuyers">My Buyer</Link>
                  </li>
                </>
              )}
              {isAdmins && (
                <>
                  <li>
                    <Link to="/dashboard/allBuyers">All Buyers</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/allSellers">All Sellers</Link>
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
