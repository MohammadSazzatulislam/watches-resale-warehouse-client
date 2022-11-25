import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const DashboardLayout = () => {
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
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="dashboard/myWishList">My WishList</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
