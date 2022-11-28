import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckOutForm/CheckOutForm";

const stripePromise = loadStripe(process.env.SECRET_API_KEY);

const Payment = () => {
  const booking = useLoaderData();

  const { date, sellPrice, productName } = booking;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Payment for {productName}</h1>
      <p>
        please pay <strong>${sellPrice}</strong> for your booking on {date}
      </p>
      <div className="w-96 h-52 mx-auto my-12 border p-3">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
