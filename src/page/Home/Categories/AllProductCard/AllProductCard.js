import React from "react";

const AllProductCard = ({ product }) => {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg shadow-lg bg-white text-center">
        <div className="">
          <img src={product.img} alt="" />
        </div>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">sdfgsdfg</h5>
          <p className="text-gray-700 text-base mb-4">sdfgsdf</p>
          <p className="text-gray-700 text-base mb-4">sdfgsdfg</p>
          <label
            // onClick={() => handleModalInfo(product._id)}
            type="button"
            htmlFor="product-modal"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            booking
          </label>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
