import React from "react";
import { useQuery } from "@tanstack/react-query";
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
    <div className="my-28">
      <div className="pl-12">
        <h1 className="lg:text-3xl font-bold pl-4  text-2xl border-l-8 border-l-blue-800 mb-28">
          Our <br /> Letest Products
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 ">
        {data.map((category) => (
          <ProductsCard key={category._id} category={category}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
