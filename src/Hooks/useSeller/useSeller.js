import React, { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`https://watches-resale-warehouse-server.vercel.app/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
