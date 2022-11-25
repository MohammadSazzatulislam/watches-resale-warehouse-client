import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const Modal = ({ modalData, setModalData }) => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const { logInUser } = useContext(AuthContext);

    const handleBooked = (data) => {};





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
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <form onSubmit={handleSubmit(handleBooked)}>
            {/* <!-- Email input --> */}
            <div className="mb-6">
              <p className="text-sm">Email</p>

              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Email address"
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>

            {/* <!-- Password input --> */}
            <div className="mb-6">
              <p className="text-sm">Password</p>

              <input
                {...register("password", { required: true })}
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Password"
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div className="text-center lg:text-left">
              <input
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
