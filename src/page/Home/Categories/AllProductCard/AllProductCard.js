import React from "react";

const AllProductCard = ({ product, setModalData }) => {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg w-full shadow-lg bg-white ">
        <div>
          <img className="w-full h-[300px]" src={product.img} alt="" />
        </div>
        <div className="p-5">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {product.productName}
          </h5>
          <div className="text-start">
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-semibold mb-4">
                Stutas : {product.stutas}
              </p>
              <p className="text-gray-700 font-semibold mb-4">Veryfied</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-semibold mb-4">
                Orginal : ${product.orginalPrice}
              </p>
              <p className="text-gray-700 font-semibold mb-4">
                Sell : ${product.resalePrice}
              </p>
            </div>
            <p className="text-gray-700 font-semibold mb-4">
              Use : {product.use}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Post : {product.post}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Seller Name : {product.sellerName}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Seller Number : {product.sellerNumber}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Location : {product.location}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Description : {product.description}
            </p>
          </div>
          <label
            onClick={() => setModalData(product)}
            type="button"
            htmlFor="booking-modal"
            className=" inline-block px-6 py-2.5 w-full text-center bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            booking
          </label>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
