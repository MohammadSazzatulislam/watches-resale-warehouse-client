import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ category }) => {
  return (
    <Link to={`/allCategory/${category.name}`}>
      <div className=" w-full p-4  rounded border hover:shadow-lg">
        <div className="flex justify-center items-center flex-col ">
          <img className="w-full h-60 rounded" src={category.img} alt="" />
          <div className="flex justify-center items-center flex-col mt-5 mb-5">
            <p className="text-sm lg:text-2xl md:text-md font-semibold leading-none text-gray-800">
              {category.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;