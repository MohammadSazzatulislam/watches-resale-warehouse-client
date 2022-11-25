import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyWishListCard from "../MyWishListCard/MyWishListCard";

const MyWishList = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/product?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((book) => (
        <MyWishListCard key={book._id} book={book}></MyWishListCard>
      ))}
    </div>
  );
};

export default MyWishList;
