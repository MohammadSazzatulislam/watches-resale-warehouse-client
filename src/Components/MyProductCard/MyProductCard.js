import React from "react";

const MyProductCard = ({ product, handleDelete }) => {
  console.log(product);
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg w-full shadow-lg bg-white text-center">
        <div>
          <img className="w-full h-[200px]" src={product.img} alt="" />
        </div>
        <div className="p-5">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {product.productName}
          </h5>
          <div className="text-start">
            <div className="flex justify-between items-centerv mb-4">
              <p className="text-gray-700 font-semibold">
                Stutas : {product.stutas}
              </p>
              {product.stutas === "In stock" && (
                <div className="flex gap-2 justify-center items-center">
                  <p className="text-gray-700 font-semibold ">verifyed</p>
                  <button className="text-gray-700 cursor-pointer font-semibold px-3 py-1 rounded-full text-sm bg-yellow-300  ">
                    Advertise
                  </button>
                </div>
              )}
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
              Seller Phone : {product.sellerNumber}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Location : {product.location}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Description : {product.description}
            </p>
          </div>
          <label
            onClick={() => handleDelete(product._id)}
            type="button"
            className=" inline-block px-6 py-2.5 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Delete
          </label>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
