import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AddAProduct = () => {

const {user} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const handleAdd = (data) => {
    const addProduct = {
      category: data.category,
      productName: data.productName,
      img: data.productImageURL,
      orginalPrice: data.orginalPrice,
      resalePrice: data.resalePrice,
      use: data.used,
      post: data.post,
      sellerName: data.sellerName,
      sellerEmail: data.sellerEmail,
      sellerNumber: data.sellerNumber,
      description: data.description,
      quality: data.quality,
      location: data.location,
      stutas : 'In stock'
    };

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/dashboard/myProduct");
        }
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <div className="w-full p-5">
          <h2
            aria-label="enter Personal data"
            className="text-3xl font-semibold leading-7 text-gray-800 "
          >
            Products Info
          </h2>
          <form onSubmit={handleSubmit(handleAdd)}>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Product Category
                </label>
                <select
                  {...register("category", { required: true })}
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Product Category"
                >
                  <option>Analog</option>
                  <option>Smart</option>
                  <option>Digital</option>
                  <option>Field</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Product Name
                </label>
                <input
                  {...register("productName", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Product Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Product ImageURL
                </label>
                <input
                  {...register("productImageURL", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Product imageURL"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Product Orginal Price
                </label>
                <input
                  {...register("orginalPrice", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Product Orginal Price"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Product Resale Price
                </label>
                <input
                  {...register("resalePrice", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Product Resale Price"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Product Used Years
                </label>
                <input
                  {...register("used", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Product Used Years"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Product post Date
                </label>
                <input
                  {...register("post", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Product Post Date"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Seller Name
                </label>
                <input
                  {...register("sellerName", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Seller Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Seller Number
                </label>
                <input
                  {...register("sellerNumber", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Seller Number"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Seller Email
                </label>
                <input
                  {...register("sellerEmail", { required: true })}
                  type="text"
                  tabIndex={0}
                  defaultValue={user?.email}
                  readOnly
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Seller Email"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Location
                </label>
                <input
                  {...register("location", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Location"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Product Description
                </label>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  tabIndex={0}
                  aria-label="Enter first name"
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Product Description"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Product Quality
                </label>
                <select
                  {...register("quality", { required: true })}
                  className=" bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  placeholder="Product Quality"
                >
                  <option>Excellent</option>
                  <option>Good</option>
                </select>
              </div>
            </div>
            <input
              type="submit"
              className="inline-block mt-7 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              value="Add Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
