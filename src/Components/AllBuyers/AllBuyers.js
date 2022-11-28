import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

import Swal from "sweetalert2";

const AllBuyers = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/users/buyers", {
        headers: {
          authorization: localStorage.getItem("watchToken"),
        },
      }).then((res) => res.json()),
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
        fetch(`http://localhost:5000/users/buyers/${id}`, {
          method: "DELETE",
          headers: {
            authorization: localStorage.getItem("watchToken"),
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              refetch();
            }
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            All Buyers
          </p>
        </div>
        <div className="bg-white shadow px-4  md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full  whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-cente">Name</th>
                <th className="font-normal text-cente">Email</th>
                <th className="font-normal text-cente">Delete</th>
              </tr>
            </thead>
            <tbody className="w-full  ">
              {data?.map((buyer) => (
                <tr
                  key={buyer._id}
                  className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                >
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {buyer.name}
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {buyer.email}
                    </p>
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(buyer._id)}
                      className="text-sm rounded  font-medium px-3 py-1 bg-red-400  leading-none text-white hover:text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBuyers;
