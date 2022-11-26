import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Modal = ({ modalData, setModalData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  console.log(modalData)

  const handleBooked = (data) => {
    const modalInfo = {
      category: modalData.category,
      productName: modalData?.productName,
      userName: data.name,
      userEmail: data.email,
      sellPrice: data.price,
      phone: data.phone,
      location: data.location,
      stutas: "stock out",
    };

    fetch(`http://localhost:5000/product/${modalData._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(modalInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err.message));

    setModalData(null);
  };


  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{modalData?.productName}</h3>
          <form onSubmit={handleSubmit(handleBooked)}>
            {/* <!-- name input --> */}
            <div className="mb-6">
              <p className="text-sm">Name</p>

              <input
                {...register("name")}
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="user name"
              />
            </div>
            {/* <!-- Email input --> */}
            <div className="mb-6">
              <p className="text-sm">Email</p>

              <input
                {...register("email")}
                type="email"
                readOnly
                defaultValue={user?.email}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Email address"
              />
            </div>
            {/* <!-- price input --> */}
            <div className="mb-6">
              <p className="text-sm">Price</p>

              <input
                {...register("price")}
                type="text"
                readOnly
                defaultValue={modalData.resalePrice}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="price"
              />
            </div>
            {/* <!-- phone input --> */}
            <div className="mb-6">
              <p className="text-sm">phone</p>

              <input
                {...register("phone", { required: true })}
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="phone"
              />
              {errors.phone && <span>{errors.phone.message}</span>}
            </div>
            {/* <!-- loaction input --> */}
            <div className="mb-6">
              <p className="text-sm">Location</p>

              <input
                {...register("location", { required: true })}
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="location"
              />
              {errors.location && <span>{errors.location.message}</span>}
            </div>

            <div className="text-center ">
              <input
                type="submit"
                className="inline-block w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                value="Booke Now"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
