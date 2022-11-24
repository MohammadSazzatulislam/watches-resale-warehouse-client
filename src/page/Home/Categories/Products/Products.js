import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../../Components/Loading/Loading";
import ProductsCard from "../ProductsCard/ProductsCard";

const Products = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/category").then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  ">
      {data.map((category) => (
        <ProductsCard key={category._id} category={category}></ProductsCard>
      ))}
    </div>
  );
};

export default Products;
