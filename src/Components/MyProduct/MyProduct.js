import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyProductCard from "../MyProductCard/MyProductCard";
import Swal from "sweetalert2";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData", user?.email],
    queryFn: () =>
      fetch(
        `https://watches-resale-warehouse-server.vercel.app/addProduct/${user?.email}`,
        {
          headers: {
            authorization: localStorage.getItem("watchToken"),
          },
        }
      ).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://watches-resale-warehouse-server.vercel.app/addProduct/${id}`,
          {
            method: "DELETE",
            headers: {
              authorization: localStorage.getItem("watchToken"),
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              refetch();
            }
            console.log(data);
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
      {data.map((product) => (
        <MyProductCard
          key={product._id}
          handleDelete={handleDelete}
          product={product}
        ></MyProductCard>
      ))}
    </div>
  );
};

export default MyProduct;
