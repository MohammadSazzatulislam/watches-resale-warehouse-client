import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useBuyer from "../../Hooks/useBuyer/useBuyer";

const BuyersRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyers, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <Loading></Loading>;
  }

  if (user?.uid && isBuyers) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyersRoute;
