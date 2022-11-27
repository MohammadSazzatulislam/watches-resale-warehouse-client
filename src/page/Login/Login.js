import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logInUser, googleSignInUser } = useContext(AuthContext);
  const [logError, setLogError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handlelogin = (data) => {
    setLogError("");
    logInUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        setLogError(error.message);
      });
  };

  const handleGoogleSignUP = () => {
    googleSignInUser(googleProvider)
      .then((result) => {
        const user = result.user;
        googleUserInfo(user?.displayName, user?.email);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const googleUserInfo = (name, email) => {
    const users = {
      name,
      email,
      option: "Buyers",
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(from, { replace: true });
      });
  };

  return (
    <section className="h-[750px] lg:h-screen mb-28  md:h-[900px]">
      <div className="lg:px-6 w-full h-screen text-gray-800">
        <div className="flex lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt=""
            />
          </div>
          <div className="lg:w-5/12 md:w-full w-full">
            <form onSubmit={handleSubmit(handlelogin)}>
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
                {logError && (
                  <span className="text-red-500 text-sm">{logError}</span>
                )}
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-gray-800">
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <input
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  value="Login"
                />
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Dont't have an account?
                  <Link
                    to="/signup"
                    href="#!"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">Or</p>
            </div>
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <p className="text-lg mb-0 mr-4">Sign in with</p>
              <button
                onClick={handleGoogleSignUP}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                {/* <!-- google --> */}
                <FaGoogle></FaGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
