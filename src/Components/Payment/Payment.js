import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckOutForm/CheckOutForm";

// you must be your pk hide for .env file
const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_KEY);

const Payment = () => {
  const booking = useLoaderData();
  const { date, price, productName } = booking;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("watchToken"),
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((err) => console.log(err.message));
  }, [price]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Payment for {productName}</h1>
      <p>
        please pay <strong>${price}</strong> for your booking on {date}
      </p>
      <div className="w-96 h-52 mx-auto my-12 border p-3">
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
