import React, { useEffect, useState } from 'react';

const useBuyer = (email) => {
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
     const [isBuyers, setIsBuyers] = useState(false);

     useEffect(() => {
       if (email) {
         fetch(`http://localhost:5000/users/${email}`)
           .then((res) => res.json())
           .then((data) => {
             setIsBuyers(data.isBuyers);
             setIsBuyerLoading(false);
           });
       }
     }, [email]);
     return [isBuyers, isBuyerLoading];
};

export default useBuyer;