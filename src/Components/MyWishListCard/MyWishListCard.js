import React from 'react';
import { Link } from 'react-router-dom';

const MyWishListCard = ({ book}) => {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg w-full shadow-lg bg-white ">
        <div className="p-5">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {book.productName}
          </h5>
          <div className="text-start">
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-semibold mb-4">
                Buy : {book.sellPrice}
              </p>
            </div>
            <p className="text-gray-700 font-semibold mb-4">
              Name : {book.userName}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Email : {book.userEmail}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Phone: {book.phone}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Location: {book.location}
            </p>
          </div>
          <Link to={`/dashboard/payment/${book._id}`}><label
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            pay
          </label></Link>
        </div>
      </div>
    </div>
  );
};

export default MyWishListCard;