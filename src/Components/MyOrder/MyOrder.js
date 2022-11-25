import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyOrder = () => {

    const {user} = useContext(AuthContext)

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
    <div>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            My Orders
          </p>
        </div>
        <div className="bg-white shadow px-4  md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full  whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-cente">Product</th>
                <th className="font-normal text-cente">Sell Price</th>
                <th className="font-normal text-cente">Name</th>
                <th className="font-normal text-cente">Email</th>
                <th className="font-normal text-cente">phone</th>
                <th className="font-normal text-cente">Location</th>
                <th className="font-normal text-cente">Paid/Un Paid</th>
                <th className="font-normal text-cente">Delete</th>
              </tr>
            </thead>
            <tbody className="w-full  ">
              {data?.map((order) => (
                <tr
                  key={order._id}
                  className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                >
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {order.productName}
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {order.sellPrice}
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {order.userName}
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {order.userEmail}
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {order.phone}
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {order.location}
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {order.location}
                    </p>
                  </td>
                  <td className="text-center">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {order.location}
                    </p>
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

export default MyOrder;
