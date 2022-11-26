import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyProductCard from "../MyProductCard/MyProductCard";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/addProduct/${user?.email}`).then(
        (res) => res.json()
      ),
  });
    
    console.log(data);

  if (isLoading) {
    return <Loading></Loading>;
  }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {data.map((product) => (
          <MyProductCard key={product._id} product={product}></MyProductCard>
        ))}
      </div>
    );
};

export default MyProduct;
