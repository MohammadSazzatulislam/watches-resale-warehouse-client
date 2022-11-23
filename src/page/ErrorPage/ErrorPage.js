import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Link to="/">
              <button className=" bg-blue-600 px-4 py-2 boder-none rounded-sm text-white font-bold  hover:bg-blue-700  ">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
