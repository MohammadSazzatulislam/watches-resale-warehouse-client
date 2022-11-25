import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const DashboardLayout = () => {

     const {user} = useContext(AuthContext)

      const { isLoading, error, data:users, refetch } = useQuery({
        queryKey: ["repoData", user?.email],
        queryFn: () =>
          fetch(`http://localhost:5000/users?email=${user?.email}`).then(
            (res) => res.json()
          ),
      });


      

  if (isLoading) {
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
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {users?.selectOption === "buyers" && (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li>
                  <Link to="dashboard/myWishList">My WishList</Link>
                </li>
              </>
            )}

            {users?.selectOption === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/myProduct">My Product</Link>
                </li>
                <li>
                  <Link to="dashboard/addAProduct">Add a Product</Link>
                </li>
                <li>
                  <Link to="dashboard/myBuyers">My Buyer</Link>
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
