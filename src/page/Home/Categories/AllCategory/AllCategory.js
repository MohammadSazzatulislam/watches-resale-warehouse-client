import React from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import AllProductCard from "../AllProductCard/AllProductCard";

const AllCategory = () => {
  const allProduct = useLoaderData();
  
    if (allProduct) {
        <Loading></Loading>
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3">
      {allProduct.map((product) => (
        <AllProductCard key={product._id} product={product}></AllProductCard>
      ))}
    </div>
  );
};

export default AllCategory;
